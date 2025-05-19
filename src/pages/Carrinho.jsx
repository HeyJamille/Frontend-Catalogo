import React, { useState } from 'react'

// Services
import { getItem, setItem } from '../services/localStorageFuncs';

// React icons
import { BsCartDashFill } from "react-icons/bs";

// Components
import Menu from "../components/Menu"

const Carrinho = () => {
  const [data, setData ] = useState(getItem('carrinhoYt') || []); 

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem('carrinhoYt', arrFilter);
  }

  const subtotal = data.reduce((acc, cur) => acc + cur.price, 0) // Faz o cálculo do subtotal

  return (
    <main>
      <Menu />
      
      <h2 class="text-center my-5">{`Subtotal: R$: ${subtotal.toFixed(2)}`}</h2> 

      <article class="flex flex-row justify-center items-center flex-wrap gap-5 m-[5%]" >
      {
        data.map((e) =>
        <section class="w-80"> 
          <div key={e.id} class="flex text-center justify-center items-center flex-col gap-3 p-5 h-[340px] border-[#c2c1c1] border-solid border-[1px]">
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="imagem" class="h-40 w-40 text-center" />
            <h4>R$: {e.price.toFixed(2)}</h4>

            <button onClick={() => removeItem(e)}>
              <BsCartDashFill class="h-7 w-7 text-cyan-800"/>
            </button>
          </div>
        </section>
      )}
      </article>
    </main> 
  )
}

export default Carrinho