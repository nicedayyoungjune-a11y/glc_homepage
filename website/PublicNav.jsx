function PublicNav({ route, setRoute }) {
  // route may be a string id (e.g. 'about'), used to mark active link.
  // Each link navigates to a real .html file via href so the user lands on the right page.
  const items = [
    { id: 'home',       label: '홈',           href: 'Home.html' },
    { id: 'curriculum', label: '공공기관교육', href: 'Curriculum.html' },
    { id: 'smallbiz',   label: '소상공인',     href: 'SmallBiz.html' },
    { id: 'videos',     label: '교육후기',     href: 'Videos.html' },
    { id: 'notices',    label: '공개교육과정', href: 'Notices.html' },
    { id: 'about',      label: '회사소개',     href: 'About.html' },
  ];
  const Link = ({ id, label, href }) => (
    <a href={href}
      style={{fontSize:14,fontWeight:500,letterSpacing:'-0.01em',
        color: route===id ? 'var(--green-accent)' : 'var(--text-black)',
        textDecoration:'none',cursor:'pointer',whiteSpace:'nowrap',
        position:'relative',padding:'4px 0',
        borderBottom: route===id ? '2px solid var(--green-accent)' : '2px solid transparent'}}>{label}</a>
  );
  return (
    <header style={{position:'sticky',top:0,zIndex:50,height:83,background:'#fff',
      display:'flex',alignItems:'center',padding:'0 40px',gap:32,
      boxShadow:'var(--shadow-nav)'}}>
      <a href="Home.html" style={{textDecoration:'none',display:'flex'}}>
        <img src="../assets/glc-wordmark.svg" height="44" alt="GLC" />
      </a>
      <nav style={{display:'flex',gap:28,marginLeft:16,flex:1}}>
        {items.map(it => <Link key={it.id} {...it} />)}
      </nav>
      <div style={{display:'flex',gap:10,alignItems:'center'}}>
        <a href="#" style={{fontSize:13,color:'var(--text-black-soft)',textDecoration:'none',whiteSpace:'nowrap'}}>로그인</a>
        <a href="Curriculum.html" className="btn btn-primary" style={{textDecoration:'none'}}>교육 신청</a>
      </div>
    </header>
  );
}
window.PublicNav = PublicNav;
