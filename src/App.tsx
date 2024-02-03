import React from "react";
import CheckBox from "./components/CheckBox.tsx";
import NavBar from "./components/NavBar.tsx";
// import { getRGB, randNumber, getArray } from "./utils/functions.ts";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="checkBoxWrapper">
        <CheckBox title="Неограниченное колличество учеников" />
        <CheckBox title="Трансляции" />
        <CheckBox title="Точная статистика" />
        <CheckBox title="Производительную видеосвязь с учениками" />
        <CheckBox title="Продукт с ежемесячной подпиской" />
        <CheckBox title="Лучшая конфиденциальность и защита" />
        <CheckBox title="Готовый шаблон для организации обучения" />
        <CheckBox title="Сообщества" />
        <CheckBox title="Любое количество уроков и учебных программ" />
      </div>
    </>
  );
};

export default App;
