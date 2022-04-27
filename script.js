function menuToglle(){
    let menu = document.querySelector('.menu-open');
    let busca = document.querySelector('.header--search');

    if (menu.classList.contains('menuopened') == true ){
        menu.classList.remove('menuopened');
        busca.classList.remove('chegaprala');
    }else{
        menu.classList.add('menuopened');
        busca.classList.add('chegaprala');
    }
}