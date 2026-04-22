import { Link } from 'react-router-dom'
import Footer from '../component/Footer'

function Home() {
  return (
    <div className="page-shell">
      <section className="app-container content-split page-section">
        <div className="surface-card page-intro reveal">
          <span className="eyebrow">Software engineer · Bangkok</span>
          <h1 className="section-title">Hi, I&apos;m qián.</h1>
          <p className="lead-text">
            My name is Sorawit Jongjamareeseethong. I enjoy building web applications and learning new things.
          </p>
          <p className="story-text">
            Green tea lover, Marvel fan, chocolate lover, and someone who enjoys games, anime, movies, and time with my cat Alice.
          </p>
          <div className="text-chip-row" style={{ marginTop: '1.25rem' }}>
            <span className="text-chip">Bangkok, Thailand</span>
            <span className="text-chip">Web application focus</span>
          </div>
          <div className="button-row">
            <Link className="button-primary" to="/showcases">View showcases</Link>
            <Link className="button-secondary" to="/about">About me</Link>
          </div>
        </div>

        <div className="surface-card story-card reveal reveal-delay-1">
          <div className="profile-frame">
            <img src="/pictures/profile.png" className="profile-image" alt="Sorawit profile" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Home
