import { useRef, useState } from "react";
import Papa from "papaparse";
import s from "./CsvImporter.module.css";
export default function CsvImporter({onImport,onClose}) {
  const [preview,setPreview]=useState(null);
  const [error,setError]=useState("");
  const [drag,setDrag]=useState(false);
  const fileRef=useRef();
  const parse=(file)=>{
    setError("");
    Papa.parse(file,{header:true,skipEmptyLines:true,complete:({data,errors})=>{
      if(errors.length){setError("Parse error: "+errors[0].message);return;}
      const req=["role","name","description","tags"];
      const miss=req.filter(k=>!Object.keys(data[0]||{}).includes(k));
      if(miss.length){setError("Missing columns: "+miss.join(", "));return;}
      setPreview(data.map(r=>({n:r.name,d:r.description,t:r.tags?r.tags.split(",").map(x=>x.trim()):[],e:r.emoji||"✦",link:r.link||"#",thumbnail:r.thumbnail||"",role:r.role||"design"})));
    }});
  };
  const confirm=()=>{
    if(!preview)return;
    const byRole={aiml:[],design:[]};
    preview.forEach(p=>byRole[p.role==="aiml"?"aiml":"design"].push(p));
    onImport(byRole); onClose();
  };
  return(
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={e=>e.stopPropagation()}>
        <div className={s.hdr}><h2 className={s.ttl}>Import Projects via CSV</h2><button className={s.x} onClick={onClose}>✕</button></div>
        <div className={`${s.drop} ${drag?s.drag:""}`}
          onDragOver={e=>{e.preventDefault();setDrag(true);}}
          onDragLeave={()=>setDrag(false)}
          onDrop={e=>{e.preventDefault();setDrag(false);const f=e.dataTransfer.files[0];if(f?.name.endsWith(".csv"))parse(f);else setError("Please drop a .csv file");}}
          onClick={()=>fileRef.current.click()}>
          <input ref={fileRef} type="file" accept=".csv" onChange={e=>e.target.files[0]&&parse(e.target.files[0])} style={{display:"none"}}/>
          <div className={s.dropIcon}>📄</div>
          <p className={s.dropTxt}>Drop CSV here or <span className={s.ul}>browse</span></p>
          <p className={s.dropSub}>role · name · description · tags · emoji · link · thumbnail</p>
        </div>
        {error&&<div className={s.err}>{error}</div>}
        {preview&&(
          <div className={s.prev}>
            <p className={s.count}>✓ <strong>{preview.length}</strong> projects parsed — {preview.filter(p=>p.role==="aiml").length} AI/ML · {preview.filter(p=>p.role==="design").length} Design</p>
            <div className={s.tbl}>
              <table>
                <thead><tr>{["role","name","tags","link"].map(h=><th key={h}>{h}</th>)}</tr></thead>
                <tbody>{preview.slice(0,7).map((p,i)=>(
                  <tr key={i}>
                    <td><span className={`${s.pill} ${p.role==="aiml"?s.aiml:s.des}`}>{p.role}</span></td>
                    <td>{p.n}</td>
                    <td>{Array.isArray(p.t)?p.t.join(", "):p.t}</td>
                    <td className={s.lnk}>{p.link}</td>
                  </tr>
                ))}{preview.length>7&&<tr><td colSpan={4} className={s.more}>+{preview.length-7} more</td></tr>}</tbody>
              </table>
            </div>
          </div>
        )}
        <div className={s.foot}>
          <a href="/projects-template.csv" download className={s.tmpl}>↓ Download Template</a>
          <div className={s.acts}>
            <button className={s.cancel} onClick={onClose}>Cancel</button>
            <button className={s.confirm} onClick={confirm} disabled={!preview}>Import {preview?`(${preview.length})`:""}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
