import { usuarioProps } from "../tipos";

export async function Salvar(form: usuarioProps, metodo: string ){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario`, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
    })
}