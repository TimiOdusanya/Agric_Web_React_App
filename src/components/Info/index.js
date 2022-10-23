import info from "../../images/info.png"
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./index.scss"
import arrow from "../../images/arrow-down.svg"
import { Link } from "react-router-dom";

export default function Info(){

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
      <>
        <div className="info">
          <div className="info-img">
            <img src={info} alt="info" className="info-image" />
          </div>
          <div className="info-text">
            <h5>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Why Grow iT?".split("")}
                idx={15}
              />
            </h5>

            <h1>
              Delivering Results through <span>Execution</span>
            </h1>
            <p>
              Since 1997, Grow iT has improved the business results of
              agricultural companies through execution excellence. Clients in
              all segments of agriculture trust Grow iT with business-critical
              initiatives, where execution matters most.
            </p>
          </div>
        </div>
        <div className="learn-more">
          <Link to="/content">
            Learn More
            <img src={arrow} alt="img" className="arrow" />
          </Link>
        </div>
      </>
    );
}