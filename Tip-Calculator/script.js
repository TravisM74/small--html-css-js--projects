const buttonEl = document.getElementById("calculateButton");
const amountEl = document.getElementById("bill-amount");
const tipEl = document.getElementById("tip-amount");
const totalEl = document.getElementById("total");

function calculateTip(){
    const billValue= amountEl.value;
    const tipValue= tipEl.value;
    const totalValue = billValue * (1 + tipValue /100);
    totalEl.innerText= totalValue.toFixed(2);
};

buttonEl.addEventListener("click", calculateTip);