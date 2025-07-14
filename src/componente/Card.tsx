'use client';
import React from "react";
import { FiInfo } from "react-icons/fi"; // ícone info do Feather Icons

type CardProps = {
  titulo?: string;
  nome: string;
  email?: string;
  funcao?: () => void;
};

function NomeUsuario({ children }: { children: React.ReactNode }) {
  return <span className="text-[12px]">{children}</span>;
}

export default function Card({ titulo, nome, email, funcao }: CardProps) {
  const handleClick = funcao ?? (() => alert("Função não definida"));

  return (
    <div className="bg-white  h-screan shadow-md rounded-lg p-2 m-1
      "
    >
      <h1 className="font-bold text-[16px]">{titulo}</h1>
      <p>
        <NomeUsuario>{nome}</NomeUsuario>
      </p>

      {email && <p className=" mt-2 break-words text-[12px]">{email}</p>}

      <button
        onClick={handleClick}
        className="mt-2 flex items-center justify-center gap-2 text-[12px]
          bg-blue-500 hover:bg-blue-600 active:bg-blue-800 cursor-pointer
          text-white px-2 py-1 rounded-md font-semibold
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="button"
        aria-label={`Ver detalhes de ${nome}`}
      >
        Ver Detalhes <FiInfo size={18} />
      </button>
    </div>
  );
}
