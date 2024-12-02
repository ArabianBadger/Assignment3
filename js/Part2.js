const $ = (selector) => document.querySelector(selector)
function processEntry(){
    const changeAmount = parseInt($('#changeamount').value);

    if ((changeAmount <= 0 ) || (changeAmount > 99)){
        alert('The number has to be bewtween 0 and  99')
        return
    } else{
        makeChange(changeAmount)
    }
}
function makeChange(changeAmount){
    
    const quarterAmount = Math.floor(changeAmount / 25);
    changeAmount -= quarterAmount * 25;

    const dimeAmount = Math.floor(changeAmount / 10);
    changeAmount -= dimeAmount * 10;

    const nickelAmount = Math.floor(changeAmount / 5);
    changeAmount -= nickelAmount * 5;

    const penniesAmount = changeAmount;

    $("#quaters").value = quarterAmount;
    $("#dimes").value = dimeAmount;
    $("#nickels").value = nickelAmount;
    $("#pennies").value = penniesAmount;
}


document.addEventListener('DOMContentLoaded', function() {
    $('#calculateButton').addEventListener('click', processEntry);
})