fetch('bottom-bar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('bottom-bar-placeholder').innerHTML = html;

    const slider = document.getElementById('slider-indicator');
    const tabLinks = document.querySelectorAll('.bottom-bar a');

    tabLinks.forEach((link, index) => { //index here is the current position of the tablink being processed rn
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent instant jump

        slider.style.left = `${index * 20}%`;

        localStorage.setItem('activeTab', index);

        setTimeout(() => {
          window.location.href = link.getAttribute('href');
        }, 400);
      });
    });

    const savedIndex = localStorage.getItem('activeTab');
    if (savedIndex !== null) {
      slider.style.left = `${savedIndex * 20}%`;
    }
  });

