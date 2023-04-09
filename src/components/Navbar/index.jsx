import {Link} from "react-router-dom";
import '../../styles/Navbar.scss';
import logo from '../../assets/shared/logo.svg';
import {useState} from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  return(
    <nav className={'main-navbar'}>
      <Link to="/" className={'navbar-logo'}>
        <img src={logo} alt=""/>
      </Link>
      <button className={'toggle-menu open'} onClick={handleToggleMenu}>
        <img src="../../assets/shared/icon-hamburger.svg" alt=""/>
      </button>
      <div className={toggleMenu === true ? 'navigation active' : 'navigation'}>
        <button className={'toggle-menu close'} onClick={handleToggleMenu}>
          <img src="../../assets/shared/icon-close.svg" alt=""/>
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/crew">Crew</Link></li>
          <li><Link to="/destination">Destination</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;