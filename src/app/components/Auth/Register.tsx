import classNames from "classnames";
import { NextPage } from "next";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormLabel,
  Modal,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import common from "../../styles/common.module.scss";
import searchBarStyles from "../../styles/searchbar.module.scss";
import styles from "../../styles/auth.module.scss";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";

interface Props {
  value: string;
}

const Register: NextPage<Props> = ({ value }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAndCondition, setTermsAndCondition] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className={classNames({
          [common.skyblue]: true,
          [common.medium]: true,
          [common.button]: true,
        })}
        onClick={handleShow}
      >
        {value}
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-5">
          <div className="text-center">
            <h2>Welcome to Roomers Space</h2>
            <span className="text-muted">
              The best place to find and share rental reviews
            </span>
          </div>

          <Row className="mt-4">
            <Col sm={{ span: 6, offset: 3 }}>
              <Form>
                <FormLabel>Email</FormLabel>
                <FormControl
                  className={classNames({
                    [searchBarStyles.searchInput]: true,
                    [styles.input]: true,
                    "ps-2": true,
                  })}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  formNoValidate
                />

                <FormLabel>Password</FormLabel>
                <FormControl
                  className={classNames({
                    [searchBarStyles.searchInput]: true,
                    [styles.input]: true,
                    "ps-2": true,
                  })}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  formNoValidate
                />

                <Form.Check
                  className="mt-3"
                  type={"checkbox"}
                  label="I accept the Terms and Conditions"
                />

                <Form.Check
                  type={"checkbox"}
                  label="I accept the Privacy Policy"
                />

                <Button
                  variant="primary"
                  className={classNames({
                    "mt-4 w-100": true,
                    [common.button]: true,
                    [common.skyblue]: true,
                  })}
                >
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>

          <div className="text-center">
            <br />
            <small className="text-muted">
              Already have an account?&nbsp;
              <span
                className={classNames({
                  "text-muted": true,
                  [styles.link]: true,
                })}
              >
                Sign in
              </span>
            </small>
          </div>
          <Row className="mt-4">
            <Col
              className={classNames({
                "border p-2 ps-3 me-2": true,
                [styles.oAuth]: true,
              })}
            >
              <BsFacebook className="mb-1" />
              &nbsp;
              <span
                className={classNames({
                  [common.medium]: true,
                })}
              >
                Facebook
              </span>
            </Col>
            <Col
              className={classNames({
                "border p-2 ps-3 me-2": true,
                [styles.oAuth]: true,
              })}
            >
              <BsGoogle className="mb-1" />
              &nbsp;
              <span
                className={classNames({
                  [common.medium]: true,
                })}
              >
                Google
              </span>
            </Col>
            <Col
              className={classNames({
                "border p-2 ps-3 me-2": true,
                [styles.oAuth]: true,
              })}
            >
              <BsApple className="mb-1" />
              &nbsp;
              <span
                className={classNames({
                  [common.medium]: true,
                })}
              >
                Apple
              </span>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register;
