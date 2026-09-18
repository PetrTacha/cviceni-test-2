var AssigningTool=(function(f){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,J=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),ie=new WeakMap;let ne=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ie.set(t,e))}return e}toString(){return this.cssText}};const Ce=r=>new ne(typeof r=="string"?r:r+"",void 0,Q),F=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((o,s,a)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new ne(t,r,Q)},Ee=(r,e)=>{if(J)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=Y.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,r.appendChild(o)}},le=J?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ce(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pe,defineProperty:Ie,getOwnPropertyDescriptor:De,getOwnPropertyNames:Oe,getOwnPropertySymbols:ze,getPrototypeOf:Ue}=Object,S=globalThis,he=S.trustedTypes,Me=he?he.emptyScript:"",He=S.reactiveElementPolyfillSupport,M=(r,e)=>r,W={toAttribute(r,e){switch(e){case Boolean:r=r?Me:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ee=(r,e)=>!Pe(r,e),de={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);let I=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Ie(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:a}=De(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:s,set(i){const l=s?.call(this);a?.call(this,i),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=Ue(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const t=this.properties,o=[...Oe(t),...ze(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(le(s))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const a=(o.converter?.toAttribute!==void 0?o.converter:W).toAttribute(t,o.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=o.getPropertyOptions(s),i=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:W;this._$Em=s;const l=i.fromAttribute(t,a.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,o,s=!1,a){if(e!==void 0){const i=this.constructor;if(s===!1&&(a=this[e]),o??(o=i.getPropertyOptions(e)),!((o.hasChanged??ee)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:a},i){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,a]of o){const{wrapped:i}=a,l=this[s];i!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[M("elementProperties")]=new Map,I[M("finalized")]=new Map,He?.({ReactiveElement:I}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,ce=r=>r,X=H.trustedTypes,ge=X?X.createPolicy("lit-html",{createHTML:r=>r}):void 0,pe="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+A,je=`<${ue}>`,C=document,j=()=>C.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",te=Array.isArray,Le=r=>te(r)||typeof r?.[Symbol.iterator]=="function",oe=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,_e=/>/g,E=RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,be=/"/g,ve=/^(?:script|style|textarea|title)$/i,Re=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=Re(1),D=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ye=new WeakMap,P=C.createTreeWalker(C,129);function we(r,e){if(!te(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}const Ve=(r,e)=>{const t=r.length-1,o=[];let s,a=e===2?"<svg>":e===3?"<math>":"",i=R;for(let l=0;l<t;l++){const n=r[l];let d,h,c=-1,p=0;for(;p<n.length&&(i.lastIndex=p,h=i.exec(n),h!==null);)p=i.lastIndex,i===R?h[1]==="!--"?i=me:h[1]!==void 0?i=_e:h[2]!==void 0?(ve.test(h[2])&&(s=RegExp("</"+h[2],"g")),i=E):h[3]!==void 0&&(i=E):i===E?h[0]===">"?(i=s??R,c=-1):h[1]===void 0?c=-2:(c=i.lastIndex-h[2].length,d=h[1],i=h[3]===void 0?E:h[3]==='"'?be:fe):i===be||i===fe?i=E:i===me||i===_e?i=R:(i=E,s=void 0);const _=i===E&&r[l+1].startsWith("/>")?" ":"";a+=i===R?n+je:c>=0?(o.push(d),n.slice(0,c)+pe+n.slice(c)+A+_):n+A+(c===-2?l:_)}return[we(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class V{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let a=0,i=0;const l=e.length-1,n=this.parts,[d,h]=Ve(e,t);if(this.el=V.createElement(d,o),P.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=P.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(pe)){const p=h[i++],_=s.getAttribute(c).split(A),u=/([.?@])?(.*)/.exec(p);n.push({type:1,index:a,name:u[2],strings:_,ctor:u[1]==="."?Be:u[1]==="?"?qe:u[1]==="@"?Ke:Z}),s.removeAttribute(c)}else c.startsWith(A)&&(n.push({type:6,index:a}),s.removeAttribute(c));if(ve.test(s.tagName)){const c=s.textContent.split(A),p=c.length-1;if(p>0){s.textContent=X?X.emptyScript:"";for(let _=0;_<p;_++)s.append(c[_],j()),P.nextNode(),n.push({type:2,index:++a});s.append(c[p],j())}}}else if(s.nodeType===8)if(s.data===ue)n.push({type:2,index:a});else{let c=-1;for(;(c=s.data.indexOf(A,c+1))!==-1;)n.push({type:7,index:a}),c+=A.length-1}a++}}static createElement(e,t){const o=C.createElement("template");return o.innerHTML=e,o}}function O(r,e,t=r,o){if(e===D)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl;const a=L(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=O(r,s._$AS(r,e.values),s,o)),e}class Ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??C).importNode(t,!0);P.currentNode=s;let a=P.nextNode(),i=0,l=0,n=o[0];for(;n!==void 0;){if(i===n.index){let d;n.type===2?d=new N(a,a.nextSibling,this,e):n.type===1?d=new n.ctor(a,n.name,n.strings,this,e):n.type===6&&(d=new Ye(a,this,e)),this._$AV.push(d),n=o[++l]}i!==n?.index&&(a=P.nextNode(),i++)}return P.currentNode=C,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),L(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Le(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=V.createElement(we(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{const a=new Ne(s,this),i=a.u(this.options);a.p(t),this.T(i),this._$AH=a}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new V(e)),t}k(e){te(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const a of e)s===t.length?t.push(o=new N(this.O(j()),this.O(j()),this,this.options)):o=t[s],o._$AI(a),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const o=ce(e).nextSibling;ce(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,a){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}_$AI(e,t=this,o,s){const a=this.strings;let i=!1;if(a===void 0)e=O(this,e,t,0),i=!L(e)||e!==this._$AH&&e!==D,i&&(this._$AH=e);else{const l=e;let n,d;for(e=a[0],n=0;n<a.length-1;n++)d=O(this,l[o+n],t,n),d===D&&(d=this._$AH[n]),i||(i=!L(d)||d!==this._$AH[n]),d===g?e=g:e!==g&&(e+=(d??"")+a[n+1]),this._$AH[n]=d}i&&!s&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Be extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class qe extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ke extends Z{constructor(e,t,o,s,a){super(e,t,o,s,a),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??g)===D)return;const o=this._$AH,s=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==g&&(o===g||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ye{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const Fe=H.litHtmlPolyfillSupport;Fe?.(V,N),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.3.2");const We=(r,e,t)=>{const o=t?.renderBefore??e;let s=o._$litPart$;if(s===void 0){const a=t?.renderBefore??null;o._$litPart$=s=new N(e.insertBefore(j(),a),a,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis;class q extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=We(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}q._$litElement$=!0,q.finalized=!0,B.litElementHydrateSupport?.({LitElement:q});const Xe=B.litElementPolyfillSupport;Xe?.({LitElement:q}),(B.litElementVersions??(B.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ee},Je=(r=Ge,e,t)=>{const{kind:o,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),o==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(t.name,r),o==="accessor"){const{name:i}=t;return{set(l){const n=e.get.call(this);e.set.call(this,l),this.requestUpdate(i,n,r,!0,l)},init(l){return l!==void 0&&this.C(i,void 0,r,l),l}}}if(o==="setter"){const{name:i}=t;return function(l){const n=this[i];e.call(this,l),this.requestUpdate(i,n,r,!0,l)}}throw Error("Unsupported decorator location: "+o)};function K(r){return(e,t)=>typeof t=="object"?Je(r,e,t):((o,s,a)=>{const i=s.hasOwnProperty(a);return s.constructor.createProperty(a,o),i?Object.getOwnPropertyDescriptor(s,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(r){return K({...r,state:!0,attribute:!1})}class Qe{constructor(e={}){this._locked=!1,this._frozen=[],this._blockOutside=t=>{const o=this._options.allow?.();if(o){const s=Array.isArray(o)?o:[o],a=t.composedPath();if(s.some(i=>i&&a.includes(i)))return}t.preventDefault()},this._options=e}get locked(){return this._locked}lock(){this.set(!0)}unlock(){this.set(!1)}set(e){if(typeof document>"u"||this._locked===e)return;this._locked=e,document.documentElement.style.overflow=e?"hidden":"",document.body.style.overflow=e?"hidden":"",document.body.style.touchAction=e?"none":"",e?this._freezeAncestors():this._thawAncestors();const t={capture:!0,passive:!1};e?(window.addEventListener("wheel",this._blockOutside,t),window.addEventListener("touchmove",this._blockOutside,t)):(window.removeEventListener("wheel",this._blockOutside,t),window.removeEventListener("touchmove",this._blockOutside,t))}_freezeAncestors(){let e=this._options.from?.()??null;for(;e&&e!==document.body;){const t=getComputedStyle(e);if(/(auto|scroll)/.test(t.overflowY)||/(auto|scroll)/.test(t.overflowX)){const o=e;this._frozen.push({el:o,overflow:o.style.overflow,touchAction:o.style.touchAction}),o.style.overflow="hidden",o.style.touchAction="none"}e=e.parentElement}}_thawAncestors(){for(const{el:e,overflow:t,touchAction:o}of this._frozen)e.style.overflow=t,e.style.touchAction=o;this._frozen=[]}}const et=F`
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
`,tt="(max-width: 720px)",ot=260,st=F`
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
`,at=F`
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
`,rt=[et,st,at,F`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  :host {
    /* The board runs on the exercise palette from paletteTokens, so it sits beside the bottom
       sheet (and beside source-work-tool) instead of in its own warm/ochre world. The --at-
       names stay: they are this tool's vocabulary and an integrator can still override one. */
    --at-color-bg: var(--hl-color-secondary);
    --at-color-bg-soft: var(--hl-color-bg-light);
    --at-color-panel: var(--hl-color-bg-light);
    --at-color-panel-soft: var(--hl-color-secondary);
    --at-color-panel-soft-selected: var(--hl-color-bg-light);
    --at-color-border: var(--hl-color-bg-dark);
    --at-color-text: var(--hl-color-text);
    /* One step off the $color-bg--3 ladder: dark enough to read on the light board, light
       enough to recede from --at-color-text. */
    --at-color-muted: #7d5b59;
    --at-color-accent: var(--hl-color-primary);
    --at-color-accent-strong: #3f3e7d;
    --at-color-accent-soft: rgba(83, 82, 166, 0.12);
    --at-shadow: 0 12px 32px rgba(28, 19, 18, 0.12);
    --at-radius: 18px;
    --at-font-family: 'Lato', Helvetica, Arial, sans-serif;
    --at-card-width: 180px;
    --at-image-slot-height: 148px;
    /* Set by the host app to keep a fixed site header visible above the image lightbox.
       The tag picker no longer needs it: it is a bottom sheet now and never reaches the
       top edge. */
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
        rgba(83, 82, 166, 0.08),
        transparent 35%
      ),
      linear-gradient(180deg, #fdf2f2 0%, var(--at-color-bg) 100%);
    border: 1px solid rgba(164, 123, 121, 0.7);
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
    background: radial-gradient(farthest-corner, rgba(28, 19, 18, 0.6) 0, rgba(28, 19, 18, 0.7) 100%);
    /* border: 1px solid var(--at-color-border); */
    border-radius: var(--at-radius);
    overflow: visible;
    min-width: 0;
    box-shadow: 0 0 3.2rem rgba(28, 19, 18,.8);
  }

  .at__panel-header {
    padding: 0.7rem 0.85rem 0rem;
    /* border-bottom: 1px solid rgba(164, 123, 121, 0.75); */
    border-radius: var(--at-radius) var(--at-radius) 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    
    color: var(--at-color-bg-soft);
    /* background: linear-gradient(180deg, rgba(253, 242, 242, 0.98), rgba(253, 242, 242, 0.95)); */
  }

  .at__progress-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.22rem 0.55rem 0.22rem 0.4rem;
    /* padding: 0.3rem 0.7rem 0.3rem 0.5rem; */
    border-radius: 999px;
    background: rgba(83, 82, 166, 0.08);
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
    border-color: rgba(0, 170, 88, 0.3);
    color: rgba(0, 105, 58, 0.95);
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
    background: rgba(0, 170, 88, 0.15);
    color: rgba(0, 105, 58, 0.95);
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
    background: rgba(83, 82, 166, 0.09);
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
    background: rgba(28, 19, 18, 0.9);
    color: #fdf2f2;
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
    border-top-color: rgba(28, 19, 18, 0.9);
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
    background: #fdf2f2;
    overflow: visible;
    position: relative;
    box-shadow:
      rgba(28, 19, 18, 0.3) 0px 1px 2px 0px,
      rgba(28, 19, 18, 0.15) 0px 2px 6px 2px;
    padding: 0.4rem 1rem 1rem 1rem;
    transition: opacity 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
  
    background: var(--at-color-bg-soft);
    height: 100%;
  }

  .at-card.at-card--drop-target {
    transform: scale(1.025) translateY(-4px);
    box-shadow:
      rgba(28, 19, 18, 0.22) 0px 16px 40px,
      rgba(28, 19, 18, 0.12) 0px 2px 6px 2px;
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
    border-bottom: 1px solid rgba(164, 123, 121, 0.65);
    background: rgba(253, 242, 242, 0.65);
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
    /* border: 1px solid rgba(164, 123, 121, 0.95); */
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
    border: 1px solid rgba(253, 242, 242, 0.7);
    background: rgba(28, 19, 18, 0.64);
    color: #fdf2f2;
    cursor: pointer;
    backdrop-filter: blur(2px);
    transition: transform 0.12s ease, background-color 0.12s ease, border-color 0.12s ease;
  }

  .at-static-item__zoom-btn:hover {
    transform: scale(1.06);
    background: rgba(28, 19, 18, 0.82);
    border-color: rgba(253, 242, 242, 0.95);
  }

  .at-static-item__zoom-btn:focus-visible {
    outline: 3px solid rgba(83, 82, 166, 0.35);
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
    /* border: 1.5px dashed rgba(83, 82, 166, 0.45); */
    /* border-radius: 14px; */
    /* background: rgba(253, 242, 242, 0.84); */
    transition:
      border-color 0.15s ease,
      background-color 0.15s ease,
      transform 0.15s ease;
  }

  .at-slot:hover {
    background: rgba(253, 242, 242, 0.98);
    border-color: rgba(83, 82, 166, 0.7);
  }

  .at-slot__button.at-slot--drop-target {
    border-color: var(--at-color-accent) !important;
    /* background: rgba(83, 82, 166, 0.08) !important; */
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
      rgba(28, 19, 18, 0.3) 0px 18px 36px -18px inset;
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
    outline: 3px solid rgba(83, 82, 166, 0.28);
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
    border: 1px solid rgba(83, 82, 166, 0.22);
    background: #fdf2f2;
    color: var(--at-color-text);
    box-shadow: 0 2px 8px rgba(28, 19, 18, 0.06);
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
    border: 1.5px solid rgba(83, 82, 166, 0.45);
    border-radius: 50%;
    background: #fdf2f2;
    cursor: pointer;
    box-sizing: border-box;
  }

  .at-slot__value-remove-btn:hover {
    background: rgba(83, 82, 166, 0.85);
    border-color: rgba(83, 82, 166, 0.85);
  }

  .at-slot__value-remove-btn::before,
  .at-slot__value-remove-btn::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 1.5px;
    background: rgba(83, 82, 166, 0.7);
    top: 50%;
    left: 50%;
    transform-origin: center;
  }

  .at-slot__value-remove-btn:hover::before,
  .at-slot__value-remove-btn:hover::after {
    background: #fdf2f2;
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
    border-top: 1px solid rgba(164, 123, 121, 0.65);
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
    border: 1px solid rgba(83, 82, 166, 0.22);
    background: var(--at-color-bg-soft);
    color: var(--at-color-text);
    box-shadow: 0 4px 12px rgba(28, 19, 18, 0.06);
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
    border-color: rgba(83, 82, 166, 0.55);
  }

  .at-selection__tag--readonly,
  .at-selection__tag--readonly:hover {
    cursor: not-allowed;
    transform: none;
    border-color: rgba(83, 82, 166, 0.22);
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
    background: rgba(83, 82, 166, 0.1);
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
    background: rgba(28, 19, 18, 0.72);
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
    border: 1px solid rgba(164, 123, 121, 0.6);
    background: linear-gradient(180deg, #fdf2f2 0%, #fce4e3 100%);
    padding: clamp(0.7rem, 2vw, 1rem);
    box-shadow: 0 22px 68px rgba(28, 19, 18, 0.45);
  }

  .at__modal-image {
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: calc(92vh - 2rem);
    object-fit: contain;
    border-radius: 12px;
    background: rgba(253, 242, 242, 0.8);
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
    background: rgba(28, 19, 18, 0.74);
    color: #fdf2f2;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    transition: background 0.12s ease, transform 0.12s ease;
  }

  .at__modal-close-btn:hover {
    background: rgba(28, 19, 18, 0.92);
    transform: scale(1.04);
  }

  .at__modal-close-btn:focus-visible {
    outline: 3px solid rgba(83, 82, 166, 0.45);
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

  /* ---------- Compact (touch) mode: right-hand panel becomes a bottom sheet ---------- */

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
    background: radial-gradient(farthest-corner, rgba(28, 19, 18, 0.6) 0, rgba(28, 19, 18, 0.7) 100%);
    box-shadow: 0 0 1.6rem rgba(28, 19, 18, 0.6);
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

  /* pan-y keeps the sheet's tag list scrollable; a sideways drag still starts a drop onto the board */
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

  /* ─────────────────────────────────────────────────────────────────────────
     Compact (touch) mode — the selection panel becomes the shared bottom sheet.
     Surface, header band, close button, body scroller and footer buttons all come from
     sheetStyles in @historylab/shared; only the two things that are ours stay here:

       1. the overlay — a transparent full-viewport <dialog> that parks the sheet on the
          bottom edge. It exists so the sheet element is NOT the dialog, which in turn is
          what lets the close be animated: the tool keeps rendering the sheet for
          SHEET_ANIMATION_MS after the user dismisses it and only then unmounts.
       2. the open/close transform, for the same reason. (source-work-tool has no such
          timer, so it uses the hl-sheet-up keyframes instead.)
     ───────────────────────────────────────────────────────────────────────── */
  .at__drawer-overlay {
    position: fixed;
    inset: 0;
    margin: 0;
    padding: 0;
    border: 0;
    width: 100vw;
    height: 100dvh;
    max-width: none;
    max-height: none;
    background: transparent;
    overflow: visible;
  }

  /* display may only be set on [open]: an unqualified "display: flex" here is an author rule
     and would beat the UA's "dialog:not([open]) { display: none }", leaving a transparent
     full-screen overlay over the board between render and the showModal() in _syncOverlayLayers.
     Parks .hl-sheet on the bottom edge; the strip left above it is the real ::backdrop. */
  .at__drawer-overlay[open] {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .at__drawer-overlay::backdrop {
    background: rgba(28, 19, 18, 0.5);
    opacity: 0;
    transition: opacity var(--hl-sheet-duration) ease;
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

  /* sheetStyles leaves .hl-sheet__body unpadded — the source-work tool pads its own content.
     The tag sections have no padding of their own, so the sheet supplies it here. */
  :host([compact]) .hl-sheet__body {
    padding: 1rem 0.9rem;
  }

  /* The section wrapper is a desktop-panel child on the board; inside the sheet it only needs
     to stack, and must not scroll — .hl-sheet__body is the sheet's single scroller. */
  :host([compact]) .hl-sheet__body .at-selection-section {
    padding: 0;
    overflow: visible;
  }

  /* Transition rather than animation, because this one has to run in both directions:
     --open drives the entry, and dropping it drives the exit that _closeSlotPicker waits out. */
  .at__drawer {
    transform: translateY(100%);
    transition: transform var(--hl-sheet-duration) var(--hl-sheet-easing);
  }

  .at__drawer--open {
    transform: translateY(0);
  }

  /* Slides the sheet out of the way while a tag is being dragged onto the board, without
     unmounting it — the drag is still live and must keep receiving pointer events. */
  .at__drawer--drag-hidden {
    transform: translateY(100%);
    pointer-events: none;
  }
`],xe="assigning";function it(r,e){for(const t of r){const o=t.configuration.tags.find(s=>s.id===e);if(o)return o.value}return e}function se(r){return/^data:image\//i.test(r)||/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(r)}function nt(r,e){const t=r.filter(s=>!e.has(s.id)),o=r.filter(s=>e.has(s.id));return[...t,...o]}function lt(r){const{value:e,type:t,onOpenImagePreview:o}=r;return t==="image"?m`
      <div class="at-static-item at-static-item--image">
        <img src=${e} alt="" loading="lazy" />
        <button
          type="button"
          class="at-static-item__zoom-btn"
          aria-label="Zvětšit obrázek"
          @click=${()=>o(e)}
        >
          <span class="at-static-item__zoom-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </button>
      </div>
    `:m`<span class="at-static-item at-static-item--tag">${e}</span>`}function ht(r){const{dependencyData:e,assignmentId:t,slotId:o,slotType:s,tagId:a,readOnly:i,onSlotClear:l}=r,n=it(e,a),d=s==="image"&&se(n);return m`
    <span class="at-slot__value">
      ${d?m`<img class="at-slot__value-image" src=${n} alt="Vybraný obrázek" loading="lazy" />`:n}
      ${i?g:m`<button
            class="at-slot__value-remove-btn"
            aria-label="Odebrat tag"
            @click=${h=>{h.stopPropagation(),l(t,o)}}
          ></button>`}
    </span>
  `}function dt(r){const{assignmentId:e,slotId:t,slotType:o,isStatic:s,staticItems:a,slotLabel:i,slotKey:l,slotValue:n,dependencyData:d,readOnly:h,isCompact:c,isPending:p,onOpenImagePreview:_,onSlotClear:u,onSlotPick:T}=r,v=["at-slot-active",s?"at-slot--static":"",s?"":"at-slot--active",p?"at-slot--pending":""].filter(Boolean).join(" ");if(s)return m`
      <div class=${v} data-slot-key=${l} aria-label=${i}>
        <!-- <div class="at-slot__button at-slot__button--static"> -->
          <div class="at-slot__static-content">
            ${a.length?a.map(y=>lt({value:y,type:o,onOpenImagePreview:_})):m`<span class="at-slot__placeholder">${i}</span>`}
          </div>
        <!-- </div> -->
      </div>
    `;const $=n?ht({dependencyData:d,assignmentId:e,slotId:t,slotType:o,tagId:n,readOnly:h,onSlotClear:u}):m`<span class="at-slot__placeholder">${i}</span>`,w=c&&!h,U=y=>{w&&T(e,t,y.currentTarget)};return m`
    <div class=${v} data-slot-key=${l}>
      <div
        class="at-slot__button"
        data-assignment-id=${e}
        data-slot-id=${t}
        role=${w?"button":g}
        tabindex=${w?"0":g}
        aria-expanded=${w?String(p):g}
        @click=${w?U:g}
        @keydown=${w?y=>{y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),U(y))}:g}
      >
        ${$}
      </div>
    </div>
  `}function ct(r){const{assignment:e,state:t,dependencyData:o,readOnly:s,isCompact:a,pendingSlot:i,onOpenImagePreview:l,onSlotClear:n,onSlotPick:d}=r;return m`
    <article class="at-card" data-assignment-id=${e.id}>
      ${e.title?m`<div class="at-card__id">${e.title}</div>`:g}
      <div class="at-card__body">
        <!-- <div class="at-card__slot-list"> -->
          ${e.slotDefinitions.map(h=>{const c=`${e.id}::${h.id}`,p=t.slotValues[c],_=h.static?`${h.type==="image"?"Static image":"Static tag"} ${h.id}`:a?"+ Klepnutím vyberte položku":"+ Vyberte položku z nabídky a přetáhněte ji sem ";return dt({assignmentId:e.id,slotId:h.id,slotType:h.type,isStatic:!!h.static,staticItems:h.items??[],slotLabel:_,slotKey:c,slotValue:p,dependencyData:o,readOnly:s,isCompact:a,isPending:i?.assignmentId===e.id&&i?.slotId===h.id,onOpenImagePreview:l,onSlotClear:n,onSlotPick:d})})}
        <!-- </div> -->
      </div>
    </article>
  `}function gt(r){const{selectionId:e,tag:t,readOnly:o,isUsed:s,onTagPointerDown:a,onTagPointerMove:i,onTagPointerUp:l,onTagPointerCancel:n}=r,d=["at-selection__tag",se(t.value)?"at-selection__tag--image":"",o?"at-selection__tag--readonly":"",s?"at-selection__tag--used":""].filter(Boolean).join(" ");return m`
    <div
      class=${d}
      data-selection-id=${e}
      .draggable=${!o&&!s}
      @pointerdown=${h=>{!o&&!s&&a(h,e,t.id)}}
      @pointermove=${h=>{!o&&!s&&i(h)}}
      @pointerup=${h=>{!o&&!s&&l(h)}}
      @pointercancel=${h=>{!o&&!s&&n(h)}}
      @dragstart=${h=>{(o||s)&&h.preventDefault()}}
    >
      ${se(t.value)?m`<img class="at-selection__tag-image" src=${t.value} alt="Nabízený obrázek" loading="lazy" />`:t.value}
    </div>
  `}function pt(r){const{selection:e,readOnly:t,usedTagIds:o,onTagPointerDown:s,onTagPointerMove:a,onTagPointerUp:i,onTagPointerCancel:l}=r,n=e.configuration.mode==="singleUse",d=n?nt(e.configuration.tags,o):e.configuration.tags;return m`
    <section class="at-selection-section">
      <!-- <h3 class="at-selection-section__title">${e.moduleId}</h3> -->
      <div class="at-selection-list">
        ${d.map(h=>gt({selectionId:e.moduleId,tag:h,readOnly:t,isUsed:n&&o.has(h.id),onTagPointerDown:s,onTagPointerMove:a,onTagPointerUp:i,onTagPointerCancel:l}))}
      </div>
    </section>
  `}function $e(r){const{dependencyData:e,...t}=r;return e.length?e.map(o=>pt({selection:o,...t})):m`<div class="at__empty">No dependency selection data was provided.</div>`}function ke(r,e,t){return m`
    <div class="at__progress-badge ${t?"at__progress-badge--done":""}">
      <span class="at__progress-icon">${t?"✓":r}</span>
      <span class="at__progress-text">${t?"Vše přiřazeno":m`/ ${e}`}</span>
    </div>
  `}function Se(r,e){return m`
    <button
      class="at__reset-btn"
      aria-label="Resetovat výběr"
      ?disabled=${r}
      @click=${e}
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
  `}function ut(r){const{configuration:e,dependencyData:t,state:o,readOnly:s,usedTagIds:a,pendingSlot:i,dragHidden:l,visible:n,onSlotClear:d,onSlotPickerClose:h,...c}=r,p=e.assignments.find(b=>b.id===i.assignmentId),_=p?.slotDefinitions.filter(b=>b.static&&b.items?.length)??[],u=_.find(b=>b.type==="image")?.items?.[0],T=p?.title||_.find(b=>b.type==="tag")?.items?.[0]||i.assignmentId,v=e.assignment||`Přiřadit k: ${T}`,$=!!e.assignment,w=o.slotValues[`${i.assignmentId}::${i.slotId}`],U=["hl-sheet-overlay","at__drawer-overlay",n?"at__drawer-overlay--open":"",l?"at__drawer-overlay--drag-hidden":""].filter(Boolean).join(" "),y=["hl-sheet","at__drawer",n?"at__drawer--open":"",l?"at__drawer--drag-hidden":""].filter(Boolean).join(" ");return m`
    <dialog
      class=${U}
      aria-label="Výběr položky k přiřazení"
      @cancel=${b=>{b.preventDefault(),h()}}
      @click=${b=>{b.target===b.currentTarget&&h()}}
    >
      <aside class=${y}>
        <div class="hl-sheet__inner">
          <header class="hl-sheet__header">
            ${u?m`<img class="hl-sheet__media" src=${u} alt="" loading="lazy" />`:g}
            <div class="hl-sheet__header-text">
              <h2 class="hl-sheet__heading">${v}</h2>
              ${$?m`<p class="hl-sheet__subtitle">${T}</p>`:g}
            </div>
            <!-- Empty on purpose: the × is drawn by ::before/::after in sheetStyles. -->
            <button
              type="button"
              class="hl-sheet__close"
              aria-label="Zavřít výběr"
              @click=${h}
            ></button>
          </header>

          <div class="hl-sheet__body">
            ${$e({dependencyData:t,readOnly:s,usedTagIds:a,...c})}
          </div>

          <footer class="hl-sheet__footer">
            ${w&&!s?m`<button
                  type="button"
                  class="hl-sheet__secondary"
                  @click=${()=>{d(i.assignmentId,i.slotId),h()}}
                >
                  Odebrat přiřazení
                </button>`:g}
            <button type="button" class="hl-sheet__done" @click=${h}>
              Hotovo
            </button>
          </footer>
        </div>
      </aside>
    </dialog>
  `}function mt(r){const{configuration:e,dependencyData:t,state:o,readOnly:s,usedTagIds:a,previewImageUrl:i,isCompact:l,pendingSlot:n,drawerDragHidden:d,drawerVisible:h,onTagPointerDown:c,onTagPointerMove:p,onTagPointerUp:_,onTagPointerCancel:u,onOpenImagePreview:T,onCloseImagePreview:v,onSlotClear:$,onSlotPick:w,onSlotPickerClose:U,onReset:y}=r,b={onTagPointerDown:c,onTagPointerMove:p,onTagPointerUp:_,onTagPointerCancel:u},G=e.assignments.length,ae=e.assignments.filter(k=>{const Te=k.slotDefinitions.filter(re=>!re.static);return Te.length>0&&Te.every(re=>!!o.slotValues[`${k.id}::${re.id}`])}).length,Ae=G>0&&ae===G,vt=l&&!!n;return m`
      <div class="at__layout">
        ${l?m`<header class="at__compact-bar">
              <p class="at__eyebrow">Výběr</p>
              ${ke(ae,G,Ae)}
              ${Se(s,y)}
            </header>`:g}

        <section class="at__panel-board">
          <div class="at__board">
            ${e.assignments.map(k=>ct({assignment:k,state:o,dependencyData:t,readOnly:s,isCompact:l,pendingSlot:n,onOpenImagePreview:T,onSlotClear:$,onSlotPick:w}))}
          </div>
        </section>

        <section class="at__panel">
          <header class="at__panel-header">
            <p class="at__eyebrow">Výběr</p>
            ${ke(ae,G,Ae)}
            ${Se(s,y)}
          </header>

          <div class="at__selections">
            ${$e({dependencyData:t,readOnly:s,usedTagIds:a,...b})}
          </div>
        </section>
      </div>

      ${vt&&n?ut({configuration:e,dependencyData:t,state:o,readOnly:s,usedTagIds:a,pendingSlot:n,dragHidden:d,visible:h,onSlotClear:$,onSlotPickerClose:U,...b}):g}

      ${i?m`
            <dialog
              class="at__modal-overlay"
              aria-label="Detail obrázku"
              @cancel=${k=>{k.preventDefault(),v()}}
              @click=${k=>{k.target===k.currentTarget&&v()}}
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
                <img class="at__modal-image" src=${i} alt="Detail obrázku" loading="lazy" />
              </div>
            </dialog>
          `:g}
  `}var _t=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,x=(r,e,t,o)=>{for(var s=o>1?void 0:o?ft(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(o?i(e,t,s):i(s))||s);return o&&s&&_t(e,t,s),s};const bt=8;return f.AssigningTool=class extends q{constructor(){super(),this.exportVersion=1,this._dragTargetSlotEl=null,this._dragTargetCardEl=null,this._currentDragTagId=null,this._currentDragSelectionId=null,this._dragSourceEl=null,this._ghost=null,this._dragStartX=0,this._dragStartY=0,this._dragActive=!1,this._lastSlotTriggerEl=null,this._compactMql=null,this._drawerCloseTimer=null,this._dropTargets=[],this._scrollLock=new Qe({allow:()=>this.shadowRoot?.querySelector(".hl-sheet")??null,from:()=>this.parentElement}),this._handleCompactChange=e=>{this._isCompact=e.matches,!this._isCompact&&(this._clearDrawerCloseTimer(),this._pendingSlot=null,this._drawerVisible=!1)},this._handleWindowKeyDown=e=>{if(e.key==="Escape"){if(this._previewImageUrl){e.preventDefault(),this._closeImagePreview();return}this._pendingSlot&&(e.preventDefault(),this._closeSlotPicker())}},this.configuration={moduleId:"assigning-local",moduleType:xe,dependencies:[],viewSettings:{},assignments:[]},this.dependencyData=[],this.userData={assignments:[]},this.readOnly=!1,this._state={slotValues:{}},this._previewImageUrl=null,this._isCompact=!1,this._pendingSlot=null,this._drawerDragHidden=!1,this._drawerVisible=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._handleWindowKeyDown),typeof window.matchMedia=="function"&&(this._compactMql=window.matchMedia(tt),this._isCompact=this._compactMql.matches,this._compactMql.addEventListener("change",this._handleCompactChange))}disconnectedCallback(){this._scrollLock.set(!1),window.removeEventListener("keydown",this._handleWindowKeyDown),this._compactMql?.removeEventListener("change",this._handleCompactChange),this._compactMql=null,this._clearDrawerCloseTimer(),this._pendingSlot=null,this._drawerVisible=!1,super.disconnectedCallback()}_clearDrawerCloseTimer(){this._drawerCloseTimer!==null&&(window.clearTimeout(this._drawerCloseTimer),this._drawerCloseTimer=null)}_syncOverlayLayers(){const e=this.shadowRoot?.querySelector(".at__modal-overlay"),t=!!this._previewImageUrl;t?e&&!e.open&&e.showModal():e?.open&&e.close();const o=this.shadowRoot?.querySelector(".hl-sheet-overlay");o&&!o.open&&(o.showModal(),this.shadowRoot?.querySelector(".hl-sheet")?.offsetWidth,requestAnimationFrame(()=>{this._pendingSlot&&(this._drawerVisible=!0)}),this.shadowRoot?.querySelector(".hl-sheet__close")?.focus()),this._scrollLock.set(t||!!this._pendingSlot)}_slotKey(e,t){return`${e}::${t}`}_rebuildState(){const e={};for(const t of this.userData.assignments??[])for(const o of t.slots)o.tagId&&(e[this._slotKey(t.id,o.slotId)]=o.tagId);this._state={slotValues:e}}_emitChange(){const e=this.exportModule(),t=this._computeFeedback(e);this.dispatchEvent(new CustomEvent("assigning-tool:change",{bubbles:!0,composed:!0,detail:{exportModule:e,feedback:t}}))}_computeFeedback(e){const t=e.configuration.assignments||[],o=e.userData.assignments||[],s=Array.isArray(e.configuration.feedback)?e.configuration.feedback:[],a=s.length>0;let i=0,l=0;t.forEach(p=>{const _=o.find(u=>u.id===p.id);(p.slotDefinitions||[]).forEach(u=>{if(u.static)return;i+=1;const v=_?.slots?.find(w=>w.slotId===u.id)?.tagId||"",$=Array.isArray(u.spravnaOdpoved)?u.spravnaOdpoved:u.spravnaOdpoved?[u.spravnaOdpoved]:[];v&&($.length===0||$.includes(v))&&(l+=1)})});const n=t.every(p=>{const _=o.find(u=>u.id===p.id);return(p.slotDefinitions||[]).filter(u=>!u.static).every(u=>!!_?.slots?.find(v=>v.slotId===u.id)?.tagId)}),d=i-l,h=a&&n?this._resolveFeedbackItem(s,d):null,c=s.map(p=>p.color||p.barva).filter(p=>!!p);return{enabled:a,isComplete:n,requiredSlotsCount:i,correctCount:l,wrongCount:d,text:h?.text||null,color:h?.color||h?.barva||null,colors:c}}_resolveFeedbackItem(e,t){if(e.length===0)return null;const o=e.find(s=>{const a=s.condition??s.podminka;return Array.isArray(a)?a.includes(t):a===t});return o||e.find(s=>{const a=s.condition??s.podminka;return Array.isArray(a)?a.includes(0):a===0})||e[e.length-1]}_assignTag(e,t,o){if(this.readOnly)return;const s=this._slotKey(e,t);this._state={slotValues:{...this._state.slotValues,[s]:o}},this.requestUpdate(),this._emitChange()}_clearSlot(e,t){if(this.readOnly)return;const o=this._slotKey(e,t),s={...this._state.slotValues};delete s[o],this._state={slotValues:s},this.requestUpdate(),this._emitChange()}_resetAll(){this.readOnly||(this._state={slotValues:{}},this.requestUpdate(),this._emitChange())}_openImagePreview(e){this._previewImageUrl=e}_closeImagePreview(){this._previewImageUrl=null}_isTagSingleUseBlocked(e,t){return this.dependencyData.find(s=>s.moduleId===e)?.configuration.mode!=="singleUse"?!1:Object.values(this._state.slotValues).includes(t)}_openSlotPicker(e,t,o){this.readOnly||!this._isCompact||(this._clearDrawerCloseTimer(),this._lastSlotTriggerEl=o,this._drawerDragHidden=!1,this._pendingSlot||(this._drawerVisible=!1),this._pendingSlot={assignmentId:e,slotId:t})}_closeSlotPicker(){this._pendingSlot&&(this._drawerVisible=!1,this._drawerDragHidden=!1,this._clearDrawerCloseTimer(),this._drawerCloseTimer=window.setTimeout(()=>{this._drawerCloseTimer=null,this._pendingSlot=null},ot),this._lastSlotTriggerEl?.focus?.(),this._lastSlotTriggerEl=null)}_handleTagTap(e,t){const o=this._pendingSlot;!o||this.readOnly||this._isTagSingleUseBlocked(e,t)||(this._assignTag(o.assignmentId,o.slotId,t),this._closeSlotPicker())}_handleTagPointerDown(e,t,o){if(this.readOnly)return;if(this._isTagSingleUseBlocked(t,o)){e.preventDefault();return}e.preventDefault();const s=e.currentTarget;s.setPointerCapture(e.pointerId),this._currentDragTagId=o,this._currentDragSelectionId=t,this._dragSourceEl=s,this._dragStartX=e.clientX,this._dragStartY=e.clientY,this._dragActive=!1}_beginPointerDrag(e){const t=this._dragSourceEl;if(!t)return;this._dragActive=!0,t.classList.add("at-selection__tag--dragging"),this._pendingSlot&&(this._drawerDragHidden=!0,this._captureDropTargets());const o=document.createElement("div"),s=t.querySelector("img");if(s){const a=s.cloneNode(!0);a.style.display="block",a.style.width="96px",a.style.maxHeight="64px",a.style.objectFit="cover",a.style.borderRadius="8px",o.appendChild(a)}else o.textContent=t.textContent;o.style.cssText=["position:fixed","z-index:9999","pointer-events:none","display:flex","align-items:center",`padding:${getComputedStyle(t).padding}`,`font:${getComputedStyle(t).font}`,`border-radius:${getComputedStyle(t).borderRadius}`,"border:1px solid rgba(180,95,6,0.55)","background:#fff","color:#1d1a17","box-shadow:0 8px 24px rgba(45,35,22,0.25)","max-width:15rem","white-space:normal","word-break:break-word","transform:translate(-50%,-50%)"].join(";"),document.body.appendChild(o),this._ghost=o,this._moveGhost(e.clientX,e.clientY)}_handleTagPointerMove(e){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId)return;if(e.preventDefault(),!this._dragActive){const i=e.clientX-this._dragStartX,l=e.clientY-this._dragStartY;if(Math.hypot(i,l)<bt)return;this._beginPointerDrag(e)}if(!this._ghost)return;this._moveGhost(e.clientX,e.clientY);const t=this._findDropSlotEl(e.clientX,e.clientY),o=t?.dataset.assignmentId??null,s=t?.dataset.slotId?t:null,a=o?this._findCardElForAssignmentId(o):null;s!==this._dragTargetSlotEl&&(this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetSlotEl=s,s?.classList.add("at-slot--drop-target")),a!==this._dragTargetCardEl&&(this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._dragTargetCardEl=a,a?.classList.add("at-card--drop-target"))}_handleTagPointerUp(e){if(this.readOnly){this._cleanupPointerDrag();return}if(!this._currentDragTagId)return;const t=this._currentDragTagId,o=this._currentDragSelectionId,s=this._dragActive,a=s?this._findDropSlotEl(e.clientX,e.clientY):null;if(this._cleanupPointerDrag(),!s){o&&this._handleTagTap(o,t);return}if(!a?.dataset.assignmentId)return;const i=a.dataset.assignmentId;if(a.dataset.slotId){this._assignTag(i,a.dataset.slotId,t),this._closeSlotPicker();return}const l=this.configuration.assignments.find(d=>d.id===i);if(!l)return;const n=l.slotDefinitions.find(d=>d.static?!1:!this._state.slotValues[this._slotKey(i,d.id)]);n&&(this._assignTag(i,n.id,t),this._closeSlotPicker())}_handleTagPointerCancel(){this._cleanupPointerDrag()}_moveGhost(e,t){this._ghost&&(this._ghost.style.left=`${e}px`,this._ghost.style.top=`${t}px`)}_captureDropTargets(){const e=this.shadowRoot;if(!e)return;const t=Array.from(e.querySelectorAll(".at-slot__button[data-slot-id]")),o=Array.from(e.querySelectorAll("article[data-assignment-id]"));this._dropTargets=[...t.map(s=>({el:s,rect:s.getBoundingClientRect(),isSlot:!0})),...o.map(s=>({el:s,rect:s.getBoundingClientRect(),isSlot:!1}))]}_findDropSlotEl(e,t){if(this._dropTargets.length){const a=this._dropTargets.filter(({rect:i})=>e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom);return a.find(i=>i.isSlot)?.el??a[0]?.el??null}if(!this.shadowRoot)return null;const o=this.shadowRoot.elementsFromPoint(e,t);let s=null;for(const a of o)if(a instanceof HTMLElement&&a.dataset.assignmentId){if(a.dataset.slotId)return a;s||(s=a)}return s}_findCardElForAssignmentId(e){return this.shadowRoot?.querySelector(`article[data-assignment-id="${e}"]`)??null}_cleanupPointerDrag(){this._dragSourceEl?.classList.remove("at-selection__tag--dragging"),this._dragTargetSlotEl?.classList.remove("at-slot--drop-target"),this._dragTargetCardEl?.classList.remove("at-card--drop-target"),this._ghost?.remove(),this._ghost=null,this._currentDragTagId=null,this._currentDragSelectionId=null,this._dragSourceEl=null,this._dragTargetSlotEl=null,this._dragTargetCardEl=null,this._dragActive=!1,this._drawerDragHidden=!1,this._dropTargets=[]}_serializeUserData(){return{assignments:this.configuration.assignments.map(t=>({id:t.id,slots:t.slotDefinitions.filter(o=>!o.static).map(o=>{const s=this._slotKey(t.id,o.id),a=this._state.slotValues[s];return{slotId:o.id,tagId:a??""}})}))}}exportModule(){const e=this.configuration.moduleId??"local";return{version:this.exportVersion,moduleId:e,moduleType:xe,configuration:{...this.configuration},userData:this._serializeUserData(),updatedAt:new Date().toISOString()}}willUpdate(e){(e.has("configuration")||e.has("userData"))&&this._rebuildState(),e.has("readOnly")&&this.readOnly&&(this._clearDrawerCloseTimer(),this._pendingSlot=null,this._drawerVisible=!1)}updated(e){(e.has("configuration")||e.has("userData"))&&this._emitChange(),e.has("_isCompact")&&this.toggleAttribute("compact",this._isCompact),(e.has("_previewImageUrl")||e.has("_pendingSlot"))&&this._syncOverlayLayers()}render(){const e=new Set(Object.values(this._state.slotValues));return mt({configuration:this.configuration,dependencyData:this.dependencyData,state:this._state,readOnly:this.readOnly,usedTagIds:e,previewImageUrl:this._previewImageUrl,isCompact:this._isCompact,pendingSlot:this._pendingSlot,drawerDragHidden:this._drawerDragHidden,drawerVisible:this._drawerVisible,onTagPointerDown:(t,o,s)=>this._handleTagPointerDown(t,o,s),onTagPointerMove:t=>this._handleTagPointerMove(t),onTagPointerUp:t=>this._handleTagPointerUp(t),onTagPointerCancel:()=>this._handleTagPointerCancel(),onOpenImagePreview:t=>this._openImagePreview(t),onCloseImagePreview:()=>this._closeImagePreview(),onSlotClear:(t,o)=>this._clearSlot(t,o),onSlotPick:(t,o,s)=>this._openSlotPicker(t,o,s),onSlotPickerClose:()=>this._closeSlotPicker(),onReset:()=>this._resetAll()})}},f.AssigningTool.styles=rt,x([K({attribute:!1})],f.AssigningTool.prototype,"configuration",2),x([K({attribute:!1})],f.AssigningTool.prototype,"dependencyData",2),x([K({attribute:!1})],f.AssigningTool.prototype,"userData",2),x([K({type:Boolean,reflect:!0})],f.AssigningTool.prototype,"readOnly",2),x([z()],f.AssigningTool.prototype,"_state",2),x([z()],f.AssigningTool.prototype,"_previewImageUrl",2),x([z()],f.AssigningTool.prototype,"_isCompact",2),x([z()],f.AssigningTool.prototype,"_pendingSlot",2),x([z()],f.AssigningTool.prototype,"_drawerDragHidden",2),x([z()],f.AssigningTool.prototype,"_drawerVisible",2),f.AssigningTool=x([Ze("assigning-tool")],f.AssigningTool),Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),f})({});
//# sourceMappingURL=assigning-tool.js.map
