import React from "react";
import CheckBox from "./components/CheckBox.tsx";
import { getRGB, randNumber, getArray } from "./utils/functions.ts";

const icons = ["car", "rocket", "train", "bicycle", "truck", "subway", "plane"];

const Card = () => {
  const color = getRGB();
  const icon = icons[randNumber(icons.length)];
  const st = {
    backgroundColor: color,
    // border: `1px solid ${color}`,
    boxShadow: `0 0 10px #0008, 0 0 5px 2px ${color}`,
  };

  return (
    <div className="weather-card" style={st}>
      <i className={`fa fa-${icon}`} />
      <hr />
      <h3>{randNumber(20, -20)}C</h3>
    </div>
  );
};

const App = () => {
  // let n = 15;
  // const arr = [];
  // while (n--) {
  //   arr.push(n);
  // }
  const arr = getArray(10);

  console.log(arr);
  return (
    <>
      {/* <div className="weather-grid"> */}
      {/* {arr.map((item, index) => (
        <span key={index}>{item}</span>
      ))} */}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      // <Card /> */}
      {/* {arr.map((item, index) => (
          <Card key={index}>{item}</Card>
        ))}
      </div> */}
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
