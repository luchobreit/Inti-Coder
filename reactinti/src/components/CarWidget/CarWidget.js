import {FiShoppingCart} from "react-icons/fi"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import "./CarWidget.css"


function CarWidget() {
    const {iconCart, cantidad, contador} =useCartContext()
    contador ()
    return (
        <>
        {cantidad ?
        <div className="iconCart-container">
            <label className="iconCart">{iconCart()}</label>
            <Link to={`/cart`}>
            <FiShoppingCart />
            </Link>
        </div>
        :
        <div></div>
        }
        </>
    )
}

export default CarWidget

