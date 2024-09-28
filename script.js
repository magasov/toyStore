let counterDisplayElem = document.querySelector('.counter');
let counterPlusElem = document.querySelector('.product__btn');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;


function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};