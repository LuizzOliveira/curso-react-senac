"use client"
import { useState } from "react";

export default function ContadorColorido() {
  const [vermelho, setVermelho] = useState(0);
  const [azul, setAzul] = useState(0);
  const [verde, setVerde] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center rounded w-90 h-90 text-center bg-white text-black space-y-8 p-4">
      <h2 className="font-bold text-xl">Contador de cliques em várias cores</h2>
      <div className="space-x-4">
        <button onClick={() => setVermelho(vermelho + 1)} className="bg-red-500 text-white px-4 py-2 rounded">
          Vermelho: {vermelho}
        </button>
        <button onClick={() => setAzul(azul + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Azul: {azul}
        </button>
        <button onClick={() => setVerde(verde + 1)} className="bg-green-500 text-white px-4 py-2 rounded">
          Verde: {verde}
        </button>
      </div>
    </div>
  );
}
