import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <>
                <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TO DO list</Navbar.Brand>
          <Nav className="me-auto">
                <Link style={{ paddingRight: '15px' }} to="/">Home</Link>
                <Link to="settings">settings</Link> {/* <Link> allow users to navigate between different routes within your application without a full page reload. */}
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link> */} {/* <Nav.Link> with an href attribute triggers a full page reload when clicked, as it's a traditional anchor link. */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

