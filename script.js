// deposit money 

document.getElementById('deposit-btn').addEventListener('click', function(){
const depositInput = document.getElementById('deposit-input');
const depositValue = depositInput.value;

const currentDeposite = document.getElementById('total-deposit');
const currentDepositeAmount = currentDeposite.innerText;

const updateDeposit = parseFloat(currentDepositeAmount) + parseFloat(depositValue);
currentDeposite.innerText = updateDeposit;


// update balance

const currentBalance = document.getElementById('total-balance');
const currentBalanceAmount = currentBalance.innerText;

const updateBalance = parseFloat(currentBalanceAmount) + parseFloat(depositValue);
currentBalance.innerText = updateBalance;

console.log(depositValue);
depositInput.value = '';
});




// withdraw money 

document.getElementById('withdraw-btn').addEventListener('click', function(){
const withdrawInput = document.getElementById('withdraw-input');
const withdrawValue = withdrawInput.value;

const currentWithdraw = document.getElementById('total-withdraw');
const currentWithdrawAmount = currentWithdraw.innerText;

const updateWithdraw = parseFloat(currentWithdrawAmount) + parseFloat(withdrawValue);
currentWithdraw.innerText = updateWithdraw;


// update balance

const currentBalance = document.getElementById('total-balance');
const currentBalanceAmount = currentBalance.innerText;

const updateBalance = parseFloat(currentBalanceAmount) - parseFloat(withdrawValue);
currentBalance.innerText = updateBalance;

console.log(withdrawValue);
withdrawInput.value = '';
});
