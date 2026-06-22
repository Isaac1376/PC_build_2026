console.log("JS Connected Successfully");

alert("Welcome Dhiva!");

console.log("Welcome Dhiva!");

// ============================
// TYPEWRITER EFFECT
// ============================

const title = document.querySelector("h1");

if(title){

const text = title.innerText;

title.innerText = "";

let i = 0;

function typing(){

if(i < text.length){

title.innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}


// ============================
// NUMBER COUNTER
// ============================

const counters = document.querySelectorAll(".price");

counters.forEach(counter=>{

const value = parseInt(
counter.innerText.replace(/[₹,]/g,'')
);

let start = 0;

const speed = value / 150;

function update(){

if(start < value){

start += speed;

counter.innerText =
"₹" + Math.floor(start).toLocaleString();

requestAnimationFrame(update);

}
else{

counter.innerText =
"₹" + value.toLocaleString();

}

}

update();

});


// ============================
// CARD REVEAL
// ============================

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

});

document
.querySelectorAll(
'.total,.storage,.rating,table'
)
.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(100px)";

el.style.transition=
"1s ease";

observer.observe(el);

});


// ============================
// MOUSE GLOW
// ============================

const glow = document.createElement("div");

document.body.appendChild(glow);

glow.style.cssText = `
position:fixed;
width:250px;
height:250px;
border-radius:50%;
background:rgba(0,255,255,.15);
filter:blur(60px);
pointer-events:none;
z-index:9999;
transform:translate(-50%,-50%);
`;

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX+"px";

glow.style.top = e.clientY+"px";

});


// ============================
// FLOATING PARTICLES
// ============================

const canvas =
document.createElement("canvas");

document.body.appendChild(canvas);

canvas.style.position="fixed";
canvas.style.top="0";
canvas.style.left="0";
canvas.style.zIndex="-1";

const ctx =
canvas.getContext("2d");

function resize(){

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

}

resize();

window.addEventListener(
"resize",
resize
);

const particles=[];

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*3,

dx:(Math.random()-0.5),

dy:(Math.random()-0.5)

});

}

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.r,
0,
Math.PI*2
);

ctx.fillStyle=
"rgba(0,255,255,.7)";

ctx.fill();

p.x += p.dx;
p.y += p.dy;

if(p.x<0||p.x>canvas.width)
p.dx*=-1;

if(p.y<0||p.y>canvas.height)
p.dy*=-1;

});

requestAnimationFrame(
animateParticles
);

}

animateParticles();


// ============================
// SMOOTH SCROLL
// ============================

document
.querySelectorAll("a")
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ============================
// RGB TABLE ROW EFFECT
// ============================

const rows =
document.querySelectorAll("tr");

rows.forEach(row=>{

row.addEventListener(

"mouseenter",

()=>{

row.style.boxShadow=
"0 0 25px cyan";

}

);

row.addEventListener(

"mouseleave",

()=>{

row.style.boxShadow=
"none";

}

);

});


// ============================
// BOOT SCREEN
// ============================

const boot =
document.createElement("div");

boot.innerHTML = `

<h1>DHIVA GAMING OS</h1>

<p>Loading RTX 4090...</p>

`;

boot.style.cssText=`

position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:black;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:999999;
color:cyan;
font-family:Orbitron;
`;

document.body.appendChild(boot);

setTimeout(()=>{

boot.style.transition=
"1.5s";

boot.style.opacity="0";

setTimeout(()=>{

boot.remove();

},1500);

},2500);