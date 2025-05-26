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
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showcases" element={<Showcases />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App