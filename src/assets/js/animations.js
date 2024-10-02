export function startAnimation() {
    const textTitleRight = document.querySelectorAll('.layout-title.right')
    const textTitleBottom = document.querySelectorAll('.layout-title.bottom')
    const buttonShadow = document.querySelectorAll('.button-base')
    const imgLeft = document.querySelector('.img-left')
    const imgRight = document.querySelector('.img-right')
    const mediaCenter = document.querySelector('.media-center')
    const mediaIllustration = document.querySelector('.media-illustration')
    const pageTitle = document.querySelectorAll('h1:not(.catchphrase)')
    pageTitle ? pageTitle.forEach(element => element.classList.add('move-left')) : null
    textTitleRight ? textTitleRight.forEach(element => element.classList.add('move-right')) : null
    textTitleBottom ? textTitleBottom.forEach(element => element.classList.add('move-bottom')) : null
    buttonShadow ? buttonShadow.forEach(element => element.classList.add('shadow-appear')) : null
    imgLeft ? imgLeft.classList.add('img-left-move') : null
    imgRight ? imgRight.classList.add('img-right-move') : null
    mediaCenter ? mediaCenter.classList.add('appear-center') : null
    mediaIllustration ? mediaIllustration.classList.add('visible-illustration') : null
}

export function endAnimation() {
    const textTitleRight = document.querySelectorAll('.layout-title.right')
    const textTitleBottom = document.querySelectorAll('.layout-title.bottom')
    const buttonShadow = document.querySelectorAll('.button-base')
    const imgLeft = document.querySelector('.img-left')
    const imgRight = document.querySelector('.img-right')
    const mediaCenter = document.querySelector('.media-center')
    const mediaIllustration = document.querySelector('.media-illustration')
    const pageTitle = document.querySelectorAll('h1:not(.catchphrase)')
    pageTitle ? pageTitle.forEach(element => element.classList.remove('move-left')) : null
    textTitleRight ? textTitleRight.forEach(element => element.classList.remove('move-right')) : null
    textTitleBottom ? textTitleBottom.forEach(element => element.classList.remove('move-bottom')) : null
    buttonShadow ? buttonShadow.forEach(element => element.classList.add('shadow-appear')) : null
    imgLeft ? imgLeft.classList.remove('img-left-move') : null
    imgRight ? imgRight.classList.remove('img-right-move') : null
    mediaCenter ? mediaCenter.classList.remove('appear-center') : null
    mediaIllustration ? mediaIllustration.classList.add('visible-illustration') : null
}

// const elements = {
//     textTitleRight: document.querySelectorAll('.layout-title.right'),
//     textTitleBottom: document.querySelectorAll('.layout-title.bottom'),
//     imgLeft: document.querySelector('.img-left'),
//     imgRight: document.querySelector('.img-right'),
//     pageTitle: document.querySelectorAll('h1:not(.catchphrase, .title-header-project)')
// };

// // Fonction utilitaire pour ajouter ou retirer une classe à une NodeList ou un seul élément
// function toggleClass(elements, className, action = 'add') {
//     if (!elements) return;
//     if (elements instanceof NodeList || Array.isArray(elements)) {
//         elements.forEach(element => element.classList[action](className));
//     } else {
//         elements.classList[action](className);
//     }
// }

// export function startAnimation() {
//     toggleClass(elements.pageTitle, 'move-left');
//     toggleClass(elements.textTitleRight, 'move-right');
//     toggleClass(elements.textTitleBottom, 'move-bottom');
//     toggleClass(elements.imgLeft, 'img-left-move');
//     toggleClass(elements.imgRight, 'img-right-move');
// }

// export function endAnimation() {
//     toggleClass(elements.pageTitle, 'move-left', 'remove');
//     toggleClass(elements.textTitleRight, 'move-right', 'remove');
//     toggleClass(elements.textTitleBottom, 'move-bottom', 'remove');
//     toggleClass(elements.imgLeft, 'img-left-move', 'remove');
//     toggleClass(elements.imgRight, 'img-right-move', 'remove');
// }