import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import curso4 from '../../assets/img/slider1.jpg'
import curso5 from '../../assets/img/slider2.jpg'


const useStyles = makeStyles((theme) => ({
  slider: {
    width: '100%',

  },
  carousel: {
    marginTop: 76,
  }
}))



function CarouselMUI(props) {
  const classes = useStyles();


  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: curso4

    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: curso5
    }
  ]

  return (
    <Carousel className={classes.carousel} animation="fade" interval="4000" indicators={false}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel >
  )
}

function Item(props) {
  const classes = useStyles();

  return (
    <Paper>
      <img className={classes.slider} src={props.item.image} alt={props.item.name} />
    </Paper>
  )
}

export default CarouselMUI
