import * as React from "react";
import { Card, Flex, Space } from "antd";

const { Meta } = Card;

export default function CardWeather({ town }) {
  console.log(town.weather[0].icon);

  //https://api.unsplash.com/search/photos?page=1&query=office&client_id=HDZ3h9US_THNtSh9fk1Z04tHPVytkLtRTQDdV_rD4gw
  https: return (
    <Card hoverable style={{}}>
      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
      <h2> {town.nameRUS}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${town.weather[0].icon}.png`}
      />
      <div>
        Температура {(Number(town.main.feels_like) - 273.15).toFixed(1)}
      </div>
      <Flex justify="space-between">
        <span>Ощущается</span>{" "}
        <span>{(Number(town.main.temp) - 273.15).toFixed(1)}</span>
      </Flex>
    </Card>
  );
}
