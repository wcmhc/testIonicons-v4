var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function c(e){try{u(o.next(e))}catch(e){r(e)}}function a(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(c,a)}u((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};Ionic.loadBundle("rjuj7fe1",["require","exports","./chunk-a99bd936.js","./chunk-2c5e69a8.js","./chunk-9f86f253.js"],function(e,t,n,o,i){var r=window.Ionic.h,c=function(){function t(){this.inputId="ion-tg-"+u++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return t.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.onClick=function(){this.checked=!this.checked},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onFocus=function(){this.ionFocus.emit()},t.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,n=this;return __generator(this,function(o){switch(o.label){case 0:return t=this,[4,new Promise(function(t,n){e(["./chunk-54ca8d01.js"],t,n)})];case 1:return t.gesture=o.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(e){return n.onEnd(e)}}),this.disabledChanged(),[2]}})})},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},t.prototype.onMove=function(e){var t=e.currentX;a(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,i.hapticSelection())},t.prototype.onEnd=function(e){a(this.checked,e.currentX-this.pivotX,4)&&(this.checked=!this.checked,i.hapticSelection()),this.activated=!1},t.prototype.getValue=function(){return this.value||""},t.prototype.hostData=function(){var e=this.inputId+"-lbl",t=o.findItemLabel(this.el);return t&&(t.id=e),{role:"checkbox",tabindex:"0","aria-disabled":this.disabled?"true":null,"aria-checked":""+this.checked,"aria-labelledby":e,class:Object.assign({},n.createColorClasses(this.color),{"in-item":n.hostContext("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},t.prototype.render=function(){var e=this.getValue();return o.renderHiddenInput(!0,this.el,this.name,this.checked?e:"",this.disabled),r("div",{class:"toggle-icon"},r("div",{class:"toggle-inner"}))},Object.defineProperty(t,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"keyup",method:"onKeyUp"},{name:"focus",method:"onFocus"},{name:"blur",method:"onBlur"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(.toggle-disabled),input{pointer-events:none}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host{--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-checked:var(--ion-color-primary,#3880ff);--handle-background:var(--ion-item-background,var(--ion-background-color,#fff));--handle-background-checked:var(--ion-item-background,var(--ion-background-color,#fff));-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-contrast)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon:before{right:2px;bottom:2px;border-radius:16px;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background:var(--background);content:\"\"}.toggle-icon:before,.toggle-inner{left:2px;top:2px;position:absolute}.toggle-inner{border-radius:14px;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin:0;padding:6px 8px 5px 16px}:host(.in-item[slot=start]){padding:6px 16px 5px 0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function a(e,t,n){var o="rtl"===document.dir;return e?!o&&n>t||o&&-n<t:!o&&-n<t||o&&n>t}var u=0;t.IonToggle=c,Object.defineProperty(t,"__esModule",{value:!0})});