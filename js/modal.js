// Реализация модальных окон
//
// Элементу, который должен вызывать модальное окно
// добавляем класс modal-trigger
//
//
let modalTrigger = document.querySelectorAll('.modal-trigger');

// Работает с божьей помощью, но работает ;-)
modalTrigger.forEach((item) =>{
    item.onclick = (i) => {
        i.preventDefault();

        console.log(i.target.getAttribute('data-modal-name'));

        let request = new XMLHttpRequest();

        // Открываем запрос
        request.open('GET', '/[2021] SC Game Overlay/modal.donate.html');
        // Отслеживание
        request.onload = (e) => {
            // Проверка на готовность загрузки страницы
            if (request.readyState === 4) {
                // Проверка успешности GET-запроса
                switch(request.status) {
                    case 200:
                        //request.responseText
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