/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import "./globals.css";

const projects = [
  {
    icon: "🎟️",
    accent: "primary",
    title: "BT Events",
    role: "Développeur Full Stack",
    description: "Plateforme digitale dédiée à l'organisation, la promotion et la gestion d'événements : vente de billets, gestion des accréditations, collaboration avec des prestataires.",
    tags: ["Node.js", "React", "Paiement en ligne"],
    link: "https://btevents.net",
    linkLabel: "btevents.net",
  },
  {
    icon: "🏗️",
    accent: "warm",
    title: "Africa Bloom Corporate",
    role: "Développeur Web",
    description: "Site vitrine pour une entreprise du secteur BTP, pensé pour présenter les activités et l'expertise de l'entreprise.",
    tags: ["WordPress", "Web Design"],
    link: "https://africabloomcorporate.com",
    linkLabel: "africabloomcorporate.com",
  },
  {
    icon: "💼",
    accent: "secondary",
    title: "Portfolio",
    role: "Projet Personnel",
    description: "Site portfolio dynamique construit avec Next.js, à l'interface responsive et moderne.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "https://portfolio-eebs.onrender.com",
    linkLabel: "portfolio-eebs.onrender.com",
  },
  {
    icon: "🔒",
    accent: "primary",
    title: "DevSecOps Pipeline",
    role: "Projet Personnel",
    description: "Pipeline CI/CD GitLab automatisé et sécurisé pour une application Angular conteneurisée avec Docker.",
    tags: ["GitLab CI/CD", "Docker", "Angular", "DevSecOps"],
    link: "https://www.linkedin.com/in/sammba-yero-taharka-sow-4863a223a/",
    linkLabel: "Voir sur LinkedIn",
  },
  {
    icon: "⚙️",
    accent: "warm",
    title: "CI/CD React + Docker",
    role: "Projet Personnel",
    description: "Pipeline GitLab avec Docker pour automatiser le build, les tests et le déploiement d'une application React.",
    tags: ["GitLab CI/CD", "Docker", "React"],
    link: "https://gitlab.com/sammba1/alika12",
    linkLabel: "gitlab.com/sammba1/alika12",
  },
  {
    icon: "📦",
    accent: "secondary",
    title: "Architecture Conteneurisée",
    role: "Projet Personnel",
    description: "Projet React containerisé avec Docker, incluant un déploiement automatisé de bout en bout.",
    tags: ["React", "Docker", "Déploiement automatisé"],
    link: "https://github.com/Taharka2000?tab=repositories",
    linkLabel: "Voir sur GitHub",
  },
];

const experience = [
  {
    title: "Formateur Développement Web",
    place: "GomyCode",
    period: "Mai 2024 – Présent",
    description: "Formation et encadrement d'apprenants en technologies web (HTML, CSS, JavaScript, React), temps partiel.",
  },
  {
    title: "Développeur Full Stack",
    place: "BT Events",
    period: "Nov – Déc 2024",
    description: (
      <>
        Plateforme digitale dédiée à l&apos;organisation, la promotion et la gestion d&apos;événements : vente de billets, gestion des accréditations, collaboration avec des prestataires. – <a href="https://btevents.net" target="_blank" rel="noopener noreferrer">btevents.net</a>
      </>
    ),
  },
  {
    title: "Stage Développeur",
    place: "Dioko",
    period: "Nov – Déc 2024",
    description: "Conception et développement d'un site web destiné aux services clients, facilitant l'accès aux informations et aux solutions d'assistance, avec intégration de paiements en ligne.",
  },
  {
    title: "Développeur Web",
    place: "Africa Bloom Corporate",
    period: "Sept 2024",
    description: (
      <>
        Site vitrine pour une entreprise BTP. – <a href="https://africabloomcorporate.com" target="_blank" rel="noopener noreferrer">africabloomcorporate.com</a>
      </>
    ),
  },
];

