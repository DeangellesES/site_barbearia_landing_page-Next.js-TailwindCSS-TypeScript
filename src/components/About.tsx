const diferenciais = [
  {
    titulo: "Barbeiro experiente",
    texto:
      "Profissional com mais de uma década de tesoura, máquina e navalha nas mãos.",
  },
  {
    titulo: "Ambiente acolhedor",
    texto:
      "Cadeira confortável, boa música, café fresco e uma conversa pra lá de boa.",
  },
  {
    titulo: "Produtos de qualidade",
    texto:
      "Pomadas, óleos e tônicos selecionados pra você sair daqui impecável.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="border-b border-barbearia-800/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-barbearia-400">
              Sobre a barbearia
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Tradição e capricho no mesmo lugar
            </h2>
            <p className="mt-6 leading-relaxed text-barbearia-200">
              A <strong className="text-barbearia-100">Navalha de Ouro</strong>{" "}
              nasceu em 2012 da vontade de trazer de volta a barbearia de
              bairro: sem pressa, com atenção aos detalhes e respeito por cada
              cliente. Aqui você é chamado pelo nome, escolhe o seu corte e sai
              com o visual do jeito que pediu.
            </p>
            <p className="mt-4 leading-relaxed text-barbearia-200">
              Atendemos homens, jovens e crianças em um espaço pensado para
              relaxar. Aceitamos agendamento por telefone, WhatsApp ou na porta
              — como preferir.
            </p>
          </div>

          <div className="grid gap-4">
            {diferenciais.map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-barbearia-800 bg-barbearia-900/50 p-6 transition-colors hover:border-barbearia-600"
              >
                <h3 className="font-display text-lg font-bold text-barbearia-100">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-barbearia-300">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
