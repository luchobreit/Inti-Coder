import Item from "./Item"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemList({productos}) {
    
    return (
        <div  data-aos="fade-up">
        <Container fluid="sm">
        <Row>
            <Col>
            <ul>
                {productos.map(element => <Item producto={element}/>)}
            </ul>
            </Col> 
        </Row>
        </Container>
            
        </div>
    )
}

export default ItemList
