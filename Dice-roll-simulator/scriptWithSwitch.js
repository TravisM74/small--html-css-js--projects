const buttonEl = document.getElementById("rollButton");
const rollHistoryEl = document.getElementById("roll-history");
const diceEl = document.getElementById("dice");

function rollAnimation(){
    diceEl.classList.add("roll-animation");
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation");
    },1000)
};
let historyList = [];

function rollDice(){
    const diceRoll1= 9856
    const rollResult= Math.floor(Math.random() *6);
    // diceEl.innerHTML = `&#`+ roll;
    // console.log(`&#`+ (diceRoll1 + Math.floor(Math.random() *6)));
    const diceFace =getDiceFace(rollResult);
    diceEl.innerHTML=(diceFace);
    historyList.push(diceFace);
    updateRollHistory();
};


function updateRollHistory(){
    rollHistoryEl.innerHTML ="";
    for (let i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML =`Roll ${i+1} : <span>${historyList[i]}</span>`
        rollHistoryEl.appendChild(listItem);
    }
   
};

function getDiceFace(rollresult){
    switch(rollresult){
        case 0:
            return "&#9856;";
        case 1:
            return "&#9857;";
        case 2:
            return "&#9858;";
        case 3:
            return "&#9859;";
        case 4:
            return "&#9860;";
        case 5:
            return "&#9861;";
        default:
            return "";
    }

};

buttonEl.addEventListener("click",()=>{
    rollAnimation();
   rollDice();
});