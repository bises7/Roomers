"use client";

import NavbarComponent from "../components/Common/Navbar";
import { Button, Container, Form } from "react-bootstrap";
import searchbarStyles from "../styles/searchbar.module.scss";
import authStyles from "../styles/auth.module.scss";
import common from "../styles/common.module.scss";
import classNames from "classnames";
import { useState } from "react";
import styles from "../styles/review.module.scss";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { useDropzone } from "react-dropzone";

const thumbsContainer: object = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb: object = {
  display: "flex",
  justifyContent: "center",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner: object = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img: object = {
  display: "block",
  width: "auto",
  height: "100%",
};

interface FileWithPreview {
  name: string;
  preview: string; // Assuming preview is a URL string
}

const Page = (object) => {
  const [landlordName, setLandlordName] = useState<string>("");
  const [propertyAddress, setPropertyAddress] = useState<string>("");
  const [starHoverNumber, setStarHoverNumber] = useState<number>(0);
  const [keywords, setKeywords] = useState<string>("");

  const { getRootProps, getInputProps } = useDropzone({
    disabled: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  return (
    <div>
      <NavbarComponent />
      <Container className="mt-5">
        <div>
          <h4>Submit a review</h4>
          <span>
            You feedback helps other make informed decisions. Please be honest
            and respectful.
          </span>
        </div>

        <Form className="mt-4 w-50">
          <Form.Group>
            <Form.Label>Landlord Name</Form.Label>
            <Form.Control
              className={classNames({
                [searchbarStyles.searchInput]: true,
                [authStyles.input]: true,
                "ps-2": true,
              })}
              type="text"
              placeholder="Landlord Name"
              value={landlordName}
              onChange={(e) => setLandlordName(e.target.value)}
              formNoValidate
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Property Address</Form.Label>
            <Form.Control
              className={classNames({
                [searchbarStyles.searchInput]: true,
                [authStyles.input]: true,
                "ps-2": true,
              })}
              type="text"
              placeholder="Property Address"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              formNoValidate
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Overall Rating</Form.Label>
            <div>
              <span>
                {starHoverNumber < 1 ? (
                  <RiStarLine
                    onMouseEnter={() => {
                      setStarHoverNumber(1);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                ) : (
                  <RiStarFill
                    onMouseEnter={() => {
                      setStarHoverNumber(1);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                )}
              </span>
              <span>
                {starHoverNumber < 2 ? (
                  <RiStarLine
                    onMouseEnter={() => {
                      setStarHoverNumber(2);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                ) : (
                  <RiStarFill
                    onMouseEnter={() => {
                      setStarHoverNumber(2);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                )}
              </span>
              <span>
                {starHoverNumber < 3 ? (
                  <RiStarLine
                    onMouseEnter={() => {
                      setStarHoverNumber(3);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                ) : (
                  <RiStarFill
                    onMouseEnter={() => {
                      setStarHoverNumber(3);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                )}
              </span>
              <span>
                {starHoverNumber < 4 ? (
                  <RiStarLine
                    onMouseEnter={() => {
                      setStarHoverNumber(4);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                ) : (
                  <RiStarFill
                    onMouseEnter={() => {
                      setStarHoverNumber(4);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                )}
              </span>
              <span>
                {starHoverNumber < 5 ? (
                  <RiStarLine
                    onMouseEnter={() => {
                      setStarHoverNumber(5);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                ) : (
                  <RiStarFill
                    onMouseEnter={() => {
                      setStarHoverNumber(5);
                    }}
                    className={classNames(styles.star, "me-1")}
                  />
                )}
              </span>
            </div>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Detailed Feedback</Form.Label>
            <Form.Control as="textarea" style={{ height: "140px" }} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Add Keywords</Form.Label>
            <Form.Control
              className={classNames({
                [searchbarStyles.searchInput]: true,
                [authStyles.input]: true,
                "ps-2": true,
              })}
              type="text"
              placeholder="Example: Spacious, Convenient, Noisy"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              formNoValidate
            />
          </Form.Group>
        </Form>

        <section
          className={classNames(
            styles.container,
            "mt-4",
            "text-center",
            "py-5"
          )}
        >
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <h5>Drag and drop photos here</h5>
            <span>or</span> <br />
            <Button
              variant="light"
              className={classNames(common.button, "mt-2")}
            >
              Choose photos from device
            </Button>
          </div>
        </section>

        <aside style={thumbsContainer}>{thumbs}</aside>

        <div className="d-flex justify-content-end my-4">
          <div>
            <Button
              variant="secondary"
              className={classNames(common.button, "me-2")}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              className={classNames(common.button, common.skyblue)}
            >
              Post review
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
