const GOOGLE_SIGNIN  = 'https://accounts.google.com';
const FACEBOOK_LOGIN = 'https://www.facebook.com';


const signInButton = document.getElementById('sign-in');
signInButton.onclick = signIn;

async function signIn(silent) {
  const credential = await navigator.credentials.get({
    password: true,
    federated: {
      providers: [GOOGLE_SIGNIN, FACEBOOK_LOGIN],
    },
    mediation: silent ? 'silent' : 'optional',
  });
  if (credential) {
    console.log(credential);
  } else {
    console.log('No credential');
  }
}