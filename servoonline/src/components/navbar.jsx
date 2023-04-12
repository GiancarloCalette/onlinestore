import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import globalContext from "../state/globalContext";
function Navbar() {
  const numOfProds = useContext(globalContext).getNumberOfProducts;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ServoOnline
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="btn btn-outline-dark position-relative" to="/cart">
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">{numOfProds()}</span>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
