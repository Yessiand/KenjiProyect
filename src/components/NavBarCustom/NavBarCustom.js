import CardWidget from "../CardWidget/CardWidget.js";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router-dom";


import style from './style/NavBar.module.css';

const NavBarCustom = ({ menus, categorias }) => {
    return (
        <>
            <Navbar bg="" variant="" className={style.navbarCustom}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/img/kenjilogo.png"
                            className="d-inline-block align-top p-4 "
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
                <Nav >
                    {
                        menus.map((menu) => {
                            return (
                                <Nav.Item>
                                    <Nav.Link className={style.navList} href={menu.href}>{menu.name}</Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                </Nav>
                <CardWidget />
            </Navbar>
        </>
    )
}

export default NavBarCustom;