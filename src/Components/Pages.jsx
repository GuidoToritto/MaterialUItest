import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import MyApp from "../App";
import { Header } from "./Header";
import Main from "./Main";

export const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/header" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </section>
  );
};
