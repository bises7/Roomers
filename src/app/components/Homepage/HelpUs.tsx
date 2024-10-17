import { NextPage } from "next";
import { Button } from "react-bootstrap";
import common from "../../styles/common.module.scss";
import classNames from "classnames";

interface Props {
  className: string;
}

const HelpUs: NextPage<Props> = ({}) => {
  return (
    <div className="mt-5">
      <div>
        <h4>Help Us Build a Better Community!</h4>
        <span className="lead">
          <b>
            Share your experiences with landlords and help others make informed
            decisions about their next rental. Your honest feedback can make a
            big difference for the entire community.
          </b>
        </span>
      </div>
      <Button
        variant="primary"
        className={classNames({
          [common.skyblue]: true,
          [common.button]: true,
          "mt-3": true,
        })}
      >
        Submit a review
      </Button>
    </div>
  );
};

export default HelpUs;
