import "./index.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Mapcontent(props) {
  return (
    <div className="card-item">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`../../images/${props.coverImg}`}
          className="card-image"
        />
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon
              icon={solid("location-pin")}
              
              className="socials"
            />
            {props.title}
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="success" href="https://google.com/maps">
            View on Map
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
