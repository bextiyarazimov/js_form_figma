

const form = document.getElementById('form');
const username = document.getElementById('username');
const passwordInput = document.getElementById('password');


const input_text_label = document.getElementById('input_text_label');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});

  function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const input_text_labelValue = input_text_label.value.trim();


     if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
     } else {
        // add success class
        setSuccessFor(username);
     }


     if(input_text_labelValue === '') {
        // show error
        // add error class
        setErrorFor(input_text_label, 'Username cannot be blank');
     } else {
        // add success class
        setSuccessFor(input_text_label);
     }


     


  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;// .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';

  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

  }


  