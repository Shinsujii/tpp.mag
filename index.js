document.getElementById("menu-toggle").addEventListener("click", function (e) {
  e.preventDefault();
  const menus = document.querySelectorAll(".toggle-menu");
  menus.forEach(menu => {
    menu.classList.toggle("show");
  });
});
// 손
  const matchBtn = document.getElementById('match-btn');
  const notMatchBtn = document.getElementById('not-match-btn');
  const okDiv = document.querySelector('.ok');
  const mag1 = document.querySelector('.mag1');
  const mag2 = document.querySelector('.mag2');

  matchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mag2.style.display = 'none';
    mag1.style.display = 'block';
    okDiv.style.display = 'block';
  });

  notMatchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mag2.style.display = 'block';
    mag1.style.display = 'none';
    okDiv.style.display = 'none';
  });