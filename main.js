const signInLink = document.getElementById('sign-in');
signInLink.textContent = isSignedIn() ? 'Sign out' : 'Sign in';
signInLink.onclick = handleSignInLinkClick;

const signedInNameEl = document.getElementById('signed-in-name');

const GOOGLE_SIGNIN = 'https://accounts.google.com';
const FACEBOOK_LOGIN = 'https://www.facebook.com';

// Just for demo.
if (!isSignedIn()) {
  attemptSignIn();
} else {

}

async function attemptSignIn() {
  const credential = await navigator.credentials.get({
    password: true,
    federated: {
      providers: [GOOGLE_SIGNIN, FACEBOOK_LOGIN],
    },
    mediation: 'silent',
  });
  if (credential) {
    console.log('Signed in:', credential);
    updateUI(credential);
    tellServerAboutSignIn(credential);
    setSignedInState('true');
  }
}

function isSignedIn() {
  return localStorage['isSignedIn'] === 'true';
}

function setSignedInState(isSignedIn) {
  localStorage['isSignedIn'] = isSignedIn;
  signInLink.textContent = isSignedIn ? 'Sign out' : 'Sign in';
  if (!isSignedIn) {
    signedInNameEl.textContent = '';
  }
}

function tellServerAboutSignIn(credential) {
  // TODO: Make a request to tell the server.
  console.log('Telling server about sign in:', credential);
}

async function tellServerAboutSignOut() {
  const credential = await navigator.credentials.get({
    password: true,
    federated: {
      providers: [GOOGLE_SIGNIN, FACEBOOK_LOGIN],
    },
  });
  // TODO: Make a request to tell the server.
  console.log('Telling server about sign out:', credential);
}

function updateUI(credential) {
  signedInNameEl.textContent = `Hello ${credential.name}!`;
  signInLink.textContent = 'Sign out';
}

function handleSignInLinkClick() {
  if (isSignedIn()) {
    signOut();
  } else {
    location.href = '/sign-in';
  }
}

function signOut() {
  tellServerAboutSignOut();
  setSignedInState('false');
  navigator.credentials.preventSilentAccess();
}
