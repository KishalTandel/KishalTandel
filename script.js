let body = document.body;
let toggle = document.querySelector(".toggle");
let navBar = document.querySelector(".nav_bar");
let name = document.querySelector('.name');
let favIcon = document.querySelector(".favicon");
let img = document.querySelector(".favicon img")
let infoContainer = document.querySelector(".info_container");
let quoteContainer = document.querySelector(".quote_container")
let cards = document.querySelectorAll(".card");
let subLinks = document.querySelectorAll(".web_link p");
let subNav = document.querySelector(".sub_nav");
let quotation = document.querySelector('.quotation');
let author = document.querySelector('.author');
let dark = document.getElementById('dark');
let light = document.getElementById('light');



let storedTheme = localStorage.getItem('theme');
let isSystemModeDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

let setTheme = (theme) => {
   if (theme === 'dark'){
       toggle.classList.remove('hide')
       body.classList.remove("light")
       body.classList.add("dark")
       dark.classList.remove('hide');
       light.classList.add('hide');
       toggle.innerHTML='<img src="assets/toggle_icon/dark/sun_filled.png" rel="preload">'
       navBar.style.backgroundColor = '#212125';
       navBar.style.borderBottom = 'solid #1a1a1a 0.5vmin';
       quoteContainer.style.backgroundColor='rgb(35, 35, 41)';
       quoteContainer.style.borderColor = '#9f9f9f';
       subNav.style.color='rgb(120, 164, 212)';
       subLinks.forEach((link) => {
        link.style.color='rgb(196, 190, 190)';
       });
       cards.forEach((card)=>{
        card.style.borderColor='#9f9f9f';
        card.style.backgroundColor='rgb(35, 35, 41)';});
    } else{
        body.classList.remove("dark")
        body.classList.add("light")
        light.classList.remove('hide');
        dark.classList.add('hide');
        toggle.innerHTML = '<img  src="assets/toggle_icon/light/moon_filled.png" rel="preload">'
        navBar.style.backgroundColor =  '#ececea';
        navBar.style.borderBottom ='solid #b8b8b8 0.5vmin';
        quoteContainer.style.backgroundColor='rgb(240, 240, 240)';
        quoteContainer.style.borderColor = '#1a1a1a';
        subNav.style.color='rgb(5, 73, 145)';
        subLinks.forEach((link) => {
        link.style.color='rgb(22, 22, 22)';
       });
        cards.forEach((card)=>{
            card.style.borderColor='#1a1a1a';
             card.style.backgroundColor='rgb(240, 240, 240)';});
    }
}



navBar.style.transition='background-color 0.5s ease, border-bottom 0.5s ease,transform 0.5s ease';
quoteContainer.style.transition='border-color 0.5s ease';
quoteContainer.style.transition='background-color 0.5s ease, color 0.10s ease';

cards.forEach((card)=>{
    card.style.transition='border-color 0.5s ease';
    card.style.transition='background-color 0.5s ease, color 0.25s ease'});
    

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

let object ={
    threshold: 0
};

let callBack= (entries) => {
    if (!(entries[0].isIntersecting)){
        navBar.style.transform='translateY(0%)';
        navBar.style.top=0}else{
        navBar.style.transform='translateY(-100%)'}
}

let obj= new IntersectionObserver(callBack,object);
obj.observe(infoContainer);

let storedIndex=-1;
let isSame=-1;
let runTimeout=[];


let getQuote = () => {
    do{
        index=Math.floor(Math.random()*(quotes.length)); 
    } while(index===isSame || index===localStorage.getItem('index'));
    localStorage.setItem('index', index);
        runTimeout.forEach((timeout)=>{clearTimeout(timeout)});
        runTimeout=[];
        quotation.innerText='';
        let str=quotes[index].quote;
        let arr=str.split('');
        arr.forEach((letter,idx)=>{
        let timeout=setTimeout(()=>{
        quotation.innerText=quotation.innerText+letter;
        },10*idx);runTimeout.push(timeout);})
        author.innerText='\u2014'+' '+quotes[index].author;
        isSame=index;
    }
    

quoteContainer.addEventListener('click', () => {
   getQuote();
});


subLinks.forEach((link)=> {
    link.addEventListener('click', scrollToTop)
})
function scrollToTop(){
    function step(){
        window.scrollBy(0,-30);
        if(window.scrollY>0){ requestAnimationFrame(step)}
    } requestAnimationFrame(step)
}

window.addEventListener('load', () => {
    getQuote();
})
