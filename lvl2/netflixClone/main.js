let question1 = document.getElementById("question1");
let resp1 = document.getElementById("resp1");

let question2 = document.getElementById("question2");
let resp2 = document.getElementById("resp2");

let question3 = document.getElementById("question3");
let resp3 = document.getElementById("resp3");

question1.addEventListener('click', () => {
    if(resp1.classList.contains("hidden")){
        resp1.classList.remove("hidden");
        resp1.classList.add("p-10");
    } else{
        resp1.classList.add("hidden");
    };
});

question2.addEventListener('click', () => {
    if(resp2.classList.contains("hidden")){
        resp2.classList.remove("hidden");
        resp2.classList.add("p-10");
    } else{
        resp2.classList.add("hidden");
    };
});

question3.addEventListener('click', () => {
    if(resp3.classList.contains("hidden")){
        resp3.classList.remove("hidden");
        resp3.classList.add("p-10");
    } else{
        resp3.classList.add("hidden");
    };
});
