import { React, useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import ItemCount from '../ItemCount/ItemCount';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useDataContext } from '../Context/DataContext';

const useStyles = makeStyles((theme) => ({
  contenedorDetalle: {
    width: "100%",

  },
  imagen: {
    verticalAlign: 'top',
  },
  descripcion: {
    display: "inline-block",
    width: "50%"
  }
}));

const ItemDetail = ({ item }) => {

  const [data, setData] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const carrito = useDataContext();

  const classes = useStyles();

  const modificarCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const handleClick = () => {
    setData(true);
    carrito.addItem({
      nombre: item.nombre,
      cantidad: cantidad,
      precioTotal: item.precio,
    });
  }


  return (
    <div className={classes.contenedorDetalle} align="center">
      <img className={classes.imagen} src={item.image} alt="productoX" />
      <div className={classes.descripcion} >
        <h1>{item.nombre}</h1>
        <span>{item.descripcion}</span>
        <h4>{item.precio}</h4>
        <ItemCount stock={5} initial={1} onAdd={modificarCantidad} />

        {data == false ?
          < Button variant="outlined" color="secondary" onClick={handleClick}>
            Agregar al carrito (
          {cantidad}
          )
          {' '}
          </Button>
          :
          <Button variant="outlined" color="secondary" component={Link} to={'/cart'}>
            Terminar mi compra
        </Button>
        }
      </div>
    </div >

  );
};

export default ItemDetail;
