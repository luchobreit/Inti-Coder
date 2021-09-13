import { useCartContext } from "../../Context/CartContext"
import CartItem from "./CartItem"
import "./cart.css"

function Cart() {
    const {borrarListado, product}=useCartContext()
    
    
    
    return (
        <div className="contenedorCart">
            {product.map(element => <CartItem item={element}/>)}
            <button className="btn-outline-danger borrarcompra" onClick={borrarListado}>Borrar Compra</button>
        </div>
    )
}

export default Cart
