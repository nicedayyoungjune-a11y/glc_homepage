import { Card, Section } from '../components/Section.jsx';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">About GLC</p>
          <h1>현장 중심 교육으로 오래 기억되는 변화를 만듭니다.</h1>
          <p>
            글로벌리더십센터는 교육 기획, 강의 운영, 사후 피드백까지 연결해
            기관과 기업이 실제 행동 변화를 만들도록 돕습니다.
          </p>
        </div>
      </section>
      <Section title="GLC의 일하는 방식">
        <div className="card-grid">
          <Card title="진단">
            <p>조직의 현안, 대상자, 교육 목적을 먼저 확인합니다.</p>
          </Card>
          <Card title="설계">
            <p>표준 과정과 맞춤 모듈을 조합해 일정과 목표에 맞는 흐름을 만듭니다.</p>
          </Card>
          <Card title="운영">
            <p>전문 강사진과 운영진이 현장과 온라인 학습을 안정적으로 진행합니다.</p>
          </Card>
          <Card title="개선">
            <p>만족도와 현장 피드백을 다음 과정 설계에 반영합니다.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
