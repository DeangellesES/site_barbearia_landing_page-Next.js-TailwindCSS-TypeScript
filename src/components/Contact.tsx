const redes = [
  { nome: "Instagram", href: "https://instagram.com", icone: "📸" },
  { nome: "Facebook", href: "https://facebook.com", icone: "👍" },
  { nome: "WhatsApp", href: "https://wa.me/5511999990000", icone: "💬" },
  { nome: "TikTok", href: "https://tiktok.com", icone: "🎵" },
];

export default function Contact() {
  return (
    <section id="contato" className="border-b border-barbearia-800/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-barbearia-700 bg-gradient-to-br from-barbearia-800/70 to-barbearia-950 p-8 md:p-14">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-barbearia-300">
                Agende seu horário
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Pronto para renovar o visual?
              </h2>
              <p className="mt-4 leading-relaxed text-barbearia-200">
                Chame no WhatsApp ou ligue e escolha o melhor horário. Se
                preferir, passe por aqui — a cadeira te espera.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/5511999990000"
                  className="rounded-full bg-barbearia-500 px-7 py-3 text-center text-sm font-semibold text-barbearia-950 transition-colors hover:bg-barbearia-400"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href="tel:+5511999990000"
                  className="rounded-full border border-barbearia-500 px-7 py-3 text-center text-sm font-semibold text-barbearia-100 transition-colors hover:border-barbearia-400 hover:text-barbearia-400"
                >
                  (11) 99999-0000
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-barbearia-200">
                  Siga a barbearia
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {redes.map((rede) => (
                    <a
                      key={rede.nome}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-barbearia-700 bg-barbearia-950/60 px-4 py-2 text-sm text-barbearia-200 transition-colors hover:border-barbearia-400 hover:text-barbearia-400"
                    >
                      <span aria-hidden>{rede.icone}</span>
                      {rede.nome}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-barbearia-700/70 bg-barbearia-950/70 p-6">
              <p className="font-display text-lg font-bold text-white">
                Fale com a gente
              </p>
              <form className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-1 block text-sm text-barbearia-300"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-barbearia-800 bg-barbearia-900/60 px-4 py-2.5 text-sm text-barbearia-100 placeholder:text-barbearia-500 focus:border-barbearia-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-1 block text-sm text-barbearia-300"
                  >
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-0000"
                    className="w-full rounded-lg border border-barbearia-800 bg-barbearia-900/60 px-4 py-2.5 text-sm text-barbearia-100 placeholder:text-barbearia-500 focus:border-barbearia-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-1 block text-sm text-barbearia-300"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={3}
                    placeholder="Serviço desejado e horário preferido"
                    className="w-full rounded-lg border border-barbearia-800 bg-barbearia-900/60 px-4 py-2.5 text-sm text-barbearia-100 placeholder:text-barbearia-500 focus:border-barbearia-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-barbearia-500 px-6 py-3 text-sm font-semibold text-barbearia-950 transition-colors hover:bg-barbearia-400"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
