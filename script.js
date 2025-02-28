let body = document.body;
let toggle = document.querySelector(".toggle");
let navBar = document.querySelector(".nav_bar");
let name = document.querySelector('.name');
let favIcon = document.querySelector(".favicon");
let container = document.querySelector(".container");
let quote = document.querySelector(".quote")
let cards= document.querySelectorAll(".card");
let links = document.querySelectorAll(".web_link p");
let subNav=document.querySelector(".sub_nav");
let quotation=document.querySelector('.quotation');
let author=document.querySelector('.author');

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
       //toggle.innerHTML='<img src="7795651_weather_day_sun_icon.png";/>'
       navBar.style.backgroundColor = '#212125';
       navBar.style.borderBottom = 'solid #1a1a1a 0.5vmin';
       quote.style.backgroundColor='rgb(35, 35, 41)';
       quote.style.borderColor = '#9f9f9f';
       subNav.style.color='rgb(120, 164, 212)';
       links.forEach((link) => {
        link.style.color='rgb(196, 190, 190)';
       });
       cards.forEach((card)=>{
        card.style.borderColor='#9f9f9f';
        card.style.backgroundColor='rgb(35, 35, 41)';});
       (async () => {
        favIcon.style.opacity='0.5';
        await switchFavIcon();
        favIcon.innerHTML='<img src="assets/favicon/dark/favicon_512.png">';
        favIcon.style.opacity='1';
        })();  
    } else{
        body.classList.remove("dark")
        body.classList.add("light")
        //toggle.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/moon-symbol.png" alt="moon-symbol"/>'
        navBar.style.backgroundColor =  '#ececea';
        navBar.style.borderBottom ='solid #b8b8b8 0.5vmin';
        quote.style.backgroundColor='rgb(240, 240, 240)';
        quote.style.borderColor = '#1a1a1a';
        subNav.style.color='rgb(9, 54, 103)';
        links.forEach((link) => {
        link.style.color='rgb(22, 22, 22)';
       });
        cards.forEach((card)=>{
            card.style.borderColor='#1a1a1a';
             card.style.backgroundColor='rgb(240, 240, 240)';});
        (async ()=>{  //IIFE
            favIcon.style.opacity='0.5';
            await switchFavIcon();
            favIcon.innerHTML='<img src="assets/favicon/light/favicon_512.png">';
            favIcon.style.opacity='1';
        })();
    }
}

navBar.style.transition='background-color 0.5s ease, border-bottom 0.5s ease,transform 0.5s ease';
quote.style.transition='border-color 0.5s ease';
quote.style.transition='background-color 0.5s ease, color 0.25s ease';

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
    if(container.getBoundingClientRect().bottom<0 ){ 
        navBar.style.transform='translateY(0%)';
        navBar.style.top=0
       // if (navBar.getBoundingClientRect().top<=container.getBoundingClientRect().bottom){navBar.style.transform='translateY(-100%)';}
    } else if(navBar.getBoundingClientRect().top===0){
        navBar.style.transform='translateY(-100%)';
    }//else if()  
    else if(window.scrollY===0) {navBar.style.transform='translateY(-100%)';}
});



let storedIndex=localStorage.getItem('index');
let isSame=-1;
let getQuote = () => {
    let value=Math.round(Math.random()*((authors.length)-1));
    if (storedIndex===value){
        getQuote();
    }else if(isSame===value){
        getQuote();
    }else{
        quotation.innerText='';
        const str=quotes[authors[value]];
        const arr=str.split('');
        arr.forEach((letter,index)=>{
        setTimeout(()=>{
        quotation.innerText=quotation.innerText+letter;
        },20*index);})
    author.innerText=authors[value];}
    isSame=value;
    localStorage.setItem('storedQuote', value);
   
}


quote.addEventListener('click', () => {
   getQuote();
});


links.forEach((link)=> {
    link.addEventListener('click', ()=> {
        console.log('was clicked');
        container.scrollIntoView({
            block: 'start',
            behaviour: 'smooth',
        });
    })
})

window.addEventListener('load', ()=>{
    getQuote();

})
