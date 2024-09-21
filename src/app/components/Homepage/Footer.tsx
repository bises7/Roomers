import { NextPage } from "next";
import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

interface Props {
  className: string;
}

const Footer: NextPage<Props> = ({}) => {
  return (
    <div className="my-5">
      <Row>
        <Col>
          <span className="lead">
            <b>About Us</b>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <b>FAQ</b>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <b>Blog</b>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <b>Contact Us</b>
          </span>
        </Col>
        <Col>
          <span className="lead">
            <b>Terms & Conditions</b>
          </span>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-12 text-center">
          <span className="lead">
            <b>Privacy Policy</b>
          </span>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-12 text-center text-muted">
          <BsInstagram size={24} className="me-3" />
          <BsTwitterX size={24} className="me-3" />
          <BsFacebook size={24} />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
