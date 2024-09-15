// detect tactil
export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
window.addEventListener("load", isMobileDevice)

// solve resource URL problem
export function path(folder, file) {
    return new URL(`/src/assets/img/${folder}/${file}`, import.meta.url).href;
}

// animation loading media
export function loading(element, remove) {
    const overlay = document.querySelectorAll(`#${element}`)
    overlay.forEach(overlay => {
        overlay.style.opacity = '0'
    })
    if (remove === true) {
        setTimeout(() => {
            overlay.remove()
        }, 500)
    }
}