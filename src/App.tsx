import { useState } from 'react'

type Lang = 'pt' | 'en'

const copy = {
  pt: {
    brand: 'Vitor Reis',
    navProducts: 'Produtos',
    navContact: 'Contacto',
    navReport: 'Relatório',
    heroEyebrow: 'Portfólio de ferramentas',
    heroTitle: 'Produtos de Vitor Reis',
    heroSub:
      'Ferramentas simples e úteis — propostas comerciais em português e ranking competitivo para sites. Feitas em Portugal, prontas a usar.',
    heroCta: 'Ver produtos',
    productsTitle: 'Dois produtos. Um objetivo: poupar-te tempo.',
    productsSub: 'Ambos estão live. Clica e experimenta.',
    live: 'Live',
    openApp: 'Abrir app',
    learnMore: 'Saber mais',
    projaName: 'PropostaJá',
    projaPitch:
      'Gera propostas comerciais profissionais em português (pt-PT) em segundos. Ideal para freelancers e pequenos negócios.',
    projaFree: 'Grátis: 3 propostas / mês',
    projaPro: 'Pro: 9,90€ via MB Way',
    projaNote: 'Após pagamento, pede o código de ativação no WhatsApp.',
    throneName: 'WebThrone',
    thronePitch:
      'Disputa a coroa do ranking de sites. Sobe na tabela, ganha visibilidade e mostra que o teu projeto manda.',
    thronePay: 'Paga via MB Way ou Revolut',
    throneNote: 'Depois do pagamento, contacta no WhatsApp para ativar.',
    contactTitle: 'Contacto & pagamentos',
    contactSub: 'Dúvidas, ativação Pro ou suporte — fala comigo.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    revolut: 'Revolut',
    mbway: 'MB Way',
    footerNote: 'Feito por Vitor Reis · Portugal',
    rights: 'Todos os direitos reservados.',
  },
  en: {
    brand: 'Vitor Reis',
    navProducts: 'Products',
    navContact: 'Contact',
    navReport: 'Report',
    heroEyebrow: 'Tool portfolio',
    heroTitle: "Vitor Reis' Products",
    heroSub:
      'Simple, useful tools — Portuguese freelance proposals and competitive site ranking. Built in Portugal, ready to use.',
    heroCta: 'See products',
    productsTitle: 'Two products. One goal: save you time.',
    productsSub: 'Both are live. Click and try them.',
    live: 'Live',
    openApp: 'Open app',
    learnMore: 'Learn more',
    projaName: 'PropostaJá',
    projaPitch:
      'Generate professional commercial proposals in Portuguese (pt-PT) in seconds. Built for freelancers and small businesses.',
    projaFree: 'Free: 3 proposals / month',
    projaPro: 'Pro: €9.90 via MB Way',
    projaNote: 'After payment, request your activation code on WhatsApp.',
    throneName: 'WebThrone',
    thronePitch:
      'Bid for the crown in a competitive site ranking. Climb the board, get visibility, and show your project rules.',
    thronePay: 'Pay via MB Way or Revolut',
    throneNote: 'After payment, message on WhatsApp to activate.',
    contactTitle: 'Contact & payments',
    contactSub: 'Questions, Pro activation, or support — reach out.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    revolut: 'Revolut',
    mbway: 'MB Way',
    footerNote: 'Built by Vitor Reis · Portugal',
    rights: 'All rights reserved.',
  },
} as const

const LINKS = {
  proja: 'https://propostaja-alpha.vercel.app',
  throne: 'https://webthrone.vercel.app',
  email: 'mailto:vitorui999@hotmail.com',
  whatsapp: 'https://wa.me/351913554990',
  revolut: 'https://revolut.me/v_reis82',
} as const

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 p-0.5 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setLang('pt')}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === 'pt' ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-pressed={lang === 'pt'}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === 'en' ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}

function ProjaPreview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900/90 px-3 py-2">
        <span className="size-2 rounded-full bg-rose-500/80" />
        <span className="size-2 rounded-full bg-amber-400/80" />
        <span className="size-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 truncate text-[10px] text-slate-500">propostaja-alpha.vercel.app</span>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-28 rounded bg-blue-500/80" />
          <div className="h-6 w-16 rounded-md bg-blue-600/90" />
        </div>
        <div className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-3 space-y-2">
          <div className="h-2 w-20 rounded bg-slate-600" />
          <div className="h-8 rounded-md bg-slate-700/60" />
          <div className="h-2 w-24 rounded bg-slate-600" />
          <div className="h-8 rounded-md bg-slate-700/60" />
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="h-8 rounded-md bg-slate-700/50" />
            <div className="h-8 rounded-md bg-slate-700/50" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-8 flex-1 rounded-md bg-blue-600" />
          <div className="h-8 w-20 rounded-md bg-slate-700" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
    </div>
  )
}

