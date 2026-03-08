import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import useHeader from "./components/header/useHeader";
import { useEffect } from "react";

const RootLayout = () => {
  
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
