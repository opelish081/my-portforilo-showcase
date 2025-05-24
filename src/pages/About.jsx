import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../component/Footer'

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <div className="container py-4">
          <h1 className="text-center">About me 👾🙌🏻</h1>
          <img
            src="/pictures/profile.png"
            className="rounded-circle my-3 d-block mx-auto"
            style={{ width: "160px", height: "160px", objectFit: "cover", maxWidth: "100%" }}
            alt="profile"
          />
          <p className="text-center">My name is Sorawit Jongjamareeseethong</p>
          <p className="text-center">
            I'm a software engineer with a passion for building web applications. I love coding and learning new technologies.
          </p>
          <hr />
          <p className="text-center mb-1">Programming Skills:</p>
          <div className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
            <img src="/pictures/javascript.png" alt="JavaScript" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/php.png" alt="PHP" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/html.png" alt="HTML" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/css.png" alt="CSS" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
          </div>
          <hr />
          <p className="text-center mb-1">Database:</p>
          <p className="text-center">MySQL, Mongo DB</p>
          <hr />
          <p className="text-center mb-1">Others:</p>
          <p className="text-center">Git, Docker, Linux command</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default About