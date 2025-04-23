import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import Error404 from "./page/error404/Error404";
import Doctores from "./page/Doctores";
import NavbarC from "./components/navbar/NavbarC";
import Inicio from "./components/Inicio/InicioC";
import Turnos from "./page/Turnos";
import Horarios from "./page/Horarios";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/Turnos" element={<Turnos />}/> 
          <Route path="/Inicio" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/Doctores" element={<Doctores />} />
          <Route path="/Horarios" element={<Horarios />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
