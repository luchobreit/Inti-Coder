import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
import "./Item.css";
AOS.init()



function Item({producto}) {
    return (
        <>
            
        <div className="col-lg-4" data-aos="zoom-out-right">
            <Link to={`/detalle/${producto.id}`}>
                <Card className="Card" border="primary">
                    <Card.Img variant="top" src={producto.img}/>
                    <Card.Body>
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>
                        {producto.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </div>
           
            
         
       
        </>
    )
}

export default Item
