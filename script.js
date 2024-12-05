document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const mainContent = document.getElementById("main-content");
    const links = document.querySelectorAll("#sidebar a"); // 사이드바 링크들
    const sections = document.querySelectorAll("section"); // 섹션들

    // 토글 버튼 클릭 시 사이드바 열기/닫기
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        // 사이드바가 열리면 토글 버튼의 색상 변경
        if (sidebar.classList.contains("active")) {
            toggleBtn.style.color = 'white'; // 색상 변경
        } else {
            toggleBtn.style.color = 'black'; // 색상 원래대로
        }
    });

    // 모바일에서 메인 컨텐츠 클릭 시 사이드바 닫기
    mainContent.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("active");
            toggleBtn.style.color = 'black'; // 사이드바 닫히면 색상 원래대로
        }
    });

    // 스크롤 시 섹션에 맞는 링크에 active 클래스 추가
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });

        // 스크롤 시 토글 버튼 숨기기/보이기
        let lastScrollTop = 0;
        const toggleButton = document.getElementById("toggleBtn");
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            toggleButton.classList.add("hidden"); // 아래로 스크롤하면 숨기기
        } else {
            toggleButton.classList.remove("hidden"); // 위로 스크롤하면 보이기
        }
        lastScrollTop = scrollTop;
    });
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