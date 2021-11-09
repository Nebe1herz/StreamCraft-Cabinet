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