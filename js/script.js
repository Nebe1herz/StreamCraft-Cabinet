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

// Элементу, на который хотим повесить тултип добавляем класс tooltip-trigger

// data-title — заголовок тултипа
// data-meta — описание, текст в тултипа
// data-note — синяя нижняя строчка, заметка

// Обработчик на документе, отслеживающий наведение курсором мыши на любой элемент
document.addEventListener('mouseover', (e) =>{
    let // Получаем контейнер тултипа
        tooltip = document.getElementsByClassName('tooltip')[0],

        // Присваиваем переменной значение e.target
        // e.target - это элемент, на который наведён курсор мыши
        // Проверка на контейнер/дочерний элемент
        item = (e.target.classList.contains('tooltip-trigger'))
        ? e.target
        : e.target.closest('.tooltip-trigger');

    // Если наведение не на tooltip-trigger, то завершение скрипта
    if(!item.classList.contains('tooltip-trigger')) return false;

    // Функция для замены содержания элементов тултипа на указанное в tooltip-trigger
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

    // Если курсор мыши покинул элемент - отключаем тултип
    item.addEventListener('mouseout', () =>{
        tooltip.style.display="none";
    });

    // Перемещение тултипа за курсором мышимышью
    item.addEventListener('mousemove', (event) =>{
        let // Ширина тултипа
            tooltipWidth = tooltip.offsetWidth,

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
            request.open('GET', `/StreamCraft Cabinet/modal/${content}.html`);
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
    let item = e.target;

    // Если клик по контейнеру modal или по любому внутреннему элементу
    if(item.classList.contains('modal') || !!item.closest('.modal')) {
        if(
            // Если клик по modal-area (окно с контентом модалки)
            item.classList.contains('modal-area')
            // или
            ||
            // По любому внутреннему элементу modal-area
            !!item.closest('.modal-area')
            // То завершаем выполнение скрипт
        ) return false;

        // В ином случае закрываем модальное окно, поскольку если проверка не прошла
        // Значит клик осуществлён вне окна с контентом модалки
        modalToggle('close');
    }

    // Отработка открытия модалки по modal-trigger
    if(
        // Есть ли класс modal-trigger на элементе, по которому мы кликнули
        item.classList.contains('modal-trigger')
        // или
        ||
        // Является ли элемент, по которому мы кликнули, вложенным элементом в modal-trigger
        !!item.closest('.modal-trigger')
    ) {
        // Отключаем срабатывание любого другого события
        e.preventDefault();

        // Если клик сработал на дочернем компоненте
        // То переменной item переназначаем родительский элемент .modal-trigger
        if(item.closest('.modal-trigger')){
            item = item.closest('.modal-trigger');
        }

        // Проверка на наличие триггера для закрытия модалки
        if(item.classList.contains('modal-trigger-close')) {
            modalToggle('close');
            return false;
        }

        // Получаем название модалки, которую нужно вызвать
        let modalName = item.dataset.modalName;

        // Вызываем модалку
        modalToggle('show', modalName);
    }
};

//document.addEventListener("DOMContentLoaded", modalToggle('show', 'modal.case.legend'));