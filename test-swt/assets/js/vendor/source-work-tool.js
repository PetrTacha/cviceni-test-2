var SourceWorkTool=(function(d){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,X=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),ie=new WeakMap;let oe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(X&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ie.set(t,e))}return e}toString(){return this.cssText}};const Ce=o=>new oe(typeof o=="string"?o:o+"",void 0,G),B=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new oe(t,o,G)},Ee=(o,e)=>{if(X)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=V.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},re=X?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ce(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oe,defineProperty:Ie,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Ue,getOwnPropertySymbols:Re,getPrototypeOf:He}=Object,$=globalThis,ae=$.trustedTypes,ze=ae?ae.emptyScript:"",Ne=$.reactiveElementPolyfillSupport,U=(o,e)=>o,q={toAttribute(o,e){switch(e){case Boolean:o=o?ze:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Q=(o,e)=>!Oe(o,e),ne={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:Q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ie(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=Pe(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const l=s?.call(this);r?.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=He(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,i=[...Ue(t),...Re(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(re(s))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:q).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:q;this._$Em=s;const l=a.fromAttribute(t,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){const a=this.constructor;if(s===!1&&(r=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Q)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:a}=r,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[U("elementProperties")]=new Map,E[U("finalized")]=new Map,Ne?.({ReactiveElement:E}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,le=o=>o,K=R.trustedTypes,ce=K?K.createPolicy("lit-html",{createHTML:o=>o}):void 0,de="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+x,je=`<${he}>`,T=document,H=()=>T.createComment(""),z=o=>o===null||typeof o!="object"&&typeof o!="function",ee=Array.isArray,Le=o=>ee(o)||typeof o?.[Symbol.iterator]=="function",te=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,ge=/>/g,A=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,fe=/"/g,_e=/^(?:script|style|textarea|title)$/i,be=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),_=be(1),b=be(2),O=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),me=new WeakMap,D=T.createTreeWalker(T,129);function we(o,e){if(!ee(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(e):e}const We=(o,e)=>{const t=o.length-1,i=[];let s,r=e===2?"<svg>":e===3?"<math>":"",a=N;for(let l=0;l<t;l++){const n=o[l];let c,u,h=-1,f=0;for(;f<n.length&&(a.lastIndex=f,u=a.exec(n),u!==null);)f=a.lastIndex,a===N?u[1]==="!--"?a=ue:u[1]!==void 0?a=ge:u[2]!==void 0?(_e.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=A):u[3]!==void 0&&(a=A):a===A?u[0]===">"?(a=s??N,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?A:u[3]==='"'?fe:pe):a===fe||a===pe?a=A:a===ue||a===ge?a=N:(a=A,s=void 0);const S=a===A&&o[l+1].startsWith("/>")?" ":"";r+=a===N?n+je:h>=0?(i.push(c),n.slice(0,h)+de+n.slice(h)+x+S):n+x+(h===-2?l:S)}return[we(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class j{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,a=0;const l=e.length-1,n=this.parts,[c,u]=We(e,t);if(this.el=j.createElement(c,i),D.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=D.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(de)){const f=u[a++],S=s.getAttribute(h).split(x),J=/([.?@])?(.*)/.exec(f);n.push({type:1,index:r,name:J[2],strings:S,ctor:J[1]==="."?Be:J[1]==="?"?qe:J[1]==="@"?Ke:Z}),s.removeAttribute(h)}else h.startsWith(x)&&(n.push({type:6,index:r}),s.removeAttribute(h));if(_e.test(s.tagName)){const h=s.textContent.split(x),f=h.length-1;if(f>0){s.textContent=K?K.emptyScript:"";for(let S=0;S<f;S++)s.append(h[S],H()),D.nextNode(),n.push({type:2,index:++r});s.append(h[f],H())}}}else if(s.nodeType===8)if(s.data===he)n.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(x,h+1))!==-1;)n.push({type:7,index:r}),h+=x.length-1}r++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function I(o,e,t=o,i){if(e===O)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl;const r=z(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=I(o,s._$AS(o,e.values),s,i)),e}class Ve{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??T).importNode(t,!0);D.currentNode=s;let r=D.nextNode(),a=0,l=0,n=i[0];for(;n!==void 0;){if(a===n.index){let c;n.type===2?c=new L(r,r.nextSibling,this,e):n.type===1?c=new n.ctor(r,n.name,n.strings,this,e):n.type===6&&(c=new Ze(r,this,e)),this._$AV.push(c),n=i[++l]}a!==n?.index&&(r=D.nextNode(),a++)}return D.currentNode=T,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),z(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Le(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=j.createElement(we(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const r=new Ve(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new j(e)),t}k(e){ee(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new L(this.O(H()),this.O(H()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=le(e).nextSibling;le(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,t=this,i,s){const r=this.strings;let a=!1;if(r===void 0)e=I(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{const l=e;let n,c;for(e=r[0],n=0;n<r.length-1;n++)c=I(this,l[i+n],t,n),c===O&&(c=this._$AH[n]),a||(a=!z(c)||c!==this._$AH[n]),c===g?e=g:e!==g&&(e+=(c??"")+r[n+1]),this._$AH[n]=c}a&&!s&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Be extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class qe extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ke extends Z{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??g)===O)return;const i=this._$AH,s=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const Ye=R.litHtmlPolyfillSupport;Ye?.(j,L),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.2");const Fe=(o,e,t)=>{const i=t?.renderBefore??e;let s=i._$litPart$;if(s===void 0){const r=t?.renderBefore??null;i._$litPart$=s=new L(e.insertBefore(H(),r),r,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis;let k=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};k._$litElement$=!0,k.finalized=!0,W.litElementHydrateSupport?.({LitElement:k});const Je=W.litElementPolyfillSupport;Je?.({LitElement:k}),(W.litElementVersions??(W.litElementVersions=[])).push("4.2.2");const Xe=B`
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

  .swt__tag-top,
  .swt__tag-bottom {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px 0 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    line-height: 1.2;
  }

  .swt__tag-top {
    background: var(--swt-tag-bg-top);
    color: var(--swt-tag-text-selected);
    font-size: var(--swt-tag-font-size);
    font-weight: 500;
    border-bottom: 1px solid var(--swt-tag-divider);
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
`,Ge=":";function ve(o,...e){if(!o)throw new Error("buildCompositeKey: moduleId must be a non-empty string");return[o,...e].join(Ge)}const ye={Swt:"swt",Selection:"selection"},Qe={SourceDetail:"swt:sourceDetail"},se={Reusable:"reusable",SingleUse:"singleUse"};var $e=(o=>(o.Text="userText",o.Tag="tag",o.Comic="comic",o.Mark="mark",o.Draw="draw",o.DescribeDetail="describeDetail",o))($e||{}),xe=(o=>(o.Selection="selection",o.UserText="userText",o))(xe||{}),M=(o=>(o.None="none",o.Warn="warn",o.Error="error",o))(M||{});const et={source:"",sourceDetails:[],functions:[]};b`
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
`;const tt=b`
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
`,st=b`
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
`,it=b`
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
`,ot=b`
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
`;var v=(o=>(o.New="new",o.Done="done",o.Warn="warn",o.Error="error",o))(v||{});function ke(o,e){const i=o.userData.sourceDetails.find(a=>a.id===e.id)?.selectedTags??[];if(i.length===0)return{iconState:"new",collidingTagIds:[]};const s=e.colisionMode??M.None;if(s===M.None)return{iconState:"done",collidingTagIds:[]};const r=new Set;for(const a of o.userData.sourceDetails){if(a.id===e.id)continue;const l=o.sourceDetails.find(n=>n.id===a.id);if(l&&l.selectionId===e.selectionId)for(const n of a.selectedTags)i.includes(n)&&r.add(n)}return r.size===0?{iconState:"done",collidingTagIds:[]}:{iconState:s===M.Error?"error":"warn",collidingTagIds:Array.from(r)}}function rt(o,e){return ke(o,e).iconState}function at(o,e){const t=o.userData.sourceDetails.find(s=>s.id===e.id)?.selectedTags??[],i=o.selections.find(s=>s.id===e.selectionId);return t.map(s=>i?.tags.find(r=>r.id===s)?.value??s)}function nt(o,e){if(e.dependencyLinks.length===0)return[];const t=[];for(const i of e.dependencyLinks)for(const s of(o.dependencyData??[]).filter(r=>r.moduleType==="swt")){const r=s.userData.sourceDetails.find(a=>a.id===i);if(r)for(const a of r.selectedTags)a.tagValue&&t.push(a.tagValue)}return t}function lt(o,e,t){return o.sourceDetails.map(i=>{const s=at(o,i),r=nt(o,i);return ct({uiModel:o,item:i,selectedTagLabels:s,previousTagLabels:r,onSelect:e,onKeydown:t})})}function ct(o){const{uiModel:e,item:t,selectedTagLabels:i,previousTagLabels:s,onSelect:r,onKeydown:a}=o,l=Number(t.position?.x??0),n=Number(t.position?.y??0),c=60,u=rt(e,t),h={[v.New]:tt,[v.Done]:st,[v.Warn]:it,[v.Error]:ot};return b`
    <g transform=${`translate(${l} ${n})`}>
      ${i.length>0||s.length>0?b`
            <foreignObject x="-5" y="-27" width="104" height="54" overflow="visible">
              <div class="swt__tag-box">
                <div class="swt__tag-top">${i[0]||""}</div>
                <div class="swt__tag-bottom">${s[0]||""}</div>
              </div>
            </foreignObject>
          `:g}
      <svg
        class="swt__pin ${""}"
        x=${-30}
        y=${-30}
        width=${c}
        height=${c}
        viewBox="0 0 1526.43 1526.43"
        role="button"
        tabindex="0"
        aria-pressed=${!1}
        aria-label=${t.name||t.id}
        overflow="visible"
        @click=${()=>r(t.id)}
        @keydown=${f=>a(f,t.id)}
      >
          <g class="swt__pin-spin">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 752.39 752.39"
              to="360 752.39 752.39"
              dur="18s"
              repeatCount="indefinite"
            />
            ${h[u]}
          </g>
      </svg>
    </g>
  `}function dt(o){const{configuration:e,uiModel:t,onSelect:i,onKeydown:s,onImgLoad:r,onModalClose:a,onTagSelect:l}=o,n=t.imgWidth>0?t.imgWidth:0,c=t.imgHeight>0?t.imgHeight:0;return _`
    <div class="swt">
      ${e.source?_`<img
            class="swt__bg-measure"
            src=${e.source}
            alt=""
            aria-hidden="true"
            @load=${r}
          />`:g}
      <svg
        class="swt__stage"
        aria-hidden="false"
        viewBox=${`0 0 ${Math.max(n,1)} ${Math.max(c,1)}`}
        preserveAspectRatio="xMinYMin meet"
      >
        ${e.source?b`<image
              class="swt__bg"
              href=${e.source}
              x="0"
              y="0"
              width=${Math.max(n,1)}
              height=${Math.max(c,1)}
              preserveAspectRatio="xMinYMin meet"
            ></image>`:g}
        <g class="swt__pins">
          ${lt(t,i,s)}
        </g>
      </svg>
      <swt-modal
        @swt-modal:close=${a}
        @swt-tag-selection:select=${u=>l(u.detail.tagId)}
      ></swt-modal>
    </div>
  `}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Q},ut=(o=ht,e,t)=>{const{kind:i,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(t.name,o),i==="accessor"){const{name:a}=t;return{set(l){const n=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,n,o,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,o,l),l}}}if(i==="setter"){const{name:a}=t;return function(l){const n=this[a];e.call(this,l),this.requestUpdate(a,n,o,!0,l)}}throw Error("Unsupported decorator location: "+i)};function p(o){return(e,t)=>typeof t=="object"?ut(o,e,t):((i,s,r)=>{const a=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),a?Object.getOwnPropertyDescriptor(s,r):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(o){return p({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Se=class extends Event{constructor(e,t,i,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At(o){return o}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Te=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const r=t;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Se(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ft=class extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};class Ae extends pt{constructor(e,t,i){super(t.context!==void 0?t.initialValue:i),this.onContextRequest=s=>{if(s.context!==this.context)return;const r=s.contextTarget??s.composedPath()[0];r!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,r,s.subscribe))},this.onProviderRequest=s=>{if(s.context!==this.context||(s.contextTarget??s.composedPath()[0])===this.host)return;const r=new Set;for(const[a,{consumerHost:l}]of this.subscriptions)r.has(a)||(r.add(a),l.dispatchEvent(new Se(this.context,l,a,!0)));s.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ft(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t({context:o}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return{get(){return e.get.call(this)},set(s){return i.get(this).setValue(s),e.set.call(this,s)},init(s){return i.set(this,new Ae(this,{context:o,initialValue:s})),s}};{e.constructor.addInitializer((a=>{i.set(a,new Ae(a,{context:o}))}));const s=Object.getOwnPropertyDescriptor(e,t);let r;if(s===void 0){const a=new WeakMap;r={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;r={...s,set(l){i.get(this).setValue(l),a?.call(this,l)}}}return void Object.defineProperty(e,t,r)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt({context:o,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer((function(){new Te(this,{context:o,callback:s=>{t.set.call(this,s)},subscribe:e})})):t.constructor.addInitializer((s=>{new Te(s,{context:o,callback:r=>{s[i]=r},subscribe:e})}))}}const De="swt-ui-model-context";class P{constructor(e){this.id=e.id,this.selectedTags=[...e.selectedTags]}hasTag(e){return this.selectedTags.includes(e)}addTag(e){return this.hasTag(e)?this:new P({id:this.id,selectedTags:[...this.selectedTags,e]})}removeTag(e){return this.hasTag(e)?new P({id:this.id,selectedTags:this.selectedTags.filter(t=>t!==e)}):this}}class F{constructor(e,t){this.id=ve(t,e.id),this.source=e.source,this.position=e.position,this.name=e.name,this.type=e.type,this.selectionId=e.selectionId,this.colisionMode=e.colisionMode,this.dependencyLinks=F.toCompositeKeys(e.dependencyLinks)}static toCompositeKeys(e){return(e??[]).map(t=>ve(t.moduleId,t.sourceDetailId))}getDependencyLinksCompositeKeys(){return this.dependencyLinks??[]}}class mt{constructor(e){this.id=e.moduleId,this.tags=e.configuration.tags,this.mode=e.configuration.mode,this.maxSelectedTags=e.configuration.maxSelectedTags??0,this.highlightSelectedTags=e.configuration.highlightSelectedTags??!1}}var wt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,C=(o,e,t,i)=>{for(var s=i>1?void 0:i?vt(e,t):e,r=o.length-1,a;r>=0;r--)(a=o[r])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wt(e,t,s),s};d.SourceWorkTool=class extends k{constructor(){super(),this.exportVersion=1,this.configuration={...et},this.dependencyData=[],this.userData={},this.lang="cs",this.readOnly=!1,this._uiModel={...d.SourceWorkTool._EMPTY_UI_MODEL},this._rebuildRecords()}_setUiModel(e){this._uiModel={...this._uiModel,...e}}_rebuildRecords(){const e=this.configuration.moduleId??"local",t=this.configuration.sourceDetailsSettings,i=this.configuration.sourceDetails.map(r=>{if(!t)return new F({...r,colisionMode:r.colisionMode??M.None},e);const a={...r,name:r.name??t.name,type:r.type??t.type,selectionId:r.selectionId??t.selectionId,colisionMode:r.colisionMode??t.colisionMode??M.None};return new F(a,e)}),s=(this.dependencyData??[]).filter(r=>r.moduleType===ye.Selection).map(r=>new mt(r));this._uiModel={...this._uiModel,sourceDetailsSettings:this.configuration.sourceDetailsSettings,selections:s,sourceDetails:i,dependencyData:this.dependencyData??[]}}_handleSelect(e){const t=this._uiModel.selectedId===e?null:e;this._setUiModel({selectedId:t,modalOpen:t!==null})}_handleKeydown(e,t){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleSelect(t))}_handleModalClose(){this._setUiModel({selectedId:null,modalOpen:!1}),this.dispatchEvent(new CustomEvent("swt:change",{bubbles:!0,composed:!0,detail:{exportModule:this.exportModule()}}))}_resolveTagValue(e,t){return this._uiModel.selections.find(s=>s.id===e)?.tags.find(s=>s.id===t)?.value}_handleTagSelect(e){const t=this._uiModel.selectedId;if(!t)return;const s=this._uiModel.userData.sourceDetails.find(f=>f.id===t)??new P({id:t,selectedTags:[]}),r=s.selectedTags,a=r.includes(e),l=this._uiModel.sourceDetails.find(f=>f.id===t),c=this._uiModel.selections.find(f=>f.id===l?.selectionId)?.maxSelectedTags;let u;a?u=s.removeTag(e):c===1?u=new P({id:t,selectedTags:[e]}):typeof c=="number"&&c>0&&r.length>=c?u=s:u=s.addTag(e);const h=this._uiModel.userData.sourceDetails.filter(f=>f.id!==t);u.selectedTags.length>0&&h.push(u),this._setUiModel({userData:{sourceDetails:h}})}_handleImgLoad(e){const t=e.target;this._setUiModel({imgWidth:t.naturalWidth,imgHeight:t.naturalHeight})}updated(){if(this._uiModel.imgWidth>0)return;const e=this.shadowRoot?.querySelector(".swt__bg");e?.complete&&e.naturalWidth>0&&this._setUiModel({imgWidth:e.naturalWidth,imgHeight:e.naturalHeight})}willUpdate(e){if(e.has("configuration")&&this._rebuildRecords(),e.has("dependencyData")&&this._setUiModel({dependencyData:this.dependencyData??[]}),e.has("userData")){const t=(this.userData?.sourceDetails??[]).map(i=>new P({id:i.id,selectedTags:i.selectedTags.map(s=>s.tagId)}));this._setUiModel({userData:{sourceDetails:t}})}e.has("readOnly")&&this._setUiModel({isReadOnly:this.readOnly})}exportUserData(){return{sourceDetails:this._uiModel.userData.sourceDetails.map(t=>{const i=this._uiModel.sourceDetails.find(s=>s.id===t.id);return{id:t.id,recordType:Qe.SourceDetail,selectedTags:t.selectedTags.map(s=>({tagId:s,tagValue:i?.selectionId?this._resolveTagValue(i.selectionId,s):void 0}))}})}}exportModule(){const e=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:e,configuration:{...this.configuration},moduleType:ye.Swt,updatedAt:new Date().toISOString(),userData:this.exportUserData()}}render(){return dt({configuration:this.configuration,uiModel:this._uiModel,imgWidth:this._uiModel.imgWidth,imgHeight:this._uiModel.imgHeight,selectedId:this._uiModel.selectedId,onSelect:e=>this._handleSelect(e),onKeydown:(e,t)=>this._handleKeydown(e,t),onImgLoad:e=>this._handleImgLoad(e),onModalClose:()=>this._handleModalClose(),onTagSelect:e=>this._handleTagSelect(e)})}},d.SourceWorkTool.styles=Xe,d.SourceWorkTool._EMPTY_UI_MODEL={sourceDetails:[],selections:[],dependencyData:[],isReadOnly:!1,reviewData:[],userData:{sourceDetails:[]},selectedId:null,modalOpen:!1,imgWidth:0,imgHeight:0},C([p({attribute:!1})],d.SourceWorkTool.prototype,"configuration",2),C([p({attribute:!1})],d.SourceWorkTool.prototype,"dependencyData",2),C([p({attribute:!1})],d.SourceWorkTool.prototype,"userData",2),C([p({attribute:"data-lang"})],d.SourceWorkTool.prototype,"lang",2),C([p({type:Boolean,reflect:!0})],d.SourceWorkTool.prototype,"readOnly",2),C([_t({context:De}),gt()],d.SourceWorkTool.prototype,"_uiModel",2),d.SourceWorkTool=C([Y("source-work-tool")],d.SourceWorkTool);var yt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,y=(o,e,t,i)=>{for(var s=i>1?void 0:i?$t(e,t):e,r=o.length-1,a;r>=0;r--)(a=o[r])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yt(e,t,s),s};let m=class extends k{constructor(){super(...arguments),this.selection=null,this.selectedTagIds=[],this.sharedSelectedTagIds=[],this.maxSelectedTags=null,this.highlightSelectedTags=!0,this.collisionState=v.New,this.collidingTagIds=[],this.isReadOnly=!1}_onTagClick(o){this.isReadOnly||this.dispatchEvent(new CustomEvent("swt-tag-selection:select",{detail:{tagId:o.id},bubbles:!0,composed:!0}))}_renderSelected(){const o=this.selectedTagIds.map(e=>this.selection?.tags.find(t=>t.id===e)).filter(e=>e!==void 0);return _` <div class="tag-selection__label">Vybrane atributy:</div>
      <div class="tag-selection__list">
        ${o?.map(e=>{const t=this.collidingTagIds.includes(e.id),i=["tag-selection__tag","tag-selection__tag--removable",t&&this.collisionState===v.Warn?"tag-selection__tag--collision-warn":"",t&&this.collisionState===v.Error?"tag-selection__tag--collision-error":""].filter(Boolean).join(" ");return _`<span class=${i}>
            ${e.value}
            <button
              class="tag-selection__tag-remove-btn"
              aria-label="Odebrat ${e.value}"
              ?disabled=${this.isReadOnly}
              @click=${()=>this._onTagClick(e)}
            ></button>
          </span>`})}
      </div>`}render(){return this.selection?.tags.length?_`
      <div class="tag-selection">
        <div class="tag-selection__selected box-with-tags">
          ${this._renderSelected()}
        </div>
        <div class="tag-selection__pool box-with-tags">
          <div class="tag-selection__label">Nabidka:</div>
          <div class="tag-selection__list">
            ${this.selection.tags.map(o=>{const e=this.selectedTagIds.includes(o.id),t=this.sharedSelectedTagIds.includes(o.id),s=["tag-selection__tag",this.highlightSelectedTags&&(e||this.selection?.mode===se.SingleUse&&t)?"tag-selection__tag--selected":""].filter(Boolean).join(" ");return _`
                <button
                  class=${s}
                  ?disabled=${this.isReadOnly}
                  @click=${()=>this._onTagClick(o)}
                >
                  ${o.value}
                </button>
              `})}
          </div>
        </div>
      </div>
    `:g}};m.styles=B`
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
  `,y([p({attribute:!1})],m.prototype,"selection",2),y([p({attribute:!1})],m.prototype,"selectedTagIds",2),y([p({attribute:!1})],m.prototype,"sharedSelectedTagIds",2),y([p({attribute:!1})],m.prototype,"maxSelectedTags",2),y([p({attribute:!1})],m.prototype,"highlightSelectedTags",2),y([p({attribute:!1})],m.prototype,"collisionState",2),y([p({attribute:!1})],m.prototype,"collidingTagIds",2),y([p({type:Boolean})],m.prototype,"isReadOnly",2),m=y([Y("swt-tag-selection")],m);var xt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Me=(o,e,t,i)=>{for(var s=i>1?void 0:i?kt(e,t):e,r=o.length-1,a;r>=0;r--)(a=o[r])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xt(e,t,s),s};d.SwtModal=class extends k{get _selectedSourceDetailRecord(){const e=this._uiModel?.selectedId;return e&&this._uiModel?.sourceDetails.find(t=>t.id===e)||null}get _dialog(){return this.shadowRoot?.querySelector("dialog")??null}get _open(){return this._uiModel?.modalOpen??!1}get _clonedDataText(){if(!this._selectedSourceDetailRecord||this._selectedSourceDetailRecord.dependencyLinks.length===0)return null;const e=[];for(const t of this._selectedSourceDetailRecord.dependencyLinks)for(const i of(this._uiModel?.dependencyData??[]).filter(s=>s.moduleType==="swt")){const s=i.userData.sourceDetails.find(r=>r.id===t);if(s)for(const r of s.selectedTags)r.tagValue&&e.push({tagValue:r.tagValue})}return e.length>0?e:null}get _heading(){return this._uiModel?.sourceDetailsSettings.assignment||"No header"}updated(){const e=this._dialog;e&&(this._open&&!e.open?e.showModal():!this._open&&e.open&&e.close())}_onDialogClick(e){e.target===e.currentTarget&&this._requestClose()}_requestClose(){this.dispatchEvent(new CustomEvent("swt-modal:close",{bubbles:!0,composed:!0}))}renderDetail(e){return _`<img
      src=${e.source}
      alt=${e.name||e.id}
    />`}renderClonedData(e){return _`
      <div class="cloned-data__label">Vybráno v předchozím kroku:</div>
      <div class="cloned-data__list">
        ${e.map(t=>_`<span class="cloned-data__tag">${t.tagValue}</span>`)}
      </div>
    `}renderUserData(e){const t=this._uiModel?.selectedId,i=t?this._uiModel?.userData.sourceDetails.find(c=>c.id===t)?.selectedTags??[]:[],s=this._uiModel?.selections.find(c=>c.id===e?.selectionId),r=s?this._uiModel?.userData.sourceDetails.filter(c=>this._uiModel?.sourceDetails.find(h=>h.id===c.id)?.selectionId===s.id).flatMap(c=>c.selectedTags)??[]:[],a=s?.maxSelectedTags??null,l=s?.highlightSelectedTags??!0,n=e&&this._uiModel?ke(this._uiModel,e):{iconState:v.New,collidingTagIds:[]};return _`
      <swt-tag-selection
        .selection=${s??null}
        .selectedTagIds=${i}
        .sharedSelectedTagIds=${r}
        .sourceDetail=${e??""}
        .maxSelectedTags=${a}
        .highlightSelectedTags=${l}
        .collisionState=${n.iconState}
        .collidingTagIds=${n.collidingTagIds}
        .isReadOnly=${this._uiModel?.isReadOnly??!1}
      ></swt-tag-selection>
    `}renderSourceDetail(e){if(e===null)return g;const t=this._clonedDataText,i=t!==null;return _`
      <div class="source-detail">
        <div class="source-detail__current">
          ${this.renderUserData(e)}
        </div>
        <div class="source-detail__detail">
          ${this.renderDetail(e)}
        </div>
        ${i?_`<div class="source-detail__cloned-data">
              ${this.renderClonedData(t)}
            </div>`:g}
      </div>
    `}render(){if(!this._open)return g;const e=this._selectedSourceDetailRecord;return _`
      <dialog @click=${this._onDialogClick}>
        <div class="modal__inner">
          <button
            class="modal__close"
            aria-label="Zavřít"
            @click=${this._requestClose}
          >
            <span></span>
          </button>

          <div class="modal__header">
            <h1 class="modal__heading">${this._heading}</h1>
          </div>

          <div class="modal__content">
            ${this.renderSourceDetail(e)}
          </div>
        </div>
      </dialog>
    `}},d.SwtModal.styles=B`
    /* ── Design tokens — override from outside with CSS custom properties ── */
    :host {
      --swt-color-primary: #5352a6;
      --swt-color-secondary: #fce4e3;
      --swt-color-bg-very-dark: #1c1312;
      --swt-color-bg-dark: #a47b79;
      --swt-color-bg-light: #fdf2f2;
      --swt-color-header: #1c1312;
      --swt-color-text: #1b1313;
      /* --swt-color-text-header: black; */
      --swt-color-shadow: rgba(28, 19, 18, 0.5);
      --swt-font-family: 'Lato', Helvetica, Arial, sans-serif;
      --box-shadow-default: 0 0.4rem 0.8rem rgba(28, 19, 18, 0.5);
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

    .cloned-data__tag[data-description]::after {
      content: attr(data-description);
      position: absolute;
      bottom: calc(100% + 6px);
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.75);
      color: #fff;
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .cloned-data__tag[data-description]:hover::after {
      opacity: 1;
    }
  `,Me([bt({context:De,subscribe:!0})],d.SwtModal.prototype,"_uiModel",2),d.SwtModal=Me([Y("swt-modal")],d.SwtModal);var St=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,w=(o,e,t,i)=>{for(var s=i>1?void 0:i?Tt(e,t):e,r=o.length-1,a;r>=0;r--)(a=o[r])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&St(e,t,s),s};return d.SwtSelection=class extends k{constructor(){super(...arguments),this.label="",this.dependencies=[],this.tags=[],this.mode=se.Reusable,this.selectedTagIds=[],this.sharedSelectedTagIds=[],this.isReadOnly=!1}exportState(){return{id:this.id,tags:[...this.tags],mode:this.mode,maxSelectedTags:this.maxSelectedTags,highlightSelectedTags:this.highlightSelectedTags}}_onTagClick(e){this.isReadOnly||this.dispatchEvent(new CustomEvent("swt-tag-selection:select",{detail:{tagId:e.id},bubbles:!0,composed:!0}))}render(){return this.tags.length?_`
      <div class="pool__label">Nabidka:</div>
      <div class="pool__list">
        ${this.tags.map(e=>{const t=this.selectedTagIds.includes(e.id),i=this.sharedSelectedTagIds.includes(e.id),r=["pool__tag",this.highlightSelectedTags&&(t||this.mode===se.SingleUse&&i)?"pool__tag--selected":""].filter(Boolean).join(" ");return _`
            <button
              class=${r}
              ?disabled=${this.isReadOnly}
              @click=${()=>this._onTagClick(e)}
            >
              ${e.value}
            </button>
          `})}
      </div>
    `:g}},d.SwtSelection.styles=B`
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
  `,w([p({type:String})],d.SwtSelection.prototype,"label",2),w([p({attribute:!1})],d.SwtSelection.prototype,"dependencies",2),w([p({attribute:!1})],d.SwtSelection.prototype,"tags",2),w([p({type:String})],d.SwtSelection.prototype,"mode",2),w([p({type:Number,attribute:"max-selected-tags"})],d.SwtSelection.prototype,"maxSelectedTags",2),w([p({type:Boolean,attribute:"highlight-selected-tags"})],d.SwtSelection.prototype,"highlightSelectedTags",2),w([p({attribute:!1})],d.SwtSelection.prototype,"selectedTagIds",2),w([p({attribute:!1})],d.SwtSelection.prototype,"sharedSelectedTagIds",2),w([p({type:Boolean})],d.SwtSelection.prototype,"isReadOnly",2),d.SwtSelection=w([Y("swt-selection")],d.SwtSelection),d.ColisionType=M,d.SourceDetailType=xe,d.SourceFunction=$e,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),d})({});
//# sourceMappingURL=source-work-tool.js.map
