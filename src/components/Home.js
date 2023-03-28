import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import About from "./About"
import Info from "./Info"
import Content from "./Content"
import Testimonial from "./Testimonial"
import Footer from "./Footer"
import Contact from "./Contact";

const testimonials = [
  {
    id: 1,
    text: "It is really easy for customers to make an order online.",
    name: "John Doe",
    title: "Los Angeles, USA.",
    img: "becky.jfif",
  },
  {
    id: 2,
    text: "Very swift delivery service. I would highly recommend",
    name: "Timi Vivour",
    title: "Lagos,  Nigeria.",
    img: "timi.jpg",
  },
  {
    id: 3,
    text: "Very effective solution to save time and stress.",
    name: "Bob Smith",
    title: "London,  England.",
    img: "drake.jfif",
  },
];
export default function Home(){
    return (
      <div>
        <About />
        <Info />
        <Content />
        <Testimonial testimonials={testimonials} />
        <Contact />
      </div>
    );
}