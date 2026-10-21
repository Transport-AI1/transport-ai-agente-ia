
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agente de IA para páginas web | Transport AI",
  description:
    "Descubre cómo un asistente de inteligencia artificial puede atender a tus clientes, resolver preguntas y mejorar tu página web con Transport AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
