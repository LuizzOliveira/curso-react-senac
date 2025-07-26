'use client';
import React, { useEffect, useState } from "react";

type userProps = {
    id:number,
    name: string,
    username:string,
    email:string
  }

export default function ChamadaAPI() {
  const [dados, setDados] = useState<userProps[]>([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const dados: userProps[] = await response.json();
      setDados(dados);
    };

    fetchUsuarios();
  }, []);

return (
    <div className="flex flex-wrap gap-4 p-8">
    {dados.map((item)=> (
        <div className="bg-white rounded shadow-md p-6 flex w-full sm:w-[48%] md:w-[31%] lg:w-[23%]" key={item.id}>
        <ul>
            <li>
            <h1>{item.id}</h1>
            </li>
            <li>
            <h1>{item.name}</h1>
            </li>
            <li>
            <h1>{item.username}</h1>
            </li>
            <li>
            <h1>{item.email}</h1>
            </li>
        </ul>
        </div>
    ))}

    </div>
);
}