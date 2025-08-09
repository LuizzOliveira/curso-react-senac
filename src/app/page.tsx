import Link from "next/link"
import Formulario from "./componentes/Formulario"
import { usuarioProps } from "./tipos"

export default async function Index() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario`)
  const usuario: usuarioProps[] = await response.json()
  console.log(usuario)

  return (
    <div className="p-6 mx-30">
      {/* Botão de cadastro */}
      <Link
        className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded shadow-md transition"
        href="/cadastro"
      >
        <Formulario/>
      </Link>

      {/* Lista de usuários */}
      <div className="mt-6 space-y-4 flex flex-col  ">
        {usuario.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded shadow-sm"
          >
            <span className="text-gray-800 font-medium">
              {item.nome} - {item.email}
            </span>

            <Link
              href={`/editar/${item.id}`}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow-md transition"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}










// "use client";
// import React, { useState } from "react";
// import Aside from "@/components/Aside";
// import Main from "@/components/Main";


// export default function PaginaComAtividades() {
//   const [paginaAtual, setPaginaAtual] = useState("Loja");

//   return (
//     <div className="flex h-screen w-full">
//       <Aside paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
//       <Main paginaAtual={paginaAtual} />
//     </div>
//   );
// }


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