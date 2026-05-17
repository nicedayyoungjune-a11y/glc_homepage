function TrustBand() {
  const items = ['중앙부처','광역시·도청','시·군·구청','공공기관','지방의회'];
  return (
    <section style={{background:'var(--ceramic)',padding:'36px 40px'}}>
      <div style={{fontSize:12,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--text-black-soft)',marginBottom:18,textAlign:'center'}}>한국사회적기업진흥원 인증 · Trusted by 320+ public organizations</div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:40,flexWrap:'wrap'}}>
        <img src="../../assets/partner-kosea.png" alt="한국사회적기업진흥원" style={{height:52,opacity:0.95}} />
        <div style={{width:1,height:32,background:'var(--hairline)'}} />
        {items.map(t=>(
          <div key={t} style={{fontSize:16,fontWeight:600,letterSpacing:'-0.16px',color:'var(--text-rewards)',opacity:0.7}}>{t}</div>
        ))}
      </div>
    </section>
  );
}
function ProcessSection() {
  const steps = [
    {n:'01',t:'수요 진단',d:'기관의 직무·계층·과제를 진단하고 핵심 학습목표를 정의합니다.'},
    {n:'02',t:'커리큘럼 설계',d:'120여 개 표준과정과 맞춤 모듈을 결합해 일정에 맞게 설계합니다.'},
    {n:'03',t:'강의 운영',d:'전문 강사진이 현장에서, 그리고 LMS에서 동시에 운영합니다.'},
    {n:'04',t:'성과 측정',d:'수료 후 행동변화·만족도를 측정해 다음 회차에 반영합니다.'},
  ];
  return (
    <section style={{padding:'80px 40px',background:'var(--neutral-warm)'}}>
      <div style={{marginBottom:28}}>
        <div style={{fontSize:12,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--text-black-soft)',marginBottom:8}}>How we work</div>
        <h2 style={{fontSize:36,fontWeight:600,letterSpacing:'-0.16px',color:'var(--text-black)',margin:0}}>한 번의 교육이 끝이 아닙니다.</h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
        {steps.map(s=>(
          <div key={s.n} style={{background:'#fff',borderRadius:12,padding:24,boxShadow:'var(--shadow-card)'}}>
            <div style={{fontSize:32,fontWeight:600,color:'var(--green-accent)',letterSpacing:'-0.5px',marginBottom:12}}>{s.n}</div>
            <div style={{fontSize:18,fontWeight:600,letterSpacing:'-0.16px',color:'var(--text-black)',marginBottom:8}}>{s.t}</div>
            <div style={{fontSize:14,lineHeight:1.6,color:'var(--text-black-soft)'}}>{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
function CTABand() {
  return (
    <section style={{background:'var(--house-green)',padding:'72px 40px',color:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center',gap:32,flexWrap:'wrap'}}>
      <div>
        <h2 style={{fontSize:32,fontWeight:600,letterSpacing:'-0.16px',color:'#fff',margin:0,marginBottom:10}}>2026년 교육 일정, 지금 확인해 보세요.</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.7)',margin:0}}>기관 맞춤 교육은 상담을 통해 일정과 비용을 안내해 드립니다.</p>
      </div>
      <div style={{display:'flex',gap:12}}>
        <a href="Curriculum.html" className="btn btn-on-dark-fill" style={{textDecoration:'none'}}>2026 교육 일정표</a>
        <a href="About.html" className="btn btn-on-dark-outline" style={{textDecoration:'none'}}>맞춤 교육 상담</a>
      </div>
    </section>
  );
}
function PublicFooter() {
  const Col = ({title,items}) => (
    <div>
      <div style={{fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(255,255,255,0.7)',marginBottom:14}}>{title}</div>
      <ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:10}}>
        {items.map((i,k)=>(typeof i==='string'
          ? <li key={k} style={{fontSize:14,color:'#fff',letterSpacing:'-0.01em'}}>{i}</li>
          : <li key={k}><a href={i.h} style={{fontSize:14,color:'#fff',letterSpacing:'-0.01em',textDecoration:'none',opacity:0.85}}>{i.l}</a></li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer style={{background:'#0F2622',color:'#fff',padding:'56px 40px 32px'}}>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,marginBottom:40}}>
        <div>
          <div style={{fontSize:22,fontWeight:700,letterSpacing:'-0.5px',color:'var(--gold)',marginBottom:10}}>(주)글로벌리더십센터</div>
          <div style={{fontSize:13,color:'rgba(255,255,255,0.7)',lineHeight:1.8}}>
            사회적기업 인증 제2014-XXX호<br/>
            서울특별시 중구 세종대로 110, 14층<br/>
            대표전화 02-000-0000 · silveredu826@naver.com
          </div>
        </div>
        <Col title="교육과정" items={[
          {l:'2026 표준과정',h:'Curriculum.html'},
          {l:'교육영상',h:'Videos.html'},
          {l:'소상공인 과정',h:'SmallBiz.html'},
          {l:'맞춤 교육 상담',h:'Curriculum.html'},
        ]} />
        <Col title="기관소개" items={[
          {l:'CEO 메시지',h:'About.html'},
          {l:'철학·이념',h:'About.html'},
          {l:'연혁·인증',h:'About.html'},
          {l:'오시는 길',h:'About.html'},
        ]} />
        <Col title="고객지원" items={[
          {l:'공지사항',h:'Notices.html'},
          {l:'자료실',h:'Notices.html'},
          {l:'자주 묻는 질문',h:'Notices.html'},
          {l:'홈',h:'Home.html'},
        ]} />
      </div>
      <div style={{borderTop:'1px solid rgba(255,255,255,0.12)',paddingTop:20,fontSize:12,color:'rgba(255,255,255,0.5)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
        <span>© 2026 사회적기업 (주)글로벌리더십센터. All rights reserved.</span>
        <span>이용약관 · 개인정보처리방침 · 사업자등록번호 000-00-00000</span>
      </div>
    </footer>
  );
}
window.TrustBand = TrustBand;
window.ProcessSection = ProcessSection;
window.CTABand = CTABand;
window.PublicFooter = PublicFooter;
