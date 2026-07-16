var AssigningTool=(function(m){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,K=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),J=new WeakMap;let Q=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(e,t))}return t}toString(){return this.cssText}};const ft=a=>new Q(typeof a=="string"?a:a+"",void 0,q),bt=(a,...t)=>{const e=a.length===1?a[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[r+1],a[0]);return new Q(e,a,q)},vt=(a,t)=>{if(K)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,a.appendChild(s)}},tt=K?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:$t,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:At,getPrototypeOf:St}=Object,b=globalThis,et=b.trustedTypes,Et=et?et.emptyScript:"",Tt=b.reactiveElementPolyfillSupport,k=(a,t)=>a,R={toAttribute(a,t){switch(t){case Boolean:a=a?Et:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},W=(a,t)=>!yt(a,t),st={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&$t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=xt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const l=i?.call(this);r?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,s=[...wt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(tt(i))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:R;this._$Em=i;const l=o.fromAttribute(e,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){const o=this.constructor;if(i===!1&&(r=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??W)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s){const{wrapped:o}=r,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[k("elementProperties")]=new Map,S[k("finalized")]=new Map,Tt?.({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,it=a=>a,N=P.trustedTypes,at=N?N.createPolicy("lit-html",{createHTML:a=>a}):void 0,rt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+v,kt=`<${ot}>`,$=document,C=()=>$.createComment(""),I=a=>a===null||typeof a!="object"&&typeof a!="function",Y=Array.isArray,Pt=a=>Y(a)||typeof a?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,lt=/>/g,x=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ct=/"/g,ht=/^(?:script|style|textarea|title)$/i,Ct=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),g=Ct(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,w=$.createTreeWalker($,129);function gt(a,t){if(!Y(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}const It=(a,t)=>{const e=a.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=D;for(let l=0;l<e;l++){const n=a[l];let c,d,h=-1,u=0;for(;u<n.length&&(o.lastIndex=u,d=o.exec(n),d!==null);)u=o.lastIndex,o===D?d[1]==="!--"?o=nt:d[1]!==void 0?o=lt:d[2]!==void 0?(ht.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=x):d[3]!==void 0&&(o=x):o===x?d[0]===">"?(o=i??D,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?x:d[3]==='"'?ct:dt):o===ct||o===dt?o=x:o===nt||o===lt?o=D:(o=x,i=void 0);const _=o===x&&a[l+1].startsWith("/>")?" ":"";r+=o===D?n+kt:h>=0?(s.push(c),n.slice(0,h)+rt+n.slice(h)+v+_):n+v+(h===-2?l:_)}return[gt(a,r+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const l=t.length-1,n=this.parts,[c,d]=It(t,e);if(this.el=O.createElement(c,s),w.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=w.nextNode())!==null&&n.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(rt)){const u=d[o++],_=i.getAttribute(h).split(v),y=/([.?@])?(.*)/.exec(u);n.push({type:1,index:r,name:y[2],strings:_,ctor:y[1]==="."?Ot:y[1]==="?"?Ut:y[1]==="@"?zt:L}),i.removeAttribute(h)}else h.startsWith(v)&&(n.push({type:6,index:r}),i.removeAttribute(h));if(ht.test(i.tagName)){const h=i.textContent.split(v),u=h.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let _=0;_<u;_++)i.append(h[_],C()),w.nextNode(),n.push({type:2,index:++r});i.append(h[u],C())}}}else if(i.nodeType===8)if(i.data===ot)n.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(v,h+1))!==-1;)n.push({type:7,index:r}),h+=v.length-1}r++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function T(a,t,e=a,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const r=I(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(a),i._$AT(a,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=T(a,i._$AS(a,t.values),i,s)),t}class Dt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??$).importNode(e,!0);w.currentNode=i;let r=w.nextNode(),o=0,l=0,n=s[0];for(;n!==void 0;){if(o===n.index){let c;n.type===2?c=new U(r,r.nextSibling,this,t):n.type===1?c=new n.ctor(r,n.name,n.strings,this,t):n.type===6&&(c=new Mt(r,this,t)),this._$AV.push(c),n=s[++l]}o!==n?.index&&(r=w.nextNode(),o++)}return w.currentNode=$,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),I(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(gt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const r=new Dt(i,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new O(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new U(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=it(t).nextSibling;it(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=T(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const l=t;let n,c;for(t=r[0],n=0;n<r.length-1;n++)c=T(this,l[s+n],e,n),c===E&&(c=this._$AH[n]),o||(o=!I(c)||c!==this._$AH[n]),c===p?t=p:t!==p&&(t+=(c??"")+r[n+1]),this._$AH[n]=c}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ut extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class zt extends L{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??p)===E)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const jt=P.litHtmlPolyfillSupport;jt?.(O,U),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.2");const Ht=(a,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const r=e?.renderBefore??null;s._$litPart$=i=new U(t.insertBefore(C(),r),r,void 0,e??{})}return i._$AI(a),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis;class M extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}M._$litElement$=!0,M.finalized=!0,z.litElementHydrateSupport?.({LitElement:M});const Rt=z.litElementPolyfillSupport;Rt?.({LitElement:M}),(z.litElementVersions??(z.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=a=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:W},Vt=(a=Lt,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((a=Object.create(a)).wrapped=!0),r.set(e.name,a),s==="accessor"){const{name:o}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,n,a,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,a,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const n=this[o];t.call(this,l),this.requestUpdate(o,n,a,!0,l)}}throw Error("Unsupported decorator location: "+s)};function j(a){return(t,e)=>typeof e=="object"?Vt(a,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(a,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(a){return j({...a,state:!0,attribute:!1})}const Bt=bt`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  :host {
    --at-color-bg: #f5f1ea;
    --at-color-panel: #ffffff;
    --at-color-panel-soft: #f3ede4;
    --at-color-border: #d8cdbd;
    --at-color-text: #1d1a17;
    --at-color-muted: #6f665b;
    --at-color-accent: #b45f06;
    --at-color-accent-strong: #8f4a05;
    --at-color-accent-soft: rgba(180, 95, 6, 0.12);
    --at-shadow: 0 12px 32px rgba(45, 35, 22, 0.12);
    --at-radius: 18px;
    --at-font-family: 'Lato', Helvetica, Arial, sans-serif;
    --at-card-width: 300px;
    --at-image-slot-height: 300px;

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
    grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
    gap: 1rem;
    align-items: start;
  }

  .at__panel {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid var(--at-color-border);
    border-radius: var(--at-radius);
    overflow: visible;
    min-width: 0;
  }

  .at__panel-header {
    padding: 0.9rem 1rem 0.8rem;
    border-bottom: 1px solid rgba(216, 205, 189, 0.75);
    border-radius: var(--at-radius) var(--at-radius) 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 243, 236, 0.95)); */
  }

  .at__progress-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.3rem 0.7rem 0.3rem 0.5rem;
    border-radius: 999px;
    background: rgba(180, 95, 6, 0.08);
    border: 1px solid rgba(180, 95, 6, 0.25);
    color: rgba(140, 70, 0, 0.9);
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    white-space: nowrap;
  }

  .at__progress-badge--done {
    background: rgba(34, 139, 68, 0.09);
    border-color: rgba(34, 139, 68, 0.3);
    color: rgba(22, 101, 48, 0.95);
  }

  .at__progress-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: rgba(180, 95, 6, 0.15);
    font-size: 0.78rem;
    font-weight: 700;
    color: rgba(140, 70, 0, 0.95);
    transition: background 0.2s ease, color 0.2s ease;
  }

  .at__progress-badge--done .at__progress-icon {
    background: rgba(34, 139, 68, 0.15);
    color: rgba(22, 101, 48, 0.95);
  }

  .at__progress-text {
    font-size: 0.78rem;
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
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: var(--at-color-muted);
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .at__reset-btn:hover {
    background: rgba(180, 95, 6, 0.09);
    color: var(--at-color-accent);
  }

  .at__reset-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: transparent;
    color: var(--at-color-muted);
  }

  .at__reset-icon {
    display: inline-flex;
    transition: transform 0.2s ease;
  }

  .at__reset-btn:hover .at__reset-icon {
    transform: rotate(-30deg);
  }

  .at__reset-btn:active .at__reset-icon {
    transform: rotate(-180deg);
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
    margin: 0 0 0.2rem;
    color: var(--at-color-accent);
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
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

  .at__board,
  .at__selections {
    padding: 1rem;
  }

  .at__board {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    /* height: 100%; */
    /* align-items: center;
    align-content: center;
    justify-content: center; */
    /* position: relative; */
  }

  .at-card {
    /* align-self: center; */
    /* flex: 0 0 300px; */
    width: calc(var(--at-card-width) + 2 * 8px);
    border: 1px solid rgba(216, 205, 189, 0.95);
    border-radius: 16px;
    background: #ffffff;
    overflow: visible;
    position: relative;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border: solid 8px rgba(255, 255, 255, 1);
    transition: opacity 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
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
    padding-bottom: 0.8rem;
    font-size: 0.95rem;
    font-weight: 300;
    color: var(--at-color-muted);

    padding-left: 1rem;
    display: flex;
    justify-content: center;
  }

  .at-card__body {
    display: grid;
    gap: 0.75rem;
    padding: 0rem;
  }

  .at-card__slot-list {
    display: grid;
    gap: 0.75rem;
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
    padding: 0.5rem 0.65rem;
  }

  .at-static-item--image {
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 300px;
    padding: 0;
    overflow: hidden;
    border-radius: 14px;
    /* background: rgba(0, 0, 0, 0.03); */
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
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .at-slot__button:focus-visible,
  .at-selection__tag:focus-visible {
    outline: 3px solid rgba(180, 95, 6, 0.28);
    outline-offset: 2px;
  }

  .at-slot__placeholder {
    display: block;
    color: var(--at-color-muted);
    font-size: 0.88rem;
    line-height: 1.35;
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
    font-size: 1rem;
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
    background: #fff;
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
    max-width: 148px;
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
    background: rgba(180, 95, 6, 0.08);
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
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(0.9rem, 2.5vw, 2rem);
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

  @media (max-width: 860px) {
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
`,_t="assigning";function Kt(a,t){for(const e of a){const s=e.configuration.tags.find(i=>i.id===t);if(s)return s.value}return t}function Z(a){return/^data:image\//i.test(a)||/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(a)}function qt(a){const{value:t,type:e,onOpenImagePreview:s}=a;return e==="image"?g`
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
    `:g`<span class="at-static-item at-static-item--tag">${t}</span>`}function Wt(a){const{dependencyData:t,assignmentId:e,slotId:s,slotType:i,tagId:r,readOnly:o,onSlotClear:l}=a,n=Kt(t,r),c=i==="image"&&Z(n);return g`
    <span class="at-slot__value">
      ${c?g`<img class="at-slot__value-image" src=${n} alt="Vybraný obrázek" loading="lazy" />`:n}
      ${o?p:g`<button
            class="at-slot__value-remove-btn"
            aria-label="Odebrat tag"
            @click=${d=>{d.stopPropagation(),l(e,s)}}
          ></button>`}
    </span>
  `}function Yt(a){const{assignmentId:t,slotId:e,slotType:s,isStatic:i,staticItems:r,slotLabel:o,slotKey:l,slotValue:n,dependencyData:c,readOnly:d,onOpenImagePreview:h,onSlotClear:u}=a,_=["at-slot-active",i?"at-slot--static":"",i?"":"at-slot--active"].filter(Boolean).join(" ");if(i)return g`
      <div class=${_} data-slot-key=${l} aria-label=${o}>
        <!-- <div class="at-slot__button at-slot__button--static"> -->
          <div class="at-slot__static-content">
            ${r.length?r.map(B=>qt({value:B,type:s,onOpenImagePreview:h})):g`<span class="at-slot__placeholder">${o}</span>`}
          </div>
        <!-- </div> -->
      </div>
    `;const y=n?Wt({dependencyData:c,assignmentId:t,slotId:e,slotType:s,tagId:n,readOnly:d,onSlotClear:u}):g`<span class="at-slot__placeholder">${o}</span>`;return g`
    <div class=${_} data-slot-key=${l}>
      <div
        class="at-slot__button"
        data-assignment-id=${t}
        data-slot-id=${e}
      >
        ${y}
        ${p}
      </div>
    </div>
  `}function Ft(a){const{assignment:t,state:e,dependencyData:s,readOnly:i,onOpenImagePreview:r,onSlotClear:o}=a;return g`
    <article class="at-card" data-assignment-id=${t.id}>
      <div class="at-card__id">Anticka helma</div>
      <div class="at-card__body">
        <!-- <div class="at-card__slot-list"> -->
          ${t.slotDefinitions.map(l=>{const n=`${t.id}::${l.id}`,c=e.slotValues[n],d=l.static?`${l.type==="image"?"Static image":"Static tag"} ${l.id}`:"+ Přiřaďte sem tag z nabídky ";return Yt({assignmentId:t.id,slotId:l.id,slotType:l.type,isStatic:!!l.static,staticItems:l.items??[],slotLabel:d,slotKey:n,slotValue:c,dependencyData:s,readOnly:i,onOpenImagePreview:r,onSlotClear:o})})}
        <!-- </div> -->
      </div>
    </article>
  `}function Zt(a){const{selectionId:t,tag:e,readOnly:s,isUsed:i,onTagPointerDown:r,onTagPointerMove:o,onTagPointerUp:l,onTagPointerCancel:n}=a,c=["at-selection__tag",Z(e.value)?"at-selection__tag--image":"",s?"at-selection__tag--readonly":"",i?"at-selection__tag--used":""].filter(Boolean).join(" ");return g`
    <div
      class=${c}
      data-selection-id=${t}
      @pointerdown=${d=>{s||r(d,e.id)}}
      @pointermove=${d=>{s||o(d)}}
      @pointerup=${d=>{s||l(d)}}
      @pointercancel=${d=>{s||n(d)}}
    >
      ${Z(e.value)?g`<img class="at-selection__tag-image" src=${e.value} alt="Nabízený obrázek" loading="lazy" />`:e.value}
    </div>
  `}function Xt(a){const{selection:t,readOnly:e,usedTagIds:s,onTagPointerDown:i,onTagPointerMove:r,onTagPointerUp:o,onTagPointerCancel:l}=a;return g`
    <section class="at-selection-section">
      <!-- <h3 class="at-selection-section__title">${t.moduleId}</h3> -->
      <div class="at-selection-list">
        ${t.configuration.tags.map(n=>Zt({selectionId:t.moduleId,tag:n,readOnly:e,isUsed:s.has(n.id),onTagPointerDown:i,onTagPointerMove:r,onTagPointerUp:o,onTagPointerCancel:l}))}
      </div>
    </section>
  `}function Gt(a){const{configuration:t,dependencyData:e,state:s,readOnly:i,usedTagIds:r,previewImageUrl:o,onTagPointerDown:l,onTagPointerMove:n,onTagPointerUp:c,onTagPointerCancel:d,onOpenImagePreview:h,onCloseImagePreview:u,onSlotClear:_,onReset:y}=a,V=t.assignments.length,B=t.assignments.filter(f=>{const mt=f.slotDefinitions.filter(G=>!G.static);return mt.length>0&&mt.every(G=>!!s.slotValues[`${f.id}::${G.id}`])}).length,X=V>0&&B===V;return g`
      <div class="at__layout">
        <section class="at__panel">
          <header class="at__panel-header">
            <p class="at__eyebrow">Přiřazování</p>
            <!-- <h2 class="at__title">${t.moduleId??"assigning-tool"}</h2> -->
            <div class="at__progress-badge ${X?"at__progress-badge--done":""}">
              <span class="at__progress-icon">${X?"✓":B}</span>
              <span class="at__progress-text">${X?"Vše přiřazeno":g`/ ${V}`}</span>
            </div>
          </header>
          <div class="at__board">
            ${t.assignments.map(f=>Ft({assignment:f,state:s,dependencyData:e,readOnly:i,onOpenImagePreview:h,onSlotClear:_}))}
          </div>
        </section>

        <section class="at__panel">
          <header class="at__panel-header">
            <p class="at__eyebrow">Výběr</p>
            <!-- <h2 class="at__title">Dependency tags</h2>
            <p class="at__subtitle">Click, hold, drag, and drop to a card slot.</p> -->
            <button
              class="at__reset-btn"
              aria-label="Resetovat výběr"
              ?disabled=${i}
              @click=${y}
            >
              <span class="at__reset-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
                  <path d="M3.5 10a6.5 6.5 0 1 0 1.08-3.6"/>
                  <polyline points="1 4.5 3.5 7 6 4.5"/>
                </svg>
              </span>
              <span class="at__reset-tooltip">Resetovat všechna přiřazení</span>
            </button>
          </header>

          <div class="at__selections">
            ${e.length?e.map(f=>Xt({selection:f,readOnly:i,usedTagIds:r,onTagPointerDown:l,onTagPointerMove:n,onTagPointerUp:c,onTagPointerCancel:d})):g`<div class="at__empty">No dependency selection data was provided.</div>`}
          </div>
        </section>
      </div>
      ${o?g`
            <div
              class="at__modal-overlay"
              role="presentation"
              @click=${f=>{f.target===f.currentTarget&&u()}}
            >
              <div class="at__modal" role="dialog" aria-modal="true" aria-label="Detail obrázku">
                <button
                  type="button"
                  class="at__modal-close-btn"
                  aria-label="Zavřít detail obrázku"
                  @click=${u}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <img class="at__modal-image" src=${o} alt="Detail obrázku" loading="lazy" />
              </div>
            </div>
          `:p}
  `}var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,A=(a,t,e,s)=>{for(var i=s>1?void 0:s?Qt(t,e):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Jt(t,e,i),i};return m.AssigningTool=class extends M{constructor(){super(),this.exportVersion=1,this._dragTargetSlotEl=null,this._dragTargetCardEl=null,this._currentDragTagId=null,this._dragSourceEl=null,this._ghost=null,this._handleWindowKeyDown=t=>{t.key==="Escape"&&this._previewImageUrl&&(t.preventDefault(),this._closeImagePreview())},this.configuration={moduleId:"assigning-local",moduleType:_t,dependencies:[],viewSettings:{},assignments:[]},this.dependencyData=[],this.userData={assignments:[]},this.readOnly=!1,this._state={slotValues:{}},this._previewImageUrl=null}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._handleWindowKeyDown)}disconnectedCallback(){window.removeEventListener("keydown",this._handleWindowKeyDown),super.disconnectedCallback()}_slotKey(t,e){return`${t}::${e}`}_rebuildState(){const t={};for(const e of this.userData.assignments??[])for(const s of e.slots)s.tagId&&(t[this._slotKey(e.id,s.slotId)]=s.tagId);this._state={slotValues:t}}_emitChange(){this.dispatchEvent(new CustomEvent("assigning-tool:change",{bubbles:!0,composed:!0,detail:{exportModule:this.exportModule()}}))}_assignTag(t,e,s){if(this.readOnly)return;const i=this._slotKey(t,e);this._state={slotValues:{...this._state.slotValues,[i]:s}},this.requestUpdate(),this._emitChange()}_clearSlot(t,e){if(this.readOnly)return;const s=this._slotKey(t,e),i={...this._state.slotValues};delete i[s],this._state={slotValues:i},this.requestUpdate(),this._emitChange()}_resetAll(){this.readOnly||(this._state={slotValues:{}},this.requestUpdate(),this._emitChange())}_openImagePreview(t){this._previewImageUrl=t}_closeImagePreview(){this._previewImageUrl=null}_handleTagPointerDown(t,e){if(this.readOnly)return;t.preventDefault();const s=t.currentTarget;s.setPointerCapture(t.pointerId),this._currentDragTagId=e,this._dragSourceEl=s,s.classList.add("at-selection__tag--dragging");const i=document.createElement("div"),r=s.querySelector("img");if(r){const o=r.cloneNode(!0);o.style.display="block",o.style.width="96px",o.style.maxHeight="64px",o.style.objectFit="cover",o.style.borderRadius="8px",i.appendChild(o)}else i.textContent=s.textContent;i.style.cssText=["position:fixed","z-index:9999","pointer-events:none","display:flex","align-items:center",`padding:${getComputedStyle(s).padding}`,`font:${getComputedStyle(s).font}`,`border-radius:${getComputedStyle(s).borderRadius}`,"border:1px solid rgba(180,95,6,0.55)","background:#fff","color:#1d1a17","box-shadow:0 8px 24px rgba(45,35,22,0.25)","max-width:15rem","white-space:normal","word-break:break-word","transform:translate(-50%,-50%)"].join(";"),document.body.appendChild(i),this._ghost=i,this._moveGhost(t.clientX,t.clientY)}_handleTagPointerMove(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId||!this._ghost)return;t.preventDefault(),this._moveGhost(t.clientX,t.clientY);const e=this._findDropSlotEl(t.clientX,t.clientY),s=e?.dataset.assignmentId??null,i=e?.dataset.slotId?e:null,r=s?this._findCardElForAssignmentId(s):null;i!==this._dragTargetSlotEl&&(this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetSlotEl=i,i?.classList.add("at-slot--drop-target")),r!==this._dragTargetCardEl&&(this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._dragTargetCardEl=r,r?.classList.add("at-card--drop-target"))}_handleTagPointerUp(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId)return;const e=this._currentDragTagId,s=this._findDropSlotEl(t.clientX,t.clientY);if(this._cleanupPointerDrag(),!s?.dataset.assignmentId)return;const i=s.dataset.assignmentId;if(s.dataset.slotId)this._assignTag(i,s.dataset.slotId,e);else{const r=this.configuration.assignments.find(o=>o.id===i);if(r){const o=r.slotDefinitions.find(l=>l.static?!1:!this._state.slotValues[this._slotKey(i,l.id)]);o&&this._assignTag(i,o.id,e)}}}_handleTagPointerCancel(){this._cleanupPointerDrag()}_moveGhost(t,e){this._ghost&&(this._ghost.style.left=`${t}px`,this._ghost.style.top=`${e}px`)}_findDropSlotEl(t,e){if(!this.shadowRoot)return null;const s=this.shadowRoot.elementsFromPoint(t,e);let i=null;for(const r of s)if(r instanceof HTMLElement&&r.dataset.assignmentId){if(r.dataset.slotId)return r;i||(i=r)}return i}_findCardElForAssignmentId(t){return this.shadowRoot?.querySelector(`article[data-assignment-id="${t}"]`)??null}_cleanupPointerDrag(){this._dragSourceEl?.classList.remove("at-selection__tag--dragging"),this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._ghost?.remove(),this._ghost=null,this._currentDragTagId=null,this._dragSourceEl=null,this._dragTargetSlotEl=null,this._dragTargetCardEl=null}_serializeUserData(){return{assignments:this.configuration.assignments.map(e=>({id:e.id,slots:e.slotDefinitions.filter(s=>!s.static).map(s=>{const i=this._slotKey(e.id,s.id),r=this._state.slotValues[i];return{slotId:s.id,tagId:r??""}})}))}}exportModule(){const t=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:t,moduleType:_t,configuration:{...this.configuration},userData:this._serializeUserData(),updatedAt:new Date().toISOString()}}willUpdate(t){(t.has("configuration")||t.has("userData"))&&this._rebuildState()}render(){const t=new Set(Object.values(this._state.slotValues));return Gt({configuration:this.configuration,dependencyData:this.dependencyData,state:this._state,readOnly:this.readOnly,usedTagIds:t,previewImageUrl:this._previewImageUrl,onTagPointerDown:(e,s)=>this._handleTagPointerDown(e,s),onTagPointerMove:e=>this._handleTagPointerMove(e),onTagPointerUp:e=>this._handleTagPointerUp(e),onTagPointerCancel:()=>this._handleTagPointerCancel(),onOpenImagePreview:e=>this._openImagePreview(e),onCloseImagePreview:()=>this._closeImagePreview(),onSlotClear:(e,s)=>this._clearSlot(e,s),onReset:()=>this._resetAll()})}},m.AssigningTool.styles=Bt,A([j({attribute:!1})],m.AssigningTool.prototype,"configuration",2),A([j({attribute:!1})],m.AssigningTool.prototype,"dependencyData",2),A([j({attribute:!1})],m.AssigningTool.prototype,"userData",2),A([j({type:Boolean,reflect:!0})],m.AssigningTool.prototype,"readOnly",2),A([ut()],m.AssigningTool.prototype,"_state",2),A([ut()],m.AssigningTool.prototype,"_previewImageUrl",2),m.AssigningTool=A([Nt("assigning-tool")],m.AssigningTool),Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m})({});
//# sourceMappingURL=assigning-tool.js.map
