// Генератор случайных чисел
const randomNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const dynamicText = [
    'обновлений',
    'изменений',
    'разработки',
    'нововведений',
    'патчей'
]

let // Селектор заголовка у раздела MiniGames
    SectionGamesHeader = document.querySelector('.games-explorer-header'),
    // Координаты по Y заголовка раздела MiniGames относительно всей страницы
    SectionGamesY = SectionGamesHeader.getBoundingClientRect().top + pageYOffset;
    // Высота окна браузера
    clientHeight = document.documentElement.clientHeight;

// Отслеживание скролла страницы
window.addEventListener('scroll', function() {
    if(
        // Если юзер прокрутил страницу до нужной координаты или дальше
        // Эта координата вычисляется: координата Y секции минигеймс - (высота браузера / 2)
        (pageYOffset >= (SectionGamesY - clientHeight / 2))
        // Условие «И»
        &&
        // Если у хедера секции минигеймс нет класса show-trigger
        (SectionGamesHeader.classList.contains('show-trigger') === false)
        // Потому что анимация проигрывается при установке класса
        // Чтобы класс не устанавливался каждый раз при прокрутке страницы
    ) {
        // Установка класса visible
        SectionGamesHeader.classList.add('show-trigger')
    }

});

openMobileMenu.onclick = () => {
    document.body.classList.add('mobile-menu-checked')
}
mobileMenu.onclick = (i) => {
    if(i.target.nodeName !== 'A') {
        document.body.classList.remove('mobile-menu-checked')
    }
}
/*
let item = document.querySelectorAll('.tooltip-trigger');
item.forEach((item) =>{
    let tooltip = document.getElementById('tooltip');
    item.addEventListener('mouseover', () =>{
        const replaceText = (selector, value) =>
            tooltip.getElementsByClassName(selector)[0].innerHTML = value
        replaceText('title', item.dataset.title);
        replaceText('meta', item.dataset.meta);
        replaceText('note', item.dataset.note);
    });
    item.addEventListener('mouseout', () =>{
        tooltip.style.display="none";
    });
    item.addEventListener('mousemove', (event) =>{
        let y = event.clientY,
            x = event.clientX + 15;
        tooltip.style.cssText = `top:${y}px;left:${x}px`;
    });
});*/