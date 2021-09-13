import {FiShoppingCart} from "react-icons/fi"
import { Link } from "react-router-dom"


function CarWidget() {
    return (
        <div>
            <Link to={`/cart`}>
            <FiShoppingCart />
            </Link>
        </div>
    )
}

export default CarWidget

