import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
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
      </div>
      <div className="d-block d-sm-none">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <h2 className="text-success m-0 fs-3 poppins-medium">Money Flow</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header ">
                <h5
                  className="offcanvas-title text-success"
                  id="offcanvasDarkNavbarLabel"
                >
                  Money Flow
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
