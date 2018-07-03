var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var resett=document.querySelector("#reset");
var winningScore=5;
var p1Display=0;
var p2Display=0;
var gameOver=false;
var numInput= document.querySelector("input");
//p1 element display code
p1.addEventListener("click",function(){
	if(!gameOver)
	{
		p1Display++;
		if(p1Display===winningScore)
		{
		console.log("Game is Over");
		gameOver=true;
		document.getElementById("p1Display").classList.add("winning");
		}
		document.getElementById("p1Display").textContent=p1Display;
	}
	
	
});

//p2 element display code
p2.addEventListener("click",function(){
	if(!gameOver)
	{
	p2Display++;
		if(p2Display===winningScore)
		{
			console.log("GameOver");
			gameOver=true;
			document.getElementById("p2Display").classList.add("winning");
		}
	document.getElementById("p2Display").textContent=p2Display;
	}
});

resett.addEventListener("click",function(){
	restting();
	
});
//input field value changed by user winning score is set ti input value
numInput.addEventListener("change",function(){
	document.querySelector("p span").textContent=Number(numInput.value);
	winningScore=Number(numInput.value);
	restting();
});

//reset code set everything to zero
function restting()
{document.getElementById("p1Display").textContent=0;
	document.getElementById("p2Display").textContent=0;
	gameOver=false;
	document.getElementById("p2Display").classList.remove("winning");
	document.getElementById("p2Display").classList.remove("winning");
	p1Display=0;
	p2Display=0;}