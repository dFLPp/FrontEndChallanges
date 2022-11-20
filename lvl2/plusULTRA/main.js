const preloader = document.getElementById("preloader")

const side = document.getElementById("side")
const closeSideBTN = document.getElementById("closeSideBTN")

closeSideBTN.addEventListener("click", () => {
    side.classList.add('nullify')
})

const expand = document.getElementById("expand")
expand.addEventListener('click', () => {
    side.classList.remove('nullify')
})

const container = document.getElementById("container")

let questions_data = [
    {
    question: 'question1',
    resp: 'response1'
    },
    {
    question: 'question2',
    resp: 'response2'
    },
    {
    question: 'question3',
    resp: 'response3'
    }
]

let links_data = [
    {
        text: 'link1',
        to: '#'
    },
    {
        text: 'link2',
        to: "#"
    },
    {
        text: 'link3',
        to: "#"
    },

]

const makeDropItem = (data) => {
    const {question, resp} = data
    const div = document.createElement('div')
    div.classList.add('dropItem')

    const header = document.createElement('header')
    const h3 = document.createElement('h3')
    h3.innerHTML = question
    const button = document.createElement('button')
    button.classList.add("dropBTN")
    button.innerHTML = '+'
    button.addEventListener('click', () => {
        button.innerHTML = button.innerHTML == '+' ? '-' : '+'
        div2.classList.toggle('nullify')
    })
    header.appendChild(h3)
    header.appendChild(button)

    const div2 = document.createElement("div")
    div2.classList.add("dropedContent")
    div2.classList.add('nullify')
    const p = document.createElement('p')
    p.innerHTML = resp
    div2.appendChild(p)

    div.appendChild(header)
    div.appendChild(div2)

    return div
}

const appendItem = (div) => {
    container.appendChild(div)
}

const nav = document.getElementById('navHeader')
const layer = document.getElementById('layer')

const makeli = (data) => {
    const {text, to} = data
    li = document.createElement('li')
    a = document.createElement('a')
    a.href = to
    a.innerHTML = text
    li.appendChild(a)
    return li
}

const makeul = (data) => {
    ul = document.createElement('ul')
    data.forEach(element => {
        ul.appendChild(makeli(element))
    });
    return ul;
}


window.addEventListener('load', () => {
    preloader.remove()
    questions_data.forEach(item => {
        appendItem(makeDropItem(item))
    });

    nav.appendChild(makeul(links_data))
    layer.appendChild(makeul(links_data))
})

const vid = document.getElementById("vid")
const controls = document.getElementById("controls")

// definitivamente não recomendo - tente achar uma solução alternativa
controls.addEventListener("click", () => {
    if(controls.innerHTML == 'Pause'){
        vid.pause()
        controls.innerHTML = 'Resume'
    }
    else{
        vid.play()
        controls.innerHTML = 'Pause'
    }
})