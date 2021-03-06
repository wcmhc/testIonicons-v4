import { h } from '../ionic.core.js';

import { d as hostContext, b as createColorClasses, c as openURL } from './chunk-7c632336.js';

class Fab {
    constructor() {
        this.edge = false;
        this.activated = false;
    }
    activatedChanged() {
        const activated = this.activated;
        const fab = this.el.querySelector('ion-fab-button');
        if (fab) {
            fab.activated = activated;
        }
        Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(list => {
            list.activated = activated;
        });
    }
    componentDidLoad() {
        if (this.activated) {
            this.activatedChanged();
        }
    }
    onClick() {
        const hasList = !!this.el.querySelector('ion-fab-list');
        if (hasList) {
            this.activated = !this.activated;
        }
    }
    close() {
        this.activated = false;
    }
    hostData() {
        return {
            class: {
                [`fab-horizontal-${this.horizontal}`]: this.horizontal !== undefined,
                [`fab-vertical-${this.vertical}`]: this.vertical !== undefined,
                'fab-edge': this.edge
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-fab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "type": Boolean,
            "attr": "activated",
            "mutable": true,
            "watchCallbacks": ["activatedChanged"]
        },
        "close": {
            "method": true
        },
        "edge": {
            "type": Boolean,
            "attr": "edge"
        },
        "el": {
            "elementRef": true
        },
        "horizontal": {
            "type": String,
            "attr": "horizontal"
        },
        "vertical": {
            "type": String,
            "attr": "vertical"
        }
    }; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick"
        }]; }
    static get style() { return ".sc-ion-fab-h{position:absolute;z-index:999}.fab-horizontal-center.sc-ion-fab-h{left:50%;margin-left:-28px}.fab-horizontal-start.sc-ion-fab-h{left:calc(10px + var(--ion-safe-area-left, 0px))}.fab-horizontal-end.sc-ion-fab-h{right:calc(10px + var(--ion-safe-area-right, 0px))}.fab-vertical-top.sc-ion-fab-h{top:10px}.fab-vertical-top.fab-edge.sc-ion-fab-h{top:-28px}.fab-vertical-bottom.sc-ion-fab-h{bottom:10px}.fab-vertical-bottom.fab-edge.sc-ion-fab-h{bottom:-28px}.fab-vertical-center.sc-ion-fab-h{margin-top:-28px;top:50%}"; }
}

