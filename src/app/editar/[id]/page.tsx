import Formulario from "@/app/componentes/Formulario";

export default async function Editar({params} : {params: Promise<{id:string}>}) {
    const {id} = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario/${id}`)
    const usuario = await response.json();
    console.log(usuario)

    return(
        <div>
            <Formulario id={usuario.id} nome={usuario.mome} email={usuario.email} />
        </div>
    )
}