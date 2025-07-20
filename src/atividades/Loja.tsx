'use client';
import { useEffect, useState } from 'react';

type userProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function ChamadaAPI() {
  const [dados, setDados] = useState<userProps[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: userProps[] = await response.json();
        setDados(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-8 justify-center">
      {dados.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between w-full h-120 sm:w-[48%] md:w-[31%] lg:w-[23%]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-45 w-full object-contain rounded-lg"
          />
          <h2 className="text-[16px] font-semibold">{item.title}</h2>
          <p className="text-green-600">R$ {item.price}</p>
          <p className="text-sm text-gray-600 max-h-20 overflow-hidden">{item.description}</p>

          <button
            className="mt-2 flex items-center justify-center gap-2 text-[12px]
              bg-blue-500 hover:bg-blue-600 active:bg-blue-800 cursor-pointer
              text-white px-2 py-1 rounded-md font-semibold
              transition-colors duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="button"
          >
            Ver Detalhes
          </button>
        </div>
      ))}
    </div>
  );
}
