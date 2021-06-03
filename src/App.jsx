import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarouselMUI from './components/Carousel/Carousel';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CarouselMUI />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:productId" >
          <ItemDetailContainer />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App