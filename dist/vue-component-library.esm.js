/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function e(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const t="production"!==process.env.NODE_ENV?Object.freeze({}):{},n="production"!==process.env.NODE_ENV?Object.freeze([]):[],o=()=>{},r=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),s=Object.assign,c=Object.prototype.hasOwnProperty,i=(e,t)=>c.call(e,t),a=Array.isArray,l=e=>"[object Map]"===g(e),u=e=>"[object Set]"===g(e),p=e=>"function"==typeof e,d=e=>"string"==typeof e,f=e=>"symbol"==typeof e,h=e=>null!==e&&"object"==typeof e,_=e=>(h(e)||p(e))&&p(e.then)&&p(e.catch),v=Object.prototype.toString,g=e=>v.call(e),y=e=>g(e).slice(8,-1),m=e=>"[object Object]"===g(e),E=e=>d(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},b=/-(\w)/g,w=N((e=>e.replace(b,((e,t)=>t?t.toUpperCase():"")))),O=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),S=(e,t)=>!Object.is(e,t),k=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})};let V;const x=()=>V||(V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function D(e){if(a(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=d(o)?j(o):D(o);if(r)for(const e in r)t[e]=r[e]}return t}if(d(e)||h(e))return e}const $=/;(?![^(]*\))/g,C=/:([^]+)/,R=/\/\*[^]*?\*\//g;function j(e){const t={};return e.replace(R,"").split($).forEach((e=>{if(e){const n=e.split(C);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function P(e){let t="";if(d(e))t=e;else if(a(e))for(let n=0;n<e.length;n++){const o=P(e[n]);o&&(t+=o+" ")}else if(h(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}
/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function I(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let F;class M{constructor(e,t,n,o){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,function(e,t){t&&t.active&&t.effects.push(e)}(this,o)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,W();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(t.computed.value,this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),J()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=U,t=F;try{return U=!0,F=this,this._runnings++,T(this),this.fn()}finally{A(this),this._runnings--,F=t,U=e}}stop(){this.active&&(T(this),A(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){e._trackId++,e._depsLength=0}function A(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)L(e.deps[t],e);e.deps.length=e._depsLength}}function L(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let U=!0,z=0;const H=[];function W(){H.push(U),U=!1}function J(){const e=H.pop();U=void 0===e||e}function B(){z++}function K(){for(z--;!z&&q.length;)q.shift()()}const q=[];function G(e,t,n){var o;B();for(const r of e.keys()){let c;r._dirtyLevel<t&&(null!=c?c:c=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=c?c:c=e.get(r)===r._trackId)&&("production"!==process.env.NODE_ENV&&(null==(o=r.onTrigger)||o.call(r,s({effect:r},n))),r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&q.push(r.scheduler)))}K()}const Q=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},X=new WeakMap,Y=Symbol("production"!==process.env.NODE_ENV?"iterate":""),Z=Symbol("production"!==process.env.NODE_ENV?"Map key iterate":"");function ee(e,t,n){if(U&&F){let o=X.get(e);o||X.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Q((()=>o.delete(n)))),function(e,t,n){var o;if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&L(r,e),e.deps[e._depsLength++]=t):e._depsLength++,"production"!==process.env.NODE_ENV&&(null==(o=e.onTrack)||o.call(e,s({effect:e},n)))}}(F,r,"production"!==process.env.NODE_ENV?{target:e,type:t,key:n}:void 0)}}function te(e,t,n,o,r,s){const c=X.get(e);if(!c)return;let i=[];if("clear"===t)i=[...c.values()];else if("length"===n&&a(e)){const e=Number(o);c.forEach(((t,n)=>{("length"===n||!f(n)&&n>=e)&&i.push(t)}))}else switch(void 0!==n&&i.push(c.get(n)),t){case"add":a(e)?E(n)&&i.push(c.get("length")):(i.push(c.get(Y)),l(e)&&i.push(c.get(Z)));break;case"delete":a(e)||(i.push(c.get(Y)),l(e)&&i.push(c.get(Z)));break;case"set":l(e)&&i.push(c.get(Y))}B();for(const c of i)c&&G(c,4,"production"!==process.env.NODE_ENV?{target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:s}:void 0);K()}const ne=e("__proto__,__v_isRef,__isVue"),oe=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(f)),re=se();function se(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ke(this);for(let e=0,t=this.length;e<t;e++)ee(n,"get",e+"");const o=n[t](...e);return-1===o||!1===o?n[t](...e.map(Ke)):o}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){W(),B();const n=Ke(this)[t].apply(this,e);return K(),J(),n}})),e}function ce(e){f(e)||(e=String(e));const t=Ke(this);return ee(t,"has",e),t.hasOwnProperty(e)}class ie{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const o=this._isReadonly,r=this._isShallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return r;if("__v_raw"===t)return n===(o?r?Te:Me:r?Fe:Ie).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=a(e);if(!o){if(s&&i(re,t))return Reflect.get(re,t,n);if("hasOwnProperty"===t)return ce}const c=Reflect.get(e,t,n);return(f(t)?oe.has(t):ne(t))?c:(o||ee(e,"get",t),r?c:Qe(c)?s&&E(t)?c:c.value:h(c)?o?Le(c):Ae(c):c)}}class ae extends ie{constructor(e=!1){super(!1,e)}set(e,t,n,o){let r=e[t];if(!this._isShallow){const t=We(r);if(Je(n)||We(n)||(r=Ke(r),n=Ke(n)),!a(e)&&Qe(r)&&!Qe(n))return!t&&(r.value=n,!0)}const s=a(e)&&E(t)?Number(t)<e.length:i(e,t),c=Reflect.set(e,t,n,o);return e===Ke(o)&&(s?S(n,r)&&te(e,"set",t,n,r):te(e,"add",t,n)),c}deleteProperty(e,t){const n=i(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&te(e,"delete",t,void 0,o),r}has(e,t){const n=Reflect.has(e,t);return f(t)&&oe.has(t)||ee(e,"has",t),n}ownKeys(e){return ee(e,"iterate",a(e)?"length":Y),Reflect.ownKeys(e)}}class le extends ie{constructor(e=!1){super(!0,e)}set(e,t){return"production"!==process.env.NODE_ENV&&I(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return"production"!==process.env.NODE_ENV&&I(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}}const ue=new ae,pe=new le,de=new le(!0),fe=e=>e,he=e=>Reflect.getPrototypeOf(e);function _e(e,t,n=!1,o=!1){const r=Ke(e=e.__v_raw),s=Ke(t);n||(S(t,s)&&ee(r,"get",t),ee(r,"get",s));const{has:c}=he(r),i=o?fe:n?Ge:qe;return c.call(r,t)?i(e.get(t)):c.call(r,s)?i(e.get(s)):void(e!==r&&e.get(t))}function ve(e,t=!1){const n=this.__v_raw,o=Ke(n),r=Ke(e);return t||(S(e,r)&&ee(o,"has",e),ee(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ge(e,t=!1){return e=e.__v_raw,!t&&ee(Ke(e),"iterate",Y),Reflect.get(e,"size",e)}function ye(e){e=Ke(e);const t=Ke(this);return he(t).has.call(t,e)||(t.add(e),te(t,"add",e,e)),this}function me(e,t){t=Ke(t);const n=Ke(this),{has:o,get:r}=he(n);let s=o.call(n,e);s?"production"!==process.env.NODE_ENV&&Pe(n,o,e):(e=Ke(e),s=o.call(n,e));const c=r.call(n,e);return n.set(e,t),s?S(t,c)&&te(n,"set",e,t,c):te(n,"add",e,t),this}function Ee(e){const t=Ke(this),{has:n,get:o}=he(t);let r=n.call(t,e);r?"production"!==process.env.NODE_ENV&&Pe(t,n,e):(e=Ke(e),r=n.call(t,e));const s=o?o.call(t,e):void 0,c=t.delete(e);return r&&te(t,"delete",e,void 0,s),c}function Ne(){const e=Ke(this),t=0!==e.size,n="production"!==process.env.NODE_ENV?l(e)?new Map(e):new Set(e):void 0,o=e.clear();return t&&te(e,"clear",void 0,void 0,n),o}function be(e,t){return function(n,o){const r=this,s=r.__v_raw,c=Ke(s),i=t?fe:e?Ge:qe;return!e&&ee(c,"iterate",Y),s.forEach(((e,t)=>n.call(o,i(e),i(t),r)))}}function we(e,t,n){return function(...o){const r=this.__v_raw,s=Ke(r),c=l(s),i="entries"===e||e===Symbol.iterator&&c,a="keys"===e&&c,u=r[e](...o),p=n?fe:t?Ge:qe;return!t&&ee(s,"iterate",a?Z:Y),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:i?[p(e[0]),p(e[1])]:p(e),done:t}},[Symbol.iterator](){return this}}}}function Oe(e){return function(...t){if("production"!==process.env.NODE_ENV){const n=t[0]?`on key "${t[0]}" `:"";I(`${O(e)} operation ${n}failed: target is readonly.`,Ke(this))}return"delete"!==e&&("clear"===e?void 0:this)}}function Se(){const e={get(e){return _e(this,e)},get size(){return ge(this)},has:ve,add:ye,set:me,delete:Ee,clear:Ne,forEach:be(!1,!1)},t={get(e){return _e(this,e,!1,!0)},get size(){return ge(this)},has:ve,add:ye,set:me,delete:Ee,clear:Ne,forEach:be(!1,!0)},n={get(e){return _e(this,e,!0)},get size(){return ge(this,!0)},has(e){return ve.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:be(!0,!1)},o={get(e){return _e(this,e,!0,!0)},get size(){return ge(this,!0)},has(e){return ve.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:be(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=we(r,!1,!1),n[r]=we(r,!0,!1),t[r]=we(r,!1,!0),o[r]=we(r,!0,!0)})),[e,n,t,o]}const[ke,Ve,xe,De]=Se();function $e(e,t){const n=t?e?De:xe:e?Ve:ke;return(t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(i(n,o)&&o in t?n:t,o,r)}const Ce={get:$e(!1,!1)},Re={get:$e(!0,!1)},je={get:$e(!0,!0)};function Pe(e,t,n){const o=Ke(n);if(o!==n&&t.call(e,o)){const t=y(e);I(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ie=new WeakMap,Fe=new WeakMap,Me=new WeakMap,Te=new WeakMap;function Ae(e){return We(e)?e:ze(e,!1,ue,Ce,Ie)}function Le(e){return ze(e,!0,pe,Re,Me)}function Ue(e){return ze(e,!0,de,je,Te)}function ze(e,t,n,o,r){if(!h(e))return"production"!==process.env.NODE_ENV&&I(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const c=(i=e).__v_skip||!Object.isExtensible(i)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(y(i));var i;if(0===c)return e;const a=new Proxy(e,2===c?o:n);return r.set(e,a),a}function He(e){return We(e)?He(e.__v_raw):!(!e||!e.__v_isReactive)}function We(e){return!(!e||!e.__v_isReadonly)}function Je(e){return!(!e||!e.__v_isShallow)}function Be(e){return!!e&&!!e.__v_raw}function Ke(e){const t=e&&e.__v_raw;return t?Ke(t):e}const qe=e=>h(e)?Ae(e):e,Ge=e=>h(e)?Le(e):e;function Qe(e){return!(!e||!0!==e.__v_isRef)}const Xe={get:(e,t,n)=>{return Qe(o=Reflect.get(e,t,n))?o.value:o;var o},set:(e,t,n,o)=>{const r=e[t];return Qe(r)&&!Qe(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};
/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ye=[];function Ze(e,...t){W();const n=Ye.length?Ye[Ye.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=Ye[Ye.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}();if(o)ot(o,n,11,[e+t.map((e=>{var t,n;return null!=(n=null==(t=e.toString)?void 0:t.call(e))?n:JSON.stringify(e)})).join(""),n&&n.proxy,r.map((({vnode:e})=>`at <${Sn(n,e.type)}>`)).join("\n"),r]);else{const n=[`[Vue warn]: ${e}`,...t];r.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=!!e.component&&null==e.component.parent,r=` at <${Sn(e.component,e.type,o)}`,s=">"+n;return e.props?[r,...et(e.props),s]:[r+s]}(e))})),t}(r)),console.warn(...n)}J()}function et(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...tt(n,e[n]))})),n.length>3&&t.push(" ..."),t}function tt(e,t,n){return d(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:Qe(t)?(t=tt(e,Ke(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):p(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Ke(t),n?t:[`${e}=`,t])}const nt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ot(e,t,n,o){try{return o?e(...o):e()}catch(e){st(e,t,n)}}function rt(e,t,n,o){if(p(e)){const r=ot(e,t,n,o);return r&&_(r)&&r.catch((e=>{st(e,t,n)})),r}if(a(e)){const r=[];for(let s=0;s<e.length;s++)r.push(rt(e[s],t,n,o));return r}"production"!==process.env.NODE_ENV&&Ze("Invalid value type passed to callWithAsyncErrorHandling(): "+typeof e)}function st(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,s="production"!==process.env.NODE_ENV?nt[n]:`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent}const c=t.appContext.config.errorHandler;if(c)return W(),ot(c,null,10,[e,r,s]),void J()}!function(e,t,n,o=!0){if("production"!==process.env.NODE_ENV){const s=nt[t];if(n&&(r=n,Ye.push(r)),Ze("Unhandled error"+(s?` during execution of ${s}`:"")),n&&Ye.pop(),o)throw e;console.error(e)}else console.error(e);var r}(e,n,r,o)}let ct=!1,it=!1;const at=[];let lt=0;const ut=[];let pt=null,dt=0;const ft=Promise.resolve();let ht=null;const _t=100;function vt(e){const t=ht||ft;return e?t.then(this?e.bind(this):e):t}function gt(e){at.length&&at.includes(e,ct&&e.allowRecurse?lt+1:lt)||(null==e.id?at.push(e):at.splice(function(e){let t=lt+1,n=at.length;for(;t<n;){const o=t+n>>>1,r=at[o],s=Et(r);s<e||s===e&&r.pre?t=o+1:n=o}return t}(e.id),0,e),yt())}function yt(){ct||it||(it=!0,ht=ft.then(bt))}function mt(e){a(e)?ut.push(...e):pt&&pt.includes(e,e.allowRecurse?dt+1:dt)||ut.push(e),yt()}const Et=e=>null==e.id?1/0:e.id,Nt=(e,t)=>{const n=Et(e)-Et(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function bt(e){it=!1,ct=!0,"production"!==process.env.NODE_ENV&&(e=e||new Map),at.sort(Nt);const t="production"!==process.env.NODE_ENV?t=>wt(e,t):o;try{for(lt=0;lt<at.length;lt++){const e=at[lt];if(e&&!1!==e.active){if("production"!==process.env.NODE_ENV&&t(e))continue;ot(e,null,14)}}}finally{lt=0,at.length=0,function(e){if(ut.length){const t=[...new Set(ut)].sort(((e,t)=>Et(e)-Et(t)));if(ut.length=0,pt)return void pt.push(...t);for(pt=t,"production"!==process.env.NODE_ENV&&(e=e||new Map),dt=0;dt<pt.length;dt++){const t=pt[dt];"production"!==process.env.NODE_ENV&&wt(e,t)||!1!==t.active&&t()}pt=null,dt=0}}(e),ct=!1,ht=null,(at.length||ut.length)&&bt(e)}}function wt(e,t){if(e.has(t)){const n=e.get(t);if(n>_t){const e=t.ownerInstance,n=e&&On(e.type);return st(`Maximum recursive updates exceeded${n?` in component <${n}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}e.set(t,n+1)}else e.set(t,1)}const Ot=new Set;"production"!==process.env.NODE_ENV&&(x().__VUE_HMR_RUNTIME__={createRecord:xt((function(e,t){if(St.has(e))return!1;return St.set(e,{initialDef:kt(t),instances:new Set}),!0})),rerender:xt((function(e,t){const n=St.get(e);if(!n)return;n.initialDef.render=t,[...n.instances].forEach((e=>{t&&(e.render=t,kt(e.type).render=t),e.renderCache=[],e.effect.dirty=!0,e.update()}))})),reload:xt((function(e,t){const n=St.get(e);if(!n)return;t=kt(t),Vt(n.initialDef,t);const o=[...n.instances];for(const e of o){const o=kt(e.type);Ot.has(o)||(o!==n.initialDef&&Vt(o,t),Ot.add(o)),e.appContext.propsCache.delete(e.type),e.appContext.emitsCache.delete(e.type),e.appContext.optionsCache.delete(e.type),e.ceReload?(Ot.add(o),e.ceReload(t.styles),Ot.delete(o)):e.parent?(e.parent.effect.dirty=!0,gt((()=>{e.parent.update(),Ot.delete(o)}))):e.appContext.reload?e.appContext.reload():"undefined"!=typeof window?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}mt((()=>{for(const e of o)Ot.delete(kt(e.type))}))}))});const St=new Map;function kt(e){return kn(e)?e.__vccOpts:e}function Vt(e,t){s(e,t);for(const n in e)"__file"===n||n in t||delete e[n]}function xt(e){return(t,n)=>{try{return e(t,n)}catch(e){console.error(e),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Dt=null,$t=null;const Ct="components";function Rt(e,t){return function(e,t,n=!0,o=!1){const r=mn;if(r){const s=r.type;if(e===Ct){const e=On(s,!1);if(e&&(e===t||e===w(t)||e===O(w(t))))return s}const c=Pt(r[e]||s[e],t)||Pt(r.appContext[e],t);if(!c&&o)return s;if("production"!==process.env.NODE_ENV&&n&&!c){const n=e===Ct?"\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.":"";Ze(`Failed to resolve ${e.slice(0,-1)}: ${t}${n}`)}return c}"production"!==process.env.NODE_ENV&&Ze(`resolve${O(e.slice(0,-1))} can only be used in render() or setup().`)}(Ct,e,!0,t)||e}const jt=Symbol.for("v-ndc");function Pt(e,t){return e&&(e[t]||e[w(t)]||e[O(w(t))])}const It=e=>e?4&e.vnode.shapeFlag?function(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((n=e.exposed,Object.isExtensible(n)&&k(n,"__v_skip",!0),He(t=n)?t:new Proxy(t,Xe)),{get:(t,n)=>n in t?t[n]:n in Ft?Ft[n](e):void 0,has:(e,t)=>t in e||t in Ft})):e.proxy;var t;var n}(e):It(e.parent):null,Ft=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>"production"!==process.env.NODE_ENV?Ue(e.props):e.props,$attrs:e=>"production"!==process.env.NODE_ENV?Ue(e.attrs):e.attrs,$slots:e=>"production"!==process.env.NODE_ENV?Ue(e.slots):e.slots,$refs:e=>"production"!==process.env.NODE_ENV?Ue(e.refs):e.refs,$parent:e=>It(e.parent),$root:e=>It(e.root),$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?function(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:c}}=e.appContext,i=s.get(t);let a;i?a=i:r.length||n||o?(a={},r.length&&r.forEach((e=>Ut(a,e,c,!0))),Ut(a,t,c)):a=t;h(t)&&s.set(t,a);return a}(e):e.type,$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,gt(e.update)}),$nextTick:e=>e.n||(e.n=vt.bind(e.proxy)),$watch:e=>__VUE_OPTIONS_API__?en.bind(e):o}),Mt=(e,n)=>e!==t&&!e.__isScriptSetup&&i(e,n),Tt={get({_:e},n){if("__v_skip"===n)return!0;const{ctx:o,setupState:r,data:s,props:c,accessCache:a,type:l,appContext:u}=e;if("production"!==process.env.NODE_ENV&&"__isVue"===n)return!0;let p;if("$"!==n[0]){const l=a[n];if(void 0!==l)switch(l){case 1:return r[n];case 2:return s[n];case 4:return o[n];case 3:return c[n]}else{if(Mt(r,n))return a[n]=1,r[n];if(s!==t&&i(s,n))return a[n]=2,s[n];if((p=e.propsOptions[0])&&i(p,n))return a[n]=3,c[n];if(o!==t&&i(o,n))return a[n]=4,o[n];__VUE_OPTIONS_API__&&!Lt||(a[n]=0)}}const f=Ft[n];let h,_;return f?("$attrs"===n?(ee(e.attrs,"get",""),process.env.NODE_ENV):"production"!==process.env.NODE_ENV&&"$slots"===n&&ee(e,"get",n),f(e)):(h=l.__cssModules)&&(h=h[n])?h:o!==t&&i(o,n)?(a[n]=4,o[n]):(_=u.config.globalProperties,i(_,n)?_[n]:void("production"===process.env.NODE_ENV||!Dt||d(n)&&0===n.indexOf("__v")||(s!==t&&(e=>"_"===e||"$"===e)(n[0])&&i(s,n)?Ze(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Dt&&Ze(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))))},set({_:e},n,o){const{data:r,setupState:s,ctx:c}=e;return Mt(s,n)?(s[n]=o,!0):"production"!==process.env.NODE_ENV&&s.__isScriptSetup&&i(s,n)?(Ze(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):r!==t&&i(r,n)?(r[n]=o,!0):i(e.props,n)?("production"!==process.env.NODE_ENV&&Ze(`Attempting to mutate prop "${n}". Props are readonly.`),!1):"$"===n[0]&&n.slice(1)in e?("production"!==process.env.NODE_ENV&&Ze(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):("production"!==process.env.NODE_ENV&&n in e.appContext.config.globalProperties?Object.defineProperty(c,n,{enumerable:!0,configurable:!0,value:o}):c[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:r,appContext:s,propsOptions:c}},a){let l;return!!o[a]||e!==t&&i(e,a)||Mt(n,a)||(l=c[0])&&i(l,a)||i(r,a)||i(Ft,a)||i(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:i(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function At(e){return a(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}"production"!==process.env.NODE_ENV&&(Tt.ownKeys=e=>(Ze("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));let Lt=!0;function Ut(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&Ut(e,s,n,!0),r&&r.forEach((t=>Ut(e,t,n,!0)));for(const r in t)if(o&&"expose"===r)"production"!==process.env.NODE_ENV&&Ze('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const o=zt[r]||n&&n[r];e[r]=o?o(e[r],t[r]):t[r]}return e}const zt={data:Ht,props:Kt,emits:Kt,methods:Bt,computed:Bt,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Bt,directives:Bt,watch:function(e,t){if(!e)return t;if(!t)return e;const n=s(Object.create(null),e);for(const o in t)n[o]=Jt(e[o],t[o]);return n},provide:Ht,inject:function(e,t){return Bt(Wt(e),Wt(t))}};function Ht(e,t){return t?e?function(){return s(p(e)?e.call(this,this):e,p(t)?t.call(this,this):t)}:t:e}function Wt(e){if(a(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Jt(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?s(Object.create(null),e,t):t}function Kt(e,t){return e?a(e)&&a(t)?[...new Set([...e,...t])]:s(Object.create(null),At(e),At(null!=t?t:{})):t}const qt={},Gt=e=>Object.getPrototypeOf(e)===qt,Qt=function(e,t){t&&t.pendingBranch?a(e)?t.effects.push(...e):t.effects.push(e):mt(e)},Xt=Symbol.for("v-scx"),Yt=()=>{{const e=function(e,t,n=!1){const o=mn||Dt;if(o){const r=o?null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:null._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&p(t)?t.call(o&&o.proxy):t;"production"!==process.env.NODE_ENV&&Ze(`injection "${String(e)}" not found.`)}else"production"!==process.env.NODE_ENV&&Ze("inject() can only be used inside setup() or functional components.")}(Xt);return e||"production"!==process.env.NODE_ENV&&Ze("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}},Zt={};function en(e,n,r){const s=this.proxy,c=d(e)?e.includes(".")?function(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}(s,e):()=>s[e]:e.bind(s,s);let i;p(n)?i=n:(i=n.handler,r=n);const l=En(this),u=function(e,n,{immediate:r,deep:s,flush:c,once:i,onTrack:l,onTrigger:u}=t){if(n&&i){const e=n;n=(...t)=>{e(...t),k()}}"production"!==process.env.NODE_ENV&&void 0!==s&&"number"==typeof s&&Ze('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),"production"===process.env.NODE_ENV||n||(void 0!==r&&Ze('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==s&&Ze('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==i&&Ze('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const d=e=>{Ze("Invalid watch source: ",e,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},f=mn,h=e=>!0===s?e:tn(e,!1===s?1:void 0);let _,v,g=!1,y=!1;if(Qe(e)?(_=()=>e.value,g=Je(e)):He(e)?(_=()=>h(e),g=!0):a(e)?(y=!0,g=e.some((e=>He(e)||Je(e))),_=()=>e.map((e=>Qe(e)?e.value:He(e)?h(e):p(e)?ot(e,f,2):void("production"!==process.env.NODE_ENV&&d(e))))):p(e)?_=n?()=>ot(e,f,2):()=>(v&&v(),rt(e,f,3,[E])):(_=o,"production"!==process.env.NODE_ENV&&d(e)),n&&s){const e=_;_=()=>tn(e())}let m,E=e=>{v=O.onStop=()=>{ot(e,f,4),v=O.onStop=void 0}};if(Nn){if(E=o,n?r&&rt(n,f,3,[_(),y?[]:void 0,E]):_(),"sync"!==c)return o;{const e=Yt();m=e.__watcherHandles||(e.__watcherHandles=[])}}let N=y?new Array(e.length).fill(Zt):Zt;const b=()=>{if(O.active&&O.dirty)if(n){const e=O.run();(s||g||(y?e.some(((e,t)=>S(e,N[t]))):S(e,N)))&&(v&&v(),rt(n,f,3,[e,N===Zt?void 0:y&&N[0]===Zt?[]:N,E]),N=e)}else O.run()};let w;b.allowRecurse=!!n,"sync"===c?w=b:"post"===c?w=()=>Qt(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),w=()=>gt(b));const O=new M(_,o,w),k=()=>{O.stop()};return"production"!==process.env.NODE_ENV&&(O.onTrack=l,O.onTrigger=u),n?r?b():N=O.run():"post"===c?Qt(O.run.bind(O),f&&f.suspense):O.run(),m&&m.push(k),k}(c,i.bind(s),r);return l(),u}function tn(e,t=1/0,n){if(t<=0||!h(e)||e.__v_skip)return e;if((n=n||new Set).has(e))return e;if(n.add(e),t--,Qe(e))tn(e.value,t,n);else if(a(e))for(let o=0;o<e.length;o++)tn(e[o],t,n);else if(u(e)||l(e))e.forEach((e=>{tn(e,t,n)}));else if(m(e)){for(const o in e)tn(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&tn(e[o],t,n)}return e}function nn(e,t){6&e.shapeFlag&&e.component?nn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const on=Symbol.for("v-fgt"),rn=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),cn=[];let an=null;function ln(e){return e.dynamicChildren=an||n,cn.pop(),an=cn[cn.length-1]||null,an&&an.push(e),e}const un=({key:e})=>null!=e?e:null,pn=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?d(e)||Qe(e)||p(e)?{i:Dt,r:e,k:t,f:!!n}:e:null);const dn="production"!==process.env.NODE_ENV?(...e)=>fn(...e):fn;function fn(e,t=null,n=null,o=0,r=null,c=!1){if(e&&e!==jt||("production"===process.env.NODE_ENV||e||Ze(`Invalid vnode type when creating vnode: ${e}.`),e=sn),(i=e)&&!0===i.__v_isVNode){const o=hn(e,t,!0);return n&&gn(o,n),!c&&an&&(6&o.shapeFlag?an[an.indexOf(e)]=o:an.push(o)),o.patchFlag=-2,o}var i;if(kn(e)&&(e=e.__vccOpts),t){t=function(e){return e?Be(e)||Gt(e)?s({},e):e:null}(t);let{class:e,style:n}=t;e&&!d(e)&&(t.class=P(e)),h(n)&&(Be(n)&&!a(n)&&(n=s({},n)),t.style=D(n))}const l=d(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:h(e)?4:p(e)?2:0;return"production"!==process.env.NODE_ENV&&4&l&&Be(e)&&Ze("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.","\nComponent that was made reactive: ",e=Ke(e)),function(e,t=null,n=null,o=0,r=null,s=(e===on?0:1),c=!1,i=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&un(t),ref:t&&pn(t),scopeId:$t,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dt};return i?(gn(a,n),128&s&&e.normalize(a)):n&&(a.shapeFlag|=d(n)?8:16),"production"!==process.env.NODE_ENV&&a.key!=a.key&&Ze("VNode created with invalid key (NaN). VNode type:",a.type),!c&&an&&(a.patchFlag>0||6&s)&&32!==a.patchFlag&&an.push(a),a}(e,t,n,o,r,l,c,!0)}function hn(e,t,n=!1,o=!1){const{props:s,ref:c,patchFlag:i,children:l,transition:u}=e,p=t?function(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=P([t.class,o.class]));else if("style"===e)t.style=D([t.style,o.style]);else if(r(e)){const n=t[e],r=o[e];!r||n===r||a(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=o[e])}return t}(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&un(p),ref:t&&t.ref?n&&c?a(c)?c.concat(pn(t)):[c,pn(t)]:pn(t):c,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:"production"!==process.env.NODE_ENV&&-1===i&&a(l)?l.map(_n):l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==on?-1===i?16:16|i:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hn(e.ssContent),ssFallback:e.ssFallback&&hn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&o&&nn(d,u.clone(d)),d}function _n(e){const t=hn(e);return a(e.children)&&(t.children=e.children.map(_n)),t}function vn(e=" ",t=0){return dn(rn,null,e,t)}function gn(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(a(t))n=16;else if("object"==typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),gn(e,n()),n._c&&(n._d=!0)))}{n=32;const o=t._;o||Gt(t)?3===o&&Dt&&(1===Dt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Dt}}else p(t)?(t={default:t,_ctx:Dt},n=32):(t=String(t),64&o?(n=16,t=[vn(t)]):n=8);e.children=t,e.shapeFlag|=n}let yn,mn=null;{const e=x(),t=(t,n)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(n),e=>{o.length>1?o.forEach((t=>t(e))):o[0](e)}};yn=t("__VUE_INSTANCE_SETTERS__",(e=>mn=e)),t("__VUE_SSR_SETTERS__",(e=>Nn=e))}const En=e=>{const t=mn;return yn(e),e.scope.on(),()=>{e.scope.off(),yn(t)}};let Nn=!1;process.env.NODE_ENV;const bn=/(?:^|[-_])(\w)/g,wn=e=>e.replace(bn,(e=>e.toUpperCase())).replace(/[-_]/g,"");function On(e,t=!0){return p(e)?e.displayName||e.name:e.name||t&&e.__name}function Sn(e,t,n=!1){let o=On(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1])}if(!o&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components)}return o?wn(o):n?"App":"Anonymous"}function kn(e){return p(e)&&"__vccOpts"in e}process.env.NODE_ENV,process.env.NODE_ENV,process.env.NODE_ENV,"production"!==process.env.NODE_ENV&&function(){if("production"===process.env.NODE_ENV||"undefined"==typeof window)return;const e={style:"color:#3ba776"},n={style:"color:#1677ff"},o={style:"color:#f5222d"},r={style:"color:#eb2f96"},c={header:t=>h(t)?t.__isVue?["div",e,"VueInstance"]:Qe(t)?["div",{},["span",e,_(t)],"<",u(t.value),">"]:He(t)?["div",{},["span",e,Je(t)?"ShallowReactive":"Reactive"],"<",u(t),">"+(We(t)?" (readonly)":"")]:We(t)?["div",{},["span",e,Je(t)?"ShallowReadonly":"Readonly"],"<",u(t),">"]:null:null,hasBody:e=>e&&e.__isVue,body(e){if(e&&e.__isVue)return["div",{},...i(e.$)]}};function i(e){const n=[];e.type.props&&e.props&&n.push(l("props",Ke(e.props))),e.setupState!==t&&n.push(l("setup",e.setupState)),e.data!==t&&n.push(l("data",Ke(e.data)));const o=d(e,"computed");o&&n.push(l("computed",o));const s=d(e,"inject");return s&&n.push(l("injected",s)),n.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:e}]]),n}function l(e,t){return t=s({},t),Object.keys(t).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},e],["div",{style:"padding-left:1.25em"},...Object.keys(t).map((e=>["div",{},["span",r,e+": "],u(t[e],!1)]))]]:["span",{}]}function u(e,t=!0){return"number"==typeof e?["span",n,e]:"string"==typeof e?["span",o,JSON.stringify(e)]:"boolean"==typeof e?["span",r,e]:h(e)?["object",{object:t?Ke(e):e}]:["span",o,String(e)]}function d(e,t){const n=e.type;if(p(n))return;const o={};for(const r in e.ctx)f(n,r,t)&&(o[r]=e.ctx[r]);return o}function f(e,t,n){const o=e[n];return!!(a(o)&&o.includes(t)||h(o)&&t in o)||!(!e.extends||!f(e.extends,t,n))||!(!e.mixins||!e.mixins.some((e=>f(e,t,n))))||void 0}function _(e){return Je(e)?"ShallowRef":e.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(c):window.devtoolsFormatters=[c]}();const Vn={render:function(e,t){var n,o,r,s=Rt("q-btn");return function(e=!1){cn.push(an=e?null:[])}(),ln(dn(s,{label:"Button",size:"lg"},n,o,r,!0))},__file:"src/components/DemoComponent.vue"};export{Vn as MyButton};
