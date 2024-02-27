import * as React from "react";
import { Button, Drawer, Input, Space } from "antd";
import type { DrawerProps } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import "./weatherDrawer.scss";
import { getWeather } from "src/utils/functions";
import CardWeather from "../CardWeather/cardWeather";

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
  const [towns, setTowns] = React.useState([
    "Москва",
    "Саратов",
    "Ростов-на-Дону",
    "Каменск-Шахтинский",
    "Калитвенская",
  ]);
  const [inputTown, setInputTown] = React.useState("");
  const [weatherTowns, setWeatherTowns] = React.useState<Object[]>([]);

  const loadWeather = async (townRus: string) => {
    let townObj = await getWeather(townRus);
    townObj = { ...townObj, nameRUS: townRus };
    // if (!weatherTowns.some((item) => item.nameRUS === townRus)) {
    setWeatherTowns((prev) => [...prev, townObj]);
    // }
    console.log(weatherTowns);
  };
  React.useEffect(() => {
    towns.map((town, i) => loadWeather(town));
  }, [towns]);

  // console.log("weatherTowns", weatherTowns);
  const handleInputChange = ({ target }) => {
    setInputTown(target.value);
  };
  const handleClickAddTown = (town: string) => {
    const newTowns = [...towns, town];
    setTowns(newTowns);
  };
  console.log(towns);
  return (
    <>
      <Drawer
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
        <Space.Compact style={{ width: "100%", marginBottom: "20px" }}>
          <Input
            placeholder="Введите город для добавления"
            // value={inputTown}
            name="inputTown"
            onChange={handleInputChange}
          />
          {/* onClick={handleClickAddTown} */}
          <Button
            type="primary"
            size="large"
            onClick={() => handleClickAddTown(inputTown)}
          >
            +
          </Button>
        </Space.Compact>

        <div className="content">
          {weatherTowns.map((item, i) => (
            <CardWeather key={i} town={item} />
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default WeatherDrawer;
