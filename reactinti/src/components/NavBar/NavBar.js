import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {GiPanda} from "react-icons/gi";
import {GiArmoredPants} from "react-icons/gi";
import {ImAirplane} from "react-icons/im";
import {MdWork}  from "react-icons/md";
import {FaTshirt, FaSnowman} from "react-icons/fa";
import {AiOutlineWoman, AiOutlineMan} from "react-icons/ai";
import {BsQuestionOctagon} from "react-icons/bs"
import CarWidget from '../CarWidget/CarWidget';
import { Link } from 'react-router-dom';




function NavBar() {
 
  

    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to={`/`}>
            <Navbar.Brand href="#home"><GiPanda/> Inti</Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="#pricing"><ImAirplane/>Envios</Nav.Link>

              <NavDropdown title="Hombre" id="collasible-nav-dropdown">
                 <NavDropdown.Item > <Link to={`/categoria/remeras-h`}><FaTshirt/>Remeras</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to={`/categoria/abrigos-h`}><FaSnowman/>Abrigos</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to={`/categoria/jeans-h`}><GiArmoredPants/>Jeans</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item ><Link to={`/all/h`}><AiOutlineMan/>Todo</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Mujer" id="collasible-nav-dropdown">                 
                  <NavDropdown.Item ><Link to={`/categoria/remeras-m`}><FaTshirt/>Remeras</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to={`/categoria/abrigos-m`}><FaSnowman/>Abrigos</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to={`/categoria/jeans-m`}><GiArmoredPants/>Jeans</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item ><Link to={`/all/m`}><AiOutlineWoman/>Todo</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              <Nav.Link href="#deets"><CarWidget/></Nav.Link>
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
