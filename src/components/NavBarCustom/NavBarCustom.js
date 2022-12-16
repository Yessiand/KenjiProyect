import CardWidget from "../CardWidget/CardWidget.js";
import style from './style/NavBar.module.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarCustom = ({ menus }) => {
    return (
        <>
            <Navbar bg="" variant="" className={style.navbarCustom}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/img/kenjilogo.png"
                            className="d-inline-block align-top p-4 "
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
                <Nav >
                    {
                        menus.map((menu, index) => {
                            return (
                                <Nav.Item key={index + "_navItem"}>
                                    <Nav.Link key={index + "_navLink"} className={style.navList} href={menu.href}>{menu.name}</Nav.Link>
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