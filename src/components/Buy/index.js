import "./index.scss"
import Data from "./data"
import Mapcontent from "./MapContent";
import React from "react";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

export default function Buy() {
    const Item = Data.map((item) => {
      return <Mapcontent key={item.id} {...item} />;
    });

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
      <div>
        <div className="buy-heading">
          <h1 className="heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Buy iT".split("")}
              idx={15}
            />
          </h1>
          <h2>
            Buy your fresh farm produce, animal and fruits at affordable prices
          </h2>
        </div>

        <div className="cards-lists">{Item}</div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
}
