/* Array for sentence starter*/
let senStarter =[ "you are", "that you may not be","you may acquire in abundance"]
let senFiller = ["Blessed","Unlucky","Fortune","Wealth"]
let cookieNum = 0
let cookie = document.getElementsByClassName("cookie")[0]
let badSentences =[] // CREATES EMPTY ARRAY
xz()
let badSentencesJSON =localStorage.getItem("badSentences") // GETS STORED KEY/ITEMS
badSentences=JSON.parse(badSentencesJSON) // TURNS STORED ITEMS INTO ARRAY

function randomiseSen(){
firstSec = Math.floor(Math.random()*(senStarter.length))
secondSec = Math.floor(Math.random()*(senFiller.length))
completeSen = senFiller[secondSec] +" " + senStarter[firstSec]


}

function textToSpeech(){
    
    const voices = window.speechSynthesis.getVoices();
    const lastVoice = voices[19];
    window.speechSynthesis.cancel();
    let textVoice = new SpeechSynthesisUtterance(completeSen);
    textVoice.voice = lastVoice
    speechSynthesis.speak(textVoice);
}

function badText(){

        
        let fortune = document.getElementById("container").lastChild.innerHTML
        badSentences.push(fortune) // PUSHES FORTUNE TO ARRAY
        localStorage.setItem("badSentences", JSON.stringify(badSentences)) //STORES STRING
        

        
    }


function showText(event){
    
    
    cookieNum += 1
    do{
        randomiseSen()
    } while (badSentences.includes(completeSen))
    
    textToSpeech()
    
    
    let fortune = document.createElement("div")
    fortune.id = "cookie" + cookieNum
    fortune.classList.add("cStrip")
    fortune.innerHTML=completeSen
    document.body.appendChild(fortune)
    document.getElementById("container").innerHTML=" "
    document.getElementById("container").appendChild(fortune)
    //let cookie = document.getElementsByClassName("cookie")[0]
    cookie.style.animationName = "myAnimation" //applies/starts animation from css file
    setTimeout(resetAnimation,5000) // resets animation in 3secs time to be clicked again

    
    

}

function xz() {
    if (localStorage.getItem("badSentences")=== null){ //checks if badSentences is empty or not
        localStorage.setItem("badSentences", "[]") //forces a value within it or else program doesn't work
    }
}

function resetAnimation(){
    //let cookie = document.getElementsByClassName("cookie")[0]
    cookie.style.animationName = ""
    

}

//document.body.addEventListener("click", showText)
//document.getElementById("cookie").addEventListener("click", showText)
//window.addEventListener("click", showText)
cookie.addEventListener("click", showText)
