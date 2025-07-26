import Card from "@/components/Card";
import React from "react";

const usuarios = [
  { nome: "Luiz", email: "luiz@email.com" },
  { nome: "Ana", email: "ana@email.com" },
  { nome: "Caio", email: "caio@email.com" },
  { nome: "Rafaela", email: "rafaela@email.com" },
  { nome: "Rafaea", email: "rafala@email.com" }
];

function Detalhes() {
  alert("Detalhes do usuário");
}

export default function CardsOnly() {
  return (
    <main className="flex flex-1 flex-col p-4 h-screen overflow-auto ">

      {usuarios.map((user, index) => (
        <Card
          key={index}
        //   titulo={`Usuário ${index + 1}`}
          nome={`Nome: ${user.nome}`}
          email={user.email}
          funcao={Detalhes}
        />
      ))}
    </main>
  );
}
