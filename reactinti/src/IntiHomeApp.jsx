import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';


function App() {
  return (
    <div className="Inti">
      <NavBar />
      <ItemListContainer/>
    </div>

    
  );
}


export default App;
