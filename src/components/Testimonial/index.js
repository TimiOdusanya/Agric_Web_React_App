import "./index.scss"
import React from "react"
import Img1 from "../../images/test-background.jfif"
import Img2 from "../../images/about-image1.jpg";
import Img3 from "../../images/about-image2.jpg";
import Press1 from "../../images/test-image1.png";
import Press2 from "../../images/test-image2.jpg";
import Press3 from "../../images/test-image3.webp";
import Press4 from "../../images/test-image4.jpg";
import Test1 from "../../images/timi.jpg";
import Test2 from "../../images/becky.jfif";
import Test3 from "../../images/drake.jfif";
import Carousel from "react-bootstrap/Carousel";

export default function Testimonial(){
    return (
      <div className="test-body">
        <h3 className="test-heading">Testimonials</h3>
        <Carousel fade className="">
          <Carousel.Item>
            <img
              className="d-block w-100 test-images"
              src={Img1}
              alt="First slide"
            />
            <Carousel.Caption className="test-caption">
              <p>
                I no longer have to go to the market by my own. I can just order
                and wait for my delivery
              </p>
              <img src={Test1} alt="test-img" className="test-img" />
              <h3 className="test-header">Timi, Lagos, Nigeria</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 test-images"
              src={Img2}
              alt="Second slide"
            />

            <Carousel.Caption className="test-caption">
              <p>
                Trust Grow iT for the best investment platform. They always
                deliver
              </p>
              <img src={Test2} alt="test-img" className="test-img" />
              <h3 className="test-header">Becky, New Delhi</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 test-images"
              src={Img3}
              alt="Third slide"
            />

            <Carousel.Caption className="test-caption">
              <p>Reliable and Trust worthy market. Good customer Service</p>
              <img src={Test3} alt="test-img" className="test-img" />
              <h3 className="test-header">Drake, Los Angeles</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section className="press">
          <h3>Our Partners</h3>

          <img src={Press1} alt="img" className="press-logo" />
          <img src={Press2} alt="img" className="press-logo" />
          <img src={Press3} alt="img" className="press-logo" />
          <img src={Press4} alt="img" className="press-logo" />
        </section>
      </div>
    );
}