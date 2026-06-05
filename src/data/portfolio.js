export const profile = {
  nameKo: "박지우",
  nameEn: "Jiwoo Park",
  role: "Backend Developer",
  phone: "010-5197-3439",
  email: "qrkwldn0818@naver.com",
  github: "https://github.com/PNoahKR",
  blog: "https://noah0818.tistory.com",
  image: "/images/profilePhoto.jpeg",
  personalInfo: ["SSAFY 14기", "연세대학교 역사문화학"],
  headline: "비즈니스의 맥락을 가장 견고한 시스템으로 번역하는 개발자",
  summary:
    "인문학적 베이스와 IT 영업 직무를 통해 기른 유연한 소통 능력으로 낯설고 복잡한 비즈니스 도메인을 빠르게 습득합니다. 사용자와 기획자의 언어를 정확히 이해하고, 대용량 데이터 처리와 안정적인 상태 동기화라는 백엔드의 언어로 구현해 내는 개발자를 지향합니다.",
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export const highlights = [
  {
    title: "비즈니스 맥락 이해",
    description:
      "서비스 운영과 영업지원 경험을 바탕으로 사용자, 기획자, 개발자의 언어 사이를 연결합니다.",
  },
  {
    title: "데이터 신뢰성 중심",
    description:
      "증상 해결에서 멈추지 않고 상태 전이, 재시도, 정합성, 감사 이력까지 함께 고려합니다.",
  },
  {
    title: "끝까지 파고드는 구현",
    description:
      "AI 연동, 실시간 동기화, 배치 적재처럼 실패 지점이 많은 흐름도 작은 단위로 쪼개 안정화합니다.",
  },
];

export const skills = [
  {
    category: "Java / Spring",
    items: ["Java", "Spring Boot", "Spring Security", "JPA", "QueryDSL", "MyBatis", "Spring Batch"],
    note: "객체 지향과 자료구조를 활용해 복잡한 비즈니스 로직을 안정적으로 구현합니다.",
  },
  {
    category: "Python / FastAPI",
    items: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "PyTorch", "LLM Workflow"],
    note: "비정형 데이터 파싱, Vision AI 추론, 외부 API 연동 백엔드에 활용했습니다.",
  },
  {
    category: "Database / State",
    items: ["MySQL", "PostgreSQL", "PostGIS", "Redis", "Redisson", "H2 Test DB"],
    note: "검색, 공간 데이터 검증, 세션/동시성 제어, 대량 데이터 적재를 다뤘습니다.",
  },
  {
    category: "Realtime / Integration",
    items: ["WebSocket", "STOMP", "Redis Pub/Sub", "SSE", "WebClient", "Telegram Bot", "LiveKit"],
    note: "실시간 협업 상태 동기화와 외부 서비스 연동 흐름을 구현했습니다.",
  },
  {
    category: "Infra / Quality",
    items: ["Docker", "Nginx", "AWS S3", "GitHub Actions", "OpenAPI", "Swagger", "pytest", "ruff"],
    note: "API 계약, 테스트, 배포 자동화와 운영 안정성 개선에 관심을 두고 있습니다.",
  },
];

export const certificates = [
  { date: "2025.06.13", title: "정보처리산업기사" },
  { date: "2026.03.27", title: "SQLD" },
];

export const awards = [
  { date: "2025.12.26", title: "SSAFY 1학기 반 프로젝트 1등", issuer: "삼성전자" },
  { date: "2025.12.26", title: "SSAFY 1학기 성적 최우수상", issuer: "SSAFY" },
  { date: "2026.02.09", title: "SSAFY 2학기 반 프로젝트 1등", issuer: "삼성전자" },
  { date: "2026.04.03", title: "SSAFY-삼성전자 연계프로젝트 3등", issuer: "삼성전자" },
];

