// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!! ОСТОРОЖНО, НИЖЕ ЛЮТЫЙ ГОВНОКОД !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Генератор случайных чисел
const randomNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min),
      checked = 'overlay-check'; // Класс открытия оверлея

// Обработчик кликов для открытия/закрытия главного меню
document.body.onclick = (e) => {
    switch(e.target.className){
        case 'overlay':
            document.body.classList.toggle(checked);
            break;
        case 'overlayClose':
            document.body.classList.remove(checked);
            break;
    }
};

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
    // Получаем контейнер тултипа по ID
    let tooltip = document.getElementById('tooltip');
    // Накидываем события при наведении
    item.addEventListener('mouseover', () =>{
        // Заменяем содержание тултпиа на нужное
        const replaceText = (selector, value) => {
            // Для сокразения записи селектор элемента присваиваем переменной
            const item = tooltip.getElementsByClassName(selector)[0];
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
        replaceText('meta', item.dataset.meta);
        // Синяя "заметка", самая нижняя строчка
        replaceText('note', item.dataset.note);
    });
    // Если мышь покинула элемент
    // Отключаем тултип
    item.addEventListener('mouseout', () =>{
        tooltip.style.display="none";
    });
    // Перемещение тултипа за мышью
    item.addEventListener('mousemove', (event) =>{
        let y = event.clientY,
            x = event.clientX + 15;
        tooltip.style.cssText = `top:${y}px;left:${x}px`;
    });
});