import "./index.scss"
import Button from "react-bootstrap/esm/Button";

export default function Mapcontent(prop){
    return (
      <div className="content-div">
        <img
          src={`../../images/${prop.coverImg}`}
          className="content-img"
          alt="content-img"
        />
        <div className="image_overlay image_overlay_blur">
          <div className="image_title">{prop.title}</div>
          <br />
          <p className="image_description">{prop.description}</p>
          <br />
          <div className="image_button">
            <Button variant="success" href={prop.title}>Click Here</Button>
          </div>
        </div>
      </div>
    );
}