import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';


const useStyles = makeStyles((theme) => ({
  root: {
      border:"1px solid gray",
      width:"12rem",
      display: "flex",
      alignItems: "center",
      justifyContent:"space-between",
      alignSelf: "center"
  },
  rootButton: {
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: "0.5rem"
  },
  container:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();
  const [cantidad, setCantidad] = useState(1);

  const modificarCantidad = (cantidad) => {
    setCantidad(cantidad);
  };


  return (
    <>
      <NavBar />
      <div className="App">
        <ItemCount stock={5} initial={1} onAdd={modificarCantidad}/>
      </div>
      <div className={classes.rootButton}>
        <Button variant="outlined" color="secondary">Agregar al carrito ({cantidad}) </Button>
      </div>
      <ItemListContainer/>
    </>
  );
}

export default App;
