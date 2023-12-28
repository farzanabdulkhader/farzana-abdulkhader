import { BrowserRouter, Route, Routes } from "react-router-dom";

import Projects from "./pages/Projects";
import About from "./pages/About";
import { lazy } from "react";
import Contact from "./pages/Contact";

const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
