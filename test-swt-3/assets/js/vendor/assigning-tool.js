var AssigningTool=(function(b){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,Z=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),st=new WeakMap;let it=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=st.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&st.set(e,t))}return t}toString(){return this.cssText}};const Tt=i=>new it(typeof i=="string"?i:i+"",void 0,G),Ct=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,a,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[s+1],i[0]);return new it(e,i,G)},Et=(i,t)=>{if(Z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),a=K.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=e.cssText,i.appendChild(r)}},ot=Z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Tt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pt,defineProperty:It,getOwnPropertyDescriptor:Dt,getOwnPropertyNames:Ot,getOwnPropertySymbols:zt,getPrototypeOf:Ut}=Object,A=globalThis,nt=A.trustedTypes,Mt=nt?nt.emptyScript:"",Ht=A.reactiveElementPolyfillSupport,U=(i,t)=>i,X={toAttribute(i,t){switch(t){case Boolean:i=i?Mt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},J=(i,t)=>!Pt(i,t),lt={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let I=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(t,r,e);a!==void 0&&It(this.prototype,t,a)}}static getPropertyDescriptor(t,e,r){const{get:a,set:s}=Dt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:a,set(o){const l=a?.call(this);s?.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Ut(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,r=[...Ot(e),...zt(e)];for(const a of r)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,a]of e)this.elementProperties.set(r,a)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const a=this._$Eu(e,r);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const a of r)e.unshift(ot(a))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Et(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,r);if(a!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:X).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,a=r._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const s=r.getPropertyOptions(a),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:X;this._$Em=a;const l=o.fromAttribute(e,s.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(t,e,r,a=!1,s){if(t!==void 0){const o=this.constructor;if(a===!1&&(s=this[t]),r??(r=o.getPropertyOptions(t)),!((r.hasChanged??J)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:a,wrapped:s},o){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,s]of r){const{wrapped:o}=s,l=this[a];o!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,s,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[U("elementProperties")]=new Map,I[U("finalized")]=new Map,Ht?.({ReactiveElement:I}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,dt=i=>i,Y=M.trustedTypes,ct=Y?Y.createPolicy("lit-html",{createHTML:i=>i}):void 0,ht="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+k,Rt=`<${pt}>`,T=document,H=()=>T.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",Q=Array.isArray,jt=i=>Q(i)||typeof i?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,ut=/>/g,C=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,mt=/"/g,ft=/^(?:script|style|textarea|title)$/i,Vt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=Vt(1),D=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,E=T.createTreeWalker(T,129);function vt(i,t){if(!Q(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}const Lt=(i,t)=>{const e=i.length-1,r=[];let a,s=t===2?"<svg>":t===3?"<math>":"",o=j;for(let l=0;l<e;l++){const n=i[l];let c,d,h=-1,g=0;for(;g<n.length&&(o.lastIndex=g,d=o.exec(n),d!==null);)g=o.lastIndex,o===j?d[1]==="!--"?o=gt:d[1]!==void 0?o=ut:d[2]!==void 0?(ft.test(d[2])&&(a=RegExp("</"+d[2],"g")),o=C):d[3]!==void 0&&(o=C):o===C?d[0]===">"?(o=a??j,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?C:d[3]==='"'?mt:_t):o===mt||o===_t?o=C:o===gt||o===ut?o=j:(o=C,a=void 0);const m=o===C&&i[l+1].startsWith("/>")?" ":"";s+=o===j?n+Rt:h>=0?(r.push(c),n.slice(0,h)+ht+n.slice(h)+k+m):n+k+(h===-2?l:m)}return[vt(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class V{constructor({strings:t,_$litType$:e},r){let a;this.parts=[];let s=0,o=0;const l=t.length-1,n=this.parts,[c,d]=Lt(t,e);if(this.el=V.createElement(c,r),E.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=E.nextNode())!==null&&n.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const h of a.getAttributeNames())if(h.endsWith(ht)){const g=d[o++],m=a.getAttribute(h).split(k),u=/([.?@])?(.*)/.exec(g);n.push({type:1,index:s,name:u[2],strings:m,ctor:u[1]==="."?Bt:u[1]==="?"?qt:u[1]==="@"?Kt:W}),a.removeAttribute(h)}else h.startsWith(k)&&(n.push({type:6,index:s}),a.removeAttribute(h));if(ft.test(a.tagName)){const h=a.textContent.split(k),g=h.length-1;if(g>0){a.textContent=Y?Y.emptyScript:"";for(let m=0;m<g;m++)a.append(h[m],H()),E.nextNode(),n.push({type:2,index:++s});a.append(h[g],H())}}}else if(a.nodeType===8)if(a.data===pt)n.push({type:2,index:s});else{let h=-1;for(;(h=a.data.indexOf(k,h+1))!==-1;)n.push({type:7,index:s}),h+=k.length-1}s++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function O(i,t,e=i,r){if(t===D)return t;let a=r!==void 0?e._$Co?.[r]:e._$Cl;const s=R(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(i),a._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=a:e._$Cl=a),a!==void 0&&(t=O(i,a._$AS(i,t.values),a,r)),t}class Nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,a=(t?.creationScope??T).importNode(e,!0);E.currentNode=a;let s=E.nextNode(),o=0,l=0,n=r[0];for(;n!==void 0;){if(o===n.index){let c;n.type===2?c=new L(s,s.nextSibling,this,t):n.type===1?c=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(c=new Xt(s,this,t)),this._$AV.push(c),n=r[++l]}o!==n?.index&&(s=E.nextNode(),o++)}return E.currentNode=T,a}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,a){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),R(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,a=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=V.createElement(vt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(e);else{const s=new Nt(a,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new V(t)),e}k(t){Q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,a=0;for(const s of t)a===e.length?e.push(r=new L(this.O(H()),this.O(H()),this,this.options)):r=e[a],r._$AI(s),a++;a<e.length&&(this._$AR(r&&r._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const r=dt(t).nextSibling;dt(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,a,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,a){const s=this.strings;let o=!1;if(s===void 0)t=O(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const l=t;let n,c;for(t=s[0],n=0;n<s.length-1;n++)c=O(this,l[r+n],e,n),c===D&&(c=this._$AH[n]),o||(o=!R(c)||c!==this._$AH[n]),c===p?t=p:t!==p&&(t+=(c??"")+s[n+1]),this._$AH[n]=c}o&&!a&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Bt extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class qt extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Kt extends W{constructor(t,e,r,a,s){super(t,e,r,a,s),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??p)===D)return;const r=this._$AH,a=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==p&&(r===p||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Xt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Yt=M.litHtmlPolyfillSupport;Yt?.(V,L),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.3.2");const Wt=(i,t,e)=>{const r=e?.renderBefore??t;let a=r._$litPart$;if(a===void 0){const s=e?.renderBefore??null;r._$litPart$=a=new L(t.insertBefore(H(),s),s,void 0,e??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis;class B extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}B._$litElement$=!0,B.finalized=!0,N.litElementHydrateSupport?.({LitElement:B});const Ft=N.litElementPolyfillSupport;Ft?.({LitElement:B}),(N.litElementVersions??(N.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:J},Jt=(i=Gt,t,e)=>{const{kind:r,metadata:a}=e;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,n,i,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(r==="setter"){const{name:o}=e;return function(l){const n=this[o];t.call(this,l),this.requestUpdate(o,n,i,!0,l)}}throw Error("Unsupported decorator location: "+r)};function q(i){return(t,e)=>typeof e=="object"?Jt(i,t,e):((r,a,s)=>{const o=a.hasOwnProperty(s);return a.constructor.createProperty(s,r),o?Object.getOwnPropertyDescriptor(a,s):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(i){return q({...i,state:!0,attribute:!1})}class Qt{constructor(t={}){this._locked=!1,this._frozen=[],this._blockOutside=e=>{const r=this._options.allow?.();if(r){const a=Array.isArray(r)?r:[r],s=e.composedPath();if(a.some(o=>o&&s.includes(o)))return}e.preventDefault()},this._options=t}get locked(){return this._locked}lock(){this.set(!0)}unlock(){this.set(!1)}set(t){if(typeof document>"u"||this._locked===t)return;this._locked=t,document.documentElement.style.overflow=t?"hidden":"",document.body.style.overflow=t?"hidden":"",document.body.style.touchAction=t?"none":"",t?this._freezeAncestors():this._thawAncestors();const e={capture:!0,passive:!1};t?(window.addEventListener("wheel",this._blockOutside,e),window.addEventListener("touchmove",this._blockOutside,e)):(window.removeEventListener("wheel",this._blockOutside,e),window.removeEventListener("touchmove",this._blockOutside,e))}_freezeAncestors(){let t=this._options.from?.()??null;for(;t&&t!==document.body;){const e=getComputedStyle(t);if(/(auto|scroll)/.test(e.overflowY)||/(auto|scroll)/.test(e.overflowX)){const r=t;this._frozen.push({el:r,overflow:r.style.overflow,touchAction:r.style.touchAction}),r.style.overflow="hidden",r.style.touchAction="none"}t=t.parentElement}}_thawAncestors(){for(const{el:t,overflow:e,touchAction:r}of this._frozen)t.style.overflow=e,t.style.touchAction=r;this._frozen=[]}}const te=Ct`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  :host {
    --at-color-bg: #f5f1ea;
    --at-color-bg-soft: #fdf2f1; 
    --at-color-panel: #ffffff;
    --at-color-panel-soft: #f3ede4;
    --at-color-panel-soft-selected: #fdf2f1;
    --at-color-border: #d8cdbd;
    --at-color-text: #1d1a17;
    --at-color-muted: #6f665b;
    --at-color-accent: #b45f06;
    --at-color-accent-strong: #8f4a05;
    --at-color-accent-soft: rgba(180, 95, 6, 0.12);
    --at-shadow: 0 12px 32px rgba(45, 35, 22, 0.12);
    --at-radius: 18px;
    --at-font-family: 'Lato', Helvetica, Arial, sans-serif;
    --at-card-width: 180px;
    --at-image-slot-height: 148px;
    --at-drawer-width: min(88vw, 420px);
    --at-drawer-duration: 260ms;
    /* Set by the host app to keep a fixed site header visible above the drawer. */
    --at-drawer-top: 0px;

    display: block;
    box-sizing: border-box;
    font-family: var(--at-font-family);
    color: var(--at-color-text);
    text-align: left;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .at {
    background:
      radial-gradient(
        circle at top left,
        rgba(180, 95, 6, 0.08),
        transparent 35%
      ),
      linear-gradient(180deg, #fbf7f2 0%, var(--at-color-bg) 100%);
    border: 1px solid rgba(216, 205, 189, 0.7);
    border-radius: calc(var(--at-radius) + 6px);
    box-shadow: var(--at-shadow);
    padding: 1rem;
  }

  .at__layout {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
    padding: 1rem;
  }

  .at__panel {
    background: radial-gradient(farthest-corner, rgba(27, 19, 19, 0.6) 0, rgba(27, 19, 19, 0.7) 100%);
    /* border: 1px solid var(--at-color-border); */
    border-radius: var(--at-radius);
    overflow: visible;
    min-width: 0;
    box-shadow: 0 0 3.2rem rgba(27,19,19,.8);
  }

  .at__panel-header {
    padding: 0.7rem 0.85rem 0rem;
    /* border-bottom: 1px solid rgba(216, 205, 189, 0.75); */
    border-radius: var(--at-radius) var(--at-radius) 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    
    color: var(--at-color-bg-soft);
    /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 243, 236, 0.95)); */
  }

  .at__progress-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.22rem 0.55rem 0.22rem 0.4rem;
    /* padding: 0.3rem 0.7rem 0.3rem 0.5rem; */
    border-radius: 999px;
    background: rgba(180, 95, 6, 0.08);
    border: 1px solid var(--at-color-bg);
    color: var(--at-color-bg);
    font-size: 0.74rem;
    font-weight: 600;
    line-height: 1;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    white-space: nowrap;
  }

  .at__progress-badge--done {
    background: var(--at-color-border);
    border-color: rgba(34, 139, 68, 0.3);
    color: rgba(22, 101, 48, 0.95);
  }

  .at__progress-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 1.2rem;
    height: 1.2rem;
    padding-top: 0.08em;
    border-radius: 50%;
    background: var(--at-color-panel-soft);
    font-size: 0.68rem;
    font-weight: 700;
    line-height: 1;
    color: var(--at-color-muted);
    transition: background 0.2s ease, color 0.2s ease;
  }

  .at__progress-badge--done .at__progress-icon {
    background: rgba(34, 139, 68, 0.15);
    color: rgba(22, 101, 48, 0.95);
  }

  .at__progress-text {
    font-size: 0.72rem;
    font-weight: 500;
  }

  .at__header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .at__reset-btn {
    all: unset;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    color: var(--at-color-bg-soft);
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .at__reset-btn:hover {
    background: rgba(180, 95, 6, 0.09);
    color: var(--at-color-bg-soft);
  }

  .at__reset-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: transparent;
    color: var(--at-color-muted);
  }

  .at__reset-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .at__reset-icon svg {
    display: block;
    width: 0.95rem;
    height: 0.95rem;
    fill: currentColor;
  }

  .at__reset-btn:hover .at__reset-icon {
    transform: rotate(30deg);
  }

  .at__reset-btn:active .at__reset-icon {
    transform: rotate(180deg);
    transition: transform 0.35s ease;
  }

  .at__reset-tooltip {
    pointer-events: none;
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    white-space: nowrap;
    background: rgba(29, 26, 23, 0.9);
    color: #fff;
    font-size: 0.74rem;
    font-weight: 500;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    opacity: 0;
    translate: 0 4px;
    transition: opacity 0.15s ease, translate 0.15s ease;
  }

  .at__reset-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 0.6rem;
    border: 5px solid transparent;
    border-top-color: rgba(29, 26, 23, 0.9);
  }

  .at__reset-btn:hover .at__reset-tooltip {
    opacity: 1;
    translate: 0 0;
  }

  .at__eyebrow {
    margin: 0;
    display: block;
    height: 1.7rem;
    line-height: 1.7rem;
    align-self: center;
    color: var(--at-color-bg);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .at__title {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.25;
  }

  .at__subtitle {
    margin: 0.35rem 0 0;
    color: var(--at-color-muted);
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .at__layout > .at__panel:last-child {
    position: sticky;
    top: 1rem;
  }

  .at__selections {
    padding: 1rem;
  }

  .at__board {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .at-card {
    width: var(--at-card-width);
    border-radius: 16px;
    background: #ffffff;
    overflow: visible;
    position: relative;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 0.4rem 1rem 1rem 1rem;
    transition: opacity 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
  
    background: var(--at-color-bg-soft);
    height: 100%;
  }

  .at-card.at-card--drop-target {
    transform: scale(1.025) translateY(-4px);
    box-shadow:
      rgba(45, 35, 22, 0.22) 0px 16px 40px,
      rgba(60, 64, 67, 0.12) 0px 2px 6px 2px;
    z-index: 1;
  }

  .at__board:has(.at-card--drop-target) .at-card:not(.at-card--drop-target) {
    opacity: 0.38;
  }

  .at-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    padding: 0.9rem 1rem;
    border-bottom: 1px solid rgba(216, 205, 189, 0.65);
    background: rgba(255, 255, 255, 0.65);
  }

  .at-card__id {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--at-color-muted);

    /* padding-left: 1rem; */
    display: flex;
    justify-content: center;
  }

  .at-card__body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* padding: 0rem; */
  }

  .at-static-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .at-static-item {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    max-width: 100%;
    min-height: 42px;
    height: auto;
    /* padding: 0.45rem 0.75rem; */
    /* border-radius: 999px; */
    /* background: var(--at-color-panel-soft); */
    /* border: 1px solid rgba(216, 205, 189, 0.95); */
    color: var(--at-color-text);
    font-size: 0.88rem;
    line-height: 1.2;
  }

  .at-static-item--tag {
    display: block;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: anywhere;
    padding: 0 0.5rem 0 0.5rem;
  }

  .at-static-item--image {
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    height: var(--at-image-slot-height);
    padding: 0;
    overflow: hidden;
    border-radius: 14px;
  }

  .at-static-item__zoom-btn {
    all: unset;
    position: absolute;
    top: 0.55rem;
    right: 0.55rem;
    width: 2.1rem;
    height: 2.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(29, 26, 23, 0.64);
    color: #fff;
    cursor: pointer;
    backdrop-filter: blur(2px);
    transition: transform 0.12s ease, background-color 0.12s ease, border-color 0.12s ease;
  }

  .at-static-item__zoom-btn:hover {
    transform: scale(1.06);
    background: rgba(29, 26, 23, 0.82);
    border-color: rgba(255, 255, 255, 0.95);
  }

  .at-static-item__zoom-btn:focus-visible {
    outline: 3px solid rgba(180, 95, 6, 0.35);
    outline-offset: 2px;
  }

  .at-static-item__zoom-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .at-static-item img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
  }

  .at-slot {
    position: relative;
    min-height: 72px;
    /* border: 1.5px dashed rgba(180, 95, 6, 0.45); */
    /* border-radius: 14px; */
    /* background: rgba(255, 255, 255, 0.84); */
    transition:
      border-color 0.15s ease,
      background-color 0.15s ease,
      transform 0.15s ease;
  }

  .at-slot:hover {
    background: rgba(255, 255, 255, 0.98);
    border-color: rgba(180, 95, 6, 0.7);
  }

  .at-slot__button.at-slot--drop-target {
    border-color: var(--at-color-accent) !important;
    /* background: rgba(180, 95, 6, 0.08) !important; */
  }

  .at-slot__button {
    min-height: 4.5rem;
    height: auto;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0.75rem 0.85rem;
    border: 1.5px dashed rgb(164, 123, 121);
    border-radius: 14px;
    cursor: pointer;
    box-shadow:
      rgb(252, 228, 227) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .at-slot__button--static {
    cursor: default;
  }

  .at-slot__static-content {

      .at-static-item--tag {
        font-size: 0.6rem;
      }

  }

  .at-slot__button:focus-visible,
  .at-selection__tag:focus-visible {
    outline: 3px solid rgba(180, 95, 6, 0.28);
    outline-offset: 2px;
  }

  .at-slot__placeholder {
    display: block;
    color: var(--at-color-muted);
    font-size: 0.6rem;
    line-height: 1.35;
    text-align: center;
  }

  .at-slot__value {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.35rem;
    padding: 0.4rem 0.65rem;
    padding-right: 1.4rem;
    border-radius: 10px;
    border: 1px solid rgba(180, 95, 6, 0.22);
    background: #fff;
    color: var(--at-color-text);
    box-shadow: 0 2px 8px rgba(61, 44, 25, 0.06);
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1.35;
    word-break: break-word;
    min-height: 32px;
    position: relative;
    overflow: visible;
  }

  .at-slot__value-image {
    display: block;
    width: 100%;
    max-width: 230px;
    max-height: 180px;
    object-fit: contain;
    border-radius: 8px;
  }

  .at-slot__value-remove-btn {
    all: unset;
    position: absolute;
    top: -6px;
    right: -6px;
    width: 18px;
    height: 18px;
    border: 1.5px solid rgba(180, 95, 6, 0.45);
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    box-sizing: border-box;
  }

  .at-slot__value-remove-btn:hover {
    background: rgba(180, 95, 6, 0.85);
    border-color: rgba(180, 95, 6, 0.85);
  }

  .at-slot__value-remove-btn::before,
  .at-slot__value-remove-btn::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 1.5px;
    background: rgba(180, 95, 6, 0.7);
    top: 50%;
    left: 50%;
    transform-origin: center;
  }

  .at-slot__value-remove-btn:hover::before,
  .at-slot__value-remove-btn:hover::after {
    background: #fff;
  }

  .at-slot__value-remove-btn::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .at-slot__value-remove-btn::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .at-slot__meta {
    display: block;
    margin-top: 0.3rem;
    color: var(--at-color-muted);
    font-size: 0.78rem;
    line-height: 1.3;
  }

  .at-selection-section + .at-selection-section {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(216, 205, 189, 0.65);
  }

  .at-selection-section__title {
    margin: 0 0 0.7rem;
    color: var(--at-color-muted);
    font-size: 0.84rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .at-selection-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
  }

  .at-selection__tag {
    all: unset;
    user-select: none;
    touch-action: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 0.55rem 0.9rem;
    border-radius: 14px;
    border: 1px solid rgba(180, 95, 6, 0.22);
    background: var(--at-color-bg-soft);
    color: var(--at-color-text);
    box-shadow: 0 4px 12px rgba(61, 44, 25, 0.06);
    cursor: grab;
    -webkit-user-drag: element;
    user-select: none;
    touch-action: none;
    transition:
      transform 0.15s ease,
      border-color 0.15s ease,
      opacity 0.15s ease,
      background-color 0.15s ease;
  }

  .at-selection__tag--image {
    min-width: 96px;
    min-height: 96px;
    max-width: 150px;
    padding: 0.45rem;
    border-radius: 12px;
  }

  .at-selection__tag-image {
    display: block;
    width: 100%;
    max-width: 136px;
    max-height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }

  .at-selection__tag:hover {
    transform: translateY(-1px);
    border-color: rgba(180, 95, 6, 0.55);
  }

  .at-selection__tag--readonly,
  .at-selection__tag--readonly:hover {
    cursor: not-allowed;
    transform: none;
    border-color: rgba(180, 95, 6, 0.22);
    opacity: 0.62;
  }

  .at-selection__tag--dragging {
    opacity: 0.45;
    cursor: grabbing;
  }

  .at-selection__tag--used {
    cursor: not-allowed;
    opacity: 0.45;
    background: var(--at-color-panel-soft-selected);
    -webkit-user-drag: none;
  }

  .at-selection__tag--active {
    border-color: var(--at-color-accent);
    background: rgba(180, 95, 6, 0.1);
  }

  .at__empty {
    padding: 0.75rem 1rem 1rem;
    color: var(--at-color-muted);
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .at__modal-overlay {
    position: fixed;
    top: var(--at-drawer-top, 0px);
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2147483647;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(0.9rem, 2.5vw, 2rem);
    width: 99vw;
    max-width: none;
    height: calc(100dvh - var(--at-drawer-top, 0px));
    max-height: none;
    margin: 0;
    border: 0;
    background: transparent;
  }

  .at__modal-overlay::backdrop {
    position: fixed;
    top: var(--at-drawer-top, 0px);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(22, 18, 13, 0.72);
    backdrop-filter: blur(2px);
  }

  /* Below COMPACT_MEDIA_QUERY the modal takes the full screen instead of leaving room for the header. */
  :host([compact]) .at__modal-overlay {
    top: 0;
    height: 100dvh;
  }

  :host([compact]) .at__modal-overlay::backdrop {
    top: 0;
  }

  .at__modal {
    position: relative;
    width: min(94vw, 1100px);
    max-height: 92vh;
    border-radius: 16px;
    border: 1px solid rgba(216, 205, 189, 0.6);
    background: linear-gradient(180deg, #fffdf9 0%, #f8f2e8 100%);
    padding: clamp(0.7rem, 2vw, 1rem);
    box-shadow: 0 22px 68px rgba(11, 9, 7, 0.45);
  }

  .at__modal-image {
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: calc(92vh - 2rem);
    object-fit: contain;
    border-radius: 12px;
    background: rgba(248, 242, 233, 0.8);
  }

  .at__modal-close-btn {
    all: unset;
    position: absolute;
    top: 0.35rem;
    right: 0.35rem;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(29, 26, 23, 0.74);
    color: #fff;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    transition: background 0.12s ease, transform 0.12s ease;
  }

  .at__modal-close-btn:hover {
    background: rgba(29, 26, 23, 0.92);
    transform: scale(1.04);
  }

  .at__modal-close-btn:focus-visible {
    outline: 3px solid rgba(180, 95, 6, 0.45);
    outline-offset: 2px;
  }

  @media (max-width: 550px) {
    .at__layout {
      grid-template-columns: 1fr;
    }

    .at-card {
      width: 100%;
      flex-basis: 100%;
    }

    .at__modal {
      width: min(96vw, 1100px);
      max-height: 94vh;
      padding: 0.6rem;
    }

    .at__modal-image {
      max-height: calc(94vh - 1.2rem);
    }
  }

  /* ---------- Compact (touch) mode: right-hand panel becomes a side drawer ---------- */

  .at__compact-bar {
    display: none;
  }

  :host([compact]) .at__layout {
    grid-template-columns: 1fr;
    padding: 0.75rem;
    gap: 0.75rem;
  }

  :host([compact]) .at__layout > .at__panel {
    display: none;
  }

  :host([compact]) .at__compact-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.6rem 0.9rem;
    border-radius: var(--at-radius);
    color: var(--at-color-bg-soft);
    background: radial-gradient(farthest-corner, rgba(27, 19, 19, 0.6) 0, rgba(27, 19, 19, 0.7) 100%);
    box-shadow: 0 0 1.6rem rgba(27, 19, 19, 0.6);
  }

  :host([compact]) .at-card {
    width: 100%;
    flex-basis: calc(50% - 0.5rem);
  }

  :host([compact]) .at__progress-badge {
    padding: 0.16rem 0.45rem 0.16rem 0.32rem;
    font-size: 0.68rem;
  }

  :host([compact]) .at__progress-icon {
    width: 1.05rem;
    height: 1.05rem;
    font-size: 0.6rem;
  }

  :host([compact]) .at-slot__button {
    min-height: 48px;
    cursor: pointer;
  }

  :host([compact]) .at-slot--pending .at-slot__button {
    border-color: var(--at-color-accent);
    box-shadow: 0 0 0 3px var(--at-color-accent-soft);
  }

  /* pan-y keeps the drawer list scrollable; a sideways drag still starts a drop onto the board */
  :host([compact]) .at-selection__tag {
    min-height: 48px;
    touch-action: pan-y;
  }

  :host([compact]) .at-selection__tag--image {
    min-width: 104px;
    min-height: 104px;
  }

  @media (max-width: 550px) {
    :host([compact]) .at-card {
      flex-basis: 100%;
    }
  }

  .at__drawer-overlay {
    position: fixed;
    inset: 0;
    z-index: 2147483646;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    width: 100vw;
    max-width: none;
    height: 99dvh;
    max-height: none;
    margin: 0;
    padding: 10px 0 0;
    border: 0;
    background: transparent;
    overflow: visible;
  }

  .at__drawer-overlay::backdrop {
    background: rgba(22, 18, 13, 0.62);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: opacity var(--at-drawer-duration) ease;
  }

  .at__drawer-overlay--open::backdrop {
    opacity: 1;
  }

  .at__drawer-overlay--drag-hidden {
    /* lets elementsFromPoint reach the cards underneath the top layer while dragging */
    pointer-events: none;
  }

  .at__drawer-overlay--drag-hidden::backdrop {
    opacity: 0;
  }

  .at__drawer {
    display: flex;
    flex-direction: column;
    width: var(--at-drawer-width);
    height: 100%;
    color: var(--at-color-bg-soft);
    background: radial-gradient(farthest-corner, rgba(27, 19, 19, 0.94) 0, rgba(27, 19, 19, 0.99) 100%);
    border-radius: var(--at-radius) 0 0 var(--at-radius);
    box-shadow: -12px 0 40px rgba(27, 19, 19, 0.55);
    transform: translateX(100%);
    transition: transform var(--at-drawer-duration) cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  .at__drawer--open {
    transform: translateX(0);
  }

  .at__drawer--drag-hidden {
    transform: translateX(100%);
    pointer-events: none;
  }

  .at__drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.85rem 0.9rem 0.7rem;
    border-bottom: 1px solid rgba(216, 205, 189, 0.22);
  }

  .at__drawer-context {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 0;
  }

  .at__drawer-context-image {
    display: block;
    width: 52px;
    height: 52px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid rgba(216, 205, 189, 0.35);
    box-shadow: 0 4px 14px rgba(11, 9, 7, 0.4);
  }

  .at__drawer-context-text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
  }

  .at__drawer-context-eyebrow {
    margin: 0;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    line-height: 1.2;
    color: #e0a45f;
  }

  .at__drawer-context-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .at__drawer-close-btn {
    all: unset;
    flex: 0 0 auto;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(29, 26, 23, 0.74);
    color: #fff;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    transition: background 0.12s ease, transform 0.12s ease;
  }

  .at__drawer-close-btn:hover {
    background: rgba(29, 26, 23, 0.92);
    transform: scale(1.04);
  }

  .at__drawer-close-btn:focus-visible {
    outline: 3px solid rgba(180, 95, 6, 0.55);
    outline-offset: 2px;
  }

  .at__drawer-body {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0.9rem;
  }

  .at__drawer-footer {
    padding: 0 0.9rem calc(0.9rem + env(safe-area-inset-bottom));
  }

  .at__drawer-clear-btn {
    all: unset;
    display: block;
    width: 100%;
    box-sizing: border-box;
    min-height: 48px;
    padding: 0.7rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(216, 205, 189, 0.35);
    text-align: center;
    color: var(--at-color-bg-soft);
    cursor: pointer;
  }

  .at__drawer-clear-btn:focus-visible {
    outline: 3px solid rgba(180, 95, 6, 0.55);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .at__drawer,
    .at__drawer-overlay::backdrop {
      transition-duration: 1ms;
    }
  }
