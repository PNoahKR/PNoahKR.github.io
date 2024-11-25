document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // 오프셋 조정
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });

    // 메뉴 클릭 시 스무스 스크롤
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
