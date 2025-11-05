import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourVirtual from "./Components/TourVirtual/TourVirtual";
import RepositorioAcademico from "./pages/RepositorioAcademico";
import Ouvidoria from "./pages/Ouvidoria";
import Comunicacao from "./pages/Comunicacao";
import HomeBiblioteca from "./pages/Biblioteca/HomeBiblioteca";
import JornaisEletronicos from "./pages/Biblioteca/JornaisEletronicos";
import PeriodicosEletronicos from "./pages/Biblioteca/PeriodicosEletronicos";
import BaseDeDados from "./pages/Biblioteca/BasesDeDados";
import RepositorioPaulo from "./pages/Biblioteca/RepositorioPaulo";
import Sobre from "./pages/Sobre";
import Cursos from "./pages/Cursos";
import InfoCursos from "./pages/InfoCursos";
import GerenciadorCursos from "./pages/Admins/GerenciadorCursos";
import GerenciadorModulos from "./pages/Admins/GerenciadorModulos";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/comunicacao" element={<Comunicacao />} />
        <Route
          path="/repositorio-academico"
          element={<RepositorioAcademico />}
        />
        <Route path="/teste" element={<TourVirtual />} />
        <Route path="/ouvidoria" element={<Ouvidoria />} />
        <Route path="/biblioteca" element={<HomeBiblioteca />} />
        <Route path="/jornais-eletronicos" element={<JornaisEletronicos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/gerenciador-cursos" element={<GerenciadorCursos />} />
        <Route
          path="/gerenciador-modulos/:cursoId"
          element={<GerenciadorModulos />}
        />{" "}
        <Route path="/info-curso/:id" element={<InfoCursos />} />
        <Route
          path="/periodicos-eletronicos"
          element={<PeriodicosEletronicos />}
        />
        <Route path="/base-de-dados" element={<BaseDeDados />} />
        <Route
          path="/repositorio-paulo-freire"
          element={<RepositorioPaulo />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
