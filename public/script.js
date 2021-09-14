const theme = document.getElementById('theme-toggler');

theme.addEventListener('change', e => {
  document.getElementById('theme-circle').classList.toggle('translate-x-6');
});
