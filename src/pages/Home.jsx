import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../component/Footer'

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h1>Hi, I'm qián</h1>
        <p>Green tea lover 🍵, Marvel fan 🔨, Chocolate lover 🍫</p>
        <p>I enjoy playing video games 🎮, spending time with my cat Alice 🐈, and watching anime and movies 🍿</p>
        <p>I'm passionate about learning new things 📚</p>
        <hr style={{ borderTop: "solid #000", width: "500px" }} />
        <p>Currently living in Bangkok, Thailand 🇹🇭</p>
      </div>
      <Footer />
    </div>
  )
}
export default Home