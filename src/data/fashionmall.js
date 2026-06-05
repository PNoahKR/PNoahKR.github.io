export const fashionMallDetail = {
  title: "Fashion Mall Project",
  subtitle: "웹 기반 온라인 쇼핑몰 구축 프로젝트",
  period: "2024.08 - 2024.11",
  team: "3명",
  role:
    "DB 설계, 주문/결제 서비스, 결제 API 연동, Eureka/Gateway, 공통 응답/예외 처리, 쿠폰, 리뷰, CI/CD, 서버 구축",
  heroImage: "/images/Fashionmall_Main.png",
  links: [
    { label: "Repository", href: "https://github.com/team-fashionmall/fashionmall" },
    { label: "Portfolio Home", href: "/#projects" },
  ],
  overview: [
    "회원, 상품, 쿠폰, 주문/결제, 리뷰, 배송지, 찜, 장바구니를 포함한 온라인 쇼핑몰 서비스입니다.",
    "MSA 구조를 경험하며 서비스 간 API 통신, 공통 응답/예외 처리, 결제 API, CI/CD와 무중단 배포까지 백엔드 운영 흐름을 직접 다뤘습니다.",
  ],
  techGroups: [
    {
      title: "Backend",
      items: ["Java", "Spring Boot", "Spring Data JPA", "QueryDSL", "Spring Cloud", "WebClient", "JWT"],
    },
    {
      title: "Infra",
      items: ["AWS EC2", "AWS S3", "Nginx", "Docker", "AWS CodeDeploy", "GitHub Actions"],
    },
    {
      title: "Database & Tools",
      items: ["MySQL", "IntelliJ IDEA", "Postman", "GitHub"],
    },
  ],
  features: [
    {
      title: "사용자",
      image: "/images/User.png",
      description: "회원가입, 로그인, 마이페이지, 배송지, 결제 수단 등록 등 쇼핑몰 사용자 흐름을 구성했습니다.",
    },
    {
      title: "상품",
      image: "/images/Item.png",
      description: "상품 목록, 상세 조회, 옵션 선택, 카테고리 기반 탐색과 검색 흐름을 설계했습니다.",
    },
    {
      title: "쿠폰",
      image: "/images/Coupon.png",
      description: "쿠폰 등록, 관리, 사용 조건 확인과 주문 금액 기반 할인 적용 흐름을 구현했습니다.",
    },
    {
      title: "주문/결제",
      image: "/images/Order.png",
      description: "주문 생성, 결제 수단 선택, 빌링키 기반 결제, 주문 취소와 결제 취소 흐름을 연결했습니다.",
    },
    {
      title: "장바구니/찜/리뷰",
      image: "/images/Cart.png",
      description: "장바구니 수량 변경, 상품 찜, 리뷰 작성/조회 등 구매 전후 사용자 행동을 구현했습니다.",
    },
  ],
  screens: [
    {
      title: "메인 및 로그인",
      image: "/images/main-screen.png",
      description: "메인 화면, 회원가입, 로그인 진입 흐름을 설계했습니다.",
    },
    {
      title: "상품 목록 및 상세",
      image: "/images/item-screen.png",
      description: "카테고리별 상품 목록과 상품 상세 화면의 핵심 UI 흐름입니다.",
    },
    {
      title: "주문 및 결제",
      image: "/images/order-screen.png",
      description: "상품 주문, 쿠폰 선택, 배송지, 결제 수단을 연결한 주문 화면입니다.",
    },
    {
      title: "결제 수단",
      image: "/images/billingkey-screen.png",
      description: "카드 정보를 등록하고 결제 수단 목록을 관리하는 화면입니다.",
    },
    {
      title: "쿠폰",
      image: "/images/coupon-screen.png",
      description: "쿠폰 발급과 보유 쿠폰 목록을 확인하는 화면입니다.",
    },
  ],
  flows: [
    {
      title: "메인 페이지",
      images: ["/images/Fashionmall_Main.png"],
      description:
        "우측 상단의 로그인, 장바구니, 카테고리 영역, 최근 등록 상품 영역을 통해 쇼핑몰의 기본 탐색 흐름을 구성했습니다.",
    },
    {
      title: "로그인 / 회원가입",
      images: ["/images/loginNsignUp.png"],
      description:
        "이메일과 비밀번호 기반 로그인, 회원가입 진입을 제공하고 이후 주문/마이페이지 기능과 연결되는 인증 흐름을 구성했습니다.",
    },
    {
      title: "상품 목록과 상세",
      images: ["/images/Item_Main.png", "/images/Item_Detail.png"],
      description:
        "상품 이미지, 상품명, 가격, 옵션, 수량 선택, 장바구니 담기, 찜, 리뷰 영역까지 구매 전환에 필요한 화면을 구성했습니다.",
    },
    {
      title: "장바구니와 주문",
      images: ["/images/cartPage.png", "/images/orderPage.png"],
      description:
        "장바구니에서 상품 수량을 조정하고 주문 화면에서 쿠폰, 결제 수단, 배송지를 선택해 최종 결제 금액을 확인하도록 구현했습니다.",
    },
    {
      title: "주문 내역과 취소",
      images: ["/images/orderList.png", "/images/orderDetail.png", "/images/orderCancel.png"],
      description:
        "주문번호, 주문일, 주문 상태, 결제 금액을 확인하고 주문 상세에서 취소 요청 시 결제 취소까지 이어지도록 구현했습니다.",
    },
    {
      title: "결제 수단과 배송지",
      images: ["/images/billingKeyList.png", "/images/Address.png"],
      description:
        "포트원 API 기반 빌링키 등록과 카카오 지도 API 기반 주소 검색으로 결제/배송 정보를 관리했습니다.",
    },
  ],
  dbImage: "/images/DB_final.png",
  troubleshooting: [
    {
      title: "WebClient 응답 제네릭 타입 처리",
      goal:
        "공통 응답 구조 CommonResponse<T>를 사용하는 API 호출 모듈을 만들고 다양한 응답 타입을 일관되게 처리하려고 했습니다.",
      problem:
        "Class<T> 기반으로 응답을 매핑하면 런타임 타입 소거 때문에 CommonResponse<List<ItemInfoResponseDto>> 같은 중첩 제네릭 정보를 유지할 수 없었습니다.",
      solution:
        "ParameterizedTypeReference를 사용해 런타임까지 구체 타입 정보를 유지하고 WebClient bodyToMono에 전달해 타입 안정성을 확보했습니다.",
      code: `ParameterizedTypeReference<CommonResponse<List<ItemInfoResponseDto>>> typeReference =
    new ParameterizedTypeReference<>() {};

CommonResponse<List<ItemInfoResponseDto>> response = webClientUtil.get(
    url,
    typeReference,
    headers(getAccessToken(request)),
    ErrorResponseCode.CLIENT_ERROR,
    ErrorResponseCode.SERVER_ERROR_FROM_SERVICE
);`,
    },
    {
      title: "Docker 기반 Blue/Green 무중단 배포",
      goal:
        "GitHub main 브랜치 merge 시 AWS EC2 서버에 자동 배포되는 CI/CD 파이프라인을 구성하고 배포 중 서비스 중단을 줄이고자 했습니다.",
      problem:
        "Docker Compose 서비스 중복 실행 제약과 이전 컨테이너/이미지 누적으로 인한 디스크 공간 부족 문제가 있었습니다.",
      solution:
        "Dockerfile 기반으로 Green/Blue 컨테이너를 직접 관리하고, CodeDeploy 배포 스크립트에서 헬스체크 후 트래픽 전환과 이전 리소스 정리를 수행했습니다.",
      images: [
        "/images/item_dockerfile.png",
        "/images/item_profile.png",
        "/images/item_deploy_CICD.png",
        "/images/item_start.png",
        "/images/item_health.png",
      ],
    },
  ],
  reflection:
    "첫 팀 프로젝트로 Java/Spring 기반 개발뿐 아니라 MSA 구조, 서비스 간 API 통신, 포트원 결제 API, AWS 배포, CI/CD와 무중단 배포까지 폭넓게 경험했습니다. 여러 변수와 오류를 팀원들과 함께 해결하며 협업 방식과 문제 해결 과정을 구체적으로 배울 수 있었고, 새로운 기술을 실제 서비스 흐름 안에서 익히는 계기가 됐습니다.",
};
