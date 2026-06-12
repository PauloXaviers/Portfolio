import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

function App() {
  const lenisRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    function update(data) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }
    frame.update(update, true);
    return () => {
      cancelFrame(update);
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.start()
      lenis.scrollTo(0, { immediate: false });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default App;
