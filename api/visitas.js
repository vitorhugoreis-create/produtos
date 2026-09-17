/**
 * Server-side aggregate pageviews for the public /visitas report.
 * Uses ANALYTICS_API_TOKEN (Vercel access token) — never expose to the browser.
 */

const TEAM_ID = 'team_8P5NNCuqoK4I1jlv8dcDZwuz'

const PROJECTS = [
  { id: 'prj_h8Pcl04xhTlMGm8sSd6dIswEhMoO', key: 'hub', label: 'Hub (vitor-produtos)', url: 'https://vitor-produtos.vercel.app' },
  { id: 'prj_aclAtyqOf2uAcoqZABhzOOnFBxUb', key: 'propostaja', label: 'PropostaJá', url: 'https://propostaja-alpha.vercel.app' },
  { id: 'prj_eYONYBCUfVHrH2aNpTAQjhf560gi', key: 'webthrone', label: 'WebThrone', url: 'https://webthrone.vercel.app' },
]

function parisDayBounds(daysAgo = 0) {
  // Europe/Paris calendar day → UTC ISO for the Analytics API
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const now = new Date()
  const parts = fmt.formatToParts(now)
  const y = +parts.find((p) => p.type === 'year').value
  const m = +parts.find((p) => p.type === 'month').value
  const d = +parts.find((p) => p.type === 'day').value
  // Approximate: Paris is UTC+1/+2; use noon UTC of that calendar date ± offset via Temporal-less approach
  // Build local midnight by interpreting YYYY-MM-DD as Paris via Date + known offset from a probe.
  const probe = new Date(Date.UTC(y, m - 1, d, 12, 0, 0))
  const parisNoonStr = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    hour12: false,
  }).format(probe)
  const parisHourAtUtcNoon = parseInt(parisNoonStr, 10)
  const offsetHours = parisHourAtUtcNoon - 12 // e.g. +2 in summer
  const start = new Date(Date.UTC(y, m - 1, d - daysAgo, -offsetHours, 0, 0, 0))
  const end = new Date(Date.UTC(y, m - 1, d - daysAgo + 1, -offsetHours, 0, 0, 0))
  return { since: start.toISOString(), until: end.toISOString() }
}

async function visitCount(token, projectId, since, until) {
  const q = new URLSearchParams({
    teamId: TEAM_ID,
    projectId,
    since,
    until,
  })
  const res = await fetch(`https://api.vercel.com/v1/query/web-analytics/visits/count?${q}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    return { ok: false, status: res.status, error: body?.error?.code || body?.error?.message || 'query_failed', visitors: null, pageviews: null }
  }
  return {
    ok: true,
    visitors: body?.data?.visitors ?? 0,
    pageviews: body?.data?.pageviews ?? 0,
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  const token = process.env.ANALYTICS_API_TOKEN || process.env.VERCEL_TOKEN
  if (!token) {
    return res.status(200).json({
      ok: false,
      reason: 'token_missing',
      message: 'Analytics está ativo no Vercel; a API de relatório ainda não tem token server-side.',
      source: 'vercel-web-analytics',
      generatedAt: new Date().toISOString(),
      projects: [],
    })
  }

  const today = parisDayBounds(0)
  const yesterday = parisDayBounds(1)
  const generatedAt = new Date().toISOString()

  const projects = []
  for (const p of PROJECTS) {
    const [t, y] = await Promise.all([
      visitCount(token, p.id, today.since, today.until),
      visitCount(token, p.id, yesterday.since, yesterday.until),
    ])
    projects.push({
      key: p.key,
      label: p.label,
      url: p.url,
      today: t,
      yesterday: y,
    })
  }

  const anyOk = projects.some((p) => p.today.ok || p.yesterday.ok)
  return res.status(200).json({
    ok: anyOk,
    source: 'vercel-web-analytics',
    timezone: 'Europe/Paris',
    generatedAt,
    ranges: { today, yesterday },
    projects,
  })
}
