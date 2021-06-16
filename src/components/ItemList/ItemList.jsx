import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import product from "../../data.json";



const ItemList = ({ categoryIdApp }) => {
  const [productos, setDatosProductos] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setLoader(true);
      setTimeout(function () {
        resolve(product) // {0} es en realidad el futuro id que debiera tener esto para poder irlo a buscar
      }, 1)
    })


    categoryIdApp ?
      getItem.then(
        function (value) {
          setDatosProductos(value.filter(i => i.categoriId === categoryIdApp))
          setLoader(false);
        },
        function (reason) {
          // rechazo
        }
      )
      :
      getItem.then(
        function (value) {
          setDatosProductos(value)
          setLoader(false);
        },
        function (reason) {
          // rechazo
        }
      )

  }, [categoryIdApp])

  // console.log(`La categoria es: ${categoryIdApp}`);


  return (
    <div align="center" justify="center" >
      {loader && <LinearProgress />}
      {!loader &&
        productos?.map((curso) => {
          return (
            <Item id={curso.id} key={curso.id} rank={curso.rank} symbol={curso.symbol} image={curso.image}>
              {curso.nombre}
            </Item>
          );
        })
      }

    </div>
  );
};

export default ItemList;
