import { useRef, useState } from 'react';
import { generalOverview, generalPrograms } from '../data/generalPrograms.js';

export default function Videos() {
  const [activeTab, setActiveTab] = useState('overview');
  const programRefs = useRef({});

  const moveToProgram = (programId) => {
    setActiveTab('detail');
    window.setTimeout(() => {
      programRefs.current[programId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <>
      <section className="page-hero general-hero">
        <div className="section-inner">
          <p className="eyebrow">Open Course Curriculum</p>
          <h1>일반공개과정</h1>
          <p>
            시민 누구나 참여할 수 있는 돈 버는 배움, 나를 키우는 배움, 전문 역량 과정을
            전체 목차와 상세 이미지로 확인하세요.
          </p>
          <div className="smallbiz-hero-stats" aria-label="일반공개과정 요약">
            <span>2개 카테고리</span>
            <span>13개 세부 프로그램</span>
            <span>상세 이미지 탑재</span>
          </div>
        </div>
      </section>

      <section className="section smallbiz-section general-section">
        <div className="section-inner">
          <div className="smallbiz-tabs" aria-label="일반공개과정 카테고리">
            <button
              type="button"
              className={activeTab === 'overview' ? 'is-active' : ''}
              onClick={() => setActiveTab('overview')}
            >
              전체프로그램
            </button>
            <button
              type="button"
              className={activeTab === 'detail' ? 'is-active' : ''}
              onClick={() => setActiveTab('detail')}
            >
              세부프로그램
            </button>
          </div>

          {activeTab === 'overview' ? (
            <div className="general-overview-panel">
              <div className="smallbiz-toolbar">
                <div>
                  <p className="eyebrow">Program Index</p>
                  <h2>{generalOverview.title}</h2>
                </div>
                <p>{generalOverview.description}</p>
              </div>

              <div className="general-index-card">
                <div className="general-index-head">
                  <span>No.</span>
                  <span>과정명</span>
                  <span>카테고리</span>
                  <span>교육 내용</span>
                </div>
                {generalPrograms.map((program, index) => (
                  <button key={program.id} type="button" onClick={() => moveToProgram(program.id)}>
                    <span>{index + 1}</span>
                    <strong>{program.title}</strong>
                    <em>{program.category}</em>
                    <span>{program.summary}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="smallbiz-detail-panel">
              <div className="smallbiz-toolbar">
                <div>
                  <p className="eyebrow">Detail Programs</p>
                  <h2>세부프로그램</h2>
                </div>
                <p>
                  각 이미지는 일반공개과정 제안서용 최종 커리큘럼입니다. 이미지를 선택하면
                  원본 크기로 확인할 수 있습니다.
                </p>
              </div>

              <div className="smallbiz-detail-grid">
                {generalPrograms.map((program, index) => (
                  <article
                    className="smallbiz-program-card"
                    id={program.id}
                    key={program.id}
                    ref={(node) => {
                      programRefs.current[program.id] = node;
                    }}
                  >
                    <a href={program.image} target="_blank" rel="noreferrer" aria-label={`${program.title} 이미지 열기`}>
                      <div className="smallbiz-program-image">
                        <img src={program.image} alt={`${program.title} 커리큘럼 이미지`} loading="lazy" />
                      </div>
                      <div className="smallbiz-program-body">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <h3>{program.title}</h3>
                        <p>{program.summary}</p>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
