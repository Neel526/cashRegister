var billAmount = document.querySelector("#billAmount");
var cashAmount = document.querySelector("#cashAmount");
var btnCheck = document.querySelector("#btnCheck");
var result = document.querySelector("#result");

var btnNext = document.querySelector("#btnNext");

var cashAmt = document.querySelector(".cashAmt")
var err = document.querySelector(".err");
var err1 = document.querySelector(".err1");

var noOfNotes = document.querySelectorAll(".noOfNotes");

var Notes = [2000, 500, 100, 20, 10, 5, 1];


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
    if(Number(billAmount.value) > 0 ){
        if(Number(cashAmount.value) > Number(billAmount.value) > 0){
            err1.style.display = "none"
         var res = cashAmount.value - billAmount.value;
         calculateChange(res);
        // result.innerHTML = res + " Rs to give as change to Customer";
        


        }else{
            err1.style.display = "block"
            err1.innerHTML = "Want to wash dish?"
        }       
    } else{
        err1.style.display = "block"
        err1.innerHTML = "Incorrect bill amount"
    }
}

btnCheck.addEventListener("click", callback);

function calculateChange(res){
    for(var i = 0 ; i< Notes.length ; i++){
        var numberOfNotes = Math.trunc(res / Notes[i])

        res = res % Notes[i];

        // console.log(numberOfNotes)
        noOfNotes[i].innerText = numberOfNotes;
    }
   

   
    
}

