// Генератор случайных чисел
const randomNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min),
      checked = 'overlay-check'; // Класс открытия оверлея

/*document.getElementById('overlayClose').onclick = (e) => {
    document.body.classList.remove(checked);
};
document.getElementById('overlay').onclick = (e) => {
    document.body.classList.add(checked);
};*/

// Обработчик кликов для открытия/закрытия главного меню
document.body.onclick = (e) => {
    switch(e.target.id){
        case "overlay":
            document.body.classList.toggle(checked);
            break;
        case "overlayClose":
            document.body.classList.remove(checked);
            break;
    }
};