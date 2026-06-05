document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const mainContent = document.getElementById("main-content");
    const links = document.querySelectorAll("#sidebar a"); 
    const sections = document.querySelectorAll("section");

    // Mobile Menu Toggle
    if(toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            const icon = toggleBtn.querySelector('i');
            if(sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close sidebar on mobile when clicking outside
    mainContent.addEventListener("click", function () {
        if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
            const icon = toggleBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Active Link Highlighting on Scroll
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjustment for offset
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

});

// Global function for Troubleshooting Accordion
function toggleProps(button) {
    button.classList.toggle("active");
    var content = button.nextElementSibling; // .accordion-body
    
    // Toggle Max Height for smooth slide
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
        content.style.paddingTop = "0px";
        content.style.paddingBottom = "0px";
    } else {
        content.style.maxHeight = content.scrollHeight + 40 + "px"; // + padding
        content.style.paddingTop = "10px";
        content.style.paddingBottom = "10px";
    }
    
    // Rotate Icon if present
    const icon = button.querySelector('i');
    if(icon) {
        icon.style.transform = button.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)";
        icon.style.transition = "transform 0.3s";
    }
}