export const projects = [
  {
    title: "Match-Meal",
    period: "2025.11.25 - 2025.12.29",
    team: "2인 팀 프로젝트 · Backend & AI Developer",
    image: "/images/matchmeal-main.png",
    visualLabel: "AI Meal Care Service",
    detailPath: "/match-meal.html",
    description:
      "음식과 식단을 기록하고 음식 사진을 AI로 분석해 영양 정보를 확인할 수 있는 AI 기반 개인화 식단관리 및 메뉴 추천 서비스입니다.",
    links: [
      { label: "GitHub BE", href: "https://github.com/Match-Meal/MM-BE" },
      { label: "GitHub FE", href: "https://github.com/Match-Meal/MM-FE" },
      { label: "GitHub AI", href: "https://github.com/Match-Meal/MM-AI" },
      { label: "Detail", href: "/match-meal.html" },
    ],
    tech: [
      "Java 17",
      "Spring Boot 3.4",
      "Spring Security",
      "MyBatis",
      "MySQL",
      "Spring Batch",
      "Python",
      "FastAPI",
      "PyTorch",
      "Qwen2.5-VL",
      "PEFT/LoRA",
      "AWS S3",
      "Redis",
      "SSE Ranking",
    ],
    contributions: [
      {
        title: "식단·영양 도메인 API 구현",
        body:
          "음식 검색, 식단 CRUD, 일자·기간별 식단 통계 계산 로직을 구현하고 칼로리, 탄단지, 당, 나트륨 등 건강 지표 중심으로 응답을 구성했습니다.",
      },
      {
        title: "5만 건 음식 CSV 정제·적재 파이프라인 구성",
        body:
          "Spring Batch Reader/Processor/Writer와 MyBatis Batch Writer를 활용해 52,959줄 음식 데이터를 검색 가능한 영양 DB로 전환했습니다.",
      },
      {
        title: "Vision AI 추론 파이프라인 구현",
        body:
          "Qwen2.5-VL과 LoRA 모델 로딩, 이미지 리사이징, JSON 응답 후처리 등 FastAPI 기반 음식 이미지 분석 흐름을 구현했습니다.",
      },
      {
        title: "AI 예측 결과와 Food DB 매칭",
        body:
          "AI가 추론한 음식 후보명을 실제 Food DB와 연결해 제공량, 단위, 칼로리, 탄단지, 당, 나트륨을 반환하는 백엔드 연동 흐름을 구성했습니다.",
      },
      {
        title: "사용자 참여 기능 확장",
        body:
          "게시글, 댓글, 좋아요, 조회수, 알림 스케줄러, SSE 랭킹 등 식단 서비스의 사용자 참여 기능을 확장했습니다.",
      },
      {
        title: "공통 인프라 안정화",
        body:
          "공통 응답, 전역 예외 처리, 테스트 schema/properties를 정리해 API 응답 형태와 테스트 실행 안정성을 보강했습니다.",
      },
    ],
    decisions: [
      {
        title: "Vision AI 결과의 서비스 데이터화",
        body:
          "AI 응답에서 코드 블록과 설명 문장을 제거하고 후보명을 보정한 뒤, 공백 제거·정확 일치 우선·시작 문자열 우선·짧은 음식명 우선 정렬로 Food DB 검색 정확도를 보완했습니다.",
      },
      {
        title: "대용량 음식 CSV 데이터 정제 및 적재",
        body:
          "#NUM!, 빈 값, 하이픈, N/A, 단위 문자열을 Processor에서 정제하고 품질 문제가 있는 row는 skip 처리해 전체 배치 실패를 방지했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "Vision AI 결과의 서비스 데이터화",
        problem:
          "이미지 분석 모델은 음식명을 추론할 수 있었지만, 식단 기록에는 음식명뿐 아니라 제공량과 영양 성분이 필요했습니다. 또한 응답에 코드 블록, 설명 문장, 단답형 텍스트가 섞여 백엔드에서 안정적으로 처리하기 어려웠습니다.",
        solution: [
          "Qwen2.5-VL 응답을 음식 후보명과 후보 목록 구조로 유도하고, 코드 블록을 제거한 뒤 JSON 파싱을 수행했습니다.",
          "파싱 실패 시 단답형 응답을 후보명으로 보정하고, Spring WebClient multipart 요청으로 FastAPI 이미지 분석 API를 호출했습니다.",
          "AI 예측 음식명을 Food DB와 매칭할 때 공백 제거, 정확 일치 우선, 시작 문자열 우선, 짧은 음식명 우선 정렬을 적용했습니다.",
        ],
        result:
          "AI 음식명 추론을 실제 식단 기록과 영양 분석에 사용할 수 있는 데이터 흐름으로 확장했습니다.",
        metrics: [
          { label: "AI Model", value: "Qwen2.5-VL" },
          { label: "Backend Link", value: "WebClient" },
          { label: "Output", value: "Food DB Matching" },
        ],
        visual: {
          type: "flow",
          title: "AI 분석 결과를 식단 데이터로 전환하는 흐름",
          nodes: [
            { label: "사용자 이미지", detail: "음식 사진 업로드", tone: "mint" },
            { label: "Spring Boot", detail: "WebClient multipart 요청", tone: "mint" },
            { label: "FastAPI AI", detail: "Qwen2.5-VL + LoRA 추론", tone: "blue" },
            { label: "응답 정규화", detail: "JSON 파싱 + Fallback", tone: "blue" },
            { label: "Food DB 검색", detail: "공백 제거 · 정확도 우선 정렬", tone: "violet" },
            { label: "영양 정보 응답", detail: "제공량 · 칼로리 · 탄단지 · 당 · 나트륨", tone: "teal" },
            { label: "식단 기록 활용", detail: "영양 분석 데이터로 저장", tone: "mint" },
          ],
        },
      },
      {
        title: "대용량 음식 CSV 데이터 정제 및 적재",
        problem:
          "5만 건 규모의 외부 음식 데이터를 검색과 AI 매칭에 활용 가능한 영양 DB로 전환해야 했습니다. 공공데이터 특성상 숫자 컬럼 품질 문제, 과도한 컬럼 수, 단위 문자열, 빈 값이 함께 섞여 있었습니다.",
        solution: [
          "Spring Batch Reader/Processor/Writer 구조로 적재 파이프라인을 구성하고, 파일별 linesToSkip, includedFields, DTO 매핑을 다르게 설정했습니다.",
          "#NUM!, 빈 값, 하이픈, N/A, 단위 문자열은 Processor에서 정제하고 변환 실패 시 0.0 처리 또는 skip 정책을 적용했습니다.",
          "400개 기본 음식 DB와 5만 건 음식 DB를 별도 Step으로 분리하고, MyBatis Batch Writer와 chunk 처리로 대량 적재를 수행했습니다.",
        ],
        result:
          "외부 CSV 데이터를 검색과 AI 매칭에 활용 가능한 음식 DB로 전환했고, 칼로리 중심에서 당·나트륨까지 포함한 건강 지표 중심으로 확장했습니다.",
        metrics: [
          { label: "CSV Lines", value: "52,959" },
          { label: "Columns", value: "235" },
          { label: "#NUM! Rows", value: "1,030" },
        ],
        visual: {
          type: "flow",
          title: "CSV 원천 데이터를 검색 가능한 Food DB로 전환",
          nodes: [
            { label: "CSV Files", detail: "5.3만 줄 · 235개 컬럼", tone: "mint" },
            { label: "Batch Reader", detail: "파일별 linesToSkip / fields 설정", tone: "blue" },
            { label: "Processor", detail: "N/A · #NUM! · 단위 문자열 정제", tone: "violet" },
            { label: "Skip Policy", detail: "품질 문제 row 격리", tone: "amber" },
            { label: "Batch Writer", detail: "MyBatis chunk 적재", tone: "blue" },
            { label: "Food DB", detail: "검색 · AI 매칭 · 영양 분석 활용", tone: "teal" },
          ],
        },
      },
    ],
    summaryLine:
      "Spring Boot 기반 음식 DB·식단 기록·식단 통계 API와 FastAPI 기반 Vision AI 서버를 연결해 AI 분석 결과를 실제 음식 DB와 식단 기록에 사용할 수 있는 백엔드 흐름으로 확장했습니다.",
  },
  {
    title: "Peekle (힐끔힐끔코딩)",
    period: "2026.01.22 - 2026.02.06",
    team: "6인 팀 프로젝트 · Backend & Realtime Developer",
    image: "/images/peekle-main.png",
    visualLabel: "Realtime Study Platform",
    detailPath: "/peekle.html",
    description:
      "여러 사용자가 하나의 스터디룸에서 채팅, 화이트보드, 코드 공유, 문제 풀이, 화상 기능을 함께 사용하는 실시간 협업 기반 알고리즘 학습 플랫폼입니다.",
    links: [
      { label: "Live", href: "https://peekle.today/" },
      { label: "GitHub", href: "https://github.com/Peek-a-chu/Peekle" },
      { label: "Detail", href: "/peekle.html" },
    ],
    tech: [
      "Java 21",
      "Spring Boot 3.4",
      "Spring Security",
      "JPA",
      "QueryDSL",
      "STOMP",
      "SockJS",
      "WebSocket",
      "Redis Pub/Sub",
      "Redis Presence",
      "Redisson",
      "LiveKit",
      "Docker",
    ],
    contributions: [
      {
        title: "협업 학습 플로우 구현",
        body:
          "스터디룸 생성부터 초대·참여, 채팅, 커리큘럼, 제출 상태 공유까지 이어지는 협업 학습 백엔드 플로우를 구현했습니다.",
      },
      {
        title: "WebSocket 실시간 이벤트 동기화",
        body:
          "WebSocket과 Redis Pub/Sub로 입장, 이탈, 재접속, 권한 변경 이벤트를 참여자 전체에 실시간으로 전달했습니다.",
      },
      {
        title: "Redis 기반 상태 복원 구조 설계",
        body:
          "Redis revision과 제한된 이력 저장을 활용해 화이트보드와 IDE 상태를 재접속 시 안정적으로 복원하도록 구성했습니다.",
      },
      {
        title: "운영 기능 구현",
        body:
          "검색·페이징 API, 실시간 랭킹, LiveKit 토큰 인증 등 협업 학습 서비스를 운영하는 데 필요한 기능을 구현했습니다.",
      },
    ],
    decisions: [
      {
        title: "Whiteboard Sync Network Overhead 개선",
        body:
          "화이트보드 설정과 변경 이력을 Redis에 분리 저장하고, 커서 이벤트는 제외하며 최근 500개 이력만 유지해 재접속 SYNC payload가 제한 없이 커지는 문제를 방지했습니다.",
      },
      {
        title: "Multi Session Consistency 확보",
        body:
          "입장 시 이전 방 상태를 정리하고, 연결 종료 이벤트에는 현재 연결 식별자를 비교해 오래된 disconnect가 최신 세션을 지우지 못하게 차단했습니다.",
      },
      {
        title: "문제별 IDE 상태 격리",
        body:
          "IDE 코드를 스터디룸·문제·사용자 단위로 분리 저장해 여러 문제 풀이 맥락이 섞이지 않도록 했고, 재접속 시 같은 문제의 코드 상태를 복원했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "Whiteboard Sync Network Overhead",
        problem:
          "여러 사용자가 동시에 화이트보드를 사용할 때 모든 이벤트를 누적 저장하거나 매번 전체 상태를 다시 보내면, 재접속 SYNC payload가 계속 커져 네트워크 부하와 복원 지연이 발생할 수 있었습니다.",
        solution: [
          "화이트보드 설정과 변경 이력을 Redis에 분리 저장하고, 변경마다 revision을 증가시켜 최신 상태 여부를 판단했습니다.",
          "재접속 사용자는 전체 방송이 아닌 개인 동기화 채널로 필요한 상태만 복원하도록 구성했습니다.",
          "복원 가치가 낮은 커서 이동 이벤트는 저장 대상에서 제외하고, 변경 이력은 최근 500개만 유지했습니다.",
          "빈 스터디룸은 15초 유예 후 관련 상태를 정리해 다음 세션과 데이터가 섞이지 않도록 처리했습니다.",
        ],
        result:
          "화이트보드 동기화 데이터가 제한 없이 커지는 문제를 방지하고, 재접속 시 Redis revision 기준으로 안정적으로 상태를 복원했습니다.",
        metrics: [
          { label: "History Limit", value: "500 events" },
          { label: "Cleanup Grace", value: "15 sec" },
          { label: "Sync Scope", value: "Private Topic" },
        ],
        visual: {
          type: "structure",
          title: "화이트보드 재접속 동기화 개선 구조",
          note: "Redis revision과 제한된 history를 기준으로 필요한 상태만 복원해 payload 증가와 재접속 지연을 줄였습니다.",
          groups: [
            {
              title: "입력 주체",
              tone: "blue",
              items: [
                { label: "Client Reconnect", detail: "last revision 전달", tone: "blue" },
                { label: "Draw Event", detail: "화이트보드 변경 이벤트", tone: "blue" },
                { label: "Room Presence", detail: "온라인 유저와 빈 방 감지", tone: "blue" },
              ],
            },
            {
              title: "Redis 상태 저장소",
              tone: "mint",
              items: [
                { label: "wb:{roomId}:config", detail: "활성 상태, 설정값, current revision", tone: "mint" },
                { label: "wb:{roomId}:history", detail: "최근 draw event 500개만 유지", tone: "mint" },
                { label: "wb:{roomId}:presence", detail: "온라인 유저와 cleanup 기준", tone: "mint" },
              ],
            },
            {
              title: "동기화 정책",
              tone: "violet",
              items: [
                { label: "Revision Compare", detail: "놓친 구간만 선택 계산", tone: "violet" },
                { label: "Cursor Event Skip", detail: "복원 가치 낮은 이벤트 제외", tone: "violet" },
                { label: "Private SYNC Topic", detail: "재접속 사용자에게만 응답", tone: "violet" },
              ],
            },
          ],
        },
      },
      {
        title: "Multi Session Consistency",
        problem:
          "사용자가 여러 스터디룸이나 문제를 오가거나 비정상 이탈 후 재접속할 때, 이전 방의 온라인 상태, 코드, 마지막 풀이 문제, 미디어 세션, 관전 상태가 현재 세션과 섞일 위험이 있었습니다.",
        solution: [
          "입장 시 사용자의 현재 활성 스터디를 확인하고, 이전 방 상태를 정리한 뒤 새 방에 입장하도록 처리했습니다.",
          "방별 온라인 사용자 목록을 Redis Presence로 중앙 관리해 입장·퇴장 이벤트와 실시간 접속 상태를 동기화했습니다.",
          "연결 종료 이벤트에는 현재 연결 식별자를 비교해 오래된 disconnect가 최신 세션을 지우지 못하게 차단했습니다.",
          "IDE 코드는 스터디룸·문제·사용자 단위로 분리 저장해 여러 문제 풀이 맥락을 격리했습니다.",
        ],
        result:
          "이전 방, 이전 문제, 오래된 disconnect가 현재 세션 상태와 섞이는 문제를 줄이고 재접속 시 같은 문제 맥락을 복원할 수 있게 했습니다.",
        metrics: [
          { label: "State Store", value: "Redis Presence" },
          { label: "Guard", value: "Connection ID" },
          { label: "IDE Scope", value: "Room / Problem / User" },
        ],
        visual: {
          type: "flow",
          title: "중복 세션과 오래된 disconnect를 격리하는 흐름",
          nodes: [
            { label: "입장 요청", detail: "사용자 active study 확인", tone: "mint" },
            { label: "이전 방 정리", detail: "온라인 목록 · 미디어 세션 제거", tone: "amber" },
            { label: "새 방 등록", detail: "Redis Presence 갱신", tone: "blue" },
            { label: "연결 식별자 저장", detail: "최신 connection id 기준", tone: "violet" },
            { label: "Disconnect 검증", detail: "오래된 종료 이벤트 차단", tone: "amber" },
            { label: "IDE 상태 복원", detail: "room / problem / user 단위 격리", tone: "teal" },
          ],
        },
      },
    ],
    summaryLine:
      "Spring Boot API, WebSocket 이벤트 흐름, Redis 기반 세션/상태 복원을 중심으로 실시간 협업 학습 서비스의 핵심 백엔드 플로우를 구현했습니다.",
  },
  {
    title: "ThanksCarbon / A3 ASKER",
    period: "2026.04.20 - 2026.05.20",
    team: "6인 팀 프로젝트 · Backend Developer",
    image: "/images/asker-main.png",
    visualLabel: "Carbon Ops Platform",
    detailPath: "/thanks-carbon.html",
    description:
      "Telegram 농부 입력, 증빙 제출, 운영자 검토, AI 후속 질문이 이어지는 농지 기반 탄소 감축 활동 운영 플랫폼입니다.",
    links: [{ label: "Detail", href: "/thanks-carbon.html" }],
    tech: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL/PostGIS",
      "Celery",
      "Redis",
      "Telegram Bot",
      "S3-compatible Storage",
      "OCR/Vision",
      "LLM Workflow",
      "OpenAPI Contract",
      "pytest",
      "ruff",
    ],
    contributions: [
      {
        title: "API / Bot / Worker 경계 설계",
        body:
          "Telegram 입력을 command로 변환하고 FastAPI가 canonical write owner로 검증과 상태 전이를 처리하도록 경계를 설계했습니다.",
      },
      {
        title: "공간 데이터와 증빙 교차 검증",
        body:
          "PostGIS polygon, EXIF GPS, 촬영 시각, Telegram 위치, distance를 교차 검증해 자동 승인과 Review Queue 분기 기준을 구현했습니다.",
      },
      {
        title: "AI 과신 제어 구조 구현",
        body:
          "논/배수 판별 기준을 구조화하고 uncertain/manual review, release gate, fallback으로 AI 결과가 핵심 상태를 오염시키지 않도록 제어했습니다.",
      },
      {
        title: "비동기 command 중복 처리 안정화",
        body:
          "source_command_id, idempotency_key, request_hash, outbox 상태를 활용해 Telegram/Worker 재시도와 중복 처리를 안정화했습니다.",
      },
    ],
    decisions: [
      {
        title: "Polygon 기반 오매핑 방지",
        body:
          "농지 경계를 변경 불가능한 버전으로 저장하고 사용자 입력은 후보 농지로 보관한 뒤, 출처·활성 상태·실제 농지와의 거리 검증을 거쳐 확정하도록 했습니다.",
      },
      {
        title: "AI 결과의 도메인 상태 오염 방지",
        body:
          "AI 결과는 최종 상태가 아닌 보조 신호로 제한하고, 모델·프롬프트·입출력·신뢰도·비용·fallback 기록을 남겨 불확실한 결과는 운영자 검토로 넘기도록 구성했습니다.",
      },
      {
        title: "비동기 Command replay 안정화",
        body:
          "요청 식별값, 중복 확인값, 요청 해시, 업무 범위 키로 같은 요청인지 판별하고 상태 변경 전 기대 버전을 비교해 오래된 요청의 반영을 막았습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "Polygon 기반 오매핑 방지",
        problem:
          "농지는 지도상의 경계 정보와 고유 번호로 관리되지만, 사용자가 Telegram으로 보낸 위치나 입력값만으로는 실제 활성 필지와 정확히 연결되었다고 보장하기 어려웠습니다.",
        solution: [
          "농지 경계는 변경 불가능한 버전으로 저장하고, 현재 활성 경계는 별도로 관리했습니다.",
          "사용자 입력은 바로 확정하지 않고 후보 농지로 저장한 뒤 출처, 활성 상태, 실제 농지와의 거리를 검증했습니다.",
          "후보가 충돌하거나 불확실한 경우에는 운영자 검토 대상으로 분리했습니다.",
          "증빙 제출 시 사진 위치 정보, 촬영 시각, Telegram 위치, 농지 경계와의 거리를 함께 검증했습니다.",
        ],
        result:
          "자동 확정 케이스와 운영자 판단이 필요한 케이스를 분리하고, 공간 데이터와 미디어 증빙의 신뢰성을 백엔드 검증 파이프라인으로 설명 가능하게 만들었습니다.",
        metrics: [
          { label: "Spatial DB", value: "PostGIS" },
          { label: "Boundary", value: "Versioned Polygon" },
          { label: "Fallback", value: "Review Queue" },
        ],
        visual: {
          type: "flow",
          title: "농지 후보 확정과 운영자 검토 분기",
          nodes: [
            { label: "Telegram 위치", detail: "농부 입력 · GPS 공유", tone: "mint" },
            { label: "후보 필지 조회", detail: "PostGIS polygon distance", tone: "blue" },
            { label: "활성 경계 검증", detail: "versioned polygon 기준", tone: "violet" },
            { label: "신뢰도 판정", detail: "출처 · 거리 · active enrollment", tone: "amber" },
            { label: "자동 확정", detail: "명확한 단일 후보", tone: "teal" },
            { label: "Review Queue", detail: "충돌 · 불확실 케이스", tone: "amber" },
          ],
        },
      },
      {
        title: "AI 결과의 도메인 상태 오염 방지",
        problem:
          "이미지 판별, 문자 인식, AI 후속 질문 기능을 붙이는 과정에서 AI 결과를 핵심 데이터에 바로 반영하면 잘못된 판정이나 OCR 오류가 농지 상태, 증빙 검증, 영농 활동 기록까지 오염시킬 위험이 있었습니다.",
        solution: [
          "AI 결과를 최종 상태가 아니라 보조 신호로 제한하고, 기존 검증·강제 반려 규칙은 유지했습니다.",
          "OCR 결과는 후보로 분리하고 사용자 또는 관리자 확인 후 확정하도록 구성했습니다.",
          "AI 호출별 모델, 프롬프트, 입출력, 신뢰도, 비용, fallback 기록을 남겼습니다.",
          "기능별 활성화 여부, 자동 사용 여부, 대체 처리 방식, 비용 한도를 정책으로 관리했습니다.",
        ],
        result:
          "AI 판단 기준을 구조화하고, 불확실한 결과는 운영자 검토로 넘겨 AI 과신과 외부 장애 리스크를 줄였습니다.",
        metrics: [
          { label: "AI Role", value: "Assist Signal" },
          { label: "Control", value: "Release Gate" },
          { label: "Fallback", value: "Manual Review" },
        ],
        visual: {
          type: "flow",
          title: "AI 판단을 보조 신호로 제한하는 안전장치",
          nodes: [
            { label: "AI / OCR 호출", detail: "이미지 판별 · 문자 인식", tone: "blue" },
            { label: "응답 기록", detail: "모델 · 프롬프트 · 비용 · 신뢰도", tone: "violet" },
            { label: "Release Gate", detail: "정책 통과 여부 판단", tone: "amber" },
            { label: "Assist Signal", detail: "최종 상태가 아닌 보조 신호", tone: "mint" },
            { label: "Manual Review", detail: "불확실 결과 운영자 검토", tone: "amber" },
            { label: "도메인 상태 확정", detail: "검증 규칙 통과 후 반영", tone: "teal" },
          ],
        },
      },
      {
        title: "비동기 Command 중복 실행과 상태 전이 충돌 방지",
        problem:
          "Telegram 봇, 비동기 작업자, 외부 전달 대기 목록을 거치는 구조에서는 네트워크 지연, 응답 시간 초과, 외부 서비스 재전송, 작업 재시도로 같은 처리 요청이 여러 번 들어올 수 있었습니다.",
        solution: [
          "요청 식별값, 중복 확인값, 요청 해시, 업무 범위 키를 기준으로 같은 요청인지 판별했습니다.",
          "이미 처리된 요청은 다시 실행하지 않고 이전 처리 결과를 그대로 반환하는 구조를 구성했습니다.",
          "상태 변경 전 현재 상태와 기대 버전을 비교해 오래된 요청이나 중복 요청의 반영을 방지했습니다.",
          "외부 전달 상태를 대기, 전달 완료, 실패 보관으로 분리해 재시도와 실패 이력을 추적했습니다.",
        ],
        result:
          "핵심 상태 변경과 메시지 발송을 분리해 외부 장애가 도메인 상태에 미치는 영향을 줄이고, replay 상황에서도 상태 전이 충돌을 방지했습니다.",
        metrics: [
          { label: "Dedup", value: "Idempotency Key" },
          { label: "Replay Guard", value: "Request Hash" },
          { label: "Delivery", value: "Outbox State" },
        ],
        visual: {
          type: "structure",
          title: "Command 처리와 Outbox 분리 구조",
          note: "명령 처리와 외부 메시지 발송을 분리해 replay 상황에서도 도메인 상태 전이와 전달 실패를 독립적으로 관리했습니다.",
          groups: [
            {
              title: "입력 주체",
              tone: "blue",
              items: [
                { label: "Telegram Bot", detail: "위치, 증빙, 재제출 command", tone: "blue" },
                { label: "Admin Web", detail: "승인, 반려, 정정 command", tone: "blue" },
                { label: "Worker Retry", detail: "실패 작업 재시도 command", tone: "blue" },
              ],
            },
            {
              title: "백엔드 API (상태 전이 소유)",
              tone: "mint",
              items: [
                { label: "Command Envelope", detail: "source id, idempotency key", tone: "mint" },
                { label: "Service Guard", detail: "request hash, expected version 검증", tone: "mint" },
                { label: "Transaction Store", detail: "상태 변경과 처리 결과 저장", tone: "mint" },
              ],
            },
            {
              title: "전달 상태 관리",
              tone: "amber",
              items: [
                { label: "Pending", detail: "외부 발송 대기", tone: "amber" },
                { label: "Sent", detail: "전달 완료 상태 보관", tone: "amber" },
                { label: "Failed Archive", detail: "실패 이력과 운영자 확인", tone: "amber" },
              ],
            },
          ],
        },
      },
    ],
    summaryLine:
      "FastAPI command owner, Telegram Bot adapter, Celery Worker, PostgreSQL/PostGIS 검증 모델을 중심으로 외부 연동과 데이터 신뢰성 흐름을 구현했습니다.",
  },
  {
    title: "Fashion Mall Project",
    period: "2024.08 - 2024.11",
    team: "3명 팀 프로젝트 · Backend",
    image: "/images/fashionmall.png",
    description:
      "회원, 상품, 쿠폰, 주문/결제, 리뷰, 배송지, 장바구니를 포함한 웹 기반 온라인 쇼핑몰 프로젝트입니다.",
    links: [
      { label: "GitHub", href: "https://github.com/team-fashionmall/fashionmall" },
      { label: "Live", href: "http://www.myfashionmall.shop" },
      { label: "Detail", href: "/fashionmall.html" },
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "QueryDSL", "MySQL", "AWS", "Docker", "Nginx"],
    contributions: [
      "DB 설계, 주문/결제 서비스, 결제 API 연동",
      "Eureka/Gateway, 공통 응답/예외 처리",
      "쿠폰, 리뷰, CI/CD, 서버 구축",
    ],
    decisions: [
      {
        title: "WebClient 응답 제네릭 타입 처리",
        body:
          "ParameterizedTypeReference를 사용해 CommonResponse<List<T>> 형태의 런타임 타입 정보를 유지하고 서비스 간 API 호출 타입 안정성을 확보했습니다.",
      },
      {
        title: "Docker 기반 Blue/Green 무중단 배포",
        body:
          "CodeDeploy 배포 스크립트에서 헬스체크 후 트래픽을 전환하고 이전 리소스를 정리해 배포 중단과 디스크 누적 문제를 줄였습니다.",
      },
    ],
  },
];

