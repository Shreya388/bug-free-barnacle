import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import "./css/Footer.css";

const Section = (props) => {
  return (
    <div>
      <p className="navbar-brand">{props.tag}</p>
      <Nav.Link id="Link" href="#fd"><small>{props.link}</small></Nav.Link>
      <Nav.Link id="Link" href="#fsd"><small>{props.link2}</small></Nav.Link>
      <Nav.Link id="Link" href="#fsdsd"><small>{props.link3}</small></Nav.Link>
    </div>
  )
};


const Footer = () => {
  return (
    <>
     <div id="footer_content">
        <Container id="container-fluid">
          <Row>
            <Col>
              <h1 className="display-6 text-left">Get Our News Letter</h1>
              <p><small>sit voluptatem accusantium doloremque laudantium</small></p>
            </Col>
            <Col>
              <input type="text" className="textbox" />
              <button className="butt">+</button>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="footer">

     

<div className="Footer" style={{padding: "130pt" }}>
  <Container>
    <Row>

      <Col md="4" className="">
        <h1 className="display-6 text-left">SAMPLE</h1>
        <p>sit voluptatem accusantium<br /> doloremque laudantium</p>
        <small>
          <p>Daya Niwas, 137 S K Bole Road</p>
          <p>+91 *******</p>
        </small>
      </Col>

      <Col md="2" className="">
        <Section link="Events" link2="Contact" link3="Mentors" tag="Services" />
      </Col>

      <Col md="2" className="">
        <Section link="Events" link2="Contact" link3="Mentors" tag="Products" />
      </Col>

      <Col md="2" className="">
        <Section link="Events" link2="Contact" link3="Mentors" tag="Contact" />
      </Col>


    </Row>
  </Container>
</div>

<div className="footer_nav">
  <a className="footerLink" href="#Footer">Copyright 2020</a>
</div>
</div>

    </>
    
  );
}

export default Footer;