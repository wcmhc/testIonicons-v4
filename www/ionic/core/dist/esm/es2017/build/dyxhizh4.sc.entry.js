import { h } from '../ionic.core.js';

import { b as createColorClasses, d as hostContext } from './chunk-7c632336.js';
import { d as findItemLabel, e as renderHiddenInput } from './chunk-6d7d2f8c.js';

class Checkbox {
    constructor() {
        this.inputId = `ion-cb-${checkboxIds++}`;
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
        this.onClick = () => {
            this.checked = !this.checked;
        };
        this.onKeyUp = () => {
            this.keyFocus = true;
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.keyFocus = false;
            this.ionBlur.emit();
        };
    }
    componentWillLoad() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    }
    hostData() {
        const labelId = this.inputId + '-lbl';
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        return {
            'role': 'checkbox',
            'aria-disabled': this.disabled ? 'true' : null,
            'aria-checked': `${this.checked}`,
            'aria-labelledby': labelId,
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'checkbox-checked': this.checked, 'checkbox-disabled': this.disabled, 'checkbox-key': this.keyFocus, 'interactive': true })
        };
    }
    render() {
        renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);
        return [
            h("svg", { class: "checkbox-icon", viewBox: "0 0 24 24" }, this.mode === 'md'
                ? h("path", { d: "M1.73,12.91 8.1,19.28 22.79,4.59" })
                : h("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8" })),
            h("button", { type: "button", onClick: this.onClick, onKeyUp: this.onKeyUp, onFocus: this.onFocus, onBlur: this.onBlur })
        ];
    }
    static get is() { return "ion-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "mutable": true,
            "watchCallbacks": ["checkedChanged"]
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["emitStyle"]
        },
        "el": {
            "elementRef": true
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
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
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-checkbox-md-h{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-color.sc-ion-checkbox-md-h{--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button.sc-ion-checkbox-md{left:0;top:0;margin:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.checkbox-icon.sc-ion-checkbox-md, button.sc-ion-checkbox-md{width:100%;height:100%}.checkbox-icon.sc-ion-checkbox-md{border-radius:var(--border-radius);display:block;position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{opacity:1}.checkbox-disabled.sc-ion-checkbox-md-h{pointer-events:none}.sc-ion-checkbox-md-h{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(0,0,0,0.54);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}.checkbox-checked.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md   path.sc-ion-checkbox-md{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}.checkbox-disabled.sc-ion-checkbox-md-h{opacity:.3}.checkbox-key.sc-ion-checkbox-md-h   .checkbox-icon.sc-ion-checkbox-md:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}.in-item.sc-ion-checkbox-md-h{margin:18px 0;display:block;position:static}.in-item[slot=start].sc-ion-checkbox-md-h{margin:18px 36px 18px 4px}"; }
    static get styleMode() { return "md"; }
}
let checkboxIds = 0;

export { Checkbox as IonCheckbox };
