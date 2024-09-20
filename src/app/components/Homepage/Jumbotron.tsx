import Image from "next/image";
import JumbotronImage from "../../../public/images/Jumbotron.png";
import classNames from "classnames";
import common from "../../styles/common.module.scss";

function Jumbotron() {
  return (
    <div
      className={classNames({
        [common.jumbotron]: true,
      })}
    >
      <Image
        src={JumbotronImage}
        className={classNames({ [common.jumbotronImage]: true })}
        alt="Header Image"
        width={1100}
        height={600}
      />
    </div>
  );
}

export default Jumbotron;
