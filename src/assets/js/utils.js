// detect tactil
export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
window.addEventListener("load", isMobileDevice)

// solve resource URL problem
export function path(folder, file) {
    if (folder) {
        return new URL(`/src/assets/img/${folder}/${file}`, import.meta.url).href
    } else {
        return new URL(`/src/assets/img/${file}`, import.meta.url).href
    }
}

// clean sentence url
export function cleanUrl(sentence) {
    return sentence
        .replace(/\s+/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

// animation loading media
export function loading() {
    const media = document.querySelectorAll('.load')
    media.forEach(media => {
        media.style.transition = 'opacity var(--time-animation)'
        media.style.opacity = '1'
    })
}

// animation loading header media
export function loadingHead(element, anim) {
    const media = document.querySelector(`${element}`)
    media.classList.add(anim)
}

// animation loading form
export function loadingOverlay(element, remove) {
    const overlay = document.querySelector(`#${element}`)
    overlay.style.opacity = '0'
    if (remove === true) {
        setTimeout(() => {
            overlay.remove()
        }, 500)
    }
}

// switch proverbs
export function animationDisplaySentences(element, sentences, delay, delayOut) {
    function displaySentence(i) {
        if (i < sentences.length) {
            element.classList.remove('anim-proverb-out')
            element.classList.add('anim-proverb-in')
            element.textContent = ''
            element.textContent += sentences[i]
            setTimeout(() => {
                element.classList.remove('anim-proverb-in')
                element.classList.add('anim-proverb-out')
                setTimeout(() => {
                    displaySentence((i + 1) % sentences.length)
                }, delayOut)
            }, delay)
        }
    }
    displaySentence(0)
}