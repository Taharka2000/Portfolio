/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

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
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:sammbasow1999@gmail.com">Contact me</a>
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
              <h1><small>Hi I'm</small> Sammba Yero Taharka Sow</h1>
              <p>
                Software developer in Senegal . <span></span>
              </p>
              <div className="call-to-action">
                <a href="Cv.pdf" className="button black">View Resume</a>
                <a href="mailto:sammbasow1999@gmail.com" className="button white">Contact Me</a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Taharka2000?tab=repositories">
                  <img src="images/github.png" alt="GitHub" width="48" />
                </a>
                <a href="#">
                  <img src="images/linkdin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="images/sammba-removebg-preview.png" alt="Sammba Sow" width="100%" />
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
                <li>Express</li>
                <li>SpringBoot</li>
              </ul>
              <h3>CMS</h3>
              <ul>
                <li>WordPress</li>
              </ul>
              <h3>Base de Donne</h3>
              <ul>
                <li>Sql</li>
                <li>NoSql</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit About Me</h3>
              <p> Développeur junior passionné avec une solide formation académique en informatique et une expérience pratique dans le développement de logiciels. et ayant une bonne compréhension des concepts de développement web et mobile. Capable de travailler efficacement en équipe ou de manière autonome, avec un fort désir d'apprendre et de s'adapter aux nouvelles technologies. Engagé à fournir des solutions de haute qualité et à contribuer activement aux projets de développement.?</p>
              <p></p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="images/image.png" alt="Workplace-1" width="100%" />
                  <figcaption>Instructeur Web </figcaption>
                </div>
              </figure>
              <h3>Instructeur online en software developpeur en Part Time</h3>
              <div>2024-Now</div>
              <p>Formation et Accompagnement des étudiants à
                travers des projets pratiques, fournissant un soutien
                technique personnalisé pour initier ou améliorer leurs
                compétences en codage.</p>
            </article>
            {/*  <article>
              <figure>
                <div>
                  <img src="images/image.png" alt="Workplace-1" width="100%" />
                  <figcaption>Workplace-1</figcaption>
                </div>
              </figure>
              <h3>Workplace -1</h3>
              <div>2024-Now</div>
              <p>Instructor Web</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="images/image.png" alt="Workplace-1" width="100%" />
                  <figcaption>Workplace-1</figcaption>
                </div>
              </figure>
              <h3>Workplace -1</h3>
              <div>2024-Now</div>
              <p>Instructor Web</p>
            </article> */}
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://github.com/Taharka2000/React-Router" className="bento-item">
              <img src="images/exp2.png" alt="Workplace-1" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="images/exp3.png" alt="Workplace-1" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="images/exp3.png" alt="Workplace-1" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="images/exp3.png" alt="Workplace-1" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="images/exp3.png" alt="Workplace-1" width="100%" />
            </a>
            <a href="https://github.com/Taharka2000/FrontEnd-ProjetFinal" className="bento-item">
              <img src="images/exp1.png" alt="Workplace-1" width="100%" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
