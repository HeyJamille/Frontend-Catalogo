import React, { useEffect, useState } from 'react';
import { getItem, setItem } from '../services/localStorageFuncs';
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";
import Menu from "../components/Menu";

const Loja = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem('carrinhoYT') || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const objJson = await response.json();

        if (objJson) {
          setData(objJson);
          console.log("Dados recebidos da API:", objJson);
        } else {
          setData([]);
          console.log("Nenhum resultado retornado.");
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const updatedCart = cart.some((e) => e.id === obj.id)
      ? cart.filter((e) => e.id !== obj.id)
      : [...cart, obj];

    setCart(updatedCart);
    setItem('carrinhoYT', updatedCart);
  };

  // Spinner de carregamento
  if (loading) {
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-indigo-600">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-opacity-50 mb-4"></div>
      <p className="text-xl font-medium">Carregando dados...</p>
    </div>
  );
}

if (error) {
  return (
    <div className="text-center mt-20 text-red-600 text-lg">
      Erro ao carregar dados: {error}
    </div>
  );
}

if (!data || data.length === 0) {
  return (
    <div className="text-center mt-20 text-gray-700 text-lg">
      Nenhum dado encontrado.
    </div>
  );
}


  return (
    <>
      <Menu />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-10 text-center text-indigo-600">Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <article 
              key={item.id}
              className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain p-4 bg-gray-50 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">{item.title}</h3>
                <p className="text-xl font-bold text-indigo-600 mb-4">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => handleClick(item)}
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-medium
                    ${
                      cart.some((e) => e.id === item.id)
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }
                    transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
                  `}
                  aria-label={cart.some((e) => e.id === item.id) ? "Remover do carrinho" : "Adicionar ao carrinho"}
                >
                  {cart.some((e) => e.id === item.id)
                    ? <BsCartCheckFill size={20} />
                    : <BsCartPlusFill size={20} />}
                  {cart.some((e) => e.id === item.id) ? 'No Carrinho' : 'Adicionar'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Loja;
