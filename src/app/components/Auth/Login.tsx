import React, { useState } from "react";
import { NextPage } from "next";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormLabel,
  Modal,
  Row,
  Nav,
} from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import navbarStyles from "../../styles/navbar.module.scss";
import common from "../../styles/common.module.scss";
import searchBarStyles from "../../styles/searchbar.module.scss";
import styles from "../../styles/auth.module.scss";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormikHelpers } from "formik";
import { auth } from "../../../../firebase/firebaseConfig";

interface Props {
  classnames: string;
}
interface LoginFormValues {
  email: string;
  password: string;
}

const Login: NextPage<Props> = ({}) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  if (error) {
    console.log(error);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const loginUser = async (
    email: string,
    password: string,
    setFieldError: FormikHelpers<LoginFormValues>["setFieldError"]
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      handleClose(); // Close the modal on successful login
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("auth/invalid-credential")) {
          setFieldError("password", "Invalid Credentials");
          setFieldError("email", "Invalid Credentials");
        } else {
          setError("Login failed. Please try again.");
        }
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <Nav.Link
        className={classNames({
          [navbarStyles.link]: true,
        })}
        onClick={handleShow}
      >
        Log in
      </Nav.Link>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-5">
          <div className="text-center">
            <h2>Welcome to Roomers Space</h2>
            <span className="text-muted">
              The best place to find and share rental reviews
            </span>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              loginUser(values.email, values.password, setFieldError);
              setSubmitting(false);
            }}
          >
            {({ handleSubmit, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mt-4">
                  <Col sm={{ span: 6, offset: 3 }}>
                    <Form.Group>
                      <FormLabel>Email</FormLabel>
                      <Field
                        name="email"
                        type="email"
                        as={FormControl}
                        placeholder="Email"
                        className={classNames(
                          searchBarStyles.searchInput,
                          styles.input,
                          "ps-2"
                        )}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <FormLabel>Password</FormLabel>
                      <Field
                        name="password"
                        type="password"
                        as={FormControl}
                        placeholder="Password"
                        className={classNames(
                          searchBarStyles.searchInput,
                          styles.input,
                          "ps-2"
                        )}
                        isInvalid={touched.password && !!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className={classNames(
                        "mt-4 w-100",
                        common.button,
                        common.skyblue
                      )}
                    >
                      Sign In
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>

          <div className="text-center mt-3">
            <small className={classNames("text-muted", styles.link)}>
              Forgot your password?
            </small>
            <br />
            <small className="text-muted">
              New to Roomers Space?{" "}
              <span className={classNames("text-muted", styles.link)}>
                Sign up
              </span>
            </small>
          </div>
          <Row className="mt-4">
            <Col className={classNames("border p-2 ps-3 me-2", styles.oAuth)}>
              <BsFacebook className="mb-1" />
              <span className={classNames(common.medium)}> Facebook</span>
            </Col>
            <Col className={classNames("border p-2 ps-3 me-2", styles.oAuth)}>
              <BsGoogle className="mb-1" />
              <span className={classNames(common.medium)}> Google</span>
            </Col>
            <Col className={classNames("border p-2 ps-3 me-2", styles.oAuth)}>
              <BsApple className="mb-1" />
              <span className={classNames(common.medium)}> Apple</span>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
