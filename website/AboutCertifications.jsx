function AboutCertifications() {
  const certs = [
    { y: '2008', n: '고용노동부 직업능력개발 훈련기관', en: 'HRD Training Institute', issuer: '고용노동부' },
    { y: '2012', n: '사회적기업 인증', en: 'Certified Social Enterprise', issuer: '고용노동부' },
    { y: '2013', n: '여성기업 인증', en: 'Women-led Enterprise', issuer: '중소벤처기업부' },
    { y: '2013', n: '고용우수기업 인증', en: 'Top Employer Award', issuer: '고용노동부' },
    { y: '2013', n: '일하기 좋은 기업', en: 'Great Place to Work', issuer: '고용노동부' },
    { y: '2016', n: '일학습병행기업', en: 'Work-Learning Dual Enterprise', issuer: '한국산업인력공단' },
  ];

  return (
    <section style={{ background: 'var(--neutral-warm)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>06 · Credentials</div>
            <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-black)', lineHeight: 1.2, marginBottom: 20 }}>
              공공이 인정하는<br/><span style={{ color: 'var(--green-accent)' }}>여섯 개의 인증.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-black-soft)', marginBottom: 24, maxWidth: 380 }}>
              사회적기업 인증으로 정부 우선구매 대상에 오르며, 사업주 위탁교육은 고용보험을 통한 환급이 가능합니다.
            </p>

            <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: 14 }}>Procurement Benefits</div>
              {[
                { l: '기관 평가 가점', v: '+1.5점' },
                { l: '사업주 위탁 환급', v: '500만원~' },
                { l: '세재 혜택', v: '50% 감면' },
                { l: '사업개발비 지원', v: '연 5,000만원' },
              ].map((b, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '10px 0',
                  borderBottom: i === 3 ? 'none' : '1px solid var(--hairline)',
                }}>
                  <span style={{ fontSize: 14, color: 'var(--text-black)' }}>{b.l}</span>
                  <span className="serif" style={{ fontSize: 18, fontWeight: 600, color: 'var(--green-accent)', letterSpacing: '-0.16px' }}>{b.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
            {certs.map((c, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 12, padding: '24px 24px 22px',
                boxShadow: 'var(--shadow-card)',
                display: 'grid', gridTemplateColumns: '64px 1fr', gap: 18, alignItems: 'center',
                borderTop: '1px solid var(--gold)',
              }}>
                <div style={{
                  width: 64, height: 64, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {/* seal */}
                  <svg viewBox="0 0 64 64" width="64" height="64">
                    <circle cx="32" cy="32" r="29" fill="none" stroke="#CBA258" strokeWidth="1" />
                    <circle cx="32" cy="32" r="24" fill="none" stroke="#CBA258" strokeWidth="0.5" strokeDasharray="2 2" />
                    <path d="M32 14 L34 20 L40 20 L35 24 L37 30 L32 26 L27 30 L29 24 L24 20 L30 20 Z" fill="#CBA258" />
                  </svg>
                  <div style={{ position: 'absolute', fontSize: 10, fontWeight: 700, color: 'var(--gold)', bottom: 14, letterSpacing: '0.05em' }}>{c.y}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 4 }}>{c.en}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.16px', color: 'var(--text-black)', marginBottom: 4, lineHeight: 1.3 }}>{c.n}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-black-soft)' }}>{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.AboutCertifications = AboutCertifications;
