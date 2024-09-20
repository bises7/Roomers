"use client";

import classNames from "classnames";
import NavbarComponent from "./components/Navbar";
import styles from "./styles/page.module.scss";
import Jumbotron from "./components/Homepage/Jumbotron";
import { Container } from "react-bootstrap";
import SearchInput from "./components/Homepage/SearchBar";

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
        <SearchInput />
      </Container>
    </>
  );
}
