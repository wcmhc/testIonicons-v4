import { h } from '../ionic.core.js';

import { b as createColorClasses, d as hostContext } from './chunk-7c632336.js';
import { d as findItemLabel, e as renderHiddenInput } from './chunk-6d7d2f8c.js';
import { d as hapticSelection } from './chunk-81780b86.js';

class Toggle {
    constructor() {
        this.inputId = `ion-tg-${toggleIds++}`;
        this.pivotX = 0;
        this.activated = false;
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.emitStyle();
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    onClick() {
        this.checked = !this.checked;
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    componentWillLoad() {
        this.emitStyle();
    }
    async componentDidLoad() {
        this.gesture = (await import('./chunk-f56eaea8.js')).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: 'toggle',
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled,
        });
    }
    onStart(detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
        detail.event.preventDefault();
        return true;
    }
    onMove(detail) {
        const currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            hapticSelection();
        }
    }
    onEnd(detail) {
        const delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            hapticSelection();
        }
        this.activated = false;
    }
    getValue() {
        return this.value || '';
    }
    hostData() {
        const labelId = this.inputId + '-lbl';
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        return {
            'role': 'checkbox',
            'tabindex': '0',
            'aria-disabled': this.disabled ? 'true' : null,
            'aria-checked': `${this.checked}`,
            'aria-labelledby': labelId,
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'toggle-activated': this.activated, 'toggle-checked': this.checked, 'toggle-disabled': this.disabled, 'toggle-key': this.keyFocus, 'interactive': true })
        };
    }
    render() {
        const value = this.getValue();
        renderHiddenInput(true, this.el, this.name, (this.checked ? value : ''), this.disabled);
        return (h("div", { class: "toggle-icon" },
            h("div", { class: "toggle-inner" })));
    }
    static get is() { return "ion-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "state": true
        },
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
            "watchCallbacks": ["disabledChanged"]
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
        "queue": {
            "context": "queue"
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
    static get listeners() { return [{
            "name": "click",
            "method": "onClick"
        }, {
            "name": "keyup",
            "method": "onKeyUp"
        }, {
            "name": "focus",
            "method": "onFocus"
        }, {
            "name": "blur",
            "method": "onBlur"
        }]; }
    static get style() { return ".sc-ion-toggle-ios-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.toggle-key.sc-ion-toggle-ios-h   input.sc-ion-toggle-ios{border:2px solid #5e9ed6}.toggle-disabled.sc-ion-toggle-ios-h, input.sc-ion-toggle-ios{pointer-events:none}input.sc-ion-toggle-ios{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.sc-ion-toggle-ios-h{--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-checked:var(--ion-color-primary,#3880ff);--handle-background:var(--ion-item-background,var(--ion-background-color,#fff));--handle-background-checked:var(--ion-item-background,var(--ion-background-color,#fff));-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}.ion-color.toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios{background:var(--ion-color-base)}.ion-color.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{background:var(--ion-color-contrast)}.toggle-icon.sc-ion-toggle-ios{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon.sc-ion-toggle-ios:before{right:2px;bottom:2px;border-radius:16px;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background:var(--background);content:\"\"}.toggle-icon.sc-ion-toggle-ios:before, .toggle-inner.sc-ion-toggle-ios{left:2px;top:2px;position:absolute}.toggle-inner.sc-ion-toggle-ios{border-radius:14px;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}.toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios{background:var(--background-checked)}.toggle-activated.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios:before, .toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}.toggle-activated.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-activated.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{width:34px}.toggle-activated.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{left:-4px}.toggle-disabled.sc-ion-toggle-ios-h{opacity:.3}.in-item[slot].sc-ion-toggle-ios-h{margin:0;padding:6px 8px 5px 16px}.in-item[slot=start].sc-ion-toggle-ios-h{padding:6px 16px 5px 0}"; }
    static get styleMode() { return "ios"; }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
let toggleIds = 0;

export { Toggle as IonToggle };
