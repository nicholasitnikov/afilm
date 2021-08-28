
// let isAboutOpen = false;
let openAboutButton = document.getElementsByClassName('about__link')[0]
let extendedText = document.getElementsByClassName('about__text_extended')


openAboutButton.addEventListener('click', function(e) {
    e.preventDefault();
    if(getComputedStyle(extendedText[0]).display == 'none') {
        extendedText[0].style.display = 'inherit'
        extendedText[1].style.display = 'inherit'
        openAboutButton.innerHTML = '﹣'
    } else {
        extendedText[0].style.display = 'none'
        extendedText[1].style.display = 'none'
        openAboutButton.innerHTML = '＋'
    }
})