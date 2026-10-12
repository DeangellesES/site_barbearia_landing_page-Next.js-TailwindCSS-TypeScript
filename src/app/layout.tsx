import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbearia Navalha de Ouro | Corte, barba e cuidado masculino",
  description:
    "Barbearia tradicional com cortes clássicos e modernos, barba na navalha e atendimento de primeira. Agende seu horário em São Paulo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-barbearia-950 text-barbearia-100">
        {children}
      </body>
    </html>
  );
}
