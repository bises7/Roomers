import Image from "next/image";
import JumbotronImage from "../../public/images/AboutUs.webp";
import classNames from "classnames";
import styles from "../styles/page.module.scss";
import Register from "../components/Auth/Register";
import { useState } from "react";
import AuthComponent from "../components/Auth/Auth";

function Jumbotron() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  return (
    <div
      className={classNames({
        [styles.jumbotron]: true,
      })}
    >
      <Image
        src={JumbotronImage}
        className={classNames({ [styles.jumbotronImage]: true })}
        alt="Header Image"
        width={1100}
        height={600}
      />
      <div
        className={classNames({
          [styles.jumbotronContent]: true,
        })}
      >
        <div
          className={classNames({
            [styles.jumbotronText]: true,
          })}
        >
          <span
            className={classNames({
              [styles.jumbotronSlogan]: true,
            })}
          >
            About Us
          </span>{" "}
          <br />
          <span
            className={classNames({
              [styles.jumbotronDescription]: true,
            })}
          >
            Connecting renters with trustworthy landlords.
          </span>{" "}
        </div>

        <br />

        <AuthComponent className="" login={false} />
      </div>
    </div>
  );
}

export default Jumbotron;
