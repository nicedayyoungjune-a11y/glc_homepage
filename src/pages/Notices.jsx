import { Section } from '../components/Section.jsx';
import { notices } from '../data/curriculum.js';

export default function Notices() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Notice</p>
          <h1>공지사항</h1>
          <p>교육 일정, 자료, 공개 과정 안내를 이곳에서 확인할 수 있습니다.</p>
        </div>
      </section>
      <Section title="최근 안내">
        <ul className="notice-list">
          {notices.map((notice) => (
            <li key={notice}>{notice}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
