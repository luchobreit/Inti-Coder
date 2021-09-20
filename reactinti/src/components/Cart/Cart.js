import { useCartContext } from "../../Context/CartContext"
import CartItem from "./CartItem"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import "./cart.css"

function Cart() {
    const {borrarListado, product,cantidad,contador,total}=useCartContext()
    contador ()
    console.log(total())
    
    return (
        <>
        {cantidad ?
        <div className="contenedorCart">
            {product.map(element => <CartItem item={element} key={element.item.id}/>)}
            <Row>
                <Col className="total">Total</Col>
                <Col className="total">{total()}</Col>
            </Row>
            <button className="btn-outline-danger borrarcompra" onClick={borrarListado}>Borrar Compra</button>
        </div>
        :
        <div className="vacio">
            <img className="imagenPanda" alt="panda" src="https://images.vexels.com/media/users/3/182089/isolated/preview/620a2bb2ec1234392f93719d2f6113a3-panda-triste-con-estilo.png"></img>
            <h1 className="texto-vacio">Todavia no agregaste nada al carrito queres agregar?</h1>
            <Link className="link-vacio" to={`/`}>
                <Button variant="outline-primary" size="sm" className="irgregar">Seguir comprando</Button>
            </Link>
        </div>
        }   
        </>
    )
}

export default Cart
