import * as React from "react";
// import CheckBox from "./components/CheckBox";
import NavBar from "./components/NavBar";
import PromoSection from "./components/Layout/PromoSection/PromoSection";
import ExactlySection from "./components/Layout/ExactlySection/ExactlySection";
import textContent from "./assets/data/data.json";
import SimpleCard from "./components/SimpleCard/SimpleCard";
import pic1 from "./assets/img/exactly1.png";
import pic2 from "./assets/img/exactly2.png";
import OpotunitySection from "./components/Layout/OpotunitySection/OpotunitySection";
import opotunityContent from "./assets/data/opportunitiesData.json";
import OpotunityCard from "./components/OpotunityCard/OpotunityCard";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Layout/Footer/Footer";
import ContactsSection from "./components/Layout/ContactsSection/ContactsSection";
// import { getRGB, randNumber, getArray } from "./utils/functions.ts";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <NavBar />
      <main className="main">
        <PromoSection setOpenModal={setOpenModal} />
        <ExactlySection
          name="Точно подойдет для:"
          count={2}
          setOpenModal={setOpenModal}
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
        >
          {opotunityContent.map(
            (item: { title: string; text: string; img: string }, i: number) => (
              <OpotunityCard
                key={i}
                name={item.title}
                text={item.text}
                pic={`/assets/img/${item.img}`}
              />
            )
          )}
        </OpotunitySection>
      </main>
      {/* <div className="checkBoxWrapper">
        <CheckBox title="Неограниченное колличество учеников" />
        <CheckBox title="Трансляции" />
        <CheckBox title="Точная статистика" />
        <CheckBox title="Производительную видеосвязь с учениками" />
        <CheckBox title="Продукт с ежемесячной подпиской" />
        <CheckBox title="Лучшая конфиденциальность и защита" />
        <CheckBox title="Готовый шаблон для организации обучения" />
        <CheckBox title="Сообщества" />
        <CheckBox title="Любое количество уроков и учебных программ" />
      </div> */}
      <ContactsSection />
      <Footer />
      {<Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default App;
