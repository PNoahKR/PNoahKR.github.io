document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const toggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // 토글 버튼 클릭 시 네비게이션 바 열기/닫기
    toggler.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");

        // 네비게이션 바 열릴 때 토글 버튼 숨기기
        if (sidebar.classList.contains("active")) {
            toggler.style.display = "none";
        }
    });

    // Overlay 클릭 시 네비게이션 바 닫기
    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");

        // 네비게이션 바 닫힐 때 토글 버튼 다시 표시
        toggler.style.display = "block";
    });

    // 스크롤 이벤트 처리 함수
    function handleScroll() {
        let currentSection = "";

        sections.forEach((section) => {
            // 각 섹션의 위치를 확인
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // 섹션의 상단이 현재 화면의 상단보다 크고, 섹션 하단이 화면의 상단보다 작은지 체크
            if (pageYOffset >= sectionTop - sectionHeight / 3 && pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // 모든 링크에서 'active' 클래스 제거
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });

        // 현재 섹션에 해당하는 네비게이션 링크에 'active' 클래스 추가
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 페이지 로드 시 바로 한 번 처리하여 초기 상태 설정
    handleScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".welcome-message");
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = 1;
        }, index * 1000); // 1초 간격으로 문구 표시
    });
});

function toggleDetails(button) {
    const details = button.nextElementSibling; // 버튼의 다음 요소 (details)

    if (details.style.height && details.style.height !== "0px") {
        // 아이템 박스 닫기
        details.style.height = "0px";
        details.style.opacity = "0"; // 투명도 변경
        setTimeout(() => {
            details.style.display = "none"; // 애니메이션 후 display:none 처리
        }, 300); // transition 시간과 동일하게 설정
    } else {
        // 아이템 박스 열기
        details.style.display = "flex"; // flex로 표시
        const fullHeight = details.scrollHeight + "px"; // 내용의 전체 높이 계산
        details.style.height = "0px"; // 높이를 0으로 설정한 뒤
        details.style.opacity = "0";
        setTimeout(() => {
            details.style.height = fullHeight; // 실제 높이로 변경
            details.style.opacity = "1"; // 투명도 변경
        }, 10); // display:flex 적용 후에 실행되도록 약간의 지연
    }
}