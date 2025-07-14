"use client";
import React, { useState } from "react";
import Aside from "@/components/Aside";
import Main from "@/components/Main";

export default function PaginaComAtividades() {
  const [paginaAtual, setPaginaAtual] = useState("atividade1");

  return (
    <div className="flex h-screen w-full">
      <Aside paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      <Main paginaAtual={paginaAtual} />
    </div>
  );
}
