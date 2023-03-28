import "./index.scss"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cart from "../../images/cart.svg"
import ShopppingCart from "../../images/cart.png";

export default function Mapcontent(props){
    return (
      <div className="card-item">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`../images/${props.coverImg}`}
            className="card-image"
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="description">{props.description}</Card.Text>
            <div className="price_details">
              <h5>${props.price}</h5>
              <button className="cart_button"> Add to Cart <img className="cart_img" src={ShopppingCart} alt='cart'/></button>
            </div>
              {/* <img src={Cart} alt="cart" className="cart" /> */}
          </Card.Body>
        </Card>
      </div>
    );
}