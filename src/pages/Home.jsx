const partnerArchives = [
  ['SAMSUNG', '리더십 커뮤니케이션'],
  ['KAIST', '프레젠테이션 리더십'],
  ['KORAIL', '고객경험관리'],
  ['POSCO', '조직 커뮤니케이션'],
  ['충남지방경찰청', '강의의 기술과 교수전략'],
  ['고용노동부', '공공기관 교육 컨설팅'],
  ['한국산업인력공단', 'HRD 역량강화'],
  ['한국에너지연구원', '조직 소통 교육'],
  ['동군산병원', '서비스 커뮤니케이션'],
  ['국군간호사관학교', '교수역량 강화'],
  ['관광공사', '고객 접점 전략'],
  ['삼성전자', '프레젠테이션과 보고'],
];

const metrics = [
  ['3,000+', '3,000회 이상', '교육〮컨설팅'],
  ['100+', '100개 이상', '정부〮공공기관 프로젝트'],
  ['200+', '200개 이상', '협력 기관'],
  ['20+', '출판 도서:', '20+'],
];

const programs = [
  ['강의〮프레젠테이션', '강사의 전달력, 발표 구조, 교수전략을 현장 언어로 정리합니다.'],
  ['리더십〮조직역량', '팀장과 중간관리자의 역할, 갈등관리, 조직 소통을 실습 중심으로 설계합니다.'],
  ['마케팅〮홍보', '기관 홍보, 지역 브랜드, 고객 접점 메시지를 실행 가능한 콘텐츠로 바꿉니다.'],
  ['AI〮콘텐츠제작', 'AI, 보고서, PPT, 영상 콘텐츠를 업무 생산성 향상 도구로 연결합니다.'],
  ['소상공인〮SNS수익화', '매장 운영, SNS 수익화, 고객관리, 정책자금을 실행 중심 과정으로 구성합니다.'],
];

const books = [
  ['강의의 기술', '청중을 끌어들이는 논리적 강의 설계와 전달 전략을 체계화한 대표 저서입니다.'],
  ['교육 컨설팅 기록', '공공기관과 기업 현장 프로젝트를 축적한 기관형 아카이브입니다.'],
  ['콘텐츠 제작 노트', '강의, 보고서, 홍보 콘텐츠로 이어지는 실무 지식의 자료실입니다.'],
  ['현장 변화 보고서', '교육 이후 행동과 조직 변화를 추적하는 컨설팅 기반 기록입니다.'],
];

const partnerLoop = [...partnerArchives, ...partnerArchives];

export default function Home() {
  return (
    <>
      <section className="premium-hero documentary-hero" aria-labelledby="home-title">
        <div className="premium-hero-inner documentary-hero-inner">
          <div className="premium-hero-copy documentary-copy">
            <p className="premium-kicker">SINCE 2008</p>
            <h1 id="home-title" aria-label="교육과 컨설팅으로 사람과 기업의 성장을 만듭니다.">
              교육과 컨설팅으로
              <br />
              사람과 기업의
              <br />
              성장을 만듭니다.
            </h1>

            <div className="premium-trust-list documentary-trust-list" aria-label="기관 신뢰 지표">
              {metrics.map(([number, lineOne, lineTwo]) => (
                <span key={number}>
                  <strong>{lineOne}</strong>
                  <em>{lineTwo}</em>
                </span>
              ))}
            </div>
          </div>

          <div className="editorial-visual documentary-visual" aria-label="책과 실제 교육 현장을 결합한 메인 비주얼">
            <figure className="field-photo field-photo-main">
              <img src="/home-assets/workshop-wall.jpg" alt="워크숍 현장 기록" />
              <figcaption>WORKSHOP DOCUMENTARY</figcaption>
            </figure>
            <figure className="field-photo field-photo-secondary">
              <img src="/home-assets/lecture-room.jpg" alt="공공 교육 강의 현장" />
              <figcaption>FIELD EDUCATION</figcaption>
            </figure>
            <figure className="field-photo field-photo-tertiary" aria-hidden="true">
              <img src="/home-assets/team-activity.jpg" alt="" />
            </figure>
            <img className="hero-book-cover" src="/home-assets/lecture-book.png" alt="저서 강의의 기술 표지" />
            <div className="archive-plaque documentary-plaque">
              <span>PUBLIC EDUCATION ARCHIVE</span>
              <strong>SINCE 2008</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="archive-wall partner-wall" aria-label="기관 실적 아카이브">
        <div className="archive-wall-head">
          <p className="premium-kicker">Institutional Archive</p>
          <h2>공공기관과 기업 현장에서 축적된 교육 기록</h2>
        </div>
        <div className="archive-flow">
          <div className="archive-track">
            {partnerLoop.map(([name, title], index) => (
              <article className="archive-item partner-logo" key={`${name}-${index}`}>
                <strong>{name}</strong>
                <span>{title}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section metrics-section">
        <div className="premium-section-inner">
          <p className="premium-kicker">Trust Metrics</p>
          <h2>검증된 숫자로 말하는 교육〮컨설팅 기관</h2>
          <div className="metric-grid documentary-metric-grid">
            {metrics.map(([number, lineOne, lineTwo]) => (
              <article className="metric-card documentary-metric-card" key={number}>
                <strong>{number}</strong>
                <span>{lineOne}</span>
                <em>{lineTwo}</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section program-section documentary-program-section">
        <div className="premium-section-inner">
          <div className="premium-section-heading">
            <div>
              <p className="premium-kicker">Educational Programs</p>
              <h2>기관 교육과 현장 컨설팅을 함께 설계합니다</h2>
            </div>
            <p>
              교육 분야를 단순 과정 목록이 아니라 기관의 문제, 대상자의 역할, 현장 적용 결과를 기준으로 구조화합니다.
            </p>
          </div>
          <div className="institutional-program-grid documentary-program-grid">
            {programs.map(([title, description], index) => (
              <article className="institutional-program-card documentary-program-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section books-section documentary-books-section" id="books">
        <div className="premium-section-inner books-layout">
          <div>
            <p className="premium-kicker">Publishing Archive</p>
            <h2>
              콘텐츠를 자산으로
              <br />
              축적하는 지식 플랫폼
            </h2>
            <p>
              글로벌리더십센터의 교육은 강의실에서 끝나지 않습니다. 현장의 언어와 지식을 책, 커리큘럼, 컨설팅 기록으로
              정리해 오래 참고할 수 있는 지식 아카이브로 남깁니다.
            </p>
          </div>
          <div className="book-archive-grid documentary-book-grid">
            {books.map(([title, description]) => (
              <article className="book-archive-card documentary-book-card" key={title}>
                <span>{title}</span>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section documentary-philosophy-section">
        <div className="premium-section-inner philosophy-inner">
          <p className="premium-kicker">Philosophy</p>
          <blockquote>
            교육은 실제 삶과 근무 현장,
            <br />
            그리고 비즈니스의 변화를 만들어야 합니다.
          </blockquote>
          <p>
            머리로만 기억되는 교육이 아니라 몸과 행동으로 남는 교육을 지향합니다. 공공기관, 기업, 대학, 지역 현장의
            과제를 교육 가능한 언어로 번역하고 지속 가능한 변화로 연결합니다.
          </p>
        </div>
      </section>
    </>
  );
}
