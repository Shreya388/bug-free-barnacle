import React from "react";
import { Col, Row, Container, ProgressBar } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import c from "./css/images/team/c.jpg";
import b from "./css/images/team/b.jpg";
import a from "./css/images/team/a.jpg";
import "./css/Team.css";

const Items = (props) => {

  
    
    return (
        <div id="card" style={{ background: "black", padding: "150pt 40pt", borderRadius: "0"}}>
            <Container>
                        <img alt={props.alt} src={props.img} style={{ borderRadius: "70pt" }} />

                        <Container className="mt-4 text-white">
                            <h1 className="navbar-brand">{props.name}</h1>
                            <p><p>{props.text}</p></p>
                        </Container>
            </Container>
        </div>
    )
}

const Team = () => {
    const {view, inView} = useInView();
    
    useEffect(() => {
        
    })

    return (
        <>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <button id="Team" className="btn-dark butt mr-auto ml-4 mt-4">Our Hardworking Team</button>
        <div className="team" style={{ padding: "10pt 10pt"}}>
            
            <Container>
            <Row>
                <Col md="4">
                <Items img={a} name="Jane Smith" text="CEO" />
                </Col>

                <Col md="4">
                <Items img={b} name="Adam Smidt" text="Founder of This Company" />
                </Col>
                
                <Col md="4">
                <Items img={c} name="Steve Laurence" text="Manager" />
                </Col>
            </Row>
            </Container>

        

        </div>

        <div className="col-md-12" style={{background: "rgb(245 245 245 / 83%)", padding:"100pt 0"}}>
        <Container style={{maxWidth: "800pt"}}>
            
            <Row>
            <Col md="7">
                <Container className="mt-4" style={{borderRadius: "20pt"}}>
                    <motion.h1 className="display-6"
                        initial={{x:0}}
                        animate={{x: 10}}
                    >
                        What We Do
                    </motion.h1>
                    <p className="mt-4"
                        
                    >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
                    </p>

                </Container>
                <button className="butt mt-4">Design</button>
                <button className="butt">Marketing</button>
                <button className="butt">Development</button>
                <button className="butt">Photography</button>
                </Col>

                <Col md="5">
                <Container className="mt-4" style={{ textAlign: "left"}}>
                    <p>Design</p>
                    <ProgressBar variant="dark" id="progress" now={80} /><br />
                    <p>Marketing</p>
                    <ProgressBar variant="dark" id="progress" now={50} /><br />
                    <p>Development</p>
                    <ProgressBar variant="dark" id="progress" now={75} /><br />
                    <p>Photography</p>
                    <ProgressBar variant="dark" id="progress" now={86} />
                </Container>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}

export default Team;
