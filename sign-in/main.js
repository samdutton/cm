const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const createAccountButton = document.getElementById('create-account');
createAccountButton.onclick = createAccount;

const togglePasswordButton = document.getElementById('toggle-password');
togglePasswordButton.onclick = togglePassword;

const credentials = navigator.credentials.get();

console.log(credentials);

function createAccount() {
  location.href='/create-account';
}

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.textContent = 'Hide password';
    togglePasswordButton.setAttribute('aria-label',
       'Hide password.');
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.textContent = 'Show password';
    togglePasswordButton.setAttribute('aria-label',
        'Show password as plain text. ' +
        'Warning: this will display your password on the screen.');
  }
}
  