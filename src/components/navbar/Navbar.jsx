import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Login from '../auth/login';
import { When } from 'react-if';
import LoginProvider from '../auth/context';
import { LoginContext } from '../auth/context';


export default function NavBar() {
  const login= useContext(LoginContext)
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
       
           {/* <LoginProvider>

           <When condition={true}>
            <Login/>
           </When>
           </LoginProvider> */}
       
        </Navbar>
       

          
    </>
  )
}

