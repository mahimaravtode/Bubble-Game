var timer=60
var score=0
var savescore=""

function increaseScore(){
    score+=10
    savescore= document.querySelector("#score").innerHTML=score
}
function makeBubble(){
    var cultter=""
for(var i=0;i<=197;i++){
    cultter+=`<div class="circle">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector("#pbtm").innerHTML=cultter
}

function time(){
    var timerint=setInterval(function(){
        if(timer==0){
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML=`<h1 id="over">GAME OVER</h1>`
            document.querySelector("#over").style.color="red"
        }
        else{
            timer--
            document.querySelector("#time").innerHTML=timer
            
        }
    },1000)
}
var savehit=""
function getnewHit(){
    savehit= document.querySelector("#hit").textContent=Math.floor(Math.random()*10)
}
makeBubble()
time()
getnewHit()

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    if(Number(dets.target.textContent)===savehit){
        increaseScore()
        makeBubble()
        getnewHit()
    }
    
})

