import { useMemo, useState } from "react";
import {
  profile,
  contact,
  experience,
  projects,
  skills,
  certifications,
  practice,
} from "./data.js";

/* ---------- The API panel in the hero ---------- */

function buildResponses() {
  const responses = {
    "/profile": {
      name: profile.name,
      role: profile.role,
      education: profile.education,
      location: profile.location,
      status: profile.status,
      open_to: profile.openTo,
      learning_next: profile.learningNext,
    },
    "/experience": experience.map((e) => ({
      company: e.company,
      role: e.role,
      duration: e.duration,
    })),
    "/projects": projects.map((p) => ({ name: p.name, stack: p.stack })),
    "/skills": Object.fromEntries(
      skills.map((g) => [g.group.toLowerCase().replace(/[^a-z]+/g, "_"), g.items])
    ),
    "/contact": {
      email: contact.email,
      github: contact.github,
      linkedin: contact.linkedin || undefined,
    },
  };
  return responses;
}

// Splits pretty-printed JSON into coloured React nodes (no innerHTML).
function highlight(json) {
  const re = /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?/g;
  const out = [];
  let last = 0;
  let key = 0;
  let m;
  while ((m = re.exec(json)) !== null) {
    if (m.index > last) out.push(json.slice(last, m.index));
    if (m[1]) {
      out.push(
        <span key={key++} className={m[2] ? "tok-key" : "tok-str"}>
          {m[1]}
        </span>
      );
      if (m[2]) out.push(m[2]);
    } else {
      out.push(
        <span key={key++} className="tok-lit">
          {m[0]}
        </span>
      );
    }
    last = re.lastIndex;
  }
  out.push(json.slice(last));
  return out;
}

function ApiPanel() {
  const responses = useMemo(buildResponses, []);
  const paths = Object.keys(responses);
  const [active, setActive] = useState(paths[0]);
  const json = JSON.stringify(responses[active], null, 2);

  return (
    <div className="api" role="group" aria-label="Interactive summary of my profile as an API">
      <div className="api-nav">
        {paths.map((p) => (
          <button
            key={p}
            type="button"
            aria-current={p === active ? "true" : undefined}
            onClick={() => setActive(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="api-body">
        <div className="api-bar">
          <span className="method">GET</span>
          <span className="path">{active}</span>
          <span className="status">200 OK</span>
        </div>
        <pre key={active} className="api-json" aria-live="polite">
          <code>{highlight(json)}</code>
        </pre>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Main">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <h1>{profile.role}.</h1>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#projects">
            View projects
          </a>
          <a className="btn ghost" href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {contact.resumeUrl && (
            <a className="btn ghost" href={contact.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          )}
        </div>
      </div>
      <div className="hero-panel">
        <ApiPanel />
        <p className="hint">Pick an endpoint to read that part of my profile.</p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="block" id="experience">
      <div className="container">
        <h2>Experience</h2>
        <ul className="rows">
          {experience.map((e) => (
            <li className="row" key={e.company}>
              <div>
                <h3>{e.company}</h3>
                <p className="meta">
                  {e.role}
                  {e.duration ? `, ${e.duration}` : ""}
                </p>
              </div>
              <p>{e.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="block" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <ul className="rows">
          {projects.map((p) => (
            <li className="row" key={p.name}>
              <div>
                <h3>{p.name}</h3>
                <p className="meta">{p.stack.join(", ")}</p>
              </div>
              <div>
                <p>{p.summary}</p>
                {p.repo && (
                  <a className="text-link" href={p.repo} target="_blank" rel="noopener noreferrer">
                    View source on GitHub
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="block" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <dl className="skills">
          {skills.map((g) => (
            <div className="skill-row" key={g.group}>
              <dt>{g.group}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        <div className="creds">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((c) => (
              <li key={c.name}>
                {c.url ? (
                  <a className="text-link" href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </li>
            ))}
          </ul>
          <p className="practice">{practice}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="block contact" id="contact">
      <div className="container">
        <h2>Hiring for a Java backend role?</h2>
        <p className="lede">
          Send me an email. My code is on GitHub and my resume is one click away.
        </p>
        <a className="mail" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <div className="actions">
          <a className="btn primary" href={`mailto:${contact.email}`}>
            Send an email
          </a>
          <a className="btn ghost" href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {contact.linkedin && (
            <a className="btn ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {contact.resumeUrl && (
            <a className="btn ghost" href={contact.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">Built with React and Vite.</div>
      </footer>
    </>
  );
}
