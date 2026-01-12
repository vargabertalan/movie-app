import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Sandbox from "./pages/Sandbox.jsx";
import Movies from "./pages/Movies.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Movies />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
