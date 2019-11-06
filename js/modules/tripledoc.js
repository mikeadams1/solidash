//import { fetchDocument } from 'tripledoc';

import   '../../node_modules/tripledoc/dist/index.es.js';

async function initTripledoc(){
  console.log("init Tripledoc")
  getTimblProfile()
}

async function getTimblProfile() {
  const profileDocument = await fetchDocument('https://www.w3.org/People/Berners-Lee/card');
  const profile = profileDocument.getSubject('https://www.w3.org/People/Berners-Lee/card#i');
  return profile;
}


export {  initTripledoc };


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
