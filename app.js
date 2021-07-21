var billAmount = document.querySelector("#billAmount");
var cashAmount = document.querySelector("#cashAmount");
var btnCheck = document.querySelector("#btnCheck");
var result = document.querySelector("#result");

var btnNext = document.querySelector("#btnNext");

var cashAmt = document.querySelector(".cashAmt")

function showCashAmt(){
    btnNext.style.display = "none";
    cashAmt.style.display = "block"

}

btnNext.addEventListener("click", showCashAmt)

function callback(){
    var res = cashAmount.value - billAmount.value;
    console.log(res)
    result.innerHTML = res + " Rs to give as change to Customer";
}

btnCheck.addEventListener("click", callback)
