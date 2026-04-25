import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

function App() {
  const lenisRef = useRef(null);

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

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
