import { Link, NavLink } from "react-router-dom"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/showcases", label: "Showcases" },
  { to: "/contact", label: "Contact" },
]

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="app-container">
        <div className="site-nav-inner">
          <Link className="site-brand" to="/">qián portfolio</Link>
          <div className="site-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `site-nav-link${isActive ? " active" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
