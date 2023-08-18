import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import card1 from "./Assests/card1.png";
import card2 from "./Assests/card2.png";
import card3 from "./Assests/card3.png";
import card4 from "./Assests/card4.png";
import "./categories.css";
import "./Responsive.css"

const Categories = () => {
  return (
    <>
      <Container>
        <Row className="categories">
          <Col sm="6" lg="3">
            <img src={card1} alt="" />
          </Col>
          <Col sm="6" lg="3">
            <img src={card2} alt="" />
          </Col>
          <Col sm="6" lg="3">
            <img src={card3} alt="" />
          </Col>
          <Col sm="6" lg="3">
            <img src={card4} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
