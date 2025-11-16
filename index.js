const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('slide-in-left')) {
        entry.target.classList.add('animate-left');
      } else if (entry.target.classList.contains('slide-in-right')) {
        entry.target.classList.add('animate-right');
      } else if (entry.target.classList.contains('slide-in-bottom')) {
        entry.target.classList.add('animate-bottom');
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-bottom').forEach(el => {
  observer.observe(el);
});

document.querySelector("#myButton").addEventListener("click", function() {
  alert("Thank you for subscribing!");
});
