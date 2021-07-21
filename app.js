var billAmount = document.querySelector("#billAmount");
var cashAmount = document.querySelector("#cashAmount");
var btnCheck = document.querySelector("#btnCheck");
var result = document.querySelector("#result");

var btnNext = document.querySelector("#btnNext");

var cashAmt = document.querySelector(".cashAmt")
var err = document.querySelector(".err");
var err1 = document.querySelector(".err1");


function showCashAmt(){
    if(Number(billAmount.value) > 0){
        btnNext.style.display = "none";
        cashAmt.style.display = "block"
        err.style.display = "none"
    }else{
        err.style.color = "red";
        err.innerHTML = "Incorrect bill amount"
    }
}

btnNext.addEventListener("click", showCashAmt)

function callback(){
    if(Number(billAmount.value) > 0 && Number(cashAmount.value) > 0){
        var res = cashAmount.value - billAmount.value;
        console.log(res)
        result.innerHTML = res + " Rs to give as change to Customer";
        err1.style.display = "none"
    } else{
        err1.style.display = "block"
        err1.innerHTML = "Incorrect bill amount"
    }
}

btnCheck.addEventListener("click", callback)
