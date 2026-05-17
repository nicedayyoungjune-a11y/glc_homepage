function AboutHero() {
  return (
    <section style={{
      background: 'var(--house-green)',
      color: '#fff',
      padding: '88px 40px 96px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* faint ornamental wordmark */}
      <div aria-hidden style={{
        position: 'absolute', right: -40, top: -10, fontSize: 280,
        fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1,
        color: 'rgba(203,162,88,0.06)', userSelect: 'none', pointerEvents: 'none',
        fontFamily: 'var(--font-serif)',
      }}>GLC</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end', position: 'relative' }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', borderRadius: 50,
            border: '1px solid rgba(203,162,88,0.45)', color: 'var(--gold)',
            fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
            About · 기관소개
          </div>
          <h1 style={{
            fontSize: 64, fontWeight: 600, letterSpacing: '-0.6px',
            lineHeight: 1.08, color: '#fff', marginBottom: 24,
          }}>
            <span className="serif" style={{ fontSize: 53, fontStyle: 'italic', fontWeight: 500, color: 'var(--gold)' }}>교육/컨설팅 파트너</span>
          </h1>
          <div style={{
            fontSize: 17, lineHeight: 1.75, letterSpacing: '-0.16px',
            color: 'rgba(255,255,255,0.78)', maxWidth: 600,
          }}>
            <div style={{ color: '#fff', fontWeight: 500, fontSize: 19, marginBottom: 12 }}>공공기관의 성과는 사람에서 시작됩니다.</div>
            (주)글로벌리더십센터는 2008년 설립 이래 <strong style={{ color: '#fff', fontWeight: 500 }}>19년 동안 970여 기업·공공기관</strong>과 함께 하며, 교육의 공공성과 현장성을 함께 실현해왔습니다.<br/><br/>
            단순히 강의를 제공하는 회사가 아닙니다. 기관의 정책 목표와 조직의 현실을 이해하고, 교육을 통해 구성원의 행동 변화와 현장 적용 성과를 만들어내는 실행 중심의 <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>공공기관 맞춤형 교육·컨설팅 전문 파트너</strong>입니다.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { ko: '사회적기업 인증', en: 'Social Enterprise', sub: '고용노동부 제2013-088호' },
            { ko: '직업능력개발 훈련기관', en: 'HRD Training Institute', sub: '고용노동부 지정 (2008)' },
            { ko: '사회적기업 인증', en: 'Social Enterprise', sub: '고용노동부 제2013-088호' },
          ].map((c, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 18,
              padding: '18px 22px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(203,162,88,0.18)',
              borderRadius: 10,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 4 }}>{c.en}</div>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.16px', color: '#fff' }}>{c.ko}</div>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', textAlign: 'right', whiteSpace: 'nowrap' }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* KPI strip */}
      <div style={{
        marginTop: 64, paddingTop: 28,
        borderTop: '1px solid rgba(255,255,255,0.12)',
        display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24,
      }}>
        {[
          { v: '2008', l: '설립', sub: '17년 운영' },
          { v: '2008', l: '누적 고객사', sub: '기업·공공·의료·교육' },
          { v: '8개', l: '설립', sub: '제조부터 사회서비스까지' },
          { v: '5대', l: '인재육성 전략', sub: 'GLC HRD Framework' },
          { v: '2008', l: '거점', sub: '17년 운영' },
        ].map((k, i) => (
          <div key={i}>
            <div className="serif" style={{
              fontSize: 44, fontWeight: 600, letterSpacing: '-0.5px',
              color: 'var(--gold)', lineHeight: 1, marginBottom: 8,
            }}>{k.v}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', letterSpacing: '-0.16px', marginBottom: 2 }}>{k.l}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }}>{k.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.AboutHero = AboutHero;
