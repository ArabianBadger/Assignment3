function processEntries(evt){
    evt.preventDefault(); // Prevent the form from submitting
    
    // Get values from inputs and convert them to floating point numbers
    const subAmount = parseFloat(document.getElementById('subtotal').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    // Validate inputs
    if ((subAmount <= 0) || (subAmount >= 10000)) {
        alert("Subtotal must be > 0 and < 10000");
        return;  
    }
    if((taxRate < 0) || (taxRate > 12)){
        alert('The tax rate you have entered must be greater than zero and less than 12');
        return;
    }

    // Focus on the subtotal field for user convenience
    document.getElementById("subtotal").focus();

    // Calculate sales tax and total
    const salesTax = subAmount * (taxRate / 100);
    const total = subAmount + salesTax;

    // Display the results
    document.getElementById('salesTax').value = salesTax.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);
}

function clearScreen(){
    // Clear all input fields
    document.getElementById('subtotal').value = "";
    document.getElementById('taxRate').value = "";
    document.getElementById('salesTax').value = "";
    document.getElementById('total').value = "";
    document.getElementById('subtotal').focus();
}

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to buttons
    document.getElementById('calculateButton').addEventListener('click', processEntries);
    document.getElementById('clearButton').addEventListener('click', clearScreen);
});