import { h } from '../ionic.core.js';

const SIZE_TO_MEDIA = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
};
function matchBreakpoint(win, breakpoint) {
    if (breakpoint === undefined || breakpoint === '') {
        return true;
    }
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return win.matchMedia(mediaQuery).matches;
}

const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
class Col {
    onResize() {
        this.el.forceUpdate();
    }
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(this.win, breakpoint);
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns('size');
        if (!columns || columns === '') {
            return;
        }
        const colSize = (columns === 'auto')
            ? 'auto'
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
                : ((columns / 12) * 100) + '%';
        return {
            'flex': `0 0 ${colSize}`,
            'width': `${colSize}`,
            'max-width': `${colSize}`
        };
    }
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        const amount = SUPPORTS_VARS
            ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
        return {
            [modifier]: amount
        };
    }
    calculateOffset() {
        const isRTL = document.dir === 'rtl';
        return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
    }
    calculatePull() {
        const isRTL = document.dir === 'rtl';
        return this.calculatePosition('pull', isRTL ? 'left' : 'right');
    }
    calculatePush() {
        const isRTL = document.dir === 'rtl';
        return this.calculatePosition('push', isRTL ? 'right' : 'left');
    }
    hostData() {
        return {
            style: Object.assign({}, this.calculateOffset(), this.calculatePull(), this.calculatePush(), this.calculateSize())
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-col"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "offset": {
            "type": String,
            "attr": "offset"
        },
        "offsetLg": {
            "type": String,
            "attr": "offset-lg"
        },
        "offsetMd": {
            "type": String,
            "attr": "offset-md"
        },
        "offsetSm": {
            "type": String,
            "attr": "offset-sm"
        },
        "offsetXl": {
            "type": String,
            "attr": "offset-xl"
        },
        "offsetXs": {
            "type": String,
            "attr": "offset-xs"
        },
        "pull": {
            "type": String,
            "attr": "pull"
        },
        "pullLg": {
            "type": String,
            "attr": "pull-lg"
        },
        "pullMd": {
            "type": String,
            "attr": "pull-md"
        },
        "pullSm": {
            "type": String,
            "attr": "pull-sm"
        },
        "pullXl": {
            "type": String,
            "attr": "pull-xl"
        },
        "pullXs": {
            "type": String,
            "attr": "pull-xs"
        },
        "push": {
            "type": String,
            "attr": "push"
        },
        "pushLg": {
            "type": String,
            "attr": "push-lg"
        },
        "pushMd": {
            "type": String,
            "attr": "push-md"
        },
        "pushSm": {
            "type": String,
            "attr": "push-sm"
        },
        "pushXl": {
            "type": String,
            "attr": "push-xl"
        },
        "pushXs": {
            "type": String,
            "attr": "push-xs"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "sizeLg": {
            "type": String,
            "attr": "size-lg"
        },
        "sizeMd": {
            "type": String,
            "attr": "size-md"
        },
        "sizeSm": {
            "type": String,
            "attr": "size-sm"
        },
        "sizeXl": {
            "type": String,
            "attr": "size-xl"
        },
        "sizeXs": {
            "type": String,
            "attr": "size-xs"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return ".sc-ion-col-h{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@media (min-width:576px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}\@media (min-width:768px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}\@media (min-width:992px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}\@media (min-width:1200px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}"; }
}

class Grid {
    constructor() {
        this.fixed = false;
    }
    hostData() {
        return {
            class: {
                'grid-fixed': this.fixed
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-grid"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "fixed": {
            "type": Boolean,
            "attr": "fixed"
        }
    }; }
    static get style() { return ".sc-ion-grid-h{padding:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}\@media (min-width:576px){.sc-ion-grid-h{padding:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}}\@media (min-width:768px){.sc-ion-grid-h{padding:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}}\@media (min-width:992px){.sc-ion-grid-h{padding:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}}\@media (min-width:1200px){.sc-ion-grid-h{padding:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}[no-padding].sc-ion-grid-h, .sc-ion-grid-h[no-padding] .sc-ion-grid-s > ion-col{padding:0}"; }
}

class Row {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-row"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".sc-ion-row-h{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"; }
}

export { Col as IonCol, Grid as IonGrid, Row as IonRow };
