import{h}from"../ionicons.core.js";import{a as getIconMap,b as getName,c as getSrc,d as isValid}from"./chunk-24aa46be.js";var Icon=function(){function t(){this.isVisible=!1,this.lazy=!1}return t.prototype.componentWillLoad=function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(t,e,i){var n=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var o=this.io=new this.win.IntersectionObserver(function(t){t[0].isIntersecting&&(o.disconnect(),n.io=void 0,i())},{rootMargin:e});o.observe(t)}else i()},t.prototype.loadIcon=function(){var t=this;if(!this.isServer&&this.isVisible){var e=this.getUrl();e?getSvgContent(this.doc,e,"s-ion-icon").then(function(e){return t.svgContent=e}):console.error("icon was not resolved")}if(!this.ariaLabel){var i=getName(this.name,this.mode,this.ios,this.md);i&&(this.ariaLabel=i.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getUrl=function(){var t=getSrc(this.src);return t||((t=getName(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=getSrc(this.icon))?t:(t=getName(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)},t.prototype.getNamedUrl=function(t){return getIconMap().get(t)||this.resourcesUrl+"svg/"+t+".svg"},t.prototype.hostData=function(){var t;return{role:"img",class:Object.assign({},createColorClasses(this.color),(t={},t["icon-"+this.size]=!!this.size,t))}},t.prototype.render=function(){return console.log(this.name+": "+!!this.svgContent),h("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner -empty-test"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.icon-small.sc-ion-icon-h{font-size:18px!important}.icon-large.sc-ion-icon-h{font-size:32px!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary,#3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary,#0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary,#f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success,#10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning,#ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger,#f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light,#f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium,#989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),t}(),requests=new Map;function getSvgContent(t,e,i){var n=requests.get(e);return n||(n=fetch(e,{cache:"force-cache"}).then(function(t){return console.log(t),isStatusValid(t.status)?t.text():Promise.resolve(null)}).then(function(e){return validateContent(t,e,i)}),requests.set(e,n)),n}function isStatusValid(t){return t<=299}function validateContent(t,e,i){if(e){var n=t.createDocumentFragment(),o=t.createElement("div");o.innerHTML=e,n.appendChild(o);for(var r=o.childNodes.length-1;r>=0;r--)"svg"!==o.childNodes[r].nodeName.toLowerCase()&&o.removeChild(o.childNodes[r]);var s=o.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(i&&s.setAttribute("class",i),isValid(s)))return o.innerHTML}return""}function createColorClasses(t){var e;return t?((e={"ion-color":!0})["ion-color-"+t]=!0,e):null}export{Icon as IonIcon};