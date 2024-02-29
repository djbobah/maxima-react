import * as React from "react";
import { Card, Flex, Space, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./cardWeather.scss";
import { useAppDispatch } from "src/utils/hooks";
import { deleteTown } from "src/store/weather";
// import { blue } from "@ant-design/colors";
const { Text } = Typography;

export default function CardWeather({ town }) {
  const dispatch = useAppDispatch();

  return (
    <>
      {town && (
        <Card className="weather__card">
          <CloseCircleOutlined
            className="closeButton"
            onClick={() => dispatch(deleteTown(town))}
          />

          <h2> {town?.nameRus}</h2>

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
                {(Number(town.main.temp) - 273.15).toFixed(1)} º
              </Text>
            )}
          </Flex>
          <Flex justify="space-between">
            <span>Ощущается</span>
            {Number(town.main.feels_like) - 273.15 >= 0 ? (
              <Text>
                {(Number(town.main.feels_like) - 273.15).toFixed(1)} ºC{" "}
              </Text>
            ) : (
              <Text style={{ color: "#1890ff" }}>
                {(Number(town.main.feels_like) - 273.15).toFixed(1)} ºC{" "}
              </Text>
            )}
          </Flex>
        </Card>
      )}
    </>
  );
}
