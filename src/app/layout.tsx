import { Metadata } from "next";
import { Header } from "./components/header/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aula - aula de  NEXT.JS do zero ",
  description: "Aprendendo NEXT.JS e REACT COM SUJEITO PROJRAMADOR",
  openGraph: {
    title: "Aprenda Comigo",
    description: "Para de ser burro",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
