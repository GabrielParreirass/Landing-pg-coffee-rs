
function showMenu(e){
    let btnOpen = document.getElementById('btn-open')
    let btnClose = document.getElementById('btn-close')
    let menu = document.getElementById('menu-mobile')

    menu.classList.toggle('desapear')
    btnOpen.classList.toggle("appear");
    btnClose.classList.toggle("appear")
}

function hideMenu(e){
    let btnOpen = document.getElementById('btn-open')
    let btnClose = document.getElementById('btn-close')
    let menu = document.getElementById('menu-mobile')
   
    menu.classList.toggle('desapear')
    btnOpen.classList.toggle("appear");
    btnClose.classList.toggle("appear");

}


