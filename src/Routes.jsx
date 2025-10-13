import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ValidadorDiploma from "./pages/Validador";
import TourVirtual from "./Components/TourVirtual/TourVirtual";
import RepositorioAcademico from "./pages/RepositorioAcademico";
import Ouvidoria from "./pages/Ouvidoria";
import Comunicacao from "./pages/Comunicacao";

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
        <Route path="/ouvidoria" element={<Ouvidoria />} />
        <Route path="/comunicao" element={<Comunicacao />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
