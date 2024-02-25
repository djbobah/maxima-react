import * as React from "react";
import "./exectlyComponent.scss";

export default function ExectlyComponent() {
  return (
    <div className="exactly-component container">
      <div className="exactly-component__text">
        <h2 className="exactly-component__title">Точно подойдет для:</h2>
        <h3 className="exactly-component__sub-title">Любых онлайн-школ</h3>
        <p className="exactly-component__description">
          Быстрый запуск, легкое управление, все инструменты в одной платформе.
        </p>
        <h3 className="exactly-component__sub-title">Образовательных курсов</h3>
        <p className="exactly-component__description">
          Статистика по всем образовательным процессам позволяет постоянно
          улучшать ваш продукт.
        </p>
        <h3 className="exactly-component__sub-title">
          Корпоративных учебных порталов
        </h3>
        <p className="exactly-component__description">
          Надежная защита, бесперебойная работа и высокая производительность
          системы позволит наслаждаться процессом обучения.
        </p>
      </div>
      <div className="exactly-component__img"></div>
    </div>
  );
}
