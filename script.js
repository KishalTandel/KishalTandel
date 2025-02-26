let body = document.body;
let toggle = document.querySelector(".toggle");
let navBar = document.querySelector(".nav_bar");
let name = document.querySelector('.name');
let favIcon = document.querySelector(".favicon");
let container = document.querySelector(".container");
let quote = document.querySelector(".quote")
let cards= document.querySelectorAll(".card");

let storedTheme = localStorage.getItem('theme');
let isSystemModeDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

let switchFavIcon = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('resolved')}, 
            150);
    });
} 

let setTheme = (theme) => {
   if (theme === 'dark'){
       body.classList.remove("light")
       body.classList.add("dark")
       toggle.innerHTML='<img src="7795651_weather_day_sun_icon.png";/>'
       navBar.style.backgroundColor = '#1f1f1f';
       navBar.style.borderBottom = 'solid #1a1a1a 0.5vmin';
       quote.style.borderColor = '#9f9f9f';
       cards.forEach((card)=>{
        card.style.borderColor='#9f9f9f';});
       (async () => {
        favIcon.style.opacity='0.5';
        await switchFavIcon();
        favIcon.innerHTML='<img src="hat-icon (4).png">';
        favIcon.style.opacity='1';
        })();  
    } else{
        body.classList.remove("dark")
        body.classList.add("light")
        toggle.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/moon-symbol.png" alt="moon-symbol"/>'
        navBar.style.backgroundColor =  '#c6c6c6';
        navBar.style.borderBottom ='solid #b8b8b8 0.5vmin';
        quote.style.borderColor = '#1a1a1a';
        cards.forEach((card)=>{
            card.style.borderColor='#1a1a1a';});
        (async ()=>{  //IIFE
            favIcon.style.opacity='0.5';
            await switchFavIcon();
            favIcon.innerHTML='<img src="hat-icon (3).png">';
            favIcon.style.opacity='1';
        })();
    }
}

navBar.style.transition='background-color 0.5s ease, border-bottom 0.5s ease';
quote.style.transition='border-color 0.5s ease';
cards.forEach((card)=>{
    card.style.transition="border-color 0.5s ease";});

if (storedTheme){
    setTheme(storedTheme);
} else if(isSystemModeDark){
    setTheme('dark');
} else {
    setTheme('light')
}

toggle.addEventListener('click' , () => {
    let newTheme=body.classList.contains('dark') ? 'light' : 'dark' ;
    setTheme(newTheme);
    localStorage.setItem('theme' , newTheme);
});

favIcon.addEventListener('click', () => {
    let newTheme=body.classList.contains('dark') ? 'light' : 'dark' ;
    setTheme(newTheme);
    localStorage.setItem('theme' , newTheme) ;
});

window.addEventListener('scroll', () => {
    if(container.getBoundingClientRect().bottom<=-1){
        navBar.classList.remove('hide');
    } else{
        navBar.classList.add('hide');
    }
});


let getQuote = () =>{
   console.log(quotes[array[Math.round(Math.random()*((array.length)-1))]]);
}

quote.addEventListener('onclick', () => {
   getQuote();
});


