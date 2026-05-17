function SmallBizTrust() {
  const pillars = [
    {
      kicker: '사회적기업 인증',
      en: 'Social Enterprise Advantage',
      title: '정부사업\n우선 선정',
      color: 'var(--glc-green)',
      points: [
        '소상공인 관련 정부·지자체 공고 시 우선 선정 기준 적용',
        '기관 평가 시 가점 +1.5점 부여',
        '사업개발비 연간 5,000만원까지 매년 지원',
        '전문 인력 인건비 지원 (2,000만원 × 3명, 3년 한도)',
        '고용보험료 지원 및 세재 50% 감면',
      ],
    },
    {
      kicker: '고용노동부 훈련기관',
      en: 'Government-Backed Training',
      title: '교육비\n정부 환급',
      color: 'var(--gold)',
      points: [
        '사업주 위탁교육 고용보험 환급 가능',
        '기업·소상공인당 최소 500만원 이상 환급',
        '고용보험 가입비용 비례 환급 한도 증가',
        '고용노동부 공고 사업 시 사업 제안 대상 기관',
        '중소기업 컨소시엄 사업 신청 가능',
      ],
    },
    {
      kicker: '17년 HRD 전문성',
      en: 'Proven Track Record',
      title: '검증된\n교육 파트너',
      color: '#2B5148',
      points: [
        '공공기관·대기업·소상공인 300여 기관 교육 실적',
        '소상공인진흥원 파트너 교육기관',
        '전통시장·소규모 창업 현장 교육 다수 운영',
        '행동 변화 중심 HRD 방법론 적용',
        '교육 설계~운영~평가 원스톱 제공',
      ],
    },
  ];

  return (
    <section style={{ background: '#fff', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>02 · Why GLC</div>
          <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-black)', lineHeight: 1.2, maxWidth: 720 }}>
            <span style={{ color: 'var(--green-accent)' }}>소상공인에게 GLC를 선택해야 하는</span><br/>세 가지 이유.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 40 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              padding: '32px 28px',
              background: 'var(--neutral-warm)',
              borderRadius: 14,
              borderTop: `3px solid ${p.color}`,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: p.color, fontWeight: 700, marginBottom: 8 }}>{p.kicker}</div>
                <div className="serif" style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.3px', color: p.color, lineHeight: 1.25, whiteSpace: 'pre-line' }}>{p.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-black-soft)', fontStyle: 'italic', marginTop: 4 }}>{p.en}</div>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, lineHeight: 1.6, color: 'var(--text-black)' }}>
                    <span style={{ color: p.color, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>·</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 소상공인 지식배움터 연계 배너 */}
        <div style={{
          background: 'var(--house-green)',
          borderRadius: 16,
          padding: '40px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 40,
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>공식 연계 플랫폼</div>
            <h3 style={{ fontSize: 26, fontWeight: 600, color: '#fff', letterSpacing: '-0.3px', marginBottom: 10 }}>
              소상공인 지식배움터와 함께합니다.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: 620 }}>
              중소벤처기업부 소상공인진흥원이 운영하는 <strong style={{ color: '#fff' }}>소상공인 지식배움터</strong>의
              온라인 교육과정을 GLC의 오프라인 컨설팅과 연계하여 현장 적용 효과를 극대화합니다.
              기본교육(마케팅·사업장운영·지원사업·기업가정신·교양)과
              AI교육(AI도구이해·마케팅활용·상품서비스기획·업무효율화·AI트렌드)을 제공합니다.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
            <a href="#courses" className="btn btn-on-dark-fill" style={{ textDecoration: 'none', textAlign: 'center' }}>
              과정 목록 바로 보기
            </a>
            <a href="#consulting" className="btn btn-on-dark-outline" style={{ textDecoration: 'none', textAlign: 'center' }}>
              컨설팅 신청하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.SmallBizTrust = SmallBizTrust;
