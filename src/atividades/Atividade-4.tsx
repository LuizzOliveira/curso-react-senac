"use client"
import { useState } from "react";

export default function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState<string>("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return;
    setTarefas([...tarefas, tarefa]);
    setTarefa("");
  };

  return (
    <div className="flex flex-col items-center justify-center rounded w-90 h-90 text-center bg-white text-black space-y-8 p-4">
        <input
        autoFocus
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

      <button onClick={adicionarTarefa} className="bg-blue-500 text-white px-10 py-2 rounded transition transform hover:scale-110 hover:shadow-lg cursor-pointer">Adicionar</button>
      <h1 className="font-bold ">Lista de tarefas</h1>
      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>{i} - {t}</li>
        ))}
      </ul>
    </div>
  );
}
