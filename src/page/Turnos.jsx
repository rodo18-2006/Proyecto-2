import FooterC from "../components/footer/FooterC";
import NavbarC from "../components/navbar/NavbarC";
import TurneroC from "../components/turnero/TurneroC";

const Turnos = ({ pacientes, setPacientes }) => {
  return (
    <>
      <NavbarC />
      <TurneroC pacientes={pacientes} setPacientes={setPacientes} />
      <FooterC />
    </>
  );
};

export default Turnos;
