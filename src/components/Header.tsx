const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-barbearia-800/60 bg-barbearia-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-wide text-barbearia-100"
        >
          <span className="text-barbearia-400">✦</span>
          Navalha de Ouro
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-barbearia-200 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-barbearia-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full bg-barbearia-500 px-5 py-2 text-sm font-semibold text-barbearia-950 transition-colors hover:bg-barbearia-400"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
