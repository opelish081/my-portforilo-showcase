import 'bootstrap/dist/css/bootstrap.min.css'
function About() {
  return (
    <div className="container py-4" style={{ overflowX: "hidden" }}>
      <h1 className="text-center">About me 👾🙌🏻</h1>
      <img
        src="/picture/profile.png"
        className="rounded-circle my-3 d-block mx-auto"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
        alt="profile"
      />
      <p className="text-center">My name is Sorawit Jongjamareeseethong</p>
      <p className="text-center">
        I'm a software engineer with a passion for building web applications. I love coding and learning new technologies.
      </p>
      <hr />
      <p className="text-center mb-1">Programming Skills:</p>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <img src="/picture/javascript.png" alt="JavaScript" style={{ width: "40px", height: "40px", objectFit: "cover" }}/>
        <img src="/picture/php.png" alt="PHP" style={{ width: "40px", height: "40px", objectFit: "cover" }}/>
        <img src="/picture/html.png" alt="HTML" style={{ width: "40px", height: "40px", objectFit: "cover" }}/>
        <img src="/picture/css.png" alt="CSS" style={{ width: "40px", height: "40px", objectFit: "cover" }}/>
      </div>
      <hr />
      <p className="text-center mb-1">Database:</p>
      <p className="text-center">MySQL, Mongo DB</p>
      <hr />
      <p className="text-center mb-1">Others:</p>
      <p className="text-center">Git, Docker, Linux command</p>
    </div>
  )
}
export default About