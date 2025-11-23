import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
// Pages públicas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Comunicacao from "./pages/Comunicacao";
import Ouvidoria from "./pages/Ouvidoria";
import Cursos from "./pages/Cursos";
import InfoCursos from "./pages/InfoCursos";
import NoticiaPage from "./pages/NoticiaPage";
import EventosPage from "./pages/EventosPage";
import CursoIdealQuiz from "./pages/CursoIdealQuiz";
import LinkBio from "./pages/LinkBio/LinkBio";
import Clinica from "./pages/Clinica-Escola/Clinica";
import NupePage from "./pages/NupePaage";
import CpaPage from "./pages/CpaPage";

// Biblioteca
import HomeBiblioteca from "./pages/Biblioteca/HomeBiblioteca";
import JornaisEletronicos from "./pages/Biblioteca/JornaisEletronicos";
import PeriodicosEletronicos from "./pages/Biblioteca/PeriodicosEletronicos";
import BaseDeDados from "./pages/Biblioteca/BasesDeDados";
import RepositorioPaulo from "./pages/Biblioteca/RepositorioPaulo";

// Outros
import TourVirtual from "./Components/TourVirtual/TourVirtual";
import RepositorioAcademico from "./pages/RepositorioAcademico";

// Admin
import GerenciadorCursos from "./pages/Admins/GerenciadorCursos";
import GerenciadorModulos from "./pages/Admins/GerenciadorModulos";
import Gerenciadornoticias from "./pages/Admins/Gerenciadornoticias";
import Gerenciadorcomunicados from "./pages/Admins/GerenciadorComunicados";
import Gerenciadoreventos from "./pages/Admins/GerenciadorEventos";
import GerenciadorTemas from "./pages/Admins/GerenciadorTema";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PainelAdmin from "./pages/Painel";

function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Páginas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/links" element={<LinkBio />} />
          <Route path="/comunicacao" element={<Comunicacao />} />
          <Route path="/clinica-escola" element={<Clinica />} />
          <Route path="/nupe" element={<NupePage />} />
          <Route path="/cpa" element={<CpaPage />} />
          <Route
            path="/repositorio-academico"
            element={<RepositorioAcademico />}
          />
          {/* Biblioteca */}
          <Route path="/biblioteca" element={<HomeBiblioteca />} />
          <Route path="/jornais-eletronicos" element={<JornaisEletronicos />} />
          <Route
            path="/periodicos-eletronicos"
            element={<PeriodicosEletronicos />}
          />
          <Route path="/base-de-dados" element={<BaseDeDados />} />
          <Route
            path="/repositorio-paulo-freire"
            element={<RepositorioPaulo />}
          />
          {/* Cursos */}
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/info-curso/:id" element={<InfoCursos />} />
          <Route path="/curso-ideal" element={<CursoIdealQuiz />} />
          {/* Notícias e Eventos */}
          <Route path="/noticia/:id" element={<NoticiaPage />} />
          <Route path="/evento/:id" element={<EventosPage />} />
          {/* Outros */}
          <Route path="/teste" element={<TourVirtual />} />
          <Route path="/ouvidoria" element={<Ouvidoria />} />
          {/* Admin */}
          <Route
            path="/gerenciador-cursos"
            element={
              <PrivateRoute>
                <GerenciadorCursos />
              </PrivateRoute>
            }
          />
          <Route
            path="/gerenciador-noticias"
            element={
              <PrivateRoute>
                <Gerenciadornoticias />
              </PrivateRoute>
            }
          />
          <Route
            path="/gerenciador-comunicados"
            element={
              <PrivateRoute>
                <Gerenciadorcomunicados />
              </PrivateRoute>
            }
          />
          <Route
            path="/gerenciador-temas"
            element={
              <PrivateRoute>
                <GerenciadorTemas />
              </PrivateRoute>
            }
          />
          <Route
            path="/gerenciador-eventos"
            element={
              <PrivateRoute>
                <Gerenciadoreventos />
              </PrivateRoute>
            }
          />
          <Route
            path="/gerenciador-modulos/:cursoId"
            element={
              <PrivateRoute>
                <GerenciadorModulos />
              </PrivateRoute>
            }
          />{" "}
          <Route
            path="/painel"
            element={
              <PrivateRoute>
                <PainelAdmin />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRoutes;
