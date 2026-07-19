/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import "./globals.css";

const projects = [
  {
    icon: "🎟️",
    accent: "blue",
    title: "BT Events",
    role: "Développeur Full Stack",
    description: "Plateforme digitale dédiée à l'organisation, la promotion et la gestion d'événements : vente de billets, gestion des accréditations, collaboration avec des prestataires.",
    tags: ["Node.js", "React", "Paiement en ligne"],
    link: "https://btevents.net",
    linkLabel: "btevents.net",
  },
  {
    icon: "🏗️",
    accent: "yellow",
    title: "Africa Bloom Corporate",
    role: "Développeur Web",
    description: "Site vitrine pour une entreprise du secteur BTP, pensé pour présenter les activités et l'expertise de l'entreprise.",
    tags: ["WordPress", "Web Design"],
    link: "https://africabloomcorporate.com",
    linkLabel: "africabloomcorporate.com",
  },
  {
    icon: "💼",
    accent: "blue",
    title: "Portfolio",
    role: "Projet Personnel",
    description: "Site portfolio dynamique construit avec Next.js, à l'interface responsive et moderne.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "https://portfolio-eebs.onrender.com",
    linkLabel: "portfolio-eebs.onrender.com",
  },
  {
    icon: "🔒",
    accent: "yellow",
    title: "DevSecOps Pipeline",
    role: "Projet Personnel",
    description: "Pipeline CI/CD GitLab automatisé et sécurisé pour une application Angular conteneurisée avec Docker.",
    tags: ["GitLab CI/CD", "Docker", "Angular", "DevSecOps"],
    link: "https://www.linkedin.com/in/sammba-yero-taharka-sow-4863a223a/",
    linkLabel: "Voir sur LinkedIn",
  },
  {
    icon: "⚙️",
    accent: "blue",
    title: "CI/CD React + Docker",
    role: "Projet Personnel",
    description: "Pipeline GitLab avec Docker pour automatiser le build, les tests et le déploiement d'une application React.",
    tags: ["GitLab CI/CD", "Docker", "React"],
    link: "https://gitlab.com/sammba1/alika12",
    linkLabel: "gitlab.com/sammba1/alika12",
  },
  {
    icon: "📦",
    accent: "yellow",
    title: "Architecture Conteneurisée",
    role: "Projet Personnel",
    description: "Projet React containerisé avec Docker, incluant un déploiement automatisé de bout en bout.",
    tags: ["React", "Docker", "Déploiement automatisé"],
    link: "https://github.com/Taharka2000?tab=repositories",
    linkLabel: "Voir sur GitHub",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
     
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:taharkasow@gmail.com">Contact me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu} >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I m</small> Sammba Yero Taharka Sow</h1>
              <p>
                Software developer in Senegal . <span></span>
              </p>
              <div className="call-to-action">
                <a href="SammbaYeroTaharkaSow.pdf" className="button black">View Resume</a>
                <a href="mailto:sammbasow1999@gmail.com" className="button white">Contact Me</a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Taharka2000?tab=repositories">
                  <img src="images/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/sammba-yero-taharka-sow-4863a223a/" target="_blank" rel="noopener noreferrer">
                  <img src="images/linkdin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="images/sammba.JPG" alt="Sammba Sow" width="100%" />
          </div>
        </section>
        <section className="container logos">
          <div className="marquee">
            <div className="track">
              <img src="images/react.png" alt="React" />
              <img src="images/angular.png" alt="Angular" />
              <img src="images/mongodb.png" alt="MongoDB" />
              <img src="images/tailwind.png" alt="Tailwind" />
              <img src="images/node.png" alt="Nodejs" />
              <img src="images/logoDocker.png" width="50px" alt="Docker" />
              <img src="images/ts.png" alt="Tailwind" />
              <img src="images/css.png" alt="Tailwind" />
              <img src="images/html.png" alt="Tailwind" />
              <img src="images/word.png" alt="Tailwind" />
              <img src="images/sql.png" alt="Tailwind" />
              <img src="images/express.png" alt="Tailwind" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>FrontEnd</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Angular</li>
                <li>React</li>
                <li>Tailwind</li>
              </ul>
              <h3>BackEnd</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
              <h3>CMS</h3>
              <ul>
                <li>WordPress</li>
              </ul>
              <h3>Base de Donnée</h3>
              <ul>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
              <h3>DevOps</h3>
              <ul>
                <li>Docker</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>CI/CD</li>
                <li>DevSecOps</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit About Me</h3>
              <p>Développeur passionné avec une solide formation académique en informatique et une expérience pratique dans le développement de logiciels, ayant une bonne compréhension des concepts de développement web et mobile. Capable de travailler efficacement en équipe ou de manière autonome, avec un fort désir d&apos;apprendre et de s&apos;adapter aux nouvelles technologies. Engagé à fournir des solutions de haute qualité et à contribuer activement aux projets de développement.</p>
            </div>
          </div>
        </section>
        <section id="experience" className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <h3>Formateur Développement Web</h3>
              <div className="job-meta">
                <span>GomyCode</span>
                <span>Mai 2024 – Présent</span>
              </div>
              <p>Formation et encadrement d&apos;apprenants en technologies web (HTML, CSS, JavaScript, React), temps partiel.</p>
            </article>
            <article>
              <h3>Développeur Full Stack</h3>
              <div className="job-meta">
                <span>BT Events</span>
                <span>Nov – Déc 2024</span>
              </div>
              <p>Plateforme digitale dédiée à l&apos;organisation, la promotion et la gestion d&apos;événements : vente de billets, gestion des accréditations, collaboration avec des prestataires. – <a href="https://btevents.net" target="_blank" rel="noopener noreferrer">btevents.net</a></p>
            </article>
            <article>
              <h3>Stage Développeur</h3>
              <div className="job-meta">
                <span>Dioko</span>
                <span>Nov – Déc 2024</span>
              </div>
              <p>Conception et développement d&apos;un site web destiné aux services clients, facilitant l&apos;accès aux informations et aux solutions d&apos;assistance, avec intégration de paiements en ligne.</p>
            </article>
            <article>
              <h3>Développeur Web</h3>
              <div className="job-meta">
                <span>Africa Bloom Corporate</span>
                <span>Sept 2024</span>
              </div>
              <p>Site vitrine pour une entreprise BTP. – <a href="https://africabloomcorporate.com" target="_blank" rel="noopener noreferrer">africabloomcorporate.com</a></p>
            </article>
          </div>
        </section>
        <section id="projects" className="projects container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className={`project-card accent-${project.accent}`}>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <div className="project-role">{project.role}</div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {project.linkLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
