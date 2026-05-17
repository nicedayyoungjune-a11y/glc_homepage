function AboutMethodology() {
  const strategies = [
    { n: 'S1', t: '역량기반 인재육성', d: '성과 창출을 지원하는 역량 모델 기반 교육과정 설계와 Roadmap 수립.' },
    { n: 'S2', t: '핵심가치 확산', d: '도전과 고객중심 사고에 기반한 기업 핵심가치의 공유·실천 교육.' },
    { n: 'S3', t: '직무전문가 육성', d: '업무 전문성 제고를 위해 분야별 직무전문가를 양성하는 심화 교육.' },
    { n: 'S4', t: '전략적 리더 육성', d: '조직의 미래를 이끌어 갈 직위·직급별 리더 교육 프로그램 운영.' },
    { n: 'S5', t: '맞춤형 시스템', d: '인사·교육 연계와 e-HRD 시스템 기반의 맞춤형 컨설팅 제공.' },
  ];

  const Layer = ({ label, en, tone }) => (
    <div style={{
      background: tone === 'dark' ? 'var(--house-green)' : tone === 'mid' ? '#2B5148' : 'var(--green-accent)',
      color: '#fff', padding: '14px 22px', borderRadius: 8,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.16px' }}>{label}</div>
      <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{en}</div>
    </div>
  );

  return (
    <section style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>04 · Methodology</div>
            <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-black)', lineHeight: 1.2 }}>
              GLC <span className="serif" style={{ fontStyle: 'italic', color: 'var(--green-accent)' }}>HRD Framework.</span>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-black-soft)', maxWidth: 620 }}>
            GLC는 모든 교육과정을 <strong style={{ color: 'var(--text-black)' }}>역량 진단 → 교육 설계 → 운영 평가 → 인프라 연계</strong>의
            네 단계 사이클로 운영하며, 그 위에 <strong style={{ color: 'var(--green-accent)' }}>인재육성 5대 전략</strong>을 결합합니다.
          </p>
        </div>

        {/* Competency framework — three pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-accent)', fontWeight: 600, marginBottom: 12 }}>Competency Framework</div>
            <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.16px', color: 'var(--text-black)', marginBottom: 20 }}>
              세 개의 축으로 정의되는 역량.
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { t: 'Shared Value', k: '가치공유', d: '조직의 비전·미션·전략과 관련된 정렬 역량.' },
                { t: 'Business Performance', k: '일의 역량', d: '고성과 창출과 고객 로열티 확보에 직결되는 역량.' },
                { t: 'People Interaction', k: '사람의 역량', d: '조직 내 인간관계와 자질·마음가짐에 관한 역량.' },
              ].map((r, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 18, padding: '18px 22px',
                  background: 'var(--neutral-warm)', borderRadius: 10,
                  borderLeft: '3px solid var(--green-accent)',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-accent)', fontWeight: 600, marginBottom: 4 }}>{r.t}</div>
                    <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.16px', color: 'var(--glc-green)', marginBottom: 4 }}>{r.k}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-black-soft)', lineHeight: 1.6 }}>{r.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 12 }}>Capability Layers</div>
            <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.16px', color: 'var(--text-black)', marginBottom: 20 }}>
              네 단계의 역량 레이어.
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Layer label="직무 전문지식" en="Domain Knowledge" tone="dark" />
              <Layer label="직무 역량" en="Functional Competency" tone="dark" />
              <Layer label="리더십 역량" en="Leadership Competency" tone="mid" />
              <Layer label="기반 역량" en="Foundational Competency" tone="light" />
            </div>
            <div style={{ marginTop: 18, padding: '14px 18px', background: 'var(--gold-lightest)', borderRadius: 8, fontSize: 13, lineHeight: 1.7, color: 'var(--text-rewards)' }}>
              직위·직급별 역할 수행에 필요한 공통·선택 역량을 정의하고, 그에 맞는 교육 이수·인증제도를 함께 설계합니다.
            </div>
          </div>
        </div>

        {/* 5 Strategies */}
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-accent)', fontWeight: 600, marginBottom: 12 }}>Five Strategies</div>
          <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.16px', color: 'var(--text-black)', marginBottom: 24 }}>
            인재육성 5대 전략.
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14 }}>
            {strategies.map((s, i) => (
              <div key={i} style={{
                background: 'var(--neutral-warm)',
                padding: '24px 20px',
                borderRadius: 12,
                position: 'relative',
                minHeight: 200,
              }}>
                <div className="serif" style={{ fontSize: 14, color: 'var(--gold)', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 10 }}>{s.n}</div>
                <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.16px', color: 'var(--glc-green)', marginBottom: 10, lineHeight: 1.3 }}>{s.t}</div>
                <div style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-black-soft)' }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.AboutMethodology = AboutMethodology;
