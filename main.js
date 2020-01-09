
// Store the credential.
async function store() {
  const credential = new window.PasswordCredential({
    id: getValue('email'),
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

  console.log(`You are now logged in as ${credential.id}.`)
}

const logout = () => {
  show('You are now logged out.')
}

const show = (msg) => {
  document.getElementById('welcome-text').innerHTML = msg
}

const callRegister = (user) => {
  return new Promise((resolve, reject) => {
    if (!user.email) {
      return reject(new Error('username too short'))
    }

    if (!user.password) {
      return reject(new Error('password too short'))
    }

    resolve({
      avatar: `https://www.gravatar.com/avatar/${md5(user.email)}?d=robohash`,
    })
  })
}

// Get the value of an element.
// NB: a production app must sanitize values.
function getValue(id) {
  return document.getElementById(id).value;
}