import * as React from "react";
import { Button, Drawer, Space } from "antd";
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

  const [weatherTowns, setWeatherTowns] = React.useState<Object[]>([]);

  const loadWeather = async (townRus: string) => {
    let townObj = await getWeather(townRus);
    townObj = { ...townObj, nameRUS: townRus };
    setWeatherTowns((prev) => [...prev, townObj]);
  };
  React.useEffect(() => {
    towns.map((town, i) => loadWeather(town));
  }, []);

  console.log("weatherTowns", weatherTowns);

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
            {`  https://openweathermap.org/`}
          </>
        }
      >
        <div className="content">
          {/* <div className="weather__item">1</div>
          <div className="weather__item"></div>
          <div className="weather__item">3</div>
          <div className="weather__item"></div>
          <div className="weather__item"></div>
          <div className="weather__item"></div> */}
          {weatherTowns.map((item, i) => (
            <CardWeather key={i} town={item} />
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default WeatherDrawer;
