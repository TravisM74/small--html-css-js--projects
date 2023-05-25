 
const balanceInputEl = document.getElementById("add-value");
const addFundsButtonEl = document.getElementById("add-balance");
const balanceDisplayEl = document.getElementById("balance-display");
const infoPanelEl = document.getElementById("info-display");
const numberOfRowsEl = document.getElementById("bet-rows");
const betValueEl = document.getElementById("bet-amount");
const spinButtonEl = document.getElementById("play-again");
const gridContainerEl = document.getElementById("grid-container");

let balance =0;
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES ={
    A: 100,
    B: 20,
    C: 7,
    D: 2
}
let conditionsMeet = true;

const testConditions = ()=> {
    conditionsMeet = true;
    infoPanelEl.innerText="Spin to win!";
    if (balance < 0) {
        conditionsMeet= false;
        infoPanelEl.innerText="More money needed to play";
    }
    if (numberOfRowsEl.value > 0 && numberOfRowsEl.value <= 3){
        console.log("rows selected");
    } else {
        infoPanelEl.innerText="pick between 1 and 3 rows";
        conditionsMeet= false;
    };
    if (betValueEl.value > 0) {
        console.log("0 or positive bet value");
    } else{
        infoPanelEl.innerText="fix your bet !";
        conditionsMeet = false;
    }
    if ((numberOfRowsEl.value * betValueEl.value) > balance ){
        conditionsMeet=false;
        infoPanelEl.innerText="More money needed to play";
    } 
    playRound();
}

const displayBalance = () =>{
    balanceDisplayEl.innerText = "";
    balanceDisplayEl.innerText = balance.toString() + "€";
};

const addFunds = () => {
   
    if ((balanceInputEl.value) > 0){
        balance += parseFloat(balanceInputEl.value);
        displayBalance();
    } 
    
};

addFundsButtonEl.addEventListener("click",addFunds);
spinButtonEl.addEventListener("click",testConditions);

const spin = () => {
    const symbols = [];
    for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)) {
        console.log(symbol, count);
        for (let i = 0; i < count; i++){
                symbols.push(symbol);
        }
    }
    //console.log(symbols);
    const reels = [];
    for (let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols =[...symbols];
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
        }

    }
    return reels;
};

const transposeReels = (reels) =>{
    const rows = [];

    for (let i = 0; i < ROWS; i++){
            rows.push([]);
            for (let j = 0; j < COLS;j++){
                rows[i].push(reels[j][i])
            }
    }
    return rows;
}

const printRows = (rows) =>{
    let containerHTML = "";
    let itemId = 1
    for (const row of rows){
        let rowString = "";
        for (const [i,symbol] of row.entries()){
            rowString += symbol;
            containerHTML += `<div class="grid-item" id="grid-item${itemId}">${symbol}</div>`
            itemId++;
            
            if (i != row.length -1){ 
                rowString+=" | " 
            }; 
            
        };
        console.log(rowString);
    };
    gridContainerEl.innerHTML = containerHTML;
};

const getWinnings = (rows,lines) =>{
    let winnings = 0;
    for (let row= 0;row < lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if (allSame){
            winnings = betValueEl.value * SYMBOL_VALUES[symbols[0]];
        }

    }
    return winnings;

};

const playRound = () =>{
    if (conditionsMeet) {
        balance -= numberOfRowsEl.value * betValueEl.value;
        const reels = spin();
        const rows = transposeReels(reels);
        //console.log(reels);
        printRows(rows);
        const winnings = getWinnings(rows,numberOfRowsEl.value);
        balance += winnings;
        infoPanelEl.innerText="You won , $" +winnings.toString();
        displayBalance();
    }   
}

