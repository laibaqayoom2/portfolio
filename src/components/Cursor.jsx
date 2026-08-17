import { useCursor } from "../hooks/useCursor";
export default function Cursor() {
  const {dot,ring}=useCursor();
  const base={position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%,-50%)"};
  return(<>
    <div style={{...base,width:8,height:8,background:"var(--accent)",zIndex:9999,transition:"background .5s",left:dot.x,top:dot.y}}/>
    <div style={{...base,width:32,height:32,border:"1px solid var(--accent)",zIndex:9998,opacity:.4,transition:"border-color .5s",left:ring.x,top:ring.y}}/>
  </>);
}
