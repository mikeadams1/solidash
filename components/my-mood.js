// Import the LitElement base class and html helper function
import { LitElement, css,  html } from 'https://cdn.pika.dev/lit-element/^2.2.1';
import { HelloAgent } from '../js/agents/HelloAgent.js';

// Extend the LitElement base class
class MyMood extends LitElement {

  static get properties() {
    return { message: { type: String } };
  }

  constructor() {
  super();
  this.message = 'Hello world! From my-element';
  this.agent3 = new HelloAgent('agent3');
}

render() {
   return html`
     <p>${this.message}</p>
     <button @click=${this.clickHandler}>Test Agent from lithtml</button>
   `;
 }

 clickHandler(event) {
  console.log(event.target);
  this.agent3.send('agent1', 'Hello agent1!');
}

}
// Register the new element with the browser.
customElements.define('my-mood', MyMood);
