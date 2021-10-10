// Обработчик кликов
document.body.onclick = (e) => {
    if(!e.target.classList.contains('ratings-nav__item')) return false;

    let classNav = 'ratings-nav__item',
        classTab = 'ratings__tab-item',
        rating = e.target.dataset.rating;

    // Убираем checked состояние у всех остальных вкладок
    document.getElementsByClassName(`${classNav}_checked`)[0].classList.remove(`${classNav}_checked`)

    // Текущей активной вкладке добавляем класс checked
    e.target.classList.add(`${classNav}_checked`);

    // Убираем класс checked у содержания вкладки
    document.getElementsByClassName(`${classTab}_checked`)[0].classList.remove(`${classTab}_checked`)

    document.querySelectorAll(`.${classTab}[data-rating="${rating}"]`)[0].classList.add(`${classTab}_checked`)

    /*

    //
    document.querySelector(`${classTab}[data-rating*="${rating}"]`)[0].classList.add(`${classTab}_checked`)*/
};

//
document.addEventListener("DOMContentLoaded", ()=>{
    let
        // Объект с элементами для перебора
        tableRow = document.getElementsByClassName('ratings__table-row'),
        lastCount = 300;


    for (let i in tableRow) {
        let
            //
            item = tableRow[i].children[1].childNodes[2];
            // Для расчётов динамики
            r = [
            randomNum(0,1),
            randomNum(0,1),
            randomNum(0,1)
        ];

        //
        if(item !== undefined) {
            // Голова скина
            tableRow[i].children[1].children[0].setAttribute('src', `images/heads/head-${randomNum(1, 12)}.png`)

            // Никнейм
            item.textContent = nicknameArray[randomNum(0,nicknameArray.length)];

            // Количество убийств
            tableRow[i].children[2].textContent = `${lastCount-= randomNum(1, 15)} ${randomNum(111, 999)}`;

            // Количество смертей
            tableRow[i].children[3].textContent = `${Math.trunc(lastCount / randomNum(1, 15))} ${randomNum(111, 999)}`;
        }

        tableRow[i].dataset.title = tableRow[i].children[1].innerText;

        //
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