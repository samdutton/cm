const storeButton = document.getElementById('store');


// Store the credential.
async function store() {
  const credential = new window.PasswordCredential({
    email: getValue('email'),
    name: getValue('email'),
    password: getValue('password'),
  })

  await navigator.credentials.store(credential);
  console.log(`Credentials stored for ${getValue('name')}`);
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

// Get the value of an element.
// NB: a production app must sanitize values.
function getValue(id) {
  return document.getElementById(id).value;
}