import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Login from '../auth/login';




export default function NavBar() {
  
  
  return (
    <>
                <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TO DO list</Navbar.Brand>
          <Nav className="me-auto">
                <Link style={{ paddingRight: '15px' }} to="/">Home</Link>
                <Link to="settings">settings</Link> {/* <Link> allow users to navigate between different routes within your application without a full page reload. */}
         
          

         
         </Nav>
        </Container>
          
            <Login/>
        
       
       
        </Navbar>
       

          
    </>
  )
}

