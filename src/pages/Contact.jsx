import Footer from '../component/Footer'

const contacts = [
  {
    name: 'Instagram',
    hint: '@_qianchyy',
    href: 'https://www.instagram.com/_qianchyy/',
    icon: '/pictures/logos/instagram.png',
  },
  {
    name: 'Facebook',
    hint: 'sorawit.jongjmmarisistong',
    href: 'https://www.facebook.com/sorawit.jongjmmarisistong/',
    icon: '/pictures/logos/facebook.png',
  },
  {
    name: 'GitHub',
    hint: 'opelish081',
    href: 'https://github.com/opelish081',
    icon: '/pictures/logos/github.png',
  },
  {
    name: 'LinkedIn',
    hint: 'Sorawit Jongjamareeseethong',
    href: 'https://www.linkedin.com/in/sorawit-jongjamareeseethong-109198294/',
    icon: '/pictures/logos/linkedin.png',
  },
  {
    name: 'X',
    hint: '@wannabesigmaboy',
    href: 'https://x.com/wannabesigmaboy',
    icon: '/pictures/logos/twitter.png',
  },
]

function Contact() {
  return (
    <div className="page-shell">
      <section className="app-container content-split page-section">
        <div className="surface-card page-intro reveal">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title">Easy ways to reach me for roles, collaboration, or a quick hello.</h1>
          <p className="lead-text">
            If you&apos;d like to talk about web projects, junior opportunities, or product ideas, I&apos;m happy to connect.
          </p>
          <div className="button-row">
            <a className="button-primary" href="https://www.linkedin.com/in/sorawit-jongjamareeseethong-109198294/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="button-secondary" href="https://github.com/opelish081" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="surface-card story-card reveal reveal-delay-1">
          <span className="eyebrow">Availability</span>
          <p className="story-highlight">
            Open to thoughtful conversations around software engineering, portfolio review, and collaborative side projects.
          </p>
          <div className="stat-row">
            <span className="stat-pill">Responsive on LinkedIn</span>
            <span className="stat-pill">Active on GitHub</span>
            <span className="stat-pill">Friendly to collaboration</span>
          </div>
        </div>
      </section>

      <section className="app-container page-section">
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <article
              key={contact.name}
              className={`surface-card contact-card reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : index === 3 ? 'reveal-delay-1' : index === 4 ? 'reveal-delay-2' : ''}`}
            >
              <div className="contact-copy">
                <span className="contact-label">{contact.name}</span>
                <a
                  className="contact-link"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.hint}
                </a>
              </div>
              <span className="icon-chip">
                <img src={contact.icon} alt={contact.name} />
              </span>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Contact
