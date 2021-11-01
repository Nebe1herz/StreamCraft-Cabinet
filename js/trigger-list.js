// Объявляем константу с контейнером списка со вкладками
const triggerList = document.getElementById('trigger-list');

// Назначаем обработчик кликов элементу
triggerList.onclick = (e) => {
    // Получаем класс, который у всех вкладок, которые мы будем менять
    let triggerClass = triggerList.dataset.trigger,
        triggerClassReload = triggerList.dataset.triggerReload;

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
};
