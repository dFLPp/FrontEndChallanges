const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const content = document.getElementById("content");
const gambiarra1 = document.getElementById("gambiarra1");
const temaSalvo = localStorage.getItem("tema");
const pesquisa = document.getElementById("search");
const Divpesquisa = document.getElementById("search-div");
const closeSearchDiv = document.getElementById("closeSearchDiv");
const coisaInutil1 = document.getElementById("frufru-search");
const euNaoAguentoMais = document.getElementById("socorro");
const divs = document.getElementsByTagName("div");
const spans = document.getElementsByTagName("span");
const ps = document.getElementsByTagName("p");

menu.addEventListener('click', () => {
    content.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
})

closeMenu.addEventListener('click', () => {
    content.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
})

window.onload = testeTema;
function testeTema(){
    if(temaSalvo != null && temaSalvo === "moonTheme"){
        sun.classList.remove("hidden");
        moon.classList.add("hidden");
        document.body.classList.toggle("bg-gray-800");
        document.body.classList.toggle("text-lime-100");
        gambiarra1.classList.toggle("text-lime-100");
        gambiarra1.classList.toggle("bg-black");
        coisaInutil1.classList.toggle("bg-purple-200");
        coisaInutil1.classList.toggle("text-black");
        coisaInutil1.classList.toggle("text-white");
        coisaInutil1.classList.toggle("bg-zinc-900");
        closeSearchDiv.classList.toggle("bg-green-100");
        closeSearchDiv.classList.toggle("bg-slate-600");
        euNaoAguentoMais.classList.toggle("bg-green-100");
        euNaoAguentoMais.classList.toggle("bg-slate-600");
        
        for(div of divs){
            if(div.classList.contains("bg-white")){
                div.classList.remove("bg-white");
                div.classList.toggle("bg-black");
            }
            if(div.classList.contains("bg-violet-100")){
                div.classList.remove("bg-violet-100");
                div.classList.toggle("bg-slate-400");
            }

            if(div.classList.contains("bg-violet-50")){
                div.classList.remove("bg-violet-50");
                div.classList.toggle("bg-slate-700");
            }

        }
        for(span of spans){
            if(span.classList.contains("bg-white")){
                span.classList.remove("bg-white");
                span.classList.toggle("bg-black");
            }
            if(span.classList.contains("bg-violet-100")){
                span.classList.remove("bg-violet-100");
                span.classList.toggle("bg-slate-400");
            }
            if(span.classList.contains("bg-violet-50")){
                span.classList.remove("bg-violet-50");
                span.classList.toggle("bg-slate-700");
            }
        }

        for(p of ps){
            if(p.classList.contains("bg-white")){
               p.classList.remove("bg-white");
               p.classList.toggle("bg-black");
            }
            if(p.classList.contains("bg-violet-100")){
               p.classList.remove("bg-violet-100");
               p.classList.toggle("bg-slate-400");
            }           
            if(p.classList.contains("bg-violet-50")){
               p.classList.remove("bg-violet-50");
               p.classList.toggle("bg-slate-700");
            }
        }

        if(!sun.classList.contains("hidden")){
            content.style.backgroundColor = "#0A0E12";
            content.style.color = "rgb(199 210 254)";
        }
    } else{
        localStorage.removeItem("tema", "moonTheme");
    }
}
moon.addEventListener('click', () => {
    document.body.classList.add("moonTheme");
    document.body.classList.remove("sunTheme");
    localStorage.setItem("tema", "moonTheme");
    
    if(document.body.classList.contains("moonTheme")){
        sun.classList.remove("hidden");
        moon.classList.add("hidden");
        document.body.classList.toggle("bg-gray-800");
        document.body.classList.toggle("text-lime-100");
        gambiarra1.classList.toggle("text-lime-100");
        gambiarra1.classList.toggle("bg-black");
        coisaInutil1.classList.toggle("bg-purple-200");
        coisaInutil1.classList.toggle("text-black");
        coisaInutil1.classList.toggle("text-white");
        coisaInutil1.classList.toggle("bg-zinc-900");
        closeSearchDiv.classList.toggle("bg-green-100");
        closeSearchDiv.classList.toggle("bg-slate-600");
        euNaoAguentoMais.classList.toggle("bg-green-100");
        euNaoAguentoMais.classList.toggle("bg-slate-600");
        
        for(div of divs){
            if(div.classList.contains("bg-white")){
                div.classList.remove("bg-white");
                div.classList.toggle("bg-black");
            }
            if(div.classList.contains("bg-violet-100")){
                div.classList.remove("bg-violet-100");
                div.classList.toggle("bg-slate-400");
            }

            if(div.classList.contains("bg-violet-50")){
                div.classList.remove("bg-violet-50");
                div.classList.toggle("bg-slate-700");
            }

        }
        for(span of spans){
            if(span.classList.contains("bg-white")){
                span.classList.remove("bg-white");
                span.classList.toggle("bg-black");
            }
            if(span.classList.contains("bg-violet-100")){
                span.classList.remove("bg-violet-100");
                span.classList.toggle("bg-slate-400");
            }
            if(span.classList.contains("bg-violet-50")){
                span.classList.remove("bg-violet-50");
                span.classList.toggle("bg-slate-700");
            }
        }

        for(p of ps){
            if(p.classList.contains("bg-white")){
               p.classList.remove("bg-white");
               p.classList.toggle("bg-black");
            }
            if(p.classList.contains("bg-violet-100")){
               p.classList.remove("bg-violet-100");
               p.classList.toggle("bg-slate-400");
            }           
            if(p.classList.contains("bg-violet-50")){
               p.classList.remove("bg-violet-50");
               p.classList.toggle("bg-slate-700");
            }
        }

        if(!sun.classList.contains("hidden")){
            content.style.backgroundColor = "#0A0E12";
            content.style.color = "rgb(199 210 254)";
        }
        
    }

})

