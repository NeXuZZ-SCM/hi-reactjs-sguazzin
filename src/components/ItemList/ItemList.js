import React from 'react'
import { useState, useEffect } from "react";
import Item from '../Item/Item';


var product = [
    {
      nombre: "Producto 1",
      precio: "30",
      detalles: "detalle del producto 1"
    },
    {
      nombre: "Producto 2",
      precio: "40",
      detalles: "Detalle del producto 2"
    },
  ];


const ItemList = () => {

    const [dataCripto, setdataCripto] = useState(null);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch("https://api.coincap.io/v2/assets")
                const data = await response.json();
                console.log(data);
                setdataCripto(data.data);
            } catch (error) {
                
            }
        }
        fetchResources();
    }, [])


    return (
        <div align="center" justify="center" alignItems="center">
             {dataCripto?.map((criptos) => {
                    return(
                        <Item id={criptos.id} rank={criptos.rank} symbol={criptos.symbol}>
                        {criptos.name}
                        </Item>
                    );
                })
            } 
        </div>
    )
}

export default ItemList
