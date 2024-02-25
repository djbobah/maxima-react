import * as React from "react";
import styles from "./NavBar.module.css";
import logo from "../assets/img/logo_EdSpase.svg";
import { Layout } from "antd";
// import arrowDown from "../assets/img/arrow-down.svg";

import type { MenuProps } from "antd";
import { Menu, Select } from "antd";
import { Link } from "react-router-dom";
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

const NavBar: React.FC = () => {
  const [current, setCurrent] = React.useState("opotunites");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  function handleChange(value) {
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
