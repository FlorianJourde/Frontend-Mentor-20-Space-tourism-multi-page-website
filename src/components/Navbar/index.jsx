import {Link} from "react-router-dom";
import '../../styles/Navbar.scss';
import logo from '../../assets/shared/logo.svg';

function Navbar() {
  return(
    <nav className={'main-navbar'}>
      <Link to="/" className={'navbar-logo'}>
        <img src={logo} alt=""/>
      </Link>
      <div className={'main-navigation'}>
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