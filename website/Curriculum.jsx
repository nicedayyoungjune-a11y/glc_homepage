function CategoryBar({ active, setActive }) {
  const cats = ['전체','리더십','커뮤니케이션','AI','문제해결','기획','소양'];
  const counts = window.CURRICULUM.reduce((a,c)=>{a[c.cat]=(a[c.cat]||0)+1;return a;},{});
  counts['전체'] = window.CURRICULUM.length;
  return (
    <div style={{display:'flex',gap:8,flexWrap:'wrap',padding:'0 0 24px'}}>
      {cats.map(c=>(
        <button key={c} onClick={()=>setActive(c)} className="btn" style={{
          background: active===c ? 'var(--green-accent)' : '#fff',
          color: active===c ? '#fff' : 'var(--text-black)',
          borderColor: active===c ? 'var(--green-accent)' : 'var(--input-border)'
        }}>
          {c}
          <span style={{fontSize:11,marginLeft:8,opacity:0.7,letterSpacing:'0.05em'}}>{counts[c]||0}</span>
        </button>
      ))}
    </div>
  );
}
function CourseCard({ course, onOpen }) {
  return (
    <article onClick={()=>onOpen(course)} style={{background:'#fff',borderRadius:12,padding:24,boxShadow:'var(--shadow-card)',
      display:'flex',flexDirection:'column',gap:10,cursor:'pointer',transition:'all .2s ease',minHeight:230}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:4}}>
        <span style={{fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--green-accent)',fontWeight:600}}>{course.en}</span>
        <span style={{fontSize:12,color:'var(--text-black-soft)',padding:'2px 8px',background:'var(--neutral-warm)',borderRadius:4,fontWeight:600}}>{course.hours}h</span>
      </div>
      <h3 style={{fontSize:20,fontWeight:600,letterSpacing:'-0.16px',color:'var(--glc-green)',lineHeight:1.25,margin:0}}>{course.title}</h3>
      <p style={{fontSize:14,lineHeight:1.6,letterSpacing:'-0.01em',color:'var(--text-black-soft)',margin:0,minHeight:44,flex:1}}>{course.desc}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8,paddingTop:14,borderTop:'1px solid var(--hairline)'}}>
        <span style={{fontSize:13,color:'var(--text-black-soft)'}}>{course.sessions||course.meta}</span>
        <span style={{fontSize:13,color:'var(--green-accent)',fontWeight:600}}>자세히 →</span>
      </div>
    </article>
  );
}
function CourseDetail({ course, onClose }) {
  if (!course) return null;
  return (
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(15,38,34,0.55)',zIndex:80,
      display:'flex',alignItems:'center',justifyContent:'center',padding:32}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,maxWidth:720,width:'100%',maxHeight:'88vh',overflow:'auto',padding:'36px 40px',boxShadow:'0 24px 48px rgba(0,0,0,0.25)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:18,gap:16}}>
          <div>
            <div style={{fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--green-accent)',fontWeight:600,marginBottom:8}}>{course.en} · {course.cat}</div>
            <h2 style={{fontSize:28,fontWeight:600,letterSpacing:'-0.3px',color:'var(--glc-green)',lineHeight:1.2,margin:0}}>{course.title}</h2>
          </div>
          <button onClick={onClose} style={{background:'none',border:'1px solid var(--input-border)',borderRadius:'50%',width:34,height:34,cursor:'pointer',fontSize:18,color:'var(--text-black-soft)'}}>×</button>
        </div>
        <p style={{fontSize:15,lineHeight:1.7,color:'var(--text-black)',marginBottom:20}}>{course.desc}</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginBottom:24,padding:'18px 20px',background:'var(--neutral-warm)',borderRadius:10}}>
          <Stat l="교육시간" v={`${course.hours}시간`} />
          <Stat l="회차" v={course.sessions||'—'} />
          <Stat l="대상" v={course.meta.split('·')[2]?.trim()||'전 직원'} />
        </div>
        <Block title="2026 일정">
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {(course.schedule||[]).map((s,i)=>(
              <div key={i} style={{padding:'6px 14px',background:'var(--gold-lightest)',color:'var(--text-rewards)',borderRadius:50,fontSize:13,fontWeight:500}}>{s}</div>
            ))}
          </div>
        </Block>
        <Block title="주요 교과목">
          <ul style={{margin:0,paddingLeft:0,listStyle:'none',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px 18px'}}>
            {(course.topics||[]).map((t,i)=>(
              <li key={i} style={{fontSize:14,color:'var(--text-black)',paddingLeft:18,position:'relative',lineHeight:1.6}}>
                <span style={{position:'absolute',left:0,top:9,width:6,height:6,borderRadius:'50%',background:'var(--green-accent)'}} />{t}
              </li>
            ))}
          </ul>
        </Block>
        <div style={{display:'flex',gap:10,marginTop:28}}>
          <button className="btn btn-primary" style={{flex:1}}>이 과정 신청하기</button>
          <button className="btn btn-outline">교육 일정표 PDF</button>
        </div>
      </div>
    </div>
  );
}
function Stat({l,v}) {
  return (<div><div style={{fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--text-black-soft)',marginBottom:4}}>{l}</div><div style={{fontSize:14,fontWeight:600,color:'var(--text-black)',letterSpacing:'-0.01em'}}>{v}</div></div>);
}
function Block({title,children}) {
  return (<div style={{marginBottom:20}}><div style={{fontSize:12,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--green-accent)',fontWeight:700,marginBottom:10}}>{title}</div>{children}</div>);
}
function CurriculumSection() {
  const [active, setActive] = React.useState('전체');
  const [open, setOpen] = React.useState(null);
  const items = active==='전체' ? CURRICULUM : CURRICULUM.filter(c=>c.cat===active);
  return (
    <section style={{padding:'80px 40px',background:'var(--neutral-warm)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,marginBottom:14}}>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:12,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--text-black-soft)',marginBottom:8}}>Curriculum · 2026</div>
          <h2 style={{fontSize:36,fontWeight:600,letterSpacing:'-0.16px',color:'var(--text-black)',margin:0,lineHeight:1.2}}>대전인재개발원 협력<br/><span style={{color:'var(--green-accent)'}}>13개 표준 교육과정.</span></h2>
        </div>
        <a href="#" style={{fontSize:14,color:'var(--green-accent)',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap',flexShrink:0}}>2026 일정표 PDF →</a>
      </div>
      <div style={{display:'flex',gap:16,marginBottom:20,flexWrap:'wrap'}}>
        {[
          {v:'13',l:'표준 과정'},{v:'40기',l:'2026 운영 회차'},{v:'1,206',l:'정원 (명)'},{v:'7~70h',l:'교육시간 범위'},
        ].map((s,i)=>(
          <div key={i} style={{padding:'14px 22px',background:'#fff',borderRadius:10,boxShadow:'var(--shadow-card)',display:'flex',gap:14,alignItems:'baseline'}}>
            <div className="serif" style={{fontSize:24,fontWeight:600,color:'var(--green-accent)',letterSpacing:'-0.3px'}}>{s.v}</div>
            <div style={{fontSize:12,color:'var(--text-black-soft)',letterSpacing:'0.05em'}}>{s.l}</div>
          </div>
        ))}
      </div>
      <CategoryBar active={active} setActive={setActive} />
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {items.map((c,i)=><CourseCard key={i} course={c} onOpen={setOpen} />)}
      </div>
      <CourseDetail course={open} onClose={()=>setOpen(null)} />
    </section>
  );
}
window.CurriculumSection = CurriculumSection;
