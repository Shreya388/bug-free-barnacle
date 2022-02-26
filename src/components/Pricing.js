import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./css/pricing.css";

const Card = (props) => {
    return ( 
        <div className="cards text-white">
            <h1 className="display-6">{props.name}</h1>
            <p>{props.text}</p>
                <hr />
                <h1 className="display-4">{props.price}<p>/month</p></h1>
            <div className="container mt-4" style={{textAlign: "left"}}>
                
                <hr />
                <p>Support forum</p>
                <p>Free hosting</p>
                <p>80MB of storage space</p>
                <p>Social media integreation</p>
                <p>10GB of storage space</p>
                <Button id="button">Choose Plan</Button>
            </div>
        </div>
     );
}

const Pricing = () => {
    
   
    
    return ( 

       
            <div className="pricing">
            <p className="blockquote-footer">Lorem ipsum dolor sit amet</p>
            <h1 className="display-4">Pricing Offers</h1>

            <div className="container mt-4">
                <Row>
                    <Col>
                        <Card name="Basic" text="sit amet lorem et" price="$19.95"></Card>
                    </Col>

                    <Col>
                        <Card name="Popular" text="sit amet lorem et" price="$17.43"></Card>
                    </Col>

                    <Col>
                        <Card name="Enterprise" text="sit amet lorem et" price="$28.91"></Card>
                    </Col>
                </Row>
            </div>
        </div>
        
     );
}
 
export default Pricing;