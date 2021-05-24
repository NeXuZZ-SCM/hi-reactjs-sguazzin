import { React, useState } from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core/';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import ItemCount from '../ItemCount/ItemCount';
import {useStyles} from './ItemStyle'


const Item = ({children, id, rank, symbol}) => {
    const classes = useStyles();
    const [cantidad, setCantidad] = useState(1);

    const modificarCantidad = (cantidad) => {
      setCantidad(cantidad);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia component="img" alt="Contemplative Reptile" height="140" image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {children}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                     {symbol} - 
                     {rank}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <ItemCount stock={5} initial={1} onAdd={modificarCantidad}/>
            <Button variant="outlined" color="secondary">Agregar al carrito ({cantidad}) </Button>
            </CardActions>
            <ItemDetailContainer/>
        </Card>
    )
}

export default Item
