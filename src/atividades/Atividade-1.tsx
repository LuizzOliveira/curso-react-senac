"use client"
import { useState } from "react";

export default function Atividade1() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  const cor = contador === 0 ? "bg-gray-400" : "bg-red-500";

  return (
    <div className="flex flex-col items-center justify-center rounded w-90 h-90 text-center bg-white text-black space-y-8">
      <h1 className="text-4xl font-bebas font-bold mb-15">CONTADOR</h1>

      <p className="flex justify-center text-4xl font-bold">{contador}</p>

      <div className="flex justify-center items-end gap-4 mt-4">
        <button
          onClick={incrementar}
          className="bg-blue-500 text-white px-10 py-2 rounded transition transform hover:scale-110 hover:shadow-lg cursor-pointer"
        >
          ▲
        </button>
        <button
          onClick={decrementar}
          className={`${cor} text-white px-10 py-2 rounded transition transform hover:scale-110 hover:shadow-lg cursor-pointer`}
        >
          ▼
        </button>
      </div>
    </div>
  );
}
