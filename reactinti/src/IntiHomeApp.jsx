
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemList from './components/Items/ItemList';
import ItemCount from './components/ItemCount/ItemCount';





function App() {

  const onAdd =(count)=>{
    if (window.confirm (`Quieres agregar ${count} al carrito?`)){
      alert ("agregado correctamente");
      console.log(`se agrego ${count}`);
  }
}
  return (
    <div className="Inti">
      <NavBar />
      <ItemCount initial={1} stock={5} onAdd= {onAdd}/>
      <ItemListContainer greeting={"hola"}/>
      
    </div>

    
  );
}


export default App;
