
let btn1=document.querySelector(".one");
let btn2=document.querySelector(".two");
let btn3=document.querySelector(".three");
let btn4=document.querySelector(".four");
let btn5=document.querySelector(".five");
let pop=document.querySelector(".popone");
function pop1(){
    btn1.style.backgroundColor="white";
   pop.innerText="you selected 1 out of 5";
};
btn1.addEventListener("click",pop1);

function pop2(){
     btn2.style.backgroundColor="white";
    pop.innerText="you selected 2 out of 5";
};
btn2.addEventListener("click",pop2);

function pop3(){ 
    btn3.style.backgroundColor="white";
    pop.innerText="you selected 3 out of 5";
};
btn3.addEventListener("click",pop3);


function pop4(){
    btn4.style.backgroundColor="white";
    pop.innerText="you selected 4 out of 5";
};
btn4.addEventListener("click",pop4);

function pop5(){
    btn5.style.backgroundColor="white";
    pop.innerText="you selected 5 out of 5";

};
btn5.addEventListener("click",pop5);


let btn6=document.querySelector(".submitone");
let hidden=document.querySelector(".hidden");
let rating=document.querySelector(".container")
function appear(){
     btn6.style.backgroundColor="white";
  
     hidden.classList.remove("hidden");
    
rating.classList.add("hidden");
    
};
btn6.addEventListener("click",appear);


 







