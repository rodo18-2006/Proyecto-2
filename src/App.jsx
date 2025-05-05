import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import Error404 from "./page/error404/Error404";
import Doctores from "./page/Doctores";
import Turnos from "./page/Turnos";
import Hora from "./page/Hora";
import Listadodepacientes from "./page/Listadodepacientes";
import { useState } from "react";
import SobreNosotros from "./page/sobrenosotros";
import Navbar from "./page/Navbar";
import Contacto from "./page/Contacto";


const App = () => {
  const [pacientes, setPacientes] = useState([
    { nombre: "Juan Pérez" },
    { nombre: "Ana Gómez" },
  ]);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/turnos"
          element={<Turnos pacientes={pacientes} setPacientes={setPacientes} />}
        />

        <Route path="/contacto" element={<Contacto />} />  
        <Route path="/navbar" element={<Navbar />} />  
        <Route path="/sobrenosotros" element={<SobreNosotros />} /> 
        <Route path="/inicio" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/horarios" element={<Hora />} />
        <Route
          path="/pacientes"
          element={
            <Listadodepacientes
              pacientes={pacientes}
              setPacientes={setPacientes}
            />
          }
        />
      </Routes>
    </Router>
    </>
  );
};

export default App;
