import { useEffect, useRef } from "react";
import { useScramble } from "../hooks/useScramble";
import s from "./Hero.module.css";
export default function Hero({data}) {
  const {text,scramble}=useScramble(data.desc);
  const l2=useRef(null);
  useEffect(()=>{
    scramble(data.desc);
    const el=l2.current; if(!el)return;
    el.style.animation="none"; el.offsetHeight; el.style.animation="";
  },[data]);
  return(
    <section className={s.hero} id="hero">
      <div className={s.b1}/><div className={s.b2}/>
      <div className={s.inner}>
        <div className={s.badge}>
          <span className={s.dot}/>{data.label} · Islamabad, Pakistan
        </div>
        <h1 className={s.name}>
          <span className={s.l1}>LAIBA</span>
          <span className={s.l2} ref={l2}>QAYOOM</span>
        </h1>
        <div className={s.bottom}>
          <p className={s.tagline}>{text}</p>
          <div className={s.ctas}>
            <a href="#work" className={s.btnPrimary}>View Work →</a>
            <a href="#contact" className={s.btnGhost}>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
