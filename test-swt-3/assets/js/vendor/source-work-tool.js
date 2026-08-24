var SourceWorkTool=(function(d){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,Q=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),ae=new WeakMap;let ne=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Q&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ae.set(t,e))}return e}toString(){return this.cssText}};const Ee=i=>new ne(typeof i=="string"?i:i+"",void 0,ee),q=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new ne(t,i,ee)},Oe=(i,e)=>{if(Q)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=B.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)}},le=Q?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ee(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ie,defineProperty:Pe,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Re,getOwnPropertySymbols:Ue,getPrototypeOf:He}=Object,x=globalThis,ce=x.trustedTypes,Ne=ce?ce.emptyScript:"",Le=x.reactiveElementPolyfillSupport,R=(i,e)=>i,K={toAttribute(i,e){switch(e){case Boolean:i=i?Ne:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},te=(i,e)=>!Ie(i,e),de={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Pe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:r}=ze(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const l=s?.call(this);r?.call(this,a),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const e=He(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const t=this.properties,o=[...Re(t),...Ue(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(le(s))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:K).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:K;this._$Em=s;const l=a.fromAttribute(t,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,o,s=!1,r){if(e!==void 0){const a=this.constructor;if(s===!1&&(r=this[e]),o??(o=a.getPropertyOptions(e)),!((o.hasChanged??te)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:r},a){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o){const{wrapped:a}=r,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[R("elementProperties")]=new Map,E[R("finalized")]=new Map,Le?.({ReactiveElement:E}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,he=i=>i,Y=U.trustedTypes,ue=Y?Y.createPolicy("lit-html",{createHTML:i=>i}):void 0,ge="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+k,je=`<${pe}>`,T=document,H=()=>T.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",oe=Array.isArray,We=i=>oe(i)||typeof i?.[Symbol.iterator]=="function",se=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,fe=/>/g,A=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,we=/"/g,_e=/^(?:script|style|textarea|title)$/i,ve=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=ve(1),b=ve(2),O=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ye=new WeakMap,M=T.createTreeWalker(T,129);function xe(i,e){if(!oe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(e):e}const Ve=(i,e)=>{const t=i.length-1,o=[];let s,r=e===2?"<svg>":e===3?"<math>":"",a=L;for(let l=0;l<t;l++){const n=i[l];let c,h,u=-1,f=0;for(;f<n.length&&(a.lastIndex=f,h=a.exec(n),h!==null);)f=a.lastIndex,a===L?h[1]==="!--"?a=me:h[1]!==void 0?a=fe:h[2]!==void 0?(_e.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=A):h[3]!==void 0&&(a=A):a===A?h[0]===">"?(a=s??L,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?A:h[3]==='"'?we:be):a===we||a===be?a=A:a===me||a===fe?a=L:(a=A,s=void 0);const S=a===A&&i[l+1].startsWith("/>")?" ":"";r+=a===L?n+je:u>=0?(o.push(c),n.slice(0,u)+ge+n.slice(u)+k+S):n+k+(u===-2?l:S)}return[xe(i,r+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class j{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,a=0;const l=e.length-1,n=this.parts,[c,h]=Ve(e,t);if(this.el=j.createElement(c,o),M.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=M.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(ge)){const f=h[a++],S=s.getAttribute(u).split(k),J=/([.?@])?(.*)/.exec(f);n.push({type:1,index:r,name:J[2],strings:S,ctor:J[1]==="."?qe:J[1]==="?"?Ke:J[1]==="@"?Ye:Z}),s.removeAttribute(u)}else u.startsWith(k)&&(n.push({type:6,index:r}),s.removeAttribute(u));if(_e.test(s.tagName)){const u=s.textContent.split(k),f=u.length-1;if(f>0){s.textContent=Y?Y.emptyScript:"";for(let S=0;S<f;S++)s.append(u[S],H()),M.nextNode(),n.push({type:2,index:++r});s.append(u[f],H())}}}else if(s.nodeType===8)if(s.data===pe)n.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(k,u+1))!==-1;)n.push({type:7,index:r}),u+=k.length-1}r++}}static createElement(e,t){const o=T.createElement("template");return o.innerHTML=e,o}}function I(i,e,t=i,o){if(e===O)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl;const r=N(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=I(i,s._$AS(i,e.values),s,o)),e}class Be{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??T).importNode(t,!0);M.currentNode=s;let r=M.nextNode(),a=0,l=0,n=o[0];for(;n!==void 0;){if(a===n.index){let c;n.type===2?c=new W(r,r.nextSibling,this,e):n.type===1?c=new n.ctor(r,n.name,n.strings,this,e):n.type===6&&(c=new Ze(r,this,e)),this._$AV.push(c),n=o[++l]}a!==n?.index&&(r=M.nextNode(),a++)}return M.currentNode=T,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class W{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),N(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):We(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=j.createElement(xe(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{const r=new Be(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new j(e)),t}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const r of e)s===t.length?t.push(o=new W(this.O(H()),this.O(H()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const o=he(e).nextSibling;he(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}_$AI(e,t=this,o,s){const r=this.strings;let a=!1;if(r===void 0)e=I(this,e,t,0),a=!N(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{const l=e;let n,c;for(e=r[0],n=0;n<r.length-1;n++)c=I(this,l[o+n],t,n),c===O&&(c=this._$AH[n]),a||(a=!N(c)||c!==this._$AH[n]),c===g?e=g:e!==g&&(e+=(c??"")+r[n+1]),this._$AH[n]=c}a&&!s&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qe extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ke extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ye extends Z{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??g)===O)return;const o=this._$AH,s=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==g&&(o===g||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const Fe=U.litHtmlPolyfillSupport;Fe?.(j,W),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.2");const Xe=(i,e,t)=>{const o=t?.renderBefore??e;let s=o._$litPart$;if(s===void 0){const r=t?.renderBefore??null;o._$litPart$=s=new W(e.insertBefore(H(),r),r,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;let $=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};$._$litElement$=!0,$.finalized=!0,V.litElementHydrateSupport?.({LitElement:$});const Ge=V.litElementPolyfillSupport;Ge?.({LitElement:$}),(V.litElementVersions??(V.litElementVersions=[])).push("4.2.2");const Je=q`
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
`,Qe=":";function F(i,...e){if(!i)throw new Error("buildCompositeKey: moduleId must be a non-empty string");return[i,...e].join(Qe)}const P={Swt:"swt",Selection:"selection"},et={SourceDetail:"swt:sourceDetail"},ie={Reusable:"reusable",SingleUse:"singleUse"};class tt{constructor(e={}){this._locked=!1,this._frozen=[],this._blockOutside=t=>{const o=this._options.allow?.();if(o){const s=Array.isArray(o)?o:[o],r=t.composedPath();if(s.some(a=>a&&r.includes(a)))return}t.preventDefault()},this._options=e}get locked(){return this._locked}lock(){this.set(!0)}unlock(){this.set(!1)}set(e){if(typeof document>"u"||this._locked===e)return;this._locked=e,document.documentElement.style.overflow=e?"hidden":"",document.body.style.overflow=e?"hidden":"",document.body.style.touchAction=e?"none":"",e?this._freezeAncestors():this._thawAncestors();const t={capture:!0,passive:!1};e?(window.addEventListener("wheel",this._blockOutside,t),window.addEventListener("touchmove",this._blockOutside,t)):(window.removeEventListener("wheel",this._blockOutside,t),window.removeEventListener("touchmove",this._blockOutside,t))}_freezeAncestors(){let e=this._options.from?.()??null;for(;e&&e!==document.body;){const t=getComputedStyle(e);if(/(auto|scroll)/.test(t.overflowY)||/(auto|scroll)/.test(t.overflowX)){const o=e;this._frozen.push({el:o,overflow:o.style.overflow,touchAction:o.style.touchAction}),o.style.overflow="hidden",o.style.touchAction="none"}e=e.parentElement}}_thawAncestors(){for(const{el:e,overflow:t,touchAction:o}of this._frozen)e.style.overflow=t,e.style.touchAction=o;this._frozen=[]}}var ke=(i=>(i.Text="userText",i.Tag="tag",i.Comic="comic",i.Mark="mark",i.Draw="draw",i.DescribeDetail="describeDetail",i))(ke||{}),$e=(i=>(i.Selection="selection",i.UserText="userText",i))($e||{}),C=(i=>(i.None="none",i.Warn="warn",i.Error="error",i))(C||{});const ot={source:"",sourceDetails:[],functions:[],debug:!1};b`
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
`,b`
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
`;const st=b`
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
`,it=b`
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
`,rt=b`
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
`,at=b`
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
`,nt=b`
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
`;b`
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
`,b`
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
`;var w=(i=>(i.New="new",i.Done="done",i.Warn="warn",i.Error="error",i.ViewOnly="viewOnly",i))(w||{});function Se(i,e){if(e.viewOnly)return{iconState:"viewOnly",collidingTagIds:[]};const o=i.userData.sourceDetails.find(a=>a.id===e.id)?.selectedTags??[];if(o.length===0)return{iconState:"new",collidingTagIds:[]};const s=e.colisionMode??C.None;if(s===C.None)return{iconState:"done",collidingTagIds:[]};const r=new Set;for(const a of i.userData.sourceDetails){if(a.id===e.id)continue;const l=i.sourceDetails.find(n=>n.id===a.id);if(l&&l.selectionId===e.selectionId)for(const n of a.selectedTags)o.includes(n)&&r.add(n)}return r.size===0?{iconState:"done",collidingTagIds:[]}:{iconState:s===C.Error?"error":"warn",collidingTagIds:Array.from(r)}}function lt(i,e){return Se(i,e).iconState}function ct(i,e){const t=i.userData.sourceDetails.find(s=>s.id===e.id)?.selectedTags??[],o=i.selections.find(s=>s.id===e.selectionId);return t.map(s=>o?.tags.find(r=>r.id===s)?.value??s)}function dt(i,e){if(e.dependencyLinks.length===0)return[];const t=(r,a)=>r.configuration.sourceDetails.find(n=>F(r.moduleId,n.id)===a||n.id===a)?.selectionId??r.configuration.sourceDetailsSettings?.selectionId,o=(r,a,l)=>{const n=t(r,a);return n?(i.dependencyData??[]).find(h=>h.moduleType===P.Selection&&h.moduleId===n)?.configuration.tags.find(h=>h.id===l)?.value:void 0},s=[];for(const r of e.dependencyLinks)for(const a of(i.dependencyData??[]).filter(l=>l.moduleType===P.Swt)){const l=a.userData.sourceDetails.find(n=>n.id===r);if(l)for(const n of l.selectedTags)s.push(o(a,l.id,n.tagId)??n.tagId)}return s}function ht(i,e,t){return i.sourceDetails.map(o=>ut({uiModel:i,item:o,onSelect:e,onKeydown:t}))}function ut(i){const{uiModel:e,item:t,onSelect:o,onKeydown:s}=i,r=Number(t.position?.x??0),a=Number(t.position?.y??0),l=60,n=lt(e,t),c=n===w.ViewOnly,h={[w.New]:st,[w.Done]:it,[w.Warn]:rt,[w.Error]:at,[w.ViewOnly]:nt};return b`
    <g transform=${`translate(${r} ${a})`}>
      <svg
        class="swt__pin ${""} ${c?"swt__pin--view-only":""}"
        x=${-30}
        y=${-30}
        width=${l}
        height=${l}
        viewBox="0 0 1526.43 1526.43"
        role=${c?"img":"button"}
        tabindex=${c?"-1":"0"}
        aria-pressed=${!1}
        aria-disabled=${c}
        aria-label=${t.name||t.id}
        overflow="visible"
        @click=${()=>{c||o(t.id)}}
        @keydown=${u=>{c||s(u,t.id)}}
      >
          <g class="swt__pin-spin">
            ${n!==w.ViewOnly?b`<animateTransform
              attributeName="transform"
              type="rotate"
              from="0 752.39 752.39"
              to="360 752.39 752.39"
              dur="18s"
              repeatCount="indefinite"
            />`:g}
            ${h[n]}
          </g>
      </svg>
    </g>
  `}function gt(i){return i.sourceDetails.flatMap(e=>{const t=ct(i,e),o=dt(i,e);if(t.length===0&&o.length===0)return[];const s=Number(e.position?.x??0),r=Number(e.position?.y??0),l=(e.tagBoxSide??"right")==="left",n=e.tagBoxMode==="selectedOnly"&&!e.viewOnly,c=l?-105:1,h=`swt__tag-box ${l?"swt__tag-box--left":""} ${n?"swt__tag-box--top-only":""}`;return[b`
        <foreignObject
          x=${s}
          y=${r}
          width="1"
          height="1"
          overflow="visible"
          style=${`overflow: visible; width: 104px; height: 54px; transform: translate(${c}px, -27px); pointer-events: none;`}
        >
          <div class=${h}>
            ${e.viewOnly?g:m`<div class="swt__tag-top"><span>${t[0]||""}</span></div>`}
            ${n?g:m`<div class="swt__tag-bottom"><span>${o[0]||""}</span></div>`}
          </div>
        </foreignObject>
      `]})}function pt(i){const{configuration:e,uiModel:t,onStageClick:o,onSelect:s,onKeydown:r,onImgLoad:a,onModalClose:l,onTagSelect:n}=i,c=t.imgWidth>0?t.imgWidth:0,h=t.imgHeight>0?t.imgHeight:0;return m`
    <div class="swt">
      ${e.source?m`<img
            class="swt__bg-measure"
            src=${e.source}
            alt=""
            aria-hidden="true"
            @load=${a}
          />`:g}
      <svg
        class="swt__stage"
        aria-hidden="false"
        viewBox=${`0 0 ${Math.max(c,1)} ${Math.max(h,1)}`}
        preserveAspectRatio="xMinYMin meet"
        @click=${o}
      >
        ${e.source?b`<image
              class="swt__bg"
              href=${e.source}
              x="0"
              y="0"
              width=${Math.max(c,1)}
              height=${Math.max(h,1)}
              preserveAspectRatio="xMinYMin meet"
            ></image>`:g}
        <g class="swt__tags">${gt(t)}</g>
        <g class="swt__pins">
          ${ht(t,s,r)}
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
 */const X=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:te},ft=(i=mt,e,t)=>{const{kind:o,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),o==="setter"&&((i=Object.create(i)).wrapped=!0),r.set(t.name,i),o==="accessor"){const{name:a}=t;return{set(l){const n=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,n,i,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,i,l),l}}}if(o==="setter"){const{name:a}=t;return function(l){const n=this[a];e.call(this,l),this.requestUpdate(a,n,i,!0,l)}}throw Error("Unsupported decorator location: "+o)};function p(i){return(e,t)=>typeof t=="object"?ft(i,e,t):((o,s,r)=>{const a=s.hasOwnProperty(r);return s.constructor.createProperty(r,o),a?Object.getOwnPropertyDescriptor(s,r):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(i){return p({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ae=class extends Event{constructor(e,t,o,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(i){return i}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Me=class{constructor(e,t,o,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const r=t;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ae(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bt{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wt=class extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};class Ce extends bt{constructor(e,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=s=>{if(s.context!==this.context)return;const r=s.contextTarget??s.composedPath()[0];r!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,r,s.subscribe))},this.onProviderRequest=s=>{if(s.context!==this.context||(s.contextTarget??s.composedPath()[0])===this.host)return;const r=new Set;for(const[a,{consumerHost:l}]of this.subscriptions)r.has(a)||(r.add(a),l.dispatchEvent(new Ae(this.context,l,a,!0)));s.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new wt(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t({context:i}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return{get(){return e.get.call(this)},set(s){return o.get(this).setValue(s),e.set.call(this,s)},init(s){return o.set(this,new Ce(this,{context:i,initialValue:s})),s}};{e.constructor.addInitializer((a=>{o.set(a,new Ce(a,{context:i}))}));const s=Object.getOwnPropertyDescriptor(e,t);let r;if(s===void 0){const a=new WeakMap;r={get(){return a.get(this)},set(l){o.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;r={...s,set(l){o.get(this).setValue(l),a?.call(this,l)}}}return void Object.defineProperty(e,t,r)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt({context:i,subscribe:e}){return(t,o)=>{typeof o=="object"?o.addInitializer((function(){new Me(this,{context:i,callback:s=>{t.set.call(this,s)},subscribe:e})})):t.constructor.addInitializer((s=>{new Me(s,{context:i,callback:r=>{s[o]=r},subscribe:e})}))}}const De="swt-ui-model-context";class z{constructor(e){this.id=e.id,this.selectedTags=[...e.selectedTags]}hasTag(e){return this.selectedTags.includes(e)}addTag(e){return this.hasTag(e)?this:new z({id:this.id,selectedTags:[...this.selectedTags,e]})}removeTag(e){return this.hasTag(e)?new z({id:this.id,selectedTags:this.selectedTags.filter(t=>t!==e)}):this}}class G{constructor(e,t){this.id=F(t,e.id),this.source=e.source,this.position=e.position,this.name=e.name,this.type=e.type,this.selectionId=e.selectionId,this.colisionMode=e.colisionMode,this.dependencyLinks=G.toCompositeKeys(e.dependencyLinks),this.tagBoxSide=e.tagBoxSide??"right",this.tagBoxMode=e.tagBoxMode??"both",this.viewOnly=e.viewOnly??!1}static toCompositeKeys(e){return(e??[]).map(t=>F(t.moduleId,t.sourceDetailId))}getDependencyLinksCompositeKeys(){return this.dependencyLinks??[]}}class yt{constructor(e){this.id=e.moduleId,this.tags=e.configuration.tags,this.mode=e.configuration.mode,this.maxSelectedTags=e.configuration.maxSelectedTags??0,this.highlightSelectedTags=e.configuration.highlightSelectedTags??!1}}var xt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,D=(i,e,t,o)=>{for(var s=o>1?void 0:o?kt(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&xt(e,t,s),s};d.SourceWorkTool=class extends ${constructor(){super(),this.exportVersion=1,this.configuration={...ot},this.dependencyData=[],this.userData={},this.lang="cs",this.readOnly=!1,this._uiModel={...d.SourceWorkTool._EMPTY_UI_MODEL},this._rebuildRecords()}_setUiModel(e){this._uiModel={...this._uiModel,...e}}_rebuildRecords(){const e=this.configuration.moduleId??"local",t=this.configuration.sourceDetailsSettings,o=this.configuration.sourceDetails.map(r=>{if(!t)return new G({...r,colisionMode:r.colisionMode??C.None},e);const a={...r,name:r.name??t.name,type:r.type??t.type,selectionId:r.selectionId??t.selectionId,tagBoxMode:r.tagBoxMode??t.tagBoxMode,colisionMode:r.colisionMode??t.colisionMode??C.None};return new G(a,e)}),s=(this.dependencyData??[]).filter(r=>r.moduleType===P.Selection).map(r=>new yt(r));this._uiModel={...this._uiModel,sourceDetailsSettings:this.configuration.sourceDetailsSettings,selections:s,sourceDetails:o,dependencyData:this.dependencyData??[]}}_handleSelect(e){const t=this._uiModel.selectedId===e?null:e;this._setUiModel({selectedId:t,modalOpen:t!==null})}_handleKeydown(e,t){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleSelect(t))}_handleModalClose(){this._setUiModel({selectedId:null,modalOpen:!1}),this.dispatchEvent(new CustomEvent("swt:change",{bubbles:!0,composed:!0,detail:{exportModule:this.exportModule()}}))}_handleTagSelect(e){const t=this._uiModel.selectedId;if(!t)return;const s=this._uiModel.userData.sourceDetails.find(f=>f.id===t)??new z({id:t,selectedTags:[]}),r=s.selectedTags,a=r.includes(e),l=this._uiModel.sourceDetails.find(f=>f.id===t),c=this._uiModel.selections.find(f=>f.id===l?.selectionId)?.maxSelectedTags;let h;a?h=s.removeTag(e):c===1?h=new z({id:t,selectedTags:[e]}):typeof c=="number"&&c>0&&r.length>=c?h=s:h=s.addTag(e);const u=this._uiModel.userData.sourceDetails.filter(f=>f.id!==t);h.selectedTags.length>0&&u.push(h),this._setUiModel({userData:{sourceDetails:u}})}_updateResponsiveMaxWidth(e,t){if(e<=0||t<=0)return;const o=e/t,r=(Math.min(.9,Math.max(.45,o))-.45)/(.9-.45),a=Math.round(15+r*10);this.style.setProperty("--swt-max-width-units",String(a))}_handleImgLoad(e){const t=e.target;this._updateResponsiveMaxWidth(t.naturalWidth,t.naturalHeight),this._setUiModel({imgWidth:t.naturalWidth,imgHeight:t.naturalHeight})}_handleStageClick(e){if(!this.configuration.debug)return;console.log("[SWT debug] Stage click event:",e);const t=e.currentTarget;if(!t)return;const o=t.getScreenCTM();if(!o)return;const s=t.createSVGPoint();s.x=e.clientX,s.y=e.clientY;const r=s.matrixTransform(o.inverse()),a=Math.round(r.x),l=Math.round(r.y);console.log("[SWT debug] SVG click:",{x:a,y:l})}updated(){if(this._uiModel.imgWidth>0)return;const e=this.shadowRoot?.querySelector(".swt__bg");e?.complete&&e.naturalWidth>0&&(this._updateResponsiveMaxWidth(e.naturalWidth,e.naturalHeight),this._setUiModel({imgWidth:e.naturalWidth,imgHeight:e.naturalHeight}))}willUpdate(e){if(e.has("configuration")&&this._rebuildRecords(),e.has("dependencyData")&&this._setUiModel({dependencyData:this.dependencyData??[]}),e.has("userData")){const t=(this.userData?.sourceDetails??[]).map(o=>new z({id:o.id,selectedTags:o.selectedTags.map(s=>s.tagId)}));this._setUiModel({userData:{sourceDetails:t}})}e.has("readOnly")&&this._setUiModel({isReadOnly:this.readOnly})}exportUserData(){return{sourceDetails:this._uiModel.userData.sourceDetails.map(t=>({id:t.id,recordType:et.SourceDetail,selectedTags:t.selectedTags.map(o=>({tagId:o}))}))}}exportModule(){const e=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:e,configuration:{...this.configuration},moduleType:P.Swt,updatedAt:new Date().toISOString(),userData:this.exportUserData()}}render(){return pt({configuration:this.configuration,uiModel:this._uiModel,imgWidth:this._uiModel.imgWidth,imgHeight:this._uiModel.imgHeight,selectedId:this._uiModel.selectedId,onStageClick:e=>this._handleStageClick(e),onSelect:e=>this._handleSelect(e),onKeydown:(e,t)=>this._handleKeydown(e,t),onImgLoad:e=>this._handleImgLoad(e),onModalClose:()=>this._handleModalClose(),onTagSelect:e=>this._handleTagSelect(e)})}},d.SourceWorkTool.styles=Je,d.SourceWorkTool._EMPTY_UI_MODEL={sourceDetails:[],selections:[],dependencyData:[],isReadOnly:!1,reviewData:[],userData:{sourceDetails:[]},selectedId:null,modalOpen:!1,imgWidth:0,imgHeight:0},D([p({attribute:!1})],d.SourceWorkTool.prototype,"configuration",2),D([p({attribute:!1})],d.SourceWorkTool.prototype,"dependencyData",2),D([p({attribute:!1})],d.SourceWorkTool.prototype,"userData",2),D([p({attribute:"data-lang"})],d.SourceWorkTool.prototype,"lang",2),D([p({type:Boolean,reflect:!0})],d.SourceWorkTool.prototype,"readOnly",2),D([_t({context:De}),Te()],d.SourceWorkTool.prototype,"_uiModel",2),d.SourceWorkTool=D([X("source-work-tool")],d.SourceWorkTool);const $t="(max-width: 720px)";var St=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,v=(i,e,t,o)=>{for(var s=o>1?void 0:o?Tt(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&St(e,t,s),s};let _=class extends ${constructor(){super(...arguments),this.selection=null,this.selectedTagIds=[],this.sharedSelectedTagIds=[],this.maxSelectedTags=null,this.highlightSelectedTags=!0,this.collisionState=w.New,this.collidingTagIds=[],this.isReadOnly=!1,this.compact=!1}_onTagClick(i){this.isReadOnly||this.dispatchEvent(new CustomEvent("swt-tag-selection:select",{detail:{tagId:i.id},bubbles:!0,composed:!0}))}_renderSelected(){const i=this.selectedTagIds.map(e=>this.selection?.tags.find(t=>t.id===e)).filter(e=>e!==void 0);return m` <div class="tag-selection__label">Vybráno</div>
      <div class="tag-selection__list">
        ${i?.map(e=>{const t=this.collidingTagIds.includes(e.id),o=["tag-selection__tag","tag-selection__tag--removable",t&&this.collisionState===w.Warn?"tag-selection__tag--collision-warn":"",t&&this.collisionState===w.Error?"tag-selection__tag--collision-error":""].filter(Boolean).join(" ");return m`<span class=${o}>
            ${e.value}
            <button
              class="tag-selection__tag-remove-btn"
              aria-label="Odebrat ${e.value}"
              ?disabled=${this.isReadOnly}
              @click=${()=>this._onTagClick(e)}
            ></button>
          </span>`})}
      </div>`}render(){return this.selection?.tags.length?m`
      <div class="tag-selection">
        <div class="tag-selection__selected box-with-tags">
          ${this._renderSelected()}
        </div>
        <div class="tag-selection__pool box-with-tags">
          <div class="tag-selection__label">Nabídka</div>
          <div class="tag-selection__list">
            ${this.selection.tags.map(i=>{const e=this.selectedTagIds.includes(i.id),t=this.sharedSelectedTagIds.includes(i.id),s=["tag-selection__tag",this.highlightSelectedTags&&(e||this.selection?.mode===ie.SingleUse&&t)?"tag-selection__tag--selected":""].filter(Boolean).join(" ");return m`
                <button
                  class=${s}
                  ?disabled=${this.isReadOnly}
                  @click=${()=>this._onTagClick(i)}
                >
                  ${i.value}
                </button>
              `})}
          </div>
        </div>
      </div>
    `:g}};_.styles=q`
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
      background: #f5a623;
      color: var(--swt-color-bg-very-dark);
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

       Nothing in here scrolls: in the sheet the single scroller is .modal__content,
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
  `,v([p({attribute:!1})],_.prototype,"selection",2),v([p({attribute:!1})],_.prototype,"selectedTagIds",2),v([p({attribute:!1})],_.prototype,"sharedSelectedTagIds",2),v([p({attribute:!1})],_.prototype,"maxSelectedTags",2),v([p({attribute:!1})],_.prototype,"highlightSelectedTags",2),v([p({attribute:!1})],_.prototype,"collisionState",2),v([p({attribute:!1})],_.prototype,"collidingTagIds",2),v([p({type:Boolean})],_.prototype,"isReadOnly",2),v([p({type:Boolean,reflect:!0})],_.prototype,"compact",2),_=v([X("swt-tag-selection")],_);var At=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,re=(i,e,t,o)=>{for(var s=o>1?void 0:o?Mt(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&At(e,t,s),s};d.SwtModal=class extends ${constructor(){super(...arguments),this._isCompact=!1,this._compactMql=null,this._scrollLock=new tt({allow:()=>this.shadowRoot?.querySelector(".modal__inner")??null,from:()=>this._toolHost?.parentElement??null}),this._handleCompactChange=e=>{this._isCompact=e.matches}}get _toolHost(){const e=this.getRootNode();return e instanceof ShadowRoot?e.host:null}connectedCallback(){super.connectedCallback(),typeof window.matchMedia=="function"&&(this._compactMql=window.matchMedia($t),this._isCompact=this._compactMql.matches,this._compactMql.addEventListener("change",this._handleCompactChange))}disconnectedCallback(){this._scrollLock.set(!1),this._compactMql?.removeEventListener("change",this._handleCompactChange),this._compactMql=null,super.disconnectedCallback()}get _selectedSourceDetailRecord(){const e=this._uiModel?.selectedId;return e&&this._uiModel?.sourceDetails.find(t=>t.id===e)||null}get _dialog(){return this.shadowRoot?.querySelector("dialog")??null}get _open(){return this._uiModel?.modalOpen??!1}_resolveDependencySelectionId(e,t){const o=e.moduleId;return e.configuration.sourceDetails.find(r=>F(o,r.id)===t||r.id===t)?.selectionId??e.configuration.sourceDetailsSettings?.selectionId}_resolveDependencyTagLabel(e,t,o){const s=this._resolveDependencySelectionId(e,t);return s?(this._uiModel?.dependencyData??[]).find(a=>a.moduleType===P.Selection&&a.moduleId===s)?.configuration.tags.find(a=>a.id===o)?.value:void 0}get _clonedDataText(){if(!this._selectedSourceDetailRecord||this._selectedSourceDetailRecord.dependencyLinks.length===0)return null;const e=[];for(const t of this._selectedSourceDetailRecord.dependencyLinks)for(const o of(this._uiModel?.dependencyData??[]).filter(s=>s.moduleType===P.Swt)){const s=o.userData.sourceDetails.find(r=>r.id===t);if(s)for(const r of s.selectedTags){const a=this._resolveDependencyTagLabel(o,s.id,r.tagId)??r.tagId;e.push({tagValue:a})}}return e.length>0?e:null}get _heading(){return this._uiModel?.sourceDetailsSettings?.assignment||"No header"}updated(e){e.has("_isCompact")&&this.toggleAttribute("compact",this._isCompact);const t=this._dialog;if(!t){this._scrollLock.set(!1);return}this._open&&!t.open?t.showModal():!this._open&&t.open&&t.close(),this._scrollLock.set(this._isCompact&&this._open)}_onDialogClick(e){e.target===e.currentTarget&&this._requestClose()}_requestClose(){this.dispatchEvent(new CustomEvent("swt-modal:close",{bubbles:!0,composed:!0}))}_onDialogClose(){this._open&&this._requestClose()}renderDetail(e){return m`<img
      src=${e.source}
      alt=${e.name||e.id}
    />`}renderClonedData(e){return m`
      <div class="cloned-data__label">Vybráno v předchozím kroku:</div>
      <div class="cloned-data__list">
        ${e.map(t=>m`<span class="cloned-data__tag">${t.tagValue}</span>`)}
      </div>
    `}renderUserData(e){const t=this._uiModel?.selectedId,o=t?this._uiModel?.userData.sourceDetails.find(c=>c.id===t)?.selectedTags??[]:[],s=this._uiModel?.selections.find(c=>c.id===e?.selectionId),r=s?this._uiModel?.userData.sourceDetails.filter(c=>this._uiModel?.sourceDetails.find(u=>u.id===c.id)?.selectionId===s.id).flatMap(c=>c.selectedTags)??[]:[],a=s?.maxSelectedTags??null,l=s?.highlightSelectedTags??!0,n=e&&this._uiModel?Se(this._uiModel,e):{iconState:w.New,collidingTagIds:[]};return m`
      <swt-tag-selection
        .selection=${s??null}
        .selectedTagIds=${o}
        .sharedSelectedTagIds=${r}
        .sourceDetail=${e??""}
        .maxSelectedTags=${a}
        .highlightSelectedTags=${l}
        .collisionState=${n.iconState}
        .collidingTagIds=${n.collidingTagIds}
        .isReadOnly=${this._uiModel?.isReadOnly??!1}
        ?compact=${this._isCompact}
      ></swt-tag-selection>
    `}renderSourceDetail(e){if(e===null)return g;const t=this._clonedDataText,o=t!==null;return e.viewOnly?m`
        <div class="source-detail source-detail--view-only">
          <div class="source-detail__detail">
            ${this.renderDetail(e)}
          </div>
          ${o?m`<div class="source-detail__cloned-data">
                ${this.renderClonedData(t)}
              </div>`:g}
        </div>
      `:m`
      <div class="source-detail">
        <div class="source-detail__detail">
          ${this.renderDetail(e)}
        </div>
        ${o?m`<div class="source-detail__cloned-data">
              ${this.renderClonedData(t)}
            </div>`:g}
        <div class="source-detail__current">
          ${this.renderUserData(e)}
        </div>
      </div>
    `}render(){if(!this._open)return g;const e=this._selectedSourceDetailRecord;return m`
      <dialog @click=${this._onDialogClick} @close=${this._onDialogClose}>
        <div class="modal__inner">
          <div class="modal__header">
            <h1 class="modal__heading">${this._heading}</h1>
            <button
              class="modal__close"
              aria-label="Zavřít"
              @click=${this._requestClose}
            ></button>
          </div>

          <div class="modal__content">
            ${this.renderSourceDetail(e)}
          </div>

          <!-- Rendered only on touch, where the corner × is a small target and there is no
               visible backdrop left to click. Closes through the same path as × and backdrop.
               TODO(i18n): move to I18nDict once lang is on SwtUiModel. -->
          ${this._isCompact?m`<div class="modal__footer">
                <button class="modal__done" @click=${this._requestClose}>
                  Hotovo
                </button>
              </div>`:g}
        </div>
      </dialog>
    `}},d.SwtModal.styles=q`
    /* ── Design tokens — override from outside with CSS custom properties ── */
    :host {
      --swt-color-primary: #5352a6;
      --swt-color-secondary: #fce4e3;
      --swt-color-bg-very-dark: #1c1312;
      --swt-color-bg-dark: #a47b79;
      --swt-color-bg-light: #fdf2f2;
      --swt-color-header: hsl(2, 19%, 56%);
      --swt-color-text: #1b1313;
      /* --swt-color-text-header: black; */
      --swt-color-shadow: rgba(28, 19, 18, 0.5);
      /* Confirm-action green, borrowed from .button-ok (the exercise feedback button)
         in src/scss/base/_buttons.scss, so the sheet's Hotovo reads the same way. */
      --swt-color-confirm: #00aa58;
      --swt-color-confirm-hover: #00914b;
      --swt-font-family: 'Lato', Helvetica, Arial, sans-serif;
      --box-shadow-default: 0 0.4rem 0.8rem rgba(28, 19, 18, 0.5);

      /* ── Bottom-sheet geometry (compact/touch mode only) ──
         The proportions are derived from the sheet's MAX height rather than from a
         percentage of the parent: the sheet is height:auto, so percentages would have
         nothing definite to resolve against. clamp() only guards the extremes (small
         phones, landscape) — drop it for literal 10% / 33% / 10%. */
      --swt-sheet-max-h: 95dvh;
      --swt-sheet-radius: 18px;
      /* The floor is mostly nominal: .modal__footer is min-height, so the button plus
         its padding and the safe-area inset (~48px) already set the practical minimum. */
      --swt-sheet-footer-h: clamp(
        38px,
        calc(var(--swt-sheet-max-h) * 0.1),
        70px
      );
      --swt-sheet-image-h: clamp(
        120px,
        calc(var(--swt-sheet-max-h) * 0.33),
        360px
      );
      /* inherited across the shadow boundary into <swt-tag-selection> */
      --swt-sheet-selected-min-h: calc(var(--swt-sheet-max-h) * 0.1);

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

    .modal__inner {
      position: relative;
      padding: 1rem 3rem 3rem 3rem;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }

    .modal__close {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      width: 32px;
      height: 32px;
      border: 2px solid var(--swt-color-bg-dark); /* circle color */
      border-radius: 50%;
      /* position: relative; */
      background: transparent;
      cursor: pointer;
    }

    .modal__close:hover {
      background: var(--swt-color-bg-dark);
      /* border-color: var(--swt-color-bg-very-dark); */
    }

    .modal__close:hover::before,
    .modal__close:hover::after {
      background: var(--swt-color-bg-light);
    }

    /* the X */
    .modal__close::before,
    .modal__close::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 2px;
      background: var(--swt-color-bg-dark);
      top: 50%;
      left: 50%;
      transform-origin: center;
    }

    .modal__close::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .modal__close::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    .modal__heading {
      /* margin: 0 2rem 0.75rem 0; */
      font-size: 2rem;
      line-height: 1.2;
      font-weight: 600;
      color: var(--swt-color-header);
      font-family: var(--swt-font-family);
    }

    /* Must stay unpositioned — .modal__close is absolute and resolves against .modal__inner. */
    .modal__header {
      margin: 0 2rem 0.75rem 0;
      padding-bottom: 0.5rem;
      /* border-bottom: 2px solid var(--swt-color-primary); */
      display: flex;
      justify-content: center;
    }

    .modal__content {
      flex: 1;
      min-height: 0;
    }

    .modal__content img {
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

      :host([compact]) dialog[open] {
        animation-duration: 1ms;
      }
    }

    /* ─────────────────────────────────────────────────────────────────────────
       Compact (touch) mode — the dialog becomes a bottom sheet: it slides up from
       the bottom edge, is capped at --swt-sheet-max-h and leaves the rest of the
       screen as a tappable backdrop. The two-column grid stacks into a single
       scrolling section: detail image → cloned data → tag selection.
       Everything below is scoped to :host([compact]), set from matchMedia.
       ───────────────────────────────────────────────────────────────────────── */

    /* Sheet surface — the exercise's own $color-bg--3 (src/scss/variables/_colors.scss),
       i.e. $color-secondary darkened 38% and desaturated 62% = hsl(2, 19%, 56%).
       That is the same value as --swt-color-bg-dark above, so the sheet sits in the
       exercise's palette rather than introducing a new one.
       It is a MID tone, not a dark one: text on it stays dark (#1c1312 gives 4.9:1,
       whereas the light #fdf2f2 would only reach 3.4:1), and the scroll shadows in
       .modal__content stay dark too. */
    :host([compact]) {
      --swt-sheet-surface: var(--swt-color-bg-dark);
      /* $color-bg--4 = hsl(2, 19%, 29%), one step further down the same ladder.
         Panels nested on the surface take it: the box used to share the surface
         colour, which left its --swt-color-secondary label at 3.1:1. On this it
         reaches 8.1:1, and the white tag chips 8.9:1. */
      --swt-sheet-panel: #583d3c;
      --swt-sheet-touch-target: 44px;
    }

    :host([compact]) dialog {
      /* the UA stylesheet centres <dialog> with margin:auto — that must go */
      margin: 0;
      /* anchored to the bottom edge; the gap above it is the real ::backdrop */
      inset: auto 0 0 0;
      width: 100%;
      max-width: none;
      /* Fixed, not content-driven: the sheet always occupies --swt-sheet-max-h, so the
         footer/image proportions below are stable and a short detail (view-only pin)
         does not produce a stubby sheet. */
      height: var(--swt-sheet-max-h);
      max-height: var(--swt-sheet-max-h);
      border-radius: var(--swt-sheet-radius) var(--swt-sheet-radius) 0 0;
      /* so the rounded corners actually clip the header/footer backgrounds */
      overflow: hidden;
      background: var(--swt-sheet-surface);
      box-shadow: 0 -8px 32px var(--swt-color-shadow);
    }

    /* display may only be overridden on [open] — a bare "dialog { display: flex }"
       would beat the UA rule "dialog:not([open]) { display: none }".
       Flex (not the plain block box) is what lets .modal__inner shrink under the
       dialog's max-height: against a height:auto parent, "height: 100%" never
       resolves, so the inner grid would overflow instead of scrolling. */
    :host([compact]) dialog[open] {
      display: flex;
      flex-direction: column;
      /* [open] is added by showModal() in updated(), so this runs exactly once per
         open and is not restarted by Lit re-renders. Closing is not animated:
         render() returns nothing when closed, so the <dialog> leaves the DOM at once. */
      animation: swt-sheet-up 260ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    @keyframes swt-sheet-up {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    :host([compact]) .modal__inner {
      flex: 1 1 auto;
      min-height: 0;
      height: auto; /* the desktop base sets height: 100% */
      padding: 0;
      display: grid;
      /* header | scroller | footer — .modal__content is the sheet's only scroller */
      grid-template-rows: auto minmax(0, 1fr) auto;
    }

    :host([compact]) .modal__header {
      margin: 0;
      box-sizing: border-box;
      /* The band has to hold the --swt-sheet-touch-target close button comfortably,
         hence a min-height rather than a purely content-driven one. */
      min-height: 56px;
      /* Vertical padding only — the horizontal 0.9rem keeps the heading off the edges.
         No env(safe-area-inset-top): the sheet no longer touches the top edge. */
      padding: 0.7rem 0.9rem 0.6rem;
      display: flex;
      /* center, not flex-start: the close button is now taller than a one-line
         heading — same as .at__drawer-header in the assigning tool */
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      /* Mirrors the exercise's own #header (src/scss/cviceni/_header.scss): its
         $bg-color-1 is this very token. A light band is also the only way the
         heading gets real contrast — nothing light reaches AA on the surface. */
      background: var(--swt-color-bg-light);
    }

    :host([compact]) .modal__heading {
      margin: 0;
      min-width: 0;
      font-size: clamp(1rem, 4.2vw, 1.3rem);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

    :host([compact]) .modal__close {
      /* must stay positioned: the ::before/::after strokes drawing the × are absolute
         and would otherwise resolve against .modal__inner */
      position: relative;
      top: auto;
      right: auto;
      flex: 0 0 auto;
      box-sizing: border-box;
      width: var(--swt-sheet-touch-target);
      height: var(--swt-sheet-touch-target);
      /* Darker than the base --swt-color-bg-dark, which is too faint against the
         light header band and is the sheet surface besides. */
      border-color: var(--swt-color-header);
      touch-action: manipulation;
    }

    :host([compact]) .modal__close::before,
    :host([compact]) .modal__close::after {
      width: 18px;
      height: 2px;
      background: var(--swt-color-header);
    }

    /* Fill with the outline colour and flip the × light, as on desktop.
       :active as well, for touch devices that have no hover state. */
    :host([compact]) .modal__close:hover,
    :host([compact]) .modal__close:active {
      background: var(--swt-color-header);
    }

    :host([compact]) .modal__close:hover::before,
    :host([compact]) .modal__close:hover::after,
    :host([compact]) .modal__close:active::before,
    :host([compact]) .modal__close:active::after {
      background: var(--swt-color-bg-light);
    }

    :host([compact]) .modal__close:focus-visible {
      outline: 3px solid var(--swt-color-bg-very-dark);
      outline-offset: 2px;
    }

    /* The sheet's single scroller: image, cloned data and the tag panel scroll
       together, while the header and the Hotovo footer stay put. Nothing inside
       may scroll on its own — see the compact block in swt-tag-selection.ts. */
    :host([compact]) .modal__content {
      min-height: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      /* ScrollLock sets body { touch-action: none } while the sheet is open, so the
         scroller needs an explicit value or it cannot be panned with a finger. */
      touch-action: pan-y;
      scrollbar-width: thin;
      scrollbar-color: var(--swt-color-bg-very-dark) transparent;

      /* Scroll affordance: the two "local" gradients ride along with the content and
         uncover the two "scroll" shadows only while there is more to see — the top
         shadow appears once scrolled away from the start, the bottom one disappears
         at the end. Pure CSS, no scroll listener.
         The fades must use the surface colour at alpha 0 rather than the transparent
         keyword: Safari resolves that to transparent BLACK, which would turn the fade
         grey. hsla() is the surface's own hsl(2, 19%, 56%) with the alpha zeroed. */
      background-color: var(--swt-sheet-surface);
      background-image:
        linear-gradient(var(--swt-sheet-surface) 30%, hsla(2, 19%, 56%, 0)),
        linear-gradient(hsla(2, 19%, 56%, 0), var(--swt-sheet-surface) 70%),
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

    :host([compact]) .modal__content::-webkit-scrollbar {
      width: 6px;
    }

    :host([compact]) .modal__content::-webkit-scrollbar-track {
      background: transparent;
    }

    :host([compact]) .modal__content::-webkit-scrollbar-thumb {
      background: var(--swt-color-bg-very-dark);
      border-radius: 999px;
    }

    /* Everything in here sizes to its content and lets .modal__content do the
       scrolling — hence height: auto over the desktop base's height: 100%. */
    :host([compact]) .source-detail {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: auto;
      min-height: 0;
      /* The top padding must clear the image's halo below, or .modal__content —
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

    /* Footer is only rendered in compact mode, so it needs no :host([compact]) guard.
       min-height rather than height so the button can never be clipped on a very short
       screen; in practice the token always wins (its content is only ~70px tall).
       The upward shadow doubles as a cue that the content scrolls underneath it. */
    .modal__footer {
      box-sizing: border-box;
      min-height: var(--swt-sheet-footer-h);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0.9rem;
      padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
      background: var(--swt-sheet-surface);
      /* box-shadow: 0 -0.4rem 1rem rgba(28, 19, 18, 0.15); */
    }

    .modal__done {
      all: unset;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      /* two thirds of the footer width, centred by the footer's justify-content */
      width: 66.67%;
      min-height: 32px;
      padding: 0.4rem 1rem;
      border-radius: 999px;
      background: var(--swt-color-confirm);
      color: var(--swt-color-bg-light);
      font-family: var(--swt-font-family);
      font-size: 0.9rem;
      line-height: 1.2; /* all: unset drops it to normal */
      font-weight: 600;
      cursor: pointer;
      touch-action: manipulation;
      box-shadow: 0 0.15rem 0.4rem rgba(28, 19, 18, 0.3);
      transition:
        background-color 0.2s ease,
        box-shadow 0.2s ease;
    }

    .modal__done:hover {
      background: var(--swt-color-confirm-hover);
    }

    .modal__done:active {
      box-shadow: 0 0.05rem 0.2rem rgba(28, 19, 18, 0.35);
    }

    .modal__done:focus-visible {
      outline: 3px solid var(--swt-color-primary);
      outline-offset: 2px;
    }

    /* Landscape phones keep the very same single-scroller stack; only the tokens and the
       header shrink. --swt-sheet-footer-h re-derives itself, because both it and
       --swt-sheet-max-h are declared on the same host element. */
    @media (orientation: landscape) and (max-height: 480px) {
      :host([compact]) {
        --swt-sheet-max-h: 96dvh;
        --swt-sheet-image-h: 32dvh;
      }

      :host([compact]) .modal__header {
        min-height: 48px;
        padding: 0.35rem 0.75rem 0.25rem;
      }

      /* Still a usable target, but it may not eat a landscape phone's height. */
      :host([compact]) .modal__close {
        --swt-sheet-touch-target: 40px;
      }

      :host([compact]) .modal__heading {
        font-size: 1rem;
        -webkit-line-clamp: 2;
      }

      :host([compact]) .source-detail {
        gap: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }
  `,re([vt({context:De,subscribe:!0})],d.SwtModal.prototype,"_uiModel",2),re([Te()],d.SwtModal.prototype,"_isCompact",2),d.SwtModal=re([X("swt-modal")],d.SwtModal);var Ct=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,y=(i,e,t,o)=>{for(var s=o>1?void 0:o?Dt(e,t):e,r=i.length-1,a;r>=0;r--)(a=i[r])&&(s=(o?a(e,t,s):a(s))||s);return o&&s&&Ct(e,t,s),s};return d.SwtSelection=class extends ${constructor(){super(...arguments),this.label="",this.dependencies=[],this.tags=[],this.mode=ie.Reusable,this.selectedTagIds=[],this.sharedSelectedTagIds=[],this.isReadOnly=!1}exportState(){return{id:this.id,tags:[...this.tags],mode:this.mode,maxSelectedTags:this.maxSelectedTags,highlightSelectedTags:this.highlightSelectedTags}}_onTagClick(e){this.isReadOnly||this.dispatchEvent(new CustomEvent("swt-tag-selection:select",{detail:{tagId:e.id},bubbles:!0,composed:!0}))}render(){return this.tags.length?m`
      <div class="pool__label">Nabidka:</div>
      <div class="pool__list">
        ${this.tags.map(e=>{const t=this.selectedTagIds.includes(e.id),o=this.sharedSelectedTagIds.includes(e.id),r=["pool__tag",this.highlightSelectedTags&&(t||this.mode===ie.SingleUse&&o)?"pool__tag--selected":""].filter(Boolean).join(" ");return m`
            <button
              class=${r}
              ?disabled=${this.isReadOnly}
              @click=${()=>this._onTagClick(e)}
            >
              ${e.value}
            </button>
          `})}
      </div>
    `:g}},d.SwtSelection.styles=q`
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
  `,y([p({type:String})],d.SwtSelection.prototype,"label",2),y([p({attribute:!1})],d.SwtSelection.prototype,"dependencies",2),y([p({attribute:!1})],d.SwtSelection.prototype,"tags",2),y([p({type:String})],d.SwtSelection.prototype,"mode",2),y([p({type:Number,attribute:"max-selected-tags"})],d.SwtSelection.prototype,"maxSelectedTags",2),y([p({type:Boolean,attribute:"highlight-selected-tags"})],d.SwtSelection.prototype,"highlightSelectedTags",2),y([p({attribute:!1})],d.SwtSelection.prototype,"selectedTagIds",2),y([p({attribute:!1})],d.SwtSelection.prototype,"sharedSelectedTagIds",2),y([p({type:Boolean})],d.SwtSelection.prototype,"isReadOnly",2),d.SwtSelection=y([X("swt-selection")],d.SwtSelection),d.ColisionType=C,d.SourceDetailType=$e,d.SourceFunction=ke,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),d})({});
//# sourceMappingURL=source-work-tool.js.map
