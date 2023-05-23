//step-01 

document.getElementById('btn-deposite').addEventListener('click', function(){
    // step 02
    const depositeInputFiled = document.getElementById('deposite-filed');
    const newDepositeTotalString = depositeInputFiled.value;
    const newDepositeTotal = parseFloat(newDepositeTotalString);
    // console.log(typeof newDepositeTotal);
    // step -03
    const depositeTotalFlied = document.getElementById('deposite-total');
    const previusTotalAmmountString = depositeTotalFlied.innerText;
    const previusTotalAmmount = parseFloat(previusTotalAmmountString);

    // step 04 

    const totalDepositeAmmount = previusTotalAmmount + newDepositeTotal;

    depositeTotalFlied.innerText = totalDepositeAmmount;

    //step 05 add total balance 

    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const PreviusTotalBalance = parseFloat(totalBalanceElementString);

    totalDepostiteBalance = PreviusTotalBalance + newDepositeTotal;
    


    totalBalanceElement.innerText = totalDepostiteBalance;


//  step - 7 -

depositeInputFiled.value = '';

})

//  Done The deposite Balance Total calcutation  