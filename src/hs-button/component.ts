/*
 * Copyright (c) 2023 Dev Protocol
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement, property } from 'lit/decorators';
import { HSButtonType } from './types';
import styles from './styles';

@customElement('hs-button')
export class HSButton extends LitElement {
  @property() link: string|undefined;
  @property() type: HSButtonType|string = '';
  @property({ attribute: 'icon-type' }) iconType: 'leading'|'trailing' = 'trailing';
  @property({ attribute: 'disabled' }) isDisabled: boolean = false;
  @property({ attribute: 'on-click'}) onClick: () => void;

  static styles = css`${unsafeCSS(styles)}`;

  private handleTypes(type: HSButtonType|string): string {
    const finalTypes: string[] = [];
    type.split(' ').forEach((type) => {
      finalTypes.push('is-' + type);
    });
    return finalTypes.join(' ');
  }

  private handleLinkTarget(link: string): string {
    return (link.startsWith('http://') || link.startsWith('https://')) ? '_blank' : '_self';
  }

  private baseMarkup = html`
    ${this.iconType == 'trailing' ? html`<i class="hs-button__icon"><slot name="icon"></slot></i>` : null}
    <span class="hs-button__label"><slot></slot></span>
    ${this.iconType == 'leading' ? html`<i class="hs-button__icon"><slot name="icon"></slot></i>` : null}
  `;

  protected render() {
    if (!this.link) {
      return html`
        <button
          class="hs-button${this.type ? ' ' + this.handleTypes(this.type) : ''}"
          disabled="${this.isDisabled}"
          @click="${this.onClick}"
        >
          ${this.baseMarkup}
        </button>
      `;
    }

    return html`
      <a
        href="${this.link}"
        class="hs-button${this.type ? ' ' + this.handleTypes(this.type) : ''}"
        target="${this.link ? this.handleLinkTarget(this.link) : ''}"
        aria-disabled="${this.isDisabled}"
      >
        ${this.baseMarkup}
      </a>
    `;
  }
}