import * as React from "react";
// import MainImg from "../../../assets/img/MainImg.png";
import "./index.scss";
import Button from "src/components/Button/Button";
import CarouserData from "../../../assets/data/carouselData.json";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface PromoSectionProps {
  setOpenModal: (a: boolean) => void;
  disableButton: boolean;
}

const PromoSection = ({ setOpenModal, disableButton }: PromoSectionProps) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    if (activeSlide > CarouserData.length - 1) {
      setActiveSlide(0);
    } else if (activeSlide < 0) {
      setActiveSlide(CarouserData.length - 1);
    }
  }, [activeSlide]);

  return (
    <section className="promo container">
      <IoIosArrowBack
        className="arrowLeft"
        onClick={() => setActiveSlide((prev) => Number(prev) - 1)}
      />
      <div className="field_slider">
        <div className={`slider `}>
          <div className="promo__textBlock">
            <h1 className="promo__title">
              Ed Space
              <br />
              {CarouserData[activeSlide]?.title}
            </h1>
            <p className="promo__description">
              {CarouserData[activeSlide]?.content}
            </p>
          </div>
          <div>
            <img
              className="promo__img"
              src={`/assets/img/${CarouserData[activeSlide]?.img}`}
              alt="PromoImg"
            />
          </div>
        </div>
        {/* ); */}
        {/* } */}
        {/* )} */}
      </div>
      <div>
        <Button
          title="попробовать бесплатно"
          onClick={() => setOpenModal(true)}
          disabled={disableButton}
        />
      </div>
      <IoIosArrowForward
        className="arrowRight"
        onClick={() => setActiveSlide((prev) => Number(prev) + 1)}
      />
      <div className="shape"></div>
    </section>
  );
};

export default PromoSection;
