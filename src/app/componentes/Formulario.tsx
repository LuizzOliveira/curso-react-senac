'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { usuarioProps } from "../tipos";
import { Salvar } from "../(servicos)/usuario";

export default function Formulario({ id, nome = "", email = "" }: usuarioProps) {
    const [usuarioId, setUsuarioId] = useState(id);
    const [usuarioNome, setUsuarioNome] = useState(nome);
    const [usuarioEmail, setUsuarioEmail] = useState(email);
    const rota = useRouter();

    async function Submit(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        const form = { id: usuarioId, nome: usuarioNome, email: usuarioEmail };

        try {
            const metodo = usuarioId ? "PUT" : "POST";
            await Salvar(form, metodo);
            rota.push("/");
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Erro ao enviar formulário");
        }
    }

    async function Deletar() {
        if (!usuarioId) return;
        if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: usuarioId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Erro: ${errorData.erro || "Erro desconhecido"}`);
                return;
            }

            rota.push("/");
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            alert("Erro ao excluir usuário");
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <form onSubmit={Submit} className="flex flex-col gap-5">
                <div>
                    <label htmlFor="nome" className="block mb-1 font-semibold text-gray-700">
                        Nome
                    </label>
                    <input
                        id="nome"
                        onChange={(e) => setUsuarioNome(e.target.value)}
                        value={usuarioNome}
                        type="text"
                        placeholder="Digite seu nome"
                        name="nome"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        onChange={(e) => setUsuarioEmail(e.target.value)}
                        value={usuarioEmail}
                        type="email"
                        placeholder="Digite seu email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-2 rounded transition"
                    >
                        Enviar
                    </button>

                    {usuarioId && (
                        <button
                            type="button"
                            onClick={Deletar}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
                        >
                            Excluir
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}