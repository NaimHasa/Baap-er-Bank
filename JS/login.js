document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFile = document.getElementById('user-email');
    const email = emailFile.value;
    const passFiled = document.getElementById('user-pass');
    const password = passFiled.value;
    emailFile.value = ' ';
    passFiled.value = ' ';
  

    if(email === 'naimcoder@gmail.com' && password === '1234'){
        location.href = "bank.html";
    }
    else{
      alert('error 401!!');
    }
})