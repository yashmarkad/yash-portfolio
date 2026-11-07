import { useState } from 'react'
import { profile, skills, projects, experience, education } from './data'
import { portraitImage } from './portrait'

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    external: <><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Expertise', '#expertise'], ['Work', '#work'], ['Experience', '#experience'], ['Contact', '#contact']]
  return <header className="header">
    <a className="brand" href="#home" aria-label="Yash Markad home"><span className="brand-mark">Y.</span><span>YASH MARKAD<span className="brand-sub">AI ENGINEER</span></span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'} /></button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <Icon name="arrow" /></a>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-grid" />
    <div className="hero-copy">
      <div className="availability"><span className="pulse" /> OPEN TO THE NEXT CHALLENGE</div>
      <p className="eyebrow">HELLO, I'M YASH MARKAD</p>
      <h1>I build AI that<br /><span>works in the real world.</span></h1>
      <p className="hero-description">AI Engineer focused on enterprise GenAI, agentic systems, and intelligent automation. I turn complex workflows into practical, production-minded AI solutions.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#work">Explore my work <Icon name="arrow" /></a>
        <a className="button button-ghost" href="#contact">Get in touch</a>
      </div>
      <div className="hero-meta"><span>BASED IN INDIA</span><span className="meta-dot" /><span>PYTHON · GENAI · AGENTIC AI</span></div>
    </div>
    <div className="hero-art hero-photo" aria-label="Portrait of Yash Markad">
      <div className="portrait-glow"><img src={portraitImage} alt="Yash Markad" /></div>
      <div className="portrait-tag"><span /> AI ENGINEER · BUILDER</div>
    </div>
    <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
  </section>
}

function About() {
  return <section className="section section-wrap" id="about">
    <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
    <div className="about-grid">
      <h2>Curious by nature.<br /><span>Practical by design.</span></h2>
      <div className="about-copy">
        <p className="lead">I’m a Generative AI Engineer with 1.5+ years of hands-on experience building AI-powered applications and enterprise automation.</p>
        <p>My work sits at the intersection of Python engineering, LLM applications, multi-agent orchestration, and enterprise integrations. I enjoy taking a problem from solution design to a working system—with reliability, security, and the people using it in mind.</p>
        <p>From context-aware support assistants to scheduled intelligence workflows, I focus on making AI useful beyond the demo.</p>
        <a className="text-link" href="#experience">Explore my journey <Icon name="arrow" /></a>
      </div>
    </div>
    <div className="stat-strip">
      <div><strong>1.5<span>+</span></strong><small>YEARS HANDS-ON</small></div>
      <div><strong>AI<span>/</span>ML</strong><small>ENGINEERING FOCUS</small></div>
      <div><strong>End<span>-</span>to<span>-</span>end</strong><small>BUILD · INTEGRATE · DEPLOY</small></div>
    </div>
  </section>
}

function Expertise() {
  return <section className="section section-wrap" id="expertise">
    <SectionLabel number="02">MY TOOLKIT</SectionLabel>
    <div className="section-heading"><h2>Skills & <span>expertise.</span></h2><p>The tools I use to design, build, connect, and ship intelligent applications.</p></div>
    <div className="skills-grid">
      {skills.map((group, index) => <article className="skill-card" key={group.group}>
        <span className="skill-index">0{index + 1}</span><h3>{group.group}</h3>
        <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
      </article>)}
    </div>
  </section>
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return <div className="modal-backdrop" onClick={onClose} role="presentation">
    <article className="project-modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close project details"><Icon name="close" /></button>
      <p className="eyebrow">{project.number} / {project.type}</p><h2>{project.title}</h2><p className="modal-intro">{project.description}</p>
      <h3>What I worked on</h3><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
      <div className="skill-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="modal-impact">{project.impact}</div>
    </article>
  </div>
}

function Work() {
  const [selected, setSelected] = useState(null)
  return <section className="section section-wrap work-section" id="work">
    <SectionLabel number="03">SELECTED WORK</SectionLabel>
    <div className="section-heading"><h2>Projects with a <span>purpose.</span></h2><p>A selection of AI systems and applications I’ve contributed to. Open a project to see the approach and scope.</p></div>
    <div className="projects-grid">
      {projects.map(project => <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.number}>
        <div className="project-top"><span>{project.number} / CASE STUDY</span><span className="project-symbol">{project.visual}</span></div>
        <p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
        <div className="project-bottom"><span className="project-impact">{project.impact}</span><button className="round-arrow" onClick={() => setSelected(project)} aria-label={`View ${project.title} details`}><Icon name="arrow" /></button></div>
      </article>)}
    </div>
    <ProjectModal project={selected} onClose={() => setSelected(null)} />
  </section>
}

function Experience() {
  return <section className="section section-wrap" id="experience">
    <SectionLabel number="04">WHERE I'VE BEEN</SectionLabel>
    <div className="section-heading"><h2>Experience & <span>education.</span></h2><p>Learning by building, collaborating, and taking ideas into working systems.</p></div>
    <div className="timeline">
      {experience.map((job, index) => <article className="timeline-item" key={job.company}>
        <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
        <div className="timeline-content"><div className="timeline-meta"><span>{job.period}</span><span>{job.location}</span></div><h3>{job.role}</h3><h4>{job.company}</h4><p>{job.summary}</p><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div>
      </article>)}
    </div>
    <div className="education-block"><h3>Education</h3><div className="education-grid">{education.map(item => <article key={item.degree}><span>{item.period}</span><h4>{item.degree}</h4><p>{item.institution}</p><small>{item.result}</small></article>)}</div></div>
  </section>
}

function Contact() {
  return <section className="contact-section section-wrap" id="contact">
    <SectionLabel number="05">HAVE A GOOD PROBLEM?</SectionLabel>
    <div className="contact-content"><p className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</p><h2>Good ideas deserve<br /><span>great execution.</span></h2><p className="contact-description">Have an AI challenge, a role to discuss, or an interesting idea? I'd be glad to connect.</p>
      <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Start a conversation <Icon name="arrow" /></a>
      <div className="contact-details"><a href={`mailto:${profile.email}`}><Icon name="mail" />{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <Icon name="external" /></a><a href={profile.github} target="_blank" rel="noreferrer">GITHUB <Icon name="external" /></a></div>
    </div>
  </section>
}

function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">Y.</span><span>YASH MARKAD<span className="brand-sub">AI ENGINEER</span></span></a><span>DESIGNED & BUILT WITH INTENTION · © {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></footer>
}

export default function App() {
  return <><Header /><main><Hero /><div className="section-divider" /><About /><div className="section-divider" /><Expertise /><div className="section-divider" /><Work /><div className="section-divider" /><Experience /><Contact /></main><Footer /></>
}