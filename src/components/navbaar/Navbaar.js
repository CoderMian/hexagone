import "./navbaar.css";
import Model from "../Model";
const Navbaar = () => {
  return (
    <>
      <Model />
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://hexens.io/_next/static/media/logo.263a5818.svg"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    who trust us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    audits
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    blogs
                  </a>
                </li>
              </ul>
              <div className="getaRequestBtn">
                <a
                  href="#."
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  request a quote
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbaar;
