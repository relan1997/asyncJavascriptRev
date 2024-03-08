const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const body=document.body;

function randomColor(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}
let intervalId;

function startChangeColor(){
    body.style.backgroundColor=randomColor();
}

start.addEventListener('click',()=>{
    if(!intervalId)  // only to add an Interval if one is already added this prevents multiple setIntervals to have the ref in the same variable;
        intervalId=setInterval(startChangeColor,1000);
})

stop.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId=null;  // to flush out the alrady existing intervalId so as to optimize the space
})