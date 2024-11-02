let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let div=document.querySelector(".div1");
btn.addEventListener("click",()=>{
    let color=MathRandom();
    h1.innerHTML=color;
    div.style.backgroundColor=color;
    btn.style.backgroundColor=color;

    console.log("color changed",MathRandom());
});

function MathRandom(){
    let red=Math.floor(Math.random()*255)+1;
    let green=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;

    let clr=`rgb(${red},${green},${blue})`;
    return clr;
    
}