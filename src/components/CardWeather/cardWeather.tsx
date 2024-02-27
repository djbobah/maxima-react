import * as React from "react";
import { Card, Flex, Space, Typography } from "antd";

import { blue } from "@ant-design/colors";
const { Text } = Typography;
const { Meta } = Card;

export default function CardWeather({ town }) {
  // console.log(town.weather[0].icon);

  //https://api.unsplash.com/search/photos?page=1&query=office&client_id=HDZ3h9US_THNtSh9fk1Z04tHPVytkLtRTQDdV_rD4gw
  // https:
  return (
    <Card hoverable style={{}}>
      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
      <h2> {town.nameRUS}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${town.weather[0].icon}.png`}
        alt="icon weather"
      />
      <Flex justify="space-between">
        <span> Температура</span>
        {Number(town.main.temp) - 273.15 >= 0 ? (
          <Text>{(Number(town.main.temp) - 273.15).toFixed(1)} ºC </Text>
        ) : (
          <Text style={{ color: "#1890ff" }}>
            {(Number(town.main.temp) - 273.15).toFixed(1)} ºC{" "}
          </Text>
        )}
      </Flex>
      <Flex justify="space-between">
        <span>Ощущается</span>
        {Number(town.main.temp) - 273.15 >= 0 ? (
          <Text>{(Number(town.main.feels_like) - 273.15).toFixed(1)} ºC </Text>
        ) : (
          <Text style={{ color: "#1890ff" }}>
            {(Number(town.main.feels_like) - 273.15).toFixed(1)} ºC{" "}
          </Text>
        )}
      </Flex>
    </Card>
  );
}
