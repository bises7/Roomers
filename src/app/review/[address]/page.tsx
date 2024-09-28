"use client";

import NavbarComponent from "@/app/components/Common/Navbar";
import classNames from "classnames";
import { Col, Container, FormControl, ProgressBar, Row } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa6";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import styles from "../../styles/review.module.scss";
import profileStyles from "../../styles/profile.module.scss";
import searchBarStyles from "../../styles/searchbar.module.scss";
import authStyles from "../../styles/auth.module.scss";
import SearchInput from "@/app/components/Homepage/SearchBar";
import Image from "next/image";
import PaginationComponent from "@/app/components/Common/Pagination";
import PaginationStyles from "../../styles/pagination.module.scss";
import Footer from "@/app/components/Common/Footer";

const Page = ({}) => {
  const getStar = (stars: number) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<RiStarFill />);
    }
    for (let i = stars; i < 5; i++) {
      starIcons.push(<RiStarLine />);
    }
    return starIcons;
  };

  return (
    <div>
      <NavbarComponent />
      <Container className="mt-4">
        <h5>Johanna Smith, 1234 5th Ave, San Francisco</h5>
        <div className="d-flex mt-4">
          <div>
            <h3>4.5</h3>
            {getStar(4)}
            <br />
            <span>47 reviews</span>
          </div>
          <div className="w-50 ms-4">
            <Row>
              <Col sm={1}>
                <span>5</span>
              </Col>
              <Col className="pt-1">
                <ProgressBar variant="dark" now={65} />
              </Col>
              <Col sm={1}>65%</Col>
            </Row>
            <Row>
              <Col sm={1}>
                <span>4</span>
              </Col>
              <Col className="pt-1">
                <ProgressBar variant="dark" now={20} />
              </Col>
              <Col sm={1}>20%</Col>
            </Row>
            <Row>
              <Col sm={1}>
                <span>3</span>
              </Col>
              <Col className="pt-1">
                <ProgressBar variant="dark" now={7} />
              </Col>
              <Col sm={1}>7%</Col>
            </Row>
            <Row>
              <Col sm={1}>
                <span>2</span>
              </Col>
              <Col className="pt-1">
                <ProgressBar variant="dark" now={3} />
              </Col>
              <Col sm={1}>3%</Col>
            </Row>
            <Row>
              <Col sm={1}>
                <span>1</span>
              </Col>
              <Col className="pt-1">
                <ProgressBar variant="dark" now={5} />
              </Col>
              <Col sm={1}>5%</Col>
            </Row>
          </div>
        </div>
        <div className="d-flex mt-4">
          <span className={classNames(styles.tag, "p-2 me-3")}>
            Responsive <FaAngleDown className="pb-1" />{" "}
          </span>
          <span className={classNames(styles.tag, "p-2 me-3")}>
            Unresponsive <FaAngleDown className="pb-1" />{" "}
          </span>
          <span className={classNames(styles.tag, "p-2 me-3")}>
            Professional <FaAngleDown className="pb-1" />{" "}
          </span>
        </div>

        <SearchInput />

        <div className="mt-4">
          <div>
            <span>Linda</span> <br />
            <span className="text-muted">June 10,2023</span> <br />
            {getStar(4)}
            <p>
              Johanaa is the best landlord I&apos;ve ever had. She&apos;s always
              responsive and get things fixed right away. The building is well
              maintained and in a great location. Highly recommend.
            </p>
          </div>
          <div className="mt-3">
            <span>Linda</span> <br />
            <span className="text-muted">June 10,2023</span> <br />
            {getStar(4)}
            <p>
              Johanaa is the best landlord I&apos;ve ever had. She&apos;s always
              responsive and get things fixed right away. The building is well
              maintained and in a great location. Highly recommend.
            </p>
          </div>
          <div className="mt-3">
            <span>Linda</span> <br />
            <span className="text-muted">June 10,2023</span> <br />
            {getStar(4)}
            <p>
              Johanaa is the best landlord I&apos;ve ever had. She&apos;s always
              responsive and get things fixed right away. The building is well
              maintained and in a great location. Highly recommend.
            </p>
          </div>
        </div>

        <div className="d-flex mt-4">
          <Image
            src="https://picsum.photos/200"
            alt="Profile Pic"
            width={200}
            height={200}
            className={classNames(profileStyles.roundPic)}
          />

          <FormControl
            className={classNames({
              [searchBarStyles.searchInput]: true,
              [authStyles.input]: true,
              "ps-2": true,
              "ms-3": true,
              "border-left": true,
            })}
            type="email"
            placeholder="Share your experience with the landlord"
            formNoValidate
          />
        </div>

        <PaginationComponent
          totalItems={10}
          currentPage={1}
          itemsPerPage={2}
          key={2}
          setCurrentPage={() => {}}
          className={classNames("mt-4", PaginationStyles.pagination)}
        />

        <Footer className="" />
      </Container>
    </div>
  );
};

export default Page;
