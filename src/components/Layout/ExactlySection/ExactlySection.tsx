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
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}

const ExactlySection: React.FC<ExactlySectionProps> = ({
  name,
  count,
  size,
  children,
}) => {
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
      <Button title="попробовать бесплатно" style={styleButton} />
    </section>
  );
};

export default ExactlySection;
