let main = document.querySelector('#main');
let mouse = document.querySelector('.curcer');

main.addEventListener("mousemove",function(deta){
    mouse.style.left = deta.x +"px"
    mouse.style.top = deta.y +"px"
});