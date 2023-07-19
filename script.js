// script.js
const rotatingText = document.getElementById('rotating-text');
const skills = ['UX Designer', 'Frontend Developer', 'Backend Developer', 'Interactive Designer', 'UI Designer', 'Shoe Designer'];
let index = 0;

function rotateSkills() {
  rotatingText.textContent = skills[index];
  index = (index + 1) % skills.length;
}

setInterval(rotateSkills, 2000);


const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const darkMode = document.getElementById('dark-mode');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Check the initial mode and set the button text content accordingly
if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
  footer.classList.add('dark-mode');
  modeToggle.textContent = 'Light Mode';
} else {
  body.classList.remove('dark-mode');
  header.classList.remove('dark-mode');
  footer.classList.remove('dark-mode');
  modeToggle.textContent = 'Dark Mode';
}

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  
  // Update the button text content based on the current mode
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = 'Light Mode';
    localStorage.setItem('mode', 'dark');
  } else {
    modeToggle.textContent = 'Dark Mode';
    localStorage.setItem('mode', 'light');
  }
});

window.addEventListener('scroll', function() {
  const myWorkSection = document.getElementById('my-work');
  const myWorkContainer = document.querySelector('.my-work-container');
  const scrollPosition = myWorkSection.getBoundingClientRect().top;

  if (scrollPosition < window.innerHeight * 0.8) {
    myWorkContainer.style.transform = 'translateX(0)';
  } else {
    myWorkContainer.style.transform = 'translateX(-100%)';
  }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.querySelector('.answer').classList.toggle('show');
  });
});





