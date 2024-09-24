"use client";

import { Container } from "react-bootstrap";
import NavbarComponent from "../components/Common/Navbar";

const Page = ({}) => {
  return (
    <div>
      <NavbarComponent />
      <Container className="mt-5">
        <h1>The Roomers Blog</h1>
        <span>
          Stay up to date with the latest travel trends, industry news, and
          company announcements
        </span>
      </Container>
    </div>
  );
};

export default Page;
