const skills = [
  "Laravel", "PHP", "REST APIs", "PostgreSQL", "Docker", "CI/CD", "Redis", "RabbitMQ", "ClickHouse", "Kubernetes", "GraphQL", "PHPStan",
];

const experience = [
  {
    period: "2023 — now",
    company: "NaPopravku",
    role: "PHP Developer",
    summary: "Building and maintaining APIs for mobile applications and administrative systems, while steadily modernising a mature codebase.",
    wins: ["30% faster API responses through server-side optimisation", "Introduced Larastan into the team workflow", "Eliminated legacy N+1 query bottlenecks"],
  },
  {
    period: "2020 — 2022",
    company: "Jetmix",
    role: "Software Engineer",
    summary: "Delivered Laravel and Django services, custom CMS solutions and production infrastructure for internal and client-facing products.",
    wins: ["Cut feature delivery time by 50% through CI/CD improvements", "Built content-management systems around JSON API", "Set up production monitoring and logging"],
  },
  {
    period: "2021 — 2022",
    company: "Lyceum",
    role: "Programming Instructor",
    summary: "Taught programming fundamentals to seventh-grade students — a rewarding exercise in making complex ideas clear.",
    wins: [],
  },
];

const projects = [
  { number: "01", name: "AI Doctor Service", type: "AI healthcare service", text: "An AI-powered doctor service combining a Laravel backend, Go services and a web view for a focused healthcare experience.", tags: ["AI", "Laravel", "Go", "Web view"] },
  { number: "02", name: "NaPopravku Telemed", type: "Healthcare platform", text: "Platform work across mobile API compatibility, documentation and collaboration with QA and mobile teams.", tags: ["Laravel", "Medicine", "Mobile API"] },
  { number: "03", name: "Finance management system", type: "Business analytics", text: "MVP finance platform for spending reports and analytics, with bank integrations, statement parsing and high-volume reports.", tags: ["Laravel 9", "ClickHouse", "Banks"] },
  { number: "04", name: "Histrf.ru", type: "Public & admin APIs", text: "An early high-pressure engagement: Laravel APIs for public and administrative use, delivered on an eight-person team in three months.", tags: ["Laravel", "Redis", "API"] },
  { number: "05", name: "rvio.histrf.ru", type: "Content platform", text: "An admin CMS built with Laravel Nova, including an Excel/CSV import flow that made article publication much simpler.", tags: ["Laravel Nova", "CMS", "Imports"] },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Artyom Bondar — Backend Engineer",
        url: "https://disastrousbug.com/",
      },
      {
        "@type": "Person",
        name: "Artyom Bondar",
        url: "https://disastrousbug.com/",
        jobTitle: "Senior PHP / Laravel Engineer",
        description: "Senior backend engineer specialising in dependable PHP and Laravel systems.",
        sameAs: ["https://www.linkedin.com/in/disastrousbug"],
        knowsAbout: ["PHP", "Laravel", "REST APIs", "PostgreSQL", "Docker", "CI/CD"],
        address: { "@type": "PostalAddress", addressLocality: "Kaliningrad", addressCountry: "RU" },
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="hero" id="top">
        <nav className="nav wrap"><a className="brand" href="#top">AB<span>_</span></a><div className="nav-links"><a href="#work">Selected work</a><a href="#experience">Experience</a><a className="nav-contact" href="mailto:artem_bondar98@mail.ru">Let&apos;s talk ↗</a></div></nav>
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <p className="eyebrow"><i /> Available for senior backend roles</p>
            <h1>Systems that<br /><em>hold together.</em></h1>
            <p className="intro">I&apos;m Artyom Bondar, a Senior PHP / Laravel Engineer who turns complex product requirements into fast, dependable backend systems.</p>
            <div className="hero-actions"><a className="button button-main" href="mailto:artem_bondar98@mail.ru">Start a conversation <span>↗</span></a><a className="text-link" href="#work">See selected work <span>↓</span></a><a className="text-link" href="/artyom-bondar-resume.pdf" target="_blank" rel="noreferrer">Resume PDF <span>↗</span></a></div>
          </div>
          <aside className="signal-card"><div className="signal-top"><span>OPERATOR PROFILE</span><b>● ONLINE</b></div><div className="signal-name">ARTYOM<br />BONDAR</div><div className="signal-meta"><span>LOCATION<br /><strong>Kaliningrad, RU</strong></span><span>FOCUS<br /><strong>Backend systems</strong></span></div><div className="signal-line" /></aside>
        </div>
        <div className="hero-footer wrap"><span>PHP / Laravel / APIs / Infrastructure</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
      </section>

      <section className="proof wrap" aria-label="Career highlights"><div><strong>6+</strong><span>years building<br />web products</span></div><div><strong>30%</strong><span>faster API response<br />at NaPopravku</span></div><div><strong>50%</strong><span>faster delivery through<br />CI/CD optimisation</span></div><div><strong>∞</strong><span>curiosity for better<br />systems</span></div></section>

      <section className="about wrap" id="about"><p className="section-label">01 / ABOUT</p><div><h2>I care about the details that keep a product calm under pressure.</h2><p className="body-copy">Five-plus years in Laravel have taught me that good backend work is as much about clarity as it is about code: well-shaped APIs, observable production systems, and the discipline to improve a legacy codebase without breaking the business around it.</p><div className="profile-links"><a className="text-link dark" href="https://www.linkedin.com/in/disastrousbug" target="_blank" rel="noreferrer">LinkedIn profile <span>↗</span></a><a className="text-link dark" href="https://t.me/disastrous_bug" target="_blank" rel="noreferrer">Telegram <span>↗</span></a><a className="text-link dark" href="https://career.habr.com/disastrous_bug" target="_blank" rel="noreferrer">Habr Career <span>↗</span></a><a className="text-link dark" href="/artyom-bondar-resume.pdf" target="_blank" rel="noreferrer">Open résumé <span>↗</span></a></div></div></section>

      <section className="work-section" id="work"><div className="wrap"><div className="section-heading"><p className="section-label">02 / SELECTED WORK</p><h2>Evidence over<br /><em>empty promises.</em></h2><p>Some of the systems and challenges that shaped the way I work.</p></div><div className="projects">{projects.map((project) => <article className="project" key={project.number}><div className="project-no">{project.number}</div><div className="project-main"><p>{project.type}</p><h3>{project.name}</h3><p className="project-text">{project.text}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow">↗</span></article>)}</div></div></section>

      <section className="skills wrap"><p className="section-label">03 / TOOLKIT</p><div className="skills-content"><h2>Pragmatic tools.<br />Reliable outcomes.</h2><div><p className="body-copy">My default stack is Laravel and PHP, complemented by the infrastructure and data tools needed to make a backend resilient in production.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div></section>

      <section className="experience" id="experience"><div className="wrap"><div className="section-heading"><p className="section-label">04 / EXPERIENCE</p><h2>Built in<br /><em>the real world.</em></h2></div><div className="timeline">{experience.map((item) => <article className="job" key={item.company}><div className="job-period">{item.period}</div><div className="job-info"><p>{item.company}</p><h3>{item.role}</h3><p className="job-summary">{item.summary}</p>{item.wins.length > 0 && <ul>{item.wins.map((win) => <li key={win}>{win}</li>)}</ul>}</div></article>)}</div></div></section>

      <section className="contact"><div className="wrap contact-inner"><p className="section-label">05 / NEXT STEP</p><h2>Let&apos;s build something<br /><em>that lasts.</em></h2><a href="mailto:artem_bondar98@mail.ru" className="contact-email">artem_bondar98@mail.ru <span>↗</span></a><p className="contact-note">Open to relocation · Russian citizenship<br />Kaliningrad, Russia</p></div></section>
      <footer className="footer wrap"><span>© {new Date().getFullYear()} Artyom Bondar</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
