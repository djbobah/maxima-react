import * as React from "react";

import TextBlock from "../TextBlock/TextBlock";

interface SimpleCardProps {
  pic: string;
  name: string;
  text: string;
  type?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ pic, name, text, type }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      {type === "fa" && <i className={`fa fa-${pic}`} />}
      {!type && <img src={pic} alt="" width="140" />}
      <TextBlock name={name} text={text} color="rgb(243, 247, 239)" />
    </div>
  );
};

export default SimpleCard;
