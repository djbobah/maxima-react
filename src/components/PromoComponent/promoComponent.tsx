import * as React from "react";
import Button from "../Button/Button";
import "./promoComponent.scss";

interface IpromoComponentProps {
  setOpenModal: (a: boolean) => void;
  disableButton: boolean;
}

const PromoComponent = ({
  setOpenModal,
  disableButton,
}: IpromoComponentProps) => {
  return (
    <div className="promo__component container">
      <h3 className="promoComponent__title">Запустите свою онлайн-школу</h3>
      <p className="promoComponent__description">
        Или разверните корпоративный учебный портал уже сегодня.
      </p>
      <h4 className="promoComponent__subTitle">
        Цена 250 рублей за 1 ученика в месяц
      </h4>
      <p className="promoComponent__subDescription">
        Все готово для запуска. Попробуйте 7-дневный демо-доступ.
      </p>
      <div className="promoComponent__button">
        <Button
          title="попробовать бесплатно"
          onClick={() => setOpenModal(true)}
          disabled={disableButton}
        />
      </div>
    </div>
  );
};

export default PromoComponent;
