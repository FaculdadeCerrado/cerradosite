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
import Gerenciadornoticias from "./pages/Admins/Gerenciadornoticias";
import Gerenciadorcomunicados from "./pages/Admins/GerenciadorComunicados";
import Gerenciadoreventos from "./pages/Admins/GerenciadorEventos";
import GerenciadorTemas from "./pages/Admins/GerenciadorTema";
import NoticiaPage from "./pages/NoticiaPage";
import EventosPage from "./pages/EventosPage";
import CursoIdealQuiz from "../src/pages/CursoIdealQuiz";
import LinkBio from "../src/pages/LinkBio/LinkBio";
import Clinica from "../src/pages/Clinica-Escola/Clinica";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/links" element={<LinkBio />} />
        <Route path="/comunicacao" element={<Comunicacao />} />
        <Route path="/clinica-escola" element={<Clinica />} />
        <Route
          path="/repositorio-academico"
          element={<RepositorioAcademico />}
        />
        <Route path="/teste" element={<TourVirtual />} />
        <Route path="/ouvidoria" element={<Ouvidoria />} />
        <Route path="/biblioteca" element={<HomeBiblioteca />} />
        <Route path="/jornais-eletronicos" element={<JornaisEletronicos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso-ideal" element={<CursoIdealQuiz />} />
        {/* admins */}
        <Route path="/gerenciador-cursos" element={<GerenciadorCursos />} />
        <Route path="/gerenciador-noticias" element={<Gerenciadornoticias />} />
        <Route
          path="/gerenciador-comunicados"
          element={<Gerenciadorcomunicados />}
        />{" "}
        <Route path="/gerenciador-temas" element={<GerenciadorTemas />} />
        <Route path="/gerenciador-eventos" element={<Gerenciadoreventos />} />
        <Route path="/noticia/:id" element={<NoticiaPage />} />
        <Route path="/evento/:id" element={<EventosPage />} />
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
