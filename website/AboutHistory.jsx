function AboutHistory() {
  const eras = [
    {
      year: '2008',
      label: '정식 설립',
      title: '대전 유성에서 시작.',
      body: '(주)글로벌리더십센터 정식 설립. 같은 해 고용노동부 직업능력개발 훈련기관으로 지정되며, 공공교육의 첫걸음을 내디뎠습니다.',
      tag: 'Founded',
    },
    {
      year: '2012',
      label: '사회적기업 인증',
      title: '교육의 공공성을 약속하다.',
      body: '고용노동부 사회적기업 인증을 취득. 콘텐츠와 자격증 과정을 본격 개설하고, 정부·기업 전문 강사 양성기관으로 자리매김했습니다.',
      tag: 'Social Enterprise',
    },
    {
      year: '2015',
      label: '공공교육의 표준',
      title: '300여 기관과의 동행.',
      body: '고용노동부·공공기관·지방정부의 위탁교육 표준기관으로 성장. 여성기업·고용우수기업·일하기 좋은 기업 인증을 잇달아 획득했습니다.',
      tag: 'Public Standard',
    },
    {
      year: '2021',
      label: '성장 동력 구축',
      title: '기업·공공기관 MOU 확장.',
      body: '대기업·공공기관과의 MOU를 확대하고, 일학습병행기업으로서 e-HRD 시스템 기반의 맞춤형 컨설팅 체계를 구축했습니다.',
      tag: 'MOU & Growth',
    },
    {
      year: '2026',
      label: '다음 17년',
      title: 'AI · 소상공인 · 글로벌.',
      body: '생성형 AI 행정업무 활용, 소상공인 무상교육, 그리고 해외 BP 사례를 결합한 글로벌 역량 강화 프로그램으로 확장합니다.',
      tag: 'Now',
      now: true,
    },
  ];

  return (
    <section style={{ background: 'var(--house-green)', padding: '96px 40px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>05 · History</div>
          <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: '#fff', lineHeight: 1.2, maxWidth: 720 }}>
            끊임없는 도전과 교육에 대한<br/><span className="serif" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>17년의 열정.</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* timeline rail */}
          <div style={{
            position: 'absolute', left: 0, right: 0, top: 28, height: 1,
            background: 'rgba(203,162,88,0.25)',
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24, position: 'relative' }}>
            {eras.map((e, i) => (
              <div key={i} style={{ position: 'relative', paddingTop: 60 }}>
                {/* dot */}
                <div style={{
                  position: 'absolute', top: 22, left: 0,
                  width: 14, height: 14, borderRadius: '50%',
                  background: e.now ? 'var(--gold)' : '#fff',
                  border: e.now ? '3px solid var(--gold)' : '3px solid var(--house-green)',
                  boxShadow: e.now ? '0 0 0 4px rgba(203,162,88,0.25)' : 'none',
                }} />

                <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: e.now ? 'var(--gold)' : 'rgba(255,255,255,0.55)', marginBottom: 8, fontWeight: 600 }}>
                  {e.tag}
                </div>
                <div className="serif" style={{
                  fontSize: 44, fontWeight: 600, letterSpacing: '-0.4px',
                  color: e.now ? 'var(--gold)' : '#fff', lineHeight: 1, marginBottom: 8,
                }}>{e.year}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>{e.label}</div>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.16px', color: '#fff', marginBottom: 10, lineHeight: 1.35 }}>{e.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}>{e.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.AboutHistory = AboutHistory;
