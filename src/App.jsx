import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import Error404 from "./page/error404/Error404";
import Doctores from "./page/Doctores";
import Turnos from "./page/Turnos";
import Hora from "./page/Hora";
import Listadodepacientes from "./page/Listadodepacientes";
import { useState } from "react";

const App = () => {
  const [pacientes, setPacientes] = useState([
    { nombre: "Juan Pérez" },
    { nombre: "Ana Gómez" },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/Turnos"
          element={<Turnos pacientes={pacientes} setPacientes={setPacientes} />}
        />

        <Route path="/Inicio" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/Doctores" element={<Doctores />} />
        <Route path="/Horarios" element={<Hora />} />
        <Route
          path="/Pacientes"
          element={
            <Listadodepacientes
              pacientes={pacientes}
              setPacientes={setPacientes}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
