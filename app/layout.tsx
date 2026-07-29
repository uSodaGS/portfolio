import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Gustavo Ribeiro | Desenvolvedor Full Stack",
  description:
    "Portfólio de Gustavo Ribeiro, Desenvolvedor Full Stack especializado em Next.js, React, TypeScript, Python e PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#09090B] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}