let music = document.getElementById("bgm");

function toggleMusic(){

if(music.paused){
music.play();
}else{
music.pause();
}

}

/* auto play after first click */

document.body.addEventListener("click", function(){

if(music && music.paused){
music.play().catch(()=>{});
}

},{once:true});

// BALLOON ANIMATION
function createBalloon(){

let balloon=document.createElement("div");
balloon.className="balloon";

balloon.style.left=Math.random()*100+"%";
balloon.style.background=`hsl(${Math.random()*360},70%,60%)`;

document.body.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},8000);

}

setInterval(createBalloon,700);


// HEART ANIMATION
function createHeart(){

let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},7000);

}

setInterval(createHeart,1200);


// MEMORY REVEAL
function showMemory(button){

let card=button.parentElement;

let media=card.querySelector(".media");
let video = card.querySelector("video");

media.style.display="block";
if(video){
video.classList.add("revealed");
}
button.style.display="none";

}


// FIREWORKS
const canvas=document.getElementById("fireworks");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function drawFirework(){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height/2;

for(let i=0;i<40;i++){

let angle=Math.random()*Math.PI*2;
let radius=Math.random()*80;

let px=x+Math.cos(angle)*radius;
let py=y+Math.sin(angle)*radius;

ctx.beginPath();
ctx.arc(px,py,3,0,Math.PI*2);
ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
ctx.fill();

}

}

setInterval(drawFirework,1200);

}