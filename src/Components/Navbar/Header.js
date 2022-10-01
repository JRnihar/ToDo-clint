
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className=' bg-white shadow-sm'>
                <Container>
                    <Navbar.Brand className='logo'>Aimbrill Tech Info</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                        <Nav.Link className='text-dark' as={Link} to="/">Add Task</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to="todoData">Task List</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;