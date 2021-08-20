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