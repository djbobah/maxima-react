import * as React from "react";

import "./ExactlySection.scss";
import Button from "src/components/Button/Button";

interface ExactlySectionProps {
  name?: string;
  count?: number;
  size?: string;
  children?:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>;
  setOpenModal: (a: boolean) => void;
}

const ExactlySection = ({
  name,
  count,
  size,
  children,
  setOpenModal,
}: ExactlySectionProps) => {
  const style = {
    gridTemplateColumns: `repeat(${count || 1}, ${size || "1fr"})`,
  };

  const styleButton = {
    marginTop: "100px",
    marginBottom: "50px",
  };

  return (
    <section className="container2">
      {name && <h2 className="container">{name}</h2>}
      <div className="container container2__block" style={style}>
        {children}
      </div>
      <Button
        title="попробовать бесплатно"
        style={styleButton}
        onClick={() => setOpenModal(true)}
      />
    </section>
  );
};

export default ExactlySection;
