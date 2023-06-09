/*     1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій*/


const elemToChange = document.querySelector('.relative');
let btnBlue = document.querySelector("#btn-change-clr-blue");
let btnPink = document.querySelector("#btn-change-clr-pink");
let btnBrown = document.querySelector("#btn-change-clr-brown");

let linkA = document.getElementById("#link-a");


btnBlue.addEventListener("click", function(event){
    
    // event.target.backgroundColor = "#0073e6";
    elemToChange.style.backgroundColor = "#0073e6"; //blue
});

btnPink.addEventListener("dblclick", function(event){ 
    elemToChange.style.backgroundColor = "#ff6699"; // pink
});

btnBrown.addEventListener("mousedown", function(event){
    elemToChange.style.backgroundColor = "#cc6600"; // brown
});

btnBrown.addEventListener("mouseup", function(event){
    elemToChange.style.backgroundColor = "white"; // brown
});

linkA.addEventListener("mouseover", function(event){
    elemToChange.style.backgroundColor = "#ffff4d"; // yellow
});

linkA.addEventListener("mouseout", function(event){
    elemToChange.style.backgroundColor = "white";
});

