var SourceWorkTool=(function(d){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,ee=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),ne=new WeakMap;let le=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ee&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ne.set(t,e))}return e}toString(){return this.cssText}};const ze=i=>new le(typeof i=="string"?i:i+"",void 0,te),A=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new le(t,i,te)},Pe=(i,e)=>{if(ee)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=F.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)}},ce=ee?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return ze(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ue,defineProperty:Re,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:He,getOwnPropertySymbols:Le,getPrototypeOf:je}=Object,$=globalThis,he=$.trustedTypes,We=he?he.emptyScript:"",Ve=$.reactiveElementPolyfillSupport,N=(i,e)=>i,K={toAttribute(i,e){switch(e){case Boolean:i=i?We:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},oe=(i,e)=>!Ue(i,e),de={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let I=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Re(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:r}=Ne(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const l=s?.call(this);r?.call(this,a),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,o=[...He(t),...Le(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(ce(s))}else e!==void 0&&t.push(ce(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:K).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:K;this._$Em=s;const l=a.fromAttribute(t,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,o,s=!1,r){if(e!==void 0){const a=this.constructor;if(s===!1&&(r=this[e]),o??(o=a.getPropertyOptions(e)),!((o.hasChanged??oe)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:r},a){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o){const{wrapped:a}=r,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[N("elementProperties")]=new Map,I[N("finalized")]=new Map,Ve?.({ReactiveElement:I}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,ue=i=>i,Y=H.trustedTypes,ge=Y?Y.createPolicy("lit-html",{createHTML:i=>i}):void 0,pe="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+S,Be=`<${fe}>`,M=document,L=()=>M.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",se=Array.isArray,qe=i=>se(i)||typeof i?.[Symbol.iterator]=="function",ie=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,be=/>/g,D=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,_e=/"/g,ve=/^(?:script|style|textarea|title)$/i,ye=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=ye(1),w=ye(2),z=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),xe=new WeakMap,C=M.createTreeWalker(M,129);function ke(i,e){if(!se(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}const Fe=(i,e)=>{const t=i.length-1,o=[];let s,r=e===2?"<svg>":e===3?"<math>":"",a=W;for(let l=0;l<t;l++){const n=i[l];let h,c,u=-1,m=0;for(;m<n.length&&(a.lastIndex=m,c=a.exec(n),c!==null);)m=a.lastIndex,a===W?c[1]==="!--"?a=me:c[1]!==void 0?a=be:c[2]!==void 0?(ve.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=D):c[3]!==void 0&&(a=D):a===D?c[0]===">"?(a=s??W,u=-1):c[1]===void 0?u=-2:(u=a.lastIndex-c[2].length,h=c[1],a=c[3]===void 0?D:c[3]==='"'?_e:we):a===_e||a===we?a=D:a===me||a===be?a=W:(a=D,s=void 0);const k=a===D&&i[l+1].startsWith("/>")?" ":"";r+=a===W?n+Be:u>=0?(o.push(h),n.slice(0,u)+pe+n.slice(u)+S+k):n+S+(u===-2?l:k)}return[ke(i,r+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class V{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,a=0;const l=e.length-1,n=this.parts,[h,c]=Fe(e,t);if(this.el=V.createElement(h,o),C.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=C.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(pe)){const m=c[a++],k=s.getAttribute(u).split(S),y=/([.?@])?(.*)/.exec(m);n.push({type:1,index:r,name:y[2],strings:k,ctor:y[1]==="."?Ye:y[1]==="?"?Ze:y[1]==="@"?Je:Z}),s.removeAttribute(u)}else u.startsWith(S)&&(n.push({type:6,index:r}),s.removeAttribute(u));if(ve.test(s.tagName)){const u=s.textContent.split(S),m=u.length-1;if(m>0){s.textContent=Y?Y.emptyScript:"";for(let k=0;k<m;k++)s.append(u[k],L()),C.nextNode(),n.push({type:2,index:++r});s.append(u[m],L())}}}else if(s.nodeType===8)if(s.data===fe)n.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(S,u+1))!==-1;)n.push({type:7,index:r}),u+=S.length-1}r++}}static createElement(e,t){const o=M.createElement("template");return o.innerHTML=e,o}}function P(i,e,t=i,o){if(e===z)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl;const r=j(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=P(i,s._$AS(i,e.values),s,o)),e}class Ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??M).importNode(t,!0);C.currentNode=s;let r=C.nextNode(),a=0,l=0,n=o[0];for(;n!==void 0;){if(a===n.index){let h;n.type===2?h=new B(r,r.nextSibling,this,e):n.type===1?h=new n.ctor(r,n.name,n.strings,this,e):n.type===6&&(h=new Xe(r,this,e)),this._$AV.push(h),n=o[++l]}a!==n?.index&&(r=C.nextNode(),a++)}return C.currentNode=M,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class B{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),j(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=V.createElement(ke(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{const r=new Ke(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new V(e)),t}k(e){se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const r of e)s===t.length?t.push(o=new B(this.O(L()),this.O(L()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const o=ue(e).nextSibling;ue(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}_$AI(e,t=this,o,s){const r=this.strings;let a=!1;if(r===void 0)e=P(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==z,a&&(this._$AH=e);else{const l=e;let n,h;for(e=r[0],n=0;n<r.length-1;n++)h=P(this,l[o+n],t,n),h===z&&(h=this._$AH[n]),a||(a=!j(h)||h!==this._$AH[n]),h===g?e=g:e!==g&&(e+=(h??"")+r[n+1]),this._$AH[n]=h}a&&!s&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ye extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ze extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Je extends Z{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??g)===z)return;const o=this._$AH,s=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==g&&(o===g||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Xe{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const Ge=H.litHtmlPolyfillSupport;Ge?.(V,B),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.3.2");const Qe=(i,e,t)=>{const o=t?.renderBefore??e;let s=o._$litPart$;if(s===void 0){const r=t?.renderBefore??null;o._$litPart$=s=new B(e.insertBefore(L(),r),r,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis;let T=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};T._$litElement$=!0,T.finalized=!0,q.litElementHydrateSupport?.({LitElement:T});const et=q.litElementPolyfillSupport;et?.({LitElement:T}),(q.litElementVersions??(q.litElementVersions=[])).push("4.2.2");const tt=A`
  :host {
    --swt-color-primary: #c0392b;
    --swt-color-primary-hover: #e74c3c;
    --swt-color-pin-fill: #c0392b;
    --swt-color-pin-active: #e74c3c;
    --swt-font-family: inherit;
    --swt-border-radius: 4px;
    --swt-detail-bg: #ffffff;
    --swt-pin-size: 36px;
    --swt-pin-shadow: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.35));
    --swt-pin-active-shadow: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.45));

    display: block;
    font-family: var(--swt-font-family);
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .swt {
    position: relative;
    /* display: grid;
    grid-template-rows: auto auto auto;
    gap: 1rem; */
  }

  .swt__stage {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
    line-height: 0;
  }

  .swt__bg {
    pointer-events: none;
  }

  .swt__bg-measure {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .swt__pins {
    pointer-events: none;
  }

  .swt__pin {
    cursor: pointer;
    pointer-events: all;
    color: var(--swt-color-pin-fill);
    overflow: visible;
    transition: filter 0.15s ease;
    filter: var(--swt-pin-shadow);
  }

  .swt__pin--view-only {
    cursor: default;
  }

  .swt__pin-pulse {
    transform-box: fill-box;
    transform-origin: 50% 50%;
    transition: transform 0.15s ease;
  }

  .swt__pin:hover .swt__pin-pulse,
  .swt__pin--active .swt__pin-pulse {
    transform: scale(1.2);
  }

  .swt__pin-hit {
    fill: transparent;
  }

  .swt__pin:hover,
  .swt__pin--active {
    color: var(--swt-color-pin-active);
    filter: var(--swt-pin-active-shadow);
  }

  @keyframes swt-pin-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.75;
    }
  }

  .swt__pin:focus-visible .swt__pin-hit {
    fill: rgba(192, 57, 43, 0.2);
    stroke: var(--swt-color-primary);
    stroke-width: 3;
  }

  .swt__detail {
    min-height: 6rem;
    border: 1px solid #ddd;
    border-radius: var(--swt-border-radius);
    padding: 1rem;
    background: var(--swt-detail-bg);
    transition: background-color 0.2s ease;
  }

  .swt__placeholder {
    margin: 0;
    color: #888;
    font-style: italic;
    line-height: 1.5;
  }

  /* ── Tag label box ── */
  :host {
    --swt-tag-bg-top: #fdf2f2; /* matches --swt-color-bg-light */
    --swt-tag-bg-bottom: rgba(
      93,
      55,
      54,
      0.75
    ); /* matches --swt-color-bg-medium-dark */
    --swt-tag-border: #a47b79; /* matches --swt-color-bg-dark */
    --swt-tag-divider: #a47b79;
    --swt-tag-text-selected: #1c1312; /* matches --swt-color-bg-very-dark */
    --swt-tag-text-previous: rgba(
      252,
      228,
      226,
      0.85
    ); /* matches --swt-color-text-light */
    --swt-tag-font-size: 12px;
    --swt-tag-font-size-prev: 11px;
    --swt-tag-notch-radius: 14px;
  }

  .swt__tag-box {
    width: 104px;
    height: 54px;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--swt-tag-border);
    border-radius: 14px;
    overflow: hidden;
    font-family: var(--swt-font-family);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);

    /* True transparent cutout on the left side (concave half-circle). */
    clip-path: path(
      'M 14 0 H 90 A 14 14 0 0 1 104 14 V 40 A 14 14 0 0 1 90 54 H 14 A 14 14 0 0 1 0 40 V 54 A 27 27 0 0 0 0 0 V 14 A 14 14 0 0 1 14 0 Z'
    );
  }

  .swt__tag-box--left {
    /* Mirror the notch so it stays attached to the pin when box is on the left. */
    clip-path: path(
      'M 90 0 H 14 A 14 14 0 0 0 0 14 V 40 A 14 14 0 0 0 14 54 H 90 A 14 14 0 0 0 104 40 V 54 A 27 27 0 0 1 104 0 V 14 A 14 14 0 0 0 90 0 Z'
    );
  }

  .swt__tag-top,
  .swt__tag-bottom {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 8px 0 32px;
    overflow: hidden;
    line-height: 1.2;
  }

  .swt__tag-box--left .swt__tag-top,
  .swt__tag-box--left .swt__tag-bottom {
    padding: 0 32px 0 8px;
  }

  .swt__tag-top span,
  .swt__tag-bottom span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 0;
  }

  .swt__tag-top {
    background: var(--swt-tag-bg-top);
    color: var(--swt-tag-text-selected);
    font-size: var(--swt-tag-font-size);
    font-weight: 500;
    border-bottom: 1px solid var(--swt-tag-divider);
  }

  .swt__tag-box--top-only .swt__tag-top {
    border-bottom: 0;
  }

  .swt__tag-bottom {
    background: var(--swt-tag-bg-bottom);
    color: var(--swt-tag-text-previous);
    font-size: var(--swt-tag-font-size-prev);
    font-style: italic;
  }

  .swt__content {
    line-height: 1.6;
  }

  .swt__figure {
    margin: 0;
  }

  .swt__img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: var(--swt-border-radius);
  }

  .swt__caption {
    margin-top: 0.5rem;
    font-size: 0.875em;
    color: #555;
    line-height: 1.4;
  }

  .swt__legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .swt__legend-item {
    padding: 0.3rem 0.75rem;
    border: 1px solid var(--swt-color-region-stroke);
    border-radius: var(--swt-border-radius);
    cursor: pointer;
    font-size: 0.875em;
    background: transparent;
    transition:
      background-color 0.15s ease,
      border-color 0.15s ease;
    user-select: none;
    line-height: 1.4;
  }

  .swt__legend-item:hover {
    background-color: var(--swt-color-region-fill);
  }

  .swt__legend-item:focus-visible {
    outline: 3px solid var(--swt-color-primary);
    outline-offset: 2px;
  }

  .swt__legend-item--active {
    background-color: var(--swt-color-region-active);
    border-color: var(--swt-color-primary);
    font-weight: 600;
  }
`,ot=":";function J(i,...e){if(!i)throw new Error("buildCompositeKey: moduleId must be a non-empty string");return[i,...e].join(ot)}const U={Swt:"swt",Selection:"selection"},st={SourceDetail:"swt:sourceDetail"},X={Reusable:"reusable",SingleUse:"singleUse"};class it{constructor(e={}){this._locked=!1,this._frozen=[],this._blockOutside=t=>{const o=this._options.allow?.();if(o){const s=Array.isArray(o)?o:[o],r=t.composedPath();if(s.some(a=>a&&r.includes(a)))return}t.preventDefault()},this._options=e}get locked(){return this._locked}lock(){this.set(!0)}unlock(){this.set(!1)}set(e){if(typeof document>"u"||this._locked===e)return;this._locked=e,document.documentElement.style.overflow=e?"hidden":"",document.body.style.overflow=e?"hidden":"",document.body.style.touchAction=e?"none":"",e?this._freezeAncestors():this._thawAncestors();const t={capture:!0,passive:!1};e?(window.addEventListener("wheel",this._blockOutside,t),window.addEventListener("touchmove",this._blockOutside,t)):(window.removeEventListener("wheel",this._blockOutside,t),window.removeEventListener("touchmove",this._blockOutside,t))}_freezeAncestors(){let e=this._options.from?.()??null;for(;e&&e!==document.body;){const t=getComputedStyle(e);if(/(auto|scroll)/.test(t.overflowY)||/(auto|scroll)/.test(t.overflowX)){const o=e;this._frozen.push({el:o,overflow:o.style.overflow,touchAction:o.style.touchAction}),o.style.overflow="hidden",o.style.touchAction="none"}e=e.parentElement}}_thawAncestors(){for(const{el:e,overflow:t,touchAction:o}of this._frozen)e.style.overflow=t,e.style.touchAction=o;this._frozen=[]}}const rt=A`
  :host {
    /* $color-primary */
    --hl-color-primary: #5352a6;
    /* $color-secondary */
    --hl-color-secondary: #fce4e3;

    /* $bg-color-1 in src/scss/cviceni/_header.scss — the exercise's own header band. */
    --hl-color-bg-light: #fdf2f2;
    /* $color-bg--3 = $color-secondary darkened 38% and desaturated 62% = hsl(2, 19%, 56%).
       A MID tone, not a dark one: dark text on it reaches 4.9:1, light text only 3.4:1. */
    --hl-color-bg-dark: #a47b79;
    /* $color-bg--4 = hsl(2, 19%, 29%), one step further down the same ladder. For panels
       nested on --hl-color-bg-dark, which would otherwise merge into the surface. */
    --hl-color-bg-darker: #583d3c;
    --hl-color-bg-very-dark: #1c1312;

    /* $color-text */
    --hl-color-text: #1b1313;

    /* .button-ok (the exercise feedback button) in src/scss/base/_buttons.scss, so a
       confirm action inside a module reads the same as one outside it. */
    --hl-color-confirm: #00aa58;
    --hl-color-confirm-hover: #00914b;

    --hl-color-shadow: rgba(28, 19, 18, 0.5);
    --hl-font-family: 'Lato', Helvetica, Arial, sans-serif;
  }
`,at="(max-width: 720px)",nt=A`
  :host {
    --hl-sheet-max-h: 95dvh;
    --hl-sheet-radius: 18px;
    --hl-sheet-duration: 260ms;
    --hl-sheet-easing: cubic-bezier(0.22, 0.61, 0.36, 1);
    --hl-sheet-touch-target: 44px;

    /* The floor is mostly nominal: .hl-sheet__footer is min-height, so the button plus its
       padding and the safe-area inset (~48px) already set the practical minimum. */
    --hl-sheet-footer-h: clamp(38px, calc(var(--hl-sheet-max-h) * 0.1), 70px);
    --hl-sheet-image-h: clamp(120px, calc(var(--hl-sheet-max-h) * 0.33), 360px);
    /* inherited across the shadow boundary into nested tag pickers */
    --hl-sheet-selected-min-h: calc(var(--hl-sheet-max-h) * 0.1);

    /* The sheet surface is the exercise's own $color-bg--3, so the sheet sits in the exercise
       palette rather than introducing a new one. Text on it stays dark. */
    --hl-sheet-surface: var(--hl-color-bg-dark, #a47b79);
    /* Panels nested ON the surface take one step further down the same ladder ($color-bg--4),
       or they merge into the surface and their labels drop to ~3:1. */
    --hl-sheet-panel: var(--hl-color-bg-darker, #583d3c);
    /* The surface colour with the alpha zeroed, for the scroll fades in .hl-sheet__body.
       It may NOT be the 'transparent' keyword: Safari resolves that to transparent BLACK,
       which turns the fade grey. Keep in sync with --hl-sheet-surface. */
    --hl-sheet-surface-fade: hsla(2, 19%, 56%, 0);
  }
`,lt=A`
  /* ── Surface ──────────────────────────────────────────────────────────────
     Anchored to the bottom edge; the gap left above it is the real backdrop.
     'inset'/'margin' matter only when the sheet IS the <dialog> (the UA stylesheet centres
     dialogs with margin:auto — that must go); on a statically positioned <aside> inside a
     flex overlay they are inert, so both shapes can share one rule. */
  :host([compact]) .hl-sheet {
    box-sizing: border-box;
    margin: 0;
    inset: auto 0 0 0;
    width: 100%;
    max-width: none;
    /* Fixed, not content-driven: the sheet always occupies --hl-sheet-max-h, so the
       footer/image proportions stay stable and a short body does not produce a stubby sheet. */
    height: var(--hl-sheet-max-h);
    max-height: var(--hl-sheet-max-h);
    border: none;
    border-radius: var(--hl-sheet-radius) var(--hl-sheet-radius) 0 0;
    /* so the rounded corners actually clip the header and footer backgrounds */
    overflow: hidden;
    padding: 0;
    background: var(--hl-sheet-surface);
    color: var(--hl-color-text, #1b1313);
    font-family: var(--hl-font-family, 'Lato', Helvetica, Arial, sans-serif);
    box-shadow: 0 -8px 32px var(--hl-color-shadow, rgba(28, 19, 18, 0.5));
  }

  /* 'display' may only be set on an OPEN dialog: a bare '.hl-sheet { display: flex }' is an
     author rule and would beat the UA's 'dialog:not([open]) { display: none }', leaving closed
     dialogs visible. A non-dialog sheet has no such rule and can take it unconditionally.
     Flex (not the plain block box) is what lets .hl-sheet__inner shrink under the sheet's
     max-height: against a height:auto parent, 'height: 100%' never resolves, so the inner grid
     would overflow instead of scrolling. */
  :host([compact]) .hl-sheet:not(dialog),
  :host([compact]) dialog.hl-sheet[open] {
    display: flex;
    flex-direction: column;
  }

  /* Slide-up. Applied by the tool (as 'animation' or as a 'transform' transition) — only the
     keyframes live here, so both tools travel the same distance on the same curve. */
  @keyframes hl-sheet-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  :host([compact]) .hl-sheet__inner {
    flex: 1 1 auto;
    min-height: 0;
    height: auto;
    padding: 0;
    display: grid;
    /* header | scroller | footer — .hl-sheet__body is the sheet's only scroller */
    grid-template-rows: auto minmax(0, 1fr) auto;
  }

  /* ── Header band ──────────────────────────────────────────────────────────
     Mirrors the exercise's own #header (src/scss/cviceni/_header.scss). A light band is also
     the only way the heading gets real contrast — nothing light reaches AA on the surface. */
  :host([compact]) .hl-sheet__header {
    margin: 0;
    box-sizing: border-box;
    /* has to hold the --hl-sheet-touch-target close button comfortably, hence min-height
       rather than a purely content-driven one */
    min-height: 56px;
    /* Vertical padding only — the horizontal 0.9rem keeps the heading off the edges.
       No env(safe-area-inset-top): the sheet does not touch the top edge. */
    padding: 0.7rem 0.9rem 0.6rem;
    display: flex;
    /* center, not flex-start: the close button is taller than a one-line heading */
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    background: var(--hl-color-bg-light, #fdf2f2);
  }

  /* Optional thumbnail showing WHAT is being worked on, for tools whose sheet does not carry
     the image in its body. */
  :host([compact]) .hl-sheet__media {
    display: block;
    flex: 0 0 auto;
    width: 52px;
    height: 52px;
    object-fit: cover;
    border-radius: 12px;
    /* A light image has no edge of its own against the light band — a soft halo is the
       exercise's idiom for this ($box-shadow in src/scss/variables/_variables.scss). */
    box-shadow: 0 0.2rem 0.5rem rgba(27, 19, 19, 0.35);
  }

  /* Groups heading + subtitle so the close button stays pinned to the far edge. */
  :host([compact]) .hl-sheet__header-text {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 0;
    /* takes the slack, so the × does not drift towards a short heading */
    flex: 1 1 auto;
  }

  :host([compact]) .hl-sheet__heading {
    margin: 0;
    min-width: 0;
    font-size: clamp(1rem, 4.2vw, 1.3rem);
    line-height: 1.2;
    font-weight: 600;
    /* Dark, not the rose --hl-color-bg-dark the desktop modal uses for its heading: on the
       light band that tone reaches only 3.25:1, which passes for a 2rem desktop title (large
       text) but not for this one, which clamps down to 1rem. */
    color: var(--hl-color-text, #1b1313);
    font-family: var(--hl-font-family, 'Lato', Helvetica, Arial, sans-serif);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  :host([compact]) .hl-sheet__subtitle {
    margin: 0;
    min-width: 0;
    font-size: 0.8rem;
    line-height: 1.25;
    font-weight: 700;
    color: var(--hl-color-bg-darker, #583d3c);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  /* ── Close button — an outlined circle with a CSS-drawn × ── */
  :host([compact]) .hl-sheet__close {
    /* must stay positioned: the ::before/::after strokes drawing the × are absolute and
       would otherwise resolve against the nearest positioned ancestor */
    position: relative;
    /* A tool's own desktop chrome may pin this button into a corner (source-work-tool parks it
       absolutely at top/right of the modal). Those offsets are NOT overridden by 'position'
       alone — on the relatively positioned button here they would simply shift it out of the
       header band. The sheet therefore owns the whole box: reset the offsets and the margin
       rather than trusting every host to leave them alone. */
    inset: auto;
    margin: 0;
    flex: 0 0 auto;
    box-sizing: border-box;
    width: var(--hl-sheet-touch-target);
    height: var(--hl-sheet-touch-target);
    padding: 0;
    /* darker than the surface, which is too faint against the light header band */
    border: 2px solid var(--hl-color-bg-dark, #a47b79);
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    touch-action: manipulation;
  }

  :host([compact]) .hl-sheet__close::before,
  :host([compact]) .hl-sheet__close::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    background: var(--hl-color-bg-dark, #a47b79);
    top: 50%;
    left: 50%;
    transform-origin: center;
  }

  :host([compact]) .hl-sheet__close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  :host([compact]) .hl-sheet__close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  /* Fill with the outline colour and flip the × light. :active as well, for touch devices
     that have no hover state. */
  :host([compact]) .hl-sheet__close:hover,
  :host([compact]) .hl-sheet__close:active {
    background: var(--hl-color-bg-dark, #a47b79);
  }

  :host([compact]) .hl-sheet__close:hover::before,
  :host([compact]) .hl-sheet__close:hover::after,
  :host([compact]) .hl-sheet__close:active::before,
  :host([compact]) .hl-sheet__close:active::after {
    background: var(--hl-color-bg-light, #fdf2f2);
  }

  :host([compact]) .hl-sheet__close:focus-visible {
    outline: 3px solid var(--hl-color-bg-very-dark, #1c1312);
    outline-offset: 2px;
  }

  /* ── Body: the sheet's single scroller ────────────────────────────────────
     Everything inside scrolls together while the header and footer stay put. Nothing nested
     may scroll on its own, or the two gestures fight each other. */
  :host([compact]) .hl-sheet__body {
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    /* ScrollLock sets body { touch-action: none } while the sheet is open, so the scroller
       needs an explicit value or it cannot be panned with a finger. */
    touch-action: pan-y;
    scrollbar-width: thin;
    scrollbar-color: var(--hl-color-bg-very-dark, #1c1312) transparent;

    /* Scroll affordance: the two "local" gradients ride along with the content and uncover the
       two "scroll" shadows only while there is more to see — the top shadow appears once
       scrolled away from the start, the bottom one disappears at the end. Pure CSS, no
       scroll listener. See --hl-sheet-surface-fade for why the fades cannot use 'transparent'. */
    background-color: var(--hl-sheet-surface);
    background-image:
      linear-gradient(var(--hl-sheet-surface) 30%, var(--hl-sheet-surface-fade)),
      linear-gradient(var(--hl-sheet-surface-fade), var(--hl-sheet-surface) 70%),
      radial-gradient(
        farthest-side at 50% 0,
        rgba(28, 19, 18, 0.3),
        rgba(28, 19, 18, 0)
      ),
      radial-gradient(
        farthest-side at 50% 100%,
        rgba(28, 19, 18, 0.3),
        rgba(28, 19, 18, 0)
      );
    background-position:
      0 0,
      0 100%,
      0 0,
      0 100%;
    background-size:
      100% 28px,
      100% 28px,
      100% 12px,
      100% 12px;
    background-repeat: no-repeat;
    background-attachment: local, local, scroll, scroll;
  }

  :host([compact]) .hl-sheet__body::-webkit-scrollbar {
    width: 6px;
  }

  :host([compact]) .hl-sheet__body::-webkit-scrollbar-track {
    background: transparent;
  }

  :host([compact]) .hl-sheet__body::-webkit-scrollbar-thumb {
    background: var(--hl-color-bg-very-dark, #1c1312);
    border-radius: 999px;
  }

  /* ── Footer ───────────────────────────────────────────────────────────────
     min-height rather than height so the buttons can never be clipped on a very short screen;
     in practice the token always wins. */
  :host([compact]) .hl-sheet__footer {
    box-sizing: border-box;
    min-height: var(--hl-sheet-footer-h);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 0.9rem;
    padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
    background: var(--hl-sheet-surface);
  }

  :host([compact]) .hl-sheet__done,
  :host([compact]) .hl-sheet__secondary {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    /* two thirds of the footer width, centred by the footer's align-items */
    width: 66.67%;
    min-height: 32px;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    font-family: var(--hl-font-family, 'Lato', Helvetica, Arial, sans-serif);
    font-size: 0.9rem;
    line-height: 1.2; /* all: unset drops it to normal */
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    touch-action: manipulation;
    transition:
      background-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  :host([compact]) .hl-sheet__done {
    background: var(--hl-color-confirm, #00aa58);
    color: var(--hl-color-bg-light, #fdf2f2);
    box-shadow: 0 0.15rem 0.4rem rgba(28, 19, 18, 0.3);
  }

  :host([compact]) .hl-sheet__done:hover {
    background: var(--hl-color-confirm-hover, #00914b);
  }

  :host([compact]) .hl-sheet__done:active {
    box-shadow: 0 0.05rem 0.2rem rgba(28, 19, 18, 0.35);
  }

  /* Destructive/secondary action. Outlined rather than filled so it never competes with the
     confirm button for the thumb. */
  :host([compact]) .hl-sheet__secondary {
    background: transparent;
    border: 2px solid var(--hl-color-bg-very-dark, #1c1312);
    color: var(--hl-color-bg-very-dark, #1c1312);
  }

  :host([compact]) .hl-sheet__secondary:hover,
  :host([compact]) .hl-sheet__secondary:active {
    background: var(--hl-color-bg-very-dark, #1c1312);
    color: var(--hl-color-bg-light, #fdf2f2);
  }

  :host([compact]) .hl-sheet__done:focus-visible,
  :host([compact]) .hl-sheet__secondary:focus-visible {
    outline: 3px solid var(--hl-color-primary, #5352a6);
    outline-offset: 2px;
  }

  /* Landscape phones keep the very same single-scroller stack; only the tokens and the header
     shrink. --hl-sheet-footer-h re-derives itself, because both it and --hl-sheet-max-h are
     declared on the same host element. */
  @media (orientation: landscape) and (max-height: 480px) {
    :host([compact]) {
      --hl-sheet-max-h: 96dvh;
      --hl-sheet-image-h: 32dvh;
      /* still a usable target, but it may not eat a landscape phone's height */
      --hl-sheet-touch-target: 40px;
    }

    :host([compact]) .hl-sheet__header {
      min-height: 48px;
      padding: 0.35rem 0.75rem 0.25rem;
    }

    :host([compact]) .hl-sheet__heading {
      font-size: 1rem;
      -webkit-line-clamp: 2;
    }

    :host([compact]) .hl-sheet__media {
      width: 40px;
      height: 40px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host([compact]) .hl-sheet,
    :host([compact]) .hl-sheet::backdrop,
    :host([compact]) .hl-sheet-overlay::backdrop {
      animation-duration: 1ms;
      transition-duration: 1ms;
    }
  }
`;var $e=(i=>(i.Text="userText",i.Tag="tag",i.Comic="comic",i.Mark="mark",i.Draw="draw",i.DescribeDetail="describeDetail",i))($e||{}),Se=(i=>(i.Selection="selection",i.UserText="userText",i))(Se||{}),E=(i=>(i.None="none",i.Warn="warn",i.Error="error",i))(E||{});const re={cs:{placeholder:"Vyberte oblast pro zobrazení detailu.",tagAssignedElsewhere:"Již přiřazeno — vyberte jiný atribut, nebo tento odeberte z předchozího přiřazení."},en:{placeholder:"Select a region to view the detail.",tagAssignedElsewhere:"Already assigned — pick a different one, or remove it from the previous assignment."},sk:{placeholder:"Vyberte oblasť pre zobrazenie detailu.",tagAssignedElsewhere:"Už je priradené — vyberte iný atribút, alebo tento odoberte z predchádzajúceho priradenia."},pl:{placeholder:"Wybierz obszar, aby zobaczyć szczegóły.",tagAssignedElsewhere:"Już przypisano — wybierz inny atrybut lub usuń go z poprzedniego przypisania."}};function ct(i,e){return((i&&re[i])??re.cs)[e]??re.cs[e]??""}const ht={source:"",sourceDetails:[],functions:[],debug:!1};w`
  <!-- dashed border rectangle -->
 <rect
  x="2" y="2" width="86" height="86" rx="6"
  fill="none"
  stroke="black"
  stroke-width="7"
/>
  <rect
     width="150" height="150" rx="6"
    fill="blue"
    stroke="white"
  />
  <rect
    x="30" y="30" width="86" height="86" rx="6"
    fill="none"
    stroke="white"
    stroke-width="5"
    stroke-dasharray="8 5"
  />
  <!-- hand paths — change translateY value to move the hand up/down -->
  <g transform="translate(0, 40)">
    <path d="M 69.416 43.298 H 68.97 c -0.983 0 -1.917 0.216 -2.756 0.603 c -0.644 -2.975 -3.295 -5.21 -6.459 -5.21 h -0.447 c -1.128 0 -2.19 0.284 -3.12 0.784 c -1 -2.379 -3.355 -4.054 -6.094 -4.054 h -0.447 c -0.925 0 -1.807 0.191 -2.606 0.536 v -9.458 c 0 -3.644 -2.964 -6.607 -6.608 -6.607 h -0.447 c -3.643 0 -6.607 2.964 -6.607 6.607 v 24.261 l -3.005 2.281 c -2.394 1.817 -3.911 4.461 -4.273 7.444 c -0.362 2.984 0.479 5.914 2.37 8.251 l 9.378 11.594 v 4.608 c 0 2.791 2.271 5.063 5.062 5.063 h 23.411 c 2.791 0 5.063 -2.271 5.063 -5.063 l 0.001 -4.375 c 2.996 -3.766 4.639 -8.438 4.639 -13.242 V 49.905 C 76.023 46.262 73.06 43.298 69.416 43.298 z M 72.023 67.32 c 0 4.102 -1.478 8.088 -4.159 11.224 c -0.311 0.362 -0.48 0.823 -0.48 1.3 v 5.094 c 0 0.586 -0.477 1.063 -1.063 1.063 H 42.911 c -0.585 0 -1.062 -0.477 -1.062 -1.063 v -5.316 c 0 -0.458 -0.157 -0.902 -0.445 -1.258 L 31.581 66.22 c -1.204 -1.488 -1.74 -3.354 -1.509 -5.254 c 0.23 -1.899 1.197 -3.583 2.721 -4.74 l 0.586 -0.444 v 5.495 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 v -9.506 c 0 -0.014 0 -0.026 0 -0.04 V 26.498 c 0 -1.438 1.169 -2.607 2.607 -2.607 h 0.447 c 1.438 0 2.607 1.17 2.607 2.607 v 15.53 l 0.01 12.917 c 0.001 1.104 0.896 1.998 2 1.998 c 1.104 -0.001 1.999 -0.896 1.998 -2.002 L 47.04 42.028 c 0 -1.438 1.169 -2.607 2.606 -2.607 h 0.447 c 1.438 0 2.607 1.17 2.607 2.607 v 3.272 l 0.009 9.647 c 0.001 1.104 0.896 1.998 2 1.998 c 1.104 -0.001 1.999 -0.897 1.998 -2.002 l -0.009 -9.646 c 0 -1.438 1.169 -2.607 2.606 -2.607 h 0.447 c 1.438 0 2.607 1.17 2.607 2.607 v 4.088 c -0.006 0.066 -0.02 0.13 -0.02 0.197 l 0.01 5.366 c 0.002 1.104 0.897 1.996 2 1.996 c 1.104 -0.002 1.998 -0.899 1.996 -2.004 l -0.009 -4.852 c 0.006 -0.062 0.019 -0.121 0.019 -0.184 c 0 -1.438 1.17 -2.607 2.607 -2.607 h 0.446 c 1.438 0 2.607 1.17 2.607 2.607 V 67.32 z"/>
    <path d="M 63.994 25.511 H 51.79 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 12.204 c 1.104 0 2 0.896 2 2 S 65.099 25.511 63.994 25.511 z"/>
    <path d="M 39.985 16.204 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 12.204 C 41.985 15.309 41.09 16.204 39.985 16.204 z"/>
    <path d="M 48.558 18.441 c -0.512 0 -1.023 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 8.63 -8.629 c 0.781 -0.781 2.047 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 l -8.63 8.629 C 49.581 18.246 49.069 18.441 48.558 18.441 z"/>
    <path d="M 28.181 25.511 H 15.977 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 12.204 c 1.104 0 2 0.896 2 2 S 29.285 25.511 28.181 25.511 z"/>
    <path d="M 31.413 18.441 c -0.512 0 -1.024 -0.195 -1.414 -0.586 L 21.37 9.226 c -0.781 -0.781 -0.781 -2.047 0 -2.828 c 0.78 -0.781 2.048 -0.781 2.828 0 l 8.629 8.629 c 0.781 0.781 0.781 2.047 0 2.828 C 32.437 18.246 31.925 18.441 31.413 18.441 z"/>
  </g>
`,w`
  <path
    fill="#54539e"
    d="M752.39 1504.78c-101.53 0-200.07-19.91-292.89-59.17-89.61-37.9-170.06-92.14-239.12-161.2-69.07-69.07-123.3-149.52-161.2-239.12C19.91 952.46 0 853.92 0 752.39s19.91-200.07 59.17-292.89c37.9-89.61 92.14-170.06 161.2-239.12 69.07-69.07 149.52-123.3 239.12-161.2C552.32 19.91 650.86 0 752.39 0s200.07 19.91 292.89 59.17c89.61 37.9 170.06 92.14 239.12 161.2 69.07 69.07 123.3 149.52 161.2 239.12 39.26 92.82 59.17 191.37 59.17 292.89s-19.91 200.07-59.17 292.89c-37.9 89.61-92.14 170.06-161.2 239.12-69.07 69.07-149.52 123.3-239.12 161.2-92.82 39.26-191.37 59.17-292.89 59.17Z"
  />
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
    <!-- <path
      stroke-width="35"
      d="M682.61 1065.6c-109.93 0-112.3-187.92-112.3-187.92 0-9.77 3.88-35.87 10.79-42.78l63.48-46.24v-209.7c0-22.91 18.57-41.48 41.48-41.48h0c22.91 0 41.48 18.57 41.48 41.48v186.35s0-64.23 0-64.23c0-21.63 17.53-39.16 39.16-39.16h0c21.63 0 39.16 17.53 39.16 39.16v75.93s0-47.1 0-47.1c0-21.33 17.29-38.61 38.61-38.61h0c21.33 0 38.61 17.29 38.61 38.61v59.86s0-27.62 0-27.62c0-21 17.02-38.02 38.02-38.02h0c21 0 38.02 17.02 38.02 38.02v166.39c.52 98.41-75 137.05-75 137.05"
    />
    <line stroke-width="35" x1="644.73" y1="911.27" x2="644.58" y2="782.14" />
    <line stroke-width="35" x1="496.61" y1="515.36" x2="567.31" y2="533.32" />
    <line stroke-width="35" x1="876.85" y1="515.36" x2="806.15" y2="533.32" />
    <line stroke-width="35" x1="605.81" y1="390.15" x2="639.09" y2="455.06" />
    <line stroke-width="35" x1="770.19" y1="390.15" x2="736.91" y2="455.06" /> -->
    <circle
      stroke-width="50"
      stroke-dasharray="117.27 175.91"
      cx="752.39"
      cy="752.39"
      r="653.18"
    />
  </g>
`;const dt=w`
  <g>
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="#3953FF"
      fill-opacity="0.4"
      stroke="#3953FF"
      stroke-width="150"
    />
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="none"
      stroke="white"
      stroke-width="80"
      stroke-linecap="round"
      stroke-dasharray="117.27 175.91"
    />  </g>
`,ut=w`
  <g>
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="green"
      fill-opacity="0.4"
      stroke="green"
      stroke-width="150"
    />
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="none"
      stroke="white"
      stroke-width="80"
      stroke-linecap="round"
      stroke-dasharray="117.27 175.91"
    />
    <polyline
      points="460,780 660,980 1040,540"
      fill="none"
      stroke="white"
      stroke-width="90"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 752.39 752.39"
        to="-360 752.39 752.39"
        dur="18s"
        repeatCount="indefinite"
      />
    </polyline>
  </g>
`,gt=w`
  <g>
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="orange"
      fill-opacity="0.4"
      stroke="orange"
      stroke-width="150"
    />
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="none"
      stroke="white"
      stroke-width="80"
      stroke-linecap="round"
      stroke-dasharray="117.27 175.91"
    />
    <polyline
      points=" 660,980 1040,540"
      fill="none"
      stroke="white"
      stroke-width="90"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 752.39 752.39"
        to="-360 752.39 752.39"
        dur="18s"
        repeatCount="indefinite"
      />
    </polyline>
  </g>
`,pt=w`
  <g>
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="red"
      fill-opacity="0.4"
      stroke="red"
      stroke-width="150"
    />
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="none"
      stroke="white"
      stroke-width="80"
      stroke-linecap="round"
      stroke-dasharray="117.27 175.91"
    />
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 752.39 752.39"
        to="-360 752.39 752.39"
        dur="18s"
        repeatCount="indefinite"
      />
      <polyline
        points=" 660,980 1040,540"
        fill="none"
        stroke="white"
        stroke-width="90"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="660,490 520,540 "
        fill="none"
        stroke="white"
        stroke-width="90"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </g>
`,ft=w`
  <g>
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="#888888"
      fill-opacity="0.35"
      stroke="#888888"
      stroke-width="150"
    />
    <circle
      cx="752.39"
      cy="752.39"
      r="653.18"
      fill="none"
      stroke="white"
      stroke-width="80"
      stroke-linecap="round"
      stroke-dasharray="117.27 175.91"
    />
    <!-- Eye outline -->
    <ellipse
      cx="752.39"
      cy="752.39"
      rx="340"
      ry="210"
      fill="none"
      stroke="white"
      stroke-width="70"
      stroke-linecap="round"
    />
    <!-- Pupil -->
    <circle
      cx="752.39"
      cy="752.39"
      r="110"
      fill="white"
    />
  </g>
`;w`
  <path
    fill="none"
    stroke="#54539e"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="50"
    stroke-dasharray="100.41 120.49"
    d="M763.22 1501.43c-99.62 0-196.31-19.53-287.37-58.05-87.92-37.19-166.86-90.4-234.62-158.17-67.77-67.77-120.99-146.71-158.17-234.62-38.52-91.07-58.05-187.75-58.05-287.37s19.53-196.31 58.05-287.37c37.19-87.92 90.4-166.86 158.17-234.62 67.77-67.77 146.71-120.99 234.62-158.17C566.91 44.53 663.6 25 763.22 25s196.31 19.53 287.37 58.05c87.92 37.19 166.85 90.4 234.62 158.17 67.77 67.77 120.99 146.71 158.17 234.62 38.52 91.07 58.05 187.75 58.05 287.37s-19.53 196.31-58.05 287.37c-37.19 87.92-90.4 166.86-158.17 234.62-67.77 67.77-146.71 120.99-234.62 158.17-91.07 38.52-187.75 58.05-287.37 58.05Z"
  />
  <circle
    fill="none"
    stroke="#fff"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="50"
    stroke-dasharray="98.19 117.83"
    cx="763.22"
    cy="763.22"
    r="653.18"
  />
`,w`
  <path
    fill="#54539e"
    d="M269.29 1472.07c-36.31 0-71.59-7.13-104.85-21.2-32.08-13.57-60.87-32.97-85.57-57.67s-44.1-53.49-57.67-85.57C7.13 1274.37 0 1239.09 0 1202.78V269.29c0-36.31 7.13-71.59 21.2-104.85 13.57-32.08 32.97-60.87 57.67-85.57 24.7-24.7 53.49-44.1 85.57-57.67C197.71 7.13 232.98 0 269.29 0h933.49c36.31 0 71.59 7.13 104.85 21.2 32.08 13.57 60.87 32.97 85.57 57.67s44.1 53.49 57.67 85.57c14.07 33.26 21.2 68.54 21.2 104.85v933.49c0 36.31-7.13 71.59-21.2 104.85-13.57 32.08-32.97 60.87-57.67 85.57s-53.49 44.1-85.57 57.67c-33.26 14.07-68.54 21.2-104.85 21.2H269.29Z"
  />
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
    <path
      stroke-width="35"
      d="M660.05 1072.76c-109.93 0-112.3-187.92-112.3-187.92 0-9.77 3.88-35.87 10.79-42.78l63.48-46.24v-209.7c0-22.91 18.57-41.48 41.48-41.48h0c22.91 0 41.48 18.57 41.48 41.48v186.35s0-64.23 0-64.23c0-21.63 17.53-39.16 39.16-39.16h0c21.63 0 39.16 17.53 39.16 39.16v75.93s0-47.1 0-47.1c0-21.33 17.29-38.61 38.61-38.61h0c21.33 0 38.61 17.29 38.61 38.61v59.86s0-27.62 0-27.62c0-21 17.02-38.02 38.02-38.02h0c21 0 38.02 17.02 38.02 38.02v166.39c.52 98.41-75 137.05-75 137.05"
    />
    <line stroke-width="35" x1="622.17" y1="918.43" x2="622.02" y2="789.3" />
    <line stroke-width="35" x1="474.05" y1="522.52" x2="544.75" y2="540.48" />
    <line stroke-width="35" x1="854.29" y1="522.52" x2="783.59" y2="540.48" />
    <line stroke-width="35" x1="583.25" y1="397.31" x2="616.53" y2="462.22" />
    <line stroke-width="35" x1="747.64" y1="397.31" x2="714.35" y2="462.22" />
    <rect
      stroke-width="50"
      stroke-dasharray="120.07 180.1"
      x="99.21"
      y="99.21"
      width="1273.65"
      height="1273.65"
      rx="170.08"
      ry="170.08"
    />
  </g>
`;var v=(i=>(i.New="new",i.Done="done",i.Warn="warn",i.Error="error",i.ViewOnly="viewOnly",i))(v||{});function Te(i,e){if(e.viewOnly)return{iconState:"viewOnly",collidingTagIds:[]};const o=i.userData.sourceDetails.find(a=>a.id===e.id)?.selectedTags??[];if(o.length===0)return{iconState:"new",collidingTagIds:[]};const s=e.colisionMode??E.None;if(s===E.None)return{iconState:"done",collidingTagIds:[]};const r=new Set;for(const a of i.userData.sourceDetails){if(a.id===e.id)continue;const l=i.sourceDetails.find(n=>n.id===a.id);if(l&&l.selectionId===e.selectionId)for(const n of a.selectedTags)o.includes(n)&&r.add(n)}return r.size===0?{iconState:"done",collidingTagIds:[]}:{iconState:s===E.Error?"error":"warn",collidingTagIds:Array.from(r)}}function mt(i,e){return Te(i,e).iconState}function bt(i,e){const t=i.userData.sourceDetails.find(s=>s.id===e.id)?.selectedTags??[],o=i.selections.find(s=>s.id===e.selectionId);return t.map(s=>o?.tags.find(r=>r.id===s)?.value??s)}function wt(i,e){if(e.dependencyLinks.length===0)return[];const t=(r,a)=>r.configuration.sourceDetails.find(n=>J(r.moduleId,n.id)===a||n.id===a)?.selectionId??r.configuration.sourceDetailsSettings?.selectionId,o=(r,a,l)=>{const n=t(r,a);return n?(i.dependencyData??[]).find(c=>c.moduleType===U.Selection&&c.moduleId===n)?.configuration.tags.find(c=>c.id===l)?.value:void 0},s=[];for(const r of e.dependencyLinks)for(const a of(i.dependencyData??[]).filter(l=>l.moduleType===U.Swt)){const l=a.userData.sourceDetails.find(n=>n.id===r);if(l)for(const n of l.selectedTags)s.push(o(a,l.id,n.tagId)??n.tagId)}return s}function _t(i,e,t){return i.sourceDetails.map(o=>vt({uiModel:i,item:o,onSelect:e,onKeydown:t}))}function vt(i){const{uiModel:e,item:t,onSelect:o,onKeydown:s}=i,r=Number(t.position?.x??0),a=Number(t.position?.y??0),l=60,n=mt(e,t),h=n===v.ViewOnly,c={[v.New]:dt,[v.Done]:ut,[v.Warn]:gt,[v.Error]:pt,[v.ViewOnly]:ft};return w`
    <g transform=${`translate(${r} ${a})`}>
      <svg
        class="swt__pin ${""} ${h?"swt__pin--view-only":""}"
        x=${-30}
        y=${-30}
        width=${l}
        height=${l}
        viewBox="0 0 1526.43 1526.43"
        role=${h?"img":"button"}
        tabindex=${h?"-1":"0"}
        aria-pressed=${!1}
        aria-disabled=${h}
        aria-label=${t.name||t.id}
        overflow="visible"
        @click=${()=>{h||o(t.id)}}
        @keydown=${u=>{h||s(u,t.id)}}
      >
          <g class="swt__pin-spin">
            ${n!==v.ViewOnly?w`<animateTransform
              attributeName="transform"
              type="rotate"
              from="0 752.39 752.39"
              to="360 752.39 752.39"
              dur="18s"
              repeatCount="indefinite"
            />`:g}
            ${c[n]}
          </g>
      </svg>
    </g>
  `}function yt(i){return i.sourceDetails.flatMap(e=>{const t=bt(i,e),o=wt(i,e);if(t.length===0&&o.length===0)return[];const s=Number(e.position?.x??0),r=Number(e.position?.y??0),l=(e.tagBoxSide??"right")==="left",n=e.tagBoxMode==="selectedOnly"&&!e.viewOnly,h=l?-105:1,c=`swt__tag-box ${l?"swt__tag-box--left":""} ${n?"swt__tag-box--top-only":""}`;return[w`
        <foreignObject
          x=${s}
          y=${r}
          width="1"
          height="1"
          overflow="visible"
          style=${`overflow: visible; width: 104px; height: 54px; transform: translate(${h}px, -27px); pointer-events: none;`}
        >
          <div class=${c}>
            ${e.viewOnly?g:f`<div class="swt__tag-top"><span>${t[0]||""}</span></div>`}
            ${n?g:f`<div class="swt__tag-bottom"><span>${o[0]||""}</span></div>`}
          </div>
        </foreignObject>
      `]})}function xt(i){const{configuration:e,uiModel:t,onStageClick:o,onSelect:s,onKeydown:r,onImgLoad:a,onModalClose:l,onTagSelect:n}=i,h=t.imgWidth>0?t.imgWidth:0,c=t.imgHeight>0?t.imgHeight:0;return f`
    <div class="swt">
      ${e.source?f`<img
            class="swt__bg-measure"
            src=${e.source}
            alt=""
            aria-hidden="true"
            @load=${a}
          />`:g}
      <svg
        class="swt__stage"
        aria-hidden="false"
        viewBox=${`0 0 ${Math.max(h,1)} ${Math.max(c,1)}`}
        preserveAspectRatio="xMinYMin meet"
        @click=${o}
      >
        ${e.source?w`<image
              class="swt__bg"
              href=${e.source}
              x="0"
              y="0"
              width=${Math.max(h,1)}
              height=${Math.max(c,1)}
              preserveAspectRatio="xMinYMin meet"
            ></image>`:g}
        <g class="swt__tags">${yt(t)}</g>
        <g class="swt__pins">
          ${_t(t,s,r)}
        </g>
      </svg>
      <swt-modal
        @swt-modal:close=${l}
        @swt-tag-selection:select=${u=>n(u.detail.tagId)}
      ></swt-modal>
    </div>
  `}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:oe},$t=(i=kt,e,t)=>{const{kind:o,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),o==="setter"&&((i=Object.create(i)).wrapped=!0),r.set(t.name,i),o==="accessor"){const{name:a}=t;return{set(l){const n=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,n,i,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,i,l),l}}}if(o==="setter"){const{name:a}=t;return function(l){const n=this[a];e.call(this,l),this.requestUpdate(a,n,i,!0,l)}}throw Error("Unsupported decorator location: "+o)};function p(i){return(e,t)=>typeof t=="object"?$t(i,e,t):((o,s,r)=>{const a=s.hasOwnProperty(r);return s.constructor.createProperty(r,o),a?Object.getOwnPropertyDescriptor(s,r):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae(i){return p({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Me=class extends Event{constructor(e,t,o,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt(i){return i}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let De=class{constructor(e,t,o,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const r=t;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Me(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class St{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tt=class extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};class Ce extends St{constructor(e,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=s=>{if(s.context!==this.context)return;const r=s.contextTarget??s.composedPath()[0];r!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,r,s.subscribe))},this.onProviderRequest=s=>{if(s.context!==this.context||(s.contextTarget??s.composedPath()[0])===this.host)return;const r=new Set;for(const[a,{consumerHost:l}]of this.subscriptions)r.has(a)||(r.add(a),l.dispatchEvent(new Me(this.context,l,a,!0)));s.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Tt(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At({context:i}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return{get(){return e.get.call(this)},set(s){return o.get(this).setValue(s),e.set.call(this,s)},init(s){return o.set(this,new Ce(this,{context:i,initialValue:s})),s}};{e.constructor.addInitializer((a=>{o.set(a,new Ce(a,{context:i}))}));const s=Object.getOwnPropertyDescriptor(e,t);let r;if(s===void 0){const a=new WeakMap;r={get(){return a.get(this)},set(l){o.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;r={...s,set(l){o.get(this).setValue(l),a?.call(this,l)}}}return void Object.defineProperty(e,t,r)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt({context:i,subscribe:e}){return(t,o)=>{typeof o=="object"?o.addInitializer((function(){new De(this,{context:i,callback:s=>{t.set.call(this,s)},subscribe:e})})):t.constructor.addInitializer((s=>{new De(s,{context:i,callback:r=>{s[o]=r},subscribe:e})}))}}const Ee="swt-ui-model-context";class R{constructor(e){this.id=e.id,this.selectedTags=[...e.selectedTags]}hasTag(e){return this.selectedTags.includes(e)}addTag(e){return this.hasTag(e)?this:new R({id:this.id,selectedTags:[...this.selectedTags,e]})}removeTag(e){return this.hasTag(e)?new R({id:this.id,selectedTags:this.selectedTags.filter(t=>t!==e)}):this}}class Q{constructor(e,t){this.id=J(t,e.id),this.source=e.source,this.position=e.position,this.name=e.name,this.type=e.type,this.selectionId=e.selectionId,this.colisionMode=e.colisionMode,this.dependencyLinks=Q.toCompositeKeys(e.dependencyLinks),this.tagBoxSide=e.tagBoxSide??"right",this.tagBoxMode=e.tagBoxMode??"both",this.viewOnly=e.viewOnly??!1}static toCompositeKeys(e){return(e??[]).map(t=>J(t.moduleId,t.sourceDetailId))}getDependencyLinksCompositeKeys(){return this.dependencyLinks??[]}}class Dt{constructor(e){this.id=e.moduleId,this.tags=e.configuration.tags,this.mode=e.configuration.mode,this.maxSelectedTags=e.configuration.maxSelectedTags??0,this.highlightSelectedTags=e.configuration.highlightSelectedTags??!1,this.enforceSingleUse=e.configuration.enforceSingleUse??!1,this.singleUseMessage=e.configuration.singleUseMessage}}function Oe(i){return i?.mode===X.SingleUse&&i.enforceSingleUse===!0}function Ie(i,e){if(!e.selectionId)return[];const t=new Set;for(const o of i.userData.sourceDetails){if(o.id===e.id)continue;const s=i.sourceDetails.find(r=>r.id===o.id);if(s&&s.selectionId===e.selectionId)for(const r of o.selectedTags)t.add(r)}return Array.from(t)}function Ct(i,e,t){return Ie(i,e).includes(t)}var Et=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,O=(i,e,t,o)=>{for(var s=o>1?void 0:o?Ot(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&Et(e,t,s),s};d.SourceWorkTool=class extends T{constructor(){super(),this.exportVersion=1,this.configuration={...ht},this.dependencyData=[],this.userData={},this.lang="cs",this.readOnly=!1,this._uiModel={...d.SourceWorkTool._EMPTY_UI_MODEL},this._rebuildRecords()}_setUiModel(e){this._uiModel={...this._uiModel,...e}}_rebuildRecords(){const e=this.configuration.moduleId??"local",t=this.configuration.sourceDetailsSettings,o=this.configuration.sourceDetails.map(r=>{if(!t)return new Q({...r,colisionMode:r.colisionMode??E.None},e);const a={...r,name:r.name??t.name,type:r.type??t.type,selectionId:r.selectionId??t.selectionId,tagBoxMode:r.tagBoxMode??t.tagBoxMode,colisionMode:r.colisionMode??t.colisionMode??E.None};return new Q(a,e)}),s=(this.dependencyData??[]).filter(r=>r.moduleType===U.Selection).map(r=>new Dt(r));this._uiModel={...this._uiModel,sourceDetailsSettings:this.configuration.sourceDetailsSettings,selections:s,sourceDetails:o,dependencyData:this.dependencyData??[]}}_handleSelect(e){const t=this._uiModel.selectedId===e?null:e;this._setUiModel({selectedId:t,modalOpen:t!==null,tagFeedback:null})}_handleKeydown(e,t){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleSelect(t))}_handleModalClose(){this._setUiModel({selectedId:null,modalOpen:!1,tagFeedback:null}),this.dispatchEvent(new CustomEvent("swt:change",{bubbles:!0,composed:!0,detail:{exportModule:this.exportModule()}}))}_handleTagSelect(e){const t=this._uiModel.selectedId;if(!t)return;const s=this._uiModel.userData.sourceDetails.find(m=>m.id===t)??new R({id:t,selectedTags:[]}),r=s.selectedTags,a=r.includes(e),l=this._uiModel.sourceDetails.find(m=>m.id===t),n=this._uiModel.selections.find(m=>m.id===l?.selectionId),h=n?.maxSelectedTags;let c;if(a)c=s.removeTag(e);else if(Oe(n)&&l&&Ct(this._uiModel,l,e)){this._setUiModel({tagFeedback:{sourceDetailId:t,tagId:e,reason:"assignedElsewhere"}});return}else h===1?c=new R({id:t,selectedTags:[e]}):typeof h=="number"&&h>0&&r.length>=h?c=s:c=s.addTag(e);const u=this._uiModel.userData.sourceDetails.filter(m=>m.id!==t);c.selectedTags.length>0&&u.push(c),this._setUiModel({userData:{sourceDetails:u},tagFeedback:null})}_updateResponsiveMaxWidth(e,t){if(e<=0||t<=0)return;const o=e/t,r=(Math.min(.9,Math.max(.45,o))-.45)/(.9-.45),a=Math.round(15+r*10);this.style.setProperty("--swt-max-width-units",String(a))}_handleImgLoad(e){const t=e.target;this._updateResponsiveMaxWidth(t.naturalWidth,t.naturalHeight),this._setUiModel({imgWidth:t.naturalWidth,imgHeight:t.naturalHeight})}_handleStageClick(e){if(!this.configuration.debug)return;console.log("[SWT debug] Stage click event:",e);const t=e.currentTarget;if(!t)return;const o=t.getScreenCTM();if(!o)return;const s=t.createSVGPoint();s.x=e.clientX,s.y=e.clientY;const r=s.matrixTransform(o.inverse()),a=Math.round(r.x),l=Math.round(r.y);console.log("[SWT debug] SVG click:",{x:a,y:l})}updated(){if(this._uiModel.imgWidth>0)return;const e=this.shadowRoot?.querySelector(".swt__bg");e?.complete&&e.naturalWidth>0&&(this._updateResponsiveMaxWidth(e.naturalWidth,e.naturalHeight),this._setUiModel({imgWidth:e.naturalWidth,imgHeight:e.naturalHeight}))}willUpdate(e){if(e.has("configuration")&&this._rebuildRecords(),e.has("dependencyData")&&this._setUiModel({dependencyData:this.dependencyData??[]}),e.has("userData")){const t=(this.userData?.sourceDetails??[]).map(o=>new R({id:o.id,selectedTags:o.selectedTags.map(s=>s.tagId)}));this._setUiModel({userData:{sourceDetails:t}})}e.has("readOnly")&&this._setUiModel({isReadOnly:this.readOnly}),e.has("lang")&&this._setUiModel({lang:this.lang??"cs"})}exportUserData(){return{sourceDetails:this._uiModel.userData.sourceDetails.map(t=>({id:t.id,recordType:st.SourceDetail,selectedTags:t.selectedTags.map(o=>({tagId:o}))}))}}exportModule(){const e=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:e,configuration:{...this.configuration},moduleType:U.Swt,updatedAt:new Date().toISOString(),userData:this.exportUserData()}}render(){return xt({configuration:this.configuration,uiModel:this._uiModel,imgWidth:this._uiModel.imgWidth,imgHeight:this._uiModel.imgHeight,selectedId:this._uiModel.selectedId,onStageClick:e=>this._handleStageClick(e),onSelect:e=>this._handleSelect(e),onKeydown:(e,t)=>this._handleKeydown(e,t),onImgLoad:e=>this._handleImgLoad(e),onModalClose:()=>this._handleModalClose(),onTagSelect:e=>this._handleTagSelect(e)})}},d.SourceWorkTool.styles=tt,d.SourceWorkTool._EMPTY_UI_MODEL={sourceDetails:[],selections:[],dependencyData:[],isReadOnly:!1,reviewData:[],userData:{sourceDetails:[]},selectedId:null,tagFeedback:null,lang:"cs",modalOpen:!1,imgWidth:0,imgHeight:0},O([p({attribute:!1})],d.SourceWorkTool.prototype,"configuration",2),O([p({attribute:!1})],d.SourceWorkTool.prototype,"dependencyData",2),O([p({attribute:!1})],d.SourceWorkTool.prototype,"userData",2),O([p({attribute:"data-lang"})],d.SourceWorkTool.prototype,"lang",2),O([p({type:Boolean,reflect:!0})],d.SourceWorkTool.prototype,"readOnly",2),O([At({context:Ee}),Ae()],d.SourceWorkTool.prototype,"_uiModel",2),d.SourceWorkTool=O([G("source-work-tool")],d.SourceWorkTool);var It=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,_=(i,e,t,o)=>{for(var s=o>1?void 0:o?zt(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&It(e,t,s),s};let b=class extends T{constructor(){super(...arguments),this.selection=null,this.selectedTagIds=[],this.sharedSelectedTagIds=[],this.blockedTagIds=[],this.noticeTagId="",this.noticeText="",this.maxSelectedTags=null,this.highlightSelectedTags=!0,this.collisionState=v.New,this.collidingTagIds=[],this.isReadOnly=!1,this.compact=!1}_onTagClick(i){this.isReadOnly||this.dispatchEvent(new CustomEvent("swt-tag-selection:select",{detail:{tagId:i.id},bubbles:!0,composed:!0}))}_renderSelected(){const i=this.selectedTagIds.map(e=>this.selection?.tags.find(t=>t.id===e)).filter(e=>e!==void 0);return f` <div class="tag-selection__label">Vybráno</div>
      <div class="tag-selection__list">
        ${i?.map(e=>{const t=this.collidingTagIds.includes(e.id),o=["tag-selection__tag","tag-selection__tag--removable",t&&this.collisionState===v.Warn?"tag-selection__tag--collision-warn":"",t&&this.collisionState===v.Error?"tag-selection__tag--collision-error":""].filter(Boolean).join(" ");return f`<span class=${o}>
            ${e.value}
            <button
              class="tag-selection__tag-remove-btn"
              aria-label="Odebrat ${e.value}"
              ?disabled=${this.isReadOnly}
              @click=${()=>this._onTagClick(e)}
            ></button>
          </span>`})}
      </div>`}render(){return this.selection?.tags.length?f`
      <div class="tag-selection">
        <div class="tag-selection__selected box-with-tags">
          ${this._renderSelected()}
        </div>
        <div class="tag-selection__pool box-with-tags">
          <div class="tag-selection__label">Nabídka</div>
          <p class="tag-selection__sr-status" role="status" aria-live="polite">
            ${this.noticeText}
          </p>
          <div class="tag-selection__list">
            ${this.selection.tags.map(i=>{const e=this.selectedTagIds.includes(i.id),t=this.sharedSelectedTagIds.includes(i.id),o=this.blockedTagIds.includes(i.id),r=["tag-selection__tag",this.highlightSelectedTags&&(e||this.selection?.mode===X.SingleUse&&t)?"tag-selection__tag--selected":"",o?"tag-selection__tag--blocked":""].filter(Boolean).join(" ");return f`
                <button
                  class=${r}
                  ?disabled=${this.isReadOnly}
                  aria-disabled=${o?"true":"false"}
                  @click=${()=>this._onTagClick(i)}
                >
                  ${i.value}
                </button>
                ${this.noticeText&&i.id===this.noticeTagId?f`<div class="tag-selection__notice" aria-hidden="true">
                      ${this.noticeText}
                    </div>`:g}
              `})}
          </div>
        </div>
      </div>
    `:g}};b.styles=A`
    /* :host {
      display: grid;
      grid-template-rows: auto 1fr;
      height: 100%;
      box-sizing: border-box;
      min-height: 0;
      gap: 0.6rem;
    } */

    :host {
      --swt-color-primary: #5352a6;
      --swt-color-secondary: #fce4e3;
      --swt-color-bg-very-dark: #1c1312;
      --swt-color-bg-dark: #a47b79;
      --swt-color-bg-light: #fdf2f2;
      --swt-color-bg-medium-dark: rgba(
        93,
        55,
        54,
        0.75
      ); /*  #5d3736 rgba(93,55,54,0.75) */
      --swt-color-header: #1c1312;
      --swt-color-text: #1b1313;
      --swt-color-text-dark: #360d0c;
      --swt-color-text-light: rgba(252, 228, 226, 0.5); /* #FCE4E2 */
      /* --swt-color-text-header: black; */
      --swt-color-shadow: rgba(28, 19, 18, 0.5);
      --swt-color-warn: #f5a623;
      --swt-font-family: 'Lato', Helvetica, Arial, sans-serif;
      --box-shadow-default: 0 0.2rem 0.3rem rgba(28, 19, 18, 0.3);
      display: contents;
      font-family: var(--swt-font-family);
      font-size: 0.85rem;
    }

    button {
      all: unset;
      cursor: pointer;
    }

    .tag-selection {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      height: 100%;
      min-height: 0;
    }

    .tag-selection__selected {
      min-height: 15%;
      max-height: 45%;
      flex-shrink: 1;
      flex-grow: 0;
      display: flex;
      flex-direction: column;
    }

    .tag-selection__pool {
      flex: 1 1 55%;
      min-height: 55%;
      display: flex;
      flex-direction: column;
    }

    .tag-selection__selected .tag-selection__list,
    .tag-selection__pool .tag-selection__list {
      flex: 1;
      overflow-y: scroll;
      min-height: 0;
    }

    .tag-selection__selected .tag-selection__list::-webkit-scrollbar,
    .tag-selection__pool .tag-selection__list::-webkit-scrollbar {
      width: 6px;
    }

    .tag-selection__selected .tag-selection__list::-webkit-scrollbar-track,
    .tag-selection__pool .tag-selection__list::-webkit-scrollbar-track {
      background: transparent;
    }

    .tag-selection__selected .tag-selection__list::-webkit-scrollbar-thumb,
    .tag-selection__pool .tag-selection__list::-webkit-scrollbar-thumb {
      background: var(--swt-color-bg-medium-dark);
      border-radius: 999px;
    }

    .box-with-tags {
      background: var(--swt-color-bg-dark);
      border-radius: 20px;
      padding: 0.8rem 1.5rem 1rem 1.5rem;
    }

    .tag-selection__label {
      color: var(--swt-color-secondary);
    }

    .tag-selection__list {
      display: flex;
      flex-wrap: wrap; /* umožní zalamování */
      gap: 0.5rem; /* mezery mezi prvky */
      align-content: flex-start; /* zarovná řádky nahoru, pokud je málo položek */
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0.5rem 1rem 0.5rem 0; /* kompenzuje spodní gap */
    }

    .tag-selection__tag {
      /* flex: 1 1 auto;        může růst i se zmenšovat */
      max-width: 100%;

      color: var(--swt-color-bg-very-dark);

      padding: 0.7rem 1.2rem 0.7rem 1.2rem;
      /* border: 1px solid #999; */
      border-radius: 20px;
      background: var(--swt-color-bg-light);
      box-shadow: var(--box-shadow-default);
      cursor: pointer;
      font-size: 0.85rem;
      line-height: 1.2;
      text-align: center;
      /* width: 100%; */
      transition:
        background 0.1s ease,
        border-color 0.1s ease;

      display: -webkit-box;
      /* -webkit-line-clamp: 2;       max 2 řádky */
      -webkit-box-orient: vertical;
      overflow: hidden;

      word-break: break-word;
    }

    .tag-selection__tag--selected {
      background: var(--swt-color-bg-medium-dark);
      color: var(--swt-color-text-light);
      /* opacity: 0.8; */
    }

    .tag-selection__tag--removable {
      display: inline-flex;
      align-items: center;
      position: relative;
      padding-right: 1.2rem;
      overflow: visible;
    }

    .tag-selection__tag--collision-warn {
      background: var(--swt-color-warn);
      color: var(--swt-color-bg-very-dark);
    }

    /* Blocked by an enforced singleUse selection. Deliberately NOT pointer-events: none and NOT
       disabled — the click has to reach _onTagClick, otherwise there is nothing to explain the
       refusal with. */
    .tag-selection__tag--blocked {
      cursor: not-allowed;
      opacity: 0.55;
    }

    /* Full-width flex item: forces a line break in the wrapping pool, so the bubble lands on the
       row directly under the tag that was clicked. No overflow of its own — on desktop the pool
       list is the scroller, in the sheet .hl-sheet__body is, and neither may gain a rival. */
    .tag-selection__notice {
      flex: 0 0 100%;
      box-sizing: border-box;
      background: var(--swt-color-bg-light);
      color: var(--swt-color-text-dark);
      border-left: 4px solid var(--swt-color-warn);
      border-radius: 8px;
      padding: 0.5rem 0.75rem;
      font-size: 0.8rem;
      line-height: 1.35;
    }

    /* The visible bubble is aria-hidden; this is what actually gets announced. It must stay in the
       DOM at all times — an aria-live region inserted together with its text is often missed. */
    .tag-selection__sr-status {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    .tag-selection__tag--collision-error {
      background: #e74c3c;
      color: var(--swt-color-bg-light);
    }

    button:disabled {
      cursor: not-allowed;
    }

    .tag-selection__tag-remove-btn {
      all: unset;
      position: absolute;
      top: -6px;
      right: -6px;
      width: 18px;
      height: 18px;
      border: 1.5px solid var(--swt-color-bg-dark);
      border-radius: 50%;
      background: var(--swt-color-bg-light);
      cursor: pointer;
    }

    .tag-selection__tag-remove-btn:hover {
      background: var(--swt-color-bg-dark);
      color: var(--swt-color-text-light);
      border: 1.5px solid var(--swt-color-bg-light);
    }

    .tag-selection__tag-remove-btn:hover::before,
    .tag-selection__tag-remove-btn:hover::after {
      background: var(--swt-color-bg-light);
    }

    .tag-selection__tag-remove-btn::before,
    .tag-selection__tag-remove-btn::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 1.5px;
      background: var(--swt-color-bg-dark);
      top: 50%;
      left: 50%;
      transform-origin: center;
    }

    .tag-selection__tag-remove-btn::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .tag-selection__tag-remove-btn::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    /* ─────────────────────────────────────────────────────────────────────────
       Compact (touch) mode — set by <swt-modal> when the bottom sheet is on.

       Nothing in here scrolls: in the sheet the single scroller is .hl-sheet__body,
       which carries the image, the cloned-data strip and this whole panel past the
       fixed header and the Hotovo footer. Both panels therefore have to undo the
       desktop base rule (flex: 1 + overflow-y: scroll) and grow with their content.
       ───────────────────────────────────────────────────────────────────────── */

    :host([compact]) .tag-selection {
      gap: 0.6rem;
      height: auto; /* the desktop base sets height: 100% */
      min-height: 0;
    }

    /* "Vybráno" keeps a floor of ~10% of the sheet so the empty state still reads as a
       drop area, then grows with its content. */
    :host([compact]) .tag-selection__selected {
      flex: 0 0 auto;
      min-height: var(--swt-sheet-selected-min-h, 9.5dvh);
      max-height: none;
    }

    :host([compact]) .tag-selection__selected .tag-selection__list {
      flex: 0 0 auto;
      max-height: none;
      overflow: visible;
    }

    /* "Nabídka" grows with its content too — it is usually what makes the sheet
       overflow and therefore what the user scrolls to. */
    :host([compact]) .tag-selection__pool {
      flex: 0 0 auto;
      min-height: 0;
    }

    :host([compact]) .tag-selection__pool .tag-selection__list {
      flex: 0 0 auto;
      min-height: 0;
      overflow: visible;
      overscroll-behavior: auto;
      touch-action: auto;
    }

    /* The desktop fill (--swt-color-bg-dark) is exactly the compact sheet's surface, so
       the two boxes would merge into one field and the label sat at 3.1:1. Stepping down
       to --swt-sheet-panel ($color-bg--4, inherited from <swt-modal>) separates the group
       from the surface and lifts the label to 8.1:1. */
    :host([compact]) .box-with-tags {
      padding: 0.5rem 0.8rem 0.6rem;
      border-radius: 16px;
      box-sizing: border-box;
      background: var(--swt-sheet-panel, #583d3c);
    }

    /* inline-flex replaces the desktop -webkit-box. Safe today because -webkit-line-clamp
       above is commented out — if it is ever re-enabled, compact loses the clamp. */
    :host([compact]) .tag-selection__tag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      min-height: 44px;
      padding: 0.55rem 1rem;
      font-size: 0.95rem;
      /* Transparent, so an available chip keeps exactly the geometry of the outlined
         --selected one below and the pool does not reflow as tags are used up. */
      border: 2px solid transparent;
      touch-action: manipulation;
    }

    /* --swt-color-bg-medium-dark composites to 1.0:1 against --swt-sheet-panel: the
       chip would be gone. "Already used" has to recede on a dark panel rather than go
       darker, so it becomes an outline — the dashed placeholder idiom the exercise uses
       for empty drop areas (src/scss/ui/_draggable.scss). Text lands at 4.9:1. */
    :host([compact]) .tag-selection__tag--selected {
      background: transparent;
      border: 2px dashed rgba(252, 228, 226, 0.45);
      color: rgba(252, 228, 226, 0.7);
      box-shadow: none;
    }

    /* The remove button moves from an 18px corner badge into the chip's flow, so that it
       becomes a real touch target (32x40 below) instead of a thumb-sized dot. */
    :host([compact]) .tag-selection__tag--removable {
      padding-right: 0.5rem;
      gap: 0.35rem;
      overflow: visible;
    }

    :host([compact]) .tag-selection__tag-remove-btn {
      /* must stay positioned — the ::before/::after strokes drawing the × are absolute */
      position: relative;
      top: auto;
      right: auto;
      flex: 0 0 auto;
      width: 32px;
      height: 40px;
      border: none;
      background: transparent;
      border-radius: 999px;
      touch-action: manipulation;
    }

    :host([compact]) .tag-selection__tag-remove-btn::before,
    :host([compact]) .tag-selection__tag-remove-btn::after {
      width: 12px;
      height: 2px;
    }

    :host([compact]) .tag-selection__notice {
      padding: 0.6rem 0.85rem;
      font-size: 0.85rem;
    }
  `,_([p({attribute:!1})],b.prototype,"selection",2),_([p({attribute:!1})],b.prototype,"selectedTagIds",2),_([p({attribute:!1})],b.prototype,"sharedSelectedTagIds",2),_([p({attribute:!1})],b.prototype,"blockedTagIds",2),_([p({attribute:!1})],b.prototype,"noticeTagId",2),_([p({attribute:!1})],b.prototype,"noticeText",2),_([p({attribute:!1})],b.prototype,"maxSelectedTags",2),_([p({attribute:!1})],b.prototype,"highlightSelectedTags",2),_([p({attribute:!1})],b.prototype,"collisionState",2),_([p({attribute:!1})],b.prototype,"collidingTagIds",2),_([p({type:Boolean})],b.prototype,"isReadOnly",2),_([p({type:Boolean,reflect:!0})],b.prototype,"compact",2),b=_([G("swt-tag-selection")],b);var Pt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,ae=(i,e,t,o)=>{for(var s=o>1?void 0:o?Ut(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&Pt(e,t,s),s};d.SwtModal=class extends T{constructor(){super(...arguments),this._isCompact=!1,this._compactMql=null,this._scrollLock=new it({allow:()=>this.shadowRoot?.querySelector(".hl-sheet__inner")??null,from:()=>this._toolHost?.parentElement??null}),this._handleCompactChange=e=>{this._isCompact=e.matches}}get _toolHost(){const e=this.getRootNode();return e instanceof ShadowRoot?e.host:null}connectedCallback(){super.connectedCallback(),typeof window.matchMedia=="function"&&(this._compactMql=window.matchMedia(at),this._isCompact=this._compactMql.matches,this._compactMql.addEventListener("change",this._handleCompactChange))}disconnectedCallback(){this._scrollLock.set(!1),this._compactMql?.removeEventListener("change",this._handleCompactChange),this._compactMql=null,super.disconnectedCallback()}get _selectedSourceDetailRecord(){const e=this._uiModel?.selectedId;return e&&this._uiModel?.sourceDetails.find(t=>t.id===e)||null}get _dialog(){return this.shadowRoot?.querySelector("dialog")??null}get _open(){return this._uiModel?.modalOpen??!1}_resolveDependencySelectionId(e,t){const o=e.moduleId;return e.configuration.sourceDetails.find(r=>J(o,r.id)===t||r.id===t)?.selectionId??e.configuration.sourceDetailsSettings?.selectionId}_resolveDependencyTagLabel(e,t,o){const s=this._resolveDependencySelectionId(e,t);return s?(this._uiModel?.dependencyData??[]).find(a=>a.moduleType===U.Selection&&a.moduleId===s)?.configuration.tags.find(a=>a.id===o)?.value:void 0}get _clonedDataText(){if(!this._selectedSourceDetailRecord||this._selectedSourceDetailRecord.dependencyLinks.length===0)return null;const e=[];for(const t of this._selectedSourceDetailRecord.dependencyLinks)for(const o of(this._uiModel?.dependencyData??[]).filter(s=>s.moduleType===U.Swt)){const s=o.userData.sourceDetails.find(r=>r.id===t);if(s)for(const r of s.selectedTags){const a=this._resolveDependencyTagLabel(o,s.id,r.tagId)??r.tagId;e.push({tagValue:a})}}return e.length>0?e:null}get _heading(){return this._uiModel?.sourceDetailsSettings?.assignment||"No header"}updated(e){e.has("_isCompact")&&this.toggleAttribute("compact",this._isCompact);const t=this._dialog;if(!t){this._scrollLock.set(!1);return}this._open&&!t.open?t.showModal():!this._open&&t.open&&t.close(),this._scrollLock.set(this._isCompact&&this._open)}_onDialogClick(e){e.target===e.currentTarget&&this._requestClose()}_requestClose(){this.dispatchEvent(new CustomEvent("swt-modal:close",{bubbles:!0,composed:!0}))}_onDialogClose(){this._open&&this._requestClose()}renderDetail(e){return f`<img
      src=${e.source}
      alt=${e.name||e.id}
    />`}renderClonedData(e){return f`
      <div class="cloned-data__label">Vybráno v předchozím kroku:</div>
      <div class="cloned-data__list">
        ${e.map(t=>f`<span class="cloned-data__tag">${t.tagValue}</span>`)}
      </div>
    `}renderUserData(e){const t=this._uiModel?.selectedId,o=t?this._uiModel?.userData.sourceDetails.find(y=>y.id===t)?.selectedTags??[]:[],s=this._uiModel?.selections.find(y=>y.id===e?.selectionId),r=s?this._uiModel?.userData.sourceDetails.filter(y=>this._uiModel?.sourceDetails.find(Ht=>Ht.id===y.id)?.selectionId===s.id).flatMap(y=>y.selectedTags)??[]:[],a=s?.maxSelectedTags??null,l=s?.highlightSelectedTags??!0,n=e&&this._uiModel?Te(this._uiModel,e):{iconState:v.New,collidingTagIds:[]},h=Oe(s)&&e&&this._uiModel?Ie(this._uiModel,e):[],c=this._uiModel?.tagFeedback,u=!!c&&c.sourceDetailId===t,m=u?c.tagId:"",k=u?s?.singleUseMessage||ct(this._uiModel?.lang,"tagAssignedElsewhere"):"";return f`
      <swt-tag-selection
        .selection=${s??null}
        .selectedTagIds=${o}
        .sharedSelectedTagIds=${r}
        .blockedTagIds=${h}
        .noticeTagId=${m}
        .noticeText=${k}
        .sourceDetail=${e??""}
        .maxSelectedTags=${a}
        .highlightSelectedTags=${l}
        .collisionState=${n.iconState}
        .collidingTagIds=${n.collidingTagIds}
        .isReadOnly=${this._uiModel?.isReadOnly??!1}
        ?compact=${this._isCompact}
      ></swt-tag-selection>
    `}renderSourceDetail(e){if(e===null)return g;const t=this._clonedDataText,o=t!==null;return e.viewOnly?f`
        <div class="source-detail source-detail--view-only">
          <div class="source-detail__detail">
            ${this.renderDetail(e)}
          </div>
          ${o?f`<div class="source-detail__cloned-data">
                ${this.renderClonedData(t)}
              </div>`:g}
        </div>
      `:f`
      <div class="source-detail">
        <div class="source-detail__detail">
          ${this.renderDetail(e)}
        </div>
        ${o?f`<div class="source-detail__cloned-data">
              ${this.renderClonedData(t)}
            </div>`:g}
        <div class="source-detail__current">
          ${this.renderUserData(e)}
        </div>
      </div>
    `}render(){if(!this._open)return g;const e=this._selectedSourceDetailRecord;return f`
      <dialog
        class="hl-sheet"
        @click=${this._onDialogClick}
        @close=${this._onDialogClose}
      >
        <div class="hl-sheet__inner">
          <div class="hl-sheet__header">
            <h1 class="hl-sheet__heading">${this._heading}</h1>
            <button
              class="hl-sheet__close"
              aria-label="Zavřít"
              @click=${this._requestClose}
            ></button>
          </div>

          <div class="hl-sheet__body">
            ${this.renderSourceDetail(e)}
          </div>

          <!-- Rendered only on touch, where the corner × is a small target and there is no
               visible backdrop left to click. Closes through the same path as × and backdrop.
               TODO(i18n): move to I18nDict once lang is on SwtUiModel. -->
          ${this._isCompact?f`<div class="hl-sheet__footer">
                <button class="hl-sheet__done" @click=${this._requestClose}>
                  Hotovo
                </button>
              </div>`:g}
        </div>
      </dialog>
    `}},d.SwtModal.styles=[rt,nt,lt,A`
    /* ── Design tokens — override from outside with CSS custom properties ── */
    :host {
      --swt-color-primary: var(--hl-color-primary);
      --swt-color-secondary: var(--hl-color-secondary);
      --swt-color-bg-very-dark: var(--hl-color-bg-very-dark);
      --swt-color-bg-dark: var(--hl-color-bg-dark);
      --swt-color-bg-light: var(--hl-color-bg-light);
      --swt-color-header: hsl(2, 19%, 56%);
      --swt-color-text: var(--hl-color-text);
      /* --swt-color-text-header: black; */
      --swt-color-shadow: var(--hl-color-shadow);
      --swt-font-family: var(--hl-font-family);
      --box-shadow-default: 0 0.4rem 0.8rem rgba(28, 19, 18, 0.5);

      /* Bottom-sheet geometry now comes from sheetTokens as --hl-sheet-*; these aliases stay
         because the compact overrides below (and <swt-tag-selection>) still spell them --swt-. */
      --swt-sheet-max-h: var(--hl-sheet-max-h);
      --swt-sheet-image-h: var(--hl-sheet-image-h);
      --swt-sheet-selected-min-h: var(--hl-sheet-selected-min-h);
      --swt-sheet-surface: var(--hl-sheet-surface);
      --swt-sheet-panel: var(--hl-sheet-panel);

      display: contents;
    }

    dialog {
      border: none;
      border-radius: 15px;
      padding: 0;
      /* mobile: full width */
      max-width: 90vw;
      width: 100%;
      height: min(85vh, 700px);
      box-shadow: 0 8px 40px var(--swt-color-shadow);
      background: var(--swt-color-secondary);
      font-family: var(--swt-font-family);
      color: var(--swt-color-text);
    }

    /* min-tablet (768px) → 70% width */
    @media (min-width: 768px) {
      dialog {
        max-width: 80vw;
        width: 90%;
      }
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
      animation: swt-fade-in 0.15s ease;
    }

    @keyframes swt-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* ── Desktop modal chrome ──────────────────────────────────────────────
       The elements below are shared with the compact sheet, but their DESKTOP look is not:
       a centred dialog with a corner ×, rather than a bottom sheet. Each is scoped to
       :not([compact]) so nothing here can leak past sheetStyles into the sheet — the corner
       offsets in particular, which 'position: relative' alone does not neutralise.
       The × strokes below are deliberately NOT scoped: both modes draw the same cross, and
       sheetStyles only resizes it. */
    :host(:not([compact])) .hl-sheet__inner {
      position: relative;
      padding: 1rem 3rem 3rem 3rem;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }

    /* Desktop only. On the compact sheet the button sits in the header band's flex flow and
       sheetStyles owns its box — parking it in a corner here would fight that, so the rule
       says so in the selector rather than relying on the sheet to undo it. */
    :host(:not([compact])) .hl-sheet__close {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      width: 32px;
      height: 32px;
      border: 2px solid var(--swt-color-bg-dark); /* circle color */
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
    }

    .hl-sheet__close:hover {
      background: var(--swt-color-bg-dark);
      /* border-color: var(--swt-color-bg-very-dark); */
    }

    .hl-sheet__close:hover::before,
    .hl-sheet__close:hover::after {
      background: var(--swt-color-bg-light);
    }

    /* the X */
    .hl-sheet__close::before,
    .hl-sheet__close::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 2px;
      background: var(--swt-color-bg-dark);
      top: 50%;
      left: 50%;
      transform-origin: center;
    }

    .hl-sheet__close::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .hl-sheet__close::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    :host(:not([compact])) .hl-sheet__heading {
      /* margin: 0 2rem 0.75rem 0; */
      font-size: 2rem;
      line-height: 1.2;
      font-weight: 600;
      color: var(--swt-color-header);
      font-family: var(--swt-font-family);
    }

    /* Must stay unpositioned — .hl-sheet__close is absolute and resolves against .hl-sheet__inner. */
    :host(:not([compact])) .hl-sheet__header {
      margin: 0 2rem 0.75rem 0;
      padding-bottom: 0.5rem;
      /* border-bottom: 2px solid var(--swt-color-primary); */
      display: flex;
      justify-content: center;
    }

    :host(:not([compact])) .hl-sheet__body {
      flex: 1;
      min-height: 0;
    }

    .hl-sheet__body img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .source-detail {
      display: grid;
      gap: 3rem;
      row-gap: 1rem;
      grid-template-columns: 2fr 3fr;
      align-items: stretch;
      height: 100%;
      grid-template-areas:
        'current detail '
        'clonedData clonedData';
      grid-template-rows: 85% 1fr;
    }

    .source-detail--view-only {
      grid-template-columns: 1fr;
      grid-template-areas:
        'detail'
        'clonedData';
      grid-template-rows: auto auto;
    }

    .source-detail__detail {
      grid-area: detail;
      min-height: 0;
      overflow: hidden;
      display: flex;
      align-items: start;
      justify-content: center;
    }

    .source-detail__detail img {
      /* margin: 1rem; */
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: 20px;
    }

    .source-detail__cloned-data {
      grid-area: clonedData;
      min-height: 0;
      box-sizing: border-box;
    }

    .source-detail__current {
      grid-area: current;
      min-height: 0;
    }

    .cloned-data__label {
      font-size: 0.85rem;
      color: var(--swt-color-header);
      text-align: left;
    }

    .cloned-data__list {
      display: flex;
      flex-wrap: nowrap;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem 0;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .cloned-data__list::-webkit-scrollbar {
      height: 4px;
    }

    .cloned-data__list::-webkit-scrollbar-track {
      background: transparent;
    }

    .cloned-data__list::-webkit-scrollbar-thumb {
      background: var(--swt-color-bg-dark);
      border-radius: 999px;
    }

    .cloned-data__tag {
      flex-shrink: 0;
      max-width: 100%;
      color: var(--swt-color-text);
      padding: 0.3rem 0.7rem 0.3rem 0.7rem;
      border-radius: 20px;
      background: var(--swt-color-secondary);
      border: 3px solid var(--swt-color-bg-dark);
      font-size: 0.85rem;
      line-height: 1.2;
      text-align: center;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-word;
      position: relative;
      cursor: default;
    }

    @media (prefers-reduced-motion: reduce) {
      dialog::backdrop {
        animation-duration: 1ms;
      }
    }

    /* ─────────────────────────────────────────────────────────────────────────
       Compact (touch) mode — the dialog becomes a bottom sheet. The surface, header
       band, close button, body scroller and Hotovo footer all come from sheetStyles
       in @historylab/shared; what is left here is only the content the sheet knows
       nothing about — the two-column grid stacking into detail image → cloned data →
       tag selection.
       ───────────────────────────────────────────────────────────────────────── */

    /* Only the slide-in is ours: [open] is added by showModal() in updated(), so it runs
       exactly once per open and is not restarted by Lit re-renders. Closing is NOT animated —
       render() returns nothing when closed, so the <dialog> leaves the DOM at once. (The
       assigning tool defers its unmount instead and animates both ways.) */
    :host([compact]) dialog[open] {
      animation: hl-sheet-up var(--hl-sheet-duration) var(--hl-sheet-easing);
    }

    /* Everything in here sizes to its content and lets .hl-sheet__body do the
       scrolling — hence height: auto over the desktop base's height: 100%. */
    :host([compact]) .source-detail {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: auto;
      min-height: 0;
      /* The top padding must clear the image's halo below, or .hl-sheet__body —
         which is the scroller, so it clips — cuts it off against the header. */
      padding: 1rem 0.9rem 1rem;
      box-sizing: border-box;
    }

    :host([compact]) .source-detail__detail {
      flex: 0 0 auto;
      align-items: center;
      overflow: visible;
    }

    /* max-height must sit on the <img> rather than inherit the desktop max-height: 100%:
       the parent is flex: 0 0 auto here, so its height is indefinite and % never resolves. */
    :host([compact]) .source-detail__detail img {
      max-height: var(--swt-sheet-image-h);
      max-width: 100%;
      width: auto;
      height: auto;
      border-radius: 12px;
      /* A light source has no edge of its own against the mid-tone surface. The
         exercise's own idiom for this is a soft dark halo rather than a border —
         $box-shadow in src/scss/variables/_variables.scss, scaled to the sheet.
         Nudged down so less of it reaches up towards the header, which also reads
         as a light source from above. */
      box-shadow: 0 0.4rem 1.6rem rgba(27, 19, 19, 0.8);
    }

    :host([compact]) .source-detail__cloned-data {
      flex: 0 0 auto;
    }

    :host([compact]) .source-detail__current {
      flex: 0 0 auto;
      min-height: 0;
    }

    /* view-only has no tag panel, so the image is the only content and may take more
       of the sheet. It still sizes to itself — the sheet shrinks around it. */
    :host([compact]) .source-detail--view-only {
      display: flex;
      flex-direction: column;
    }

    :host([compact]) .source-detail--view-only .source-detail__detail {
      flex: 0 0 auto;
      min-height: 0;
    }

    :host([compact]) .source-detail--view-only .source-detail__detail img {
      max-height: calc(var(--swt-sheet-max-h) * 0.6);
      height: auto;
    }

    :host([compact]) .cloned-data__label {
      font-size: 0.78rem;
    }

    :host([compact]) .cloned-data__list {
      padding: 0.35rem 0;
      overscroll-behavior-x: contain;
      -webkit-overflow-scrolling: touch;
      /* Both axes: sideways pans the strip, downwards scrolls the sheet underneath it.
         (It used to be pan-x only, back when the tag pool was its own scroller and the
         two gestures fought each other.) */
      touch-action: pan-x pan-y;
      scroll-snap-type: x proximity;
      scrollbar-width: thin;
      /* hints that the strip continues past the edge */
      mask-image: linear-gradient(
        to right,
        #000 0,
        #000 calc(100% - 1.5rem),
        transparent 100%
      );
    }

    :host([compact]) .cloned-data__tag {
      scroll-snap-align: start;
      border-width: 2px;
      /* The base border is --swt-color-bg-dark, which IS the sheet surface here, so the
         chip would lose its outline and bleed into the background. */
      border-color: var(--swt-color-bg-very-dark);
      padding: 0.35rem 0.7rem;
      font-size: 0.8rem;
    }


    /* Landscape phones keep the very same single-scroller stack. sheetStyles already shrinks
       the header, the close target and --hl-sheet-max-h/-image-h; only the source-detail stack
       is ours to tighten. */
    @media (orientation: landscape) and (max-height: 480px) {
      :host([compact]) .source-detail {
        gap: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }
  `],ae([Mt({context:Ee,subscribe:!0})],d.SwtModal.prototype,"_uiModel",2),ae([Ae()],d.SwtModal.prototype,"_isCompact",2),d.SwtModal=ae([G("swt-modal")],d.SwtModal);var Rt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,x=(i,e,t,o)=>{for(var s=o>1?void 0:o?Nt(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&Rt(e,t,s),s};return d.SwtSelection=class extends T{constructor(){super(...arguments),this.label="",this.dependencies=[],this.tags=[],this.mode=X.Reusable,this.selectedTagIds=[],this.sharedSelectedTagIds=[],this.isReadOnly=!1}exportState(){return{id:this.id,tags:[...this.tags],mode:this.mode,maxSelectedTags:this.maxSelectedTags,highlightSelectedTags:this.highlightSelectedTags}}_onTagClick(e){this.isReadOnly||this.dispatchEvent(new CustomEvent("swt-tag-selection:select",{detail:{tagId:e.id},bubbles:!0,composed:!0}))}render(){return this.tags.length?f`
      <div class="pool__label">Nabidka:</div>
      <div class="pool__list">
        ${this.tags.map(e=>{const t=this.selectedTagIds.includes(e.id),o=this.sharedSelectedTagIds.includes(e.id),r=["pool__tag",this.highlightSelectedTags&&(t||this.mode===X.SingleUse&&o)?"pool__tag--selected":""].filter(Boolean).join(" ");return f`
            <button
              class=${r}
              ?disabled=${this.isReadOnly}
              @click=${()=>this._onTagClick(e)}
            >
              ${e.value}
            </button>
          `})}
      </div>
    `:g}},d.SwtSelection.styles=A`
    :host {
      --swt-color-primary: #5352a6;
      --swt-color-secondary: #fce4e3;
      --swt-color-bg-very-dark: #1c1312;
      --swt-color-bg-dark: #a47b79;
      --swt-color-bg-light: #fdf2f2;
      --swt-color-bg-medium-dark: rgba(93, 55, 54, 0.75);
      --swt-color-header: #1c1312;
      --swt-color-text: #1b1313;
      --swt-color-text-light: rgba(252, 228, 226, 0.5);
      --swt-color-shadow: rgba(28, 19, 18, 0.5);
      --swt-font-family: 'Lato', Helvetica, Arial, sans-serif;
      --box-shadow-default: 0 0.2rem 0.3rem rgba(28, 19, 18, 0.3);

      /* Pool container — flex so the list scrolls independently */
      display: flex;
      flex-direction: column;
      background: var(--swt-color-bg-dark);
      border-radius: 20px;
      padding: 0.8rem 1.5rem 1rem 1.5rem;
      font-family: var(--swt-font-family);
      font-size: 0.85rem;
      min-height: 0;
    }

    button {
      all: unset;
      cursor: pointer;
    }

    button:disabled {
      cursor: not-allowed;
    }

    .pool__label {
      color: var(--swt-color-secondary);
    }

    .pool__list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-content: flex-start;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0.5rem 1rem 0.5rem 0;
      overflow-y: scroll;
      min-height: 0;
    }

    .pool__list::-webkit-scrollbar {
      width: 6px;
    }

    .pool__list::-webkit-scrollbar-track {
      background: transparent;
    }

    .pool__list::-webkit-scrollbar-thumb {
      background: var(--swt-color-bg-medium-dark);
      border-radius: 999px;
    }

    .pool__tag {
      max-width: 100%;
      color: var(--swt-color-bg-very-dark);
      padding: 0.7rem 1.2rem;
      border-radius: 20px;
      background: var(--swt-color-bg-light);
      box-shadow: var(--box-shadow-default);
      cursor: pointer;
      font-size: 0.85rem;
      line-height: 1.2;
      text-align: center;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-word;
      transition:
        background 0.1s ease,
        border-color 0.1s ease;
    }

    .pool__tag--selected {
      background: var(--swt-color-bg-medium-dark);
      color: var(--swt-color-text-light);
    }
  `,x([p({type:String})],d.SwtSelection.prototype,"label",2),x([p({attribute:!1})],d.SwtSelection.prototype,"dependencies",2),x([p({attribute:!1})],d.SwtSelection.prototype,"tags",2),x([p({type:String})],d.SwtSelection.prototype,"mode",2),x([p({type:Number,attribute:"max-selected-tags"})],d.SwtSelection.prototype,"maxSelectedTags",2),x([p({type:Boolean,attribute:"highlight-selected-tags"})],d.SwtSelection.prototype,"highlightSelectedTags",2),x([p({attribute:!1})],d.SwtSelection.prototype,"selectedTagIds",2),x([p({attribute:!1})],d.SwtSelection.prototype,"sharedSelectedTagIds",2),x([p({type:Boolean})],d.SwtSelection.prototype,"isReadOnly",2),d.SwtSelection=x([G("swt-selection")],d.SwtSelection),d.ColisionType=E,d.SourceDetailType=Se,d.SourceFunction=$e,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),d})({});
//# sourceMappingURL=source-work-tool.js.map
