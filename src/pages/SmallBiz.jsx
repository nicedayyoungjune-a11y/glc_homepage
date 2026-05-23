import { useRef, useState } from 'react';
import { smallBizOverview, smallBizPrograms } from '../data/smallBizPrograms.js';

export default function SmallBiz() {
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
      <section className="page-hero smallbiz-hero">
        <div className="section-inner">
          <p className="eyebrow">Small Business Curriculum</p>
          <h1>소상공인 교육 프로그램</h1>
          <p>
            매출, 홍보, 고객관리, 운영 효율화까지 소상공인과 자영업자가 현장에서 바로
            활용할 수 있는 교육 자료를 한곳에 정리했습니다.
          </p>
          <div className="smallbiz-hero-stats" aria-label="소상공인 교육 요약">
            <span>2개 카테고리</span>
            <span>20개 세부 프로그램</span>
            <span>목차 이미지 탑재</span>
          </div>
        </div>
      </section>

      <section className="section smallbiz-section">
        <div className="section-inner">
          <div className="smallbiz-tabs" aria-label="소상공인 프로그램 카테고리">
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
            <div className="smallbiz-overview-panel">
              <div className="smallbiz-toolbar">
                <div>
                  <p className="eyebrow">Program Index</p>
                  <h2>{smallBizOverview.title}</h2>
                </div>
                <p>
                  목차 이미지를 확인한 뒤 원하는 프로그램을 선택하면 세부프로그램 영역의
                  해당 과정 이미지로 바로 이동합니다.
                </p>
              </div>

              <a className="smallbiz-overview-image" href={smallBizOverview.image} target="_blank" rel="noreferrer">
                <img src={smallBizOverview.image} alt="소상공인 전체 프로그램 목차 이미지" />
              </a>

              <div className="smallbiz-program-jump" aria-label="세부 프로그램 바로가기">
                {smallBizPrograms.map((program, index) => (
                  <button key={program.id} type="button" onClick={() => moveToProgram(program.id)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {program.title}
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
                  각 이미지는 제안서용 최종 커리큘럼입니다. 이미지를 선택하면 원본 크기로
                  확인할 수 있습니다.
                </p>
              </div>

              <div className="smallbiz-detail-grid">
                {smallBizPrograms.map((program, index) => (
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
