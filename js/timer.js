// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!! ОСТОРОЖНО, НИЖЕ ЛЮТЫЙ ГОВНОКОД !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let timerId = setTimeout(tick = () => {

    // Форматирование чисел на двузначный формат
    const getById = (id) => document.getElementById(id),
        numberFormat = (value) => (value < 10 && value >= 0)
        ? `0${value}` : value;

    // Проверка на наличие таймера на странице
    // Чтобы не выполнялись все последующие запросы
    // Если он на странице не предусмотрен
    if(!getById('timerHour')) return -1;

    // Селекторы
    let timerHour = getById('timerHour'),
        timerMin = getById('timerMin'),
        timerSec = getById('timerSec'),
        // Приведение к числовому значению ("+" при присовении)
        h = +timerHour.innerText,
        m = +timerMin.innerText,
        s = +timerSec.innerText;

    // Если минуты и секунды === 0
    if (m < 1 && s < 1) {
        // Минусуем один час
        timerHour.innerText = numberFormat(--h);
        // Сбрасываем обратно до 60 минут
        m = 60;
    }

    // Если секунды === 0
    if (s < 1) {
        // Минусуем одну минуту
        timerMin.innerText = numberFormat(--m);
        // Сбрасываем обратно до 60 секунд
        s = 60;
    }

    // Минусуем одну секунду
    timerSec.innerText = numberFormat(--s);

    // Проверка на завершенность таймера
    // Если везде всё по нулям, то досрочно завершаем функцию
    // Тем самым не выполнится повторный вызов таймера
    // И рекурсия будет прервана
    if(h < 1 && m < 1 && s < 1) return false;

    // Повторный вызов функции для зацикливания таймера
    timerId = setTimeout(tick, 1000); // (*)

}, 1000);