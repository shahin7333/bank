
// handle deposite button Event

document.getElementById('button-deposite').addEventListener('click', function () {
    const inputDeposite = document.getElementById('deposite-input');
    const newDepositeText = inputDeposite.value;
    const newDepositeAmount = parseFloat(newDepositeText);

    // update deposite
    const depositeAdd = document.getElementById('deposite-add');
    const previousDepositeText = depositeAdd.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositeAdd = previousDepositeAmount + newDepositeAmount;
    depositeAdd.innerText = newDepositeAdd;

    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalaceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalaceTotal;

    // clear the deposite input
    inputDeposite.value = '';

})


// handle withdraw button event

document.getElementById('button-withdraw').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('withdraw-input');
    const newWithdrawText = inputWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);


    // update withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmonut = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotalAmonut + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    // after withdraw update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(previousBalanceText);
    const newBalaceTotal = previousBalaceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalaceTotal;

    // clear inputWithdraw
    inputWithdraw.value = '';


})