import { heroPromotions } from '../data/heroPromotions.js';

const partnerArchives = [
  {
    name: 'KORAIL',
    title: '고객경험관리',
    src: '/partner-logos/korail.svg',
  },
  {
    name: 'POSCO',
    title: '조직 커뮤니케이션',
    src: '/partner-logos/posco.svg',
  },
  {
    name: '충남경찰청',
    title: '강의의 기술과 교수전략',
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Chungnam_Provincial_Police_Agency_Emblem.svg',
    variant: 'emblem',
  },
  {
    name: '고용노동부',
    title: '공공기관 교육 컨설팅',
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Ministry_of_Employment_and_Labor_of_the_Republic_of_Korea_Logo_%28horizontal%29.svg',
  },
  {
    name: '한국산업인력공단',
    title: 'HRD 역량강화',
    src: '/partner-logos/hrdkorea.svg',
  },
  {
    name: '한국에너지기술연구원',
    title: '조직 소통 교육',
    src: '/partner-logos/kier.png',
  },
];

const metrics = [
  ['3,000+', '3,000회 이상', '교육〮컨설팅'],
  ['100+', '100개 이상', '정부〮공공기관 프로젝트'],
  ['200+', '200개 이상', '협력 기관'],
  ['20+', '출판 도서:', '20+'],
];

const programs = [
  ['강의·프레젠테이션', '강사의 전달력, 발표 구조, 교수 전략을 현장 언어로 정리합니다.'],
  ['리더십·조직 역량', '팀장과 중간관리자의 역할, 갈등 관리, 조직 소통을 실습 중심으로 설계합니다.'],
  ['마케팅·홍보', '기관 홍보, 지역 브랜드, 고객 접점 메시지를 실행 가능한 콘텐츠로 바꿉니다.'],
  ['AI·콘텐츠 제작', 'AI, 보고서, PPT, 영상 콘텐츠를 업무 생산성 향상 도구로 연결합니다.'],
  ['소상공인·SNS 수익화', '매장 운영, SNS 수익화, 고객 관리, 정책자금을 실행 중심 과정으로 구성합니다.'],
];

const books = [
  ['강의의 기술', '청중을 끌어들이는 논리적 강의 설계와 전달 전략을 체계화한 대표 저서입니다.'],
  ['교육 컨설팅 기록', '공공기관과 기업 현장 프로젝트를 축적한 기관형 아카이브입니다.'],
  ['콘텐츠 제작 노트', '강의, 보고서, 홍보 콘텐츠로 이어지는 실무 지식의 자료실입니다.'],
  ['현장 변화 보고서', '교육 이후 행동과 조직 변화를 추적하는 컨설팅 기반 기록입니다.'],
];

const benefits = [
  ['현장 검증', '공공기관과 기업 교육에서 축적한 실제 운영 경험을 바탕으로 설계합니다.'],
  ['기관 맞춤 설계', '대상자, 직무, 조직 과제에 맞춰 교육 언어와 실습 흐름을 재구성합니다.'],
  ['성과 기록화', '교육 이후에도 활용할 수 있도록 커리큘럼과 콘텐츠를 지식 자산으로 남깁니다.'],
];

const processSteps = [
  ['01', '요구 진단', '기관의 과제와 교육 대상, 운영 조건을 빠르게 정리합니다.'],
  ['02', '과정 설계', '강의, 워크숍, 컨설팅을 목적에 맞게 조합합니다.'],
  ['03', '현장 운영', '참여형 활동과 사례 기반 실습으로 몰입도를 높입니다.'],
  ['04', '결과 정리', '교육 기록과 후속 제안을 정리해 다음 실행으로 연결합니다.'],
];

const partnerLoop = [...partnerArchives, ...partnerArchives];

