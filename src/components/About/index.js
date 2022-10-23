import "./index.scss"
import React from "react";
import AnimatedLetters from "../AnimatedLetters";

export default function About(){

    const [letterClass, setLetterClass] = React.useState("text-animate");
    const nameArray = "Grow".split("");
    const jobArray = "Buy, Sell or Invest in Agriculture".split("");

    React.useEffect(() => {
      let timeoutId = setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);

      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    return (
      <div className="mydiv">
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>
              A digital platform for agribusiness We bridge the gap between
              agric investors and farmers. Revoluntionizing agriculture in
              Nigeria.
            </h2>
          </div>
        </div>
      </div>
    );
}