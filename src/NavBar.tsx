import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex align-items-center">
        <h2 className="navbar-brand poppins-medium text-success fs-4 m-0">
          Money Flow
        </h2>
        <ul className="nav gap-3 ms-auto">
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/List">
              Lançamentos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/Register">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-disabled="true">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