export const timeline = [
  {
    period: "2025.07 - 2026.06",
    title: "삼성 청년 SW·AI 아카데미 (SSAFY) 14기",
    subtitle: "S/W & AI Track",
    points: [
      "알고리즘 및 자료구조 심화 학습",
      "Spring Boot, Vue.js 기반 웹 풀스택 과정",
      "실무형 프로젝트와 애자일 협업 경험",
    ],
  },
  {
    period: "2026.02 - 2026.04",
    title: "SSAFY - 삼성전자 연계 프로젝트",
    subtitle: "Backend Developer",
    points: [
      "농지 기반 탄소 감축 활동 운영 플랫폼 백엔드 구현",
      "FastAPI, Telegram Bot, Celery, PostGIS 기반 외부 연동 및 검증 플로우 설계",
    ],
  },
  {
    period: "2021.09 - 2023.11",
    title: "(유)퍼블리시홀딩스",
    subtitle: "서비스영업/관리 사원",
    points: [
      "70개 이상 언론사 고객 기술 지원 및 서비스 온보딩",
      "고객 피드백을 정리해 개발팀에 전달하고 서비스 개선에 기여",
      "기술 지원 문서 작성 및 운영 프로세스 관리",
    ],
  },
  {
    period: "2016.03 - 2023.02",
    title: "연세대학교 미래캠퍼스",
    subtitle: "역사문화학과 졸업",
    points: ["인문학적 소양과 비즈니스 마인드 함양", "창업 관련 교과목 수강"],
  },
];
