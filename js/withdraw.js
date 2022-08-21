/* 
1.Add Withdraw Button Event Handler
2.Get Withdraw Amount By Using getInputFieldValueById Function
3.Get Previous Withdraw Amount By Using getTextElementValueById Function
4.Calculate new Withdraw Total And Set The Value
4-5.Set New Withdraw Total By Using setTextElementValueById Function
5.Get Previous Balance Total By Using getTextElementValueById Function
6.Calculate New Balance Total
7.Set Balance Total By Using setTextElementValueById Function
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})