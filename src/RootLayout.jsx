import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import LightRays from "../@/components/LightRays";

const RootLayout = () => {
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh", position: "fixed", zIndex: "-40" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.6}
          rayLength={1.2}
          pulsating={false}
          fadeDistance={1.4}
          saturation={1}
          followMouse
          mouseInfluence={0.25}
          noiseAmount={0}
          distortion={0}
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
