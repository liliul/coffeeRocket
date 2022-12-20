const mudarImg = document.getElementById('mudarImg')

function handleMenu() {
  let open = document.getElementById("openMenu");
  
  if (open.style.display === 'block') {

      open.style.display = "none";
      mudarImg.src='./assets/menu-buguer-open.svg'

      document.body.style.overflow = 'visible'

  } else {  
    
    open.style.display = "block";
    mudarImg.src='./assets/menu-buguer-close.svg'
    document.body.style.overflow='hidden'
  }
}
