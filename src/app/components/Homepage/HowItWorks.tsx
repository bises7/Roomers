import { NextPage } from "next";
import { Col, Row } from "react-bootstrap";
import InformationBox from "./InformationBox";
import { BsChat, BsCheck2, BsSearch } from "react-icons/bs";

interface Props {}

const HowItWorks: NextPage<Props> = ({}) => {
  return (
    <div className="mt-5">
      <h5>How Roomers.space Works</h5>
      <Row className="mt-4">
        <InformationBox
          icon={<BsSearch size={24} />}
          title={"Search"}
          info={"Find properties, cities, or ratings"}
        />
        <InformationBox
          icon={<BsChat size={24} />}
          title={"Read Reviews"}
          info={"Discover honest review from other renters"}
        />
        <InformationBox
          icon={<BsCheck2 size={24} />}
          title={"Search"}
          info={"Share your experience and help others"}
        />
      </Row>
    </div>
  );
};

export default HowItWorks;
