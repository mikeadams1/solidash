import  '../../node_modules/solid-auth-client/dist-lib/solid-auth-client.bundle.js';

async function initSolid(){
  console.log("init Solid")
  solid.auth.trackSession(session => {
    if (!session)
    console.log('The user is not logged in')
    else
    console.log(`The user is ${session.webId}`)
  })

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
