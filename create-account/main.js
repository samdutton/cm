const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const createAccountButton = document.getElementById('sign-in');
createAccountButton.onclick = createAccount;

const signInButton = document.getElementById('sign-in');
signInButton.onclick = signIn;


// Create account for user:
// • Get data from form.
// • Upload credential data to server.
// • Store credentials on client.
async function createAccount() {
  // TODO: validate and sanitize form data.
  const credential = new window.PasswordCredential({
    id: emailInput.value,
    password: passwordInput.value,
  });
  
  await createUserOnServer(credential);
  await navigator.credentials.store(credential);
  console.log(`Created account for ${credential.id}`);
}


function signIn() {
  location.href='/sign-in';
}

// Make a request to your server to create the user.
async function createUserOnServer(credential) {
// TODO: Make a request to your server to create an account.
// TODO On server: 
// • Sanitize and validate data.
// • Check if account exists.
// • Respond accordingly.

  console.log(`Registered user ${credential.id} on server`);
}

