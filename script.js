const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile')
