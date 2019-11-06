// Import the LitElement base class and html helper function
import { LitElement, css,  html } from 'https://cdn.pika.dev/lit-element/^2.2.1';

// Extend the LitElement base class
class MyMood extends LitElement {

  static get properties() {
    return { message: { type: String } };
  }

  constructor() {
  super();
  this.message = 'Hello world! From my-element';
}

render() {
   return html`
     <p>${this.message}</p>
   `;
 }
}
// Register the new element with the browser.
customElements.define('my-mood', MyMood);
