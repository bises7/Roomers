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
} from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import common from "../../styles/common.module.scss";
import searchBarStyles from "../../styles/searchbar.module.scss";
import styles from "../../styles/auth.module.scss";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../../firebase/firebaseConfig";

interface Props {
  value: string;
}

const Register: NextPage<Props> = ({ value }) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string>("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    termsAndCondition: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms and Conditions"
    ),
    privacyPolicy: Yup.boolean().oneOf(
      [true],
      "You must accept the Privacy Policy"
    ),
  });

  const createUser = async (email: string, password: string) => {
    const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
      handleClose(); // Close the modal on successful registration
    } catch (error: any) {
      console.error("Error signing up:", error);
      setError(error.message); // Display error message to the user
    }
  };

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

          <Formik
            initialValues={{
              email: "",
              password: "",
              termsAndCondition: false,
              privacyPolicy: false,
            }}
            validationSchema={validationSchema}
            onSubmit={({ email, password }, { setSubmitting }) => {
              createUser(email, password);
              setSubmitting(false);
              handleClose();
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mt-4">
                  <Col sm={{ span: 6, offset: 3 }}>
                    <Form.Group>
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        as={Field}
                        name="email"
                        type="email"
                        placeholder="Enter email"
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
                      <FormControl
                        as={Field}
                        name="password"
                        type="password"
                        placeholder="Enter password"
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

                    <Form.Group className="mt-3">
                      <Form.Check
                        name="termsAndCondition"
                        label="I accept the Terms and Conditions"
                        onChange={handleChange}
                        isInvalid={
                          touched.termsAndCondition &&
                          !!errors.termsAndCondition
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.termsAndCondition}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <Form.Check
                        name="privacyPolicy"
                        label="I accept the Privacy Policy"
                        onChange={handleChange}
                        isInvalid={
                          touched.privacyPolicy && !!errors.privacyPolicy
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.privacyPolicy}
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
                      Sign Up
                    </Button>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <small className="text-muted">
                    Already have an account?{" "}
                    <span className={classNames(styles.link, "text-muted")}>
                      Sign in
                    </span>
                  </small>
                </div>
                <Row className="mt-4">
                  <Col
                    className={classNames("border p-2 ps-3 me-2", styles.oAuth)}
                  >
                    <BsFacebook className="mb-1" />
                    <span className={classNames(common.medium)}> Facebook</span>
                  </Col>
                  <Col
                    className={classNames("border p-2 ps-3 me-2", styles.oAuth)}
                  >
                    <BsGoogle className="mb-1" />
                    <span className={classNames(common.medium)}> Google</span>
                  </Col>
                  <Col
                    className={classNames("border p-2 ps-3 me-2", styles.oAuth)}
                  >
                    <BsApple className="mb-1" />
                    <span className={classNames(common.medium)}> Apple</span>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register;
