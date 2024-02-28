import { Link, NavLink } from "react-router-dom";
import '../../styles/Navbar.scss';
import logo from '../../assets/shared/logo.svg';
import { useState } from "react";

function Navbar({ baseUrl }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <nav className={'main-navbar'}>
      <Link to={baseUrl} className={'navbar-logo'}>
        <img src={logo} alt="" />
      </Link>
      <button className={'toggle-menu open'} onClick={handleToggleMenu}>
        <img src="../../assets/shared/icon-hamburger.svg" alt="" />
      </button>
      <div className={toggleMenu === true ? 'navigation active' : 'navigation'}>
        <button className={'toggle-menu close'} onClick={handleToggleMenu}>
          <img src="../../assets/shared/icon-close.svg" alt="" />
        </button>
        <ul>
          <li><NavLink className={({ isActive }) => (isActive && 'active')} exact to={baseUrl}><span className={'number'}>00</span> Home</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive && 'active')} to={baseUrl + "/destination"}><span className={'number'}>01</span> Destination</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive && 'active')} to={baseUrl + "crew"}><span className={'number'}>02</span> Crew</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive && 'active')} to={baseUrl + "technology"}><span className={'number'}>03</span> Technology</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;