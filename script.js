const form = document.querySelector('.fomulario')
const mascara = document.querySelector('.mascara-do-form')



function apareceFormulario() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}
function desapareceFormulario() {
    form.style.left = "-450px"
    form.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"
}