const target = document.querySelector('#target');
target.addEventListener('input', function (e) {
    if (target.value !== 0) {
        document.querySelector('#slt').classList.toggle("blink");
        document.querySelector('#slt').innerText = "TARGET";
        const btn = document.querySelectorAll('.btn');
        for (let button of btn) {
            button.disabled = false;
        };
        target.disabled = true;
        document.querySelector('#inst').classList.add('visible');
    }
})
const s1=document.querySelector('#p1');
const s2=document.querySelector('#p2');
const reset = document.querySelector('#reset');
reset.addEventListener("click", function (e) {
    target.value = 0;
    document.querySelector('#slt').classList.toggle("blink");
    document.querySelector('#slt').innerText = "SELECT TARGET";
    const btn = document.querySelectorAll('.btn');
    for (let button of btn) {
        button.disabled = true;
    };
    target.disabled = false;
    document.querySelector('#inst').classList.remove('visible');
    s1.innerText='0';s2.innerText='0';
    document.querySelector('body').classList.remove('p1');
    document.querySelector('body').classList.remove('p2');
})
function rand(){
    return Math.floor(Math.random()*6+1);
};
const p2=document.querySelector("#player2");
const p1=document.querySelector("#player1");
p1.addEventListener("click",function(e){
    let add=rand();
    let prev=parseInt(s1.innerText);
    let curr=add+prev;
    s1.innerText=`${curr}`;
    if(curr>=parseInt(target.value))
    {
        p1.disabled=true;
        p2.disabled=true;
        document.querySelector('body').classList.add('p1');
        reset.autofocus=true;
    }
})
p2.addEventListener("click",function(e){
    let add=rand();
    let prev=parseInt(s2.innerText);
    let curr=add+prev;
    s2.innerText=`${curr}`;
    if(curr>=parseInt(target.value))
    {
        p1.disabled=true;
        p2.disabled=true;
        document.querySelector('body').classList.add('p2');
    }
})
window.addEventListener('keyup',function(e){
    if(e.code=='ArrowRight')
    {
        p2.click();
    }
    if(e.code=='ArrowLeft')
    {
        p1.click();
    }
    if(e.code=='KeyR')
    {
        reset.click();
    }
})
const head=document.querySelector("#info");
const text=document.querySelector("#text");
const svg=document.querySelector("#svg");
head.addEventListener('click',function(){
    head.classList.add('rotate');
    setTimeout(function(){
        head.classList.toggle('img');
        text.classList.toggle('hide');
        svg.classList.toggle('none');
    },400);
    setTimeout(function(){
        head.classList.remove('rotate');
    },1000);
})
