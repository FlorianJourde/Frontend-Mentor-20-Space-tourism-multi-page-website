import {Link} from "react-router-dom";

function Navbar() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/crew">Crew</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/technology">Technology</Link>
    </nav>
  )

}

export default Navbar;