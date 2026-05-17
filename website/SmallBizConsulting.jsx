function SmallBizConsulting() {
  const programs = [
    {
      num: '01',
      title: '선진지 견학',
      en: 'Field Visit Program',
      tag: '탐방·벤치마킹',
      tagColor: 'var(--glc-green)',
      desc: '성공한 소상공인의 현장을 직접 방문해 경영 노하우와 운영 방식을 배우는 체험형 프로그램입니다. 벤치마킹을 통해 내 사업에 즉시 적용 가능한 인사이트를 얻습니다.',
      points: [
        '우수 소상공인 매장·공방·식당 현장 방문',
        '대표자 인터뷰 및 운영 노하우 공유',
        '성공 요인 분석 워크숍 진행',
        '우수 전통시장·상권 탐방 포함',
      ],
      accent: 'var(--glc-green)',
    },
    {
      num: '02',
      title: '전통시장 컨설팅',
      en: 'Traditional Market Consulting',
      tag: '상권 활성화',
      tagColor: 'var(--gold)',
      desc: '침체된 전통시장에 활력을 불어넣는 맞춤형 컨설팅입니다. 상권 분석부터 마케팅 전략 수립, 온라인 연계, 이벤트 기획까지 전 단계를 현장에서 지원합니다.',
      points: [
        '시장·상가 현황 진단 및 상권 분석',
        'SNS·온라인 판매 채널 개설 지원',
        '공동 이벤트·축제·특화 콘텐츠 기획',
        '상인 교육 프로그램 연계 운영',
      ],
      accent: 'var(--gold)',
    },
    {
      num: '03',
      title: '소상공인 경영 컨설팅',
      en: 'Business Management Consulting',
      tag: '경영 진단·개선',
      tagColor: '#2B5148',
      desc: '개별 소상공인의 경영 실태를 진단하고 매출 증대·비용 절감·운영 효율화를 위한 실행 가능한 개선 방안을 제시합니다. 1:1 맞춤형으로 진행됩니다.',
      points: [
        '재무·손익 구조 진단 및 개선 방향 제시',
        '원가 절감 및 수익성 향상 전략 수립',
        '직원 채용·노무 리스크 예방 가이드',
        '폐업 위기 소상공인 회생 지원',
      ],
      accent: '#2B5148',
    },
    {
      num: '04',
      title: '소상공인 SNS 마케팅',
      en: 'SNS Marketing Program',
      tag: 'SNS·온라인 마케팅',
      tagColor: 'var(--green-accent)',
      desc: '인스타그램·블로그·카카오채널을 활용해 단골 고객을 만들고 신규 고객을 유입시키는 실전 SNS 마케팅을 직접 배우고 실습합니다. AI 도구 활용도 포함합니다.',
      points: [
        '인스타그램·블로그 계정 최적화 실습',
        'AI 활용 콘텐츠 제작·자동 업로드',
        '카카오채널 고객 관리 및 쿠폰·이벤트 활용',
        '리뷰 마케팅과 구글·네이버 플레이스 관리',
      ],
      accent: 'var(--green-accent)',
    },
  ];

  return (
    <section id="consulting" style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'end', marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>04 · Consulting</div>
            <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-black)', lineHeight: 1.2 }}>
              현장에서 함께하는<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--green-accent)' }}>4가지 컨설팅.</span>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-black-soft)', maxWidth: 580 }}>
            온라인 교육으로 지식을 쌓고, GLC 컨설팅으로 현장에서 바로 실행합니다.
            <strong style={{ color: 'var(--text-black)' }}> 진단 → 설계 → 실행 → 사후 관리</strong>까지
            사장님 곁에서 끝까지 함께합니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
          {programs.map((p, i) => (
            <article key={i} style={{
              background: 'var(--neutral-warm)',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid var(--hairline)',
            }}>
              {/* 상단 컬러 헤더 */}
              <div style={{
                background: p.accent,
                padding: '24px 28px 22px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div aria-hidden style={{
                  position: 'absolute', right: -8, top: -16,
                  fontSize: 80, fontWeight: 700, color: 'rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-serif)', lineHeight: 1,
                }}>{p.num}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>{p.en}</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px', lineHeight: 1.2 }}>{p.title}</div>
              </div>

              {/* 본문 */}
              <div style={{ padding: '24px 28px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '4px 12px',
                  background: 'rgba(0,0,0,0.05)',
                  borderRadius: 50,
                  fontSize: 11, letterSpacing: '0.1em', fontWeight: 600,
                  color: p.accent,
                  marginBottom: 14,
                }}>
                  {p.tag}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--text-black)', marginBottom: 16 }}>{p.desc}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.points.map((pt, j) => (
                    <li key={j} style={{
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                      fontSize: 13, lineHeight: 1.6, color: 'var(--text-black-soft)',
                    }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: p.accent, color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1,
                      }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* 프로세스 */}
        <div style={{
          marginTop: 40, background: 'var(--house-green)',
          borderRadius: 16, padding: '40px 48px',
        }}>
          <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Consulting Process</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {[
              { n: '01', t: '사전 진단', d: '현황 분석 및 핵심 과제 도출' },
              { n: '02', t: '맞춤 설계', d: '목표·일정·예산 기반 프로그램 설계' },
              { n: '03', t: '현장 실행', d: '전문 컨설턴트 현장 방문 실행' },
              { n: '04', t: '사후 관리', d: '3개월 후속 점검 및 성과 측정' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'relative', paddingRight: 24 }}>
                {i < 3 && (
                  <div style={{
                    position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%) translateY(-8px)',
                    color: 'rgba(203,162,88,0.5)', fontSize: 20,
                  }}>→</div>
                )}
                <div className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{s.t}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.SmallBizConsulting = SmallBizConsulting;
