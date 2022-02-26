import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

import "./Header.css";


const Header = () => {

    return (

        <>
            {/* Navbar section */}
            <Navbar className="fixed-top topBar text-center" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">SAMPLE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "none", color: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" id="ul" >
                            <a className="alink" href="#Header">HOME</a>
                            <a className="link" href="#Products">PRODUCTS</a>
                            <a className="link" href="#Team">TEAM</a>
                            <a className="link" href="#whatwedo">OUR WORK</a>
                            <a className="link" href="#Services">SERVICES</a>
                            <a className="link" href="#Portfolio">PORTFOLIO</a>
                            <a className="link" href="#Contact">CONTACT</a>
                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
            {/* Navbar section end */}

            {/*Cover section */}
            <div id="Header" className="cover">
                <div className="container-fluid">
                    <motion.h1 className="display-3 text-center" id="heading"
                         initial={{ rotate: 2}}
                         animate={{ rotate: -10, color: "black"}}
                         transition={{ duration: 4}}
                    >
                        <h1 className="display-2">Beautiful.</h1><b>Trendy.</b><br />Elegant Design.<br />
                    </motion.h1>
                </div>
            </div>



        </>
    );
}

export default Header;