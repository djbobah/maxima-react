import * as React from "react";
import backgroundImg from "../../../assets/img/ChooseBackground3.png";
import "./ChooseSection.scss";

interface ChooseSectionProps {
  title: string;

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

export default function ChooseSection({ title, children }: ChooseSectionProps) {
  return (
    <div className="choose_section  ">
      <div className="choose">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
