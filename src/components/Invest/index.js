import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
            strArray={"Check out our Investment Plans".split("")}
            idx={15}
          />
        </h1>

        <h2>You have made the right decision investing with GrowiT</h2>
      </div>
      <div className="card-div">
        <Card style={{ width: "18rem" }} className="each-card">
          <Card.Body>
            <Card.Title>You Invest</Card.Title>
            <br />
            <Button variant="success">01</Button>
            <Card.Text className="card-text">
              We have several varieties investment plans you can choose from.
            </Card.Text>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="each-card">
          <Card.Body>
            <Card.Title>We Farm</Card.Title>
            <br />
            <Button variant="success">02</Button>
            <br />
            <Card.Text className="card-text">
              Once you invest, we plant, we harvest and sell the produce.
            </Card.Text>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="each-card">
          <Card.Body>
            <Card.Title>You Profit</Card.Title>
            <br />
            <Button variant="success">03</Button>
            <Card.Text className="card-text">
              You receive your capital and ROI after sales has been made.
            </Card.Text>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div>
        <h3>Invest Now!</h3>
      </div>
    </div>
  );
}