function ThronePreview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-amber-900/40 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-amber-900/30 bg-slate-950/80 px-3 py-2">
        <span className="size-2 rounded-full bg-rose-500/80" />
        <span className="size-2 rounded-full bg-amber-400/80" />
        <span className="size-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 truncate text-[10px] text-slate-500">webthrone.vercel.app</span>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <div className="text-center">
          <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full bg-amber-500/20 text-lg">
            👑
          </div>
          <div className="mx-auto h-3 w-32 rounded bg-amber-400/70" />
          <div className="mx-auto mt-2 h-2 w-40 rounded bg-slate-600" />
        </div>
        <div className="space-y-1.5">
          {[
            { rank: '1', w: 'w-full', gold: true },
            { rank: '2', w: 'w-[80%]', gold: false },
            { rank: '3', w: 'w-[60%]', gold: false },
          ].map((row) => (
            <div
              key={row.rank}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
                row.gold
                  ? 'border-amber-500/40 bg-amber-500/10'
                  : 'border-slate-700/50 bg-slate-800/40'
              }`}
            >
              <span className={`text-xs font-bold ${row.gold ? 'text-amber-300' : 'text-slate-400'}`}>
                #{row.rank}
              </span>
              <div className={`h-2 rounded ${row.w} ${row.gold ? 'bg-amber-400/60' : 'bg-slate-600'}`} />
            </div>
          ))}
        </div>
        <div className="h-8 rounded-md bg-amber-500/90" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('pt')
  const t = copy[lang]
  const year = new Date().getFullYear()

  return (
    <div className="min-h-svh bg-slate-950 text-slate-100">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-violet-500 text-sm text-slate-950">
              VR
            </span>
            <span className="hidden sm:inline">{t.brand}</span>
          </a>
          <nav className="flex items-center gap-3 sm:gap-5 text-sm text-slate-300">
            <a href="#produtos" className="hover:text-white transition">
              {t.navProducts}
            </a>
            <a href="#contacto" className="hover:text-white transition">
              {t.navContact}
            </a>
            <a href="/visitas" className="hover:text-white transition">
              {t.navReport}
            </a>
            <LangToggle lang={lang} setLang={setLang} />
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">
            {t.heroEyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {t.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
            >
              {t.heroCta}
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
            >
              WhatsApp
            </a>
          </div>
        </section>

        {/* Products */}
        <section id="produtos" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.productsTitle}
            </h2>
            <p className="mt-2 text-slate-400">{t.productsSub}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* PropostaJá */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl transition hover:border-blue-500/40">
              <div className="p-4 sm:p-5">
                <ProjaPreview />
              </div>
              <div className="flex flex-1 flex-col gap-4 border-t border-slate-800 px-5 pb-5 pt-4 sm:px-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{t.projaName}</h3>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                        {t.live}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.projaPitch}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> {t.projaFree}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> {t.projaPro}
                  </li>
                  <li className="text-xs text-slate-500">{t.projaNote}</li>
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  <a
                    href={LINKS.proja}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:flex-none"
                  >
                    {t.openApp} →
                  </a>
                  <a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>

            {/* WebThrone */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl transition hover:border-amber-500/40">
              <div className="p-4 sm:p-5">
                <ThronePreview />
              </div>
              <div className="flex flex-1 flex-col gap-4 border-t border-slate-800 px-5 pb-5 pt-4 sm:px-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{t.throneName}</h3>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                      {t.live}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.thronePitch}</p>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> {t.thronePay}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> MB Way 913554990 · Revolut @v_reis82
                  </li>
                  <li className="text-xs text-slate-500">{t.throneNote}</li>
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  <a
                    href={LINKS.throne}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 sm:flex-none"
                  >
                    {t.openApp} →
                  </a>
                  <a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="border-t border-slate-800/80 bg-slate-900/30">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.contactTitle}
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">{t.contactSub}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href={LINKS.email}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-sky-500/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.email}</p>
                <p className="mt-1 break-all text-sm font-medium text-sky-400">vitorui999@hotmail.com</p>
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-emerald-500/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.whatsapp}</p>
                <p className="mt-1 text-sm font-medium text-emerald-400">+351 913 554 990</p>
              </a>
              <a
                href={LINKS.revolut}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-violet-500/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.revolut}</p>
                <p className="mt-1 text-sm font-medium text-violet-400">@v_reis82</p>
              </a>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.mbway}</p>
                <p className="mt-1 text-sm font-medium text-amber-400">913554990</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-medium text-slate-300">{t.footerNote}</p>
            <p className="mt-1 text-xs text-slate-500">
              © {year} Vitor Reis. {t.rights}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <a href={LINKS.proja} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              PropostaJá
            </a>
            <a href={LINKS.throne} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              WebThrone
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
              WhatsApp
            </a>
            <a href={LINKS.email} className="hover:text-sky-400">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
