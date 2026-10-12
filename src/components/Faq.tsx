const faq = [
  {
    pergunta: "Preciso agendar ou posso chegar sem aviso?",
    resposta:
      "Atendemos por ordem de chegada, mas o agendamento garante seu horário. Recomendamos agendar por telefone ou WhatsApp, principalmente aos sábados.",
  },
  {
    pergunta: "Quais formas de pagamento vocês aceitam?",
    resposta:
      "Aceitamos dinheiro, Pix, cartão de débito e crédito (com parcelamento a partir de R$ 100).",
  },
  {
    pergunta: "Vocês atendem crianças?",
    resposta:
      "Sim! Temos cadeirinha e paciência de sobra para o corte infantil, sem estresse para a criança nem para os pais.",
  },
  {
    pergunta: "Quanto tempo dura um corte?",
    resposta:
      "Em média 30 minutos. Serviços combinados (corte + barba) levam cerca de 50 minutos.",
  },
  {
    pergunta: "Tem estacionamento?",
    resposta:
      "Há vagas de estacionamento na rua em frente e um estacionamento conveniado a poucos metros, com desconto para clientes.",
  },
  {
    pergunta: "Vocês fazem corte em domicílio?",
    resposta:
      "Fazemos atendimento a domicílio para grupos (casamentos, eventos e empresas). Consulte valores e disponibilidade pelo WhatsApp.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="border-b border-barbearia-800/60 bg-barbearia-900/30"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-barbearia-400">
            Perguntas e respostas
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-barbearia-800 overflow-hidden rounded-2xl border border-barbearia-800">
          {faq.map((item) => (
            <details key={item.pergunta} className="group bg-barbearia-950/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-barbearia-100 transition-colors hover:text-barbearia-400">
                {item.pergunta}
                <span className="text-barbearia-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-barbearia-300">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
