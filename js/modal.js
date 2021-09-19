// Реализация модальных окон
//
// Элементу, который должен вызывать модальное окно
// добавляем класс modal-trigger
//
let modalTrigger = document.querySelectorAll('.modal-trigger'),
    modalChecked = 'modal-checked'; // Класс отображения модального окна

// Переключение модального окна (показать/скрыть)
const modalToggle = (value = null) => {
    // Контейнер модального окна (если есть)
    let modalWrapper = document.getElementsByClassName('modal')[0];

    // Отключаем отображение модального окна (если есть)
    document.body.classList.remove(modalChecked);

    // Если в функцию ничего не передано, то вызов модального окна не требуется
    // И выполнение функции прекратится
    if(value === null) return false;

    // Открываем запрос
    let request = new XMLHttpRequest();
    request.open('GET', `modal/${value}.html`);

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
}

document.body.onclick = (e) => {
    let item = e.target;

    // Если клик по контейнеру modal или по любому внутреннему элементу
    if(item.classList.contains('modal') || !!item.closest('.modal')) {
        // Проверка, осуществлён ли клик вне окна с контентом модалки
        if(
            // Инвертируем boolean-значение

            // Если клик сделан внутри окна, то значение будет TRUE, но мы закрываем окно только при клике
            // За пределами окна, потому мы инвертируем значение на FALSE и проверка не проходит

            // Если клик сделан вне окна, то значит будет FALSE, которое инвертируется на TRUE
            // Проверка срабатывается и окно закрывается
            !(
                // Если клик по modal-area (окно с контентом модалки)
                item.classList.contains('modal-area')
                // или
                ||
                // По любому внутреннему элементу modal-area
                !!item.closest('.modal-area')
            )
        ) {
            // Проверка инвертирована, потому если клик будет сделан вне модального окна
            // То FALSE станет TRUE, проверка сработает и модальное окно закроется
            modalToggle();
        }
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

        // Получаем название модалки, которую нужно вызвать
        let modalName = item.dataset.modalName;

        // Вызываем модалку
        modalToggle(modalName);
    }
};