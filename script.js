
document.querySelectorAll('.lectures').forEach(lectures => {
    const description = lectures.querySelector('p');
    lectures.addEventListener('mouseenter', () => {
      description.style.display = 'block';
    });
    lectures.addEventListener('mouseleave', () => {
      description.style.display = 'none';
    });
  });