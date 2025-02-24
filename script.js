 let body=document.body
 let toggle=document.querySelector(".toggle");
 let nav_bar=document.querySelector(".nav_bar")
let name=document.querySelector('.name')
let github=document.querySelector('.github')



  let storedTheme=localStorage.getItem('theme');
  let systemModeDark= window.matchMedia('(prefers-color-scheme:dark)').matches;

  let setTheme = (theme) => {
    if (theme==='dark'){
        body.classList.remove("light")
        body.classList.add("dark")
        toggle.innerHTML='<i class="fa-solid fa-sun" style="color: #ffffff;"></i>'
        nav_bar.style.backgroundColor =  '#212529';
        nav_bar.style.borderBottom = 'solid black 2px';
        github.style.color='#FFFFFF';
    } else {
        body.classList.remove("dark")
        body.classList.add("light")
        toggle.innerHTML='<i class="fa-solid fa-moon"></i>'
        nav_bar.style.backgroundColor =  '#FFFFFF';
        nav_bar.style.borderBottom = 'solid black 2px';
        github.style.color='#212529';
    }
  }

if (storedTheme){
    setTheme(storedTheme);
} else if(systemModeDark){
    setTheme('dark');
} else {
    setTheme('light')
}

toggle.addEventListener('click' , () => {
    let newTheme=document.body.classList.contains('dark') ? 'light' : 'dark' ;
    setTheme(newTheme);
    localStorage.setItem('theme' , newTheme) ;
})

