import Image from "next/image";
import JumbotronImage from "../../public/images/AboutUs.webp";
import classNames from "classnames";
import common from "../styles/common.module.scss";
import styles from "../styles/page.module.scss";
import { Button } from "react-bootstrap";
import Register from "../components/Auth/Register";

function Jumbotron() {
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
        <Register value="Join the community" />
      </div>
    </div>
  );
}

export default Jumbotron;
