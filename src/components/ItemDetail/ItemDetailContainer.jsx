import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import product from "../../data.json";


const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  const { productId } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(product) // {0} es en realidad el futuro id que debiera tener esto para poder irlo a buscar
      }, 1)
    })

    productId ?
      getItem.then(
        function (value) {
          setItem(value.filter(i => i.id === parseInt(productId)))
        },
        function (reason) {
          // rechazo
        }
      )
      :
      getItem.then(
        function (value) {
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
          <ItemDetail
            key={curso.id} item={curso}
          />
        );
      })
      }
    </div>
  )
}

export default ItemDetailContainer
