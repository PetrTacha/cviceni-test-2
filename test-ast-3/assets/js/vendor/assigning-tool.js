var AssigningTool=(function(m){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,K=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),J=new WeakMap;let Q=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new Q(typeof r=="string"?r:r+"",void 0,q),bt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,a,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[i+1],r[0]);return new Q(e,r,q)},vt=(r,t)=>{if(K)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),a=H.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=e.cssText,r.appendChild(s)}},tt=K?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:$t,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:At,getPrototypeOf:St}=Object,b=globalThis,et=b.trustedTypes,Et=et?et.emptyScript:"",kt=b.reactiveElementPolyfillSupport,T=(r,t)=>r,L={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},W=(r,t)=>!yt(r,t),st={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),a=this.getPropertyDescriptor(t,s,e);a!==void 0&&$t(this.prototype,t,a)}}static getPropertyDescriptor(t,e,s){const{get:a,set:i}=xt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:a,set(o){const l=a?.call(this);i?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,s=[...wt(e),...At(e)];for(const a of s)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,a]of e)this.elementProperties.set(s,a)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const a=this._$Eu(e,s);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const a of s)e.unshift(tt(a))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,s);if(a!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:L).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,a=s._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const i=s.getPropertyOptions(a),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:L;this._$Em=a;const l=o.fromAttribute(e,i.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(t,e,s,a=!1,i){if(t!==void 0){const o=this.constructor;if(a===!1&&(i=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??W)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:a,wrapped:i},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,i]of s){const{wrapped:o}=i,l=this[a];o!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,i,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[T("elementProperties")]=new Map,S[T("finalized")]=new Map,kt?.({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,at=r=>r,R=C.trustedTypes,rt=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,it="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+v,Tt=`<${ot}>`,$=document,P=()=>$.createComment(""),I=r=>r===null||typeof r!="object"&&typeof r!="function",Y=Array.isArray,Ct=r=>Y(r)||typeof r?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,lt=/>/g,x=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ct=/"/g,ht=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),g=Pt(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,w=$.createTreeWalker($,129);function gt(r,t){if(!Y(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const It=(r,t)=>{const e=r.length-1,s=[];let a,i=t===2?"<svg>":t===3?"<math>":"",o=D;for(let l=0;l<e;l++){const n=r[l];let c,d,h=-1,u=0;for(;u<n.length&&(o.lastIndex=u,d=o.exec(n),d!==null);)u=o.lastIndex,o===D?d[1]==="!--"?o=nt:d[1]!==void 0?o=lt:d[2]!==void 0?(ht.test(d[2])&&(a=RegExp("</"+d[2],"g")),o=x):d[3]!==void 0&&(o=x):o===x?d[0]===">"?(o=a??D,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?x:d[3]==='"'?ct:dt):o===ct||o===dt?o=x:o===nt||o===lt?o=D:(o=x,a=void 0);const _=o===x&&r[l+1].startsWith("/>")?" ":"";i+=o===D?n+Tt:h>=0?(s.push(c),n.slice(0,h)+it+n.slice(h)+v+_):n+v+(h===-2?l:_)}return[gt(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let a;this.parts=[];let i=0,o=0;const l=t.length-1,n=this.parts,[c,d]=It(t,e);if(this.el=O.createElement(c,s),w.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=w.nextNode())!==null&&n.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const h of a.getAttributeNames())if(h.endsWith(it)){const u=d[o++],_=a.getAttribute(h).split(v),y=/([.?@])?(.*)/.exec(u);n.push({type:1,index:i,name:y[2],strings:_,ctor:y[1]==="."?Ot:y[1]==="?"?Ut:y[1]==="@"?zt:N}),a.removeAttribute(h)}else h.startsWith(v)&&(n.push({type:6,index:i}),a.removeAttribute(h));if(ht.test(a.tagName)){const h=a.textContent.split(v),u=h.length-1;if(u>0){a.textContent=R?R.emptyScript:"";for(let _=0;_<u;_++)a.append(h[_],P()),w.nextNode(),n.push({type:2,index:++i});a.append(h[u],P())}}}else if(a.nodeType===8)if(a.data===ot)n.push({type:2,index:i});else{let h=-1;for(;(h=a.data.indexOf(v,h+1))!==-1;)n.push({type:7,index:i}),h+=v.length-1}i++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function k(r,t,e=r,s){if(t===E)return t;let a=s!==void 0?e._$Co?.[s]:e._$Cl;const i=I(t)?void 0:t._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(r),a._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=a:e._$Cl=a),a!==void 0&&(t=k(r,a._$AS(r,t.values),a,s)),t}class Dt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,a=(t?.creationScope??$).importNode(e,!0);w.currentNode=a;let i=w.nextNode(),o=0,l=0,n=s[0];for(;n!==void 0;){if(o===n.index){let c;n.type===2?c=new U(i,i.nextSibling,this,t):n.type===1?c=new n.ctor(i,n.name,n.strings,this,t):n.type===6&&(c=new Mt(i,this,t)),this._$AV.push(c),n=s[++l]}o!==n?.index&&(i=w.nextNode(),o++)}return w.currentNode=$,a}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,a){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),I(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(gt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(e);else{const i=new Dt(a,this),o=i.u(this.options);i.p(e),this.T(o),this._$AH=i}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new O(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,a=0;for(const i of t)a===e.length?e.push(s=new U(this.O(P()),this.O(P()),this,this.options)):s=e[a],s._$AI(i),a++;a<e.length&&(this._$AR(s&&s._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=at(t).nextSibling;at(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,a,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,a){const i=this.strings;let o=!1;if(i===void 0)t=k(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const l=t;let n,c;for(t=i[0],n=0;n<i.length-1;n++)c=k(this,l[s+n],e,n),c===E&&(c=this._$AH[n]),o||(o=!I(c)||c!==this._$AH[n]),c===p?t=p:t!==p&&(t+=(c??"")+i[n+1]),this._$AH[n]=c}o&&!a&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ut extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class zt extends N{constructor(t,e,s,a,i){super(t,e,s,a,i),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??p)===E)return;const s=this._$AH,a=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==p&&(s===p||a);a&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const jt=C.litHtmlPolyfillSupport;jt?.(O,U),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.3.2");const Ht=(r,t,e)=>{const s=e?.renderBefore??t;let a=s._$litPart$;if(a===void 0){const i=e?.renderBefore??null;s._$litPart$=a=new U(t.insertBefore(P(),i),i,void 0,e??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis;class M extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}M._$litElement$=!0,M.finalized=!0,z.litElementHydrateSupport?.({LitElement:M});const Lt=z.litElementPolyfillSupport;Lt?.({LitElement:M}),(z.litElementVersions??(z.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:W},Vt=(r=Nt,t,e)=>{const{kind:s,metadata:a}=e;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,n,r,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const n=this[o];t.call(this,l),this.requestUpdate(o,n,r,!0,l)}}throw Error("Unsupported decorator location: "+s)};function j(r){return(t,e)=>typeof e=="object"?Vt(r,t,e):((s,a,i)=>{const o=a.hasOwnProperty(i);return a.constructor.createProperty(i,s),o?Object.getOwnPropertyDescriptor(a,i):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(r){return j({...r,state:!0,attribute:!1})}const Bt=bt`
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

  .at-card__slot-list {
    /* display: grid;
    gap: 0.75rem; */
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
`,_t="assigning";function Kt(r,t){for(const e of r){const s=e.configuration.tags.find(a=>a.id===t);if(s)return s.value}return t}function Z(r){return/^data:image\//i.test(r)||/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(r)}function qt(r){const{value:t,type:e,onOpenImagePreview:s}=r;return e==="image"?g`
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
    `:g`<span class="at-static-item at-static-item--tag">${t}</span>`}function Wt(r){const{dependencyData:t,assignmentId:e,slotId:s,slotType:a,tagId:i,readOnly:o,onSlotClear:l}=r,n=Kt(t,i),c=a==="image"&&Z(n);return g`
    <span class="at-slot__value">
      ${c?g`<img class="at-slot__value-image" src=${n} alt="Vybraný obrázek" loading="lazy" />`:n}
      ${o?p:g`<button
            class="at-slot__value-remove-btn"
            aria-label="Odebrat tag"
            @click=${d=>{d.stopPropagation(),l(e,s)}}
          ></button>`}
    </span>
  `}function Yt(r){const{assignmentId:t,slotId:e,slotType:s,isStatic:a,staticItems:i,slotLabel:o,slotKey:l,slotValue:n,dependencyData:c,readOnly:d,onOpenImagePreview:h,onSlotClear:u}=r,_=["at-slot-active",a?"at-slot--static":"",a?"":"at-slot--active"].filter(Boolean).join(" ");if(a)return g`
      <div class=${_} data-slot-key=${l} aria-label=${o}>
        <!-- <div class="at-slot__button at-slot__button--static"> -->
          <div class="at-slot__static-content">
            ${i.length?i.map(B=>qt({value:B,type:s,onOpenImagePreview:h})):g`<span class="at-slot__placeholder">${o}</span>`}
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
  `}function Ft(r){const{assignment:t,state:e,dependencyData:s,readOnly:a,onOpenImagePreview:i,onSlotClear:o}=r;return g`
    <article class="at-card" data-assignment-id=${t.id}>
      ${t.title?g`<div class="at-card__id">${t.title}</div>`:p}
      <div class="at-card__body">
        <!-- <div class="at-card__slot-list"> -->
          ${t.slotDefinitions.map(l=>{const n=`${t.id}::${l.id}`,c=e.slotValues[n],d=l.static?`${l.type==="image"?"Static image":"Static tag"} ${l.id}`:"+ Vyberte položku z nabídky a přetáhněte ji sem ";return Yt({assignmentId:t.id,slotId:l.id,slotType:l.type,isStatic:!!l.static,staticItems:l.items??[],slotLabel:d,slotKey:n,slotValue:c,dependencyData:s,readOnly:a,onOpenImagePreview:i,onSlotClear:o})})}
        <!-- </div> -->
      </div>
    </article>
  `}function Zt(r){const{selectionId:t,tag:e,readOnly:s,isUsed:a,onTagPointerDown:i,onTagPointerMove:o,onTagPointerUp:l,onTagPointerCancel:n}=r,c=["at-selection__tag",Z(e.value)?"at-selection__tag--image":"",s?"at-selection__tag--readonly":"",a?"at-selection__tag--used":""].filter(Boolean).join(" ");return g`
    <div
      class=${c}
      data-selection-id=${t}
      @pointerdown=${d=>{s||i(d,e.id)}}
      @pointermove=${d=>{s||o(d)}}
      @pointerup=${d=>{s||l(d)}}
      @pointercancel=${d=>{s||n(d)}}
    >
      ${Z(e.value)?g`<img class="at-selection__tag-image" src=${e.value} alt="Nabízený obrázek" loading="lazy" />`:e.value}
    </div>
  `}function Xt(r){const{selection:t,readOnly:e,usedTagIds:s,onTagPointerDown:a,onTagPointerMove:i,onTagPointerUp:o,onTagPointerCancel:l}=r;return g`
    <section class="at-selection-section">
      <!-- <h3 class="at-selection-section__title">${t.moduleId}</h3> -->
      <div class="at-selection-list">
        ${t.configuration.tags.map(n=>Zt({selectionId:t.moduleId,tag:n,readOnly:e,isUsed:s.has(n.id),onTagPointerDown:a,onTagPointerMove:i,onTagPointerUp:o,onTagPointerCancel:l}))}
      </div>
    </section>
  `}function Gt(r){const{configuration:t,dependencyData:e,state:s,readOnly:a,usedTagIds:i,previewImageUrl:o,onTagPointerDown:l,onTagPointerMove:n,onTagPointerUp:c,onTagPointerCancel:d,onOpenImagePreview:h,onCloseImagePreview:u,onSlotClear:_,onReset:y}=r,V=t.assignments.length,B=t.assignments.filter(f=>{const mt=f.slotDefinitions.filter(G=>!G.static);return mt.length>0&&mt.every(G=>!!s.slotValues[`${f.id}::${G.id}`])}).length,X=V>0&&B===V;return g`
      <div class="at__layout">
        <section class="at__panel-board">
          <div class="at__board">
            ${t.assignments.map(f=>Ft({assignment:f,state:s,dependencyData:e,readOnly:a,onOpenImagePreview:h,onSlotClear:_}))}
          </div>
        </section>

        <section class="at__panel">
          <header class="at__panel-header">
            <p class="at__eyebrow">Výběr</p>
            <!-- <h2 class="at__title">Dependency tags</h2>
            <p class="at__subtitle">Click, hold, drag, and drop to a card slot.</p> -->
            <div class="at__progress-badge ${X?"at__progress-badge--done":""}">
              <span class="at__progress-icon">${X?"✓":B}</span>
              <span class="at__progress-text">${X?"Vše přiřazeno":g`/ ${V}`}</span>
            </div>
            <button
              class="at__reset-btn"
              aria-label="Resetovat výběr"
              ?disabled=${a}
              @click=${y}
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
            ${e.length?e.map(f=>Xt({selection:f,readOnly:a,usedTagIds:i,onTagPointerDown:l,onTagPointerMove:n,onTagPointerUp:c,onTagPointerCancel:d})):g`<div class="at__empty">No dependency selection data was provided.</div>`}
          </div>
        </section>
      </div>
      ${o?g`
            <dialog
              class="at__modal-overlay"
              aria-label="Detail obrázku"
              @cancel=${f=>{f.preventDefault(),u()}}
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
            </dialog>
          `:p}
  `}var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,A=(r,t,e,s)=>{for(var a=s>1?void 0:s?Qt(t,e):t,i=r.length-1,o;i>=0;i--)(o=r[i])&&(a=(s?o(t,e,a):o(a))||a);return s&&a&&Jt(t,e,a),a};return m.AssigningTool=class extends M{constructor(){super(),this.exportVersion=1,this._dragTargetSlotEl=null,this._dragTargetCardEl=null,this._currentDragTagId=null,this._dragSourceEl=null,this._ghost=null,this._bodyScrollLocked=!1,this._handleWindowKeyDown=t=>{t.key==="Escape"&&this._previewImageUrl&&(t.preventDefault(),this._closeImagePreview())},this.configuration={moduleId:"assigning-local",moduleType:_t,dependencies:[],viewSettings:{},assignments:[]},this.dependencyData=[],this.userData={assignments:[]},this.readOnly=!1,this._state={slotValues:{}},this._previewImageUrl=null}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._handleWindowKeyDown)}disconnectedCallback(){this._setBodyScrollLock(!1),window.removeEventListener("keydown",this._handleWindowKeyDown),super.disconnectedCallback()}_setBodyScrollLock(t){this._bodyScrollLocked!==t&&(this._bodyScrollLocked=t,document.documentElement.style.overflow=t?"hidden":"",document.body.style.overflow=t?"hidden":"",document.body.style.touchAction=t?"none":"")}_syncModalLayer(){const t=this.shadowRoot?.querySelector(".at__modal-overlay");if(!!this._previewImageUrl){t&&!t.open&&t.showModal(),this._setBodyScrollLock(!0);return}t?.open&&t.close(),this._setBodyScrollLock(!1)}_slotKey(t,e){return`${t}::${e}`}_rebuildState(){const t={};for(const e of this.userData.assignments??[])for(const s of e.slots)s.tagId&&(t[this._slotKey(e.id,s.slotId)]=s.tagId);this._state={slotValues:t}}_emitChange(){this.dispatchEvent(new CustomEvent("assigning-tool:change",{bubbles:!0,composed:!0,detail:{exportModule:this.exportModule()}}))}_assignTag(t,e,s){if(this.readOnly)return;const a=this._slotKey(t,e);this._state={slotValues:{...this._state.slotValues,[a]:s}},this.requestUpdate(),this._emitChange()}_clearSlot(t,e){if(this.readOnly)return;const s=this._slotKey(t,e),a={...this._state.slotValues};delete a[s],this._state={slotValues:a},this.requestUpdate(),this._emitChange()}_resetAll(){this.readOnly||(this._state={slotValues:{}},this.requestUpdate(),this._emitChange())}_openImagePreview(t){this._previewImageUrl=t}_closeImagePreview(){this._previewImageUrl=null}_handleTagPointerDown(t,e){if(this.readOnly)return;t.preventDefault();const s=t.currentTarget;s.setPointerCapture(t.pointerId),this._currentDragTagId=e,this._dragSourceEl=s,s.classList.add("at-selection__tag--dragging");const a=document.createElement("div"),i=s.querySelector("img");if(i){const o=i.cloneNode(!0);o.style.display="block",o.style.width="96px",o.style.maxHeight="64px",o.style.objectFit="cover",o.style.borderRadius="8px",a.appendChild(o)}else a.textContent=s.textContent;a.style.cssText=["position:fixed","z-index:9999","pointer-events:none","display:flex","align-items:center",`padding:${getComputedStyle(s).padding}`,`font:${getComputedStyle(s).font}`,`border-radius:${getComputedStyle(s).borderRadius}`,"border:1px solid rgba(180,95,6,0.55)","background:#fff","color:#1d1a17","box-shadow:0 8px 24px rgba(45,35,22,0.25)","max-width:15rem","white-space:normal","word-break:break-word","transform:translate(-50%,-50%)"].join(";"),document.body.appendChild(a),this._ghost=a,this._moveGhost(t.clientX,t.clientY)}_handleTagPointerMove(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId||!this._ghost)return;t.preventDefault(),this._moveGhost(t.clientX,t.clientY);const e=this._findDropSlotEl(t.clientX,t.clientY),s=e?.dataset.assignmentId??null,a=e?.dataset.slotId?e:null,i=s?this._findCardElForAssignmentId(s):null;a!==this._dragTargetSlotEl&&(this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetSlotEl=a,a?.classList.add("at-slot--drop-target")),i!==this._dragTargetCardEl&&(this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._dragTargetCardEl=i,i?.classList.add("at-card--drop-target"))}_handleTagPointerUp(t){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId)return;const e=this._currentDragTagId,s=this._findDropSlotEl(t.clientX,t.clientY);if(this._cleanupPointerDrag(),!s?.dataset.assignmentId)return;const a=s.dataset.assignmentId;if(s.dataset.slotId)this._assignTag(a,s.dataset.slotId,e);else{const i=this.configuration.assignments.find(o=>o.id===a);if(i){const o=i.slotDefinitions.find(l=>l.static?!1:!this._state.slotValues[this._slotKey(a,l.id)]);o&&this._assignTag(a,o.id,e)}}}_handleTagPointerCancel(){this._cleanupPointerDrag()}_moveGhost(t,e){this._ghost&&(this._ghost.style.left=`${t}px`,this._ghost.style.top=`${e}px`)}_findDropSlotEl(t,e){if(!this.shadowRoot)return null;const s=this.shadowRoot.elementsFromPoint(t,e);let a=null;for(const i of s)if(i instanceof HTMLElement&&i.dataset.assignmentId){if(i.dataset.slotId)return i;a||(a=i)}return a}_findCardElForAssignmentId(t){return this.shadowRoot?.querySelector(`article[data-assignment-id="${t}"]`)??null}_cleanupPointerDrag(){this._dragSourceEl?.classList.remove("at-selection__tag--dragging"),this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._ghost?.remove(),this._ghost=null,this._currentDragTagId=null,this._dragSourceEl=null,this._dragTargetSlotEl=null,this._dragTargetCardEl=null}_serializeUserData(){return{assignments:this.configuration.assignments.map(e=>({id:e.id,slots:e.slotDefinitions.filter(s=>!s.static).map(s=>{const a=this._slotKey(e.id,s.id),i=this._state.slotValues[a];return{slotId:s.id,tagId:i??""}})}))}}exportModule(){const t=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:t,moduleType:_t,configuration:{...this.configuration},userData:this._serializeUserData(),updatedAt:new Date().toISOString()}}willUpdate(t){(t.has("configuration")||t.has("userData"))&&this._rebuildState()}updated(t){t.has("_previewImageUrl")&&this._syncModalLayer()}render(){const t=new Set(Object.values(this._state.slotValues));return Gt({configuration:this.configuration,dependencyData:this.dependencyData,state:this._state,readOnly:this.readOnly,usedTagIds:t,previewImageUrl:this._previewImageUrl,onTagPointerDown:(e,s)=>this._handleTagPointerDown(e,s),onTagPointerMove:e=>this._handleTagPointerMove(e),onTagPointerUp:e=>this._handleTagPointerUp(e),onTagPointerCancel:()=>this._handleTagPointerCancel(),onOpenImagePreview:e=>this._openImagePreview(e),onCloseImagePreview:()=>this._closeImagePreview(),onSlotClear:(e,s)=>this._clearSlot(e,s),onReset:()=>this._resetAll()})}},m.AssigningTool.styles=Bt,A([j({attribute:!1})],m.AssigningTool.prototype,"configuration",2),A([j({attribute:!1})],m.AssigningTool.prototype,"dependencyData",2),A([j({attribute:!1})],m.AssigningTool.prototype,"userData",2),A([j({type:Boolean,reflect:!0})],m.AssigningTool.prototype,"readOnly",2),A([ut()],m.AssigningTool.prototype,"_state",2),A([ut()],m.AssigningTool.prototype,"_previewImageUrl",2),m.AssigningTool=A([Rt("assigning-tool")],m.AssigningTool),Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m})({});
//# sourceMappingURL=assigning-tool.js.map
