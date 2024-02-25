import * as React from "react";
import "./opotunitySection.scss";
// import OpotunityCard from "src/components/OpotunityCard/OpotunityCard";
import Button from "src/components/Button/Button";
import { Typography } from "antd";

const { Paragraph, Title } = Typography;

interface OpotunitySectionProps {
  name: string;
  description: string;
  count: number;
  size?: string;
  children?:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  setOpenModal: (a: boolean) => void;
  disableButton: boolean;
}

const OpotunitySection = ({
  name,
  description,
  count,
  size,
  children,
  setOpenModal,
  disableButton,
}: OpotunitySectionProps) => {
  // console.log(count);

  const style = {
    gridTemplateColumns: `repeat(${count || 1}, ${size || "1fr"})`,
  };

  const styleButton = {
    // marginTop: "100px",
    marginBottom: "60px",
  };
  return (
    <section className="container opotunitySection">
      {name && (
        <Title
          level={2}
          className="title"
          style={{
            color: "rgb(47, 42, 55)",
            fontSize: "40px",
            marginTop: "80px",
          }}
        >
          {name}
        </Title>
      )}
      {description && (
        <Paragraph style={{ marginBottom: 0 }} className="description">
          {description}
        </Paragraph>
      )}
      <div className="card__block" style={style}>
        {children}
      </div>
      <Button
        title="попробовать бесплатно"
        style={styleButton}
        onClick={() => setOpenModal(true)}
        disabled={disableButton}
      />
      <div className="opotunity__shape"></div>
      <div className="opotunity__shape2"></div>
    </section>
  );
};

export default OpotunitySection;
