'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingProduto from './loading';

type userProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

interface ProdutoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProdutoPage(props: ProdutoPageProps) {
  const router = useRouter();

  // Usamos React.use para "desembrulhar" o Promise dos params
  const params = React.use(props.params);
  const { id } = params;

  const [produto, setProduto] = useState<userProps | null>(null);
  const [loading, setLoading] = useState(true);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    async function fetchProduto() {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        await sleep(2000);
        if (!response.ok) {
          setProduto(null);
        } else {
          const data: userProps = await response.json();
          setProduto(data);
        }
      } catch {
        setProduto(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto();
  }, [id]);

  if (loading) {
    return <LoadingProduto />;
  }

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-md flex flex-col overflow-auto">
      <img
        src={produto.image}
        alt={produto.title}
        className="w-full mb-5 max-h-80 object-contain"
      />
      <h1 className="text-2xl font-bold mb-2">{produto.title}</h1>
      <p className="text-green-600 text-xl mb-4">R$ {produto.price}</p>
      <p className="text-gray-700 mb-6">{produto.description}</p>

      <button
        onClick={() => router.push('/')}
        className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Voltar para Produtos
      </button>
    </div>
  );
}
