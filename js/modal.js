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


        let modalName = i.target.getAttribute('data-modal-name');
        modalToggle('show', modalName)

    };
});

//document.addEventListener("DOMContentLoaded", modalToggle('show', 'modal.privilege.legend'));