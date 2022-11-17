"use strict"

// simplesmente manipulação do DOM, se vc n sabe o q é, nem perca tenpo lendo, vá aprender

const leftBtn = document.querySelector("#left")
const rightBtn = document.getElementById("right")
const homeContainer = document.getElementById("homeContainer")
const leftContainer = document.getElementById("contentContainer")
const rightContainer = document.getElementById("appContainer")
const sectionTitle = document.getElementById("sectionTitle")
const leftReturn = document.getElementById("leftReturn")
const rightReturn = document.getElementById("rightReturn")

const anime = (eventTarget) => {
    if(homeContainer.classList.contains("public")){
        if(eventTarget.tagName === "DIV") sectionTitle.innerHTML = eventTarget.childNodes[1].innerHTML
        else sectionTitle.innerHTML = eventTarget.innerHTML

    }
}

leftBtn.addEventListener('click', (e) => {
    anime(e.target)
    homeContainer.classList.toggle("public")
    leftContainer.classList.toggle("public")
    leftReturn.style["display"] = "flex"
})

rightBtn.addEventListener('click', (e) => {
    anime(e.target)
    homeContainer.classList.toggle("public")
    rightContainer.classList.toggle("public")
    rightReturn.style["display"] = "flex"
})

leftReturn.addEventListener('click', () => {
    leftContainer.classList.toggle("public")
    homeContainer.classList.toggle("public")
    leftReturn.style["display"] = "none"
    sectionTitle.innerHTML="Cor"
})

rightReturn.addEventListener('click', () => {
    rightContainer.classList.toggle("public")
    homeContainer.classList.toggle("public")
    rightReturn.style["display"] = "none"
    sectionTitle.innerHTML="Cor"
})
