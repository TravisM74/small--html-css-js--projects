const birth = document.getElementById("birthday");
const resultEl = document.getElementById("results");
const buttonEl = document.getElementById("cal-button");
buttonEl.addEventListener("click",calcAge);

function getAge(birthday){
    const today = new Date();
    const todayYear = today.getFullYear();
    const birthdayDate =new Date(birthday);
    const birthdayYear =birthdayDate.getFullYear();
   
    if (today.getMonth() >= birthdayDate.getMonth()){
        if (today.getDay() > birthdayDate.getDay()) {
            return (todayYear - birthdayYear)+1;
        } 
    } else {
        return (todayYear - birthdayYear);
    }
};

function calcAge(){
    //console.log("clicked");
    console.log(birth.value);
    if (birth.value === "" ){
        alert("Please enter your birthday !")
    } else {
        const age = getAge(birth.value);
        //console.log(date);
        resultEl.innerText =`You are ${age.toString()} ${age > 1 ? "years" : "year"} old.`;
    }
};