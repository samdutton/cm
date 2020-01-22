const GOOGLE_SIGNIN = 'https://accounts.google.com';
const FACEBOOK_LOGIN = 'https://www.facebook.com';

const passwordInput = document.getElementById('password');

const signedInNameEl = document.getElementById('signed-in-name');


const createAccountButton = document.getElementById('create-account');
createAccountButton.onclick = showCreateAccountPage;

const form = document.getElementById('form');
form.onsubmit = attemptSignIn;

const togglePasswordButton = document.getElementById('toggle-password');
togglePasswordButton.onclick = togglePassword;

function showCreateAccountPage() {
  location.href='/create-account';
}

async function attemptSignIn(event) {
  event.preventDefault();
  const credential = await navigator.credentials.get({
    password: true,
    federated: {
      providers: [GOOGLE_SIGNIN, FACEBOOK_LOGIN],
    },
    mediation: 'silent',
  });
  if (credential) {
    console.log('Signing in:', credential);
    updateUI(credential);
    tellServerAboutSignIn(credential);
    setSignedInState('true');
    location.href = '../';
  } else {
    location.href = '../create-account';
  }
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

function updateUI(credential) {
  signedInNameEl.textContent = `Hello ${credential.name}!`;
}
function tellServerAboutSignIn(credential) {
  // TODO: Make a request to tell the server.
  console.log('Telling server about sign in:', credential);
}

function setSignedInState(value) {
  localStorage['isSignedIn'] = value;
}