sun.addEventListener('click', () => {
    document.body.classList.remove("moonTheme");
    document.body.classList.add("sunTheme");
    localStorage.removeItem("tema", "moonTheme");
    if(document.body.classList.contains("sunTheme")){
        moon.classList.remove("hidden");
        sun.classList.add("hidden");
        document.body.classList.toggle("bg-gray-800");
        document.body.classList.toggle("text-lime-100");
        gambiarra1.classList.toggle("text-lime-100");
        gambiarra1.classList.toggle("bg-black");
        coisaInutil1.classList.toggle("bg-purple-200");
        coisaInutil1.classList.toggle("bg-zinc-900");
        coisaInutil1.classList.toggle("text-black");
        coisaInutil1.classList.toggle("text-white");
        closeSearchDiv.classList.toggle("bg-green-100");
        closeSearchDiv.classList.toggle("bg-slate-600");
        euNaoAguentoMais.classList.toggle("bg-green-100");
        euNaoAguentoMais.classList.toggle("bg-slate-600");

        for(div of divs){
            if(div.classList.contains("bg-black")){
                div.classList.add("bg-white");
                div.classList.toggle("bg-black");
            }
            if(div.classList.contains("bg-slate-400")){
                div.classList.add("bg-violet-100");
                div.classList.toggle("bg-slate-400");
            }

            if(div.classList.contains("bg-slate-700")){
                div.classList.add("bg-violet-50");
                div.classList.toggle("bg-slate-700");
            }

        }
        for(span of spans){
            if(span.classList.contains("bg-black")){
                span.classList.add("bg-white");
               span.classList.toggle("bg-black");
            }
            if(span.classList.contains("bg-slate-400")){
                span.classList.add("bg-violet-100");
               span.classList.toggle("bg-slate-400");
            }
            if(span.classList.contains("bg-slate-700")){
                span.classList.add("bg-violet-50");
               span.classList.toggle("bg-slate-700");
            }
        }

        for(p of ps){
            if(p.classList.contains("bg-black")){
                p.classList.add("bg-white");
                p.classList.toggle("bg-black");
             }
             if(p.classList.contains("bg-slate-400")){
                p.classList.add("bg-violet-100");
                p.classList.toggle("bg-slate-400");
             }p
             if(p.classList.contains("bg-slate-700")){
                p.classList.add("bg-violet-50");
                p.classList.toggle("bg-slate-700");
             }
        }

        if(!moon.classList.contains("hidden")){
            content.style.backgroundColor = "";
            content.style.color = "";
        }
    }
})

pesquisa.addEventListener('click', () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    Divpesquisa.classList.remove("hidden");
})

closeSearchDiv.addEventListener('click', () => {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
    Divpesquisa.classList.add("hidden");
})

window.addEventListener('keyup', event => {
    if(event.key === "Escape"){
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes";
        Divpesquisa.classList.add("hidden");
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetweem: 20,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
    });

