document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const toggler = document.querySelector(".navbar-toggler");

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
});
