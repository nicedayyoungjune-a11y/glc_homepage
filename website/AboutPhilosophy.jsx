function AboutPhilosophy() {
  const Pillar = ({ kicker, title, en, body, accent }) => (
    <div style={{
      padding: '32px 28px',
      background: '#fff',
      borderRadius: 12,
      borderTop: `3px solid ${accent}`,
      boxShadow: 'var(--shadow-card)',
      display: 'flex', flexDirection: 'column', gap: 12,
      minHeight: 280,
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: accent, fontWeight: 700 }}>{kicker}</div>
      <div className="serif" style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.3px', color: 'var(--glc-green)', lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: 12, fontStyle: 'italic', color: 'var(--text-black-soft)', letterSpacing: '0.02em' }}>{en}</div>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--text-black)', marginTop: 6 }}>{body}</p>
    </div>
  );
  return (
    <section style={{ background: 'var(--neutral-warm)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>03 · Philosophy</div>
          <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-black)', lineHeight: 1.2, maxWidth: 720 }}>
            <span style={{ color: 'var(--green-accent)' }}>Who we are.</span> <br/>우리는 행동을 가르치는 사회적 교육기업입니다.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginBottom: 32 }}>
          <Pillar
            kicker="Vision"
            title="리더십 센터"
            en="Who we are."
            body="우리는 사회적 교육기업입니다. 당신과 모두를 행동케 하고, 끝내 모두를 변화시킵니다."
            accent="#006241"
          />
          <Pillar
            kicker="Philosophy"
            title="머리보다 가슴으로"
            en="Listen with the heart, not the ear."
            body="귀로 듣지 않습니다. 가슴으로 듣게 합니다. 머리로 기억하는 교육이 아닌 몸과 행동으로 남는 가치를 실현합니다."
            accent="#CBA258"
          />
          <Pillar
            kicker="Methodology"
            title="Global 행동교육"
            en="Schooling behavior."
            body="모두가 움직입니다. 알게 하는 것을 넘어, 행동의 리듬을 만드는 것이 우리의 교수 설계 원칙입니다."
            accent="#2B5148"
          />
        </div>

        {/* Education ideology — three circles model */}
        <div style={{
          background: '#fff', borderRadius: 16, padding: '48px 56px',
          boxShadow: 'var(--shadow-card)', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-accent)', fontWeight: 600, marginBottom: 10 }}>Education Ideal</div>
            <h3 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.3px', color: 'var(--glc-green)', lineHeight: 1.25, marginBottom: 16 }}>
              기업과 인재의 동반 성장.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-black)' }}>
              GLC의 교육 이념은 세 가지 원의 교차점에 있습니다.
              교육 전문기업이 제공하는 <strong>체계와 신뢰</strong>, GLC만이 설계할 수 있는 <strong>맞춤형 교육</strong>,
              그리고 듣는 것을 넘어 <strong>자발적 행동</strong>으로 이어지는 학습. 이 세 가지가 만나는 자리에서
              우리의 모든 프로그램이 시작됩니다.
            </p>
          </div>

          <svg viewBox="0 0 460 320" style={{ width: '100%', height: 'auto' }}>
            <defs>
              <radialGradient id="g1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#006241" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="#006241" stopOpacity="0.06"/>
              </radialGradient>
              <radialGradient id="g2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#CBA258" stopOpacity="0.22"/>
                <stop offset="100%" stopColor="#CBA258" stopOpacity="0.08"/>
              </radialGradient>
              <radialGradient id="g3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1E3932" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="#1E3932" stopOpacity="0.06"/>
              </radialGradient>
            </defs>
            <circle cx="160" cy="130" r="115" fill="url(#g1)" stroke="#006241" strokeWidth="1" />
            <circle cx="300" cy="130" r="115" fill="url(#g2)" stroke="#CBA258" strokeWidth="1" />
            <circle cx="230" cy="220" r="115" fill="url(#g3)" stroke="#1E3932" strokeWidth="1" />
            <text x="115" y="92" fontFamily="Inter" fontSize="11" fill="#006241" letterSpacing="2" textAnchor="middle">SYSTEM</text>
            <text x="115" y="108" fontFamily="Inter" fontSize="13" fontWeight="600" fill="#006241" textAnchor="middle">체계와 신뢰</text>
            <text x="345" y="92" fontFamily="Inter" fontSize="11" fill="#A77545" letterSpacing="2" textAnchor="middle">CUSTOM</text>
            <text x="345" y="108" fontFamily="Inter" fontSize="13" fontWeight="600" fill="#A77545" textAnchor="middle">맞춤형 교육</text>
            <text x="230" y="280" fontFamily="Inter" fontSize="11" fill="#1E3932" letterSpacing="2" textAnchor="middle">ACTION</text>
            <text x="230" y="296" fontFamily="Inter" fontSize="13" fontWeight="600" fill="#1E3932" textAnchor="middle">자발적 행동</text>
            <text x="230" y="160" fontFamily="Lora" fontSize="14" fontStyle="italic" fill="#33433D" textAnchor="middle">기업과 인재의</text>
            <text x="230" y="180" fontFamily="Lora" fontSize="14" fontStyle="italic" fill="#33433D" textAnchor="middle">동반 성장</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
window.AboutPhilosophy = AboutPhilosophy;
