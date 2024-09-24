"use client";

import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/blogs.module.scss";
import common from "../styles/common.module.scss";

const Page = ({}) => {
  const [blogs, setBlogs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        let newBlogs: JSX.Element[] = [];
        json.forEach((element: { title: string }) => {
          newBlogs.push(
            <Col
              sm={2}
              key={element.title}
              className={classNames({
                "mb-3": true,
                [styles.blogsListElement]: true,
              })}
            >
              <div className="py-3 mb-2">
                <Image
                  src="https://picsum.photos/500/300"
                  width={500}
                  height={300}
                  alt="Fake Image"
                  className={classNames({
                    [styles.blogsListImage]: true,
                  })}
                />
                <h6>{element.title}</h6>
              </div>
              <span
                className={classNames({
                  [styles.date]: true,
                  "text-muted": true,
                  [common.medium]: true,
                })}
              >
                {Date.now().toLocaleString()}
              </span>
            </Col>
          );
        });
        setBlogs(newBlogs);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      <Container className="mt-5">
        <h1>The Roomers Blog</h1>
        <span
          className={classNames({
            [common.medium]: true,
          })}
        >
          Stay up to date with the latest travel trends, industry news, and
          company announcements
        </span>

        <Row>{blogs}</Row>

        <Footer className="" />
      </Container>
    </div>
  );
};

export default Page;
