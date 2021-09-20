import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useCartContext } from '../../Context/CartContext';


function ItemDetail({producto}) {
    const [preg, setPreg] = useState(true)

    const {agregarAlCarrito} = useCartContext()

    const onAdd =(count)=>{
        const hola= window.confirm (`Quieres agregar ${count} al carrito?`)
        setPreg(!hola);
        if (hola){
          agregarAlCarrito(producto, count)
      }
      
    
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>
                    {producto.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{producto.model} </ListGroupItem>
                    <ListGroupItem>{producto.color}</ListGroupItem>
                    <ListGroupItem>${producto.price} </ListGroupItem>
                    <ItemCount initial={1} stock={5} onAdd= {onAdd} preg={preg}/>
                </ListGroup>
            </Card>
        </div>
    )
}

export default ItemDetail
