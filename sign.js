let login = document.getElementById('login');
let input_val = document.getElementById('value');
let mail = document.getElementById('mail');
let password = document.getElementById('passkey');
let cnfr_pass = document.getElementById('cnfrm_passkey');

login.addEventListener('click', () => {
    // Fill the mail
    if (mail.value.trim() === '') {
        alert('Please first fill the mail');
        return; // Exit the function if mail is empty
    }

    // Check if password is empty
    if (password.value.trim() === '') {
        alert('Please fill the pass key');
        return; // Exit the function if password is empty
    }

    // Check if passwords match
    if (password.value !== cnfr_pass.value) {
        alert('Check your pass key');
        return; // Exit the function if passwords do not match
    }

    // Section for login as student/teacher
    let val = input_val.value.trim().toLowerCase();

    // Check if input is 'teacher' or 'student' and redirect accordingly
    if (val === 'teacher') {
        window.location.href = 'teacherDashboard.html';
    } else if (val === 'student') {
        window.location.href = 'studentDashboard.html';
    } else {
        alert('Enter the value as Teacher or Student');
    }
});
;

