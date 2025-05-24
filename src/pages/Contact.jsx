import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../component/Footer'

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <h1 className="text-center">Contact 📩</h1>
          <div className="d-flex justify-content-center align-items-center gap-4 gap-md-5 mt-5 flex-wrap">
            <a href="https://www.instagram.com/_qianchyy/" target="_blank" rel="noopener noreferrer">
              <img src="/pictures/logo/instagram.png" alt="Instagram" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
            </a>
            <a href="https://www.facebook.com/sorawit.jongjmmarisistong/" target="_blank" rel="noopener noreferrer">
              <img src="/pictures/logo/facebook.png" alt="Facebook" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
            </a>
            <a href="https://github.com/opelish081" target="_blank" rel="noopener noreferrer">
              <img src="/pictures/logo/github.png" alt="GitHub" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
            </a>
            <a href="https://www.linkedin.com/in/sorawit-jongjamareeseethong-109198294/" target="_blank" rel="noopener noreferrer">
              <img src="/pictures/logo/linkedin.png" alt="LinkedIn" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
            </a>
            <a href="https://x.com/wannabesigmaboy" target="_blank" rel="noopener noreferrer">
              <img src="/pictures/logo/twitter.png" alt="Twitter" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Contact