let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let input = document.querySelector("input")
let submit = document.querySelector("button")
// let counting = false;

const currentYear = new Date().getFullYear();
let birthday ;
let interval ; 

function updateCountdowntime(){

    const currentTime = new Date();
    const dist = birthday - currentTime; 

    if (dist <=0){
        clearInterval(interval)
        return
    }

    const d= Math.floor(dist / 1000 / 60 / 60 / 24);
    const h = Math.floor(dist / 1000 / 60 / 60) % 24;
    const m = Math.floor(dist / 1000 / 60) % 60;
    const s = Math.floor(dist / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}

submit.addEventListener("click", ()=>{
    
    // if (counting){
    //     return
    // }
    // counting = true;


    birthday =new Date(input.value);
    const date = new Date();

    if ( date > birthday){
        birthday.setFullYear(date.getFullYear()+1)
    }
    
    interval = setInterval(updateCountdowntime, 1000);


})


