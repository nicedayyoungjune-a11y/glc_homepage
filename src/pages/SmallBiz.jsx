import { Card, Section } from '../components/Section.jsx';

export default function SmallBiz() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Small Business</p>
          <h1>소상공인을 위한 교육과 컨설팅</h1>
          <p>
            매장 운영, 홍보, 고객관리, 디지털 도구 활용까지 사업자의 상황에 맞춰 지원합니다.
          </p>
        </div>
      </section>
      <Section title="지원 영역">
        <div className="card-grid">
          <Card title="창업과 운영">
            <p>초기 사업 점검, 운영 프로세스, 비용 구조를 쉽게 정리합니다.</p>
          </Card>
          <Card title="마케팅과 홍보">
            <p>SNS 콘텐츠, 지역 홍보, 고객 접점을 실습 중심으로 다룹니다.</p>
          </Card>
          <Card title="1:1 컨설팅">
            <p>개별 사업장의 고민을 듣고 바로 적용 가능한 실행안을 제안합니다.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
