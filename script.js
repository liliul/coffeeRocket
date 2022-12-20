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















// var mudarImg = document.getElementById('mudarImg')
//      console.log(mudarImg)

// var navv = document.getElementById('navv')

// var menu= document.querySelector('.menu')
// var open = document.querySelector('.open')
// var close = document.querySelector('.close')

// open.addEventListener('click', function() {
//      menu.classList.add('open')
//      mudarImg.src = './assets/menu-buguer-close.svg'
// })
// close.addEventListener('click', function() {
//      navv.classList.add('close')
//      mudarImg.src='./assets/menu-buguer-open.svg'
// })

// function ocultar(idObj){
//      var obj=document.getElementById(idObj).hidden=true;

//       mudarImg.src = './assets/menu-buguer-open.svg'
// }



// function mostrar(idObj){
//      var obj=document.getElementById(idObj).hidden=false;

//      mudarImg.src = './assets/menu-buguer-close.svg'
    
// }