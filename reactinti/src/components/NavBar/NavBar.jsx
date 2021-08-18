import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaPlane} from "react-icons/fa";
import {BsSun} from "react-icons/bs";
import {AiTwotoneShopping} from "react-icons/ai";
import {ImAirplane} from "react-icons/im";
import {FiInstagram} from "react-icons/fi";
import {FiFacebook} from "react-icons/fi";
import {FiTwitter}  from "react-icons/fi";
import {FiPhoneCall}  from "react-icons/fi";
import {MdWork}  from "react-icons/md";
import {BsQuestionOctagon} from "react-icons/bs"
import {FiShoppingCart} from "react-icons/fi"


function NavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><BsSun/> Inti</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"> <AiTwotoneShopping/>Mi tienda</Nav.Link>
            <Nav.Link href="#pricing"><ImAirplane/>Envios</Nav.Link>
            <NavDropdown title="Contacto" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><FiInstagram/>Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><FiFacebook/>Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><FiTwitter/>Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><FiPhoneCall/>Llamanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#deets"><FiShoppingCart /></Nav.Link>
            <Nav.Link href="#deets"><MdWork />Trabaja con nosotros</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <BsQuestionOctagon/> FAQ
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar
