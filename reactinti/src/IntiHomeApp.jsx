
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';



  

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
      <ItemDetailContainer/>
    </div>

    
  );
}


export default App;
