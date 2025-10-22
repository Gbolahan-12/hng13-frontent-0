function updateTime() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000); // updates every second
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.nav-close');

// Open menu
toggleBtn.addEventListener('click', () => {
  navLinks.classList.add('show');
  toggleBtn.setAttribute('aria-expanded', 'true');
});

// Close menu
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  toggleBtn.setAttribute('aria-expanded', 'false');
});

// Optional: Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});
