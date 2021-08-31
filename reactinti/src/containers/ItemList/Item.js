import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()



function Item({producto}) {
    return (
        <>
            
        <div className="col-lg-4" data-aos="zoom-out-right">
            <Card style={{ width: '70%', padding:"5px", margin:"5px" }} border="primary">
                <Card.Img variant="top" src={producto.img}/>
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>
                    {producto.description}
                    </Card.Text>
                </Card.Body>
                </Card>

        </div>
           
            
         
       
        </>
    )
}

export default Item
