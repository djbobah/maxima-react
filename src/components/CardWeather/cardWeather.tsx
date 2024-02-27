import * as React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default function CardWeather({ town }) {
  console.log(town.weather[0].icon);
  return (
    <Card hoverable style={{ width: 215 }}>
      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
      <h2> {town.nameRUS}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${town.weather[0].icon}.png`}
      />
      <div>
        Температура {(Number(town.main.feels_like) - 273.15).toFixed(1)}
      </div>
      <div>Ощущается {(Number(town.main.temp) - 273.15).toFixed(1)}</div>
    </Card>
  );
}
