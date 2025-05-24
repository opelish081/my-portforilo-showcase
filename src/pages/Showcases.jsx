import Footer from '../component/Footer'

function Showcases() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="container py-4 mt-5" style={{ maxWidth: 900 }}>
          <h1 className="text-center mb-4">Showcases 👾</h1>
          <div className="row g-4 justify-content-center">
            {/* Showcase 1 */}
            <div className="col-12 col-sm-6 col-lg-5">
              <div className="card shadow-sm h-100">
                <img
                  src="/pictures/showcase/teamproject1secretNumber.png"
                  className="card-img-top rounded"
                  alt="Team Project 1"
                  style={{ objectFit: "cover", height: "180px", width: "100%" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">SECRET NUMBER</h5>
                  <p className="card-text">
                    ตัวอย่างโปรเจกต์กลุ่มที่พัฒนาโดยใช้ React, Node.js และ MongoDB<br />
                    <span className="text-muted small">เทคโนโลยี: React, Node.js, MongoDB</span>
                  </p>
                  <a
                    href="https://team-project1-rho.vercel.app/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch project
                  </a>
                </div>
              </div>
            </div>
            {/* Showcase 2 */}
            <div className="col-12 col-sm-6 col-lg-5">
              <div className="card shadow-sm h-100">
                <img
                  src="/pictures/showcase/teamproject2CTKeyboard.png"
                  className="card-img-top rounded"
                  alt="Team Project 2"
                  style={{ objectFit: "cover", height: "180px", width: "100%" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">CT KEYBOARD</h5>
                  <p className="card-text">
                    ตัวอย่างโปรเจกต์กลุ่มที่สอง <br />
                    <span className="text-muted small">เทคโนโลยี: React, Node.js, MongoDB</span>
                  </p>
                  <a
                    href="https://team-project2-xi.vercel.app/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch project
                  </a>
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