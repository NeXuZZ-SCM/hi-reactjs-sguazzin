import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
