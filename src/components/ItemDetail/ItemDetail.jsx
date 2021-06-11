import { React, useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import ItemCount from '../ItemCount/ItemCount';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import { useCart } from '../Context/CartContext';

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
  const classes = useStyles();
  const [cantidad, setCantidad] = useState(0);
  const [finalizaCompra, setFinalizaCompra] = useState(false);
  const cart = useCart();

  const modificarCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const handleClick = () => {
    // setCantidad(cantidad);
    setFinalizaCompra(true);
  }
  const addNewProduct = () => {
    cart.addItem({ name: item.titulo, price: item.precio, quantity: cantidad });
    // console.log(item.titulo + " " + item.precio + " " + cantidad);
  };


  // console.log(item);
  return (
    <div className={classes.contenedorDetalle} align="center">
      <img className={classes.imagen} src={item.imagen} alt="productoX" />
      <div className={classes.descripcion} >
        <h1>{item.titulo}</h1>
        <span>{item.descripcion}</span>
        <h4>{item.precio}</h4>
        <ItemCount stock={5} initial={1} onAdd={modificarCantidad} />

        {finalizaCompra == false ?
          < Button variant="outlined" color="secondary" onClick={handleClick}>
            Agregar al carrito (
          {cantidad}
          )
          {' '}
          </Button>
          :
          <Button variant="outlined" color="secondary" onClick={addNewProduct} component={Link} to={'/cart'}>
            Terminar mi compra
        </Button>
        }
      </div>
    </div >

  );
};

export default ItemDetail;
