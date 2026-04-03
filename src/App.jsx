import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
