import * as React from "react";
import "./opotunityCard.scss";
import pic from "../../assets/img/opportunities1.svg";

interface OpotunityCardProps {
  name: string;
  text: string;
  pic: string;
}

const OpotunityCard: React.FC<OpotunityCardProps> = ({ name, text, pic }) => {
  return (
    <div className="card">
      <img src={pic} alt="" />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default OpotunityCard;
