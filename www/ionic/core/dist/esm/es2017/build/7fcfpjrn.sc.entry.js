import { h } from '../ionic.core.js';

import { b as createColorClasses } from './chunk-7c632336.js';

class Chip {
    constructor() {
        this.outline = false;
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'chip-outline': this.outline, 'ion-activatable': true })
        };
    }
    render() {
        return [
            h("slot", null),
            this.mode === 'md' ? h("ion-ripple-effect", null) : null
        ];
    }
    static get is() { return "ion-chip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "outline": {
            "type": Boolean,
            "attr": "outline"
        }
    }; }
    static get style() { return ".sc-ion-chip-md-h{--background:rgba(0,0,0,0.12);--color:rgba(0,0,0,0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px;padding:7px 12px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-chip-md-h:focus{outline:none;--background:rgba(0,0,0,0.16)}.activated.sc-ion-chip-md-h{--background:rgba(0,0,0,0.2)}.ion-color.sc-ion-chip-md-h{background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}.ion-color.sc-ion-chip-md-h:focus{background:rgba(var(--ion-color-base-rgb),.12)}.ion-color.activated.sc-ion-chip-md-h{background:rgba(var(--ion-color-base-rgb),.16)}.chip-outline.sc-ion-chip-md-h{border-width:1px;border-style:solid}.chip-outline.sc-ion-chip-md-h:not(.ion-color){border-color:rgba(0,0,0,.32);background:transparent}.chip-outline.ion-color.sc-ion-chip-md-h{border-color:rgba(var(--ion-color-base-rgb),.32)}.chip-outline.sc-ion-chip-md-h:not(.ion-color):focus{background:rgba(0,0,0,.04)}.chip-outline.activated.sc-ion-chip-md-h:not(.ion-color){background:rgba(0,0,0,.08)}.sc-ion-chip-md-s > ion-icon{font-size:20px}.sc-ion-chip-md-h:not(.ion-color) .sc-ion-chip-md-s > ion-icon{color:rgba(0,0,0,.54)}.sc-ion-chip-md-s > ion-icon:first-child{margin:-4px 8px -4px -4px}.sc-ion-chip-md-s > ion-icon:last-child{margin:-4px -4px -4px 8px}.sc-ion-chip-md-s > ion-avatar{width:24px;height:24px}.sc-ion-chip-md-s > ion-avatar:first-child{margin:-4px 8px -4px -8px}.sc-ion-chip-md-s > ion-avatar:last-child{margin:-4px -8px -4px 8px}\@media (any-hover:hover){.sc-ion-chip-md-h:hover{--background:rgba(0,0,0,0.16)}.ion-color.sc-ion-chip-md-h:hover{background:rgba(var(--ion-color-base-rgb),.12)}.chip-outline.sc-ion-chip-md-h:not(.ion-color):hover{background:rgba(0,0,0,.04)}}"; }
    static get styleMode() { return "md"; }
}

export { Chip as IonChip };
