// step - 01 
document.getElementById('btn-withdrow').addEventListener('click', function(){
   
//    step - 02
    const withdrowInputFiled = document.getElementById('withdrow-filed');
    const withdrowBalanceString = withdrowInputFiled.value;
    const withdrowBalance = parseFloat(withdrowBalanceString);

    // step- 03 
     
    const totalwithdrowFiled = document.getElementById('total-withdrow');
    const totalwithdrowFiledString = totalwithdrowFiled.innerText;
    const totalBalance =  parseFloat(totalwithdrowFiledString);
   
    const totalWithdrowBalacne = totalBalance + withdrowBalance;
     
    // step 04 
    totalwithdrowFiled.innerText = totalWithdrowBalacne;


    // step 05 

    const depositeTotalBalance = document.getElementById('total-balance');
    const depositeTotalString = depositeTotalBalance.innerText;
    const depositeTotal = parseFloat(depositeTotalString);

    const balanceTotal = depositeTotal - withdrowBalance ;
    

    depositeTotalBalance.innerText = balanceTotal;

    



    

   // step- 07 
   withdrowInputFiled.value = '';
    
})
