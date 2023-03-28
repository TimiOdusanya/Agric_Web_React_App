import "./index.scss"
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

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
            <Button variant="success">${props.price}</Button>
            <Button className="more_button">View More</Button>
          </Card.Body>
        </Card>
      </div>
      // <div className="content-div">
      //   <Card style={{ width: "18rem" }}>
      //     <Card.Img variant="top" src={`../images/${prop.coverImg}`} />
      //     <Card.Body>
      //       <Card.Title>{prop.title}</Card.Title>
      //       <Card.Text>{prop.description}</Card.Text>
      //       <Button className="more_button">View More</Button>
      //     </Card.Body>
      //   </Card>
      //   {/* <img
      //     src={`../images/${prop.coverImg}`}
      //     className="content-img"
      //     alt="content-img"
      //   /> */}
      //   {/* <div className="image_overlay image_overlay_blur">
      //     <div className="image_title">{prop.title}</div>
      //     <br />
      //     <p className="image_description">{prop.description}</p>
      //     <br />
      //     <div className="image_button">
      //       <Button variant="success" href={prop.title}>
      //         Click Here
      //       </Button>
      //     </div>
      //   </div> */}
      // </div>
    );
}