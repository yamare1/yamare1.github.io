// Wait for the window to load
window.addEventListener('load', () => {
  // Hide the loading spinner
  document.getElementById('loading-spinner').style.display = 'none';
  document.body.classList.add('loaded');
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme preference from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'slide',
  once: true,
});

// Projects Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      projects.forEach(project => {
          if (filter === 'all' || project.classList.contains(filter)) {
              project.classList.add('active');
          } else {
              project.classList.remove('active');
          }
      });

      // Update active button styles
      filterButtons.forEach(btn => btn.classList.remove('bg-blue-600'));
      button.classList.add('bg-blue-600');
  });
});

// Initialize Projects to show all on first load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.filter-btn[data-filter="all"]').click();
});

// Skills Chart using Chart.js
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
  type: 'radar',
  data: {
      labels: ['Python', 'Machine Learning', 'Data Analysis', 'AWS', 'SQL', 'Git', 'JavaScript', 'Selenium'],
      datasets: [{
          label: 'Skill Level (%)',
          data: [90, 85, 80, 75, 80, 70, 65, 60],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      }]
  },
  options: {
      responsive: true,
      scales: {
          r: {
              angleLines: { display: true },
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: {
                  stepSize: 20
              }
          }
      },
      plugins: {
          legend: {
              position: 'top',
          },
          tooltip: {
              callbacks: {
                  label: function(context) {
                      return context.label + ': ' + context.raw + '%';
                  }
              }
          }
      }
  }
});