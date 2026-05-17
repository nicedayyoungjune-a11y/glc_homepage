export default function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <strong className="footer-brand">(주)글로벌리더십센터</strong>
          <p>
            공공기관과 기업, 소상공인의 변화를 돕는 교육 파트너입니다.
            교육과정, 워크숍, 맞춤 컨설팅을 함께 설계합니다.
          </p>
        </div>
        <div>
          <h2>교육과정</h2>
          <a href="/curriculum">2026 교육과정</a>
          <a href="/videos">교육영상</a>
          <a href="/smallbiz">소상공인 과정</a>
        </div>
        <div>
          <h2>회사소개</h2>
          <a href="/about">기관 소개</a>
          <a href="/notices">공지사항</a>
          <a href="/curriculum">상담 문의</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 글로벌리더십센터. All rights reserved.</span>
        <span>silveredu826@naver.com</span>
      </div>
    </footer>
  );
}
