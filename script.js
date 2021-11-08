/* Array for sentence starter*/
let senStarter =[ "You are", "You are not"]
let senFiller = ["Blessed","Unlucky"]



function randomiseSen(){
firstSec = Math.floor(Math.random()*(senStarter.length))
secondSec = Math.floor(Math.random()*(senFiller.length))
completeSen = senFiller[secondSec] +" " + senStarter[firstSec]

}




//alert(completeSen)
function showText(){

randomiseSen()

let cookieStrip = document.createElement("div")
cookieStrip.classList.add("cStrip")
document.body.appendChild(cookieStrip)
document.getElementById("cookie").innerHTML=" "
document.getElementById("cookie").appendChild(cookieStrip)

cookieStrip.innerHTML=completeSen
/*
let image = document.createElement("img")
image.src= "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54367/fortune-cookie-emoji-clipart-md.png"
cookieStrip.appendChild(image) */

}
//document.body.addEventListener("click", showText)
document.getElementById("cookie").addEventListener("click", showText)