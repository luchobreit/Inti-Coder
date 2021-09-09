import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card';
import ItemCount from '../../components/ItemCount/ItemCount';


function ItemDetail({producto}) {
    const onAdd =(count)=>{
        if (window.confirm (`Quieres agregar ${count} al carrito?`)){
          alert ("agregado correctamente");
          console.log(`se agrego ${count}`);
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
                    <ItemCount initial={1} stock={5} onAdd= {onAdd}/>
                </ListGroup>
            </Card>
        </div>
    )
}

export default ItemDetail
