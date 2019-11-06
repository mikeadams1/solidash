import  '../../libs/solid-auth-client.bundle.js';

async function initSolid(){
  console.log("init Solid")

  $('#login').click(function(){
    console.log("login")
    popupLogin();
  });
  $('#logout').click(function(){
    console.log("logout")
    solid.auth.logout()
    .then(() => alert('Goodbye!'));
  });


  //switchLogButtons()
  solid.auth.trackSession(session => {
    if (!session){
      console.log('The user is not logged in')
      switchLogButtons(null)
      //  popupLogin();
    }

    else{
      console.log(`The user is ${session.webId}`)
      switchLogButtons(session)
    }

  })


  //testTBLFriends();
}


async function popupLogin() {
  let session = await solid.auth.currentSession();
  let popupUri = 'https://solid.community/common/popup.html';
  if (!session)
  session = await solid.auth.popupLogin({ popupUri });
  alert(`Logged in as ${session.webId}`);
  //  switchLogButtons()
}

function testTBLFriends(){
  solid.auth.fetch('https://timbl.com/timbl/Public/friends.ttl')
  .then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(function(json) {
        // traitement du JSON
        console.log(json)
      });
    } else {
      console.log("Oops, nous n'avons pas du JSON!");
      response.text().then(function(text){
        console.log(text)
      })
    }
  });
}

function switchLogButtons(session){
  console.log("switch log buttons", session)
  console.log($('logged'))
  console.log($('not-logged'))
  if (session != null){
    $('.not-logged').addClass('d-none')
    $('.logged').removeClass('d-none')
  }else{
    $('.logged').addClass('d-none')
    $('.not-logged').removeClass('d-none')
  }


}





export {  initSolid };


/*.then(function(valeur) => {
// Promesse tenue
//console.log("Ok ",valeur)
//console.log("BLOB ",valeur.blob())
//console.log("JSON ",valeur.json())
console.log("TEXT ",valeur.text())


}, (raison) => {
// Rejet de la promesse
console.log("Erreur ",raison)
});*/
