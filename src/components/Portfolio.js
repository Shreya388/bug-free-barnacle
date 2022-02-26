import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "./css/style.css";
import "./css/Portfolio.css";
import c from "./css/images/cards/b.jpg";
import b from "./css/images/cards/c.jpg";
import a from "./css/images/cards/a.jpg";

const Cards = (props) => {
    return (

        <Card id="cards">
            <img className="card-image" alt={props.alt} src={props.img} />
        </Card>
    );
}

const Portfolio = () => {
    return (
        <>
            <div id="Portfolio" class="portfolio">
                <div className="container-fluid">
                    <h1 className="display-6">Portfolio</h1>
                    <Row className="">
                        <Col md={4}>
                            <Cards img={b} />
                        </Col>
                        <Col md={4}>
                            <Cards img={a} />
                        </Col>
                        <Col md={4}>
                            <Cards img={c} />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Portfolio;