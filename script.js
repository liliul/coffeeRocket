var mudarImg = document.getElementById('mudarImg')

function myFunction() {
  var x = document.getElementById("navv");
  if (x.style.display === 'none') {
    x.style.display = "block";
    mudarImg.src='./assets/menu-buguer-close.svg'

  } else {
    x.style.display = "none";
    mudarImg.src='./assets/menu-buguer-open.svg'
  }
}
