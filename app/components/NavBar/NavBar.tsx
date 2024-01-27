"use client"
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
function NavBar() {

  const [expanded, setExpanded] = useState<boolean>(false);
    return ( 
      <>
        <Navbar expanded={expanded} sticky="top" expand="lg" className="bg-body-tertiary justify-content-between" style={{backgroundColor: 'white!important'}}>
            {/* <Container className="justify-content-between"> */}
              <Navbar.Brand>
                <>
                  <span className='nav-firstName'>Sara Prattis</span>
                  <br/>
                  <span>UX/UI Designer</span>
                </>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}/>
              <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse' style={{flexGrow: '0', marginRight: '20px'}}>
                <Nav className="me-auto" style={{alignItems: 'end'}}>
                    <Nav.Link onClick={() => setExpanded(false)} href="#main-container" className="nav-link">
                      About Me
                    </Nav.Link>
                    <Nav.Link onClick={() => setExpanded(false)} href="#projects" className="nav-link">
                      Projects
                    </Nav.Link>
                    <Nav.Link onClick={() => setExpanded(false)} href="#resume" className="nav-link">
                      Resume
                    </Nav.Link>
                    <Nav.Link onClick={() => setExpanded(false)} href="#contact" className="nav-link">
                      Contact
                    </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
      </>
    );
}

export default NavBar;