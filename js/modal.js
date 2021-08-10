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