function setThemeClass(theme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
  

  const img = document.querySelector('.logo-combo');
  if (img) {
    img.src = theme === 'dark' 
    ? '/images/dark-logo-combo.png' 
    : '/images/light-logo-combo.png';
  }
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';
 
  setThemeClass(newTheme);

}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setThemeClass(savedTheme);

  // Este botón puede ser opcional: lo puedes incluir donde quieras
  const btn = document.getElementById('theme-toggle');
  console.log(btn);
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
});