let mail = document.getElementById('mail');
let password = document.getElementById('passkey');
let login = document.getElementById('login');

login.addEventListener('click', () => {
    let mailid = mail.value.trim();
    let pass = password.value.trim();

    if (mailid === '') {
        alert('Please first fill the mail');
        return; 
    }

 
    if (pass === '') {
        alert('Please fill the pass key');
        return; 
    }

    
    if (mailid !== '' && pass !== '') {
        window.location.href = 'sign.html'; // Redirect only if both fields are filled
    }
});



