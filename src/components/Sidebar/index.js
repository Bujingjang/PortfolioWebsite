import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <Link exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#2D3034" />
      </Link>
      <Link
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#2D3034" />
      </Link>
      <Link
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#2D3034" />
      </Link>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/fideliotandy/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#2D3034" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Bujingjang"
        >
          <FontAwesomeIcon icon={faGithub} color="#2D3034" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/fidelio.tandy.3/"
        >
          <FontAwesomeIcon icon={faFacebook} color="#2D3034" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/fidelio_tandy"
        >
          <FontAwesomeIcon icon={faInstagram} color="#2D3034" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
