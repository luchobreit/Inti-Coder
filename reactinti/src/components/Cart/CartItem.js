import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CartItem.css"
import { useCartContext } from '../../Context/CartContext';

function CartItem({item}) {
    const {borrarItem}=useCartContext()
    return (
        <div>
            <Row className="fila">
                <Col className="imagen col"><img className="imagen" src={item.item.img}/></Col>
                <Col className="nombre col">{item.item.name}</Col>
                <Col className="cantidad col">{item.quantity}</Col>
                <Col className="botonera col"><button onClick={()=>borrarItem(item.item.id)}>Borrar item</button></Col>
            </Row>
        </div>
    )
}

export default CartItem
