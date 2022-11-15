const options = document.querySelectorAll(".option")
const view = document.getElementById("view")

options.forEach(element => {
    console.log(element)
    element.addEventListener('click', (e) => {
        view.style["background-image"] = e.target.style["background-image"]
    })
});