import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card';


function ItemDetail({producto}) {
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
                </ListGroup>
            </Card>  
        </div>
    )
}

export default ItemDetail
