const buttonEl = document.getElementById("rollButton");
const rollHistoryEl = document.getElementById("roll-history");
const diceEl = document.getElementById("dice");

function rollAnimation(){
    diceEl.classList.add("roll-animation");
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation");
    },1000)
};
let currentDiceRoll = 1;
function rollDice(){
    const diceRoll1= 9856
    diceEl.innerHTML = `&#`+ (diceRoll1 + Math.floor(Math.random() *6));
    console.log(`&#`+ (diceRoll1 + Math.floor(Math.random() *6)));
    rollHistoryEl.innerHTML += `<li>Roll ${currentDiceRoll} : <span>${diceEl.innerHTML}</span></li>`
    currentDiceRoll++;
};


buttonEl.addEventListener("click",()=>{
    rollAnimation();
    rollDice();
});