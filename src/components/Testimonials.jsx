import { TESTIMONIALS } from "../data/roles";
import s from "./Testimonials.module.css";

function initials(name) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function Testimonials() {
  const real = TESTIMONIALS.filter(t => !t.placeholder);
  const all  = TESTIMONIALS;

  // If all are placeholders, show a single "coming soon" hint instead
  if (real.length === 0) {
    return (
      <section className={s.section}>
        <div className="eye">Testimonials</div>
        <h2 className="section-title">What Clients Say</h2>
        <div className={s.empty}>
          <span className={s.emptyIcon}>💬</span>
          <p>Client testimonials coming soon.</p>
          <p className={s.emptyHint}>
            Edit <code>src/data/roles.js</code> → <code>TESTIMONIALS</code> to add real quotes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={s.section}>
      <div className="eye">Testimonials</div>
      <h2 className="section-title">What Clients Say</h2>
      <div className={s.grid}>
        {all.filter(t => !t.placeholder).map((t, i) => (
          <div key={i} className={s.card}>
            <div className={s.quote}>"</div>
            <p className={s.text}>{t.quote}</p>
            <div className={s.author}>
              {t.avatar
                ? <img src={t.avatar} alt={t.name} className={s.avatar} />
                : <div className={s.initials}>{initials(t.name)}</div>
              }
              <div>
                <div className={s.name}>{t.name}</div>
                <div className={s.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
