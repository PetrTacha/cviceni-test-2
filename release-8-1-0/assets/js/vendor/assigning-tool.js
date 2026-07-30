var AssigningTool=(function(b){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,q=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),J=new WeakMap;let Q=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(e,t))}return t}toString(){return this.cssText}};const ft=o=>new Q(typeof o=="string"?o:o+"",void 0,W),bt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,r,a)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[a+1],o[0]);return new Q(e,o,W)},vt=(o,t)=>{if(q)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=N.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,o.appendChild(s)}},tt=q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:$t,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:At,getPrototypeOf:St}=Object,y=globalThis,et=y.trustedTypes,Et=et?et.emptyScript:"",kt=y.reactiveElementPolyfillSupport,I=(o,t)=>o,V={toAttribute(o,t){switch(t){case Boolean:o=o?Et:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},F=(o,t)=>!yt(o,t),st={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:F};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&$t(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:a}=xt(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:r,set(i){const n=r?.call(this);a?.call(this,i),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,s=[...wt(e),...At(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(tt(r))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=s.getPropertyOptions(r),i=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:V;this._$Em=r;const n=i.fromAttribute(e,a.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,s,r=!1,a){if(t!==void 0){const i=this.constructor;if(r===!1&&(a=this[t]),s??(s=i.getPropertyOptions(t)),!((s.hasChanged??F)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:a},i){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??e??this[t]),a!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,a]of s){const{wrapped:i}=a,n=this[r];i!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,a,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[I("elementProperties")]=new Map,E[I("finalized")]=new Map,kt?.({ReactiveElement:E}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,rt=o=>o,B=O.trustedTypes,at=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,ot="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+$,Tt=`<${it}>`,x=document,U=()=>x.createComment(""),D=o=>o===null||typeof o!="object"&&typeof o!="function",Y=Array.isArray,Ct=o=>Y(o)||typeof o?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,lt=/>/g,w=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ct=/"/g,ht=/^(?:script|style|textarea|title)$/i,Pt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),_=Pt(1),k=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),gt=new WeakMap,A=x.createTreeWalker(x,129);function pt(o,t){if(!Y(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}const It=(o,t)=>{const e=o.length-1,s=[];let r,a=t===2?"<svg>":t===3?"<math>":"",i=z;for(let n=0;n<e;n++){const l=o[n];let c,d,h=-1,g=0;for(;g<l.length&&(i.lastIndex=g,d=i.exec(l),d!==null);)g=i.lastIndex,i===z?d[1]==="!--"?i=nt:d[1]!==void 0?i=lt:d[2]!==void 0?(ht.test(d[2])&&(r=RegExp("</"+d[2],"g")),i=w):d[3]!==void 0&&(i=w):i===w?d[0]===">"?(i=r??z,h=-1):d[1]===void 0?h=-2:(h=i.lastIndex-d[2].length,c=d[1],i=d[3]===void 0?w:d[3]==='"'?ct:dt):i===ct||i===dt?i=w:i===nt||i===lt?i=z:(i=w,r=void 0);const m=i===w&&o[n+1].startsWith("/>")?" ":"";a+=i===z?l+Tt:h>=0?(s.push(c),l.slice(0,h)+ot+l.slice(h)+$+m):l+$+(h===-2?n:m)}return[pt(o,a+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let a=0,i=0;const n=t.length-1,l=this.parts,[c,d]=It(t,e);if(this.el=M.createElement(c,s),A.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=A.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(ot)){const g=d[i++],m=r.getAttribute(h).split($),p=/([.?@])?(.*)/.exec(g);l.push({type:1,index:a,name:p[2],strings:m,ctor:p[1]==="."?Ut:p[1]==="?"?Dt:p[1]==="@"?zt:K}),r.removeAttribute(h)}else h.startsWith($)&&(l.push({type:6,index:a}),r.removeAttribute(h));if(ht.test(r.tagName)){const h=r.textContent.split($),g=h.length-1;if(g>0){r.textContent=B?B.emptyScript:"";for(let m=0;m<g;m++)r.append(h[m],U()),A.nextNode(),l.push({type:2,index:++a});r.append(h[g],U())}}}else if(r.nodeType===8)if(r.data===it)l.push({type:2,index:a});else{let h=-1;for(;(h=r.data.indexOf($,h+1))!==-1;)l.push({type:7,index:a}),h+=$.length-1}a++}}static createElement(t,e){const s=x.createElement("template");return s.innerHTML=t,s}}function T(o,t,e=o,s){if(t===k)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl;const a=D(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),a===void 0?r=void 0:(r=new a(o),r._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=T(o,r._$AS(o,t.values),r,s)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??x).importNode(e,!0);A.currentNode=r;let a=A.nextNode(),i=0,n=0,l=s[0];for(;l!==void 0;){if(i===l.index){let c;l.type===2?c=new j(a,a.nextSibling,this,t):l.type===1?c=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(c=new Mt(a,this,t)),this._$AV.push(c),l=s[++n]}i!==l?.index&&(a=A.nextNode(),i++)}return A.currentNode=x,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class j{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),D(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const a=new Ot(r,this),i=a.u(this.options);a.p(e),this.T(i),this._$AH=a}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new M(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const a of t)r===e.length?e.push(s=new j(this.O(U()),this.O(U()),this,this.options)):s=e[r],s._$AI(a),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=rt(t).nextSibling;rt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,a){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,r){const a=this.strings;let i=!1;if(a===void 0)t=T(this,t,e,0),i=!D(t)||t!==this._$AH&&t!==k,i&&(this._$AH=t);else{const n=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=T(this,n[s+l],e,l),c===k&&(c=this._$AH[l]),i||(i=!D(c)||c!==this._$AH[l]),c===u?t=u:t!==u&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Dt extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class zt extends K{constructor(t,e,s,r,a){super(t,e,s,r,a),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??u)===k)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const jt=O.litHtmlPolyfillSupport;jt?.(M,j),(O.litHtmlVersions??(O.litHtmlVersions=[])).push("3.3.2");const Ht=(o,t,e)=>{const s=e?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const a=e?.renderBefore??null;s._$litPart$=r=new j(t.insertBefore(U(),a),a,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis;class L extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}}L._$litElement$=!0,L.finalized=!0,H.litElementHydrateSupport?.({LitElement:L});const Lt=H.litElementPolyfillSupport;Lt?.({LitElement:L}),(H.litElementVersions??(H.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:F},Vt=(o=Nt,t,e)=>{const{kind:s,metadata:r}=e;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),a.set(e.name,o),s==="accessor"){const{name:i}=e;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,l,o,!0,n)},init(n){return n!==void 0&&this.C(i,void 0,o,n),n}}}if(s==="setter"){const{name:i}=e;return function(n){const l=this[i];t.call(this,n),this.requestUpdate(i,l,o,!0,n)}}throw Error("Unsupported decorator location: "+s)};function R(o){return(t,e)=>typeof e=="object"?Vt(o,t,e):((s,r,a)=>{const i=r.hasOwnProperty(a);return r.constructor.createProperty(a,s),i?Object.getOwnPropertyDescriptor(r,a):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(o){return R({...o,state:!0,attribute:!1})}const Bt=bt`
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

    display: block;
    box-sizing: border-box;
    font-family: var(--at-font-family);
    color: var(--at-color-text);
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
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--at-color-panel-soft);
    font-size: 0.68rem;
    font-weight: 700;
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
    inset: 0;
    z-index: 2147483647;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(0.9rem, 2.5vw, 2rem);
    width: 100vw;
    max-width: none;
    height: 100dvh;
    max-height: none;
    margin: 0;
    border: 0;
    background: transparent;
  }

  .at__modal-overlay::backdrop {
    background: rgba(22, 18, 13, 0.72);
    backdrop-filter: blur(2px);
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
`,_t="assigning";function Kt(o,t){for(const e of o){const s=e.configuration.tags.find(r=>r.id===t);if(s)return s.value}return t}function X(o){return/^data:image\//i.test(o)||/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(o)}function qt(o){const{value:t,type:e,onOpenImagePreview:s}=o;return e==="image"?_`
      <div class="at-static-item at-static-item--image">
        <img src=${t} alt="" loading="lazy" />
        <button
          type="button"
          class="at-static-item__zoom-btn"
          aria-label="Zvětšit obrázek"
          @click=${()=>s(t)}
        >
          <span class="at-static-item__zoom-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </button>
      </div>
    `:_`<span class="at-static-item at-static-item--tag">${t}</span>`}function Wt(o){const{dependencyData:t,assignmentId:e,slotId:s,slotType:r,tagId:a,readOnly:i,onSlotClear:n}=o,l=Kt(t,a),c=r==="image"&&X(l);return _`
    <span class="at-slot__value">
      ${c?_`<img class="at-slot__value-image" src=${l} alt="Vybraný obrázek" loading="lazy" />`:l}
      ${i?u:_`<button
            class="at-slot__value-remove-btn"
            aria-label="Odebrat tag"
            @click=${d=>{d.stopPropagation(),n(e,s)}}
          ></button>`}
    </span>
  `}function Ft(o){const{assignmentId:t,slotId:e,slotType:s,isStatic:r,staticItems:a,slotLabel:i,slotKey:n,slotValue:l,dependencyData:c,readOnly:d,onOpenImagePreview:h,onSlotClear:g}=o,m=["at-slot-active",r?"at-slot--static":"",r?"":"at-slot--active"].filter(Boolean).join(" ");if(r)return _`
      <div class=${m} data-slot-key=${n} aria-label=${i}>
        <!-- <div class="at-slot__button at-slot__button--static"> -->
          <div class="at-slot__static-content">
            ${a.length?a.map(v=>qt({value:v,type:s,onOpenImagePreview:h})):_`<span class="at-slot__placeholder">${i}</span>`}
          </div>
        <!-- </div> -->
      </div>
    `;const p=l?Wt({dependencyData:c,assignmentId:t,slotId:e,slotType:s,tagId:l,readOnly:d,onSlotClear:g}):_`<span class="at-slot__placeholder">${i}</span>`;return _`
    <div class=${m} data-slot-key=${n}>
      <div
        class="at-slot__button"
        data-assignment-id=${t}
        data-slot-id=${e}
      >
        ${p}
        ${u}
      </div>
    </div>
  `}function Yt(o){const{assignment:t,state:e,dependencyData:s,readOnly:r,onOpenImagePreview:a,onSlotClear:i}=o;return _`
    <article class="at-card" data-assignment-id=${t.id}>
      ${t.title?_`<div class="at-card__id">${t.title}</div>`:u}
      <div class="at-card__body">
        <!-- <div class="at-card__slot-list"> -->
          ${t.slotDefinitions.map(n=>{const l=`${t.id}::${n.id}`,c=e.slotValues[l],d=n.static?`${n.type==="image"?"Static image":"Static tag"} ${n.id}`:"+ Vyberte položku z nabídky a přetáhněte ji sem ";return Ft({assignmentId:t.id,slotId:n.id,slotType:n.type,isStatic:!!n.static,staticItems:n.items??[],slotLabel:d,slotKey:l,slotValue:c,dependencyData:s,readOnly:r,onOpenImagePreview:a,onSlotClear:i})})}
        <!-- </div> -->
      </div>
    </article>
  `}function Zt(o){const{selectionId:t,tag:e,readOnly:s,isUsed:r,onTagPointerDown:a,onTagPointerMove:i,onTagPointerUp:n,onTagPointerCancel:l}=o,c=["at-selection__tag",X(e.value)?"at-selection__tag--image":"",s?"at-selection__tag--readonly":"",r?"at-selection__tag--used":""].filter(Boolean).join(" ");return _`
    <div
      class=${c}
      data-selection-id=${t}
      .draggable=${!s&&!r}
      @pointerdown=${d=>{!s&&!r&&a(d,t,e.id)}}
      @pointermove=${d=>{!s&&!r&&i(d)}}
      @pointerup=${d=>{!s&&!r&&n(d)}}
      @pointercancel=${d=>{!s&&!r&&l(d)}}
      @dragstart=${d=>{(s||r)&&d.preventDefault()}}
    >
      ${X(e.value)?_`<img class="at-selection__tag-image" src=${e.value} alt="Nabízený obrázek" loading="lazy" />`:e.value}
    </div>
  `}function Xt(o){const{selection:t,readOnly:e,usedTagIds:s,onTagPointerDown:r,onTagPointerMove:a,onTagPointerUp:i,onTagPointerCancel:n}=o,l=t.configuration.mode==="singleUse";return _`
    <section class="at-selection-section">
      <!-- <h3 class="at-selection-section__title">${t.moduleId}</h3> -->
      <div class="at-selection-list">
        ${t.configuration.tags.map(c=>Zt({selectionId:t.moduleId,tag:c,readOnly:e,isUsed:l&&s.has(c.id),onTagPointerDown:r,onTagPointerMove:a,onTagPointerUp:i,onTagPointerCancel:n}))}
      </div>
    </section>
  `}function Gt(o){const{configuration:t,dependencyData:e,state:s,readOnly:r,usedTagIds:a,previewImageUrl:i,onTagPointerDown:n,onTagPointerMove:l,onTagPointerUp:c,onTagPointerCancel:d,onOpenImagePreview:h,onCloseImagePreview:g,onSlotClear:m,onReset:p}=o,C=t.assignments.length,v=t.assignments.filter(f=>{const mt=f.slotDefinitions.filter(G=>!G.static);return mt.length>0&&mt.every(G=>!!s.slotValues[`${f.id}::${G.id}`])}).length,P=C>0&&v===C;return _`
      <div class="at__layout">
        <section class="at__panel-board">
          <div class="at__board">
            ${t.assignments.map(f=>Yt({assignment:f,state:s,dependencyData:e,readOnly:r,onOpenImagePreview:h,onSlotClear:m}))}
          </div>
        </section>

        <section class="at__panel">
          <header class="at__panel-header">
            <p class="at__eyebrow">Výběr</p>
            <!-- <h2 class="at__title">Dependency tags</h2>
            <p class="at__subtitle">Click, hold, drag, and drop to a card slot.</p> -->
            <div class="at__progress-badge ${P?"at__progress-badge--done":""}">
              <span class="at__progress-icon">${P?"✓":v}</span>
              <span class="at__progress-text">${P?"Vše přiřazeno":_`/ ${C}`}</span>
            </div>
            <button
              class="at__reset-btn"
              aria-label="Resetovat výběr"
              ?disabled=${r}
              @click=${p}
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
          </header>

          <div class="at__selections">
            ${e.length?e.map(f=>Xt({selection:f,readOnly:r,usedTagIds:a,onTagPointerDown:n,onTagPointerMove:l,onTagPointerUp:c,onTagPointerCancel:d})):_`<div class="at__empty">No dependency selection data was provided.</div>`}
          </div>
        </section>
      </div>
      ${i?_`
            <dialog
              class="at__modal-overlay"
              aria-label="Detail obrázku"
              @cancel=${f=>{f.preventDefault(),g()}}
              @click=${f=>{f.target===f.currentTarget&&g()}}
            >
              <div class="at__modal" role="dialog" aria-modal="true" aria-label="Detail obrázku">
                <button
                  type="button"
                  class="at__modal-close-btn"
                  aria-label="Zavřít detail obrázku"
                  @click=${g}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <img class="at__modal-image" src=${i} alt="Detail obrázku" loading="lazy" />
              </div>
            </dialog>
          `:u}
  `}var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,S=(o,t,e,s)=>{for(var r=s>1?void 0:s?Qt(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Jt(t,e,r),r};return b.AssigningTool=class extends L{constructor(){super(),this.exportVersion=1,this._dragTargetSlotEl=null,this._dragTargetCardEl=null,this._currentDragTagId=null,this._dragSourceEl=null,this._ghost=null,this._bodyScrollLocked=!1,this._handleWindowKeyDown=t=>{t.key==="Escape"&&this._previewImageUrl&&(t.preventDefault(),this._closeImagePreview())},this.configuration={moduleId:"assigning-local",moduleType:_t,dependencies:[],viewSettings:{},assignments:[]},this.dependencyData=[],this.userData={assignments:[]},this.readOnly=!1,this._state={slotValues:{}},this._previewImageUrl=null}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._handleWindowKeyDown)}disconnectedCallback(){this._setBodyScrollLock(!1),window.removeEventListener("keydown",this._handleWindowKeyDown),super.disconnectedCallback()}_setBodyScrollLock(t){this._bodyScrollLocked!==t&&(this._bodyScrollLocked=t,document.documentElement.style.overflow=t?"hidden":"",document.body.style.overflow=t?"hidden":"",document.body.style.touchAction=t?"none":"")}_syncModalLayer(){const t=this.shadowRoot?.querySelector(".at__modal-overlay");if(!!this._previewImageUrl){t&&!t.open&&t.showModal(),this._setBodyScrollLock(!0);return}t?.open&&t.close(),this._setBodyScrollLock(!1)}_slotKey(t,e){return`${t}::${e}`}_rebuildState(){const t={};for(const e of this.userData.assignments??[])for(const s of e.slots)s.tagId&&(t[this._slotKey(e.id,s.slotId)]=s.tagId);this._state={slotValues:t}}_emitChange(){const t=this.exportModule(),e=this._computeFeedback(t);this.dispatchEvent(new CustomEvent("assigning-tool:change",{bubbles:!0,composed:!0,detail:{exportModule:t,feedback:e}}))}_computeFeedback(t){const e=t.configuration.assignments||[],s=t.userData.assignments||[],r=Array.isArray(t.configuration.feedback)?t.configuration.feedback:[],a=r.length>0;let i=0,n=0;e.forEach(g=>{const m=s.find(p=>p.id===g.id);(g.slotDefinitions||[]).forEach(p=>{if(p.static)return;i+=1;const v=m?.slots?.find(f=>f.slotId===p.id)?.tagId||"",P=Array.isArray(p.spravnaOdpoved)?p.spravnaOdpoved:p.spravnaOdpoved?[p.spravnaOdpoved]:[];v&&(P.length===0||P.includes(v))&&(n+=1)})});const l=e.every(g=>{const m=s.find(p=>p.id===g.id);return(g.slotDefinitions||[]).filter(p=>!p.static).every(p=>!!m?.slots?.find(v=>v.slotId===p.id)?.tagId)}),c=i-n,d=a&&l?this._resolveFeedbackItem(r,c):null,h=r.map(g=>g.color||g.barva).filter(g=>!!g);return{enabled:a,isComplete:l,requiredSlotsCount:i,correctCount:n,wrongCount:c,text:d?.text||null,color:d?.color||d?.barva||null,colors:h}}_resolveFeedbackItem(t,e){if(t.length===0)return null;const s=t.find(r=>{const a=r.condition??r.podminka;return Array.isArray(a)?a.includes(e):a===e});return s||t.find(r=>{const a=r.condition??r.podminka;return Array.isArray(a)?a.includes(0):a===0})||t[t.length-1]}_assignTag(t,e,s){if(this.readOnly)return;const r=this._slotKey(t,e);this._state={slotValues:{...this._state.slotValues,[r]:s}},this.requestUpdate(),this._emitChange()}_clearSlot(t,e){if(this.readOnly)return;const s=this._slotKey(t,e),r={...this._state.slotValues};delete r[s],this._state={slotValues:r},this.requestUpdate(),this._emitChange()}_resetAll(){this.readOnly||(this._state={slotValues:{}},this.requestUpdate(),this._emitChange())}_openImagePreview(t){this._previewImageUrl=t}_closeImagePreview(){this._previewImageUrl=null}_isTagSingleUseBlocked(t,e){return this.dependencyData.find(r=>r.moduleId===t)?.configuration.mode!=="singleUse"?!1:Object.values(this._state.slotValues).includes(e)}_handleTagPointerDown(t,e,s){if(this.readOnly)return;if(this._isTagSingleUseBlocked(e,s)){t.preventDefault();return}t.preventDefault();const r=t.currentTarget;r.setPointerCapture(t.pointerId),this._currentDragTagId=s,this._dragSourceEl=r,r.classList.add("at-selection__tag--dragging");const a=document.createElement("div"),i=r.querySelector("img");if(i){const n=i.cloneNode(!0);n.style.display="block",n.style.width="96px",n.style.maxHeight="64px",n.style.objectFit="cover",n.style.borderRadius="8px",a.appendChild(n)}else a.textContent=r.textContent;a.style.cssText=["position:fixed","z-index:9999","pointer-events:none","display:flex","align-items:center",`padding:${getComputedStyle(r).padding}`,`font:${getComputedStyle(r).font}`,`border-radius:${getComputedStyle(r).borderRadius}`,"border:1px solid rgba(180,95,6,0.55)","background:#fff","color:#1d1a17","box-shadow:0 8px 24px rgba(45,35,22,0.25)","max-width:15rem","white-space:normal","word-break:break-word","transform:translate(-50%,-50%)"].join(";"),document.body.appendChild(a),this._ghost=a,this._moveGhost(t.clientX,t.clientY)}_handleTagPointerMove(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId||!this._ghost)return;t.preventDefault(),this._moveGhost(t.clientX,t.clientY);const e=this._findDropSlotEl(t.clientX,t.clientY),s=e?.dataset.assignmentId??null,r=e?.dataset.slotId?e:null,a=s?this._findCardElForAssignmentId(s):null;r!==this._dragTargetSlotEl&&(this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetSlotEl=r,r?.classList.add("at-slot--drop-target")),a!==this._dragTargetCardEl&&(this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._dragTargetCardEl=a,a?.classList.add("at-card--drop-target"))}_handleTagPointerUp(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId)return;const e=this._currentDragTagId,s=this._findDropSlotEl(t.clientX,t.clientY);if(this._cleanupPointerDrag(),!s?.dataset.assignmentId)return;const r=s.dataset.assignmentId;if(s.dataset.slotId)this._assignTag(r,s.dataset.slotId,e);else{const a=this.configuration.assignments.find(i=>i.id===r);if(a){const i=a.slotDefinitions.find(n=>n.static?!1:!this._state.slotValues[this._slotKey(r,n.id)]);i&&this._assignTag(r,i.id,e)}}}_handleTagPointerCancel(){this._cleanupPointerDrag()}_moveGhost(t,e){this._ghost&&(this._ghost.style.left=`${t}px`,this._ghost.style.top=`${e}px`)}_findDropSlotEl(t,e){if(!this.shadowRoot)return null;const s=this.shadowRoot.elementsFromPoint(t,e);let r=null;for(const a of s)if(a instanceof HTMLElement&&a.dataset.assignmentId){if(a.dataset.slotId)return a;r||(r=a)}return r}_findCardElForAssignmentId(t){return this.shadowRoot?.querySelector(`article[data-assignment-id="${t}"]`)??null}_cleanupPointerDrag(){this._dragSourceEl?.classList.remove("at-selection__tag--dragging"),this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._ghost?.remove(),this._ghost=null,this._currentDragTagId=null,this._dragSourceEl=null,this._dragTargetSlotEl=null,this._dragTargetCardEl=null}_serializeUserData(){return{assignments:this.configuration.assignments.map(e=>({id:e.id,slots:e.slotDefinitions.filter(s=>!s.static).map(s=>{const r=this._slotKey(e.id,s.id),a=this._state.slotValues[r];return{slotId:s.id,tagId:a??""}})}))}}exportModule(){const t=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:t,moduleType:_t,configuration:{...this.configuration},userData:this._serializeUserData(),updatedAt:new Date().toISOString()}}willUpdate(t){(t.has("configuration")||t.has("userData"))&&this._rebuildState()}updated(t){(t.has("configuration")||t.has("userData"))&&this._emitChange(),t.has("_previewImageUrl")&&this._syncModalLayer()}render(){const t=new Set(Object.values(this._state.slotValues));return Gt({configuration:this.configuration,dependencyData:this.dependencyData,state:this._state,readOnly:this.readOnly,usedTagIds:t,previewImageUrl:this._previewImageUrl,onTagPointerDown:(e,s,r)=>this._handleTagPointerDown(e,s,r),onTagPointerMove:e=>this._handleTagPointerMove(e),onTagPointerUp:e=>this._handleTagPointerUp(e),onTagPointerCancel:()=>this._handleTagPointerCancel(),onOpenImagePreview:e=>this._openImagePreview(e),onCloseImagePreview:()=>this._closeImagePreview(),onSlotClear:(e,s)=>this._clearSlot(e,s),onReset:()=>this._resetAll()})}},b.AssigningTool.styles=Bt,S([R({attribute:!1})],b.AssigningTool.prototype,"configuration",2),S([R({attribute:!1})],b.AssigningTool.prototype,"dependencyData",2),S([R({attribute:!1})],b.AssigningTool.prototype,"userData",2),S([R({type:Boolean,reflect:!0})],b.AssigningTool.prototype,"readOnly",2),S([ut()],b.AssigningTool.prototype,"_state",2),S([ut()],b.AssigningTool.prototype,"_previewImageUrl",2),b.AssigningTool=S([Rt("assigning-tool")],b.AssigningTool),Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),b})({});
//# sourceMappingURL=assigning-tool.js.map
