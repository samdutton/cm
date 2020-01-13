const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const registerButton = document.getElementById('register');
registerButton.onclick = register;

const togglePasswordButton = document.getElementById('toggle-password');
togglePasswordButton.onclick = togglePassword;

// Register a user:
// • Get data from form. 
// • Upload credential data to server.
// • Store credentials on client.
async function register() {
  const credential = new window.PasswordCredential({
    id:  emailInput.value,
    password: passwordInput.value,
  })
  
  // A production app would sanitize and validate the credential data.


  registerUserOnServer(credential);
  await navigator.credentials.store(credential);
  console.log(`Stored credential data for ${credential.name}`);
}

async function login() {
  const credential = await navigator.credentials.get({password: true})
  if (!credential) {
    console.log('No credentials stored.');
  }
  if (isValid(credential)) {
    console.log(`You are now logged in as ${credential.name}.`)
  } else {
    console.log(`Invalid credentials.`)
  } 
}

function logout() {
  console.log('You are now logged out.');
}

// A production app would check on your server if the credentials are valid.
function isValid(credential) {
  return true;
}

// Upload credential data to your server to register a new user.
function registerUserOnServer(credential) {
  // TODO: POST request to your server.
  console.log(`Registered user ${credential.name} on server`);
}

function togglePassword() {  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.value = 'Hide password';
    togglePasswordButton.setAttribute('aria-label', 'Hide password.');
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.value = 'Show password';
    togglePasswordButton.setAttribute('aria-label', 'Show password as plain text. Warning: this will display your password on the screen.');
  }
}


