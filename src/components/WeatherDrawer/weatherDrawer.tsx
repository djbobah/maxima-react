import * as React from "react";
import { Button, Drawer, Flex, Form, Input, Space } from "antd";
import { Alert, message } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import "./weatherDrawer.scss";
import { getWeather } from "src/utils/functions";
import CardWeather from "../CardWeather/cardWeather";
import { useDispatch, useSelector } from "react-redux";
import { addTown, getTownWeather } from "../../store/weather";
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
  // const [messageApi, contextHolder] = message.useMessage();
  const [error, setError] = React.useState("");
  const [inputTown, setInputTown] = React.useState("");
  // const [weatherTowns, setWeatherTowns] = React.useState<Object[]>([]);
  const towns = useAppSelector((state) => state.towns.towns);
  const weatherTowns = useAppSelector((state) => state.towns.townsWeather);

  const dispatch = useAppDispatch();

  const handleInputChange = ({ target }) => {
    setInputTown(target.value);
  };

  const handleClickAddTown = (town: string) => {
    // console.log(towns);
    // console.log("drawers", towns.indexOf(town));
    if (town !== "" && towns.indexOf(town) === -1) {
      dispatch(addTown(town));
      dispatch(getTownWeather(town));
    } else {
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />;
    }

    setInputTown("");
  };

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
        <Form.Item
          // label="Fail"
          validateStatus="error"
          help="Should be combination of numbers & alphabets"
        >
          {/* <Space.Compact style={{ width: "100%", marginBottom: "20px" }}> */}
          <Flex>
            <Input
              placeholder="Введите город для добавления"
              value={inputTown}
              name="inputTown"
              onChange={handleInputChange}
              status="error"
            />
            {/* onClick={handleClickAddTown} */}
            <Button
              type="primary"
              size="large"
              onClick={() => handleClickAddTown(inputTown)}
            >
              +
            </Button>
          </Flex>
          {/* </Space.Compact> */}
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
