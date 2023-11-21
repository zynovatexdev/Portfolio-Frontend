import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Bot } from "../styles/pages/Home";
import Help from "../../src/image/Help.png";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
