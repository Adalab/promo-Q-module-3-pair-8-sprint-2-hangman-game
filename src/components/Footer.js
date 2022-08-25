import '../styles/components/Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
<<<<<<< HEAD
        <nav>
            <ul>
                <li className="footer__menu-item">
                    <NavLink className="footer__menu-link" to="/">A jugar</NavLink>
                </li>
                <li className="footer__menu-item">
                    <NavLink className="footer__menu-link active" to="/instructions">¿Cómo se juega?</NavLink>
                </li>
                <li className="footer__menu-item">
                    <NavLink className="footer__menu-link" to="/options">Más opciones</NavLink>
                </li>
            </ul>
        </nav>
        <small className="footer__copy">© Adalab</small>
=======
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink className="footer__menu-link" to="/">
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink className="footer__menu-link active" to="/instructions">
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink className="footer__menu-link" to="/options">
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
>>>>>>> a6c8e8b6dfd7da936de74aec5e6e0e4fc56d7a6e
    </footer>
  );
};

export default Footer;
