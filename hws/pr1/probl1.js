/* За допомогою методів об’єкта window створити:
        1) нове вікно розміром 300х300 пікселів.
        2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
        3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
        4) із затримкою 2 сек закрийте вікно.
*/


// let myWindow = window.open("", "", "width=300, height=300");


// setTimeout(myWindow.resizeTo(500, 500), 2000); 
// setTimeout(myWindow.moveTo(200, 200), 2000); 
// setTimeout(myWindow.close(), 2000); 


/* 2 : колір шрифту – оранжевий, розмір шрифту 20px, 
шрифт сімейства "Comic Sans MS".*/
function clickHandler(event){
    let pElem = document.querySelector("#text");
    pElem.style.color =  "#ff9900";
    pElem.style.font = "20px Comic Sans MS";

}

let btn = document.querySelector("#btn-change-style");
btn.addEventListener("click", clickHandler);

/*3*/

    
