import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Martins — Desenvolvedor Frontend | React, Next.js & TypeScript",
  description:
    "Desenvolvedor Frontend com projetos reais entregues para clientes: e-commerces, apps mobile, plataformas web e sistemas IoT. Disponível para freelas e contratos PJ.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Eduardo Martins — Desenvolvedor Frontend",
    description:
      "Transformo ideias em interfaces que funcionam de verdade. Veja projetos reais em React, Next.js, TypeScript e Flutter.",
    images: ["/icon.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
