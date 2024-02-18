import * as React from "react";
import "./opotunityCard.scss";
import { Card, Typography } from "antd";
// import pic from "../../assets/img/opportunities1.svg";
const { Title, Paragraph } = Typography;

interface OpotunityCardProps {
  name: string;
  text: string;
  pic: string;
}

const OpotunityCard: React.FC<OpotunityCardProps> = ({ name, text, pic }) => {
  return (
    <Card
      style={{
        width: 390,
        height: 320,
        backdropFilter: "blur(11px)",
        background:
          "linear-gradient( 133.24deg, rgb(255, 255, 255) -22.753%, rgba(243, 247, 239, 0) 94.262% )",
        padding: "20px 20px 10px 20px",
      }}
      hoverable
    >
      <img src={pic} alt="" />
      <Title level={3} className="opotunityCard__title">
        {name}
      </Title>
      <Paragraph
        style={{
          color: "rgb(47, 42, 55)",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "120%",
        }}
      >
        {text}
      </Paragraph>
    </Card>
  );
};

export default OpotunityCard;
