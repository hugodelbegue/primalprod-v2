function toggleClasses(action) {
    const elements = {
        textTitleRight: document.querySelectorAll('.layout-title.right'),
        textTitleBottom: document.querySelectorAll('.layout-title.bottom'),
        imgLeft: document.querySelector('.img-left'),
        imgRight: document.querySelector('.img-right'),
        mediaCenter: document.querySelector('.media-center'),
        mediaIllustration: document.querySelector('.media-illustration'),
        pageTitle: document.querySelectorAll('h1:not(.catchphrase)')
    }

    const actions = {
        add: 'add',
        remove: 'remove'
    }

    // add or remove classe from elements
    elements.pageTitle?.forEach(element => element.classList[action]('move-left'))
    elements.textTitleRight?.forEach(element => element.classList[action]('move-right'))
    elements.textTitleBottom?.forEach(element => element.classList[action]('move-bottom'))
    // elements.imgLeft?.classList[action]('img-left-move')
    // elements.imgRight?.classList[action]('img-right-move')
    // elements.mediaCenter?.classList[action]('appear-center')
    elements.mediaIllustration?.classList[action]('visible-illustration')
}

export function startAnimation() {
    toggleClasses('add')
}

export function endAnimation() {
    toggleClasses('remove')
}