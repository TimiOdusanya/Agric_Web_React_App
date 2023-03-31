import "./index.scss"
import Data from "./data"
import Mapcontent from "./MapContent";
import React from "react";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Veg from "../../images/new_vege.png"
import Fruits from "../../images/fruit_icon.png";
import Grain from "../../images/grain_icon.png";
import Oils from "../../images/oil_icon.png";
import Dairy from "../../images/dairy_product.png";
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
          <h2 className="buy_header">
            Buy your fresh farm produce, animal and fruits at affordable prices
          </h2>
        </div>
        <div className="category_cursor">
          <a className="veg_category" href="#grain">
            <img src={Grain} alt="vegetable" />
            <h3>GRAIN AND NUTS</h3>
          </a>
          <a className="veg_category" href="#fruits">
            <img src={Fruits} alt="vegetable" />
            <h3>FRUITS</h3>
          </a>
          <a className="veg_category" href="#oils">
            <img src={Oils} alt="vegetable" />
            <h3>OILS</h3>
          </a>
          <a className="veg_category" href="#dairy">
            <img src={Dairy} alt="vegetable" />
            <h3>DAIRY</h3>
          </a>
          <a className="veg_category" href="#vegetables">
            <img src={Veg} alt="vegetable" />
            <h3>VEGETABLES</h3>
          </a>
          <a className="veg_category" href="#meat">
            <img src={Veg} alt="vegetable" />
            <h3>MEAT AND POULTRY</h3>
          </a>
        </div>
        <div>
          <h2 className="section_header" id="grain">
            Exclusive Grain For You
          </h2>
          <div className="cards-lists">{Item}</div>
          {/* {console.log(Item[2].props.title)} */}
        </div>
        <div>
          <h2 className="section_header" id="fruits">
            Fresh Fruits In Stock
          </h2>
          <div className="cards-lists">{Item}</div>
        </div>
        <div>
          <h2 className="section_header" id="oils">
            Good Quality Oils
          </h2>
          <div className="cards-lists">{Item}</div>
        </div>
        <div>
          <h2 className="section_header" id="dairy">
            Shop Your Dairy Products
          </h2>
          <div className="cards-lists">{Item}</div>
        </div>
        <div>
          <h2 className="section_header" id="vegetables">
            Fresh Vegetables For You
          </h2>
          <div className="cards-lists">{Item}</div>
        </div>
        <div>
          <h2 className="section_header" id="meat">
            Fresh Meat and Poultry
          </h2>
          <div className="cards-lists">{Item}</div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
}
