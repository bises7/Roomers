"use client";

import classNames from "classnames";
import NavbarComponent from "./components/Navbar";
import styles from "./styles/page.module.scss";
import common from "./styles/common.module.scss";
import Jumbotron from "./components/Homepage/Jumbotron";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <hr
        className={classNames({
          [styles.navLine]: true,
        })}
      />
      <Container
        className={classNames({
          "mt-4": true,
        })}
      >
        <Jumbotron />
      </Container>
    </>
  );
}
