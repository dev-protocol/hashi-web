import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hs-button')
export class HSButton extends LitElement {
  @property()
  icon?: HTMLCollection|string;

  @property()
  type?: string;

  @property()
  link?: string;

  @property()
  isDisabled?: boolean;

  @property()
  onClick?: () => void;

  ButtonBase = html`
    <i class="hs-button__icon" aria-hidden="true">${ this.icon }</i>
    <span class="hs-button__label"><slot></slot></span>
  `;

  render() {
    if (this.link) {
      return html`
        <a href=${this.link} class=${`hs-button${ this.type && ' ' + this._assertType(this.type) }`} @click=${this.onClick}>
            ${this.ButtonBase}
        </a>
      `
    }

    return html`
      <button class=${`hs-button${ this.type && ' ' + this._assertType(this.type) }`} @click=${this.onClick} disabled=${this.isDisabled}>
        ${this.ButtonBase}
      </button>
    `
  }

  private _assertType(type: string): string {
    const finalTypes: Array<string> = [];
    type.split(' ').forEach((type) => {
      finalTypes.push('is-' + type);
    });
    return finalTypes.join(' ');
  }
}