export default function Home() {
  return (
    <>
      <section className="hrd-landing-hero" aria-labelledby="home-title">
        <div className="hrd-hero-inner">
          <div className="hrd-hero-copy">
            <p className="premium-kicker">SINCE 2008</p>
            <h1 id="home-title" aria-label="교육과 컨설팅으로 사람과 기업의 성장을 만듭니다.">
              교육과 컨설팅으로
              <br />
              사람과 기업의
              <br />
              성장을 만듭니다.
            </h1>
            <div className="hrd-hero-actions" aria-label="홈페이지 주요 행동">
              <a className="hrd-primary-cta" href="/curriculum">교육 아카이브 상담</a>
              <a className="hrd-secondary-cta" href="#programs">과정 분야 보기</a>
            </div>
          </div>

          <div className="hrd-hero-panel hrd-hero-promo-panel" aria-label="추천 교육 프로그램">
            <div className="hrd-hero-promo-head">
              <span>Open Registration</span>
              <strong>지금 신청 가능한 AI 교육</strong>
            </div>
            <div className="hrd-hero-promo-list">
              {heroPromotions.map((promotion) => (
                <a className="hrd-hero-promo-card" href={promotion.link} target="_blank" rel="noreferrer" key={promotion.title}>
                  <span className="hrd-hero-promo-image">
                    <img src={promotion.image} alt={`${promotion.title} 포스터`} loading="eager" />
                  </span>
                  <em>{promotion.cta}</em>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hrd-hero-metrics" aria-label="기관 신뢰 지표">
          {metrics.map(([number, lineOne, lineTwo]) => (
            <article key={number}>
              <strong>{number}</strong>
              <span>{lineOne}</span>
              <em>{lineTwo}</em>
            </article>
          ))}
        </div>
      </section>

      <nav className="hrd-section-nav" aria-label="홈페이지 주요 섹션">
        <a href="#proof">검증 지표</a>
        <a href="#benefits">특장점</a>
        <a href="#programs">교육 분야</a>
        <a href="#process">진행 흐름</a>
        <a href="#books">출판 아카이브</a>
      </nav>

      <section className="archive-wall partner-wall" aria-label="기관 실적 아카이브">
        <div className="archive-wall-head">
          <p className="premium-kicker">Institutional Archive</p>
          <h2>공공기관과 기업 현장에서 축적된 교육 기록</h2>
        </div>
        <div className="archive-flow">
          <div className="archive-track">
            {partnerLoop.map(({ name, title, src, variant }, index) => (
              <article className="archive-item partner-logo" key={`${name}-${index}`}>
                <div className={`partner-logo-frame${variant ? ` is-${variant}` : ''}`}>
                  <img src={src} alt={`${name} 로고`} loading="lazy" />
                </div>
                <span>{title}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hrd-band hrd-proof-band" id="proof">
        <div className="premium-section-inner">
          <p className="premium-kicker">Trust Metrics</p>
          <h2>검증된 숫자로 말하는 교육〮컨설팅 기관</h2>
          <div className="hrd-proof-grid">
            {metrics.map(([number, lineOne, lineTwo]) => (
              <article key={number}>
                <strong>{number}</strong>
                <span>{lineOne}</span>
                <em>{lineTwo}</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hrd-band hrd-benefit-band" id="benefits">
        <div className="premium-section-inner">
          <div className="hrd-section-heading">
            <p className="premium-kicker">Why GLC</p>
            <h2>이미 검증된 교육을 기관 상황에 맞게 다시 설계합니다</h2>
          </div>
          <div className="hrd-benefit-grid">
            {benefits.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hrd-band hrd-program-band" id="programs">
        <div className="premium-section-inner">
          <div className="hrd-section-heading hrd-section-heading-split">
            <div>
              <p className="premium-kicker">Educational Programs</p>
              <h2>기관 교육과 현장 컨설팅을 함께 설계합니다</h2>
            </div>
            <p>교육 분야를 단순 과정 목록이 아니라 기관의 문제, 대상자의 역할, 현장 적용 결과를 기준으로 구조화합니다.</p>
          </div>
          <div className="hrd-program-grid">
            {programs.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hrd-band hrd-process-band" id="process">
        <div className="premium-section-inner">
          <div className="hrd-section-heading">
            <p className="premium-kicker">Process</p>
            <h2>한 번에 보는 교육 진행 흐름</h2>
          </div>
          <div className="hrd-process-grid">
            {processSteps.map(([step, title, description]) => (
              <article key={step}>
                <strong>{step}</strong>
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
