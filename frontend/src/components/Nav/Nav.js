import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Modal, Button } from "react-bootstrap";

// Este componente necesita usarse con el AuthContext

const Nav = () => {
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout } = useContext(AuthContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  const confirmLogout = async () => {
    try {
      await handleLogout(); 
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setShowLogoutModal(false);
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          {!isAuthenticated && (
            <>
              <li>
                <Link to="/register">Registro</Link>
              </li>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            </>
          )}

          {isAuthenticated && (
            <>
              <li>
                <Link to="/profile">Mi Perfil</Link>
              </li>
              <li>
                <button onClick={handleLogoutClick} className="btn btn-link p-0">
                  Cerrar Sesión
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Modal de Confirmación */}
      <Modal show={showLogoutModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Cierre de Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmLogout}>
            Cerrar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Nav;
