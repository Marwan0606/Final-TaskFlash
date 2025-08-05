// Sidebar hover expansion (CSS already handles expand, this is optional delay logic)
const sidebar = document.getElementById('sidebar');
let collapseTimeout;

sidebar.addEventListener('mouseenter', () => {
  clearTimeout(collapseTimeout);
  sidebar.classList.add('expanded'); // optional if you want JS class control
});
sidebar.addEventListener('mouseleave', () => {
  collapseTimeout = setTimeout(() => {
    sidebar.classList.remove('expanded');
  }, 100);
});

// Modal for new task
const newTaskBtn = document.getElementById('new-task-btn');
const backdrop = document.getElementById('modal-backdrop');
const closeModal = document.getElementById('close-modal');
const submitTask = document.getElementById('submit-task');

function openModal() {
  backdrop.classList.add('active');
}
function close() {
  backdrop.classList.remove('active');
}

newTaskBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) close();
});
submitTask.addEventListener('click', () => {
  // placeholder: would submit form
  alert('Task posted (stub).');
  close();
});
