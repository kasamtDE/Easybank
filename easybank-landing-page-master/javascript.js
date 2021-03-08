let hamburger=document.querySelector(".hamburger")
let navigate=document.querySelector(".navigate")
let navigateMobile=document.querySelector(".navigateMobile")
let close=document.querySelector(".close")
let header= document.querySelector(".header")
let navButton=document.querySelector(".navButton")
let navbar=document.querySelector(".navbar")
let phones=document.querySelector(".phones")
let bgPattern=document.querySelector(".bgPattern")
let copyNav=navigate.cloneNode(true)


let navigation= () =>{
    phones.style.filter="brightness(80%)"
    bgPattern.style.filter="brightness(80%)"
    navigateMobile.append(copyNav)
    copyNav.classList.add("toggleNavigate")

    let navchilds=copyNav.children
    for(let i=0; i<navchilds.length; i++){
        navchilds[i].style.height="12%"
        navchilds[i].style.width="25%"
        navchilds[i].style.cursor="pointer"

        function hoverEffect(){

            navchilds[i].style.background="hsl(136, 65%, 41%)"
            navchilds[i].style.borderRadius="10px"
            navchilds[i].style.color="white"
        }
        function hoverout(){
            navchilds[i].style.background=""
            navchilds[i].style.color=""
        }
        navchilds[i].addEventListener("mouseover",hoverEffect)
        
        navchilds[i].addEventListener("mouseout",hoverout)

    }
        document.body.style.background="rgba(0,0,0,0.3)"
        header.style.background="#fff"

    hamburger.classList.toggle("hide")  
    close.classList.toggle("displayer") 
}

let toggleHamburger = () =>{
    navigateMobile.removeChild(copyNav)
    hamburger.classList.toggle("hide")
    close.classList.toggle("displayer") 
    document.body.style=""
    phones.style.filter=""
    bgPattern.style.filter=""


}
close.addEventListener("click",toggleHamburger)

hamburger.addEventListener("click",navigation)