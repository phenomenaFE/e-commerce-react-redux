import { Carousel, Col, Row } from "react-bootstrap";
import SingleImageAds from "../molecules/singleImageads";
import ad01 from "../../assets/Images/slider001.png";
import ad02 from "../../assets/Images/slider004.jpg";
import slider001 from "../../assets/Images/slider005.jpg";
import slider002 from "../../assets/Images/slider007.webp";
function CarouselSlider() {
  return (
    <Row>
      <Col sm={12} lg={8}>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-item"
              src={slider001}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100  slider-item"
              src={slider002}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col sm={12} lg={4}>
        <div className="m-2">
          <SingleImageAds goTo="/" imageView={ad02} />
          <SingleImageAds goTo="/" imageView={ad01} />
        </div>
      </Col>
    </Row>
  );
}

export default CarouselSlider;
