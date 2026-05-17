function AboutImpact() {
  const programs = [
    { t: '행복한 가정 만들기', d: '충남지방경찰청 12주 가정 회복 프로그램. 부부·가족 관계 코칭과 갈등 조정을 결합한 장기 과정.', tag: '공공기관 협력' },
    { t: '청소년 인성·효행 교육', d: '효행청소년단·아동복지시설과 함께한 인성 교육과 교육연극 기반 감정·분노 조절 프로그램.', tag: '청소년' },
    { t: '고학력 경력단절여성 일자리', d: 'YWCA 연계 청소년창의지도사 양성 후 현장 활동까지 이어지는 일자리 창출 프로젝트.', tag: '여성·일자리' },
    { t: '우리배추학교', d: '충남대 농대·아동복지시설과 연계, 자연과 함께하는 인성·생태 학습 캠프.', tag: '생태·인성' },
    { t: '노인복지 프로그램', d: '소통·웃음치료·놀이치료, 노인성 질환 예방 등 노인 요양 시설 맞춤 프로그램 개발·운영.', tag: '실버케어' },
    { t: '교수법 및 활동 후원', d: '대전교원직능시니어클럽과 지속적 협약, 은퇴 교사의 강의 활동 후원.', tag: '교사 시니어' },
  ];
  return (
    <section style={{ background: 'var(--gold-lightest)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-rewards)', marginBottom: 12 }}>08 · Social Impact</div>
            <h2 className="serif" style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-rewards)', lineHeight: 1.2 }}>
              사회적기업이라는 말의<br/><em style={{ color: 'var(--gold)' }}>무게.</em>
            </h2>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-rewards)', maxWidth: 480, paddingBottom: 8 }}>
            GLC는 사업 수익의 일부를 매년 청소년 인성, 노인복지, 경력단절여성 일자리 같은 사회적 약자를 위한 교육 사업에 환원합니다.
            이것이 우리가 17년간 지켜 온 약속입니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {programs.map((p, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 12, padding: '26px 24px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <div style={{
                alignSelf: 'flex-start',
                fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--gold)', fontWeight: 700,
                padding: '4px 10px', background: 'var(--gold-lightest)', borderRadius: 4,
              }}>{p.tag}</div>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.16px', color: 'var(--glc-green)', lineHeight: 1.3 }}>{p.t}</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text-black-soft)' }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.AboutImpact = AboutImpact;
