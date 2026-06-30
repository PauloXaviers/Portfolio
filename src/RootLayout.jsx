import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import LightRays from "../@/components/LightRays";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="overflow-x-hidden! w-full relative">
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          zIndex: "-40",
          left: 0,
          top: 0,
        }}
      >
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
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toasterId="default"
          toastOptions={{
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
