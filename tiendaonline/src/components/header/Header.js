import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <React.Fragment>
            <Navbar bg="" expand="lg" className="colorbg">
                    <Navbar.Brand href="/" className="">FullCode</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="">Inicio</Nav.Link>
                            <NavDropdown title="Administrador" id="basic-nav-dropdown" className="">
                                <NavDropdown.Item href="/ventas">Ventas</NavDropdown.Item>
                                <NavDropdown.Item href="/productosAdmin">Productos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/modificarProd">Modificar Producto</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Clientes" id="basic-nav-dropdown" className="linkk">
                                <NavDropdown.Item href="/productos">Productos</NavDropdown.Item>
                                <NavDropdown.Item href="/carrito">Carrito</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;

/**
 * <section>
                <nav>
                    <div>
                    <ul>
                        <li>
                            <Link to='/' className="linkk">Inicio</Link>
                        </li>
                        <li>
                            <Link to='/productos' className="linkk">Productos</Link>
                        </li>
                        <li>
                            <Link to='/ventas' className="linkk">Ventas</Link>
                        </li>
                        <li>
                            <Link to='/modificarProd' className="linkk">Modificar</Link>
                        </li>
                        <li>
                            <Link to='/carrito' className="linkk">Carrito</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </section>
 */