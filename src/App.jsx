import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Showcases from './pages/Showcases'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/showcases" element={<Showcases />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
