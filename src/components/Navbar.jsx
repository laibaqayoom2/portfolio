import { useEffect, useState } from "react";
import s from "./Navbar.module.css";
export default function Navbar({role,onToggle}) {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",fn);
    return()=>window.removeEventListener("scroll",fn);
  },[]);
  return(
    <nav className={`${s.nav} ${scrolled?s.scrolled:""}`}>
      <a href="#hero" className={s.logo}>LQ</a>
      <div className={s.tog}>
        <button className={`${s.btn} ${role==="aiml"?s.on:""}`} onClick={()=>onToggle("aiml")}>AI/ML Dev</button>
        <button className={`${s.btn} ${role==="design"?s.on:""}`} onClick={()=>onToggle("design")}>Product Designer</button>
      </div>
      <div className={s.links}>
        <a href="#about" className={s.link}>About</a>
        <a href="#skills" className={s.link}>Skills</a>
        <a href="#work" className={s.link}>Work</a>
        <a href="#contact" className={s.link}>Contact</a>
      </div>
    </nav>
  );
}
