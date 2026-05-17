function SmallBizHero() {
  return (
    <section style={{
      background: 'var(--house-green)',
      color: '#fff',
      padding: '88px 40px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', right: -40, top: -20, fontSize: 260,
        fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1,
        color: 'rgba(203,162,88,0.05)', userSelect: 'none', pointerEvents: 'none',
        fontFamily: 'var(--font-serif)',
      }}>소상공인</div>

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '6px 14px', borderRadius: 50,
              border: '1px solid rgba(203,162,88,0.45)', color: 'var(--gold)',
              fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
              Small Biz · 소상공인 지원
            </div>
            <h1 style={{
              fontSize: 56, fontWeight: 600, letterSpacing: '-0.5px',
              lineHeight: 1.1, color: '#fff', marginBottom: 10,
            }}>
              소상공인의<br/>
              <span className="serif" style={{ fontSize: 52, fontStyle: 'italic', fontWeight: 500, color: 'var(--gold)' }}>성장 파트너</span>
            </h1>
            <div style={{ fontSize: 19, fontWeight: 500, color: '#fff', marginBottom: 14, marginTop: 8 }}>
              사장님의 현장을 바꾸는 교육·컨설팅
            </div>
            <div style={{
              fontSize: 16, lineHeight: 1.85, letterSpacing: '-0.16px',
              color: 'rgba(255,255,255,0.78)', maxWidth: 560,
            }}>
              사회적기업으로서의 책임과 <strong style={{ color: '#fff', fontWeight: 500 }}>17년 HRD 전문성</strong>으로
              소상공인의 경영·마케팅·AI 역량을 함께 키워드립니다.<br/><br/>
              <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>소상공인진흥원 지정 교육기관</strong>으로서
              소상공인 지식배움터 온라인 과정과 현장 밀착형 컨설팅을 함께 제공합니다.
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <a href="#consulting" className="btn btn-on-dark-fill" style={{ textDecoration: 'none' }}>컨설팅 프로그램 보기</a>
              <a href="#courses" className="btn btn-on-dark-outline" style={{ textDecoration: 'none' }}>온라인 교육 신청</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: '★', ko: '사회적기업 인증', sub: '고용노동부 제2013-088호 · 정부사업 우선 선정', en: 'Certified Social Enterprise' },
              { icon: '🏛', ko: '소상공인진흥원 파트너', sub: '소상공인 지식배움터 연계 교육 제공', en: 'SBIZ Partner' },
              { icon: '📋', ko: '고용노동부 훈련기관', sub: '위탁교육 정부 환급 500만원~ 가능', en: 'HRD Training Institute' },
              { icon: '👥', ko: '300여 기관 · 17년', sub: '공공·기업·소상공인 검증된 교육 파트너', en: '17 Years of Experience' },
            ].map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(203,162,88,0.18)',
                borderRadius: 10,
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  border: '1px solid var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', flexShrink: 0, fontSize: 18,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 3 }}>{c.en}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{c.ko}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI strip */}
        <div style={{
          marginTop: 56, paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24,
        }}>
          {[
            { v: '17년', l: '소상공인 교육', sub: '2008년 설립 이래' },
            { v: '300+', l: '기업·기관', sub: '공공·민간·소상공인' },
            { v: '무상', l: '소상공인 교육', sub: '소진공 지원사업 연계' },
            { v: '4종', l: '컨설팅 프로그램', sub: '현장 맞춤형 지원' },
            { v: '500만+', l: '교육비 환급', sub: '고용보험 적용 시' },
          ].map((k, i) => (
            <div key={i}>
              <div className="serif" style={{
                fontSize: 38, fontWeight: 600, letterSpacing: '-0.5px',
                color: 'var(--gold)', lineHeight: 1, marginBottom: 8,
              }}>{k.v}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', letterSpacing: '-0.16px', marginBottom: 2 }}>{k.l}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }}>{k.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SmallBizHero = SmallBizHero;
