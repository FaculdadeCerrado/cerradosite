import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ValidadorDiploma from "./Components/validador";
import TourVirtual from "./Components/TourVirtual/TourVirtual";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validador" element={<ValidadorDiploma />} />
        <Route path="/teste" element={<TourVirtual />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
