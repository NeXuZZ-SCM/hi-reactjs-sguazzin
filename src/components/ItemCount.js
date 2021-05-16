import React from 'react'
import { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    root: {
        border:"1px solid gray",
        width:"12rem",
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        alignSelf: "center"
    },
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
  }));

const ItemCount = ({stock, initial, onAdd}) => {
    const classes = useStyles();
    const [estado, setEstado] = useState(initial);


    console.log(stock);

    useEffect(() => {
      console.log(`Hiciste click ${estado} veces`);
    }, [estado]);
  
    const incrementar = (e) => {
        if(stock > estado){
            setEstado((estado) => {
                let contador = estado + 1;
                onAdd(contador);
                return contador;
            })
        }
    };
    const reducir = (e) => {
        if(estado>1){
            setEstado((estado) => {
                let contador = estado -1;
                onAdd(contador);
                return contador;
            });
            
        }
    };

    return (
        <>
        <div className={classes.container}>
            <div className={classes.root}>
                <IconButton onClick={reducir} >
                    <RemoveIcon />
                </IconButton>
                {estado}
                <IconButton onClick={incrementar}>
                    <AddIcon />
                </IconButton>
            </div>
        </div>
        </>
    )
}

export default ItemCount
