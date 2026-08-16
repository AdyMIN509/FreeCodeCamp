const btns = document.querySelectorAll(".favorite-icon");

console.dir(btns)

btns.forEach((btn) => btn.addEventListener('click', ()=>updateBtn(btn)));

function updateBtn(btn) {
  if (btn.classList.contains("filled")) {
    btn.innerHTML = "&#9825";
  } else {
    btn.innerHTML = "&#10084";
  }
  btn.classList.toggle("filled");
}