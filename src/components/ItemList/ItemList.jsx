import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';

import curso1 from '../../assets/img/curso1.png'
import curso2 from '../../assets/img/curso2.png'
import curso3 from '../../assets/img/curso3.png'

const product = [
  {
    id: '1',
    categoriId: '1',
    nombre: 'Producto 1',
    precio: '320',
    detalles: 'detalle del producto 1',
    image: curso1,
    descripcion: 'AAA BBBB CCCC',
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '2',
    categoriId: '1',
    nombre: 'Producto 2',
    precio: '310',
    detalles: 'detalle del producto 1',
    image: curso2,
    descripcion: 'AAA BBBB CCCC',
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '3',
    categoriId: '2',
    nombre: 'Producto 3',
    precio: '330',
    detalles: 'detalle del producto 1',
    image: curso3,
    descripcion: 'AAA BBBB CCCC',
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '4',
    categoriId: '2',
    nombre: 'Producto 4',
    precio: '32',
    detalles: 'detalle del producto 1',
    image: curso1,
    descripcion: 'AAA BBBB CCCC',
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '5',
    categoriId: '3',
    nombre: 'Producto 5',
    precio: '305',
    detalles: 'detalle del producto 1',
    image: curso2,
    descripcion: 'AAA BBBB CCCC',
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '6',
    categoriId: '4',
    nombre: 'Producto 6',
    precio: '370',
    detalles: 'detalle del producto 1',
    image: curso3,
    descripcion: 'AAA BBBB CCCC',
    titulo: 'Mustang2',
    imagen: curso1
  }
]


const ItemList = ({ categoryIdApp }) => {
  const [productos, setDatosProductos] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setLoader(true);
      setTimeout(function () {
        resolve(product) // {0} es en realidad el futuro id que debiera tener esto para poder irlo a buscar
      }, 1000)
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

  console.log(`La categoria es: ${categoryIdApp}`);


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
