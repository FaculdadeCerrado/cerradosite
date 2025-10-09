import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ValidadorDiploma from "./pages/Validador";
import TourVirtual from "./Components/TourVirtual/TourVirtual";
import RepositorioAcademico from "./pages/RepositorioAcademico";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/repositorio-academico"
          element={<RepositorioAcademico />}
        />
        <Route path="/validador" element={<ValidadorDiploma />} />
        <Route path="/teste" element={<TourVirtual />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
