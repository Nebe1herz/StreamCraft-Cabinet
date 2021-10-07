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
