function AboutCEO() {
  const Card = ({ name, role, en, photo, quote, bio }) => (
    <article style={{
      background: '#fff', borderRadius: 16, overflow: 'hidden',
      boxShadow: 'var(--shadow-card)', display: 'grid', gridTemplateColumns: '220px 1fr',
    }}>
      <div style={{
        background: photo, position: 'relative',
        display: 'flex', alignItems: 'flex-end', padding: 18,
      }}>
        <div style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.85)',
          padding: '4px 10px', background: 'rgba(0,0,0,0.35)', borderRadius: 4,
        }}>{en}</div>
      </div>
      <div style={{ padding: '28px 30px' }}>
        <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green-accent)', fontWeight: 600, marginBottom: 6 }}>{role}</div>
        <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.3px', color: 'var(--glc-green)', marginBottom: 14 }}>{name}</div>
        <p className="serif" style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-rewards)', fontStyle: 'italic', marginBottom: 12, borderLeft: '2px solid var(--gold)', paddingLeft: 14 }}>
          “{quote}”
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--text-black-soft)' }}>{bio}</p>
      </div>
    </article>
  );
  return (
    <section style={{ background: '#fff', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 56, marginBottom: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>02 · CEO Message</div>
            <h2 className="serif" style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--glc-green)', lineHeight: 1.15 }}>
              개인을 리더로,<br/>기업을 위대한 기업으로.
            </h2>
          </div>
          <div style={{ paddingTop: 16 }}>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-black)', maxWidth: 620 }}>
              GLC는 단순한 강의가 아닌 <strong style={{ color: 'var(--green-accent)' }}>행동의 변화</strong>를 약속합니다.
              19년의 경험은 우리에게 한 가지 확신을 남겼습니다 — 좋은 교육은 청중을 가르치는 것이 아니라
              <em className="serif" style={{ color: 'var(--text-rewards)' }}> 정책의 언어를 현장의 행동으로 바꾸는 것</em> 이라는 사실입니다.
              한 사람의 변화가 조직을 바꾸고, 조직의 변화가 사회를 다시 쓴다는 믿음이 우리의 방법론을 만들었습니다.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22 }}>
          <Card
            role="대표이사 · CEO"
            en="Yoo Young Joon"
            name="유 영 준"
            photo="linear-gradient(160deg,#2B5148 0%,#0F2622 100%)"
            quote="교육은 지속 가능한 변화를 이끌어 내야 합니다. 우리는 그 사실 하나로 19년을 달려왔습니다."
            bio="벤처캐피탈리스트, 창업진흥원 마케팅컨설질문을 제대로 해야 결과가 잘 나오더라고요. 데일카네기 제주연구소 운영, 고용노동부 사회공헌활동 자문위원. 공공·민간을 가로지르며 리더십·조직문화 컨설팅을 수행해 온 27년차 HRD 전문가."
          />
          <Card
            role="교육이사 · CLO"
            en="Kim Yang Hoon"
            name="김 양 훈"
            photo="linear-gradient(160deg,#A77545 0%,#5D3F22 100%)"
            quote="좋은 강사는 답을 주지 않습니다. 학습자가 스스로의 답을 발견하도록 자리를 만들 뿐입니다."
            bio="GLC 교육연구소장. 역량기반 인재육성 체계(Roadmap) 설계 및 e-HRD 시스템 운영을 총괄. 200여 공공·기업 과정의 커리큘럼 설계자."
          />
        </div>
      </div>
    </section>
  );
}
window.AboutCEO = AboutCEO;
