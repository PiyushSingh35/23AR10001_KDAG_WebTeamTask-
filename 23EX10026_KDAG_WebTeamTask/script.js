function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.classList.add('active');
    }
  }
  
  function toggleDays(weekId) {
    const week = document.getElementById(weekId);
    if (week) {
      week.style.display = week.style.display === 'none' ? 'block' : 'none';
    }
  }
  
  // Initial setup to show the first content section
  document.addEventListener('DOMContentLoaded', () => {
    showContent('course-content');
  });
