import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../component/Footer'

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center px-3">
        <h1 className="text-center">Hi, I'm qián</h1>
        <p className="text-center">Green tea lover 🍵, Marvel fan 🔨, Chocolate lover 🍫</p>
        <p className="text-center">I enjoy playing video games 🎮, spending time with my cat Alice 🐈, and watching anime and movies 🍿</p>
        <p className="text-center">I'm passionate about learning new things 📚</p>
        <hr className="w-100 my-3" style={{ borderTop: "solid #000", maxWidth: 500 }} />
        <p className="text-center">Currently living in Bangkok, Thailand 🇹🇭</p>
      </div>
      <Footer />
    </div>
  )
}
export default Home