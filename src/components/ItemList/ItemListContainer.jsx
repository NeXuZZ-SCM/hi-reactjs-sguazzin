import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginTop: 30
  }
});

const ItemListContainer = () => {
  const classes = useStyles();

  const { categoryId } = useParams();

  useEffect(() => {
    // console.log("cambio de estado en ItemListContainer");

  }, [categoryId])

  return (
    <>
      <Typography className={classes.container} variant="h3" align="center">LOS MEJORES CURSOS DE REACT JS🚀</Typography>
      <div className={classes.container}>
        <ItemList categoryIdApp={categoryId} />
      </div>
    </>
  );
};

export default ItemListContainer
