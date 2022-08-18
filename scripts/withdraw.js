/*
1. add event handler with withdraw button.
2. Get withdraw amount from withdraw input field.
3. Get previous withdraw total.
4. Calculate the total withdraw amount.
4.5. Set total withdraw amount.
5. Get previous balance total.
6. Calculate new balance total.
6.5. Set new balance total.
7. Clear the deposit field
*/

// Step 1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // Step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step 7:
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert("Please provide numerical values");
        return;
    }

    // Step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('You do not have sufficient balance.');
        return;
    }

    // Step 4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // 4.5
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // Step 6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // 6.5
    balanceTotalElement.innerText = newBalanceTotal;

});