var time = 60;
var score = 0;
var hitrn;

//Creating bubbles with random numbers on them
function makeBubble(){
	var bubbleCount = Math.floor(window.innerWidth / 9);
	var clutter = "";

for(var i = 1; i<bubbleCount; i++){
	var rn = Math.floor(Math.random()*10)
	clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

//setting the timer value
function runTimer(){
	var timer = setInterval(function(){
		if (time > 0) {
			time--;
			document.querySelector("#timeVal").textContent = time;
		}
		else{
			clearInterval(timer);
			document.querySelector("#pbtm").innerHTML = `<h1>Congratulations..!! Your score is  ${score}</h1>`;
		}
	},1000);
}

//Getting a new hit every time
function newHit() {
	hitrn = Math.floor(Math.random()*10)
	document.querySelector("#hitVal").textContent = hitrn;
}

//Calculating score
function newScore() {
	score += 10;
	document.querySelector("#scoreVal").textContent = score;
}

//Adding event listener & checking the number clicked
document.querySelector("#pbtm").addEventListener("click", function(dets){
	var clickedNum = Number(dets.target.textContent);
	if(clickedNum === hitrn){
		newScore();
		newHit();
		makeBubble();
	}
	else{
		newHit();
		makeBubble();
	}
})
runTimer();
makeBubble();
newHit();