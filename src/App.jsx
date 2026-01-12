import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sandbox from "./pages/Sandbox.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Sandbox />} />
        <Route path="sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
