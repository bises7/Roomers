"use client";

import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "../components/Common/Navbar";
import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/review.module.scss";
import { useRouter } from "next/navigation";

const Page = ({}) => {
  const router = useRouter();

  return (
    <div>
      <NavbarComponent />
      <Container className="mt-4">
        <h4>Reviews</h4>
        <Row>
          <Col
            onClick={() => {
              router.push("/review/1234MainStreet?id=12");
            }}
            sm="4"
            className={classNames(styles.reviewCard, "d-flex mt-2")}
          >
            <Image
              src="https://picsum.photos/200"
              alt="Property picture"
              width={200}
              height={200}
              className={classNames(styles.propertyImage)}
            />
            <div className="ms-3">
              <span>123 Main st, San Francisco, CA</span> <br />
              <span className="text-muted">4.5 stars</span>
            </div>
          </Col>
          <Col sm="4" className={classNames(styles.reviewCard, "d-flex mt-2")}>
            <Image
              src="https://picsum.photos/200"
              alt="Property picture"
              width={200}
              height={200}
              className={classNames(styles.propertyImage)}
            />
            <div className="ms-3">
              <span>123 Main st, San Francisco, CA</span> <br />
              <span className="text-muted">4.5 stars</span>
            </div>
          </Col>
          <Col sm="4" className={classNames(styles.reviewCard, "d-flex mt-2")}>
            <Image
              src="https://picsum.photos/200"
              alt="Property picture"
              width={200}
              height={200}
              className={classNames(styles.propertyImage)}
            />
            <div className="ms-3">
              <span>123 Main st, San Francisco, CA</span> <br />
              <span className="text-muted">4.5 stars</span>
            </div>
          </Col>
          <Col sm="4" className={classNames(styles.reviewCard, "d-flex mt-2")}>
            <Image
              src="https://picsum.photos/200"
              alt="Property picture"
              width={200}
              height={200}
              className={classNames(styles.propertyImage)}
            />
            <div className="ms-3">
              <span>123 Main st, San Francisco, CA</span> <br />
              <span className="text-muted">4.5 stars</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
