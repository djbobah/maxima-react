import * as React from "react";
// import CheckBox from "./components/CheckBox";
// import NavBar from "./NavBar";
import PromoSection from "./Layout/PromoSection/PromoSection";
import ExactlySection from "./Layout/ExactlySection/ExactlySection";
import textContent from "../assets/data/data.json";
import SimpleCard from "./SimpleCard/SimpleCard";
import pic1 from "../assets/img/exactly1.png";
import pic2 from "../assets/img/exactly2.png";
import OpotunitySection from "./Layout/OpotunitySection/OpotunitySection";
import opotunityContent from "../assets/data/opportunitiesData.json";
import chooseData from "../assets/data/chooseData.json";
import OpotunityCard from "./OpotunityCard/OpotunityCard";
import { useState } from "react";
import Modal from "./Modal/Modal";
// import Footer from "./Layout/Footer/Footer";
import ContactsSection from "./Layout/ContactsSection/ContactsSection";
import ChooseSection from "./Layout/ChooseSection/ChooseSection";
import CheckBox from "./CheckBox";
import { Link } from "react-router-dom";
// import { getRGB, randNumber, getArray } from "./utils/functions.ts";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  return (
    <main className="main">
      <PromoSection setOpenModal={setOpenModal} disableButton={disableButton} />
      <ExactlySection
        name="Точно подойдет для:"
        count={2}
        setOpenModal={setOpenModal}
        disableButton={disableButton}
      >
        {textContent
          .filter((item: { block: string }) => item.block === "bottom")
          .map((item: { title: string; content: string }, i: number) => (
            <SimpleCard
              key={i}
              name={item.title}
              text={item.content}
              pic={i % 2 === 0 ? pic1 : pic2}
            />
          ))}
      </ExactlySection>
      <OpotunitySection
        name="Возможности Ed Space"
        description="Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка."
        count={3}
        setOpenModal={setOpenModal}
        disableButton={disableButton}
      >
        {opotunityContent.map(
          (item: { title: string; text: string; img: string }, i: number) => (
            <Link to={`/page/` + item.title} style={{ textDecoration: "none" }}>
              <OpotunityCard
                key={i}
                name={item.title}
                text={item.text}
                pic={`/assets/img/${item.img}`}
              />
            </Link>
          )
        )}
      </OpotunitySection>
      <ChooseSection
        title="Выбирайте Ed Space сегодня и вы получите"
        setOpenModal={setOpenModal}
        disableButton={disableButton}
      >
        {chooseData.map(
          (item: { title: string }, i: React.Key | null | undefined) => (
            <CheckBox key={i} title={item.title} />
          )
        )}
      </ChooseSection>
      <ContactsSection />
      {
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setDisableButton={setDisableButton}
        />
      }
    </main>
  );
};

export default Main;
