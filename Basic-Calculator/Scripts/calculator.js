const buttonsElement = document.querySelectorAll("button");
const inputFieldElement = document.getElementById("result");
clearResults();
for (let i = 0; i < buttonsElement.length;i++){
    buttonsElement[i].addEventListener("click", () =>{
        const buttonValue = buttonsElement[i].textContent;
        if (buttonValue === 'C') {
            clearResults();
        } else if(buttonValue === '='){
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResults(){
    inputFieldElement.value = '';
}
function calculateResult(){
    inputFieldElement.value = eval(inputFieldElement.value);
}
function appendValue(buttonValue){
    inputFieldElement.value +=buttonValue;
}