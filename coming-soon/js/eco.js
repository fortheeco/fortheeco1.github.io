const slideContent = [

    {
        trans: "translateX(0px)",
        img:"image 1",
        h3:"This is my sliding test ",
        p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum pariatur quasi asperiores architecto id excepturi incidunt dicta? Voluptatum totam qui, maxime modi aliquid aut rem minima atque inventore sunt?",
    },
    {
        trans: "translateX(-260px)",
        img:"image 2",
        h3:"This is my sliding test ",
        p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum pariatur quasi asperiores architecto id excepturi incidunt dicta? Voluptatum totam qui, maxime modi aliquid aut rem minima atque inventore sunt?",
    },
    {
        trans: "translateX(-550px)",
        img:"image 3",
        h3:"This is my sliding test ",
        p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum pariatur quasi asperiores architecto id excepturi incidunt dicta? Voluptatum totam qui, maxime modi aliquid aut rem minima atque inventore sunt?",
    }
]


// const sliderShower = document.getElementById("slider-shower")
const slidingDiv = document.getElementById("sliding-div")
const heroBtn = document.getElementsByClassName("hero-btn")
let counter = 0;



for (let i = 0; i < slideContent.length; i++) {
    const slidingItems = document.createElement("div");
    const img = document.createElement("span");
    const slideH3 = document.createElement("h3");
    const slideP = document.createElement("p");

    
    slidingDiv.appendChild(slidingItems)
    slidingItems.appendChild(img)
    slidingItems.appendChild(slideH3)
    slidingItems.appendChild(slideP)


    img.innerText = slideContent[i].img
    slideH3.innerText = slideContent[i].h3
    slideP.innerText = slideContent[i].p

    slidingItems.classList.add("sliding-items")
       
}

setInterval(()=>{

    

   
    for (let counter = 0; counter < slideContent.length; counter++) {
        heroBtn[counter].classList.remove("active")
    }
    
    heroBtn[counter].classList.add("active")
    

    // counter++
    console.log(counter)
    
    if (counter <= slideContent.length) {
        slidingDiv.style.transform = slideContent[counter++].trans 
    }else {
        counter = 0;
    }
                  
},4000)


heroBtn[0].onclick= function(){
    slidingDiv.style.transform =slideContent[0].trans ;
    for (let i = 0; i < slideContent.length; i++) {
        heroBtn[i].classList.remove("active")
        
    }this.classList.add("active")
}

heroBtn[1].onclick= function(){
    slidingDiv.style.transform =slideContent[1].trans ;
    for (let i = 0; i < slideContent.length; i++) {
        heroBtn[i].classList.remove("active")
        
    }this.classList.add("active")
}

heroBtn[2].onclick= function(){
    slidingDiv.style.transform =slideContent[2].trans ;
    for (let i = 0; i < slideContent.length; i++) {
        heroBtn[i].classList.remove("active")
        
    }this.classList.add("active")
}