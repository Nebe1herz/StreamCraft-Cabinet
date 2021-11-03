const
    triggerScroll = document.getElementsByClassName('scroll-trigger')[0],
    triggerScrollArea = document.querySelectorAll(triggerScroll.dataset.area)[0],
    page = document.getElementsByClassName('page')[0];

triggerScroll.onmouseenter = (e) =>{
    page.style.cssText =
        'padding-right: 51px;' +
        'overflow: hidden;'
    ;
}
triggerScroll.onmouseleave = (e) =>{
    page.style.cssText = '';
}

document.body.onwheel = (e) => {
    if(!page.style.overflow === 'hidden') return false;

    for (
        let i = 0;
        i < 150;
        i++
    ) {
        triggerScrollArea.scrollLeft += (++e.deltaY < 0) ? -1 : 1;
    }
}