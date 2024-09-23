import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../../styles/navbar.module.scss";
import common from "../../styles/common.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

function NavbarComponent() {
  const pathname = usePathname();

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
            <Link
              href="/"
              className={classNames({
                [styles.link]: true,
                "nav-link": true,
                active: pathname === "/",
              })}
            >
              Home
            </Link>
            <Link
              href="/browse-reviews"
              className={classNames({
                [styles.link]: true,
                "nav-link": true,
                active: pathname === "/browse-review",
              })}
            >
              Browse Reviews
            </Link>
            <Link
              href="/submit-review"
              className={classNames({
                [styles.link]: true,
                "nav-link": true,
                active: pathname === "/submit-review",
              })}
            >
              Submit a Review
            </Link>

            <Login />
            <Register value="Get Started" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
