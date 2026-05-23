const archiveItems = [
  ['SAMSUNG', '리더십 커뮤니케이션 전략'],
  ['KAIST', '프레젠테이션 리더십'],
  ['POSCO', '조직 커뮤니케이션'],
  ['KORAIL', '고객경험관리'],
  ['충남대학교', '강의의 기술과 교수전략'],
  ['고용노동부', '공공기관 교육 컨설팅'],
  ['한국산업인력공단', 'HRD 역량강화'],
  ['한국에너지연구원', '조직 소통 교육'],
  ['분당서울대병원', '서비스 커뮤니케이션'],
  ['대전교육연수원', '교수역량 강화'],
  ['관광공사', '고객 접점 전략'],
  ['삼성전자', '프레젠테이션과 보고력'],
];

const metrics = [
  ['3,000+', '교육·컨설팅 진행'],
  ['100+', '정부·공공기관 프로젝트'],
  ['200+', '협력 기관'],
  ['10+', '출판 도서'],
  ['12+', '수상 및 인증'],
];

const programs = [
  ['강의·프레젠테이션', '강사의 전달력, 발표 구조, 교수전략을 공공기관 수준의 교육 품질로 정리합니다.'],
  ['리더십·조직역량', '팀장 리더십, 중간관리자 역할, 갈등관리와 협업 체계를 현장 언어로 설계합니다.'],
  ['마케팅·브랜딩', '기관 홍보, 지역 브랜드, 소상공인 마케팅을 실무 결과물 중심으로 훈련합니다.'],
  ['디지털·미디어', 'AI, 보고서, PPT, 콘텐츠 제작을 업무 생산성 향상 도구로 연결합니다.'],
  ['소상공인·창업', '매장 운영, 상권분석, 고객관리, 정책자금 활용을 실행 가능한 과정으로 구성합니다.'],
];

const books = [
  ['노아의 서점', '지식과 경험을 콘텐츠 자산으로 바꾸는 출판형 교육 아카이브'],
  ['강의의 기술', '강의 설계와 전달력을 체계화한 교육자 플랫폼'],
  ['백배미디어', '콘텐츠, 마케팅, 미디어 운영을 연결하는 실무 지식 자산'],
  ['교육 컨설팅 기록', '기관 교육과 현장 프로젝트를 축적한 전략 보고서형 컬렉션'],
];

const archiveLoop = [...archiveItems, ...archiveItems];

export default function Home() {
  return (
    <>
      <section className="premium-hero" aria-labelledby="home-title">
        <div className="premium-hero-inner">
          <div className="premium-hero-copy">
            <p className="premium-kicker">SINCE 2012</p>
            <h1 id="home-title">교육과 컨설팅으로 사람과 기업의 성장을 만듭니다</h1>
            <p>
              실무 중심의 교육과 컨설팅, 그리고 콘텐츠를 통해 지속 가능한 성장과 변화를 지원합니다.
            </p>
            <div className="premium-trust-list" aria-label="기관 신뢰 지표">
              <span>3,000회 이상 교육·컨설팅</span>
              <span>100개 이상 정부·공공기관 프로젝트</span>
              <span>200개 이상 협력 기관</span>
            </div>
            <div className="premium-hero-actions">
              <a className="premium-btn premium-btn-primary" href="/curriculum">
                교육·컨설팅 프로그램 보기
              </a>
              <a className="premium-btn premium-btn-secondary" href="#books">
                출판 도서 보기
              </a>
            </div>
          </div>

          <div className="editorial-visual" aria-label="프리미엄 출판 아카이브 이미지">
            <div className="report-sheet">
              <span>Institutional Report</span>
              <strong>Education & Consulting Archive</strong>
              <em>Verified Authority</em>
            </div>
            <div className="book-stack">
              <div className="book book-navy">
                <span>강의의 기술</span>
              </div>
              <div className="book book-blue">
                <span>노아의 서점</span>
              </div>
              <div className="book book-cream">
                <span>백배미디어</span>
              </div>
            </div>
            <div className="archive-plaque">
              <span>PUBLIC EDUCATION</span>
              <strong>2012-2026</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="archive-wall" aria-label="기관 실적 아카이브">
        <div className="archive-wall-head">
          <p className="premium-kicker">Institutional Archive</p>
          <h2>공공기관과 기업 현장에서 축적된 교육 기록</h2>
        </div>
        <div className="archive-flow" aria-hidden="true">
          <div className="archive-track">
            {archiveLoop.map(([name, title], index) => (
              <article className="archive-item" key={`${name}-${index}`}>
                <span>{name}</span>
                <strong>{title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section metrics-section">
        <div className="premium-section-inner">
          <p className="premium-kicker">Trust Metrics</p>
          <h2>검증된 숫자로 말하는 교육·컨설팅 기관</h2>
          <div className="metric-grid">
            {metrics.map(([number, label]) => (
              <article className="metric-card" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section program-section">
        <div className="premium-section-inner">
          <div className="premium-section-heading">
            <div>
              <p className="premium-kicker">Educational Programs</p>
              <h2>기관 교육과 현장 컨설팅을 함께 설계합니다</h2>
            </div>
            <p>
              교육 분야는 단순 과정 나열이 아니라 기관의 문제, 대상자의 역할, 현장 적용 결과를 기준으로
              구조화됩니다.
            </p>
          </div>
          <div className="institutional-program-grid">
            {programs.map(([title, description], index) => (
              <article className="institutional-program-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section books-section" id="books">
        <div className="premium-section-inner books-layout">
          <div>
            <p className="premium-kicker">Publishing Archive</p>
            <h2>교육 콘텐츠를 출판 자산으로 축적하는 지식 플랫폼</h2>
            <p>
              글로벌리더십센터의 교육은 강의장에서 끝나지 않습니다. 현장의 언어와 지식을 책, 커리큘럼,
              컨설팅 기록으로 정리해 오래 참고할 수 있는 지식 아카이브로 남깁니다.
            </p>
          </div>
          <div className="book-archive-grid">
            {books.map(([title, description]) => (
              <article className="book-archive-card" key={title}>
                <span>{title}</span>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="premium-section-inner philosophy-inner">
          <p className="premium-kicker">Philosophy</p>
          <blockquote>교육은 실제 삶과 비즈니스의 변화를 만들어야 합니다.</blockquote>
          <p>
            머리로만 기억되는 교육이 아니라 몸과 행동으로 남는 교육을 지향합니다. 공공기관, 기업, 대학,
            지역 현장의 과제를 교육 가능한 언어로 번역하고 지속 가능한 변화로 연결합니다.
          </p>
        </div>
      </section>
    </>
  );
}
