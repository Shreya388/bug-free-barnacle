import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "./css/style.css";
import "./css/Services.css";
import one from "./css/images/cards/one.jpg";
import two from "./css/images/cards/two.jpg";
import three from "./css/images/cards/three.jpg";

const Cards = (props) => {
    return (
        <Card id="small_card" className="border-0 mt-4">
            <Card.Img variant="top" src={props.img} />
            <Card.Body className="" style={{ background: "#222222" }}>
                <Card.Title><p className="display-6 text-white" style={{ fontSize: "33px" }}>{props.title}</p></Card.Title>
                <Card.Text>
                    <p className="text-white">{props.para}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

const Services = () => {
    return (
        <div id="Services" style={{ padding: "100pt 0pt", height: "550pt" }}>
            <div class="services">
                <div className="container-fluid">
                    <h1 className="text">Lorem ipsum dolor sit amet</h1>
                    <h1 className="display-6">Services</h1>
                    <Row>
                        <Col md={4}>
                            <Cards img={one} title="Design" para="totam rem aperiam, eaque ipsa quae ab illoconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
                        </Col>
                        <Col md={4}>
                            <Cards img={two} title="On Demand Devs" para=" laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  laudantium, totam laudantium, totam laudantium, totam" />
                        </Col>
                        <Col md={4}>
                            <Cards img={three} title="Webhosting" para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Services;