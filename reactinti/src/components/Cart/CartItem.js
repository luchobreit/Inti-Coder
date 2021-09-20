import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CartItem.css"
import { useCartContext } from '../../Context/CartContext';

function CartItem({item}) {
    const {borrarItem}=useCartContext()
    return (
        <div>
            <Row className="fila">
                <Col className="imagen colu"><img className="imagen"  src={item.item.img}/></Col>
                <Col className="nombre colu">{item.item.name}</Col>
                <Col className="cantidad colu">{item.quantity}</Col>
                <Col className="precio colu">{item.item.price}</Col>
                <Col className="botonera colu"><button onClick={()=>borrarItem(item.item.id)}>Borrar item</button></Col>
            </Row>
        </div>
    )
}

export default CartItem
