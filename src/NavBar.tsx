import { Link } from "react-router-dom";
import { useContext, useEffect, useState, useMemo } from "react";
import { TransactionContext } from "./Context";

const NavBar = () => {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const context = useContext(TransactionContext);

  const users = useMemo(() => context?.users ?? [], [context?.users]);

  useEffect(() => {
    const user = users.find((user) => user.log === true);
    setLoggedUser(user ? user.name : null);
  }, [users]);

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
                <Link className="nav-link fw-semibold" to="/Filter">
                  Filtrar
                </Link>
              </li>
              <li className="nav-item">
                {loggedUser ? (
                  <span className="fw-semibold text-white d-flex gap-2 mt-2">
                    <i className="bi bi-person-fill"></i>
                    {loggedUser}
                  </span>
                ) : (
                  <Link className="nav-link fw-semibold" to="/Register">
                    Registrar
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="d-block d-sm-none">
        <nav className="d-lg-none d-md-flex navbar navbar-expand-lg bg-dark">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="nav-title">
              <h1 className="poppins-medium text-success fs-3 mb-0">
                Money Flow
              </h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
                  <Link className="nav-link fw-semibold" to="/Filter">
                    Filtrar
                  </Link>
                </li>
                <li className="nav-item">
                  {loggedUser ? (
                    <span className="fw-semibold text-white d-flex gap-2 mt-2">
                      <i className="bi bi-person-fill"></i>
                      {loggedUser}
                    </span>
                  ) : (
                    <Link className="nav-link fw-semibold" to="/Register">
                      Registrar
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
