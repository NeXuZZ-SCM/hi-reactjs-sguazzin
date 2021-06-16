import React from "react";
import { useDataContext } from "../Context/DataContext";


export default function Cart({ product }) {
  const carrito = useDataContext();
  return (
    <div className="Cart">
      <h2>Carrito</h2>
      {JSON.stringify(carrito.data)}

      {product}
      <button onClick={carrito.clear}>Limpiar Carrito</button>
    </div>
  );
}