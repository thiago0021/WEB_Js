/********************POP UP******************************/

var btnOpen = document.getElementById("btnShow")
var popUp = document.getElementById("ventana")
var closeBtn = document.getElementById("btnClose")

btnOpen.onclick = function () {
    popUp.style.visibility = "visible"
}

closeBtn.onclick = function () {
    popUp.style.visibility = "hidden"
}

popUp.onclick = function () {
    popUp.style.visibility = "hidden"
}

