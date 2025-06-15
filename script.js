document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('move-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(
      '.contact-info h3, .contact-info p, .contact-details, .contact-form'
    )
    .forEach((el) => {
      el.classList.remove('move-in');
      observer.observe(el);
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.item-button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      toggleContent(button);
    });
  });
});

function toggleContent(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.icon');

  const isVisible = content.style.display === 'block';

  content.style.display = isVisible ? 'none' : 'block';
  icon.setAttribute('data-lucide', isVisible ? 'plus' : 'minus');
  lucide.createIcons(); // Re-render icons
}

lucide.createIcons();
