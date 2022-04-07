import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { HSButton } from './hs-button';

@customElement('app')
export class App extends LitElement {
  render() {
    return html`
      ${ new HSButton().render() }
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app': App
  }
}
