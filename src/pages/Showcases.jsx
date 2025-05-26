import Footer from '../component/Footer'

function Showcases() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="container-fluid py-4 px-2 mt-5" style={{ maxWidth: 1050 }}>
          <h1 className="text-center">Showcases 👾</h1>
          <div className="row g-4">
            {/* Showcase 1 */}
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4 mx-auto">
              <div className="card shadow-sm h-100">
                <div id="showcase1Carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                  <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                      <img
                        src="/pictures/showcases/teamproject1secretNumber.png"
                        className="d-block w-100"
                        alt="Team Project 1 - 1"
                        style={{ objectFit: "cover", height: "180px", width: "100%" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/pictures/showcases/teamproject1secretNumber2.png"
                        className="d-block w-100"
                        alt="Team Project 1 - 2"
                        style={{ objectFit: "cover", height: "180px", width: "100%" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/pictures/showcases/teamproject1secretNumber3.png"
                        className="d-block w-100"
                        alt="Team Project 1 - 3"
                        style={{ objectFit: "cover", height: "180px", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">SECRET NUMBER</h5>
                  <p className="card-text">
                    Example group project #1<br />
                    <span className="text-muted small">Number guessing game</span>
                  </p>
                  <hr />
                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-5">
                    <a
                      href="https://team-project1-rho.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/pictures/icons/link.png"
                        alt="Visit Project"
                        style={{ width: "28px", height: "28px", objectFit: "cover", cursor: "pointer" }}
                      />
                    </a>
                    <div style={{ width: "1.5px", height: "28px", background: "#dee2e6" }} />
                    <a
                      href="https://github.com/opelish081/Team_Project1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/pictures/icons/code.png"
                        alt="GitHub"
                        style={{ width: "28px", height: "28px", objectFit: "cover", cursor: "pointer" }}
                      />
                    </a>
                    <div style={{ width: "1.5px", height: "28px", background: "#dee2e6" }} />
                    <a
                      href="https://youtu.be/RcYQYPqgrsw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/pictures/icons/youtube.png"
                        alt="YouTube Video"
                        style={{ width: "28px", height: "28px", objectFit: "cover", cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase 2 */}
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4 mx-auto">
              <div className="card shadow-sm h-100">
                <div id="showcase2Carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                  <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                      <img
                        src="/pictures/showcases/teamproject2CTKeyboard.png"
                        className="d-block w-100"
                        alt="Team Project 2 - 1"
                        style={{ objectFit: "cover", height: "180px", width: "100%" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/pictures/showcases/teamproject2CTKeyboard2.png"
                        className="d-block w-100"
                        alt="Team Project 2 - 2"
                        style={{ objectFit: "cover", height: "180px", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">CT KEYBOARD</h5>
                  <p className="card-text">
                    Example group project #2 <br />
                    <span className="text-muted small">Keyboard e-commerce site</span>
                  </p>
                  <hr />
                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-5">
                    <a
                      href="https://team-project2-xi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/pictures/icons/link.png"
                        alt="Visit Project"
                        style={{ width: "28px", height: "28px", objectFit: "cover", cursor: "pointer" }}
                      />
                    </a>
                    <div style={{ width: "1.5px", height: "28px", background: "#dee2e6" }} />
                    <a
                      href="https://github.com/opelish081/Team_Project2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/pictures/icons/code.png"
                        alt="GitHub"
                        style={{ width: "28px", height: "28px", objectFit: "cover", cursor: "pointer" }}
                      />
                    </a>
                    <div style={{ width: "1.5px", height: "28px", background: "#dee2e6" }} />
                    <a
                      href="https://youtu.be/q5GPxdnbVI8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/pictures/icons/youtube.png"
                        alt="YouTube Video"
                        style={{ width: "28px", height: "28px", objectFit: "cover", cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase 3 */}
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4 mx-auto">
              <div className="card shadow-sm h-100">
                <div id="showcase3Carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                  <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                      <img
                        src="/pictures/showcases/pawcare.png"
                        className="d-block w-100"
                        alt="Pawcare 1"
                        style={{
                          objectFit: "contain",
                          height: "220px",
                          width: "100%",
                          background: "#fff"
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/pictures/showcases/pawcare2.png"
                        className="d-block w-100"
                        alt="Pawcare 2"
                        style={{
                          objectFit: "contain",
                          height: "220px",
                          width: "100%",
                          background: "#fff"
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/pictures/showcases/pawcare3.png"
                        className="d-block w-100"
                        alt="Pawcare 3"
                        style={{
                          objectFit: "contain",
                          height: "220px",
                          width: "100%",
                          background: "#fff"
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/pictures/showcases/pawcare4.png"
                        className="d-block w-100"
                        alt="Pawcare 4"
                        style={{
                          objectFit: "contain",
                          height: "220px",
                          width: "100%",
                          background: "#fff"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">PAWCARE</h5>
                  <p className="card-text">
                    Example group project #3 <br />
                    <span className="text-muted small">Pet management application</span>
                  </p>
                  <hr />
                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-5">
                    <a
                      href="https://github.com/orgs/PAWCARE-CP24KW2/repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/pictures/icons/code.png"
                        alt="GitHub"
                        style={{ width: "28px", height: "28px", objectFit: "cover", cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Showcases