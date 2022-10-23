import "./index.scss"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cart from "../../images/cart.svg"

export default function Mapcontent(props){
    return (
      <div className="card-item">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`../../images/${props.coverImg}`}
            className="card-image"
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="description">{props.description}</Card.Text>
            <Button variant="success">${props.price}</Button>
            <a href="">
              <img src={Cart} alt="cart" className="cart" />
            </a>
          </Card.Body>
        </Card>
      </div>
    );
}