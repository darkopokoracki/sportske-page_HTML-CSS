let drop = document.getElementById('drop');
let burgerMenu = document.getElementById('burger-menu');
let mobileNavContainer = document.querySelector('.mobile-nav-container');
let secondMobileList = document.querySelector('.second-mobile-list');
let closeBtn = document.querySelector('.mobile-search-container i');


function openFirstMenu() {
    mobileNavContainer.classList.remove('hide');
}

function openSecondMenu() {
    secondMobileList.classList.toggle('hide');
}

function closeFirstMenu() {
    mobileNavContainer.classList.add('hide');
}


burgerMenu.addEventListener('click', openFirstMenu);
drop.addEventListener('click', openSecondMenu);
closeBtn.addEventListener('click', closeFirstMenu);