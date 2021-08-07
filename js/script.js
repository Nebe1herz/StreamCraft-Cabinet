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
            modalWrapper.insertAdjacentHTML('afterend', content);
            modalWrapper.remove();
            setTimeout(() => document.body.classList.add(modalChecked), 10);
            modalTrigger = document.querySelectorAll('.modal-trigger');
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

        let request = new XMLHttpRequest(),
            modalName = i.target.getAttribute('data-modal-name');

        // Открываем запрос
        request.open('GET', `/[2021] SC Game Overlay/${modalName}.html`);
        // Отслеживание
        request.onload = (e) => {
            // Проверка на готовность загрузки страницы
            if (request.readyState === 4) {
                // Проверка успешности GET-запроса
                switch(request.status) {
                    case 200:
                        modalToggle('show', request.responseText)
                        break;
                    default:
                        console.error(request.statusText)
                }
            }
        };

        // Ловим ошибки
        request.onerror = () => console.error(request.statusText);
        request.send(null);
    };
});