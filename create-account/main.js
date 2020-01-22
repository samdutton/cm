const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

const form = document.getElementById('form');
form.onsubmit = createAccount;

const signInButton = document.getElementById('sign-in');
signInButton.onclick = signIn;

// Create account for user:
// • Get data from form.
// • Upload credential data to server.
// • Store credentials on client.
async function createAccount(event) {
  event.preventDefault();
  // TODO: validate and sanitize form data.
  const credential = new window.PasswordCredential({
    id: emailInput.value,
    name: nameInput.value,
    password: passwordInput.value,
  });
  await createUserOnServer(credential);
  await navigator.credentials.store(credential);
  console.log('Stored credential:', credential);
}

function signIn() {
  location.href='/sign-in';
}

// // Make a request to your server to create the user.
async function createUserOnServer(credential) {
// TODO: Make a request to your server to create an account.
// TODO On server:
// • Sanitize and validate data.
// • Check if account exists.
// • Respond accordingly.
  console.log(`Created account for ${credential.id} on server`);
}

