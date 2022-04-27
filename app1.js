let header = document.querySelector('h1');
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc');
let body = document.querySelector("body")

function decrease (){
    header.textContent --;
}
dec.addEventListener('click', decrease);
function changeBgColorYellow() {
    body.style.backgroundColor = "yellow"
}
dec.addEventListener('click',changeBgColorYellow)


function reset () {
    header.textContent = 0;
}
res.addEventListener('click', reset);
//const body = document.querySelector("body")
function changeBgColorRed() {
    body.style.backgroundColor = "red"
}
res.addEventListener('click',changeBgColorRed)



function increase (){
    header.textContent ++;
}
inc.addEventListener('click',increase)
function changeBgColorGreen() {
    body.style.backgroundColor = "green"
}
inc.addEventListener('click',changeBgColorGreen)


//const heading = document.querySelector('h2')
//heading.style.color ='red';








