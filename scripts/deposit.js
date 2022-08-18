// Step 1: Add event listener/ click handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // Step 2: Get deposit amount from deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    if(isNaN(newDepositAmount)){
        alert("Please provide numerical values");
        return;
    }

    // Step 3: Get the deposit total/current amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step 4: Add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // Setting deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step 5: Get current total balance
    balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step 6: Calculate total balance by adding deposit amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step 7: Clear the deposit field
    depositField.value = '';
});