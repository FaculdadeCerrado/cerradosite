import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ValidadorDiploma from "./Components/validador";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validador" element={<ValidadorDiploma />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
