import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
// import productos from '../../dataOrigin/data'
import curso1 from '../../assets/img/curso1.png'
import curso2 from '../../assets/img/curso2.png'
import curso3 from '../../assets/img/curso3.png'

const productos = [
  {
    id: '1',
    categoriId: '1',
    nombre: 'Producto 1',
    precio: '30',
    detalles: 'detalle del producto 1',
    image: curso1,
    descripcion: 'AAA BBBB CCCC',
    //  precio: 35000000,
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '2',
    categoriId: '1',
    nombre: 'Producto 2',
    precio: '30',
    detalles: 'detalle del producto 1',
    image: curso2,
    descripcion: 'AAA BBBB CCCC',
    // precio: 35000000,
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '3',
    categoriId: '2',
    nombre: 'Producto 3',
    precio: '30',
    detalles: 'detalle del producto 1',
    image: curso3,
    descripcion: 'AAA BBBB CCCC',
    //  precio: 35000000,
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '4',
    categoriId: '2',
    nombre: 'Producto 4',
    precio: '30',
    detalles: 'detalle del producto 1',
    image: curso1,
    descripcion: 'AAA BBBB CCCC',
    // precio: 35000000,
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '5',
    categoriId: '3',
    nombre: 'Producto 5',
    precio: '30',
    detalles: 'detalle del producto 1',
    image: curso2,
    descripcion: 'AAA BBBB CCCC',
    //  precio: 35000000,
    titulo: 'Mustang2',
    imagen: curso1
  },
  {
    id: '6',
    categoriId: '4',
    nombre: 'Producto 6',
    precio: '30',
    detalles: 'detalle del producto 1',
    image: curso3,
    descripcion: 'AAA BBBB CCCC',
    // precio: 35000000,
    titulo: 'Mustang2',
    imagen: curso1
  }
]

const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  const { productId } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(productos) // {0} es en realidad el futuro id que debiera tener esto para poder irlo a buscar
      }, 1)
    })

    productId ?
      getItem.then(
        function (value) {
          // console.log('La promesa devuelve: ' + value)
          // console.log('La promesa devuelve: ' + productId)
          setItem(value.filter(i => i.id === productId))
        },
        function (reason) {
          // rechazo
        }
      )
      :
      getItem.then(
        function (value) {
          console.log('La promesa devuelve: ' + value.titulo)
          setItem(value)
        },
        function (reason) {
          // rechazo
        }
      )
  }, [productId])

  return (
    <div>
      {item?.map((curso) => {
        return (
          <ItemDetail key={curso.id} item={curso} />
        );
      })
      }
    </div>
  )
}

export default ItemDetailContainer
