import React from 'react';
import '../Styles/home.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from "react-router-dom";



class Header extends React.Component {
 

    render() {
      
        return (
     <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand ><NavLink className="navigaters" to="/">Be Motivated</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/Digital"><NavLink className="navigaters" to="/Digital">Digital</NavLink></Nav.Link>
      <Nav.Link href="/profs"><NavLink className="navigaters" to="/profs">professional</NavLink></Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/report"><NavLink className="navigater" to="/report">FeedBack</NavLink></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><NavLink className="navigater" to="/contact">Contact-Us</NavLink></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
        )
    }
}

export default Header;