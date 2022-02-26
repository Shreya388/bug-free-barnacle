import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./css/Contact.css";

const Contact = () => {
    return (
        <>
            <div className="mt-4" id="Contact">
                <Container id="cont_contain">
                    <h1 className="display-5">Get In Touch</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>


                </Container>

                <Container id="boxes">
                    <Row>
                        <Col md="4">
                            <Form.Control type="text" id="textBox" placeholder="Name" />
                        </Col>

                        <Col md="4">
                            <Form.Control type="text" id="textBox" placeholder="Email" />
                        </Col>

                        <Col md="4">
                            <Form.Control type="text" id="textBox" placeholder="Subject" />
                        </Col>
                    </Row>

                    <textarea class="form-control mt-4" id="textArea" rows="3" placeholder="Say Something.."></textarea>

                    <button className="butt">Submit</button>
                </Container>
            </div>
        </>
    );
}

export default Contact;