// 네비게이션 바 및 버튼 요소 선택
const sidebar = document.getElementById('sidebar');
const toggleButton = document.querySelector('.navbar-toggler');

// 네비게이션 토글 동작
toggleButton.addEventListener('click', () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        sidebar.classList.toggle('active');
        toggleBodyScroll(sidebar.classList.contains('active'));
    }
});

// 스크롤 방지 함수
function toggleBodyScroll(isSidebarActive) {
    if (isSidebarActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// 윈도우 크기 변경 이벤트: 사이드바 상태 초기화
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        sidebar.classList.add('active');
        document.body.style.overflow = '';
    } else {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
    }
});