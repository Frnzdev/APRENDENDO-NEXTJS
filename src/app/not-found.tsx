import Link from "next/link";

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-center font-bold">
        Que q se ta fazendo aqui trouxa??
      </h1>
      <p>RALA MEU FI</p>
      <Link
        className="p-2 bg-amber-400 rounded-md hover:bg-amber-300"
        href="./"
      >
        Volta pro seu lugar
      </Link>
    </div>
  );
}
