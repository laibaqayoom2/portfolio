import s from "./ProjectCard.module.css";

const TYPE_COLORS = {
  "Figma Design":    { bg: "#F0EDFF", color: "#5C3BFE" },
  "Webflow Build":   { bg: "#E8F4FF", color: "#0066CC" },
  "WordPress Build": { bg: "#FFF0F0", color: "#CC2200" },
};

export default function ProjectCard({ project, index }) {
  const { n, d, t, e, link, thumbnail, type, caseStudy } = project;
  const tags = Array.isArray(t) ? t : t.split(",").map(x => x.trim());
  const badge = type ? TYPE_COLORS[type] : null;

  const tilt = (ev) => {
    const el = ev.currentTarget, r = el.getBoundingClientRect();
    const x = (ev.clientX - r.left) / r.width - 0.5;
    const y = (ev.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(700px) translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg)`;
    el.style.transition = "box-shadow .1s, border-color .2s";
  };
  const untilt = (ev) => {
    ev.currentTarget.style.transform = "";
    ev.currentTarget.style.transition = "all .5s cubic-bezier(.23,1,.32,1)";
  };

  return (
    <div className={s.card} onMouseMove={tilt} onMouseLeave={untilt}>
      {/* Thumbnail or emoji */}
      {thumbnail
        ? <div className={s.imgWrap}>
            <img src={thumbnail} alt={n} className={s.thumb} />
          </div>
        : <div className={s.emojiWrap}><span className={s.emoji}>{e || "✦"}</span></div>
      }

      <div className={s.body}>
        <div className={s.top}>
          <span className={s.num}>0{index + 1}</span>
          <div className={s.right}>
            {badge && (
              <span className={s.badge} style={{ background: badge.bg, color: badge.color }}>
                {type}
              </span>
            )}
            <a
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={s.arrow}
              title="View project"
            >↗</a>
          </div>
        </div>

        {caseStudy && (
          <a href={caseStudy} target="_blank" rel="noopener noreferrer" className={s.caseStudyBtn}>
            Case Study
          </a>
        )}

        <div className={s.title}>{n}</div>
        <p className={s.desc}>{d}</p>
        <div className={s.tags}>
          {tags.map((tag, i) => <span key={i} className={s.tag}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}
