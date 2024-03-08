import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavBar = () => {
    // États -> States

    // Comportements -> Les functions

    //Affichage -> return
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>Accueil </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <Nav.Link>
                            <Link to={"/pokemons"}>Pokemons</Link>
                        </Nav.Link>
                        
                        <NavDropdown title="Générations" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to={"/generations"}> Génération 1</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Génération 2
                            </NavDropdown.Item>
                            <NavDropdown.Item>Génération 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                Génération 4
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;