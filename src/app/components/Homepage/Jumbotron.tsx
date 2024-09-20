import Image from "next/image";
import JumbotronImage from "../../../public/images/Jumbotron.png";
import classNames from "classnames";
import common from "../../styles/common.module.scss";
import styles from "../../styles/page.module.scss";
import { Button } from "react-bootstrap";

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
            Find Trusted Landlords for your Next <br /> Room Rental
          </span>{" "}
          <br />
          <span
            className={classNames({
              [styles.jumbotronDescription]: true,
            })}
          >
            Roomers.space helps renters share experience and discover reliable
            landlords
          </span>{" "}
        </div>

        <br />
        <div className="">
          <Button
            className={classNames({
              [common.skyblue]: true,
              [common.medium]: true,
              [common.button]: true,
              "me-3": true,
            })}
            variant="primary"
          >
            Browse Reviews
          </Button>
          <Button
            className={classNames({
              [common.medium]: true,
              [common.button]: true,
            })}
            variant="light"
          >
            Submit a Review
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
