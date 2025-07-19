"use client"
import { useState } from "react";

export default function SimuladorDeLikes() {
  const [curtido, setCurtido] = useState(false);
  const [totalCurtidas, setTotalCurtidas] = useState(0);

  const alternarCurtida = () => {
    setCurtido(!curtido);
    setTotalCurtidas((prev) => prev + (curtido ? -1 : 1));
  };

  return (
    <div className="flex flex-col items-center justify-center rounded w-90 h-90 text-center bg-white text-black space-y-8 p-4">
      <h2 className="font-bold text-xl"> Simulador de Likes</h2>
      <button
        onClick={alternarCurtida}
        className={`px-4 py-2 rounded ${curtido ? "bg-red-600" : "bg-gray-400"} text-white`}
      >
        {curtido ? "Descurtir" : "Curtir"}
      </button>
      <p>Total de curtidas: {totalCurtidas}</p>
    </div>
  );
}