`,yt="assigning";function ee(i,t){for(const e of i){const r=e.configuration.tags.find(a=>a.id===t);if(r)return r.value}return t}function et(i){return/^data:image\//i.test(i)||/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(i)}function re(i,t){const e=i.filter(a=>!t.has(a.id)),r=i.filter(a=>t.has(a.id));return[...e,...r]}function ae(i){const{value:t,type:e,onOpenImagePreview:r}=i;return e==="image"?_`
      <div class="at-static-item at-static-item--image">
        <img src=${t} alt="" loading="lazy" />
        <button
          type="button"
          class="at-static-item__zoom-btn"
          aria-label="Zvětšit obrázek"
          @click=${()=>r(t)}
        >
          <span class="at-static-item__zoom-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </button>
      </div>
    `:_`<span class="at-static-item at-static-item--tag">${t}</span>`}function se(i){const{dependencyData:t,assignmentId:e,slotId:r,slotType:a,tagId:s,readOnly:o,onSlotClear:l}=i,n=ee(t,s),c=a==="image"&&et(n);return _`
    <span class="at-slot__value">
      ${c?_`<img class="at-slot__value-image" src=${n} alt="Vybraný obrázek" loading="lazy" />`:n}
      ${o?p:_`<button
            class="at-slot__value-remove-btn"
            aria-label="Odebrat tag"
            @click=${d=>{d.stopPropagation(),l(e,r)}}
          ></button>`}
    </span>
  `}function ie(i){const{assignmentId:t,slotId:e,slotType:r,isStatic:a,staticItems:s,slotLabel:o,slotKey:l,slotValue:n,dependencyData:c,readOnly:d,isCompact:h,isPending:g,onOpenImagePreview:m,onSlotClear:u,onSlotPick:P}=i,v=["at-slot-active",a?"at-slot--static":"",a?"":"at-slot--active",g?"at-slot--pending":""].filter(Boolean).join(" ");if(a)return _`
      <div class=${v} data-slot-key=${l} aria-label=${o}>
        <!-- <div class="at-slot__button at-slot__button--static"> -->
          <div class="at-slot__static-content">
            ${s.length?s.map(x=>ae({value:x,type:r,onOpenImagePreview:m})):_`<span class="at-slot__placeholder">${o}</span>`}
          </div>
        <!-- </div> -->
      </div>
    `;const $=n?se({dependencyData:c,assignmentId:t,slotId:e,slotType:r,tagId:n,readOnly:d,onSlotClear:u}):_`<span class="at-slot__placeholder">${o}</span>`,y=h&&!d,f=x=>{y&&P(t,e,x.currentTarget)};return _`
    <div class=${v} data-slot-key=${l}>
      <div
        class="at-slot__button"
        data-assignment-id=${t}
        data-slot-id=${e}
        role=${y?"button":p}
        tabindex=${y?"0":p}
        aria-expanded=${y?String(g):p}
        @click=${y?f:p}
        @keydown=${y?x=>{x.key!=="Enter"&&x.key!==" "||(x.preventDefault(),f(x))}:p}
      >
        ${$}
      </div>
    </div>
  `}function oe(i){const{assignment:t,state:e,dependencyData:r,readOnly:a,isCompact:s,pendingSlot:o,onOpenImagePreview:l,onSlotClear:n,onSlotPick:c}=i;return _`
    <article class="at-card" data-assignment-id=${t.id}>
      ${t.title?_`<div class="at-card__id">${t.title}</div>`:p}
      <div class="at-card__body">
        <!-- <div class="at-card__slot-list"> -->
          ${t.slotDefinitions.map(d=>{const h=`${t.id}::${d.id}`,g=e.slotValues[h],m=d.static?`${d.type==="image"?"Static image":"Static tag"} ${d.id}`:s?"+ Klepnutím vyberte položku":"+ Vyberte položku z nabídky a přetáhněte ji sem ";return ie({assignmentId:t.id,slotId:d.id,slotType:d.type,isStatic:!!d.static,staticItems:d.items??[],slotLabel:m,slotKey:h,slotValue:g,dependencyData:r,readOnly:a,isCompact:s,isPending:o?.assignmentId===t.id&&o?.slotId===d.id,onOpenImagePreview:l,onSlotClear:n,onSlotPick:c})})}
        <!-- </div> -->
      </div>
    </article>
  `}function ne(i){const{selectionId:t,tag:e,readOnly:r,isUsed:a,onTagPointerDown:s,onTagPointerMove:o,onTagPointerUp:l,onTagPointerCancel:n}=i,c=["at-selection__tag",et(e.value)?"at-selection__tag--image":"",r?"at-selection__tag--readonly":"",a?"at-selection__tag--used":""].filter(Boolean).join(" ");return _`
    <div
      class=${c}
      data-selection-id=${t}
      .draggable=${!r&&!a}
      @pointerdown=${d=>{!r&&!a&&s(d,t,e.id)}}
      @pointermove=${d=>{!r&&!a&&o(d)}}
      @pointerup=${d=>{!r&&!a&&l(d)}}
      @pointercancel=${d=>{!r&&!a&&n(d)}}
      @dragstart=${d=>{(r||a)&&d.preventDefault()}}
    >
      ${et(e.value)?_`<img class="at-selection__tag-image" src=${e.value} alt="Nabízený obrázek" loading="lazy" />`:e.value}
    </div>
  `}function le(i){const{selection:t,readOnly:e,usedTagIds:r,onTagPointerDown:a,onTagPointerMove:s,onTagPointerUp:o,onTagPointerCancel:l}=i,n=t.configuration.mode==="singleUse",c=n?re(t.configuration.tags,r):t.configuration.tags;return _`
    <section class="at-selection-section">
      <!-- <h3 class="at-selection-section__title">${t.moduleId}</h3> -->
      <div class="at-selection-list">
        ${c.map(d=>ne({selectionId:t.moduleId,tag:d,readOnly:e,isUsed:n&&r.has(d.id),onTagPointerDown:a,onTagPointerMove:s,onTagPointerUp:o,onTagPointerCancel:l}))}
      </div>
    </section>
  `}function wt(i){const{dependencyData:t,...e}=i;return t.length?t.map(r=>le({selection:r,...e})):_`<div class="at__empty">No dependency selection data was provided.</div>`}function xt(i,t,e){return _`
    <div class="at__progress-badge ${e?"at__progress-badge--done":""}">
      <span class="at__progress-icon">${e?"✓":i}</span>
      <span class="at__progress-text">${e?"Vše přiřazeno":_`/ ${t}`}</span>
    </div>
  `}function $t(i,t){return _`
    <button
      class="at__reset-btn"
      aria-label="Resetovat výběr"
      ?disabled=${i}
      @click=${t}
    >
      <span class="at__reset-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1920"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0" fill-rule="evenodd"/>
        </svg>
      </span>
      <span class="at__reset-tooltip">Resetovat všechna přiřazení</span>
    </button>
  `}function de(i){const{configuration:t,dependencyData:e,state:r,readOnly:a,usedTagIds:s,pendingSlot:o,dragHidden:l,visible:n,onSlotClear:c,onSlotPickerClose:d,...h}=i,g=t.assignments.find(f=>f.id===o.assignmentId),m=g?.slotDefinitions.filter(f=>f.static&&f.items?.length)??[],u=m.find(f=>f.type==="image")?.items?.[0],P=g?.title||m.find(f=>f.type==="tag")?.items?.[0]||o.assignmentId,v=r.slotValues[`${o.assignmentId}::${o.slotId}`],$=["at__drawer-overlay",n?"at__drawer-overlay--open":"",l?"at__drawer-overlay--drag-hidden":""].filter(Boolean).join(" "),y=["at__drawer",n?"at__drawer--open":"",l?"at__drawer--drag-hidden":""].filter(Boolean).join(" ");return _`
    <dialog
      class=${$}
      aria-label="Výběr položky k přiřazení"
      @cancel=${f=>{f.preventDefault(),d()}}
      @click=${f=>{f.target===f.currentTarget&&d()}}
    >
      <aside class=${y}>
        <header class="at__drawer-header">
          <div class="at__drawer-context">
            ${u?_`<img class="at__drawer-context-image" src=${u} alt="" loading="lazy" />`:p}
            <div class="at__drawer-context-text">
              <p class="at__drawer-context-eyebrow">Přiřadit k</p>
              <p class="at__drawer-context-title">${P}</p>
            </div>
          </div>
          <button
            type="button"
            class="at__drawer-close-btn"
            aria-label="Zavřít výběr"
            @click=${d}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div class="at__drawer-body">
          ${wt({dependencyData:e,readOnly:a,usedTagIds:s,...h})}
        </div>

        <footer class="at__drawer-footer">
          ${v&&!a?_`<button
                type="button"
                class="at__drawer-clear-btn"
                @click=${()=>{c(o.assignmentId,o.slotId),d()}}
              >
                Odebrat přiřazení
              </button>`:p}
        </footer>
      </aside>
    </dialog>
  `}function ce(i){const{configuration:t,dependencyData:e,state:r,readOnly:a,usedTagIds:s,previewImageUrl:o,isCompact:l,pendingSlot:n,drawerDragHidden:c,drawerVisible:d,onTagPointerDown:h,onTagPointerMove:g,onTagPointerUp:m,onTagPointerCancel:u,onOpenImagePreview:P,onCloseImagePreview:v,onSlotClear:$,onSlotPick:y,onSlotPickerClose:f,onReset:x}=i,St={onTagPointerDown:h,onTagPointerMove:g,onTagPointerUp:m,onTagPointerCancel:u},F=t.assignments.length,rt=t.assignments.filter(S=>{const kt=S.slotDefinitions.filter(at=>!at.static);return kt.length>0&&kt.every(at=>!!r.slotValues[`${S.id}::${at.id}`])}).length,At=F>0&&rt===F,me=l&&!!n;return _`
      <div class="at__layout">
        ${l?_`<header class="at__compact-bar">
              <p class="at__eyebrow">Výběr</p>
              ${xt(rt,F,At)}
              ${$t(a,x)}
            </header>`:p}

        <section class="at__panel-board">
          <div class="at__board">
            ${t.assignments.map(S=>oe({assignment:S,state:r,dependencyData:e,readOnly:a,isCompact:l,pendingSlot:n,onOpenImagePreview:P,onSlotClear:$,onSlotPick:y}))}
          </div>
        </section>

        <section class="at__panel">
          <header class="at__panel-header">
            <p class="at__eyebrow">Výběr</p>
            ${xt(rt,F,At)}
            ${$t(a,x)}
          </header>

          <div class="at__selections">
            ${wt({dependencyData:e,readOnly:a,usedTagIds:s,...St})}
          </div>
        </section>
      </div>

      ${me&&n?de({configuration:t,dependencyData:e,state:r,readOnly:a,usedTagIds:s,pendingSlot:n,dragHidden:c,visible:d,onSlotClear:$,onSlotPickerClose:f,...St}):p}

      ${o?_`
            <dialog
              class="at__modal-overlay"
              aria-label="Detail obrázku"
              @cancel=${S=>{S.preventDefault(),v()}}
              @click=${S=>{S.target===S.currentTarget&&v()}}
            >
              <div class="at__modal" role="dialog" aria-modal="true" aria-label="Detail obrázku">
                <button
                  type="button"
                  class="at__modal-close-btn"
                  aria-label="Zavřít detail obrázku"
                  @click=${v}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <img class="at__modal-image" src=${o} alt="Detail obrázku" loading="lazy" />
              </div>
            </dialog>
          `:p}
  `}var he=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,w=(i,t,e,r)=>{for(var a=r>1?void 0:r?pe(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(a=(r?o(t,e,a):o(a))||a);return r&&a&&he(t,e,a),a};const ge="(max-width: 720px)",ue=8,_e=260;return b.AssigningTool=class extends B{constructor(){super(),this.exportVersion=1,this._dragTargetSlotEl=null,this._dragTargetCardEl=null,this._currentDragTagId=null,this._currentDragSelectionId=null,this._dragSourceEl=null,this._ghost=null,this._dragStartX=0,this._dragStartY=0,this._dragActive=!1,this._lastSlotTriggerEl=null,this._compactMql=null,this._drawerCloseTimer=null,this._dropTargets=[],this._scrollLock=new Qt({allow:()=>this.shadowRoot?.querySelector(".at__drawer")??null,from:()=>this.parentElement}),this._handleCompactChange=t=>{this._isCompact=t.matches,!this._isCompact&&(this._clearDrawerCloseTimer(),this._pendingSlot=null,this._drawerVisible=!1)},this._handleWindowKeyDown=t=>{if(t.key==="Escape"){if(this._previewImageUrl){t.preventDefault(),this._closeImagePreview();return}this._pendingSlot&&(t.preventDefault(),this._closeSlotPicker())}},this.configuration={moduleId:"assigning-local",moduleType:yt,dependencies:[],viewSettings:{},assignments:[]},this.dependencyData=[],this.userData={assignments:[]},this.readOnly=!1,this._state={slotValues:{}},this._previewImageUrl=null,this._isCompact=!1,this._pendingSlot=null,this._drawerDragHidden=!1,this._drawerVisible=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._handleWindowKeyDown),typeof window.matchMedia=="function"&&(this._compactMql=window.matchMedia(ge),this._isCompact=this._compactMql.matches,this._compactMql.addEventListener("change",this._handleCompactChange))}disconnectedCallback(){this._scrollLock.set(!1),window.removeEventListener("keydown",this._handleWindowKeyDown),this._compactMql?.removeEventListener("change",this._handleCompactChange),this._compactMql=null,this._clearDrawerCloseTimer(),this._pendingSlot=null,this._drawerVisible=!1,super.disconnectedCallback()}_clearDrawerCloseTimer(){this._drawerCloseTimer!==null&&(window.clearTimeout(this._drawerCloseTimer),this._drawerCloseTimer=null)}_syncOverlayLayers(){const t=this.shadowRoot?.querySelector(".at__modal-overlay"),e=!!this._previewImageUrl;e?t&&!t.open&&t.showModal():t?.open&&t.close();const r=this.shadowRoot?.querySelector(".at__drawer-overlay");r&&!r.open&&(r.showModal(),this.shadowRoot?.querySelector(".at__drawer")?.offsetWidth,requestAnimationFrame(()=>{this._pendingSlot&&(this._drawerVisible=!0)}),this.shadowRoot?.querySelector(".at__drawer-close-btn")?.focus()),this._scrollLock.set(e||!!this._pendingSlot)}_slotKey(t,e){return`${t}::${e}`}_rebuildState(){const t={};for(const e of this.userData.assignments??[])for(const r of e.slots)r.tagId&&(t[this._slotKey(e.id,r.slotId)]=r.tagId);this._state={slotValues:t}}_emitChange(){const t=this.exportModule(),e=this._computeFeedback(t);this.dispatchEvent(new CustomEvent("assigning-tool:change",{bubbles:!0,composed:!0,detail:{exportModule:t,feedback:e}}))}_computeFeedback(t){const e=t.configuration.assignments||[],r=t.userData.assignments||[],a=Array.isArray(t.configuration.feedback)?t.configuration.feedback:[],s=a.length>0;let o=0,l=0;e.forEach(g=>{const m=r.find(u=>u.id===g.id);(g.slotDefinitions||[]).forEach(u=>{if(u.static)return;o+=1;const v=m?.slots?.find(y=>y.slotId===u.id)?.tagId||"",$=Array.isArray(u.spravnaOdpoved)?u.spravnaOdpoved:u.spravnaOdpoved?[u.spravnaOdpoved]:[];v&&($.length===0||$.includes(v))&&(l+=1)})});const n=e.every(g=>{const m=r.find(u=>u.id===g.id);return(g.slotDefinitions||[]).filter(u=>!u.static).every(u=>!!m?.slots?.find(v=>v.slotId===u.id)?.tagId)}),c=o-l,d=s&&n?this._resolveFeedbackItem(a,c):null,h=a.map(g=>g.color||g.barva).filter(g=>!!g);return{enabled:s,isComplete:n,requiredSlotsCount:o,correctCount:l,wrongCount:c,text:d?.text||null,color:d?.color||d?.barva||null,colors:h}}_resolveFeedbackItem(t,e){if(t.length===0)return null;const r=t.find(a=>{const s=a.condition??a.podminka;return Array.isArray(s)?s.includes(e):s===e});return r||t.find(a=>{const s=a.condition??a.podminka;return Array.isArray(s)?s.includes(0):s===0})||t[t.length-1]}_assignTag(t,e,r){if(this.readOnly)return;const a=this._slotKey(t,e);this._state={slotValues:{...this._state.slotValues,[a]:r}},this.requestUpdate(),this._emitChange()}_clearSlot(t,e){if(this.readOnly)return;const r=this._slotKey(t,e),a={...this._state.slotValues};delete a[r],this._state={slotValues:a},this.requestUpdate(),this._emitChange()}_resetAll(){this.readOnly||(this._state={slotValues:{}},this.requestUpdate(),this._emitChange())}_openImagePreview(t){this._previewImageUrl=t}_closeImagePreview(){this._previewImageUrl=null}_isTagSingleUseBlocked(t,e){return this.dependencyData.find(a=>a.moduleId===t)?.configuration.mode!=="singleUse"?!1:Object.values(this._state.slotValues).includes(e)}_openSlotPicker(t,e,r){this.readOnly||!this._isCompact||(this._clearDrawerCloseTimer(),this._lastSlotTriggerEl=r,this._drawerDragHidden=!1,this._pendingSlot||(this._drawerVisible=!1),this._pendingSlot={assignmentId:t,slotId:e})}_closeSlotPicker(){this._pendingSlot&&(this._drawerVisible=!1,this._drawerDragHidden=!1,this._clearDrawerCloseTimer(),this._drawerCloseTimer=window.setTimeout(()=>{this._drawerCloseTimer=null,this._pendingSlot=null},_e),this._lastSlotTriggerEl?.focus?.(),this._lastSlotTriggerEl=null)}_handleTagTap(t,e){const r=this._pendingSlot;!r||this.readOnly||this._isTagSingleUseBlocked(t,e)||(this._assignTag(r.assignmentId,r.slotId,e),this._closeSlotPicker())}_handleTagPointerDown(t,e,r){if(this.readOnly)return;if(this._isTagSingleUseBlocked(e,r)){t.preventDefault();return}t.preventDefault();const a=t.currentTarget;a.setPointerCapture(t.pointerId),this._currentDragTagId=r,this._currentDragSelectionId=e,this._dragSourceEl=a,this._dragStartX=t.clientX,this._dragStartY=t.clientY,this._dragActive=!1}_beginPointerDrag(t){const e=this._dragSourceEl;if(!e)return;this._dragActive=!0,e.classList.add("at-selection__tag--dragging"),this._pendingSlot&&(this._drawerDragHidden=!0,this._captureDropTargets());const r=document.createElement("div"),a=e.querySelector("img");if(a){const s=a.cloneNode(!0);s.style.display="block",s.style.width="96px",s.style.maxHeight="64px",s.style.objectFit="cover",s.style.borderRadius="8px",r.appendChild(s)}else r.textContent=e.textContent;r.style.cssText=["position:fixed","z-index:9999","pointer-events:none","display:flex","align-items:center",`padding:${getComputedStyle(e).padding}`,`font:${getComputedStyle(e).font}`,`border-radius:${getComputedStyle(e).borderRadius}`,"border:1px solid rgba(180,95,6,0.55)","background:#fff","color:#1d1a17","box-shadow:0 8px 24px rgba(45,35,22,0.25)","max-width:15rem","white-space:normal","word-break:break-word","transform:translate(-50%,-50%)"].join(";"),document.body.appendChild(r),this._ghost=r,this._moveGhost(t.clientX,t.clientY)}_handleTagPointerMove(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId)return;if(t.preventDefault(),!this._dragActive){const o=t.clientX-this._dragStartX,l=t.clientY-this._dragStartY;if(Math.hypot(o,l)<ue)return;this._beginPointerDrag(t)}if(!this._ghost)return;this._moveGhost(t.clientX,t.clientY);const e=this._findDropSlotEl(t.clientX,t.clientY),r=e?.dataset.assignmentId??null,a=e?.dataset.slotId?e:null,s=r?this._findCardElForAssignmentId(r):null;a!==this._dragTargetSlotEl&&(this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetSlotEl=a,a?.classList.add("at-slot--drop-target")),s!==this._dragTargetCardEl&&(this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._dragTargetCardEl=s,s?.classList.add("at-card--drop-target"))}_handleTagPointerUp(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId)return;const e=this._currentDragTagId,r=this._currentDragSelectionId,a=this._dragActive,s=a?this._findDropSlotEl(t.clientX,t.clientY):null;if(this._cleanupPointerDrag(),!a){r&&this._handleTagTap(r,e);return}if(!s?.dataset.assignmentId)return;const o=s.dataset.assignmentId;if(s.dataset.slotId){this._assignTag(o,s.dataset.slotId,e),this._closeSlotPicker();return}const l=this.configuration.assignments.find(c=>c.id===o);if(!l)return;const n=l.slotDefinitions.find(c=>c.static?!1:!this._state.slotValues[this._slotKey(o,c.id)]);n&&(this._assignTag(o,n.id,e),this._closeSlotPicker())}_handleTagPointerCancel(){this._cleanupPointerDrag()}_moveGhost(t,e){this._ghost&&(this._ghost.style.left=`${t}px`,this._ghost.style.top=`${e}px`)}_captureDropTargets(){const t=this.shadowRoot;if(!t)return;const e=Array.from(t.querySelectorAll(".at-slot__button[data-slot-id]")),r=Array.from(t.querySelectorAll("article[data-assignment-id]"));this._dropTargets=[...e.map(a=>({el:a,rect:a.getBoundingClientRect(),isSlot:!0})),...r.map(a=>({el:a,rect:a.getBoundingClientRect(),isSlot:!1}))]}_findDropSlotEl(t,e){if(this._dropTargets.length){const s=this._dropTargets.filter(({rect:o})=>t>=o.left&&t<=o.right&&e>=o.top&&e<=o.bottom);return s.find(o=>o.isSlot)?.el??s[0]?.el??null}if(!this.shadowRoot)return null;const r=this.shadowRoot.elementsFromPoint(t,e);let a=null;for(const s of r)if(s instanceof HTMLElement&&s.dataset.assignmentId){if(s.dataset.slotId)return s;a||(a=s)}return a}_findCardElForAssignmentId(t){return this.shadowRoot?.querySelector(`article[data-assignment-id="${t}"]`)??null}_cleanupPointerDrag(){this._dragSourceEl?.classList.remove("at-selection__tag--dragging"),this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._ghost?.remove(),this._ghost=null,this._currentDragTagId=null,this._currentDragSelectionId=null,this._dragSourceEl=null,this._dragTargetSlotEl=null,this._dragTargetCardEl=null,this._dragActive=!1,this._drawerDragHidden=!1,this._dropTargets=[]}_serializeUserData(){return{assignments:this.configuration.assignments.map(e=>({id:e.id,slots:e.slotDefinitions.filter(r=>!r.static).map(r=>{const a=this._slotKey(e.id,r.id),s=this._state.slotValues[a];return{slotId:r.id,tagId:s??""}})}))}}exportModule(){const t=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:t,moduleType:yt,configuration:{...this.configuration},userData:this._serializeUserData(),updatedAt:new Date().toISOString()}}willUpdate(t){(t.has("configuration")||t.has("userData"))&&this._rebuildState(),t.has("readOnly")&&this.readOnly&&(this._clearDrawerCloseTimer(),this._pendingSlot=null,this._drawerVisible=!1)}updated(t){(t.has("configuration")||t.has("userData"))&&this._emitChange(),t.has("_isCompact")&&this.toggleAttribute("compact",this._isCompact),(t.has("_previewImageUrl")||t.has("_pendingSlot"))&&this._syncOverlayLayers()}render(){const t=new Set(Object.values(this._state.slotValues));return ce({configuration:this.configuration,dependencyData:this.dependencyData,state:this._state,readOnly:this.readOnly,usedTagIds:t,previewImageUrl:this._previewImageUrl,isCompact:this._isCompact,pendingSlot:this._pendingSlot,drawerDragHidden:this._drawerDragHidden,drawerVisible:this._drawerVisible,onTagPointerDown:(e,r,a)=>this._handleTagPointerDown(e,r,a),onTagPointerMove:e=>this._handleTagPointerMove(e),onTagPointerUp:e=>this._handleTagPointerUp(e),onTagPointerCancel:()=>this._handleTagPointerCancel(),onOpenImagePreview:e=>this._openImagePreview(e),onCloseImagePreview:()=>this._closeImagePreview(),onSlotClear:(e,r)=>this._clearSlot(e,r),onSlotPick:(e,r,a)=>this._openSlotPicker(e,r,a),onSlotPickerClose:()=>this._closeSlotPicker(),onReset:()=>this._resetAll()})}},b.AssigningTool.styles=te,w([q({attribute:!1})],b.AssigningTool.prototype,"configuration",2),w([q({attribute:!1})],b.AssigningTool.prototype,"dependencyData",2),w([q({attribute:!1})],b.AssigningTool.prototype,"userData",2),w([q({type:Boolean,reflect:!0})],b.AssigningTool.prototype,"readOnly",2),w([z()],b.AssigningTool.prototype,"_state",2),w([z()],b.AssigningTool.prototype,"_previewImageUrl",2),w([z()],b.AssigningTool.prototype,"_isCompact",2),w([z()],b.AssigningTool.prototype,"_pendingSlot",2),w([z()],b.AssigningTool.prototype,"_drawerDragHidden",2),w([z()],b.AssigningTool.prototype,"_drawerVisible",2),b.AssigningTool=w([Zt("assigning-tool")],b.AssigningTool),Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),b})({});
//# sourceMappingURL=assigning-tool.js.map
