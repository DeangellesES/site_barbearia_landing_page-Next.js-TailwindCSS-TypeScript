const servicos = [
  { nome: "Corte masculino", preco: "R$ 45", tempo: "30 min" },
  { nome: "Barba completa", preco: "R$ 35", tempo: "25 min" },
  { nome: "Corte + Barba", preco: "R$ 70", tempo: "50 min" },
  { nome: "Corte infantil", preco: "R$ 35", tempo: "25 min" },
  { nome: "Platinado / Descoloração", preco: "R$ 120", tempo: "1h30" },
  { nome: "Sobrancelha masculina", preco: "R$ 15", tempo: "10 min" },
  { nome: "Pigmentação de barba", preco: "R$ 40", tempo: "30 min" },
  { nome: "Relaxamento / Hidratação", preco: "R$ 50", tempo: "30 min" },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="border-b border-barbearia-800/60 bg-barbearia-900/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-barbearia-400">
            Serviços e preços
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Tudo que seu visual precisa
          </h2>
          <p className="mt-4 leading-relaxed text-barbearia-300">
            Valores fixos, sem surpresa. Pagamento em dinheiro, Pix e cartão.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {servicos.map((servico) => (
            <div
              key={servico.nome}
              className="flex items-center justify-between gap-4 rounded-2xl border border-barbearia-800 bg-barbearia-950/60 px-6 py-5 transition-colors hover:border-barbearia-600"
            >
              <div>
                <h3 className="font-semibold text-barbearia-100">
                  {servico.nome}
                </h3>
                <p className="text-xs text-barbearia-400">{servico.tempo}</p>
              </div>
              <span className="font-display text-xl font-bold text-barbearia-400">
                {servico.preco}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
