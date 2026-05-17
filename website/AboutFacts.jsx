function AboutFacts() {
  const Row = ({ k, v }) => (
    <div style={{
      display: 'grid', gridTemplateColumns: '160px 1fr',
      padding: '14px 0', gap: 24,
      borderBottom: '1px solid var(--hairline)',
      alignItems: 'baseline',
    }}>
      <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', fontWeight: 600 }}>{k}</div>
      <div style={{ fontSize: 15, color: 'var(--text-black)', lineHeight: 1.7 }}>{v}</div>
    </div>
  );
  const Node = ({ t, sub, head }) => (
    <div style={{
      padding: '14px 16px',
      background: head ? 'var(--green-accent)' : '#fff',
      color: head ? '#fff' : 'var(--text-black)',
      border: head ? 'none' : '1px solid var(--input-border)',
      borderRadius: 8, textAlign: 'center',
    }}>
      <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.16px' }}>{t}</div>
      {sub && <div style={{ fontSize: 11, marginTop: 3, opacity: head ? 0.85 : 0.55, letterSpacing: '0.05em' }}>{sub}</div>}
    </div>
  );

  return (
    <section style={{ background: 'var(--neutral-warm)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          {/* Company facts */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>09 · Company Facts</div>
            <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.3px', color: 'var(--text-black)', lineHeight: 1.2, marginBottom: 24 }}>
              회사 정보.
            </h2>

            <div style={{ background: '#fff', padding: '8px 28px 24px', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
              <Row k="기업명" v="사회적기업 (주)글로벌리더십센터" />
              <Row k="설립" v="2008년 7월 (17년차)" />
              <Row k="대표이사" v="유 영 준" />
              <Row k="주요사업" v="컨설팅, 고용노동부 사회공헌활동, HRD 교육, 위탁교육" />
              <Row k="사업영역" v="기업컨설팅 / 교육콘텐츠 기획·운영·배급 / 실버에듀 / 요양기관 컨설팅 / B·S 아카데미스쿨 / 데일카네기 제주연구소 / 소호진흥원 / 원격교육 시스템" />
              <Row k="본사" v="대전광역시 유성구 유성대로 736번길 62, 갤러리빌 204호" />
              <Row k="서울협력센터" v="푸름넷 콘텐츠 개발 및 오프라인 교육" />
              <Row k="대표 연락처" v="TEL 042-826-0828 · FAX 042-367-0396" />
            </div>
          </div>

          {/* Org chart */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>Organization</div>
            <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.3px', color: 'var(--text-black)', lineHeight: 1.2, marginBottom: 24 }}>
              조직도.
            </h2>

            <div style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-card)', padding: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div style={{ width: 200 }}><Node t="대표이사" sub="이사회 / 감사" head /></div>
              </div>
              <div style={{ width: 1, height: 18, background: 'var(--input-border)', margin: '0 auto' }} />
              <div style={{ height: 1, background: 'var(--input-border)', margin: '0 6%' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, marginTop: 18, marginBottom: 18 }}>
                <Node t="부설연구소" sub="Research" />
                <Node t="경영지원실" sub="Operations" />
                <Node t="기획홍보실" sub="Planning · PR" />
                <Node t="코칭센터" sub="Coaching" />
                <Node t="교육연구소" sub="HRD R&D" />
              </div>
              <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px dashed var(--hairline)' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 10 }}>관계사</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
                  <Node t="BS 아카데미" sub="Beauty Success" />
                  <Node t="소호진흥원" sub="Soho Promotion" />
                  <Node t="요양기관 컨설팅" sub="Silver Edu" />
                  <Node t="비영리 협력" sub="6개 기관" />
                </div>
              </div>
            </div>

            <div style={{
              marginTop: 18, padding: '18px 22px', background: 'var(--house-green)',
              borderRadius: 12, color: '#fff',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18,
            }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>Visit Us</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>대전 본사 · 서울 협력센터</div>
              </div>
              <button className="btn btn-on-dark-outline">오시는 길 보기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.AboutFacts = AboutFacts;

function AboutCTA() {
  return (
    <section style={{
      background: 'var(--green-accent)', padding: '88px 40px', color: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', right: -60, top: -40, fontSize: 320,
        fontWeight: 700, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em',
        fontFamily: 'var(--font-serif)', lineHeight: 1, pointerEvents: 'none',
      }}>2026</div>

      <div style={{
        maxWidth: 1180, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center', position: 'relative',
      }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 14 }}>Talk to us</div>
          <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-0.4px', color: '#fff', lineHeight: 1.2, marginBottom: 18 }}>
            귀 기관에 맞는 교육,<br/>15분의 상담으로 시작합니다.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.78)', maxWidth: 580 }}>
            진단 → 설계 → 운영 → 평가까지, 17년간 다듬어 온 GLC HRD Framework가 귀 기관의 학습 목표에 맞게 처음부터 다시 그려집니다.
          </p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.18)',
          padding: 28, borderRadius: 16,
        }}>
          {[
            { l: '대표 전화', v: '042-826-0828' },
            { l: '이메일', v: 'silveredu826@naver.com' },
            { l: '응답 시간', v: '평일 09:00 – 18:00' },
          ].map((c, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              padding: '12px 0', borderBottom: i === 2 ? 'none' : '1px solid rgba(255,255,255,0.12)',
            }}>
              <span style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{c.l}</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.16px' }}>{c.v}</span>
            </div>
          ))}
          <button className="btn" style={{ marginTop: 18, width: '100%', background: '#fff', color: 'var(--green-accent)', borderColor: '#fff' }}>
            맞춤 교육 상담 신청
          </button>
        </div>
      </div>
    </section>
  );
}
window.AboutCTA = AboutCTA;
