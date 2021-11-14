// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!! ОСТОРОЖНО, НИЖЕ ЛЮТЫЙ ГОВНОКОД !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const
    // Массив с никнеймами пользователей
    nicknameArray = [
            'AMIR321',
            'Dag2',
            'Sun_Ray',
            'Stawlie',
            'zoromanuy',
            'MrKapral',
            'Timeran',
            'RahaMilopNo',
            'Darkness33',
            'PycckuuLol228',
            'Beasi',
            'xPAPECHx',
            'Mal4ik_Semen',
            '_Malina1703_',
            'autodrel',
            'egorka3434',
            'Astalawista',
            'AlexSuperWorld',
            'Dendi5128',
            'Malminar',
            'Wegerom',
            'jur012',
            'Kyanete',
            'MrFortex',
            'PVOsistem',
            'YourDream',
            'Cessabit',
            'Makcym_Petuxov',
            'AMIR321',
            'Cutterman',
            '3Y6acTbIu',
            'Temo4chka',
            'Warre',
            'Ochkee',
            'FlipSize',
            'Mechanist',
            'dimiron',
            'BigRed',
            'Foxy9_YT',
            'Bing',
            'SavvaMura',
            'vit2001xd',
            'Patrick_2000',
            'Troll2032',
            '_Wegge_',
            'playjeger1337',
            'diler137',
            'Victorius',
            'mrs_Asia',
            'krabuik',
            '_Sandro_',
            'sasha6886',
            'CompLexity',
            'Google',
            'PoSTrA',
            'Yandex',
            'Feni4_',
            'Julia_Butterfly',
            'Blazer008',
            'Miks4277',
            'RomanKekistan',
            '0angel_of_death0',
            'Zebra1598',
            'MArkGamer',
            'Freedrikson',
            'foxfyz',
            'zevsbro001',
            'SnowlyS',
            'artemiu15',
            'MkZet',
            'ShTaTuS',
            'FairMont',
            'soinik',
            'VMXpocBMX',
            'Enzis',
            'TROJ',
            'Zaknafein',
            'ImmortalLove',
            'Sterix',
            'Monsterjam777',
            'ListMen228',
            'Prototype',
            'Antonitor',
            'etutaev',
            'Toulouse',
            'Nikit11',
            'Chit',
            'Krasilov2003',
            'Fayans',
            'mrdmitriy1337',
            'Asterra',
            'divainpro',
            'Sanya00',
            'Flamess',
            'Wikusikrasotka',
            'giogio123',
            'Lublukrolikov',
            'Bing',
            'pavil',
            'YFoxTest2',
            '3Jlou4eLoVeK',
            'BukaBuka',
            'CreeperStone',
            '_Wegge_',
            '9_ne_robot',
            '_Sandro_',
            'Lime_The_Fan',
            'xAgare',
            'TheIngin',
            'LaGGeRNaFeeD',
            'BoomZoom',
            'Bazhen',
            'Gdasik',
            'Mega_Gaster',
            'gleb9012'
    ],

    // Генератор случайных чисел
    randomNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min),
    // Функция установки фонового изображения
    bodyImageInit = (i) => document.body.style.cssText =`--image: url('../images/game/${i}.png')`,

    // Класс открытия оверлея
    overlayChecked = 'overlay-checked',
    // Функция для открытия/закрытия оверлея
    overlayToggle = () => document.body.classList.toggle(overlayChecked)
;

// Проверка на наличие переменной в localStorage
if(localStorage['bodyImage'] === undefined) localStorage['bodyImage'] = 1;
// Инициализация фона
bodyImageInit(localStorage['bodyImage'])

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

// Обработчик нажатий на клавиши клавиатуры
document.addEventListener('keydown', (e) => {
    switch(e.code){
        // Клавиша Q для переключения вкладки назад
        case 'KeyQ':
            document.body.getElementsByClassName('nav-item_role-control')[0].click();
            break;

        // Клавиша E для переключения вкладки вперёд
        case 'KeyE':
            document.body.getElementsByClassName('nav-item_role-control')[1].click();
            break;

        // Клавиша R для переключения фона
        case 'KeyR':
            // С каждым нажатием на R мы увеличиваем число на 1
            // То есть текущее значение + 1
            localStorage['bodyImage'] =
                // Перед переназначением мы ставим проверку на максимальное количество
                // Фонов всего 18 штук, значит если их больше, то мы возвращаемся в значению 1
                (++localStorage['bodyImage'] < 19)
                        ? localStorage['bodyImage'] : 1;
            // Инициализируем фон
            bodyImageInit(localStorage['bodyImage']);
            break;

        // Клавиша Esc для закрытия или открытия интерфейса
        case "Escape":
            if(document.body.classList.contains(modalChecked)){
                document.body.classList.remove(modalChecked);
                return false;
            }
            overlayToggle();
            break;
    }
});

