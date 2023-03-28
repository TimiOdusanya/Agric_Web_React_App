import Container from "react-bootstrap/Container";
import "./index.scss";
import Logo from "../../images/logo_3.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header() {
  return (
    <div className="navbar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#CCFB5D"
        variant="light"
        className="nav"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <span className="header-title">Gr</span>
              <img src={Logo} alt="logo" className="logo" />{" "}
              <span className="header-title">w iT</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link>
                <Link to="/" className="each-link">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/buy" className="each-link">
                  Buy
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sell" className="each-link">
                  Sell
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/invest" className="each-link">
                  Invest
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/location" className="each-link">
                  Locations
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="/appointment" className="each-link">
                  <button className="appointment_button">
                    Book an Appointment
                  </button>
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="https://twitter.com">
                <FontAwesomeIcon
                  icon={brands("twitter")}
                  bounce
                  className="socials"
                />
              </Nav.Link>
              <Nav.Link href="https://instagram.com">
                <FontAwesomeIcon
                  icon={brands("instagram")}
                  bounce
                  className="socials"
                />
              </Nav.Link>
              <Nav.Link href="https://facebook.com">
                <FontAwesomeIcon
                  icon={brands("facebook")}
                  bounce
                  className="socials"
                />
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}