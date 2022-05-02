const navHamburger=document.getElementById("nav--hamburger");
const dropdown=document.getElementById("dropdown");
const bar1=document.getElementById("bar1");
const bar2=document.getElementById("bar2");
const bar3=document.getElementById("bar3");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const dropdown1=document.getElementById("dropdown1");
const dropdown2=document.getElementById("dropdown2");

navHamburger.addEventListener("click",function(){
    dropdown.classList.toggle("dropdown__on")
    bar1.classList.toggle("bar1new")
    bar2.classList.toggle("bar2new")
    bar3.classList.toggle("bar3new")
})

option1.addEventListener("click" ,function(){
    dropdown1.classList.toggle("displayyes")
   
})

option2.addEventListener("click" ,function(){
    dropdown2.classList.toggle("displayyes")
   

})


//SCRIPT FOR HTML TAB USING W3 SCHOOLS CODE
