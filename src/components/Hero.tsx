import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-barbearia-800/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(166,124,82,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(166,124,82,0.2), transparent 40%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <span className="inline-block rounded-full border border-barbearia-500/40 bg-barbearia-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-barbearia-300">
            Desde 2012
          </span>

          <h1 className="mt-6 font-display text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
            Seu estilo,
            <br />
            afiado na <span className="text-barbearia-400">navalha</span>.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-barbearia-200">
            Cortes clássicos e modernos, barba feita no capricho e um café na
            mão. Uma barbearia de bairro com atendimento de primeira.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="rounded-full bg-barbearia-500 px-7 py-3 text-sm font-semibold text-barbearia-950 transition-colors hover:bg-barbearia-400"
            >
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-barbearia-700 px-7 py-3 text-sm font-semibold text-barbearia-100 transition-colors hover:border-barbearia-400 hover:text-barbearia-400"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-barbearia-300">
            <div>
              <p className="font-display text-2xl font-bold text-barbearia-100">
                10+
              </p>
              <p>anos de história</p>
            </div>
            {/* <span className="h-10 w-px bg-barbearia-800" /> */}
            {/* <div>
              <p className="font-display text-2xl font-bold text-barbearia-100">
                4.9
              </p>
              <p>avaliação dos clientes</p>
            </div> */}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-barbearia-800 shadow-2xl">
            <Image
              src="/hero-barber.jpg"
              alt="Barbeiro cortando o cabelo de um cliente na barbearia"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-barbearia-700 bg-barbearia-900 px-6 py-4 shadow-xl sm:block">
            <p className="text-xs uppercase tracking-widest text-barbearia-400">
              Aberto hoje
            </p>
            <p className="font-display text-lg font-bold text-white">
              09h – 20h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
