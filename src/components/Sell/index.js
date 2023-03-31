import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Image1 from '../../images/carousel.jpg'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Home1 from "../../images/image_2.webp";
import Home2 from "../../images/sell_image.webp";
import FormImg from "../../images/category.webp";
import Arrow from "../../images/arrow_down.png";
import Send from "../../images/send_icon.png";

export default function Invest() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100 d-block background_image"
            itemId={1}
            src={Home2}
            alt="..."
          >
            <div className="background_text">
              <h5 className="background_content">100% FRESH & ORGANIC FOODS</h5>
              <p className="background_para">
                WE DELIVER THE BEST FOR YOUR SATISFACTION.
              </p>
              <button className="background_button">
                Sell Item <img src={Arrow} alt="img" className="arrow_down" />{" "}
              </button>
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block background_image"
            itemId={2}
            src={Home1}
            alt="..."
          >
            <div className="background_text">
              <h5 className="background_content">
                WE SERVE FRESH VEGETABLES & FRUITS
              </h5>
              <p className="background_para">
                WE DELIVER THE BEST FOR YOUR SATISFACTION.
              </p>
              <button className="background_button">
                Sell Item <img src={Arrow} alt="img" className="arrow_down" />
              </button>
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block background_image"
            itemId={3}
            src={Home2}
            alt="..."
          >
            <div className="background_text">
              <h5 className="background_content">
                WE SERVE FRESH VEGETABLES & FRUITS
              </h5>
              <p className="background_para">
                WE DELIVER THE BEST FOR YOUR SATISFACTION.
              </p>
              <button className="background_button">
                Sell Item <img src={Arrow} alt="img" className="arrow_down" />
              </button>
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <div className="header_text">
        <h1 className="heading">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Sell your items".split("")}
            idx={15}
          />
        </h1>

        <h2 className="sell_content">
          You can sell your farm produce with GrowiT, just fill the form below
          and an agent will respond to you shortly
        </h2>
      </div>

      {/* <div>
        <h3>Sell below </h3>
      </div> */}
      <div className="contact_section">
        <div>
          <img src={FormImg} alt="img" className="contact_img" />
        </div>
        <div className="contact_div">
          {/* <h6>Please ensure that you fill right details</h6> */}
          <div className="contact-form">
            <ul>
              <li className="half">
                <input
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  required
                  className="input-text"
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  className="input-text"
                />
              </li>

              <li>
                <input
                  placeholder="Mobile No"
                  type="text"
                  name="subject"
                  required
                  className="input-text"
                />
              </li>
              <li>
                <input
                  placeholder="Address"
                  type="text"
                  name="subject"
                  required
                  className="input-text"
                />
              </li>
              <li>
                <select name="languages" id="lang" className="select_button">
                  <option>Select City</option>
                  <option>Lagos</option>
                  <option>New Delhi</option>
                  <option>New York</option>
                  <option>Mumbai</option>
                  <option>Carlifornia</option>
                  <option>London</option>
                  <option>Manchester</option>
                  <option>Abuja</option>
                </select>
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="input-text"
                ></textarea>
              </li>
              <li>
                <button
                  type="submit"
                  className="flat-button"
                  value="SEND MESSAGE"
                >
                  SEND MESSAGE
                  <img src={Send} className="send_icon" alt="send"/>
                </button>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
