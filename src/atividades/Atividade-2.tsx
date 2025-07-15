import { useState } from "react";

export default function Atividade2() {
  const [textoEscondido, setTextoEscondido] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center rounded w-90 h-90 text-center bg-white text-black space-y-8">
      <p className="flex font-bold text-lg p-2">
        {!textoEscondido && "Clique no botão para esconder o texto!"}
      </p>

      {!textoEscondido && (
        <button
          className="bg-red-500 text-white px-8 py-2 rounded transition transform hover:scale-110 hover:shadow-lg cursor-pointer"
          onClick={() => setTextoEscondido(true)}
        >
          Esconder texto
        </button>
      )}

      {textoEscondido && (
        <button
          className="bg-green-500 text-black px-10 py-2 mt-[40px] rounded transition transform hover:scale-110 hover:shadow-lg cursor-pointer"
          onClick={() => setTextoEscondido(false)}
        >
          Mostrar texto
        </button>
      )}
    </div>
  );
}
