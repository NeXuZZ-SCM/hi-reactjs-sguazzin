import React from 'react'
import curso1 from '../assets/img/404.gif'
import { useCart } from '../components//Context/CartContext';

const Item404 = () => {
  const producto = useCart();
  console.log("En ITEM 404" + { producto });
  return (
    <div Style="text-align:center;">
      <article>
        <h1>Lo siento, algunas paginas aun no estan terminadas</h1>
        <h2>404 ERROR</h2>
      </article>
      <p>La pagina que estas buscando no existe, es decir, si existe, en nuestros corazones, pero aun no se ha materializado</p>
      <figure><img src={curso1} /></figure>
    </div>
  )
}

export default Item404
