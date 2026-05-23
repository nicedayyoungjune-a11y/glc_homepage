import { useMemo, useRef, useState } from 'react';
import { curriculumCategories, publicCurriculum } from '../data/publicCurriculum.js';

export default function Curriculum() {
  const [activeCategory, setActiveCategory] = useState('all');
  const courseRefs = useRef({});

  const categoryCounts = useMemo(
    () =>
      curriculumCategories
        .filter((category) => category.id !== 'all')
        .map((category) => ({
          ...category,
          count: publicCurriculum.filter((course) => course.category === category.id).length,
        })),
    [],
  );

  const filteredCurriculum = useMemo(() => {
    if (activeCategory === 'all') return publicCurriculum;
    return publicCurriculum.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  const moveToCourse = (course) => {
    setActiveCategory(course.category);

    window.setTimeout(() => {
      courseRefs.current[course.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <>
      <section className="page-hero curriculum-hero">
        <div className="section-inner">
          <p className="eyebrow">Public Institution Curriculum</p>
          <h1>공공기관교육 커리큘럼</h1>
          <p>
            리더십, AI 활용, 직무역량, 인문학까지 공공기관 현장에서 바로 활용할 수 있는 교육과정을
            한눈에 확인하세요.
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
              전체 탭에서는 과정 목차를 먼저 확인하고, 각 과정명을 선택하면 해당 세부 커리큘럼 이미지로
              이동합니다. 기관 제안서와 상담 자료로 활용하기 좋은 최종 이미지입니다.
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

          {activeCategory === 'all' ? (
            <div className="curriculum-overview-panel">
              <div className="curriculum-overview-summary" aria-label="공공기관교육 분야별 과정 수">
                {categoryCounts.map((category) => (
                  <div className="curriculum-overview-card" key={category.id}>
                    <span>{category.label}</span>
                    <strong>{category.count}</strong>
                    <em>개 과정</em>
                  </div>
                ))}
              </div>

              <div className="curriculum-index-card">
                <div className="curriculum-index-head" aria-hidden="true">
                  <span>No.</span>
                  <span>분야</span>
                  <span>과정명</span>
                  <span>교육 내용</span>
                </div>
                {publicCurriculum.map((course, index) => (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => moveToCourse(course)}
                    aria-label={`${course.title} 세부 이미지 보기`}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <em>{course.categoryLabel}</em>
                    <strong>{course.title}</strong>
                    <span>{course.summary}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="curriculum-gallery">
              {filteredCurriculum.map((course) => (
                <article
                  className="curriculum-card"
                  id={course.id}
                  key={course.id}
                  ref={(node) => {
                    courseRefs.current[course.id] = node;
                  }}
                >
                  <a href={course.image} target="_blank" rel="noreferrer" aria-label={`${course.title} 세부 이미지 열기`}>
                    <div className="curriculum-image-frame">
                      <img src={course.image} alt={`${course.title} 커리큘럼 세부 이미지`} loading="lazy" />
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
          )}
        </div>
      </section>

      <section className="section section-muted curriculum-note">
        <div className="section-inner">
          <h2>기관별 상황에 맞춰 과정 구성을 조정할 수 있습니다.</h2>
          <p>
            2시간 특강, 4시간 핵심 과정, 6~8시간 심화 과정 등 교육 대상자의 직급, 부서, 현장 이슈에 맞춰
            사례와 실습 비중을 조정합니다.
          </p>
        </div>
      </section>
    </>
  );
}
