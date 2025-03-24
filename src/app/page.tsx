import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - aula de  NEXT.JS do zero ",
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

export const revalidate = 60;

export default function Home() {
  const random = Math.random() * 10;

  return (
    <div>
      <h1 className="text-red-400">Teste</h1>
      <h2 className="text-green-700">{random}</h2>
    </div>
  );
}
