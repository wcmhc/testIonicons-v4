var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}u((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Ionic.loadBundle("cbqf6ftj",["require","exports","./chunk-2c5e69a8.js","./chunk-54ca8d01.js"],function(e,t,n,i){var r=window.Ionic.h,o=function(){function t(){this.lastOnEnd=0,this.blocker=i.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return t.prototype.typeChanged=function(e,t){var n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-"+t),n.classList.add("menu-content-"+e),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=n.isEndSide(this.win,this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,n,i,r,o,s=this;return __generator(this,function(a){switch(a.label){case 0:return void 0===this.type&&(this.type=this.config.get("menuType","ios"===this.mode?"reveal":"overlay")),this.isServer?(this.disabled=!0,[2]):(n=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(e){return e._getInstance()})]);case 1:return t=n.menuCtrl=a.sent(),i=this.el.parentNode,(r=void 0!==this.contentId?document.getElementById(this.contentId):i&&i.querySelector&&i.querySelector("[main]"))&&r.tagName?(this.contentEl=r,r.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),o=this,[4,new Promise(function(t,n){e(["./chunk-54ca8d01.js"],t,n)})]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 2:return o.gesture=a.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(e){return s.canStart(e)},onWillStart:function(){return s.onWillStart()},onStart:function(){return s.onStart()},onMove:function(e){return s.onMove(e)},onEnd:function(e){return s.onEnd(e)}}),this.updateState(),[2]}})})},t.prototype.componentDidLoad=function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(e){this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(e){return void 0===e&&(e=!0),this.setOpen(!0,e)},t.prototype.close=function(e){return void 0===e&&(e=!0),this.setOpen(!1,e)},t.prototype.toggle=function(e){return void 0===e&&(e=!0),this.setOpen(!this._isOpen,e)},t.prototype.setOpen=function(e,t){return void 0===t&&(t=!0),this.menuCtrl._setOpen(this,e,t)},t.prototype._setOpen=function(e,t){return void 0===t&&(t=!0),__awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||e===this._isOpen?[2,!1]:(this.beforeAnimation(e),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(e,t)];case 2:return n.sent(),this.afterAnimation(e),[2,!0]}})})},t.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return(e=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return t.animation=n.sent(),[2]}})})},t.prototype.startAnimation=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!e),t?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(e){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&(t=e.currentX,n=this.maxEdgeStart,this.isEndSide?t>=this.win.innerWidth-n:t<=n));var t,n},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():n.assert(!1,"isAnimating has to be true")},t.prototype.onMove=function(e){if(this.isAnimating&&this.animation){var t=s(e.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(t/this.width)}else n.assert(!1,"isAnimating has to be true")},t.prototype.onEnd=function(e){var t=this;if(this.isAnimating&&this.animation){var i=this._isOpen,r=this.isEndSide,o=s(e.deltaX,i,r),a=this.width,u=o/a,c=e.velocityX,l=a/2,d=c>=0&&(c>.2||e.deltaX>l),h=c<=0&&(c<-.2||e.deltaX<-l),p=i?r?d:h:r?h:d,m=!i&&p;i&&!p&&(m=!0);var f=(p?1-u:u)*a,b=0;if(f>5){var g=f/Math.abs(c);b=Math.min(g,300)}this.lastOnEnd=e.timeStamp,this.animation.onFinish(function(){return t.afterAnimation(m)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(p,u,b)}else n.assert(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(e){n.assert(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(a),this.backdropEl&&this.backdropEl.classList.add(u),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(e){n.assert(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"click",e),e?(this.contentEl&&this.contentEl.classList.add(c),this.ionDidOpen.emit()):(this.el.classList.remove(a),this.contentEl&&this.contentEl.classList.remove(c),this.backdropEl&&this.backdropEl.classList.remove(u),this.ionDidClose.emit())},t.prototype.updateState=function(){var e=this._isActive();this.gesture&&this.gesture.setDisabled(!e||!this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),n.assert(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){n.assert(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)},t.prototype.hostData=function(){var e,t=this.isEndSide,n=this.disabled,i=this.isPaneVisible;return{role:"complementary",class:(e={},e["menu-type-"+this.type]=!0,e["menu-enabled"]=!n,e["menu-side-end"]=t,e["menu-side-start"]=!t,e["menu-pane-visible"]=i,e)}},t.prototype.render=function(){var e=this;return[r("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},r("slot",null)),r("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(t,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionWillOpen",method:"ionWillOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionWillClose",method:"ionWillClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidOpen",method:"ionDidOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidClose",method:"ionDidClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-menu-ios-h{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}.show-menu.sc-ion-menu-ios-h{display:block}.menu-inner.sc-ion-menu-ios{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}.menu-side-start.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{--ion-safe-area-right:0px;right:auto;left:0}.menu-side-end.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop.sc-ion-menu-ios{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner.sc-ion-menu-ios{--width:264px}}.menu-type-reveal.sc-ion-menu-ios-h{z-index:0}.menu-type-reveal.show-menu.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-type-overlay.sc-ion-menu-ios-h{z-index:80}.menu-type-overlay.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block;cursor:pointer}.menu-pane-visible.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.menu-pane-visible.sc-ion-menu-ios-h   ion-backdrop.sc-ion-menu-ios{display:hidden!important}.menu-type-push.sc-ion-menu-ios-h{z-index:80}.menu-type-push.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function s(e,t,n){return Math.max(0,t!==n?-e:e)}var a="show-menu",u="show-backdrop",c="menu-content-open",l=function(){function e(){this.autoHide=!0}return e.prototype.hostData=function(){return{class:{button:!0,"ion-activatable":!0}}},e.prototype.render=function(){var e=this.config.get("menuIcon","menu");return r("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},r("button",{type:"button"},r("slot",null,r("ion-icon",{icon:e,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&r("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(e,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-menu-button-ios-h{color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button.sc-ion-menu-button-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:none;background:transparent;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.sc-ion-menu-button-ios, ion-icon.sc-ion-menu-button-ios{margin:0;padding:0}ion-icon.sc-ion-menu-button-ios{pointer-events:none}.ion-color.sc-ion-menu-button-ios-h   .button-native.sc-ion-menu-button-ios{color:var(--ion-color-base)}.sc-ion-menu-button-ios-h{--color:var(--ion-color-primary,#3880ff)}.activated.sc-ion-menu-button-ios-h{opacity:.4}button.sc-ion-menu-button-ios{padding:0 5px}ion-icon.sc-ion-menu-button-ios{font-size:31px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function d(e){return Promise.resolve((new e).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var h=8;function p(e,t,n){var i,r,o=n.width+h;n.isEndSide?(i=o+"px",r="0px"):(i=-o+"px",r="0px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",i,r),a=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.32);return d(e).then(function(e){return e.add(s).add(a)})}function m(e,t,n){var i,r,o=n.width;n.isEndSide?(i=-o+"px",r=o+"px"):(i=o+"px",r=-o+"px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",r,"0px"),a=(new e).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.32);return d(e).then(function(e){return e.add(s).add(u).add(a)})}function f(e,t,n){var i=n.width*(n.isEndSide?-1:1)+"px",r=(new e).addElement(n.contentEl).fromTo("translateX","0px",i);return d(e).then(function(e){return e.add(r)})}var b=function(){function t(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",f),this.registerAnimation("push",m),this.registerAnimation("overlay",p)}return t.prototype.open=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,t.open()]:[2,!1]}})})},t.prototype.close=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,void 0!==e?this.get(e):this.getOpen()];case 1:return void 0!==(t=n.sent())?[2,t.close()]:[2,!1]}})})},t.prototype.toggle=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,t.toggle()]:[2,!1]}})})},t.prototype.enable=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.get(t)];case 1:return(n=i.sent())&&(n.disabled=!e),[2,n]}})})},t.prototype.swipeGesture=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.get(t)];case 1:return(n=i.sent())&&(n.swipeGesture=e),[2,n]}})})},t.prototype.isOpen=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return null==e?[3,2]:[4,this.get(e)];case 1:return[2,void 0!==(t=n.sent())&&t.isOpen()];case 2:return[4,this.getOpen()];case 3:return[2,void 0!==(t=n.sent())]}})})},t.prototype.isEnabled=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,!t.disabled]:[2,!1]}})})},t.prototype.get=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.waitUntilReady()];case 1:return i.sent(),"start"===e||"end"===e?(t=this.find(function(t){return t.side===e&&!t.disabled}))?[2,t]:[2,this.find(function(t){return t.side===e})]:null!=e?[2,this.find(function(t){return t.menuId===e})]:(n=this.find(function(e){return!e.disabled}))?[2,n]:[2,this.menus.length>0?this.menus[0].el:void 0]}})})},t.prototype.getOpen=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.waitUntilReady()];case 1:return e.sent(),[2,this.getOpenSync()]}})})},t.prototype.getMenus=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.waitUntilReady()];case 1:return e.sent(),[2,this.getMenusSync()]}})})},t.prototype.isAnimating=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.waitUntilReady()];case 1:return e.sent(),[2,this.isAnimatingSync()]}})})},t.prototype.registerAnimation=function(e,t){this.menuAnimations.set(e,t)},t.prototype._getInstance=function(){return Promise.resolve(this)},t.prototype._register=function(e){var t=this.menus;t.indexOf(e)<0&&(e.disabled||this._setActiveMenu(e),t.push(e))},t.prototype._unregister=function(e){var t=this.menus.indexOf(e);t>-1&&this.menus.splice(t,1)},t.prototype._setActiveMenu=function(e){var t=e.side;this.menus.filter(function(n){return n.side===t&&n!==e}).forEach(function(e){return e.disabled=!0})},t.prototype._setOpen=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var i;return __generator(this,function(r){switch(r.label){case 0:return this.isAnimatingSync()?[2,!1]:t?[4,this.getOpen()]:[3,3];case 1:return(i=r.sent())&&e.el!==i?[4,i.setOpen(!1,!1)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,e._setOpen(t,n)]}})})},t.prototype._createAnimation=function(t,n){return __awaiter(this,void 0,void 0,function(){var i,r;return __generator(this,function(o){switch(o.label){case 0:if(!(i=this.menuAnimations.get(t)))throw new Error("animation not registered");return[4,new Promise(function(t,n){e(["./chunk-d93e0932.js"],t,n)}).then(function(e){return e.create(i,null,n)})];case 1:return r=o.sent(),this.config.getBoolean("animated",!0)||r.duration(0),[2,r]}})})},t.prototype.getOpenSync=function(){return this.find(function(e){return e._isOpen})},t.prototype.getMenusSync=function(){return this.menus.map(function(e){return e.el})},t.prototype.isAnimatingSync=function(){return this.menus.some(function(e){return e.isAnimating})},t.prototype.find=function(e){var t=this.menus.find(e);if(void 0!==t)return t.el},t.prototype.waitUntilReady=function(){return Promise.all(Array.from(this.doc.querySelectorAll("ion-menu")).map(function(e){return e.componentOnReady()}))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_getInstance:{method:!0},close:{method:!0},config:{context:"config"},doc:{context:"document"},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),g=function(){function e(){this.visible=!1,this.autoHide=!0}return e.prototype.componentDidLoad=function(){return this.updateVisibility()},e.prototype.onClick=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,y(this.doc)];case 1:return(e=t.sent())?[4,e.get(this.menu)]:[3,3];case 2:t.sent()&&e.toggle(this.menu),t.label=3;case 3:return[2]}})})},e.prototype.updateVisibility=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n;return __generator(this,function(i){switch(i.label){case 0:return[4,y(this.doc)];case 1:return(e=i.sent())?[4,e.get(this.menu)]:[3,5];case 2:return t=i.sent(),(n=t)?[4,t.isActive()]:[3,4];case 3:n=i.sent(),i.label=4;case 4:if(n)return this.visible=!0,[2];i.label=5;case 5:return this.visible=!1,[2]}})})},e.prototype.hostData=function(){var e=this.autoHide&&!this.visible;return{"aria-hidden":e?"true":null,class:{"menu-toggle-hidden":e}}},e.prototype.render=function(){return r("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".menu-toggle-hidden.sc-ion-menu-toggle-h{display:none}"},enumerable:!0,configurable:!0}),e}();function y(e){var t=e.querySelector("ion-menu-controller");return t?t.componentOnReady():Promise.resolve(void 0)}t.IonMenu=o,t.IonMenuButton=l,t.IonMenuController=b,t.IonMenuToggle=g,Object.defineProperty(t,"__esModule",{value:!0})});