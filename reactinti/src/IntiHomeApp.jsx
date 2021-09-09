
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemList/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './components/CarWidget/Cart';




  

function App() {

  return (
    <div className="Inti">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route exact path={"/categoria/:category"} component={ItemListContainer}/>
          <Route exact path={"/all/:sex"} component={ItemListContainer}/>
          <Route exact path={"/detalle/:id"} component={ItemDetailContainer}/>
          <Route exact path={`/cart`} component={Cart}/>
        </Switch> 
      </Router>  
    </div>

    
  );
}


export default App;
