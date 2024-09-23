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
            <Nav.Link active={pathname === "/"}>
              <Link
                href="/"
                className={classNames({
                  [styles.link]: true,
                })}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link active={pathname === "/borwse-reviews"}>
              <Link
                href="/browse-reviews"
                className={classNames({
                  [styles.link]: true,
                })}
              >
                Browse Reviews
              </Link>
            </Nav.Link>
            <Nav.Link active={pathname === "/submit-review"}>
              <Link
                href="/submit-review"
                className={classNames({
                  [styles.link]: true,
                })}
              >
                Submit a Review
              </Link>
            </Nav.Link>
            <Nav.Link active={pathname === "/login"}>
              <Link
                href="/login"
                className={classNames({
                  [styles.link]: true,
                })}
              >
                Log in
              </Link>
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
