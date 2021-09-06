
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




  

function App() {

  const onAdd =(count)=>{
    if (window.confirm (`Quieres agregar ${count} al carrito?`)){
      alert ("agregado correctamente");
      console.log(`se agrego ${count}`);
  }
}
  return (
    <div className="Inti">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route exact path={"/categoria/:category"} component={ItemListContainer}/>
          <Route exact path={"/all/:sex"} component={ItemListContainer}/>
          <Route exact path={"/detalle/:id"} component={ItemDetailContainer}/>
        </Switch> 
      </Router>  
        <ItemCount initial={1} stock={5} onAdd= {onAdd}/>
    </div>

    
  );
}


export default App;
