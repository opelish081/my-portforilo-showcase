import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Showcases from './pages/Showcases'
import Contact from './pages/Cantact'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand fixed-top mt-3">
        <div className="container justify-content-center">
          <ul className="navbar-nav d-flex flex-row gap-5 nav-underline-bar">
            <li className="nav-item">
              <Link className="nav-link nav-underline small" to="/">Home 🏡</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-underline small" to="/about">About 🙌🏻</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-underline small" to="/showcases">Showcases 👾</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-underline small" to="/contact">Contact 🎧</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcases" element={<Showcases />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App