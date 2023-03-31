import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import About from "./About"
import Info from "./Info"
import Content from "./Content"
import Blog from "./Blog"
import Footer from "./Footer"
import Contact from "./Contact";


export default function Home(){
    return (
      <div>
        <About />
        <Info />
        <Content />
        <Blog/>
        <Contact />
      </div>
    );
}