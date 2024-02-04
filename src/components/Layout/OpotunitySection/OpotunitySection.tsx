import * as React from "react";
import "./opotunitySection.scss";
import OpotunityCard from "src/components/OpotunityCard/OpotunityCard";
import Button from "src/components/Button/Button";

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
}

const OpotunitySection: React.FC<OpotunitySectionProps> = ({
  name,
  description,
  count,
  size,
  children,
}) => {
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
      {name && <h2 className="title">{name}</h2>}
      {description && <p className="description">{description}</p>}
      <div className="card__block" style={style}>
        {children}
      </div>
      <Button title="попробовать бесплатно" style={styleButton}></Button>
      <div className="opotunity__shape"></div>
      <div className="opotunity__shape2"></div>
    </section>
  );
};

export default OpotunitySection;
