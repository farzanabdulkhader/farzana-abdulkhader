import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Projects from "./pages/Projects";

const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
