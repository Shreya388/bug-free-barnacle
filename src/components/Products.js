import React from "react";
import { Col, Row, Card } from "react-bootstrap";

import a from "./css/images/cards/a.jpg";
import b from "./css/images/cards/b.jpg";
import c from "./css/images/cards/c.jpg";

const Cards = (props) => {
    return (

        <Card id="cards" >
            <img className="card-image" alt={props.alt} src={props.img} />
        </Card>
    );
}

const Products = () => {
    return (
        <>
            <div id="Products" class="products" style={{ padding: "10pt 0pt" }}>
                <div className="container-fluid">

                    <Row className="mt-4">
                        <Col md={4} className="mt-4">
                            <Cards img={b} />
                        </Col>
                        <Col md={4} className="mt-4">
                            <Cards img={a} />
                        </Col>
                        <Col md={4} className="mt-4">
                            <Cards img={c} />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Products;