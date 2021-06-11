import { React, useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, } from '@material-ui/core/';
import ItemCount from '../ItemCount/ItemCount';
import { useStyles } from './ItemStyle';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

const Item = ({ children, id, rank, symbol, image }) => {
  const classes = useStyles();
  // const [cantidad, setCantidad] = useState(1);

  // const modificarCantidad = (cantidad) => {
  //   setCantidad(cantidad);
  // };
  // console.log("estoy en item");
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={'/item/' + id}>
        {/* <CardMedia component="img" alt="Contemplative Reptile" height="140" image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" /> */}
        <CardMedia component="img" alt="Contemplative Reptile" weight="384" image={image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {children}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {symbol}
            {' '}
            -
            {rank}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <ItemCount stock={5} initial={1} onAdd={modificarCantidad} /> */}
        {/* <Button variant="outlined" color="secondary">
          Agregar al carrito (
          {cantidad}
          )
          {' '}
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default Item;
