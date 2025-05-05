import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Error404 from "./error404/Error404";
import Doctores from "./Doctores";
import NavbarC from "../components/navbar/NavbarC";
import Inicio from "../components/Inicio/InicioC";
import Turnos from "./Turnos";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Turnos" element={<Turnos />} />
          <Route path="/Inicio" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/Doctores" element={<Doctores />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
