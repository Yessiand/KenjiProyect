import React from "react";

import styles from './style/CardWidget.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function CardWidget() {
    return (
<>
<Navbar variant="dark" bg="" expand="lg" >
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbar"  />
        <Navbar.Collapse id="navbar">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Macetas de Pokemon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Macetas de Anime
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Macetas de Mario Bross</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Inicio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div className= {styles.cartwidget}>
	<svg class={styles.cart} viewBox="0 -32 576 576"> 
      <a href="/#">
        <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/>
       
      </a>
      
    </svg>
			<span className= {styles.badge}>4</span>
		</div>
</>   
    );
}
