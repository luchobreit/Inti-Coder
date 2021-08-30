import Button from "react-bootstrap/esm/Button"
import {useState} from "react"


function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)
    const handlerAdd = ()=> {
        setCount(count + 1);
        if(stock === count){
            setCount(count)
            alert (`el stock maximo permitido es ${stock}`)
        }  
    }
    const handlerRm=()=>{
        setCount(count - 1);
        if (count === 0){
            setCount(count)
        }
    }

 const handlerOnAdd=()=>{
    onAdd(count)
    setCount(initial)
 }
    return (
     <div className="botonera" >
        <div className= "operaciones">
            <Button variant="outline-primary" size="sm"onClick={handlerAdd}>+</Button>
            <label>{count}</label>
            <Button variant="outline-primary" size="sm" onClick={handlerRm}>-</Button>
        </div>
        <div className="carrito">
            <Button variant="outline-success" size="sm" onClick={handlerOnAdd}>Agregar al carrito</Button>
        </div>
        

     </div>
    )
}

export default ItemCount
