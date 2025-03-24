"use client";

import { useState } from "react";

export function Button() {
  const [nome, setNome] = useState("Felipe Fornazeiro");

  function handleChangeName() {
    setNome("Frnz");
  }

  return (
    <div>
      <h2>@: {nome}</h2>
      <button
        onClick={handleChangeName}
        className="p-2 bg-amber-400 rounded-md text-sm"
      >
        ALTERAR NOME
      </button>
    </div>
  );
}
