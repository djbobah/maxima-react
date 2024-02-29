/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from "react";
import { Button, Drawer, Flex, Form, Input, Space } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import "./weatherDrawer.scss";
import CardWeather from "../CardWeather/cardWeather";
import { addTown, getTownWeather, setError } from "../../store/weather";
import { useAppDispatch, useAppSelector } from "src/utils/hooks";

type TWeatherDrawer = {
  open: boolean;
  setOpen: (a: boolean) => void;
  onClose: (a: boolean) => void;
};

const WeatherDrawer: React.FC<TWeatherDrawer> = ({
  open,
  setOpen,
  onClose,
}) => {
  const [inputTown, setInputTown] = React.useState("");
  const [error, setError] = React.useState("");

  const towns = useAppSelector((state) => state.towns.towns);
  const weatherTowns = useAppSelector((state) => state.towns.townsWeather);

  // console.log(error);

  const dispatch = useAppDispatch();

  const handleInputChange = ({ target }) => {
    setError("");
    setInputTown(target.value);
  };

  const handleClickAddTown = (town: string) => {
    const resultTown = town.charAt(0).toUpperCase() + town.slice(1);
    if (resultTown !== "" && towns.indexOf(resultTown) === -1) {
      dispatch(addTown(resultTown));
      dispatch(getTownWeather(resultTown));
    } else {
      if (town === "") setError("Нельзя добавить пустое значение!");
    }

    setInputTown("");
  };

  return (
    <>
      <Drawer
        className="drawer"
        title={`Информация о погоде`}
        placement="right"
        size="large"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={false}
        extra={
          <Space>
            {/* <Button onClick={onClose}>Cancel</Button> */}
            <Button type="primary" onClick={onClose}>
              Закрыть
            </Button>
          </Space>
        }
        footer={
          <>
            <CopyrightOutlined />
            {`  https://openweathermap.org`}
          </>
        }
      >
        <Form.Item
          // label="Fail"
          validateStatus={!error ? undefined : "error"}
          help={!error ? undefined : error}
          style={{ marginBottom: "30px" }}
        >
          <Space.Compact style={{ width: "100%" }}>
            {/* <Flex> */}
            <Input
              placeholder="Введите город для добавления"
              value={inputTown}
              name="inputTown"
              onChange={handleInputChange}
              // status={!error ? undefined : "error"}
              required={true}
            />
            {/* onClick={handleClickAddTown} */}
            <Button
              type="primary"
              size="large"
              onClick={() => handleClickAddTown(inputTown)}
            >
              +
            </Button>
            {/* </Flex> */}
          </Space.Compact>
          {/* <Input placeholder="unavailable choice" id="error" /> */}
        </Form.Item>

        <div className="content">
          {weatherTowns?.map((item, i) => (
            <CardWeather key={i} town={item} />
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default WeatherDrawer;
