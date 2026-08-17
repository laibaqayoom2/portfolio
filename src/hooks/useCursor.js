import { useState, useEffect, useRef } from "react";
export function useCursor() {
  const [dot,setDot]=useState({x:-300,y:-300});
  const [ring,setRing]=useState({x:-300,y:-300});
  const mouseRef=useRef({x:-300,y:-300});
  const ringRef=useRef({x:-300,y:-300});
  useEffect(()=>{
    const onMove=(e)=>{ mouseRef.current={x:e.clientX,y:e.clientY}; setDot({x:e.clientX,y:e.clientY}); };
    window.addEventListener("mousemove",onMove);
    let raf;
    const tick=()=>{
      ringRef.current.x+=(mouseRef.current.x-ringRef.current.x)*0.12;
      ringRef.current.y+=(mouseRef.current.y-ringRef.current.y)*0.12;
      setRing({x:ringRef.current.x,y:ringRef.current.y});
      raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return()=>{ window.removeEventListener("mousemove",onMove); cancelAnimationFrame(raf); };
  },[]);
  return {dot,ring};
}
