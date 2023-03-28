import "./index.scss"
import React, { useState } from "react";
import Img1 from "../../images/new_test.png"
import Img2 from "../../images/new_test.png";
import Img3 from "../../images/new_test.png";
import Press1 from "../../images/test-image1.png";
import Press2 from "../../images/test-image2.jpg";
import Press3 from "../../images/test-image3.webp";
import Press4 from "../../images/test-image4.jpg";
import Test1 from "../../images/timi.jpg";
import Test2 from "../../images/becky.jfif";
import Test3 from "../../images/drake.jfif";
import Carousel from "react-bootstrap/Carousel";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const slides = [
    {
      image: "https://via.placeholder.com/500x300.png?text=Slide+1",
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/500x300.png?text=Slide+2",
      title: "Slide 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://via.placeholder.com/500x300.png?text=Slide+3",
      title: "Slide 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.title} />
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))}
    </Slider>
  );
}




// const TestimonialCarousel = ({ testimonials }) => {

  
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextSlide = () => {
//     setActiveIndex(
//       activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveIndex(
//       activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
//     );
//   };

//   return (
//     <div className="testimonial-carousel">
//       <div className="slides">
//         {testimonials.map((testimonial, index) => (
//           <div
//             className={index === activeIndex ? "slide active-slide" : "slide"}
//             key={testimonial.id}
//           >
//             <p className="test_text">{testimonial.text}</p>
//             <div className="test_content">
//               <img
//                 src={`../images/${testimonial.img}`}
//                 className="test_img"
//                 alt="test_img"
//               />
//               <div> 
//                 <h4 className="test_name">{testimonial.name}</h4>

//                 <span>{testimonial.title}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="navigation">
//         <button onClick={prevSlide}>Prev</button>
//         <button onClick={nextSlide}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;


