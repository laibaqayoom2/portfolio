import { useState, useEffect } from "react";
import { ROLES, MARQUEE_ITEMS } from "./data/roles";
import { useReveal } from "./hooks/useReveal";
import Cursor       from "./components/Cursor";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import ProjectCard  from "./components/ProjectCard";
import Testimonials from "./components/Testimonials";
import CsvImporter  from "./components/CsvImporter";
import "./App.css";

const DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

function Reveal({ children, className = "" }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

const getInitialRole = () => {
  const params = new URLSearchParams(window.location.search);
  const r = params.get("role");
  return r === "aiml" ? "aiml" : "design";
};

export default function App() {
  const [role, setRole]           = useState(getInitialRole);
  const [csvProjects, setCsvProjects] = useState(null);
  const [showImporter, setShowImporter] = useState(false);

  const data     = ROLES[role];
  const projects = csvProjects ? (csvProjects[role] ?? []) : data.defaultProjects;

  useEffect(() => {
    document.documentElement.style.setProperty("--accent",       data.accent);
    document.documentElement.style.setProperty("--accent-rgb",   data.aR);
    document.documentElement.style.setProperty("--accent-light", data.aL);

    // Keep URL in sync
    const url = new URL(window.location);
    url.searchParams.set("role", role);
    window.history.pushState({}, "", url);
  }, [role, data]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPop = () => {
      const params = new URLSearchParams(window.location.search);
      const r = params.get("role");
      setRole(r === "aiml" ? "aiml" : "design");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const allSkills = data.skills.flatMap(g => g.items).slice(0, 14);

  return (
    <>
      <Cursor />
      <Navbar role={role} onToggle={setRole} />
      <Hero data={data} />

      {/* STATS */}
      <div className="stats">
        {data.stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-val">{s.v}</div>
            <div className="stat-lbl">{s.l}</div>
          </div>
        ))}
      </div>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {DOUBLED.map((item, i) => (
            <span key={i} className="m-item">
              {item}<span className="m-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Reveal>
        <section id="about" className="section">
          <div className="eye">About</div>
          <h2 className="section-title">
            Silver Medalist CS Grad<br />with a bias for action.
          </h2>
          <div className="about-grid">
            <p className="about-text">{data.bio}</p>
            <div className="chips">
              {allSkills.map((s, i) => (
                <span key={i} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* SKILLS */}
      <Reveal className="skills-bg">
        <section id="skills" className="section">
          <div className="eye">Tech Stack</div>
          <h2 className="section-title">Tools of the Trade</h2>
          <div className="skills-grid">
            {data.skills.map((g, i) => (
              <div key={i}>
                <div className="skill-cat">{g.cat}</div>
                <div className="skill-tags">
                  {g.items.map((s, j) => (
                    <span key={j} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* PROJECTS */}
      <Reveal>
        <section id="work" className="section">
          <div className="section-top-row">
            <div>
              <div className="eye">Selected Work</div>
              <h2 className="section-title">
                Projects That<br />Ship to Production.
              </h2>
            </div>
            <div className="import-actions">
              {csvProjects && (
                <button className="btn-clear" onClick={() => setCsvProjects(null)}>
                  ✕ Clear CSV
                </button>
              )}
              <button className="btn-import" onClick={() => setShowImporter(true)}>
                ↑ Import CSV
              </button>
            </div>
          </div>

          {projects.length === 0 ? (
            <div className="empty-state">
              <p>No projects yet.</p>
              <button className="btn-import" onClick={() => setShowImporter(true)}>
                Import from CSV →
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map((p, i) => (
                <ProjectCard key={p.n + i} project={p} index={i} />
              ))}
            </div>
          )}
        </section>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal>
        <Testimonials />
      </Reveal>

      {/* CONTACT */}
      <div id="contact">
        <div className="contact-section">
          <h2 className="contact-title">
            LET'S<br /><span>WORK</span><br />TOGETHER
          </h2>
          <a href="mailto:laibaqayoom6@gmail.com" className="contact-email">
            laibaqayoom6@gmail.com →
          </a>
          <div className="contact-links">
            <a href="https://linkedin.com/in/laibaqayoom" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/laibaqayoom2"      className="contact-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://laibaqayoom2.github.io/"       className="contact-link" target="_blank" rel="noopener noreferrer">Portfolio ↗</a>
          </div>
        </div>
        <footer className="footer">
          © 2026 LAIBA QAYOOM · ISLAMABAD, PAKISTAN
        </footer>
      </div>

      {showImporter && (
        <CsvImporter
          onImport={setCsvProjects}
          onClose={() => setShowImporter(false)}
        />
      )}
    </>
  );
}
