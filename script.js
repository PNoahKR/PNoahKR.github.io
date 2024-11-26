// 네비게이션 바 및 버튼 요소 선택
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.navbar-toggler');

// 토글 동작
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});