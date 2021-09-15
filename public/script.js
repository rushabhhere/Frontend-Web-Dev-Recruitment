const themeToggler = document.getElementById('theme-toggler');
const togglerCircle = document.getElementById('theme-circle');
const togglerLabel = document.getElementById('theme-toggler-label');

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark');
  themeToggler.checked = true;
} else {
  themeToggler.checked = false;
}

if (themeToggler.checked) {
  togglerCircle.classList.add('translate-x-6');
  togglerLabel.style.backgroundColor = '#CACFFF';
}

themeToggler.addEventListener('change', () => {
  togglerCircle.classList.toggle('translate-x-6');

  if (themeToggler.checked) {
    togglerLabel.style.backgroundColor = '#CACFFF';
    document.querySelector('html').classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    togglerLabel.style.backgroundColor = '#FFFFFF';
    document.querySelector('html').classList.remove('dark');
    localStorage.theme = 'light';
  }
});