const formation = [
  {
    title: "Systèmes, Réseaux et Cloud",
    place: "Institut Africain de Management (IAM)",
    period: "2025 – Présent",
  },
  {
    title: "FullStack JS",
    place: "Edacy",
    period: "2024",
    description: "Formation intensive développement web full stack.",
  },
  {
    title: "FullStack JS",
    place: "GomyCode",
    period: "2023",
    description: "Technologies frontend et backend JavaScript.",
  },
  {
    title: "Licence Développement Web et Mobile",
    place: "Université Numérique Cheikh Hamidou Kane",
    period: "2021 – 2023",
  },
  {
    title: "Baccalauréat L2",
    place: "La Maïeutique",
    period: "2020",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial = stored === "dark" || stored === "light"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">S</div>
          <div className="logo-text">Sammba Sow</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#formation">Formation</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Changer de thème">
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-content">
            <div className="eyebrow">Disponible pour de nouveaux projets</div>
            <h1>
              <small>Salut, moi c&apos;est</small>
              Sammba Yero <span className="gradient-text">Taharka Sow</span>
            </h1>
            <p>
              Développeur FullStack basé au Sénégal, je conçois des applications web modernes avec React, Next.js et Node.js, du design à la mise en production.
            </p>
            <div className="call-to-action">
              <a href="SammbaYeroTaharkaSow.pdf" className="button">View Resume</a>
              <a href="mailto:sammbasow1999@gmail.com" className="button outline">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Taharka2000?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src="images/github.png" alt="GitHub" width="24" />
              </a>
              <a href="https://www.linkedin.com/in/sammba-yero-taharka-sow-4863a223a/" target="_blank" rel="noopener noreferrer">
                <img src="images/linkdin.png" alt="LinkedIn" width="24" />
              </a>
            </div>
            <div className="quick-facts">
              <div>
                <strong>1.5+ an</strong>
                <span>Expérience pratique</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Projets réalisés</span>
              </div>
              <div>
                <strong>Sénégal</strong>
                <span>Basé à Dakar</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow"></div>
            <img src="images/sammba.JPG" alt="Sammba Sow" />
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
              <img src="images/logoDocker.png" alt="Docker" />
              <img src="images/ts.png" alt="TypeScript" />
              <img src="images/css.png" alt="CSS" />
              <img src="images/html.png" alt="HTML" />
              <img src="images/word.png" alt="WordPress" />
              <img src="images/sql.png" alt="SQL" />
              <img src="images/express.png" alt="Express" />
            </div>
          </div>
        </section>

        <section id="about" className="container">
          <div className="section-head">
            <h2>
              <small>About Me</small>
              Qui suis-je ?
            </h2>
          </div>
          <div className="about-skills">
            <div className="about-card">
              <h3>A bit About Me</h3>
              <p>
                Développeur passionné avec une solide formation académique en informatique et une expérience pratique dans le développement de logiciels, ayant une bonne compréhension des concepts de développement web et mobile. Capable de travailler efficacement en équipe ou de manière autonome, avec un fort désir d&apos;apprendre et de s&apos;adapter aux nouvelles technologies.
              </p>
              <ul className="fact-list">
                <li>
                  <span className="fact-icon">📍</span>
                  <span><strong>Localisation</strong> — Dakar, Sénégal</span>
                </li>
                <li>
                  <span className="fact-icon">🎓</span>
                  <span><strong>Formation</strong> — Systèmes, Réseaux et Cloud (IAM, en cours)</span>
                </li>
                <li>
                  <span className="fact-icon">🗣️</span>
                  <span><strong>Langues</strong> — Français (natif), Anglais (notions)</span>
                </li>
                <li>
                  <span className="fact-icon">🧭</span>
                  <span><strong>MBTI</strong> — Architecte (INTJ-T)</span>
                </li>
              </ul>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>FrontEnd</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Angular</li>
                  <li>React</li>
                  <li>Tailwind</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>BackEnd</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Base de Données</h4>
                <ul>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>DevOps &amp; Outils</h4>
                <ul>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>GitLab</li>
                  <li>CI/CD</li>
                  <li>DevSecOps</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="container">
          <div className="section-head">
            <h2>
              <small>Recent</small>
              Work Experience
            </h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <div className="timeline-item" key={job.title + job.place}>
                <div className="timeline-card">
                  <h3>{job.title}</h3>
                  <div className="timeline-meta">
                    <span>{job.place}</span>
                    <span>{job.period}</span>
                  </div>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="formation" className="container">
          <div className="section-head">
            <h2>
              <small>Parcours</small>
              Formation
            </h2>
          </div>
          <div className="timeline formation-timeline">
            {formation.map((item) => (
              <div className="timeline-item" key={item.title + item.place}>
                <div className="timeline-card">
                  <h3>{item.title}</h3>
                  <div className="timeline-meta">
                    <span>{item.place}</span>
                    <span>{item.period}</span>
                  </div>
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects container">
          <div className="section-head">
            <h2>
              <small>Previous</small>
              Completed Projects
            </h2>
          </div>
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

        <section id="contact" className="contact container">
          <div className="contact-card">
            <h2>
              <small>Get in touch</small>
              Discutons de votre projet
            </h2>
            <p>
              Une idée, un projet web à concrétiser ou une opportunité à me proposer ? Je suis disponible et j&apos;aimerais en discuter avec vous.
            </p>
            <div className="call-to-action">
              <a href="mailto:sammbasow1999@gmail.com" className="button">Envoyer un email</a>
              <a href="https://www.linkedin.com/in/sammba-yero-taharka-sow-4863a223a/" target="_blank" rel="noopener noreferrer" className="button outline">LinkedIn</a>
            </div>
            <div className="contact-details">
              <span>📧 sammbasow1999@gmail.com</span>
              <span>📱 +221 77 596 84 26</span>
              <span>📍 Dakar, Sénégal</span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        © {new Date().getFullYear()} Sammba Yero Taharka Sow. Tous droits réservés.
      </footer>
    </>
  );
}
