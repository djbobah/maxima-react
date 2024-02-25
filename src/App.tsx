import * as React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import Main from "./components/main";
import Page from "./components/Layout/Page/page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page/:name" element={<Page />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
