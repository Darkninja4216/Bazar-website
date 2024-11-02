document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "pop 0.5s ease forwards";
      } else {
        entry.target.style.animation = "none";
      }
    });
  }, options);

  menuItems.forEach(item => {
    observer.observe(item);
  });
});
