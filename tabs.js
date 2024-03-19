document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('[data-twe-toggle="pill"]');
    tabs.forEach(tab => {
      tab.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("data-twe-target");
        const targetContent = document.getElementById(targetId);
        const allContents = document.querySelectorAll('[role="tabpanel"]');
        allContents.forEach(content => {
          content.classList.remove("opacity-100");
          content.classList.add("opacity-0");
        });
        targetContent.classList.remove("opacity-0");
        targetContent.classList.add("opacity-100");
      });
    });
  });
  