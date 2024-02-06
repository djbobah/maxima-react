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
        {CarouserData.map(
          (
            item: { title: string; content: string; img: string },
            index: number
          ) => {
            let slide = "current";
            if (activeSlide === index) {
              slide = "current";
            }
            return (
              <div className={`slider ${slide}`} key={index}>
                <div className="promo__textBlock">
                  <h1 className="promo__title">
                    Ed Space
                    <br />
                    {item?.title}
                  </h1>
                  <p className="promo__description">{item.content}</p>
                </div>
                <div>
                  <img
                    className="promo__img"
                    src={`/assets/img/${item?.img}`}
                    alt="PromoImg"
                  />
                </div>
              </div>
            );
          }
        )}
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
