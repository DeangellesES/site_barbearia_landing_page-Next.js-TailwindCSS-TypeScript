"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-barbearia-800/60 bg-barbearia-950/80 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-wide text-barbearia-100"
        >
          <span className="text-barbearia-400">✦</span>
          Navalha de Ouro
        </a>

        {/* Menu desktop */}
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

        {/* Ações */}
        <div className="flex items-center gap-3">

          {/* Botão Agendar - desktop */}
          <a
            href="#contato"
            className="hidden rounded-full bg-barbearia-500 px-5 py-2 text-sm font-semibold text-barbearia-950 transition-colors hover:bg-barbearia-400 md:inline-flex"
          >
            Agendar
          </a>

          {/* Botão hambúrguer - mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-barbearia-100 transition-colors hover:bg-barbearia-800/50 hover:text-barbearia-400 md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-barbearia-800/60 bg-barbearia-950/95 px-6 py-5 backdrop-blur md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-barbearia-200 transition-colors hover:text-barbearia-400"
              >
                {link.label}
              </a>
            ))}

            {/* Agendar - mobile */}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-barbearia-500 px-5 py-3 text-center text-sm font-semibold text-barbearia-950 transition-colors hover:bg-barbearia-400"
            >
              Agendar horário
            </a>

          </div>
        </nav>
      )}
    </header>
  );
}
