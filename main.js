const registerButton = document.getElementById('register');
registerButton.onclick = register;

const loginButton = document.getElementById('login');
loginButton.onclick = login;

const logoutButton = document.getElementById('logout');
logoutButton.onclick = logout;


// Register a user:
// • Get data from form. 
// • Upload credential data to server.
// • Store credentials on client.
async function register() {
  const credential = new window.PasswordCredential({
    email: getValue('email'),
    name: getValue('name'),
    password: getValue('password'),
  })
  
  // A production app would validate the credential data.

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


// Get the value of an element.
// NB: a production app would sanitize values here and on the backend.
function getValue(name) {
  return document.querySelector(`input[name=${name}]`).value;
}