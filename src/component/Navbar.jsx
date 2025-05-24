import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top border-bottom">
      <div className="container justify-content-center position-relative">
        <ul className="navbar-nav flex-row gap-3 align-items-center mb-0">
          <li className="nav-item">
            <Link className="nav-link nav-underline small" to="/">Home 🏡</Link>
          </li>
          {/* Dropdown เฉพาะจอเล็ก */}
          <li className="nav-item d-lg-none position-relative">
            <button
              className="btn btn-link nav-link p-0"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "2rem", lineHeight: 1 }}
            >
              &#8943;
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{
                left: "auto",
                right: 0,
                minWidth: "140px",
                position: "absolute",
                top: "100%",
                zIndex: 9999
              }}
            >
              <li>
                <Link className="dropdown-item" to="/about">About 🙌🏻</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/showcases">Showcases 👾</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contact">Contact 🎧</Link>
              </li>
            </ul>
          </li>
          {/* เมนูอื่น ๆ เฉพาะจอใหญ่ */}
          <li className="nav-item d-none d-lg-block">
            <Link className="nav-link nav-underline small" to="/about">About 🙌🏻</Link>
          </li>
          <li className="nav-item d-none d-lg-block">
            <Link className="nav-link nav-underline small" to="/showcases">Showcases 👾</Link>
          </li>
          <li className="nav-item d-none d-lg-block">
            <Link className="nav-link nav-underline small" to="/contact">Contact 🎧</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar