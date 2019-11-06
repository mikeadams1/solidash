// Import the LitElement base class and html helper function
import { LitElement, html } from 'https://cdn.pika.dev/lit-element/^2.2.1';

// Use relative paths for peer dependencies
import './my-element.js';
import './my-mood.js';

class MainElement extends LitElement{
  render(){
    return html`
    one
    <my-element></my-element>
    two
    <my-element></my-element>
    3
    <my-mood message="transfered message"></my-mood>
    qua
    `;
  }
}
customElements.define('main-element', MainElement);
