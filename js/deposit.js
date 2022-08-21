// DRY---> Don't Repeat YourSelf
document.getElementById('btn-deposit').addEventListener('click', function () {
    /* 
    1. Get The Element By ID
    2.Get The Value From The Element
    3.Convert String Value To A Number
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');
    /* 
    1.Get Previous Deposit Total By Id
    */
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // Calculate New Deposit Total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // Set Deposit Total Value
    setTextElementValueById('deposit-total', newDepositTotal);

    // Get Previous Balance By Using The Function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})