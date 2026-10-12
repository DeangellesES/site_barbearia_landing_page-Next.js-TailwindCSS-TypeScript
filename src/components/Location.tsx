const horarios = [
  { dia: "Segunda a sexta", hora: "09h – 20h" },
  { dia: "Sábado", hora: "08h – 18h" },
  { dia: "Domingo", hora: "Fechado" },
];

export default function Location() {
  return (
    <section id="localizacao" className="border-b border-barbearia-800/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-barbearia-400">
              Localização
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Venha nos visitar
            </h2>

            <div className="mt-8 space-y-5 text-barbearia-200">
              <p className="flex items-start gap-3">
                <span className="text-barbearia-400">📍</span>
                <span>
                  Rua das Tesouras, 123 — Loja 4
                  <br />
                  Vila Mariana, São Paulo – SP
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-barbearia-400">📞</span>
                <p
                  // href="tel:+5511999990000"
                  className="transition-colors hover:text-barbearia-400"
                >
                  (11) 99999-0000
                </p>
              </p>
              <div className="flex items-center gap-3">
                <span className="text-barbearia-400">✉️</span>
                <p
                  // href="mailto:contato@navalhadeouro.com.br"
                  className="transition-colors hover:text-barbearia-400"
                >
                  contato@navalhadeouro.com.br
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-barbearia-800">
              {horarios.map((h) => (
                <div
                  key={h.dia}
                  className="flex items-center justify-between border-b border-barbearia-800 px-5 py-3 text-sm last:border-b-0"
                >
                  <span className="text-barbearia-200">{h.dia}</span>
                  <span className="font-semibold text-barbearia-100">
                    {h.hora}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-3xl border border-barbearia-800 bg-barbearia-900/50">
            <iframe
              title="Mapa da Barbearia Navalha de Ouro"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.645%2C-23.595%2C-46.625%2C-23.580&layer=mapnik&marker=-23.5875%2C-46.635"
              className="h-full min-h-[320px] w-full opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
