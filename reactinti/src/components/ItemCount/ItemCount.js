import Button from "react-bootstrap/esm/Button"
import {useState} from "react"
import "./ItemCount.css"
import { Link } from "react-router-dom"



function ItemCount({initial, stock, onAdd, preg,reu}) {
    const [count, setCount] = useState(initial)
    const [final, setFinal] = useState(count)
   
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
    setFinal(count)
    
   
 }
    return (
     <div className="botonera" >
        {
            (preg)   ?
                <>
                    <div className="operaciones">
                        <Button variant="outline-primary" size="sm" onClick={handlerAdd}>+</Button>
                        <label>{count}</label>
                        <Button variant="outline-primary" size="sm" onClick={handlerRm}>-</Button>
                    </div>
                        <div className="carrito">
                            
                            <Button variant="outline-success" size="sm" onClick={handlerOnAdd} className="agregar">Agregar al carrito</Button>
                        </div>
                </>
            :
            <div className="ircarrito">
                <h3>{final}</h3>
                <Link to={`/cart`}>
                <Button variant="outline-success" size="sm" className="irgregar">Ir al carrito</Button>
                </Link>
                <Link to={`/`}>
                <Button variant="outline-primary" size="sm" className="irgregar">Seguir comprando</Button>
                </Link>
            </div>

        }
        

     </div>
    )
}

export default ItemCount
