let body = document.body;
let toggle = document.querySelector(".toggle");
let navBar = document.querySelector(".nav_bar");
let name = document.querySelector('.name');
let favIcon = document.querySelector(".favicon");
let container = document.querySelector(".container");

let storedTheme = localStorage.getItem('theme');
let isSystemModeDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

let switchFavIcon = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('resolved')}, 
            200);
    });
} 

let setTheme = (theme) => {
   if (theme === 'dark'){
       body.classList.remove("light")
       body.classList.add("dark")
       toggle.innerHTML='<img src="7795651_weather_day_sun_icon.png";/>'
       navBar.style.backgroundColor = '#1f1f1f';
       navBar.style.borderBottom = 'solid #1a1a1a 0.5vmin';
       (async () => {
        favIcon.classList.add('smooth');
        await switchFavIcon();
        favIcon.innerHTML='<img src="hat-icon (4).png">';
        favIcon.classList.remove('smooth');
        })();  
    } else{
        body.classList.remove("dark")
        body.classList.add("light")
        toggle.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/moon-symbol.png" alt="moon-symbol"/>'
        navBar.style.backgroundColor =  '#c6c6c6';
        navBar.style.borderBottom ='solid #b8b8b8 0.5vmin';
        (async ()=>{  //IIFE
            favIcon.classList.add('smooth');
            await switchFavIcon();
            favIcon.innerHTML='<img src="hat-icon (3).png">';
            favIcon.classList.remove('smooth');
        })();
    }
}

navBar.style.transition='background-color 0.6s ease, border-bottom 0.6s ease';

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
    if(container.getBoundingClientRect().bottom<0){
        navBar.classList.remove('hide');
    } else{
        navBar.classList.add('hide');
    }
});




