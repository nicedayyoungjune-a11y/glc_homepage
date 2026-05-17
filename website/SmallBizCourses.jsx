function SmallBizCourses() {
  const [tab, setTab] = React.useState('basic');
  const [activeCat, setActiveCat] = React.useState(0);
  const [expanded, setExpanded] = React.useState(null);

  const basicCats = [
    {
      label: '마케팅',
      en: 'Marketing',
      color: '#006241',
      courses: [
        {
          title: '소상공인 마케팅&브랜딩 교육',
          hours: '2시간',
          level: '입문',
          desc: '고객 분석부터 브랜드 포지셔닝까지, 소상공인을 위한 실전 마케팅 전략을 익힙니다.',
          topics: ['내 사업의 고객은 누구인가 — 타겟 분석', '경쟁사와 다른 나만의 USP 찾기', '저예산으로 브랜드 인지도 높이는 법', '단골 고객 만드는 CRM 기초'],
        },
        {
          title: '온라인마케팅을 잘 시작하는 방법',
          hours: '1시간 30분',
          level: '입문',
          desc: '검색엔진·SNS·스마트스토어를 활용해 온라인 판로를 개척하는 첫 단계를 안내합니다.',
          topics: ['네이버 플레이스·스마트스토어 기초 설정', '검색 노출을 높이는 키워드 전략', '인스타그램·블로그 채널 선택 기준', '유료 광고 없이 방문객 늘리는 법'],
        },
        {
          title: '고객 후기로 SNS 콘텐츠 만들기',
          hours: '1시간',
          level: '입문',
          desc: '실제 고객 리뷰를 분석해 매력적인 SNS 콘텐츠로 빠르게 전환하는 실전 방법을 배웁니다.',
          topics: ['좋은 후기를 받는 응대 멘트', '리뷰를 카드뉴스·릴스로 변환하는 법', '부정 리뷰 대응 전략', '리뷰 수를 빠르게 쌓는 이벤트 설계'],
        },
        {
          title: '소상공인을 위한 유튜브·릴스 영상 마케팅',
          hours: '2시간',
          level: '초급',
          desc: '스마트폰 하나로 매장을 홍보하는 숏폼 영상 제작법과 조회수를 높이는 알고리즘 전략을 배웁니다.',
          topics: ['릴스·쇼츠 촬영 세팅 (조명·소리·각도)', '15초 안에 시선 끄는 오프닝 구성', '캡컷으로 자막·음악 편집하기', '업로드 타이밍과 해시태그 전략'],
        },
      ],
    },
    {
      label: '사업장운영',
      en: 'Operations',
      color: '#00754A',
      courses: [
        {
          title: '사업자금 조달과 리스크 관리',
          hours: '2시간',
          level: '초급',
          desc: '정책자금·소상공인 지원대출 활용법과 경영 리스크를 최소화하는 재무 전략을 배웁니다.',
          topics: ['소진공·신보·기보 정책자금 비교', '대출 심사에서 유리한 서류 준비법', '매출 변동에 대비하는 비상금 설계', '보증보험·화재보험 필수 체크리스트'],
        },
        {
          title: '원부자재 구매와 재고관리 기법',
          hours: '1시간 30분',
          level: '초급',
          desc: '원가 절감을 위한 구매 협상법과 재고 손실을 줄이는 현장 관리 노하우를 익힙니다.',
          topics: ['공급업체 협상 스크립트 실습', '최소 발주량(MOQ) 기준 설정법', '재고 회전율 계산과 적정 재고량 산출', '유통기한·계절성 재고 관리 루틴'],
        },
        {
          title: '소상공인이 꼭 알아야 할 노무관리',
          hours: '2시간',
          level: '초급',
          desc: '아르바이트·직원 채용 시 놓치기 쉬운 노무 이슈와 분쟁 예방 실무 지식을 제공합니다.',
          topics: ['근로계약서 작성 필수 항목', '최저임금·주휴수당·연차 계산법', '해고·권고사직 시 절차와 주의사항', '고용보험·산재보험 신고 방법'],
        },
        {
          title: '점포 위생·안전 관리 실무',
          hours: '1시간',
          level: '입문',
          desc: '식품위생법·소방안전 기준을 지키면서 고객 신뢰를 높이는 매장 관리 체크리스트를 제공합니다.',
          topics: ['식품위생법 핵심 의무 사항', '위생 점검 일지 작성법', '소방 점검 항목 및 비상구 관리', '위생 불량 적발 시 대응 요령'],
        },
      ],
    },
    {
      label: '지원사업',
      en: 'Gov. Support',
      color: '#2B5148',
      courses: [
        {
          title: '신용취약소상공인자금 사전 이수 교육',
          hours: '2시간',
          level: '입문',
          desc: '정책자금 신청 필수 이수 과정. 신용 회복과 경영 안정자금 활용을 위한 기초 교육입니다.',
          topics: ['신용등급 개선 방법', '소상공인 자금 신청 프로세스', '경영 안정자금 사용 규정', '연체·부실 예방을 위한 상환 계획'],
        },
        {
          title: '소상공인 정부지원사업 완전 가이드',
          hours: '2시간',
          level: '초급',
          desc: '창업·경영개선·판로개척·디지털전환 분야별 지원사업 총정리 및 신청 실무를 안내합니다.',
          topics: ['2026년 주요 소상공인 지원사업 목록', '사업계획서 작성 핵심 포인트', '심사에서 자주 탈락하는 이유와 보완법', '선정 후 정산 및 보고서 제출 요령'],
        },
        {
          title: '전통시장·상점가 지원제도 활용법',
          hours: '1시간 30분',
          level: '초급',
          desc: '전통시장 특화 지원사업과 상점가 활성화 자금을 받는 구체적 방법을 소개합니다.',
          topics: ['전통시장 시설 현대화 사업 신청법', '문화관광형 시장 육성사업 요건', '온누리상품권 가맹점 등록 절차', '소상공인진흥원 컨설팅 지원 신청'],
        },
      ],
    },
    {
      label: '기업가정신',
      en: 'Entrepreneurship',
      color: '#CBA258',
      courses: [
        {
          title: '소상공인 투자 IR 교육',
          hours: '2시간',
          level: '중급',
          desc: '엔젤투자·크라우드펀딩 대상 IR 자료 작성법과 투자자 설득 피칭 스킬을 익힙니다.',
          topics: ['투자자가 원하는 IR 자료 구성', '매출·성장성 수치 설득력 있게 보여주기', '3분 엘리베이터 피치 작성 실습', '크라우드펀딩 플랫폼별 특징 비교'],
        },
        {
          title: '소상공인 창업 트렌드 2026',
          hours: '1시간 30분',
          level: '입문',
          desc: '2026년 뜨는 업종과 틈새시장, 성공 소상공인 사례로 배우는 창업 전략을 제시합니다.',
          topics: ['2026 유망 업종 TOP 10', '1인 창업으로 월 500만원 가능한 모델', '프랜차이즈 vs 독립 창업 비교', '실패 확률을 낮추는 시장 조사법'],
        },
        {
          title: '재도전 소상공인을 위한 기업가정신',
          hours: '2시간',
          level: '입문',
          desc: '폐업·실패를 경험한 소상공인이 다시 일어서는 마인드셋과 실전 회복 전략을 다룹니다.',
          topics: ['실패에서 배우는 성공 소상공인 사례', '재창업 시 자금 조달 전략', '과거 실패 원인 분석 워크시트', '재도전 지원사업 신청 가이드'],
        },
      ],
    },
    {
      label: '교양',
      en: 'General',
      color: '#1E3932',
      courses: [
        {
          title: '자살예방 인식개선 교육',
          hours: '1시간',
          level: '입문',
          desc: '정신건강 위기 신호를 조기 감지하고 주변을 도울 수 있는 생명 존중 교육입니다.',
          topics: ['자살 위험 신호 인식법', '위기 상황 시 대화 방법', '지역 정신건강 지원 기관 안내', '소상공인 번아웃 예방 자기 돌봄'],
        },
        {
          title: '감정노동자 마음 건강 지키기',
          hours: '1시간 30분',
          level: '입문',
          desc: '고객 응대 스트레스 해소법과 소진 예방을 위한 자기 돌봄 실천 방법을 배웁니다.',
          topics: ['감정노동 스트레스 자가 진단', '악성 고객 응대 매뉴얼', '퇴근 후 감정 해소 루틴', '번아웃 예방을 위한 일-쉬는 시간 설계'],
        },
        {
          title: '사장님을 위한 세금·재무 기초',
          hours: '2시간',
          level: '입문',
          desc: '매출·비용·이익 개념부터 부가세·종합소득세 신고 흐름까지 쉽게 이해하는 필수 교양 과정입니다.',
          topics: ['매출·비용·이익의 개념 이해', '부가세 신고 및 환급 요청법', '종합소득세 절세 전략 기초', '간편장부 작성으로 세금 아끼기'],
        },
      ],
    },
  ];

  const aiCats = [
    {
      label: 'AI도구이해',
      en: 'AI Tools',
      color: '#006241',
      courses: [
        {
          title: '생성형 AI 활용 과정 ① — 기초 이해',
          hours: '1시간 30분',
          level: '입문',
          desc: 'ChatGPT·Gemini·클로드 등 생성형 AI의 작동 원리와 소상공인 업무에 적용하는 첫걸음입니다.',
          topics: ['생성형 AI란 무엇인가', 'ChatGPT·클로드·제미나이 차이점', '소상공인 업무에서 AI 활용 가능한 영역', '무료로 쓸 수 있는 AI 도구 목록'],
        },
        {
          title: '생성형 AI 활용 과정 ⑤ — 프롬프트 엔지니어링 기초',
          hours: '2시간',
          level: '초급',
          desc: 'AI에게 원하는 결과를 얻는 질문법(프롬프트)을 체계적으로 익히는 실전 과정입니다.',
          topics: ['좋은 프롬프트의 5가지 조건', '역할 부여·맥락 설명 기법', '반복 수정으로 결과 개선하기', '업종별 프롬프트 템플릿 실습'],
        },
        {
          title: '소상공인을 위한 AI 도구 비교 가이드',
          hours: '1시간',
          level: '입문',
          desc: '뤼튼·클로바X·ChatGPT·Canva AI 등 주요 AI 도구를 비교하고 내 업종에 맞는 도구를 선택하는 기준을 제시합니다.',
          topics: ['무료·유료 AI 도구 비교표', '음식점·카페·소매점·서비스업 추천 도구', 'AI 도구 연동으로 업무 자동화하기', 'AI 사용 시 개인정보 주의사항'],
        },
      ],
    },
    {
      label: '마케팅활용',
      en: 'AI Marketing',
      color: '#00754A',
      courses: [
        {
          title: 'AI로 고객 후기 기반 브랜딩 카피 만들기',
          hours: '1시간 30분',
          level: '초급',
          desc: '실제 리뷰 데이터를 AI로 분석해 사장님만의 브랜딩 문구와 홍보 카피를 자동 완성합니다.',
          topics: ['배달앱·네이버 리뷰 데이터 수집법', 'AI로 리뷰 감성 분석하기', '강점 키워드를 광고 문구로 변환', '인스타그램·블로그 카피 즉시 완성'],
        },
        {
          title: '5초 만에 채널 홍보 메시지 만들기',
          hours: '1시간',
          level: '입문',
          desc: '카카오채널·인스타그램·블로그에 맞는 홍보 문구를 AI로 순식간에 제작하는 노하우를 배웁니다.',
          topics: ['채널별 홍보 문구 톤앤매너', 'AI 프롬프트로 10가지 문구 동시 생성', '이모지·해시태그 자동 추가', '클릭률 높은 CTA 문구 패턴'],
        },
        {
          title: 'AI 이미지·영상으로 SNS 콘텐츠 완성',
          hours: '2시간',
          level: '초급',
          desc: '미드저니·Canva AI·CapCut AI를 활용해 전문 디자이너 없이 고품질 콘텐츠를 만드는 실습 과정입니다.',
          topics: ['Canva AI로 매장 홍보 이미지 제작', '배경 제거·색보정 AI 도구 실습', 'CapCut AI 자막 자동 생성', '릴스·쇼츠 템플릿 활용'],
        },
      ],
    },
    {
      label: '상품서비스기획',
      en: 'Product Planning',
      color: '#2B5148',
      courses: [
        {
          title: 'AI로 시그니처 메뉴·상품 기획하기',
          hours: '2시간',
          level: '초급',
          desc: '배달앱 리뷰·키워드 트렌드를 AI로 분석하고 인기 메뉴·상품 아이디어를 도출하는 실전 과정입니다.',
          topics: ['배달앱 인기 키워드 AI 분석', '경쟁 매장 메뉴 비교 분석', 'AI로 메뉴 이름·설명문 작성', '시그니처 메뉴 가격 책정 전략'],
        },
        {
          title: 'AI로 트렌드 기반 신제품 기획하기',
          hours: '1시간 30분',
          level: '초급',
          desc: '네이버 트렌드·구글 트렌드·AI 분석을 결합해 시장 수요가 높은 신상품을 설계합니다.',
          topics: ['네이버·구글 트렌드 데이터 읽기', 'AI로 계절별 수요 예측', '신제품 컨셉 시트 자동 작성', '소비자 반응 사전 테스트 방법'],
        },
        {
          title: 'AI로 나만의 스토리텔링 상품 소개 만들기',
          hours: '1시간',
          level: '입문',
          desc: '제품의 차별화 포인트를 AI가 고객 언어로 풀어주는 상품 소개서 자동 작성 실습입니다.',
          topics: ['상품 스토리텔링 구조 (문제→해결→결과)', 'AI로 상품 상세페이지 문구 작성', '고객 감성을 건드리는 키워드 선택', '스마트스토어 상세 이미지 구성법'],
        },
      ],
    },
    {
      label: '업무효율화',
      en: 'Productivity',
      color: '#CBA258',
      courses: [
        {
          title: 'AI로 고객 응대·예약 자동화하기',
          hours: '2시간',
          level: '초급',
          desc: '카카오톡 채널·전화 응대를 AI 챗봇으로 자동화하는 시나리오를 직접 설계합니다.',
          topics: ['카카오 채널 챗봇 기본 설정', '자주 묻는 질문 자동 응답 시나리오 작성', '예약·주문 접수 자동화 흐름도', '응대 실패 시 사람으로 전환하는 방법'],
        },
        {
          title: 'AI로 업무 일지·보고서 3분 만에 완성',
          hours: '1시간',
          level: '입문',
          desc: '반복 업무 보고서를 AI 템플릿으로 즉시 완성하는 자동화 루틴을 만듭니다.',
          topics: ['AI 보고서 자동 완성 프롬프트', '일일·주간 매출 일지 템플릿', '직원 업무 지시서 자동 생성', '구글 시트와 AI 연동 자동화'],
        },
        {
          title: 'AI 엑셀로 매출 분석 대시보드 만들기',
          hours: '2시간',
          level: '초급',
          desc: 'ChatGPT와 엑셀을 연결해 매일 매출 데이터를 자동 집계·분석하는 대시보드를 만듭니다.',
          topics: ['엑셀 기본 함수와 AI 연동 방법', '매출·비용·이익 자동 계산 시트', 'ChatGPT로 엑셀 수식 오류 해결', '보기 좋은 차트 자동 생성'],
        },
      ],
    },
    {
      label: 'AI트렌드',
      en: 'AI Trends',
      color: '#1E3932',
      courses: [
        {
          title: "AI와 소상공인의 미래 — 소담소담 토크콘서트",
          hours: '1시간 30분',
          level: '입문',
          desc: '현장 소상공인과 AI 전문가가 함께하는 대화형 강연. AI 시대 자영업의 생존 전략을 탐색합니다.',
          topics: ['AI 시대 소상공인이 살아남는 법', '자동화에 대체되지 않는 역할 찾기', '성공 소상공인의 AI 활용 사례', 'Q&A — 내 업종에 맞는 AI 전략'],
        },
        {
          title: '2026 AI 트렌드가 소상공인에게 미치는 영향',
          hours: '1시간',
          level: '입문',
          desc: '생성형 AI·로봇·배달자동화 등 주요 트렌드를 분석하고 선제적 대응 전략을 제시합니다.',
          topics: ['키오스크·서빙로봇 도입 현황', '배달 플랫폼 AI 알고리즘 변화', '온라인·오프라인 경계 허무는 옴니채널', '소상공인에게 유리한 AI 틈새 활용법'],
        },
        {
          title: 'AI 도입 성공 소상공인 사례 탐구',
          hours: '1시간',
          level: '입문',
          desc: '실제 AI를 도입해 매출을 높인 카페·식당·소매점 사례를 통해 내 사업에 적용할 인사이트를 얻습니다.',
          topics: ['AI 메뉴 추천 도입 후 매출 30% 상승 사례', 'SNS AI 자동화로 인건비 절감 사례', '재고 AI 관리로 폐기 손실 줄인 사례', '내 업종에 맞는 AI 도입 로드맵'],
        },
      ],
    },
  ];

  const cats = tab === 'basic' ? basicCats : aiCats;
  const cur = cats[activeCat];

  return (
    <section id="courses" style={{ background: 'var(--neutral-warm)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-black-soft)', marginBottom: 12 }}>03 · Online Education</div>
            <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text-black)', lineHeight: 1.2 }}>
              소상공인을 위한<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--green-accent)' }}>온라인 교육과정.</span>
            </h2>
          </div>
          <div style={{ paddingBottom: 6 }}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-black-soft)', maxWidth: 460, marginBottom: 12 }}>
              마케팅·운영·AI까지, 소상공인에게 꼭 필요한 실전 과정을 GLC가 직접 안내합니다.
              수강 신청은 GLC 상담을 통해 진행합니다.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'var(--green-light)', borderRadius: 50 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-accent)' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--green-accent)', letterSpacing: '0.04em' }}>수강료 무료 · 이수증 발급</span>
            </div>
          </div>
        </div>

        {/* 기본교육 / AI교육 탭 */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {[
            { key: 'basic', label: '기본교육', sub: '마케팅 · 사업장운영 · 지원사업 · 기업가정신 · 교양', count: basicCats.reduce((s,c)=>s+c.courses.length,0) },
            { key: 'ai',    label: 'AI 교육',  sub: 'AI도구이해 · 마케팅활용 · 상품기획 · 업무효율화 · AI트렌드', count: aiCats.reduce((s,c)=>s+c.courses.length,0) },
          ].map(t => (
            <button key={t.key} onClick={() => { setTab(t.key); setActiveCat(0); setExpanded(null); }} style={{
              padding: '14px 24px', borderRadius: 14, cursor: 'pointer',
              border: '1px solid', fontFamily: 'var(--font-sans)',
              display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'left',
              background: tab === t.key ? 'var(--house-green)' : '#fff',
              color: tab === t.key ? '#fff' : 'var(--text-black)',
              borderColor: tab === t.key ? 'var(--house-green)' : 'var(--input-border)',
              transition: 'all .2s ease',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 700 }}>{t.label}</span>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 50,
                  background: tab === t.key ? 'var(--gold)' : 'var(--neutral-warm)',
                  color: tab === t.key ? 'var(--house-green)' : 'var(--text-black-soft)',
                }}>{t.count}개 과정</span>
              </span>
              <span style={{ fontSize: 12, opacity: tab === t.key ? 0.75 : 0.55, letterSpacing: '0.02em' }}>{t.sub}</span>
            </button>
          ))}
        </div>

        {/* 카테고리 탭 */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
          {cats.map((c, i) => (
            <button key={i} onClick={() => { setActiveCat(i); setExpanded(null); }} style={{
              padding: '8px 18px', borderRadius: 50, cursor: 'pointer',
              border: '1px solid', fontFamily: 'var(--font-sans)',
              fontSize: 13, fontWeight: 500,
              background: activeCat === i ? c.color : '#fff',
              color: activeCat === i ? '#fff' : 'var(--text-black)',
              borderColor: activeCat === i ? c.color : 'var(--input-border)',
              transition: 'all .2s ease',
            }}>
              {c.label}
              <span style={{ marginLeft: 5, fontSize: 11, opacity: 0.75 }}>{c.courses.length}</span>
            </button>
          ))}
        </div>

        {/* 강좌 카드 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {cur.courses.map((c, i) => {
            const isOpen = expanded === i;
            return (
              <div key={i} style={{
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: isOpen ? 'var(--shadow-frap)' : 'var(--shadow-card)',
                border: isOpen ? `1px solid ${cur.color}` : '1px solid transparent',
                transition: 'all .2s ease',
              }}>
                {/* 카드 헤더 — 클릭으로 토글 */}
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none',
                    cursor: 'pointer', padding: '20px 24px',
                    display: 'grid', gridTemplateColumns: 'auto 1fr auto auto',
                    gap: 16, alignItems: 'center', fontFamily: 'var(--font-sans)',
                  }}
                >
                  {/* 번호 */}
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: isOpen ? cur.color : 'var(--neutral-warm)',
                    color: isOpen ? '#fff' : cur.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, flexShrink: 0,
                    transition: 'all .2s',
                  }}>{i + 1}</div>

                  {/* 제목 + 설명 */}
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-black)', letterSpacing: '-0.16px', marginBottom: 3 }}>{c.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-black-soft)', lineHeight: 1.5 }}>{c.desc}</div>
                  </div>

                  {/* 메타 */}
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: 50, fontSize: 11, fontWeight: 600,
                      background: 'var(--neutral-warm)', color: 'var(--text-black-soft)',
                    }}>{c.hours}</span>
                    <span style={{
                      padding: '4px 10px', borderRadius: 50, fontSize: 11, fontWeight: 600,
                      background: cur.color + '18', color: cur.color,
                    }}>{c.level}</span>
                  </div>

                  {/* 토글 아이콘 */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={cur.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {/* 펼쳐지는 커리큘럼 */}
                {isOpen && (
                  <div style={{
                    padding: '0 24px 24px', borderTop: `1px solid ${cur.color}22`,
                  }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: cur.color, fontWeight: 700, marginBottom: 12, marginTop: 16 }}>
                      커리큘럼
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      {c.topics.map((tp, j) => (
                        <div key={j} style={{
                          display: 'flex', gap: 10, alignItems: 'flex-start',
                          padding: '12px 14px', background: 'var(--neutral-warm)', borderRadius: 8,
                          fontSize: 13, lineHeight: 1.55, color: 'var(--text-black)',
                        }}>
                          <span style={{
                            width: 20, height: 20, borderRadius: 4, background: cur.color,
                            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 10, fontWeight: 700, flexShrink: 0,
                          }}>{j + 1}</span>
                          {tp}
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        className="btn btn-primary"
                        style={{ background: cur.color, borderColor: cur.color }}
                        onClick={() => alert('수강 신청은 GLC 상담을 통해 진행됩니다.\n\nTEL: 042-826-0828\nEmail: silveredu826@naver.com')}
                      >
                        수강 신청 문의
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 하단 안내 */}
        <div style={{
          marginTop: 24, padding: '20px 28px',
          background: 'var(--house-green)', borderRadius: 12,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>
              모든 과정은 수강료 무료, GLC 사전 상담 후 신청 가능합니다.
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
              수강 후 현장 적용 컨설팅을 GLC에서 사후 지원합니다.
            </div>
          </div>
          <button
            className="btn btn-on-dark-fill"
            onClick={() => alert('수강 신청 문의\n\nTEL: 042-826-0828\nEmail: silveredu826@naver.com\n평일 09:00 - 18:00')}
          >
            수강 신청 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
window.SmallBizCourses = SmallBizCourses;
