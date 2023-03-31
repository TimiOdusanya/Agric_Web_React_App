import "./index.scss"
import React, { useState } from "react";
import Img1 from "../../images/f-1.jpg"
import Img2 from "../../images/strawberry.webp";
import Img3 from "../../images/vegetables.webp";
import arrow from "../../images/arrow_icon.png";
import Comment from "../../images/comment.png";
import Calendar from "../../images/calendar.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Blog() {
  
  return (
    <div>
      <Container>
        <Row className="blog_header">
          <Col>
            <h1 className="blog_title">
              <span className="title_one">Our</span>{" "}
              <span className="title_two">Blog</span>
            </h1>
          </Col>
          <Col>
            <button className="blog_button_title">View All</button>
          </Col>
        </Row>
      </Container>

      <div className="blog_section">
        <div className="first_div">
          <img src={Img1} alt="img_1" className="image_one" />
          <div className="blog_content">
            <img src={Calendar} alt="img_1" />
            <span className="date">December 23, 2022</span>
            <img src={Comment} alt="img_1" className="comment_img" />{" "}
            <span className="comment"> 12</span>
            <h3>
              11 Ways to Create a Special Moment with all your Loved Ones this
              Holiday Season...
            </h3>
            <button className="blog_button">
              Read more <img src={arrow} alt="arrow" className="arrow_icon" />
            </button>
          </div>
        </div>
        <div className="other_divs">
          <div className="second_div">
            <div>
              <img src={Img2} alt="" className="image_two" />
            </div>
            <div className="content_two">
              <img src={Calendar} alt="img_1" />
              <span className="date">December 23, 2022</span>
              <img src={Comment} alt="img_1" className="comment_img" />{" "}
              <span className="comment"> 5</span>
              <h3>The wonders of Agriculture in Business Exploit...</h3>
              <button className="blog_button">
                Read more <img src={arrow} alt="arrow" className="arrow_icon" />
              </button>
            </div>
          </div>
          <div className="third_div">
            <div>
              <img src={Img3} alt="" className="image_three" />
            </div>
            <div className="content_two">
              <img src={Calendar} alt="img_1" />
              <span className="date">December 23, 2022</span>
              <img src={Comment} alt="img_1" className="comment_img" />{" "}
              <span className="comment"> 5</span>
              <h3>
                The best way To Preserve Your Fruits in little or no time...
              </h3>
              <button className="blog_button">
                Read more <img src={arrow} alt="arrow" className="arrow_icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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


