import * as React from "react";
import { Button, Drawer, Space } from "antd";
import type { DrawerProps } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";

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
  // const [open, setOpen] = React.useState(false);
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
          // <Space>
          // {/* <Button onClick={onClose}>Cancel</Button> */}
          <CopyrightOutlined />
          // <Button type="primary" onClick={onClose}>
          //   Закрыть
          // </Button>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default WeatherDrawer;
