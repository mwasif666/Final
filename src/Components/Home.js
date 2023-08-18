import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./Assests/image-removebg-preview.png";
import img2 from "./Assests/image-removebg-preview (1).png";
import img3 from "./Assests/image-removebg-preview (2).png";
import "./Responsive.css";
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container
      fluid
      style={{
        padding: "0",
      }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-main"
      >
        <Carousel.Item className="carousel-item">
          <Container>
            <Row>
              <Col xs="6" className="content-again">
                <h1 className="content-h1">The New Standard</h1>
                <p className="under">Under Favourable HeadPhones</p>
                <div className="prize">
                  <sub>
                    <i class="fa-solid fa-rupee-sign"></i>
                  </sub>
                  <p>
                    1200. <sup>99</sup>{" "}
                  </p>
                </div>
                <button className="btn btn1" type="submit">
                  Start Buying
                </button>
              </Col>
              <Col xs="6">
                <img className="img-slider slider1-img" src={img1} alt="" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Container>
            <Row>
              <Col xs="6" className="content-again">
                <h1 className="content-h1">The New Standard</h1>
                <p className="under">Under Favourable Laptops</p>
                <div className="prize">
                  <sub>
                    <i class="fa-solid fa-rupee-sign"></i>
                  </sub>
                  <p>
                    1200. <sup>99</sup>{" "}
                  </p>
                </div>
                <button className="btn btn1" type="submit">
                  Start Buying
                </button>
              </Col>
              <Col xs="6">
                <img className="img-slider" src={img2} alt="" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Container>
            <Row>
              <Col xs="6" className="content-again">
                <h1 className="content-h1">The New Standard</h1>
                <p className="under">Under Favourable Airbuds</p>
                <div className="prize">
                  <sub>
                    <i class="fa-solid fa-rupee-sign"></i>
                  </sub>
                  <p>
                    1200. <sup>99</sup>{" "}
                  </p>
                </div>
                <button className="btn btn1" type="submit">
                  Start Buying
                </button>
              </Col>
              <Col xs="6">
                <img className="img-slider" src={img3} alt="" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;
