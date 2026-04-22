import Footer from '../component/Footer'

const iconMap = {
  live: '/pictures/icons/link.png',
  code: '/pictures/icons/code.png',
  video: '/pictures/icons/youtube.png',
}

const showcaseGroups = [
  {
    title: 'Group Projects',
    description: 'Collaborative builds created with teammates, showing how I work with shared ideas and team execution.',
    projects: [
      {
        id: 'secret-number',
        eyebrow: 'Team project',
        title: 'SECRET NUMBER',
        description: 'A number guessing game built as an early group project with a simple, playful interaction flow.',
        tags: ['Collaboration', 'Game UI', 'Frontend'],
        images: [
          '/pictures/showcases/teamproject1secretNumber.png',
          '/pictures/showcases/teamproject1secretNumber2.png',
          '/pictures/showcases/teamproject1secretNumber3.png',
        ],
        imageFit: 'cover',
        mediaHeight: 220,
        links: [
          { type: 'live', label: 'Live site', href: 'https://team-project1-rho.vercel.app/' },
          { type: 'code', label: 'GitHub', href: 'https://github.com/opelish081/Team_Project1' },
          { type: 'video', label: 'Video', href: 'https://youtu.be/RcYQYPqgrsw' },
        ],
      },
      {
        id: 'ct-keyboard',
        eyebrow: 'Team project',
        title: 'CT KEYBOARD',
        description: 'A keyboard e-commerce concept focused on product browsing, layout practice, and team coordination.',
        tags: ['E-commerce', 'Team work', 'UI flow'],
        images: [
          '/pictures/showcases/teamproject2CTKeyboard.png',
          '/pictures/showcases/teamproject2CTKeyboard2.png',
        ],
        imageFit: 'cover',
        mediaHeight: 220,
        links: [
          { type: 'live', label: 'Live site', href: 'https://team-project2-xi.vercel.app/' },
          { type: 'code', label: 'GitHub', href: 'https://github.com/opelish081/Team_Project2' },
          { type: 'video', label: 'Video', href: 'https://youtu.be/q5GPxdnbVI8' },
        ],
      },
      {
        id: 'pawcare',
        eyebrow: 'Team project',
        title: 'PAWCARE',
        description: 'A pet management application designed around appointments, records, and a more useful care workflow.',
        tags: ['Pet care', 'Product thinking', 'Collaboration'],
        images: [
          '/pictures/showcases/pawcare.png',
          '/pictures/showcases/pawcare2.png',
          '/pictures/showcases/pawcare3.png',
          '/pictures/showcases/pawcare4.png',
        ],
        imageFit: 'contain',
        mediaHeight: 240,
        links: [
          { type: 'code', label: 'GitHub', href: 'https://github.com/orgs/PAWCARE-CP24KW2/repositories' },
        ],
      },
    ],
  },
  {
    title: 'Bot-Assisted Projects',
    description: 'Projects accelerated with bot support, used to move faster from concept to a working product.',
    projects: [
      {
        id: 'petcare',
        eyebrow: 'Bot-assisted build',
        title: 'PETCARE',
        description: 'A pet appointment and health record platform with reminders, bilingual support, and care management flows.',
        tags: ['Next.js', 'Supabase', 'Automation'],
        images: ['/pictures/showcases/petcare.png'],
        imageFit: 'contain',
        mediaHeight: 240,
        links: [
          { type: 'live', label: 'Live site', href: 'https://petcare-bay.vercel.app/th' },
          { type: 'code', label: 'GitHub', href: 'https://github.com/opelish081/petcare' },
        ],
      },
      {
        id: 'calcal',
        eyebrow: 'Bot-assisted build',
        title: 'CALCAL',
        description: 'A food logging dashboard experience designed to help track meals in a cleaner and more guided way.',
        tags: ['Dashboard', 'AI feature', 'Next.js'],
        images: ['/pictures/showcases/calcal.png'],
        imageFit: 'contain',
        mediaHeight: 240,
        links: [
          { type: 'live', label: 'Live site', href: 'https://calcal-rho.vercel.app/dashboard' },
          { type: 'code', label: 'GitHub', href: 'https://github.com/opelish081/calcal' },
        ],
      },
    ],
  },
]

function ShowcaseMedia({ project }) {
  if (!project.images?.length) {
    return (
      <div className="showcase-placeholder" style={{ background: project.placeholderGradient }}>
        <span className="showcase-placeholder-eyebrow">{project.eyebrow}</span>
        <strong className="showcase-placeholder-title">{project.title}</strong>
        <p className="showcase-placeholder-copy">{project.placeholderCopy}</p>
      </div>
    )
  }

  return (
    <div
      id={`${project.id}Carousel`}
      className="carousel slide showcase-media"
      data-bs-ride="carousel"
      data-bs-interval="2800"
    >
      <div className="carousel-inner">
        {project.images.map((image, index) => (
          <div key={image} className={`carousel-item${index === 0 ? ' active' : ''}`}>
            <img
              src={image}
              alt={`${project.title} preview ${index + 1}`}
              style={{
                height: `${project.mediaHeight ?? 240}px`,
                objectFit: project.imageFit ?? 'cover',
                background: project.imageFit === 'contain' ? '#ffffff' : 'transparent',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, delayClass = '' }) {
  return (
    <article className={`surface-card showcase-card reveal ${delayClass}`}>
      <ShowcaseMedia project={project} />

      <div className="showcase-body">
        <span className="project-kicker">{project.eyebrow}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="tech-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-chip">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="action-pill">
              <img src={iconMap[link.type]} alt="" aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function Showcases() {
  return (
    <div className="page-shell">
      <section className="app-container page-section">
        <div className="surface-card page-intro reveal">
          <span className="eyebrow">Selected work</span>
          <h1 className="section-title">Projects that show how I build, collaborate, and explore ideas.</h1>
          <p className="lead-text">
            A curated mix of team projects and bot-assisted experiments, presented with a cleaner structure for faster review.
          </p>
        </div>
      </section>

      <section className="app-container page-section">
        {showcaseGroups.map((group, groupIndex) => (
          <div key={group.title} className={`showcase-section reveal ${groupIndex === 1 ? 'reveal-delay-1' : ''}`}>
            <div className="section-header">
              <div>
                <span className="eyebrow">{groupIndex === 0 ? 'Collaborative work' : 'Accelerated exploration'}</span>
                <h2 className="section-title">{group.title}</h2>
              </div>
              <p className="section-copy">{group.description}</p>
            </div>

            <div className="showcase-grid">
              {group.projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delayClass={index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  )
}
export default Showcases
