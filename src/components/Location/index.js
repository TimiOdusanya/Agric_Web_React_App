import "./index.scss";
import Data from "./data";
import Mapcontent from "./Mapcontent";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

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
    <div>
      <div>
        
        <h1 className="heading">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Looking For Where to Buy?".split("")}
            idx={15}
          />
        </h1>
        <h2>
          You can find a Grow iT super store or farmers market at one of these locations
        </h2>
      </div>
      <div className="cards-lists">{Item}</div>
    </div>
  );
}
