import { NextPage } from "next";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import styles from "../../styles/footer.module.scss";
import classNames from "classnames";

interface Props {
  className: string;
}

const Footer: NextPage<Props> = ({}) => {
  return (
    <div className="my-5">
      <Row className="text-center">
        <Col>
          <span className="lead">
            <Link
              href="/about"
              className={classNames({
                [styles.links]: true,
              })}
            >
              <b>About Us</b>
            </Link>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <Link
              href="/faq"
              className={classNames({
                [styles.links]: true,
              })}
            >
              <b>FAQ</b>
            </Link>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <Link
              href="/blog"
              className={classNames({
                [styles.links]: true,
              })}
            >
              <b>Blog</b>
            </Link>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <Link
              href="/contact"
              className={classNames({
                [styles.links]: true,
              })}
            >
              <b>Contact Us</b>
            </Link>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <Link
              href="/terms-and-condition"
              className={classNames({
                [styles.links]: true,
              })}
            >
              <b>Terms & Conditions</b>
            </Link>
          </span>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-12 text-center">
          <span className="lead">
            <Link
              href="/privacy-policy"
              className={classNames({
                [styles.links]: true,
              })}
            >
              <b>Privacy Policy</b>
            </Link>
          </span>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-12 text-center text-muted">
          <Link
            href="/privacy-policy"
            className={classNames({
              [styles.links]: true,
            })}
          >
            <BsInstagram size={24} className="me-3" />
          </Link>{" "}
          <Link
            href="/privacy-policy"
            className={classNames({
              [styles.links]: true,
            })}
          >
            <BsTwitterX size={24} className="me-3" />
          </Link>
          <Link
            href="/privacy-policy"
            className={classNames({
              [styles.links]: true,
            })}
          >
            <BsFacebook size={24} />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
