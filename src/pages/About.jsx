import Footer from '../component/Footer'

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building responsive interfaces with structure, readability, and a strong visual finish.',
    items: [
      { name: 'JavaScript', icon: '/pictures/skills/javascript.png' },
      { name: 'React', icon: '/pictures/skills/react.png' },
      { name: 'HTML', icon: '/pictures/skills/html.png' },
      { name: 'CSS', icon: '/pictures/skills/css.png' },
      { name: 'Tailwind CSS', icon: '/pictures/skills/tailwind_css.png' },
      { name: 'Bootstrap', icon: '/pictures/skills/bootstrap_css.png' },
      { name: 'Vite', icon: '/pictures/skills/vite.png' },
    ],
  },
  {
    title: 'Backend and tools',
    description: 'Comfortable working with application logic, APIs, and day-to-day development tooling.',
    items: [
      { name: 'Node.js', icon: '/pictures/skills/nodejs.png' },
      { name: 'Express.js', icon: '/pictures/skills/express_js.png' },
      { name: 'PHP', icon: '/pictures/skills/php.png' },
    ],
    extras: ['Git', 'Docker', 'Linux command'],
  },
  {
    title: 'Database',
    description: 'Working with structured data and understanding how information flows through a product.',
    items: [
      { name: 'Oracle', icon: '/pictures/skills/oracle.png' },
      { name: 'MySQL', icon: '/pictures/skills/mysql.png' },
    ],
  },
]

const storyItems = [
  {
    title: 'How I work',
    text: 'I prefer clean code, thoughtful naming, and interfaces that help people understand what to do next without friction.',
  },
  {
    title: 'What I enjoy',
    text: 'I enjoy building web applications, learning modern tools, and improving both function and presentation together.',
  },
  {
    title: 'What I value',
    text: 'Good collaboration, curiosity, and the kind of polish that makes a project feel cared for.',
  },
]

function About() {
  return (
    <div className="page-shell">
      <section className="app-container content-split page-section">
        <div className="surface-card story-card reveal">
          <img src="/pictures/profile.png" className="about-image" alt="Sorawit profile" />
          <div className="profile-badge-group" style={{ marginTop: '1.25rem' }}>
            <span className="micro-chip">Bangkok, Thailand</span>
            <span className="micro-chip">Software engineer</span>
            <span className="micro-chip">Web application focus</span>
          </div>
        </div>

        <div className="surface-card story-card reveal reveal-delay-1">
          <span className="eyebrow">About me</span>
          <h1 className="section-title">Sorawit Jongjamareeseethong</h1>
          <p className="lead-text">
            I&apos;m a software engineer who enjoys building web applications with a balance of clean structure,
            useful functionality, and clear visual presentation.
          </p>
          <p className="story-text">
            I like learning new technologies, improving the quality of what I build, and shaping projects so they
            feel both practical and pleasant to use.
          </p>

          <div className="story-list">
            {storyItems.map((item) => (
              <div key={item.title} className="story-item">
                <span className="story-item-title">{item.title}</span>
                <p className="story-item-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="app-container page-section">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">Stack and tools</span>
            <h2 className="section-title">Skills I use to bring ideas into working products.</h2>
          </div>
          <p className="section-copy">
            A practical mix of frontend craft, backend foundations, and data knowledge for web-focused work.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`surface-card skill-card reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}
            >
              <span className="eyebrow">{group.title}</span>
              <h3>{group.title}</h3>
              <p className="feature-text">{group.description}</p>

              <div className="skill-icons">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-badge">
                    <span className="skill-icon">
                      <img src={item.icon} alt={item.name} />
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              {group.extras ? (
                <div className="text-chip-row" style={{ marginTop: '1rem' }}>
                  {group.extras.map((item) => (
                    <span key={item} className="text-chip">{item}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default About
