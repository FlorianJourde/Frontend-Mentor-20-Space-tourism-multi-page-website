import { Link, NavLink } from "react-router-dom";
import '../../styles/Navbar.scss';
import logo from '../../assets/shared/logo.svg';
import burgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';
import { useState } from "react";
import styled from 'styled-components';

function Navbar({ baseUrl }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  const ListElement = styled.li`
    a {
      padding: 25px 0;
      position: relative;
      display: inline-flex;
      gap: 0 5px;
    }
  `

  return (
    <nav className={'main-navbar'}>
      <Link to={baseUrl} className={'navbar-logo'}>
        <img src={logo} alt="" />
      </Link>
      <button className={'toggle-menu open'} onClick={handleToggleMenu}>
        <img src={burgerIcon} alt="" />
      </button>
      <div className={toggleMenu === true ? 'navigation active' : 'navigation'}>
        <button className={'toggle-menu close'} onClick={handleToggleMenu}>
          <img src={closeIcon} alt="" />
        </button>
        <ul>
          <ListElement><NavLink className={({ isActive }) => (isActive && 'active')} exact to={baseUrl}><span className={'number'}>00</span> Home</NavLink></ListElement>
          <ListElement><NavLink className={({ isActive }) => (isActive && 'active')} to={baseUrl + "destination"}><span className={'number'}>01</span> Destination</NavLink></ListElement>
          <ListElement><NavLink className={({ isActive }) => (isActive && 'active')} to={baseUrl + "crew"}><span className={'number'}>02</span> Crew</NavLink></ListElement>
          <ListElement><NavLink className={({ isActive }) => (isActive && 'active')} to={baseUrl + "technology"}><span className={'number'}>03</span> Technology</NavLink></ListElement>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;