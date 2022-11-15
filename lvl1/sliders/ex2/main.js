"use strict";

const nextBTN = document.getElementById("next")
const prevBTN = document.getElementById("prev")
const slider = document.getElementById("slider")
let images = [...slider.children] // inconsistencia: se adicionarmos mais imagens depois que a pagina carregar, não vai funcionar

let active = 0
let total = 5

const removeActive = (current) => {
    console.log(current)
    images[current].classList.remove("active")
}

const addActive = (current) => {
    images[current].classList.add("active")
}

const nextIMG = (current) => {
    removeActive(current)
    let succeeding = (total + current + 1) % total
    active = succeeding
    addActive(succeeding)
}

const prevIMG = (current) => {
    removeActive(current)
    let succeeding = ( total + current - 1) % total
    active = succeeding
    addActive(succeeding)
}

nextBTN.addEventListener('click', () => nextIMG(active))
prevBTN.addEventListener('click', () => prevIMG(active))
