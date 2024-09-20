"use client";

import classNames from "classnames";
import NavbarComponent from "./components/Navbar";
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <hr
        className={classNames({
          [styles.navLine]: true,
        })}
      />
    </>
  );
}
