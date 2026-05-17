function AboutClients() {
  const sectors = [
    {
      en: 'Public', ko: '공공기관',
      logos: ['고용노동부', '중소기업청', '서울시청', '대전시청', '충남지방경찰청', '충북자치연수원', '한국관광공사', '한국산업인력공단', '한국에너지연구원', '한국수력원자력', '한국전자통신연구원', '중소기업진흥공단', '건강보험심사평가원', '소상공인진흥원'],
      featured: ['고용노동부', '한국수력원자력', '한국산업인력공단', '서울시청'],
    },
    {
      en: 'Manufacturing · ICT', ko: '정보통신·제조',
      logos: ['POSCO', '삼성SDI', '삼성전자', '삼성전기', 'KT&G', '웅진코웨이', '한국타이어', '한국야금', 'MIT', '대성철강', '대화산기', '금강엔지니어링', 'HP'],
      featured: ['POSCO', '삼성전자', 'KT&G', '한국타이어'],
    },
    {
      en: 'Healthcare', ko: '의료·요양',
      logos: ['분당서울대병원', '백제병원', '동군산병원', '공주의료원', '카톨릭병원', '성모병원', '새서울병원', '건양대병원', '구례군립노인전문요양원', '당진시립노인전문요양원', '꽃동네'],
      featured: ['분당서울대병원', '건양대병원', '성모병원', '꽃동네'],
    },
    {
      en: 'Service', ko: '서비스',
      logos: ['KORAIL', '그랜드 호텔', '박준뷰티랩', '조선호텔', '오라컨트리클럽', '엘리시안', 'COEX', '조선베이커리', 'C&M', '교보생명', '메리츠', '미래에셋', 'KAL호텔', '라마다호텔'],
      featured: ['KORAIL', '조선호텔', '교보생명', 'COEX'],
    },
    {
      en: 'Retail · Distribution', ko: '유통·판매',
      logos: ['대교', '웅진닷컴', '삼성화재', '롯데백화점', '한국화장품', '코리아나 화장품', '바이엘', '나드리화장품'],
      featured: ['롯데백화점', '삼성화재', '대교', '한국화장품'],
    },
    {
      en: 'Education', ko: '교육·연구',
      logos: ['서울대', '충남대', '포항공대', '카이스트', '고려대', '숙명여대', '성신여대', '세종대', '중앙대', '경희대', '아주대', '이화여대', '성균관대', '건양대', '한밭대', '한남대', '국군간호사관학교', '데일카네기'],
      featured: ['서울대', '카이스트', '포항공대', '고려대'],
    },
    {
      en: 'Venture', ko: '벤처·스타트업',
      logos: ['유니슨이테크', '케이맥', '골프존', 'MA정보기술', '지구코퍼레이션', '인텍플러스', '위월드', '트루윈'],
      featured: ['골프존', '인텍플러스', '유니슨이테크', '위월드'],
    },
    {
      en: 'Social Service', ko: '사회 서비스',
      logos: ['천양원', '한국효도회수상자협회', '효행청소년단', '유성장애인종합복지관', '유성시니어클럽', '대전교원시니어직능클럽', '새중앙아동복지센터', '엘림실버빌', '자혜은빛마을', '만수노인복지원', '성애원'],
      featured: ['유성종합복지관', '효행청소년단', '엘림실버빌', '천양원'],
    },
  ];

  const [active, setActive] = React.useState(0);
  const cur = sectors[active];

  return (
    <section style={{ background: '#fff', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>07 · Trusted by</div>
            <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-black)', lineHeight: 1.2 }}>
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--green-accent)' }}>300여</span> 기업·기관과 <br/>함께 만들어 온 17년.
            </h2>
          </div>
          <div style={{ paddingBottom: 8 }}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-black-soft)', maxWidth: 460 }}>
              GLC는 8개 산업, 300여 곳의 기업·공공·의료·교육·사회서비스 기관을 위한 교육 파트너로 활동해 왔습니다.
            </p>
          </div>
        </div>

        {/* sector tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {sectors.map((s, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '10px 18px', borderRadius: 50, cursor: 'pointer',
              border: '1px solid', fontFamily: 'var(--font-sans)',
              fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
              background: active === i ? 'var(--green-accent)' : '#fff',
              color: active === i ? '#fff' : 'var(--text-black)',
              borderColor: active === i ? 'var(--green-accent)' : 'var(--input-border)',
              transition: 'all .2s ease',
            }}>
              <span style={{ fontWeight: 600 }}>{s.ko}</span>
              <span style={{ fontSize: 11, marginLeft: 8, opacity: 0.7, letterSpacing: '0.1em' }}>{s.logos.length}</span>
            </button>
          ))}
        </div>

        {/* featured row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 14 }}>
          {cur.featured.map((f, i) => (
            <div key={i} style={{
              height: 96, background: 'var(--neutral-warm)', borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderTop: '2px solid var(--green-accent)',
            }}>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', color: 'var(--text-rewards)' }}>{f}</div>
            </div>
          ))}
        </div>

        {/* full grid */}
        <div style={{
          padding: '24px 28px', background: 'var(--neutral-warm)', borderRadius: 10,
          display: 'flex', flexWrap: 'wrap', gap: '12px 28px',
        }}>
          {cur.logos.filter(l => !cur.featured.includes(l)).map((l, i) => (
            <div key={i} style={{ fontSize: 14, color: 'var(--text-black-soft)', letterSpacing: '-0.01em' }}>{l}</div>
          ))}
          <div style={{ fontSize: 14, color: 'var(--gold)', fontWeight: 600, fontStyle: 'italic' }}>외 다수</div>
        </div>
      </div>
    </section>
  );
}
window.AboutClients = AboutClients;
