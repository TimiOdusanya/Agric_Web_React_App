import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

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
      <div className="header-text">
        <h1 className="heading">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Sell your items".split("")}
            idx={15}
          />
        </h1>

        <h2>
          You can sell your farm produce with GrowiT, just fill the form below
          and an agent will respond to you shortly
        </h2>
      </div>

      <div>
        <h3>Sell below </h3>
      </div>
      <div>
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
              <select name="languages" id="lang">
                <option >Select City</option>
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
              <input
                type="submit"
                className="flat-button"
                value="SEND MESSAGE"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
