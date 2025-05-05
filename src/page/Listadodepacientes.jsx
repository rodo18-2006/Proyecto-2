import React, { useState } from "react";


import FooterC from "../components/footer/FooterC";
import ListaPacientesC from "../components/Listapacientes/ListapacientesC";

const Listadodepacientes = () => {
  const [pacientes, setPacientes] = useState([]); // Aquí es donde manejas el estado de pacientes.

  return (
    <>
      <ListaPacientesC pacientes={pacientes} setPacientes={setPacientes} />
      <FooterC />
    </>
  );
};

export default Listadodepacientes;
