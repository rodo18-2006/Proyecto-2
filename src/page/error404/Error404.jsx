import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="Error404-container">
      <h1 className="Error404-title">404 - Página no encontrada 🩻</h1>
      <p className="Error404-text">
        Parece que este turno no está en nuestra base de datos...
      </p>
      <Link to="/Inicio" className="notfound-btn">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;


