import { useMemo, useState } from 'react';
import { curriculumCategories, publicCurriculum } from '../data/publicCurriculum.js';

export default function Curriculum() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredCurriculum = useMemo(() => {
    if (activeCategory === 'all') return publicCurriculum;
    return publicCurriculum.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="page-hero curriculum-hero">
        <div className="section-inner">
          <p className="eyebrow">Public Institution Curriculum</p>
          <h1>공공기관교육 커리큘럼</h1>
          <p>
            리더십, AI 활용, 직무역량, 인문학까지 공공기관 현장에서 바로 활용할 수 있는
            교육과정을 한눈에 확인하세요.
          </p>
          <div className="curriculum-hero-stats" aria-label="공공기관교육 커리큘럼 요약">
            <span>4개 분야</span>
            <span>28개 과정</span>
            <span>최종 이미지 탑재</span>
          </div>
        </div>
      </section>

      <section className="section curriculum-section">
        <div className="section-inner">
          <div className="curriculum-toolbar">
            <div>
              <p className="eyebrow">Course Gallery</p>
              <h2>공공기관 맞춤 교육 자료</h2>
            </div>
            <p>
              각 과정 카드를 선택하면 상세 커리큘럼 이미지를 바로 확인할 수 있습니다.
              기관 제안서와 상담 자료로 활용하기 좋은 최종 이미지입니다.
            </p>
          </div>

          <div className="curriculum-filter" aria-label="커리큘럼 분야 필터">
            {curriculumCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={activeCategory === category.id ? 'is-active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="curriculum-gallery">
            {filteredCurriculum.map((course) => (
              <article className="curriculum-card" key={course.id}>
                <a href={course.image} target="_blank" rel="noreferrer" aria-label={`${course.title} 상세 이미지 열기`}>
                  <div className="curriculum-image-frame">
                    <img src={course.image} alt={`${course.title} 커리큘럼 상세 이미지`} loading="lazy" />
                  </div>
                  <div className="curriculum-card-body">
                    <span>{course.categoryLabel}</span>
                    <h3>{course.title}</h3>
                    <p>{course.summary}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted curriculum-note">
        <div className="section-inner">
          <h2>기관별 상황에 맞춰 과정 구성을 조정할 수 있습니다.</h2>
          <p>
            2시간 특강, 4시간 핵심 과정, 6~8시간 심화 과정 등 교육 대상자의 직급,
            부서, 현장 이슈에 맞춰 사례와 실습 비중을 조정합니다.
          </p>
        </div>
      </section>
    </>
  );
}
