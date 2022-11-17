"use strict"

const colorWheel = document.getElementById("colorWheel")
const hexTracker = document.getElementById("hexTracker")
const rgbTracker = document.getElementById("rgbTracker")
const valorHEX = document.getElementById("valorHEX")
const genBTN = document.getElementById("genBTN")
const valorRGB = document.getElementById("valorRGB")
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
const copyButtons = document.querySelectorAll(".copyButton")

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

window.addEventListener("load", () => {
    hexTracker.innerHTML = colorWheel.value
    colorWheel.addEventListener('input', (e) =>{
        hexTracker.innerHTML = e.target.value
        hexTracker.style["backgroundColor"] = e.target.value
        rgbTracker.innerHTML = `(${hexToRgb(`${e.target.value}`)})`
        rgbTracker.style["backgroundColor"] = `rgb(${hexToRgb(`${e.target.value}`)})`
    })
})

genBTN.addEventListener("click", () => {
    let theHEX = "#"
    for(let i = 0; i < 6; i++){
        theHEX += values[Math.floor(Math.random() * values.length)]
    }
    valorHEX.innerHTML = theHEX
    valorHEX.style["backgroundColor"] = theHEX
    
    valorRGB.innerHTML = `(${hexToRgb(`${theHEX}`)})`
    valorRGB.style["backgroundColor"] = `rgb(${hexToRgb(`${theHEX}`)})`
})

copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.previousElementSibling.innerHTML);
    })
});