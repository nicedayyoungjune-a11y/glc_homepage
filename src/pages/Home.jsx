import { Card, Section } from '../components/Section.jsx';
import { programs } from '../data/curriculum.js';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-inner">
          <p className="hero-kicker">Since 2008 · Education Partner</p>
          <h1>
            글로벌리더십센터는
            <span> 사람과 조직의 변화를 설계합니다.</span>
          </h1>
          <p>
            공공기관, 기업, 소상공인을 위한 교육과 컨설팅을 한 흐름으로 설계해
            현장에서 바로 쓰이는 학습 경험을 만듭니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-on-dark-fill" href="/curriculum">2026 교육과정 보기</a>
            <a className="btn btn-on-dark-outline" href="/about">회사 소개</a>
          </div>
        </div>
      </section>

      <Section eyebrow="What we offer" title="필요한 교육을 빠르게 찾을 수 있습니다.">
        <div className="card-grid">
          <Card title="공공기관 교육" meta="Leadership · AI · Communication">
            <p>리더십, 적극행정, 홍보, AI 활용까지 기관별 과제에 맞춰 구성합니다.</p>
          </Card>
          <Card title="소상공인 지원" meta="Training · Consulting">
            <p>창업, 운영, 마케팅, 고객관리까지 현장형 교육과 상담을 제공합니다.</p>
          </Card>
          <Card title="맞춤형 컨설팅" meta="Diagnosis · Design">
            <p>조직의 요구를 진단하고 목표, 일정, 성과 측정까지 함께 설계합니다.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Featured curriculum" title="대표 교육과정" tone="muted">
        <div className="program-list">
          {programs.slice(0, 3).map((program) => (
            <Card key={program.title} title={program.title} meta={`${program.category} · ${program.duration}`}>
              <p>{program.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
