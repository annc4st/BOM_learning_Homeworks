let btnlive = document.querySelector("#live-btn");
let myDiv = document.querySelector("#my-div");

btnlive.addEventListener("mouseover", function(event){
    alert("Mouse on me!"); 
});

btnlive.addEventListener("click", function(event){
    alert("I was pressed!"); 
});

/*Mouse on me! 
         I was pressed! 
        Mouse is not on me! 
         Mouse on me! */