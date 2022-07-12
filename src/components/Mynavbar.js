import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Mynavbar.css'

export class Mynavbar extends Component {
  render() {
    return (
      <div>
        <Navbar key="xl" expand="xl" className="mb-1" id="nav">
          <Container fluid>
            <Navbar.Brand className="ms-4" id="navhead" style={{color:"#EF3B3F"}}>Pitch Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`}/>
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-xl`} aria-labelledby={`offcanvasNavbarLabel-expand-xl`} placement="end" className="offcanvas">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`} style={{color:"#EF3B3F"}}>
                  Pitch Tracker
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 me-4">
                  <Nav.Link href="/" id="links">HOME</Nav.Link>
                  <Nav.Link href="/pitchers" id="links">PITCHERS</Nav.Link>
                  <Nav.Link href="/hitters" id="links">HITTERS</Nav.Link>
                  <Nav.Link href="signin" id="links">SIGN-IN</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Mynavbar
