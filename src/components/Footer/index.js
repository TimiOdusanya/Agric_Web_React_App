import Logo from "../../images/logo_3.png";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import "./index.scss";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <div className="footer__content">
            <a href="/">
              <span className="logo_text">Gr</span>
              <img src={Logo} className="logo" alt="img_logo" />
              <span className="logo_text">w iT</span>
            </a>

            <h3 className="subscribe_text">
              Subscribe to our newsletter <br />
              to stay updated
            </h3>

            <div className="footer-email">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
              />

              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer-title">Our Address</h3>

          <ul className="footer__data">
            <li className="footer__information">The 39th Tower,</li>
            <li className="footer__information">39, Simpson Street,</li>
            <li className="footer__information">Victoria Island, Lagos.</li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer-title">Contact Us</h3>

          <ul className="footer__data">
            <li className="footer__information">+234 81 1234 5367</li>

            <div className="footer__social">
              <FontAwesomeIcon
                icon={brands("instagram")}
                bounce
                className="socials"
              />
              <FontAwesomeIcon
                icon={brands("twitter")}
                bounce
                className="socials"
              />
              <FontAwesomeIcon
                icon={brands("facebook")}
                bounce
                className="socials"
              />
            </div>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer-title">We accept all credit cards</h3>

          <div className="footer__cards">
            <img src={card1} alt="card-img" className="footer__card" />
            <img src={card2} alt="card-img" className="footer__card" />
            <img src={card3} alt="card-img" className="footer__card" />
            <img src={card4} alt="card-img" className="footer__card" />
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        &#169; Grow iT 2023 || All rights reserved
      </p>
    </div>
  );
}
