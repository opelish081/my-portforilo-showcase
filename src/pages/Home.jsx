import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../component/Footer'

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h1>Hi, I'm qián</h1>
        <p>Live in Bangkok, Thailand.🇹🇭</p>
      </div>
      <Footer />
    </div>
  )
}
export default Home