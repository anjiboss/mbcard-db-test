import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="header-nav">
        <ul>
          <li>
            <Link className="link" to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/user">
              <p>User</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/addinfo">
              <p>Add Infomation</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/register">
              <p>Register</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
