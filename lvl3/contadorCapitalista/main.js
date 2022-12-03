const state = document.getElementById("state")
const zero = document.getElementById("zero")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const leftAside = document.getElementById("left")
const rightAside = document.getElementById("right")

class Instance{
    constructor (){
        this.data = 0
    }

    get value (){
        return this.data
    }

    isValid(s){
        return typeof s === 'number'
    }

    updateUI(){
        state.innerHTML = this.value
    }

    set value (s){
        if(!this.isValid(s)) {
            this.data = 0
            return
        }
        this.data = s
        this.updateUI()
    }
}

// ads
function createComponent({id, source, link}, which){
    const mainDIV = document.createElement('div')
    mainDIV.setAttribute("id", id);
    mainDIV.classList.add('ad')

    const img = document.createElement('img')
    img.src = source

    const div = document.createElement('div')
    div.classList.add('btnOverlay')

    const closeBTN = document.createElement('button')
    closeBTN.classList.add('closeAd')
    closeBTN.innerHTML = "⨉"

    closeBTN.addEventListener('click', function (){
        document.getElementById(`${id}`).remove()
        if(which === 'left'){
            leftAdStack.deleteAd(id)
        }
        else{
            rightAdStack.deleteAd(id)
        }
    })

    const a = document.createElement("a")
    a.href = link
    
    const fowardBTN = document.createElement('button')
    fowardBTN.classList.add('followAd')
    fowardBTN.innerHTML = '↪'

    a.appendChild(fowardBTN)
    div.appendChild(closeBTN)
    div.appendChild(a)
    mainDIV.appendChild(img)
    mainDIV.append(div)
    return mainDIV
}

class AdStruct{
    constructor (which){
        this.which = which
        this.max = 4
        this.ads = []
    }

    randomID(){
        return ((Math.random() * 4) - Math.random())
    }

    findById(elementID){
        return this.ads.filter(({id}) => {
            return elementID === id
        })[0]
    }

    deleteAd(id){
        this.ads = this.ads.filter(ad => {
            return ad.id !== id
        })
    }

    currentElems(){
        return this.ads.length
    }

    createAD(source, link){
        if(this.currentElems() < this.max){
            let elem = {
                id: this.randomID(),
                source: source,
                link: link
            }

            this.ads.push(elem)
            this.populateUI(elem.id)
        }
    }

    populateUI(id){
        if(this.which === 'left'){
            let elem = this.findById(id)
            leftAside.appendChild(createComponent(elem, this.which))
        }
        else if(this.which === 'right'){
            let elem = this.findById(id)
            rightAside.appendChild(createComponent(elem, this.which))
        }
        else return
    }
}

var leftAdStack = new AdStruct('left')
var rightAdStack = new AdStruct('right')

let data = [
    'https://guiadoscuriosos.com.br/wp-content/uploads/2019/04/49151-2.jpg',
    'https://thecozyapron.com/wp-content/uploads/2021/01/calzone_thecozyapron_1.jpg',
    'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg',
    'https://www.daninoce.com.br/wp-content/uploads/2019/04/receitas-de-cupcake-destaque-960x625.jpg'
]
let choice

const doIt = () => {
    choice = data[Math.floor(Math.random() * data.length)]
    if(leftAdStack.currentElems() < leftAdStack.max){
        leftAdStack.createAD(choice, choice)
    }
    else if (rightAdStack.currentElems() < rightAdStack.max){
        rightAdStack.createAD(choice, choice)
    }
    else{
        return
    }
}

const butSlowly = (theThing) => {
    setInterval(() => {
        theThing()        
    }, 5000)
}


window.addEventListener('load', () => {
    let instance = new Instance()
    plus.addEventListener('click', () => instance.value += 1)
    minus.addEventListener('click', () => instance.value -= 1)
    zero.addEventListener('click', () => instance.value = 0)

    butSlowly(doIt)
})