class FabButton {
    constructor() {
        this.keyFocus = false;
        this.activated = false;
        this.disabled = false;
        this.routerDirection = 'forward';
        this.show = false;
        this.translucent = false;
        this.type = 'button';
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onKeyUp = () => {
            this.keyFocus = true;
        };
        this.onBlur = () => {
            this.keyFocus = false;
            this.ionBlur.emit();
        };
    }
    hostData() {
        const { el, disabled, color, activated, show, translucent, size, keyFocus } = this;
        const inList = hostContext('ion-fab-list', el);
        return {
            'aria-disabled': disabled ? 'true' : null,
            class: Object.assign({}, createColorClasses(color), { 'fab-button-in-list': inList, 'fab-button-translucent-in-list': inList && translucent, 'fab-button-close-active': activated, 'fab-button-show': show, 'fab-button-disabled': disabled, 'fab-button-translucent': translucent, 'ion-activatable': true, 'focused': keyFocus, [`fab-button-${size}`]: size !== undefined })
        };
    }
    render() {
        const TagType = this.href === undefined ? 'button' : 'a';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus, onKeyUp: this.onKeyUp, onBlur: this.onBlur, onClick: (ev) => openURL(this.win, this.href, ev, this.routerDirection) }),
            h("span", { class: "close-icon" },
                h("ion-icon", { name: "close", lazy: false })),
            h("span", { class: "button-inner" },
                h("slot", null)),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-fab-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "type": Boolean,
            "attr": "activated"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "show": {
            "type": Boolean,
            "attr": "show"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-fab-button-md-h{--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;margin:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-fab-button-md-h   .button-native.sc-ion-fab-button-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.ion-color.activated.sc-ion-fab-button-md-h   .button-native.sc-ion-fab-button-md, .ion-color.focused.sc-ion-fab-button-md-h   .button-native.sc-ion-fab-button-md{background:var(--ion-color-shade);color:var(--ion-color-contrast)}.button-native.sc-ion-fab-button-md{border-radius:var(--border-radius);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-native[disabled].sc-ion-fab-button-md{cursor:default;opacity:.5;pointer-events:none}.button-inner.sc-ion-fab-button-md{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.activated.sc-ion-fab-button-md-h   .button-native.sc-ion-fab-button-md{background:var(--background-activated);color:var(--color-activated)}.focused.sc-ion-fab-button-md-h   .button-native.sc-ion-fab-button-md{background:var(--background-focused);color:var(--color-focused)}.fab-button-disabled.sc-ion-fab-button-md-h{pointer-events:none}.sc-ion-fab-button-md-s > ion-icon{line-height:1}.fab-button-small.sc-ion-fab-button-md-h{margin:8px;width:40px;height:40px}.close-icon.sc-ion-fab-button-md{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}.fab-button-close-active.sc-ion-fab-button-md-h   .close-icon.sc-ion-fab-button-md{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}.fab-button-close-active.sc-ion-fab-button-md-h   .button-inner.sc-ion-fab-button-md{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect.sc-ion-fab-button-md{color:var(--ripple-color)}.sc-ion-fab-button-md-h{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--background);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--transition:box-shadow 280ms cubic-bezier(0.4,0,0.2,1),background-color 280ms cubic-bezier(0.4,0,0.2,1),color 280ms cubic-bezier(0.4,0,0.2,1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0,0,0.2,1) 0ms}.activated.sc-ion-fab-button-md-h{--box-shadow:0 7px 8px -4px rgba(0,0,0,0.2),0 12px 17px 2px rgba(0,0,0,0.14),0 5px 22px 4px rgba(0,0,0,0.12)}.close-icon.sc-ion-fab-button-md, .sc-ion-fab-button-md-s > ion-icon{font-size:24px}.fab-button-in-list.sc-ion-fab-button-md-h{--color:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated)}.sc-ion-fab-button-md-h.fab-button-in-list .sc-ion-fab-button-md-s > ion-icon{font-size:18px}"; }
    static get styleMode() { return "md"; }
}

class FabList {
    constructor() {
        this.activated = false;
        this.side = 'bottom';
    }
    activatedChanged(activated) {
        const fabs = Array.from(this.el.querySelectorAll('ion-fab-button'));
        const timeout = activated ? 30 : 0;
        fabs.forEach((fab, i) => {
            setTimeout(() => fab.show = activated, i * timeout);
        });
    }
    hostData() {
        return {
            class: {
                'fab-list-active': this.activated,
                [`fab-list-side-${this.side}`]: true
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-fab-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "type": Boolean,
            "attr": "activated",
            "watchCallbacks": ["activatedChanged"]
        },
        "el": {
            "elementRef": true
        },
        "side": {
            "type": String,
            "attr": "side"
        }
    }; }
    static get style() { return ".sc-ion-fab-list-h{margin:66px 0;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}.fab-list-active.sc-ion-fab-list-h{display:-ms-flexbox;display:flex}.sc-ion-fab-list-s > .fab-button-in-list{margin:8px 0;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}.sc-ion-fab-list-h.fab-list-side-bottom .sc-ion-fab-list-s > .fab-button-in-list, .sc-ion-fab-list-h.fab-list-side-top .sc-ion-fab-list-s > .fab-button-in-list{margin:5px 0}.sc-ion-fab-list-h.fab-list-side-end .sc-ion-fab-list-s > .fab-button-in-list, .sc-ion-fab-list-h.fab-list-side-start .sc-ion-fab-list-s > .fab-button-in-list{margin:0 5px}.sc-ion-fab-list-s > .fab-button-in-list.fab-button-show{-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}.fab-list-side-top.sc-ion-fab-list-h{top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fab-list-side-start.sc-ion-fab-list-h{margin:0 66px;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.fab-list-side-end.sc-ion-fab-list-h{margin:0 66px;left:0;-ms-flex-direction:row;flex-direction:row}"; }
}

export { Fab as IonFab, FabButton as IonFabButton, FabList as IonFabList };
