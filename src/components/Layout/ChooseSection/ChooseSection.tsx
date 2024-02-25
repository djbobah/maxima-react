import * as React from "react";
import "./ChooseSection.scss";
import PromoComponent from "src/components/PromoComponent/promoComponent";
import ExectlyComponent from "src/components/ExectlyComponent/exectlyComponent";

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
  setOpenModal: (a: boolean) => void;
  disableButton: boolean;
}

export default function ChooseSection({
  title,
  setOpenModal,
  disableButton,
  children,
}: ChooseSectionProps) {
  return (
    <div className="choose_section  ">
      <div className="choose container">
        <h2 className="choose__title">{title}</h2>
        <div className="choose__checkboxes">{children}</div>
        {/* <PromoComponent /> */}
      </div>
      <PromoComponent
        setOpenModal={setOpenModal}
        disableButton={disableButton}
      />
      <ExectlyComponent />
    </div>
  );
}
