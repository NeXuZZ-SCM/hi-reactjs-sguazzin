import React, { useContext } from 'react'
import curso1 from '../assets/img/404.gif'
import { useDataContext } from './Context/DataContext';
const Item404 = () => {

  // const { data } = useContext(DataContext)
  const carrito = useDataContext();

  return (
    <div Style="text-align:center;">
      <article>
        {JSON.stringify(carrito.data)}
        <h1>Lo siento, algunas paginas aun no estan terminadas</h1>
        <h2>404 ERROR</h2>
      </article>
      <p>La pagina que estas buscando no existe, es decir, si existe, en nuestros corazones, pero aun no se ha materializado</p>
      <figure><img src={curso1} /></figure>
    </div>
  )
}

export default Item404
