import React from 'react';
import { makeStyles } from '@material-ui/core';



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

  console.log(item);
  return (
    <div className={classes.contenedorDetalle} align="center">
      <img className={classes.imagen} src={item.imagen} alt="productoX" />
      <div className={classes.descripcion} >
        <h1>{item.titulo}</h1>
        <span>{item.descripcion}</span>
        <h4>{item.precio}</h4>
      </div>
    </div >

  );
};

export default ItemDetail;
