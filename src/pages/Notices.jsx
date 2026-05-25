import { Section } from '../components/Section.jsx';
import { notices } from '../data/notices.js';

export default function Notices() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Notice</p>
          <h1>공지사항</h1>
          <p>교육 일정, 신청 안내, 공개 과정 소식을 한곳에서 확인할 수 있습니다.</p>
        </div>
      </section>
      <Section title="최근 안내">
        <div className="notice-grid">
          {notices.map((notice) => (
            <article className="notice-card" key={notice.id}>
              <a className="notice-image-link" href={notice.href} target="_blank" rel="noreferrer" aria-label={`${notice.title} 신청하기`}>
                <img src={notice.image} alt={`${notice.title} 공지 이미지`} />
              </a>
              <div className="notice-card-body">
                <div className="notice-card-meta">
                  <span>{notice.category}</span>
                  <time>{notice.date}</time>
                </div>
                <h2>{notice.title}</h2>
                <p>{notice.summary}</p>
                <a className="notice-cta" href={notice.href} target="_blank" rel="noreferrer">
                  {notice.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
