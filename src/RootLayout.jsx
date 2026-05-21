import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Prism from "../@/components/Prism";

const RootLayout = () => {
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh", position: "fixed", zIndex: -10, inset: 0 }} className="">
        <Prism
          height={4.5}
          baseWidth={5.5}
          animationType="rotate"
          glow={1}
          noise={0}
          transparent
          offset={{y: -150, x:0}}
          scale={window.innerWidth > 768 ? 1.5 : 1}
          hueShift={-0.0416}
          colorFrequency={2.15}
          hoverStrength={2}
          inertia={0.05}
          bloom={1}
          timeScale={0.6}
        />
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
