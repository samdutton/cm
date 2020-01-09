
async function register() {

  // Persist access information in the local credentials store
  const credential = new PasswordCredential({
    id: getValue('email'),
    name: getValue('email'),
    password: getValue('password'),
  })

  await navigator.credentials.store(credential)
  show(`Credentials stored for ${user.email}`)
}

const login = async () => {
  const cred = await navigator.credentials.get({password: true})
  if (!cred) {
    return show('No credentials in store.')
  }

  // This is where the credentials are sent to the server for authentication.
  // username: cred.id
  // password: cred.password
  //
  // For the purpose of this example, we will assume that the server was happy.
  show(`You are now logged in as ${cred.id}.`)
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

function getValue()