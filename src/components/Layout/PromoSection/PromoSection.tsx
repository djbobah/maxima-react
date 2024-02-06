import * as React from "react";
import MainImg from "../../../assets/img/MainImg.png";
import "./index.scss";
import Button from "src/components/Button/Button";
import CarouserData from "../../../assets/data/carouselData.json";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface PromoSectionProps {
  setOpenModal: (a: boolean) => void;
}

const PromoSection = ({ setOpenModal }: PromoSectionProps) => {
  // const [data, setData] = React.useState(CarouserData);
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    if (activeSlide > CarouserData.length - 1) {
      setActiveSlide(0);
    }
    if (activeSlide < 0) {
      setActiveSlide(CarouserData.length - 1);
    }
  }, [activeSlide]);

  console.log(CarouserData.length);
  return (
    <section className="promo container">
      <IoIosArrowBack
        className="arrowLeft"
        onClick={() => setActiveSlide((prev) => Number(prev) - 1)}
      />
      <div className="field_slider">
        <div className="slider">
          <div className="promo__textBlock">
            <h1 className="promo__title">
              Ed Space
              <br />
              {/* <br /> Ваши знания <br />и экспертность обретут здесь форму */}
              {CarouserData[activeSlide]?.title}
            </h1>
            <p className="promo__description">
              {/* Мощный инструмент для организации обучения. Ваши ученики будут в
            восторге! */}
              {CarouserData[activeSlide]?.content}
            </p>
          </div>
          <div>
            <img
              className="promo__img"
              src={`/assets/img/${CarouserData[activeSlide]?.img}`}
              alt=""
            />
          </div>
          {/* <IoIosArrowForward /> */}
        </div>
      </div>
      <div>
        <Button
          title="попробовать бесплатно"
          onClick={() => setOpenModal(true)}
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
