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
export function loading(element, remove) {
    const overlay = document.querySelectorAll(`#${element}`)
    overlay.forEach(overlay => {
        overlay.style.opacity = '0'
        if (remove === true) {
            setTimeout(() => {
                overlay.remove()
            }, 500)
        }
    })
}