// Sidebar expand on hover with smooth transition
const sidebar = document.getElementById('sidebar');
let expandTimeout;

sidebar.addEventListener('mouseenter', () => {
  clearTimeout(expandTimeout);
  sidebar.classList.add('expanded');
});
sidebar.addEventListener('mouseleave', () => {
  expandTimeout = setTimeout(() => {
    sidebar.classList.remove('expanded');
  }, 100);
});
