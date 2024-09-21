"use client";

import classNames from "classnames";
import NavbarComponent from "./components/Navbar";
import styles from "./styles/page.module.scss";
import Jumbotron from "./components/Homepage/Jumbotron";
import { Container } from "react-bootstrap";
import SearchInput from "./components/Homepage/SearchBar";
import TopRated from "./components/Homepage/TopRated";
import HowItWorks from "./components/Homepage/HowItWorks";
import RecentReviews from "./components/Homepage/RecentReviews";
import WhyRoomers from "./components/Homepage/WhyRoomers";
import HeplUs from "./components/Homepage/HeplUs";

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
        <TopRated />
        <HowItWorks className=""/>
        <RecentReviews className=""/>
        <WhyRoomers className=""/>
        <HeplUs className=""/>
      </Container>
    </>
  );
}
