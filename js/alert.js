// Реализация появления alert-оповещения

// Устанавливаем элементу .alert-trigger, который должен вызывать оповещение

// data-alert-id — идентификатор уже реализованного уведомления
// data-content — пользовательское сообщение в оповещении, если не вызывается готовое
// data-style — стилизация оповещения (success, danger)

let
    // Время совершения предыдущего события (клика)
    lastAlertEventTime = 0,

    //
    arrayAlertTypes = new Map([
    [
        'cartDanger',
        [
            'danger',
            '<h6 class="page-heading">' +
                'Недостаточно места в инвентаре' +
            '</h6>'
        ]
    ],
    [
        'cartSuccess',
        [
            'success',
            '<h6 class="page-heading">' +
                '<span class="text text_style-dark-green text_style-noshadow">' +
                    'Предмет добавлен в инвентарь' +
                '</span>' +
            '</h6>'
        ]
    ]
]);

// Обработчик на документе, отслеживающий клик по элементу с нужным классом
document.addEventListener('click', (e) =>{
    if(
        // Если клик не на alert-trigger, то завершение скрипта
        !e.target.classList.contains('alert-trigger')
    ) return -1;

    // Устанавливаем задержку между событиями (кликами)
    // Чтобы все анимации успели завершиться и не были рваными
    if(
        // Если между предыдущим и текущим кликом прошло меньше 200ms
        // То проверка завершает скрипт
        (new Date().getTime() - lastAlertEventTime) <= 200
    ) return -1;

    // Переназначаем переменной текущее время в UNIX-формате, когда срабатывает событие (клик)
    lastAlertEventTime = new Date().getTime();

    // Сбрасываем возможное выполнение чего угодно другого
    e.preventDefault();

    const
        // Проверка на контейнер/дочерний элемент
        // e.target - это элемент, на который произведен клик
        item = (e.target.classList.contains('alert-trigger'))
            ? e.target
                : e.target.closest('.alert-trigger'),

        // ID оповещения
        alertId = item.dataset.alertId,
        // Содержание оповещения
        alertContent = item.dataset.content,
        // Стиль оповещения (success, danger etc)
        alertStyle = item.dataset.style,

        // Получаем последний активный элемент с оповещением
        lastAlert = document.querySelectorAll('.alert:last-of-type')[0],

        // Функция для закрытия
        alertHide = (item) => {
            item.style.cssText =
                'opacity: 0;' +
                'top: 133px;'
            ;
            setTimeout(() => {
                item.remove();
            }, 200);
        },

        // Инициализация содержимого в оповещении
        alertContentInit = (id = null, content, style) => {
            // Если указано ID, то оно вызывается в первую очередь
            // А остальные данные игнорируются
            if(id !== null) {
                return `<div class="alert alert_${arrayAlertTypes.get(id)[0]}">
                           <div class="alert-content">${arrayAlertTypes.get(id)[1]}</div>
                        </div>`
            }
            // В ином случае используются данные из двух других аттрибутов
            else{
                return `<div class="alert alert_${style}">
                           <div class="alert-content">${content}</div>
                        </div>`
            }
        };

    // Проверка на наличие незакрытого оповещения
    // Если проверка проходит, то он закрывается автоматически сразу же
    // Чтобы избежать наслоения оповещений друг на друга
    if(lastAlert) alertHide(lastAlert)

    // Вставляем новое оповещение в конец документа
    document.body.insertAdjacentHTML(
        'beforeend',
         alertContentInit(
                   alertId,
                   alertContent,
                   alertStyle
               )
    );

    // Получаем контейнер с новым оповещением
    const currentAlert = document.querySelectorAll('.alert:last-of-type')[0];

    // Ставим таймер на автоматическое закрытие оповещения через 7 секунд
    setTimeout(() => {
        alertHide(currentAlert)
    }, 7000);

});