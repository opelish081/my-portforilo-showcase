import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../component/Footer'

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="container py-4 mt-5">
          <h1 className="text-center">About me 🙌🏻</h1>
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
          <p className="text-center mb-1">Programming Skill:</p>
          <div className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
            <img src="/pictures/skills/javascript.png" alt="JavaScript" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/express_js.png" alt="Express.js" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/php.png" alt="PHP" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/html.png" alt="HTML" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/css.png" alt="CSS" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/nodejs.png" alt="Node.js" style={{ width: "36px", height: "36px", objectFit: "contain" }}/> 
            <img src="/pictures/skills/vite.png" alt="Vite" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/react.png" alt="React" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/tailwind_css.png" alt="Tailwind CSS" style={{ width: "36px", height: "36px", objectFit: "contain" }}/>
            <img src="/pictures/skills/bootstrap_css.png" alt="Bootstrap" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
          </div>
          <hr />
          <p className="text-center mb-1">Database:</p>
          <div className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
            <img src="/pictures/skills/oracle.png" alt="Oracle" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
            <img src="/pictures/skills/mysql.png" alt="MySQL" style={{ width: "36px", height: "36px", objectFit: "cover" }}/>
          </div>
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