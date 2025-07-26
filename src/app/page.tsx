"use client";
import React, { useState } from "react";
import Aside from "@/components/Aside";
import Main from "@/components/Main";


export default function PaginaComAtividades() {
  const [paginaAtual, setPaginaAtual] = useState("Loja");

  return (
    <div className="flex h-screen w-full">
      <Aside paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      <Main paginaAtual={paginaAtual} />
    </div>
  );
}


// 2 formas de navegar

//Link vanegar entre paginas apnas sem função


//UseRouter  (só funciona co "use cliet" por ser propriedade do react) para verificar usar função...

//import { useRouter } from "next/navigation";


//nome da pasta entre parenteses tira ela de rota, para não precisar colocar na rota, ignora página


//Rota dinamica
//arquivo com [] no nome indica que é rota dinamica
//nome do aquivo deve ser o mesmo do parametro.

//export default async function({params}: {params: Promise<{id: string}>}){
// const {id} = await params;

//const response = await fetch('https://fakestoreapi.com/products/{id}');
//const data: userProps[] = await response.json();
//return(
//  <div>
//   <h1>id: {id}</h1>
// </div>
// )
//}


//arquivo loading.tsx pra carregamento de tela