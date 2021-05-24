import React from 'react'
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    
    const productos = [
        {
            imagen: "Ford1",
            titulo: "Mustang",
            descripcion: "AAA BBBB CCCC",
            precio: 35000000
        },
        {
            imagen: "Ford1",
            titulo: "Mustang",
            descripcion: "AAA BBBB CCCC",
            precio: 35000000
        },
        {
            imagen: "Ford1",
            titulo: "Mustang",
            descripcion: "AAA BBBB CCCC",
            precio: 35000000
        },
      ];
    
    const getItem = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(productos[0]); // {0} es en realidad el futuro id que debiera tener esto para poder irlo a buscar
      }, 3000);
    });
    getItem.then(
      function (value) {
        console.log("La promesa devuelve: " + value.titulo);
        setItem(value);
      },
      function (reason) {
        // rechazo
      }
    );

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
