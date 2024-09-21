import { NextPage } from "next";
import { Row } from "react-bootstrap";
import InformationBox from "./InformationBox";
import {
  BsChat,
  BsGlobe2,
  BsHeart,
  BsList,
  BsShieldCheck,
} from "react-icons/bs";

interface Props {}

const WhyRoomers: NextPage<Props> = ({}) => {
  return (
    <div className="mt-5">
      <h5>Why Roomers.space?</h5>
      <Row className="mt-4">
        <InformationBox
          icon={<BsChat size={24} />}
          title={"Search"}
          info={"Find properties, cities, or ratings"}
        />
        <InformationBox
          icon={<BsShieldCheck size={24} />}
          title={"Read Reviews"}
          info={"Discover honest review from other renters"}
        />
        <InformationBox
          icon={<BsHeart size={24} />}
          title={"Search"}
          info={"Share your experience and help others"}
        />
        <InformationBox
          icon={<BsList size={24} />}
          title={"Search"}
          info={"Share your experience and help others"}
        />
        <InformationBox
          icon={<BsGlobe2 size={24} />}
          title={"Search"}
          info={"Share your experience and help others"}
        />
      </Row>
    </div>
  );
};

export default WhyRoomers;
