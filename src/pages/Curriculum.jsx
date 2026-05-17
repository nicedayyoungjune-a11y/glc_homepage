import { Card, Section } from '../components/Section.jsx';
import { programs } from '../data/curriculum.js';

export default function Curriculum() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">2026 Curriculum</p>
          <h1>기관과 현장에 맞춘 2026 교육과정</h1>
          <p>
            리더십, 홍보, AI, 생애설계 등 주요 과정을 중심으로 맞춤형 교육을 구성합니다.
          </p>
        </div>
      </section>
      <Section title="교육과정 목록">
        <div className="program-list">
          {programs.map((program) => (
            <Card key={program.title} title={program.title} meta={`${program.category} · ${program.duration}`}>
              <p>{program.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
