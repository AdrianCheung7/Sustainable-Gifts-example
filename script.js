function expandBar() {
  const topBar = document.querySelector('.top-bar');
  topBar.classList.toggle('expanded');
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.product-section');
  const topBar = document.querySelector('.top-bar');
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY + window.innerHeight > sectionTop + sectionHeight / 4) {
      section.style.opacity = 1;
    } else {
      section.style.opacity = 0;
    }
  });

  if (scrollY > 100) {
    topBar.style.opacity = 0;
  } else {
    topBar.style.opacity = 1;
  }
});
