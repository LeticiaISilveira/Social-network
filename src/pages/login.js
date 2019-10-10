import Button from '../components/button.js';
import Input from '../components/input.js';
import Card from '../components/card.js';

function botaoFeliz() {
  /*alert('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')*/ 
  let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
// provider.setCustomParameters({
// 'login_hint': 'user@example.com'
// });
firebase.auth().signInWithPopup(provider).then(function(result) {
// This gives you a Google Access Token. You can use it to access the Google API.
let token = result.credential.accessToken;
// The signed-in user info.
let user = result.user;
// ...
}).catch(function(error) {
// Handle Errors here.
let errorCode = error.code;
let errorMessage = error.message;
// The email of the user's account used.
let email = error.email;
// The firebase.auth.AuthCredential type that was used.
let credential = error.credential;
// ...
});

/*
firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult().then(function(result) {
if (result.credential) {
// This gives you a Google Access Token. You can use it to access the Google API.
let token = result.credential.accessToken;
// ...
}
// The signed-in user info.
let user = result.user;
}).catch(function(error) {
// Handle Errors here.
let errorCode = error.code;
let errorMessage = error.message;
// The email of the user's account used.
let email = error.email;
// The firebase.auth.AuthCredential type that was used.
let credential = error.credential;
// ...
});*/

}

function enviarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  alert(`${email}, ${password}`);
}

function Login() {
  const quadradoVerde = `
    ${Input({
      class: 'js-email-input',
      placeholder: 'email',
      type: 'text',
    })}
            ${Input({
      class: 'js-password-input bordinha-redonda',
      placeholder: 'password',
      type: 'password',
    })}
            ${Button({
      id: '🎉',
      title: 'Enviar',
      onClick: enviarLogin,
    })}
            ${Button({
      id: '🎉',
      title: '<i class="fab fa-google">GOOGLE</i> 🎉',
      onClick: botaoFeliz,
    })}
  `;    

  const template = `
    <h1>Login</h1>
    <form>
      ${Card({
        children: quadradoVerde,
      })}
    </form>
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

export default Login;