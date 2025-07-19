"use client"
import { useState } from "react";

export default function Atividade3() {
  const [texto, setTexto] = useState("");

  return (
    <div className="flex flex-col items-center justify-center rounded w-90 h-90 text-center bg-white text-black space-y-8 p-4">
        <input
        autoFocus
        type="text"
        placeholder="Digite seu nome"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="border font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-400 rounded p-2 w-full max-w-md"
        />

      <p className="font-bold text-lg p-2">{texto}</p>
    </div>
  );
}

