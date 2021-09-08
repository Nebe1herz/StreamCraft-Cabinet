// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!! ОСТОРОЖНО, НИЖЕ ЛЮТЫЙ ГОВНОКОД !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Генератор случайных чисел
const
    randomNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min),
    overlayToggle = () => document.body.classList.toggle(overlayChecked),
    overlayChecked = 'overlay-checked'; // Класс открытия оверлея

// Обработчик кликов для открытия/закрытия главного меню
document.body.onclick = (e) => {
    switch(e.target.classList[0]){
        /*case 'overlay':
            document.body.classList.toggle(checked);
            break;*/
        case 'overlay-close':
            document.body.classList.remove(overlayChecked);
            break;
    }
};

// Обработчик нажатия клавиши Escape для открытия/закрытия главного меню
document.addEventListener('keydown', (e) => {
    console.log(e.key)
    switch(e.key){
        case 'r':
        case 'R':
            alert(`Testing`);
            break;
        case "Escape":
            if(document.body.classList.contains(modalChecked)){
                document.body.classList.remove(modalChecked);
                return false;
            }
            overlayToggle();
            break;
    }
});
