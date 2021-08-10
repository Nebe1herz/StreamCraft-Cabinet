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
    switch(e.key){
        case "Escape":
            overlayToggle();
            break;
    }
});

// Реализация тултипов
//
// Элементу, на который хотим повесить тултип
// добавляем класс tooltip-trigger
//
// data-title — заголовок тултипа
// data-meta — описание, текст в тултипа
// data-note — синяя нижняя строчка, заметка
//
let item = document.querySelectorAll('.tooltip-trigger');
// Работает хер знает как (с божьей помощью)
// Реализацию взял со своего старого проекта, вникать времени нет :-(
item.forEach((item) =>{
    // Получаем контейнер тултипа
    let tooltip = document.getElementsByClassName('tooltip')[0];

    // Накидываем события при наведении
    item.addEventListener('mouseover', () =>{
        // Заменяем содержание тултпиа на нужное
        const replaceText = (selector, value) => {
            // Для сокращения записи селектор элемента присваиваем переменной
            const item = tooltip.getElementsByClassName(`tooltip__${selector}`)[0];
            // Проверка на отсутствие значения
            if (value === undefined){
                // Если значение отсутствует, то полностью скрываем элемент
                // Чтобы в тексте не выводилось "undefined"
                item.style.display = 'none';
                // Сбарсываем переменную
                return false;
            }
            // Иначе проставляем display block
            // Чтобы отобразить элемент, если он был скрыт ранее
            item.style.display = 'block';
            // Присваиваем значение
            item.innerHTML = value
        }
        // Проставляем заголовок
        replaceText('title', item.dataset.title);
        // Описание (текст) в тултипе
        replaceText('row', item.dataset.row);
        // Синяя "заметка", самая нижняя строчка
        replaceText('meta', item.dataset.meta);
    });

    // Если мышь покинула элемент
    // Отключаем тултип
    item.addEventListener('mouseout', () =>{
        tooltip.style.display="none";
    });

    // Перемещение тултипа за мышью
    item.addEventListener('mousemove', (event) =>{
        let // Ширина тултипа
            tooltipWidth = tooltip.offsetWidth,
            // Ширина окна
            windowWidth = document.documentElement.clientWidth,
            // Координаты
            y = event.clientY,
            // Проверка на выход за пределы окна
            x = ((document.body.offsetWidth - event.clientX) > 350)
                ? event.clientX + 15
                : event.clientX - (tooltipWidth + 15);

        tooltip.style.cssText = `top:${y}px;left:${x}px`;
    });
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!! ОСТОРОЖНО, НИЖЕ ЛЮТЫЙ ГОВНОКОД !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let timerId = setTimeout(tick = () => {
    // Форматирование чисел на двузначный формат
    const numberFormat = (value) => (value < 10 && value >= 0)
        ? `0${value}` : value;
    // Селекторы
    let timerHour = document.getElementById('timerHour'),
        timerMin = document.getElementById('timerMin'),
        timerSec = document.getElementById('timerSec'),
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
// Реализация модальных окон
//
// Элементу, который должен вызывать модальное окно
// добавляем класс modal-trigger
//
let
    modalTrigger = document.querySelectorAll('.modal-trigger'),
    modalChecked = 'modal-checked'; // Класс отображения модального окна

// Переключение модального окна (показать/скрыть)
const modalToggle = (action, content = null) => {
    // Контейнер модального окна (если есть)
    let modalWrapper = document.getElementsByClassName('modal')[0];

    switch(action) {
        // Закрытие модального окна
        case 'close':
            document.body.classList.remove(modalChecked);
            break;

        case 'show':
            let request = new XMLHttpRequest();

            // Открываем запрос
            request.open('GET', `/StreamCraft Cabinet/${content}.html`);
            // Отслеживание
            request.onload = (e) => {
                // Проверка на готовность загрузки страницы
                if (request.readyState === 4) {
                    // Проверка успешности GET-запроса
                    switch(request.status) {
                        case 200:
                            modalWrapper.insertAdjacentHTML('afterend', request.responseText);
                            modalWrapper.remove();
                            setTimeout(() => document.body.classList.add(modalChecked), 10);
                            modalTrigger = document.querySelectorAll('.modal-trigger');
                            break;
                        default:
                            console.error(request.statusText)
                    }
                }
            };

            // Ловим ошибки
            request.onerror = () => console.error(request.statusText);
            request.send(null);
            break;
    }
}

document.body.onclick = (e) => {
    if(e.target.classList.contains('modal')) modalToggle('close');
};

// Работает с божьей помощью, но работает ;-)
modalTrigger.forEach((item) =>{
    item.onclick = (i) => {
        i.preventDefault();

        if(i.target.classList.contains('modal-trigger-close')) {
            modalToggle('close');
            return false;
        }

        let modalName = i.target.getAttribute('data-modal-name');
        modalToggle('show', modalName)

    };
});

//document.addEventListener("DOMContentLoaded", modalToggle('show', 'modal.privilege.legend'));