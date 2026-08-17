import { useState, useRef, useCallback } from "react";
const CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*";
export function useScramble(initial="") {
  const [text,setText]=useState(initial);
  const ivRef=useRef(null);
  const scramble=useCallback((target)=>{
    if(ivRef.current)clearInterval(ivRef.current);
    let i=0;
    ivRef.current=setInterval(()=>{
      setText(target.split("").map((c,idx)=>{
        if(c===" ")return" ";
        if(idx<i)return target[idx];
        return CHARS[Math.floor(Math.random()*CHARS.length)];
      }).join(""));
      i++;
      if(i>target.length){setText(target);clearInterval(ivRef.current);}
    },28);
  },[]);
  return {text,scramble};
}