// Реализация появления alert-оповещения

// Элемент, который должен вызывать опощвение, назначем alert-trigger

// data-alert-id — идентификатор уже реализованного уведомления
// data-alert — пользовательское сообщение в оповещении, если не вызывается готовое
// data-style — стилизация алерта (success, danger)

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
// Реализация тултипов (всплывающих подсказок)

// Элементу, на который хотим повесить тултип добавляем класс tooltip-trigger

// data-title — заголовок тултипа
// data-meta — описание, текст в тултипа
// data-note — синяя нижняя строчка, заметка

// Обработчик на документе, отслеживающий наведение курсором мыши на любой элемент
document.addEventListener('mouseover', (e) =>{
    // Если наведение не на tooltip-trigger, то завершение скрипта
    if(!e.target.classList.contains('tooltip-trigger')) return -1;

    let // Получаем контейнер тултипа
        tooltip = document.getElementsByClassName('tooltip')[0],

        // Присваиваем переменной значение e.target
        // e.target - это элемент, на который наведён курсор мыши
        // Проверка на контейнер/дочерний элемент
        item = (e.target.classList.contains('tooltip-trigger'))
            ? e.target
                 : e.target.closest('.tooltip-trigger');

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
            return -1;
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
    const getById = (id) => document.getElementById(id),
        numberFormat = (value) => (value < 10 && value >= 0)
        ? `0${value}` : value;

    // Проверка на наличие таймера на странице
    // Чтобы не выполнялись все последующие запросы
    // Если он на странице не предусмотрен
    if(!getById('timerHour')) return -1;

    // Селекторы
    let timerHour = getById('timerHour'),
        timerMin = getById('timerMin'),
        timerSec = getById('timerSec'),
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
// Назначаем обработчик кликов элементу
document.addEventListener('click', (e) => {
    // Контейнер со вкладками
    let listTrigger = e.target.closest('.list-trigger');

    // Проверка, если клик осуществлён в другом месте
    if (!listTrigger) return -1;

    // Отключаем другие события (переход по ссылке)
    e.preventDefault();

    // Получаем класс, который у всех вкладок, которые мы будем менять
    let triggerClass = listTrigger.dataset.trigger,
        triggerClassReload = listTrigger.dataset.triggerReload;

    // Проверка, если клик совершен не по карточке с нужным классом
    if(!e.target.classList.contains(triggerClass)) return false;

    // Убираем checked состояние у всех остальных вкладок
    document.getElementsByClassName(`${triggerClass}_checked`)[0].classList.remove(`${triggerClass}_checked`)

    // Текущей активной вкладке добавляем класс checked
    e.target.classList.add(`${triggerClass}_checked`);

    // Перезагружаем анимацию у списка
    // Сначала удаляем класс, отвечающий за анимацию
    document.getElementsByClassName(triggerClassReload)[0].classList.remove('animate-list');
    // Задержка перед выполнением скрипта 50 мс
    setTimeout(() =>{
        // Установка элементу класса заново
        document.getElementsByClassName(triggerClassReload)[0].classList.add('animate-list');
    }, 50)
});

const
    // Контейнер основной страницы, где функционирует вертикальная прокрутка
    page = document.getElementsByClassName('page')[0];

let
    // Глобальная переменная с СЕЛЕКТОРОМ элемента, который необходимо прокручивать
    // Объявляется здесь, а значение присваивается в обработчике
    scrollTriggerArea;

document.addEventListener('mousemove', (e) => {
    // Контейнер, при наведении на который будет работать горизонтальная прокрутка
    let scrollTrigger = e.target.closest('.scroll-trigger');

    // Проверка, если движение мыши совершено в другой области
    if (!scrollTrigger) return -1;

    // Получаем класс элемента из атрибута data-area, который необходимо будет прокручивать
    scrollTriggerArea = document.getElementsByClassName(scrollTrigger.dataset.area)[0];

    // Устанавливаем обработчик на "вход" курсора в область контейнера
    scrollTrigger.onmouseenter = () =>{
        // Отключаем прокрутку и устанавливаем внутренний отступ справа,
        // чтобы компенсировать его ширину
        page.style.cssText =
            'padding-right: 51px;' +
            'overflow: hidden;'
        ;
    }

    // Устанавливаем обработчик на "выход" мыши из области контейнера
    scrollTrigger.onmouseleave = () =>{
        // Обнуляем стили в разметке
        page.style.cssText = '';
    }
});

// Устанавливаем обработчик прокрутки документа
document.body.onwheel = (e) => {
    // Если у контейнера страницы отключена прокрутка,
    // таким образом осуществляется проверка наведён ли курсор
    // на контейнер triggerScroll
    if(page.style.overflow === 'hidden') {
        // Инициализируем цикл для осуществления плавной прокрутки
        // Прокрутка осуществляется на 150 пикселей
        for (
            let i = 0;
            i < 150;
            i++
        ) {
            // Свойству, в котором хранится значение, насколько было прокручено окно
            // Переопределяем его с каждым шагом на 1 - длину шага (в пикселях)
            // Проверка стоит на отрицательную или положительную прокрутку
            // Т.е. вправо (плюс) или влево (минус)
            scrollTriggerArea.scrollLeft += (++e.deltaY < 0) ? -1 : 1;
        }
    }
}
const itemEnchant = () => document.getElementsByClassName('buy-item__enchant')[0].classList.toggle('buy-item__enchant_checked');
// Механизм переключения вкладок на экране с рейтингами
// - ratings.html
//
// Вешаем обработчик на документ
document.addEventListener('click', (e) =>{
    // Проверяем, осуществлён ли клик по вкладке на экране с рейтингами
    // Иначе останавливаем функцию
    if(!e.target.classList.contains('ratings-nav__item')) return false;

    // Объявляем в переменные и назначаем им классы и аттрибуты
    let classNav = 'ratings-nav__item', // Класс у вкладки в навигации
        classTab = 'ratings__tab-item', // Класс у контейнера вкладки с содержимым
        rating = e.target.dataset.rating; // ID рейтинга для открытия

    // Убираем checked состояние у всех остальных вкладок
    document.getElementsByClassName(`${classNav}_checked`)[0].classList.remove(`${classNav}_checked`)

    // Текущей активной вкладке добавляем класс checked
    e.target.classList.add(`${classNav}_checked`);

    // Убираем класс checked у содержания вкладки
    document.getElementsByClassName(`${classTab}_checked`)[0].classList.remove(`${classTab}_checked`)

    // Добавляем класс checked контейнеру с содержимым вкладки
    // Который нам необходимо открыть
    document.querySelectorAll(`.${classTab}[data-rating="${rating}"]`)[0].classList.add(`${classTab}_checked`)
});

// Обработчик завершения загрузки DOM
document.addEventListener("DOMContentLoaded", ()=>{
    let // Объект с элементами для перебора
        tableRow = document.getElementsByClassName('ratings__table-row'),
        // Число, от которого считается статистика
        // (отнимается для воспроизведения рейтинга)
        lastCount = 300;

    for (let i in tableRow) {
        let // Для расчётов динамики
            r = [
                randomNum(0,1),
                randomNum(0,1),
                randomNum(0,1)
            ];

        // Проверка на пропуск элемента
        if(tableRow[i].dataset.type !== 'skip') {
            // Голова скина
            tableRow[i].children[1].children[0].setAttribute('src', `images/heads/head-${randomNum(1, 12)}.png`);

            // Никнейм
            tableRow[i].children[1].childNodes[2].textContent = nicknameArray[randomNum(0,nicknameArray.length - 1)];

            // Количество убийств
            tableRow[i].children[2].textContent = `${lastCount-= randomNum(1, 5)} ${randomNum(111, 999)}`;

            // Количество смертей
            if(tableRow[i].children[3] !== undefined){
                tableRow[i].children[3].textContent = `${Math.trunc(lastCount / randomNum(1, 5))} ${randomNum(111, 999)}`;
            }

        }

        // В заголовок тултипа пишем никнейм игрока
        tableRow[i].dataset.title = tableRow[i].children[1].innerText;

        // Задаём тултипу описание
        tableRow[i].dataset.row = `
            <span class=dark-gray>Текущее место:</span>
            <span class=gold>${tableRow[i].children[0].innerText}</span>
            <br>
            <br>
            <span class=gray>Динамика изменений:</span>
            <br>
            <span class=dark-gray>За день:</span>
            <span class=${(r[0]) ? 'green' : 'red'}>
                ${(r[0]) ? '+' : '-'}${randomNum(0, 177)}
            </span>
            <br>
            <span class=dark-gray>За неделю:</span>
            <span class=${(r[1]) ? 'green' : 'red'}>
                ${(r[1]) ? '+' : '-'}${randomNum(0, 177)}
            </span>
            <br>
            <span class=dark-gray>За месяц:</span>
            <span class=${(r[2]) ? 'green' : 'red'}>
                ${(r[2]) ? '+' : '-'}${randomNum(0, 177)}
            </span>
        `;
    }
});