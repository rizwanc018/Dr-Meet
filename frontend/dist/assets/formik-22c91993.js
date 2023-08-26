import{d as x}from"./deepmerge-15f827de.js";import{i as Ee,t as Se,c as ye}from"./lodash-es-9bd48fb4.js";import{r as f}from"./react-4df190a1.js";import{i as k}from"./react-fast-compare-853c6d8d.js";import{w as Be}from"./tiny-warning-c932d744.js";import"./hoist-non-react-statics-23d96a9a.js";function m(){return m=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var u=arguments[t];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(r[n]=u[n])}return r},m.apply(this,arguments)}function me(r,t){if(r==null)return{};var u={},n=Object.keys(r),l,c;for(c=0;c<n.length;c++)l=n[c],!(t.indexOf(l)>=0)&&(u[l]=r[l]);return u}var W=f.createContext(void 0);W.displayName="FormikContext";W.Provider;W.Consumer;function Ne(){var r=f.useContext(W);return r||Be(!1),r}var R=function(t){return typeof t=="function"},j=function(t){return t!==null&&typeof t=="object"},He=function(t){return String(Math.floor(Number(t)))===t},X=function(t){return Object.prototype.toString.call(t)==="[object String]"},Z=function(t){return j(t)&&R(t.then)};function T(r,t,u,n){n===void 0&&(n=0);for(var l=Se(t);r&&n<l.length;)r=r[l[n++]];return n!==l.length&&!r||r===void 0?u:r}function D(r,t,u){for(var n=ye(r),l=n,c=0,v=Se(t);c<v.length-1;c++){var y=v[c],C=T(r,v.slice(0,c+1));if(C&&(j(C)||Array.isArray(C)))l=l[y]=ye(C);else{var g=v[c+1];l=l[y]=He(g)&&Number(g)>=0?[]:{}}}return(c===0?r:l)[v[c]]===u?r:(u===void 0?delete l[v[c]]:l[v[c]]=u,c===0&&u===void 0&&delete n[v[c]],n)}function Te(r,t,u,n){u===void 0&&(u=new WeakMap),n===void 0&&(n={});for(var l=0,c=Object.keys(r);l<c.length;l++){var v=c[l],y=r[v];j(y)?u.get(y)||(u.set(y,!0),n[v]=Array.isArray(y)?[]:{},Te(y,t,u,n[v])):n[v]=t}return n}function Pe(r,t){switch(t.type){case"SET_VALUES":return m({},r,{values:t.payload});case"SET_TOUCHED":return m({},r,{touched:t.payload});case"SET_ERRORS":return k(r.errors,t.payload)?r:m({},r,{errors:t.payload});case"SET_STATUS":return m({},r,{status:t.payload});case"SET_ISSUBMITTING":return m({},r,{isSubmitting:t.payload});case"SET_ISVALIDATING":return m({},r,{isValidating:t.payload});case"SET_FIELD_VALUE":return m({},r,{values:D(r.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return m({},r,{touched:D(r.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return m({},r,{errors:D(r.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return m({},r,t.payload);case"SET_FORMIK_STATE":return t.payload(r);case"SUBMIT_ATTEMPT":return m({},r,{touched:Te(r.values,!0),isSubmitting:!0,submitCount:r.submitCount+1});case"SUBMIT_FAILURE":return m({},r,{isSubmitting:!1});case"SUBMIT_SUCCESS":return m({},r,{isSubmitting:!1});default:return r}}var O={},G={};function rr(r){var t=r.validateOnChange,u=t===void 0?!0:t,n=r.validateOnBlur,l=n===void 0?!0:n,c=r.validateOnMount,v=c===void 0?!1:c,y=r.isInitialValid,C=r.enableReinitialize,g=C===void 0?!1:C,re=r.onSubmit,Fe=me(r,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),s=m({validateOnChange:u,validateOnBlur:l,validateOnMount:v,onSubmit:re},Fe),b=f.useRef(s.initialValues),L=f.useRef(s.initialErrors||O),M=f.useRef(s.initialTouched||G),w=f.useRef(s.initialStatus),I=f.useRef(!1),V=f.useRef({});f.useEffect(function(){return I.current=!0,function(){I.current=!1}},[]);var ge=f.useState(0),be=ge[1],H=f.useRef({values:s.initialValues,errors:s.initialErrors||O,touched:s.initialTouched||G,status:s.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),E=H.current,p=f.useCallback(function(e){var i=H.current;H.current=Pe(i,e),i!==H.current&&be(function(a){return a+1})},[]),te=f.useCallback(function(e,i){return new Promise(function(a,o){var d=s.validate(e,i);d==null?a(O):Z(d)?d.then(function(h){a(h||O)},function(h){o(h)}):a(d)})},[s.validate]),K=f.useCallback(function(e,i){var a=s.validationSchema,o=R(a)?a(i):a,d=i&&o.validateAt?o.validateAt(i,e):We(e,o);return new Promise(function(h,S){d.then(function(){h(O)},function(_){_.name==="ValidationError"?h(Ge(_)):S(_)})})},[s.validationSchema]),ie=f.useCallback(function(e,i){return new Promise(function(a){return a(V.current[e].validate(i))})},[]),ne=f.useCallback(function(e){var i=Object.keys(V.current).filter(function(o){return R(V.current[o].validate)}),a=i.length>0?i.map(function(o){return ie(o,T(e,o))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(a).then(function(o){return o.reduce(function(d,h,S){return h==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||h&&(d=D(d,i[S],h)),d},{})})},[ie]),Ie=f.useCallback(function(e){return Promise.all([ne(e),s.validationSchema?K(e):{},s.validate?te(e):{}]).then(function(i){var a=i[0],o=i[1],d=i[2],h=x.all([a,o,d],{arrayMerge:je});return h})},[s.validate,s.validationSchema,ne,te,K]),A=F(function(e){return e===void 0&&(e=E.values),p({type:"SET_ISVALIDATING",payload:!0}),Ie(e).then(function(i){return I.current&&(p({type:"SET_ISVALIDATING",payload:!1}),p({type:"SET_ERRORS",payload:i})),i})});f.useEffect(function(){v&&I.current===!0&&k(b.current,s.initialValues)&&A(b.current)},[v,A]);var N=f.useCallback(function(e){var i=e&&e.values?e.values:b.current,a=e&&e.errors?e.errors:L.current?L.current:s.initialErrors||{},o=e&&e.touched?e.touched:M.current?M.current:s.initialTouched||{},d=e&&e.status?e.status:w.current?w.current:s.initialStatus;b.current=i,L.current=a,M.current=o,w.current=d;var h=function(){p({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:a,touched:o,status:d,values:i,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&typeof e.submitCount=="number"?e.submitCount:0}})};if(s.onReset){var S=s.onReset(E.values,he);Z(S)?S.then(h):h()}else h()},[s.initialErrors,s.initialStatus,s.initialTouched]);f.useEffect(function(){I.current===!0&&!k(b.current,s.initialValues)&&g&&(b.current=s.initialValues,N(),v&&A(b.current))},[g,s.initialValues,N,v,A]),f.useEffect(function(){g&&I.current===!0&&!k(L.current,s.initialErrors)&&(L.current=s.initialErrors||O,p({type:"SET_ERRORS",payload:s.initialErrors||O}))},[g,s.initialErrors]),f.useEffect(function(){g&&I.current===!0&&!k(M.current,s.initialTouched)&&(M.current=s.initialTouched||G,p({type:"SET_TOUCHED",payload:s.initialTouched||G}))},[g,s.initialTouched]),f.useEffect(function(){g&&I.current===!0&&!k(w.current,s.initialStatus)&&(w.current=s.initialStatus,p({type:"SET_STATUS",payload:s.initialStatus}))},[g,s.initialStatus,s.initialTouched]);var ae=F(function(e){if(V.current[e]&&R(V.current[e].validate)){var i=T(E.values,e),a=V.current[e].validate(i);return Z(a)?(p({type:"SET_ISVALIDATING",payload:!0}),a.then(function(o){return o}).then(function(o){p({type:"SET_FIELD_ERROR",payload:{field:e,value:o}}),p({type:"SET_ISVALIDATING",payload:!1})})):(p({type:"SET_FIELD_ERROR",payload:{field:e,value:a}}),Promise.resolve(a))}else if(s.validationSchema)return p({type:"SET_ISVALIDATING",payload:!0}),K(E.values,e).then(function(o){return o}).then(function(o){p({type:"SET_FIELD_ERROR",payload:{field:e,value:T(o,e)}}),p({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ae=f.useCallback(function(e,i){var a=i.validate;V.current[e]={validate:a}},[]),Re=f.useCallback(function(e){delete V.current[e]},[]),ue=F(function(e,i){p({type:"SET_TOUCHED",payload:e});var a=i===void 0?l:i;return a?A(E.values):Promise.resolve()}),le=f.useCallback(function(e){p({type:"SET_ERRORS",payload:e})},[]),oe=F(function(e,i){var a=R(e)?e(E.values):e;p({type:"SET_VALUES",payload:a});var o=i===void 0?u:i;return o?A(a):Promise.resolve()}),P=f.useCallback(function(e,i){p({type:"SET_FIELD_ERROR",payload:{field:e,value:i}})},[]),U=F(function(e,i,a){p({type:"SET_FIELD_VALUE",payload:{field:e,value:i}});var o=a===void 0?u:a;return o?A(D(E.values,e,i)):Promise.resolve()}),se=f.useCallback(function(e,i){var a=i,o=e,d;if(!X(e)){e.persist&&e.persist();var h=e.target?e.target:e.currentTarget,S=h.type,_=h.name,J=h.id,Q=h.value,we=h.checked,qe=h.outerHTML,pe=h.options,Ue=h.multiple;a=i||_||J,o=/number|range/.test(S)?(d=parseFloat(Q),isNaN(d)?"":d):/checkbox/.test(S)?$e(T(E.values,a),we,Q):pe&&Ue?Ke(pe):Q}a&&U(a,o)},[U,E.values]),$=F(function(e){if(X(e))return function(i){return se(i,e)};se(e)}),B=F(function(e,i,a){i===void 0&&(i=!0),p({type:"SET_FIELD_TOUCHED",payload:{field:e,value:i}});var o=a===void 0?l:a;return o?A(E.values):Promise.resolve()}),ce=f.useCallback(function(e,i){e.persist&&e.persist();var a=e.target,o=a.name,d=a.id,h=a.outerHTML,S=i||o||d;B(S,!0)},[B]),z=F(function(e){if(X(e))return function(i){return ce(i,e)};ce(e)}),fe=f.useCallback(function(e){R(e)?p({type:"SET_FORMIK_STATE",payload:e}):p({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),de=f.useCallback(function(e){p({type:"SET_STATUS",payload:e})},[]),ve=f.useCallback(function(e){p({type:"SET_ISSUBMITTING",payload:e})},[]),Y=F(function(){return p({type:"SUBMIT_ATTEMPT"}),A().then(function(e){var i=e instanceof Error,a=!i&&Object.keys(e).length===0;if(a){var o;try{if(o=_e(),o===void 0)return}catch(d){throw d}return Promise.resolve(o).then(function(d){return I.current&&p({type:"SUBMIT_SUCCESS"}),d}).catch(function(d){if(I.current)throw p({type:"SUBMIT_FAILURE"}),d})}else if(I.current&&(p({type:"SUBMIT_FAILURE"}),i))throw e})}),Ce=F(function(e){e&&e.preventDefault&&R(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&R(e.stopPropagation)&&e.stopPropagation(),Y().catch(function(i){console.warn("Warning: An unhandled error was caught from submitForm()",i)})}),he={resetForm:N,validateForm:A,validateField:ae,setErrors:le,setFieldError:P,setFieldTouched:B,setFieldValue:U,setStatus:de,setSubmitting:ve,setTouched:ue,setValues:oe,setFormikState:fe,submitForm:Y},_e=F(function(){return re(E.values,he)}),Ve=F(function(e){e&&e.preventDefault&&R(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&R(e.stopPropagation)&&e.stopPropagation(),N()}),Le=f.useCallback(function(e){return{value:T(E.values,e),error:T(E.errors,e),touched:!!T(E.touched,e),initialValue:T(b.current,e),initialTouched:!!T(M.current,e),initialError:T(L.current,e)}},[E.errors,E.touched,E.values]),Me=f.useCallback(function(e){return{setValue:function(a,o){return U(e,a,o)},setTouched:function(a,o){return B(e,a,o)},setError:function(a){return P(e,a)}}},[U,B,P]),Oe=f.useCallback(function(e){var i=j(e),a=i?e.name:e,o=T(E.values,a),d={name:a,value:o,onChange:$,onBlur:z};if(i){var h=e.type,S=e.value,_=e.as,J=e.multiple;h==="checkbox"?S===void 0?d.checked=!!o:(d.checked=!!(Array.isArray(o)&&~o.indexOf(S)),d.value=S):h==="radio"?(d.checked=o===S,d.value=S):_==="select"&&J&&(d.value=d.value||[],d.multiple=!0)}return d},[z,$,E.values]),q=f.useMemo(function(){return!k(b.current,E.values)},[b.current,E.values]),ke=f.useMemo(function(){return typeof y<"u"?q?E.errors&&Object.keys(E.errors).length===0:y!==!1&&R(y)?y(s):y:E.errors&&Object.keys(E.errors).length===0},[y,q,E.errors,s]),De=m({},E,{initialValues:b.current,initialErrors:L.current,initialTouched:M.current,initialStatus:w.current,handleBlur:z,handleChange:$,handleReset:Ve,handleSubmit:Ce,resetForm:N,setErrors:le,setFormikState:fe,setFieldTouched:B,setFieldValue:U,setFieldError:P,setStatus:de,setSubmitting:ve,setTouched:ue,setValues:oe,submitForm:Y,validateForm:A,validateField:ae,isValid:ke,dirty:q,unregisterField:Re,registerField:Ae,getFieldProps:Oe,getFieldMeta:Le,getFieldHelpers:Me,validateOnBlur:l,validateOnChange:u,validateOnMount:v});return De}function Ge(r){var t={};if(r.inner){if(r.inner.length===0)return D(t,r.path,r.message);for(var l=r.inner,u=Array.isArray(l),n=0,l=u?l:l[Symbol.iterator]();;){var c;if(u){if(n>=l.length)break;c=l[n++]}else{if(n=l.next(),n.done)break;c=n.value}var v=c;T(t,v.path)||(t=D(t,v.path,v.message))}}return t}function We(r,t,u,n){u===void 0&&(u=!1);var l=ee(r);return t[u?"validateSync":"validate"](l,{abortEarly:!1,context:n||l})}function ee(r){var t=Array.isArray(r)?[]:{};for(var u in r)if(Object.prototype.hasOwnProperty.call(r,u)){var n=String(u);Array.isArray(r[n])===!0?t[n]=r[n].map(function(l){return Array.isArray(l)===!0||Ee(l)?ee(l):l!==""?l:void 0}):Ee(r[n])?t[n]=ee(r[n]):t[n]=r[n]!==""?r[n]:void 0}return t}function je(r,t,u){var n=r.slice();return t.forEach(function(c,v){if(typeof n[v]>"u"){var y=u.clone!==!1,C=y&&u.isMergeableObject(c);n[v]=C?x(Array.isArray(c)?[]:{},c,u):c}else u.isMergeableObject(c)?n[v]=x(r[v],c,u):r.indexOf(c)===-1&&n.push(c)}),n}function Ke(r){return Array.from(r).filter(function(t){return t.selected}).map(function(t){return t.value})}function $e(r,t,u){if(typeof r=="boolean")return!!t;var n=[],l=!1,c=-1;if(Array.isArray(r))n=r,c=r.indexOf(u),l=c>=0;else if(!u||u=="true"||u=="false")return!!t;return t&&u&&!l?n.concat(u):l?n.slice(0,c).concat(n.slice(c+1)):n}var ze=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function F(r){var t=f.useRef(r);return ze(function(){t.current=r}),f.useCallback(function(){for(var u=arguments.length,n=new Array(u),l=0;l<u;l++)n[l]=arguments[l];return t.current.apply(void 0,n)},[])}var Ye=f.forwardRef(function(r,t){var u=r.action,n=me(r,["action"]),l=u??"#",c=Ne(),v=c.handleReset,y=c.handleSubmit;return f.createElement("form",m({onSubmit:y,ref:t,onReset:v,action:l},n))});Ye.displayName="Form";export{rr as u};
