// Вешаем обработчик на документ
document.getElementsByClassName('profile-settings')[0].addEventListener('click', (e) =>{
    let
        // Для сокращения записи объявляем item
        item = e.target,
        // Первый дочерний компонент "Выключено"
        option1 = item.children[0],
        // Второй дочерний компонент "Включено
        option2 = item.children[1];

    // Проверка, совершен ли клик по нужному элементу
    if (
        !(
            // Произведен ли клик по элементу с нужным классом
            item.classList.contains('profile-settings__item')
            ||
            // Или есть родитель, если клик прошёлся на дочерний компонент
            item.closest('.profile-settings__item')
        )
    ) return -1;

    // Переключаем у option1 и option2 классы .btn_danger и .btn_success
    // При наличии аттрибута data-checked переключение происходит только .btn_success
    option1.classList.toggle(
        (item.hasAttribute('data-checked'))
            ? 'btn_success'
                : 'btn_danger'
    );
    option2.classList.toggle('btn_success');

    // Если нет аттрибута data-checked
    if(!item.hasAttribute('data-checked')){
        // Если мы переключили значение на "Выключено"
        if(option1.classList.contains('btn_danger')){
            // В аттрибут, задающий содержание всплывающей подсказке, записываем новое значение
            item.dataset.meta = `<span class=red>> ВЫКЛЮЧЕНО</span>`;
            // Уже открытой всплывающей подсказке тоже обновляем значение
            document.getElementsByClassName('tooltip__meta')[0].innerHTML
                = `<span class=red>> ВЫКЛЮЧЕНО</span>`;
        }
        // Если мы переключили значение на "Включено"
        else{
            // В аттрибут, задающий содержание всплывающей подсказке, записываем новое значение
            item.dataset.meta = `<span class=green>> ВКЛЮЧЕНО</span>`;
            // Уже открытой всплывающей подсказке тоже обновляем значение
            document.getElementsByClassName('tooltip__meta')[0].innerHTML
                = `<span class=green>> ВКЛЮЧЕНО</span>`;
        }
    }
});