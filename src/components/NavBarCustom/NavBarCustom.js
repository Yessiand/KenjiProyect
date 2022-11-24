import CardWidget from "../CardWidget/CardWidget.js";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import style from './style/NavBar.module.css';

 const NavBarCustom = ({}) => {
    return (
        <>
            <Navbar bg=""  variant="" className={style.navbarCustom}>
                <Container>
                <Navbar.Brand href="#home">
                        <img
                            src="/img/kenjilogo.png"
                            className="d-inline-block align-top p-4 "
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
                <Nav className="nav-list">
                    <Nav.Item>
                        <Nav.Link className='nav-list' href="#home">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='nav-list text-nowrap' href="#features">Sobre nosotros</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='nav-list' href="#usuarios">Usuarios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='nav-list' href="#catalogo">Catalogo</Nav.Link>
                    </Nav.Item>
                </Nav>
                <CardWidget/> 
            </Navbar>
        </>
    )
}

export default NavBarCustom;