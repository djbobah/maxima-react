import * as React from "react";
import MainImg from "../../../assets/img/MainImg.png";
import "./index.scss";
import Button from "src/components/Button/Button";

const PromoSection = () => {
  return (
    <section className="promo container">
      <div className="promo__textBlock">
        <h1 className="promo__title">
          Ed Space
          <br /> Ваши знания <br />и экспертность обретут здесь форму
        </h1>
        <p className="promo__description">
          Мощный инструмент для организации обучения. Ваши ученики будут в
          восторге!
        </p>
        <Button title="попробовать бесплатно" />
      </div>
      <div>
        <img className="promo__img" src={MainImg} alt="" />
      </div>
      <div className="shape"></div>
    </section>
  );
};

export default PromoSection;
