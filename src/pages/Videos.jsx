import { Card, Section } from '../components/Section.jsx';

export default function Videos() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Videos</p>
          <h1>교육영상</h1>
          <p>교육 소개 영상과 온라인 학습 콘텐츠를 준비하고 있습니다.</p>
        </div>
      </section>
      <Section title="준비 중인 콘텐츠">
        <div className="card-grid">
          <Card title="과정 소개 영상">
            <p>2026 교육과정의 핵심 주제와 대상자를 짧게 소개합니다.</p>
          </Card>
          <Card title="온라인 미니 강의">
            <p>AI 활용, 홍보 실무, 리더십 주제를 짧은 학습 단위로 구성합니다.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
