import "./index.scss"
import Data from "./data"
import Mapcontent from "./Mapcontent"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import image from "../../images/food.jpg"
import apples from "../../images/apples.jfif"
import wheat from "../../images/wheat.jfif";
import bananas from "../../images/banana.jfif";
import flour from "../../images/avia_wheat_flour.jpg";
import potato from "../../images/potato.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import Slider from "react-slick";


export default function Content(){

    const Item = Data.map((item) => {

        return <Mapcontent 
        key={item.id}
        {...item}
        />
    })

    const settings = {
      // dots: true,
      // lazyLoad: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // initialSlide: 2,

      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots: true,
      lazyLoad: true,
    };

    return (
      <div className="content_all">
        <div className="content_container">
          <Container>
            <Row>
              <Col>
                <div>
                  <h1 className="content_header">Why Choose Us?</h1>
                  <p className="content_para">
                    we make sure to always leave our customers and clients with
                    the 'wow' effect that inspires optimism and excitement
                    through moments of nature and time.
                  </p>
                  <Row>
                    <Col>
                      <div>
                        <i>
                          <img src={icon1} alt="#" className="small_img" />
                        </i>
                        <div className="choose_text">
                          <h5>Excellent Service</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <i>
                          <img src={icon2} alt="#" className="small_img" />
                        </i>
                        <div className="choose_text">
                          <h5>Clean Working</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <i>
                          <img src={icon3} alt="#" className="small_img" />
                        </i>
                        <div className="choose_text">
                          <h5>Quality And Reliability</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <i>
                          <img src={icon4} alt="#" className="small_img" />
                        </i>
                        <div className="choose_text">
                          <h5>Expert Farmer</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <button className="content_button">Read More</button>
              </Col>
              <Col>
                <div className="content_div">
                  <img src={image} alt="image_1" className="content_img" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="product_slider">
          <h2 className="slider_header">Peep Our Latest Products</h2>
          <Slider {...settings}>
            <div>
              <img src={apples} alt="food" className="slide_image" />
              <div className="slider_text">
                <h5>Fresh Apples</h5>
                <p>price starts at $10.99/kg</p>
                <button>Add to Cart</button>
              </div>
            </div>
            <div>
              <img src={wheat} alt="food" className="slide_image" />
              <div className="slider_text">
                <h5>Wheat</h5>
                <p>price starts at $12.99/kg</p>
                <button>Add to Cart</button>
              </div>
            </div>
            <div>
              <img src={bananas} alt="food" className="slide_image" />
              <div className="slider_text">
                <h5>Bananas</h5>
                <p>price starts at $8.99/kg</p>
                <button>Add to Cart</button>
              </div>
            </div>
            <div>
              <img src={flour} alt="food" className="slide_image" />
              <div className="slider_text">
                <h5>Avia Wheat Flour</h5>
                <p>price starts at $7.99/kg</p>
                <button>Add to Cart</button>
              </div>
            </div>
            <div>
              <img src={potato} alt="food" className="slide_image" />
              <div className="slider_text">
                <h5>Irish Potatoes</h5>
                <p>price starts at $12.99/kg</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
}