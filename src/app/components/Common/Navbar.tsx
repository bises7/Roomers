import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../../styles/navbar.module.scss";
import common from "../../styles/common.module.scss";
import classNames from "classnames";

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      className={classNames({
        "bg-body-tertiary": true,
        [common.medium]: true,
        [styles.whiteNav]: true,
      })}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Roomers logo" width={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={classNames({
                [styles.link]: true,
              })}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={classNames({
                [styles.link]: true,
              })}
            >
              Browse Reviews
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={classNames({
                [styles.link]: true,
              })}
            >
              Submit a Review
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={classNames({
                [styles.link]: true,
              })}
            >
              Log in
            </Nav.Link>
            <Button
              variant="primary"
              className={classNames({
                [common.skyblue]: true,
                [common.medium]: true,
                [common.button]: true,
              })}
            >
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
