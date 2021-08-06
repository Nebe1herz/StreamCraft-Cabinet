// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!! ОСТОРОЖНО, НИЖЕ ЛЮТЫЙ ГОВНОКОД !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Генератор случайных чисел
const
    randomNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min),
    overlayChecked = 'overlay-checked'; // Класс открытия оверлея

// Обработчик кликов для открытия/закрытия главного меню
document.body.onclick = (e) => {
    switch(e.target.classList[0]){
        /*case 'overlay':
            document.body.classList.toggle(checked);
            break;*/
        case 'overlay_close':
            document.body.classList.remove(overlayChecked);
            break;
    }
};

// Обработчик нажатия клавиши Escape для открытия/закрытия главного меню
document.addEventListener('keydown', (e) => {
    switch(e.key){
        case "Escape":
            document.getElementsByClassName('overlay')[0].click();
            break;
    }
});
