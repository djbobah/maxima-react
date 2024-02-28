import * as React from "react";
import styles from "./NavBar.module.css";
import logo from "../assets/img/logo_EdSpase.svg";
import { Layout } from "antd";
// import arrowDown from "../assets/img/arrow-down.svg";

import type { MenuProps } from "antd";
import { Menu, Select } from "antd";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
const { Option } = Select;

const items: MenuProps["items"] = [
  {
    label: "Возможности",
    key: "opotunites",
  },
  {
    label: "Стоимость",
    key: "cost",
  },
  {
    label: "Контакты",
    key: "contacts",
  },
];
type TWeatherDrawer = {
  openWeatherDrawer: (a: boolean) => void;
};
const NavBar: React.FC<TWeatherDrawer> = ({ openWeatherDrawer }) => {
  const [current, setCurrent] = React.useState("");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    if (e.key === "opotunites") {
      window.scrollTo({
        top: 1270,
        behavior: "smooth",
      });
    } else if (e.key === "cost") {
      window.scrollTo({
        top: 3100,
        behavior: "smooth",
      });
    } else if (e.key === "contacts") {
      window.scrollTo({
        top: 3650,
        behavior: "smooth",
      });
    }
  };
  function handleChange(value: string) {
    console.log(`Selected language: ${value}`);
  }
  return (
    <Layout>
      <header className={` ${styles.header}`}>
        <div className={`container ${styles.nav}`}>
          <Link to="/">
            <img src={logo} className={styles.logo} alt="Logo" />
          </Link>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            theme="light"
            items={items}
            style={{
              width: 400,
              fontSize: 18,
              backgroundColor: "transparent",
              justifyContent: "space-evenly",
            }}
          />
          <Button title="Информация о погоде" onClick={openWeatherDrawer} />
          <Select
            defaultValue="ru"
            style={{ width: 70 }}
            onChange={handleChange}
            variant="borderless"
          >
            <Option value="ru">RU</Option>
            <Option value="en">EN</Option>
            <Option value="fr">FR</Option>
            <Option value="es">ES</Option>
            <Option value="de">DE</Option>
          </Select>
        </div>
      </header>
    </Layout>
    // </div>
  );
};

export default NavBar;
