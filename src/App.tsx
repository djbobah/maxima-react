import * as React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import Main from "./components/main";
import Page from "./components/Layout/Page/page";
import { Routes, Route } from "react-router-dom";
import WeatherDrawer from "./components/WeatherDrawer/weatherDrawer";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };
  React.useEffect(() => {}, []);

  return (
    <>
      <NavBar openWeatherDrawer={showDrawer} />
      <ScrollToTop smooth />
      <WeatherDrawer open={open} setOpen={showDrawer} onClose={onCloseDrawer} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page/:name" element={<Page />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
