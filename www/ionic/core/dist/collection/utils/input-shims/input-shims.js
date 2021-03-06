import { enableHideCaretOnScroll } from './hacks/hide-caret';
import { enableInputBlurring } from './hacks/input-blurring';
import { enableScrollAssist } from './hacks/scroll-assist';
import { enableScrollPadding } from './hacks/scroll-padding';
const INPUT_BLURRING = true;
const SCROLL_ASSIST = true;
const SCROLL_PADDING = true;
const HIDE_CARET = true;
export function startInputShims(doc, config) {
    const keyboardHeight = config.getNumber('keyboardHeight', 290);
    const scrollAssist = config.getBoolean('scrollAssist', true);
    const hideCaret = config.getBoolean('hideCaretOnScroll', true);
    const inputBlurring = config.getBoolean('inputBlurring', true);
    const scrollPadding = config.getBoolean('scrollPadding', true);
    const hideCaretMap = new WeakMap();
    const scrollAssistMap = new WeakMap();
    function registerInput(componentEl) {
        const inputEl = (componentEl.shadowRoot || componentEl).querySelector('input');
        const scrollEl = componentEl.closest('ion-content');
        if (!inputEl) {
            return;
        }
        if (HIDE_CARET && !!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
            const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
            hideCaretMap.set(componentEl, rmFn);
        }
        if (SCROLL_ASSIST && !!scrollEl && scrollAssist && !scrollAssistMap.has(componentEl)) {
            const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, keyboardHeight);
            scrollAssistMap.set(componentEl, rmFn);
        }
    }
    function unregisterInput(componentEl) {
        if (HIDE_CARET && hideCaret) {
            const fn = hideCaretMap.get(componentEl);
            if (fn) {
                fn();
            }
            hideCaretMap.delete(componentEl);
        }
        if (SCROLL_ASSIST && scrollAssist) {
            const fn = scrollAssistMap.get(componentEl);
            if (fn) {
                fn();
            }
            scrollAssistMap.delete(componentEl);
        }
    }
    if (inputBlurring && INPUT_BLURRING) {
        enableInputBlurring(doc);
    }
    if (scrollPadding && SCROLL_PADDING) {
        enableScrollPadding(doc, keyboardHeight);
    }
    const inputs = Array.from(doc.querySelectorAll('ion-input'));
    for (const input of inputs) {
        registerInput(input);
    }
    doc.body.addEventListener('ionInputDidLoad', event => {
        registerInput(event.target);
    });
    doc.body.addEventListener('ionInputDidUnload', event => {
        unregisterInput(event.target);
    });
}
