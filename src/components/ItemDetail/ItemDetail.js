import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            {item.imagen}
            {item.titulo}
            {item.descripcion}
            {item.precio}
        </div>
    )
}

export default ItemDetail
