// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!! ОСТОРОЖНО, НИЖЕ ЛЮТЫЙ ГОВНОКОД !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Генератор случайных чисел
const
    randomNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min),
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
            alert(`Testing`);
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
const itemEnchant = () => document.getElementsByClassName('buy-item__enchant')[0].classList.toggle('buy-item__enchant_checked');
// Механизм переключения вкладок на экране с рейтингами
// - ratings.html
//
// Вешаем обработчик на документ
document.body.onclick = (e) => {
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
};

// Обработчик завершения загрузки DOM
document.addEventListener("DOMContentLoaded", ()=>{
    let // Объект с элементами для перебора
        tableRow = document.getElementsByClassName('ratings__table-row'),
        // Число, от которого считается статистика
        // (отнимается для воспроизведения рейтинга)
        lastCount = 300;

    for (let i in tableRow) {
        let // Селектор для выделения
            item = tableRow[i].children[1].childNodes[2],
            // Для расчётов динамики
            r = [
                randomNum(0,1),
                randomNum(0,1),
                randomNum(0,1)
            ];

        // Проверка на то, что существует ли такой элемент
        // У заголовков его не должно быть и скрипт не выполнится
        // TODO ПЕРЕПИСАТЬ ПРОВЕРКУ, здесь конченная логика
        if(item !== undefined) {
            // Голова скина
            tableRow[i].children[1].children[0].setAttribute('src', `images/heads/head-${randomNum(1, 12)}.png`)

            // Никнейм
            item.textContent = nicknameArray[randomNum(0,nicknameArray.length - 1)];

            // Количество убийств
            tableRow[i].children[2].textContent = `${lastCount-= randomNum(1, 15)} ${randomNum(111, 999)}`;

            // Количество смертей
            tableRow[i].children[3].textContent = `${Math.trunc(lastCount / randomNum(1, 15))} ${randomNum(111, 999)}`;
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