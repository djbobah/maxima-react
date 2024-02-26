import * as React from "react";
import { Button, Drawer, Space } from "antd";
import type { DrawerProps } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import "./weatherDrawer.scss";
import { getWeather } from "src/utils/functions";

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
  const [towns, setTowns] = React.useState(["Moscow", "Saratov", "Volgograd"]);
  const [weatherTowns, setWeatherTowns] = React.useState<Object[]>([]);
  // let townsWeather: Object[] = [];
  React.useEffect(() => {
    towns.map((town, i) => console.log(i, getWeather(town)));
  }, []);
  const sss = getWeather("Moscow").then((res) => res);
  console.log(sss);
  console.log(weatherTowns);
  // setWeatherTowns((prev) => [...prev, getWeather(town)])

  // const [size, setSize] = React.useState<DrawerProps["size"]>();

  // const showDefaultDrawer = () => {
  //   setSize("default");
  //   setOpen(true);
  // };

  // const showLargeDrawer = () => {
  //   // setSize("large");
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

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
          <div className="weather__item">1</div>
          <div className="weather__item"></div>
          <div className="weather__item">3</div>
          <div className="weather__item"></div>
          <div className="weather__item"></div>
          <div className="weather__item"></div>
        </div>
      </Drawer>
    </>
  );
};

export default WeatherDrawer;
