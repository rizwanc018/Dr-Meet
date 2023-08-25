import{r as t,a as hn}from"./react-4df190a1.js";import"./react-is-e8e5dbb3.js";import{w as ft,k as vt,F as cn,K as D,b as mt,m as pt,e as gt,a as Vn,y as Sn,c as ht,z as bt,o as St,x as wt}from"./rc-util-723f3f08.js";import{c as Be}from"./classnames-3f11086c.js";import{c as q,e as Z,d as sn,b as te,g as Fe,h as Qe,p as Ct,f as Ee}from"./@babel-6ae3dd9c.js";import{F as yt}from"./rc-overflow-55c20e5e.js";import{T as It}from"./@rc-component-10b3e8c7.js";import{L as Et}from"./rc-virtual-list-728dfb7f.js";var Kn=t.createContext(null);function Dt(){return t.useContext(Kn)}function Rt(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=q(e,2),o=a[0],i=a[1],r=t.useRef(null),c=function(){window.clearTimeout(r.current)};t.useEffect(function(){return c},[]);var s=function(g,S){c(),r.current=window.setTimeout(function(){i(g),S&&S()},n)};return[o,s,c]}function $n(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(i){(i||e.current===null)&&(e.current=i),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function Ot(n,e,a,o){var i=t.useRef(null);i.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function r(c){var s;if(!((s=i.current)!==null&&s!==void 0&&s.customizedTrigger)){var f=c.target;f.shadowRoot&&c.composed&&(f=c.composedPath()[0]||f),i.current.open&&n().filter(function(g){return g}).every(function(g){return!g.contains(f)&&g!==f})&&i.current.triggerOpen(!1)}}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}var dn=function(e){var a=e.className,o=e.customizeIcon,i=e.customizeIconProps,r=e.onMouseDown,c=e.onClick,s=e.children,f;return typeof o=="function"?f=o(i):f=o,t.createElement("span",{className:a,onMouseDown:function(S){S.preventDefault(),r&&r(S)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:c,"aria-hidden":!0},f!==void 0?f:t.createElement("span",{className:Be(a.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},s))},Mt=function(e,a){var o,i,r=e.prefixCls,c=e.id,s=e.inputElement,f=e.disabled,g=e.tabIndex,S=e.autoFocus,d=e.autoComplete,w=e.editable,l=e.activeDescendantId,C=e.value,L=e.maxLength,z=e.onKeyDown,M=e.onMouseDown,V=e.onChange,_=e.onPaste,ee=e.onCompositionStart,Y=e.onCompositionEnd,H=e.open,ie=e.attrs,G=s||t.createElement("input",null),U=G,F=U.ref,$=U.props,oe=$.onKeyDown,J=$.onChange,N=$.onMouseDown,ae=$.onCompositionStart,T=$.onCompositionEnd,y=$.style;return ft(!("maxLength"in G.props)),G=t.cloneElement(G,Z(Z(Z({type:"search"},$),{},{id:c,ref:vt(a,F),disabled:f,tabIndex:g,autoComplete:d||"off",autoFocus:S,className:Be("".concat(r,"-selection-search-input"),(o=G)===null||o===void 0||(i=o.props)===null||i===void 0?void 0:i.className),role:"combobox","aria-label":"Search","aria-expanded":H,"aria-haspopup":"listbox","aria-owns":"".concat(c,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(c,"_list"),"aria-activedescendant":H?l:void 0},ie),{},{value:w?C:"",maxLength:L,readOnly:!w,unselectable:w?null:"on",style:Z(Z({},y),{},{opacity:w?null:0}),onKeyDown:function(P){z(P),oe&&oe(P)},onMouseDown:function(P){M(P),N&&N(P)},onChange:function(P){V(P),J&&J(P)},onCompositionStart:function(P){ee(P),ae&&ae(P)},onCompositionEnd:function(P){Y(P),T&&T(P)},onPaste:_})),G},yn=t.forwardRef(Mt);yn.displayName="Input";function Wn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var xt=typeof window<"u"&&window.document&&window.document.documentElement,Pt=xt;function Nt(n){return n!=null}function Vt(n){return!n&&n!==0}function Tn(n){return["string","number"].includes(sn(n))}function Bn(n){var e=void 0;return n&&(Tn(n.title)?e=n.title.toString():Tn(n.label)&&(e=n.label.toString())),e}function Tt(n,e){Pt?t.useLayoutEffect(n,e):t.useEffect(n,e)}function Lt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var Ln=function(e){e.preventDefault(),e.stopPropagation()},_t=function(e){var a=e.id,o=e.prefixCls,i=e.values,r=e.open,c=e.searchValue,s=e.autoClearSearchValue,f=e.inputRef,g=e.placeholder,S=e.disabled,d=e.mode,w=e.showSearch,l=e.autoFocus,C=e.autoComplete,L=e.activeDescendantId,z=e.tabIndex,M=e.removeIcon,V=e.maxTagCount,_=e.maxTagTextLength,ee=e.maxTagPlaceholder,Y=ee===void 0?function(O){return"+ ".concat(O.length," ...")}:ee,H=e.tagRender,ie=e.onToggleOpen,G=e.onRemove,U=e.onInputChange,F=e.onInputPaste,$=e.onInputKeyDown,oe=e.onInputMouseDown,J=e.onInputCompositionStart,N=e.onInputCompositionEnd,ae=t.useRef(null),T=t.useState(0),y=q(T,2),x=y[0],P=y[1],De=t.useState(!1),fe=q(De,2),le=fe[0],Pe=fe[1],k="".concat(o,"-selection"),ye=r||d==="multiple"&&s===!1||d==="tags"?c:"",Ne=d==="tags"||d==="multiple"&&s===!1||w&&(r||le);Tt(function(){P(ae.current.scrollWidth)},[ye]);function I(O,X,re,ce,pe){return t.createElement("span",{className:Be("".concat(k,"-item"),te({},"".concat(k,"-item-disabled"),re)),title:Bn(O)},t.createElement("span",{className:"".concat(k,"-item-content")},X),ce&&t.createElement(dn,{className:"".concat(k,"-item-remove"),onMouseDown:Ln,onClick:pe,customizeIcon:M},"×"))}function m(O,X,re,ce,pe){var ve=function(me){Ln(me),ie(!r)};return t.createElement("span",{onMouseDown:ve},H({label:X,value:O,disabled:re,closable:ce,onClose:pe}))}function R(O){var X=O.disabled,re=O.label,ce=O.value,pe=!S&&!X,ve=re;if(typeof _=="number"&&(typeof re=="string"||typeof re=="number")){var se=String(ve);se.length>_&&(ve="".concat(se.slice(0,_),"..."))}var me=function(Ve){Ve&&Ve.stopPropagation(),G(O)};return typeof H=="function"?m(ce,ve,X,pe,me):I(O,ve,X,pe,me)}function K(O){var X=typeof Y=="function"?Y(O):Y;return I({title:X},X,!1)}var A=t.createElement("div",{className:"".concat(k,"-search"),style:{width:x},onFocus:function(){Pe(!0)},onBlur:function(){Pe(!1)}},t.createElement(yn,{ref:f,open:r,prefixCls:o,id:a,inputElement:null,disabled:S,autoFocus:l,autoComplete:C,editable:Ne,activeDescendantId:L,value:ye,onKeyDown:$,onMouseDown:oe,onChange:U,onPaste:F,onCompositionStart:J,onCompositionEnd:N,tabIndex:z,attrs:cn(e,!0)}),t.createElement("span",{ref:ae,className:"".concat(k,"-search-mirror"),"aria-hidden":!0},ye," ")),W=t.createElement(yt,{prefixCls:"".concat(k,"-overflow"),data:i,renderItem:R,renderRest:K,suffix:A,itemKey:Lt,maxCount:V});return t.createElement(t.Fragment,null,W,!i.length&&!ye&&t.createElement("span",{className:"".concat(k,"-placeholder")},g))},At=function(e){var a=e.inputElement,o=e.prefixCls,i=e.id,r=e.inputRef,c=e.disabled,s=e.autoFocus,f=e.autoComplete,g=e.activeDescendantId,S=e.mode,d=e.open,w=e.values,l=e.placeholder,C=e.tabIndex,L=e.showSearch,z=e.searchValue,M=e.activeValue,V=e.maxLength,_=e.onInputKeyDown,ee=e.onInputMouseDown,Y=e.onInputChange,H=e.onInputPaste,ie=e.onInputCompositionStart,G=e.onInputCompositionEnd,U=e.title,F=t.useState(!1),$=q(F,2),oe=$[0],J=$[1],N=S==="combobox",ae=N||L,T=w[0],y=z||"";N&&M&&!oe&&(y=M),t.useEffect(function(){N&&J(!1)},[N,M]);var x=S!=="combobox"&&!d&&!L?!1:!!y,P=U===void 0?Bn(T):U,De=function(){if(T)return null;var le=x?{visibility:"hidden"}:void 0;return t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:le},l)};return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(yn,{ref:r,prefixCls:o,id:i,open:d,inputElement:a,disabled:c,autoFocus:s,autoComplete:f,editable:ae,activeDescendantId:g,value:y,onKeyDown:_,onMouseDown:ee,onChange:function(le){J(!0),Y(le)},onPaste:H,onCompositionStart:ie,onCompositionEnd:G,tabIndex:C,attrs:cn(e,!0),maxLength:N?V:void 0})),!N&&T?t.createElement("span",{className:"".concat(o,"-selection-item"),title:P,style:x?{visibility:"hidden"}:void 0},T.label):null,De())};function Ft(n){return![D.ESC,D.SHIFT,D.BACKSPACE,D.TAB,D.WIN_KEY,D.ALT,D.META,D.WIN_KEY_RIGHT,D.CTRL,D.SEMICOLON,D.EQUALS,D.CAPS_LOCK,D.CONTEXT_MENU,D.F1,D.F2,D.F3,D.F4,D.F5,D.F6,D.F7,D.F8,D.F9,D.F10,D.F11,D.F12].includes(n)}var kt=function(e,a){var o=t.useRef(null),i=t.useRef(!1),r=e.prefixCls,c=e.open,s=e.mode,f=e.showSearch,g=e.tokenWithEnter,S=e.autoClearSearchValue,d=e.onSearch,w=e.onSearchSubmit,l=e.onToggleOpen,C=e.onInputKeyDown,L=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var z=$n(0),M=q(z,2),V=M[0],_=M[1],ee=function(y){var x=y.which;(x===D.UP||x===D.DOWN)&&y.preventDefault(),C&&C(y),x===D.ENTER&&s==="tags"&&!i.current&&!c&&(w==null||w(y.target.value)),Ft(x)&&l(!0)},Y=function(){_(!0)},H=t.useRef(null),ie=function(y){d(y,!0,i.current)!==!1&&l(!0)},G=function(){i.current=!0},U=function(y){i.current=!1,s!=="combobox"&&ie(y.target.value)},F=function(y){var x=y.target.value;if(g&&H.current&&/[\r\n]/.test(H.current)){var P=H.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");x=x.replace(P,H.current)}H.current=null,ie(x)},$=function(y){var x=y.clipboardData,P=x.getData("text");H.current=P},oe=function(y){var x=y.target;if(x!==o.current){var P=document.body.style.msTouchAction!==void 0;P?setTimeout(function(){o.current.focus()}):o.current.focus()}},J=function(y){var x=V();y.target!==o.current&&!x&&s!=="combobox"&&y.preventDefault(),(s!=="combobox"&&(!f||!x)||!c)&&(c&&S!==!1&&d("",!0,!1),l())},N={inputRef:o,onInputKeyDown:ee,onInputMouseDown:Y,onInputChange:F,onInputPaste:$,onInputCompositionStart:G,onInputCompositionEnd:U},ae=s==="multiple"||s==="tags"?t.createElement(_t,Fe({},e,N)):t.createElement(At,Fe({},e,N));return t.createElement("div",{ref:L,className:"".concat(r,"-selector"),onClick:oe,onMouseDown:J},ae)},zn=t.forwardRef(kt);zn.displayName="Selector";var Kt=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],$t=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"}}},Wt=function(e,a){var o=e.prefixCls;e.disabled;var i=e.visible,r=e.children,c=e.popupElement,s=e.containerWidth,f=e.animation,g=e.transitionName,S=e.dropdownStyle,d=e.dropdownClassName,w=e.direction,l=w===void 0?"ltr":w,C=e.placement,L=e.builtinPlacements,z=e.dropdownMatchSelectWidth,M=e.dropdownRender,V=e.dropdownAlign,_=e.getPopupContainer,ee=e.empty,Y=e.getTriggerDOMNode,H=e.onPopupVisibleChange,ie=e.onPopupMouseEnter,G=Qe(e,Kt),U="".concat(o,"-dropdown"),F=c;M&&(F=M(c));var $=t.useMemo(function(){return L||$t(z)},[L,z]),oe=f?"".concat(U,"-").concat(f):g,J=t.useRef(null);t.useImperativeHandle(a,function(){return{getPopupElement:function(){return J.current}}});var N=Z({minWidth:s},S);return typeof z=="number"?N.width=z:z&&(N.width=s),t.createElement(It,Fe({},G,{showAction:H?["click"]:[],hideAction:H?["click"]:[],popupPlacement:C||(l==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:$,prefixCls:U,popupTransitionName:oe,popup:t.createElement("div",{ref:J,onMouseEnter:ie},F),popupAlign:V,popupVisible:i,getPopupContainer:_,popupClassName:Be(d,te({},"".concat(U,"-empty"),ee)),popupStyle:N,getTriggerDOMNode:Y,onPopupVisibleChange:H}),r)},Hn=t.forwardRef(Wt);Hn.displayName="SelectTrigger";function _n(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a??(o!==void 0?o:"rc-index-key-".concat(e))}function Un(n,e){var a=n||{},o=a.label,i=a.value,r=a.options,c=a.groupLabel,s=o||(e?"children":"label");return{label:s,value:i||"value",options:r||"options",groupLabel:c||s}}function Bt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,i=[],r=Un(a,!1),c=r.label,s=r.value,f=r.options,g=r.groupLabel;function S(d,w){d.forEach(function(l){if(w||!(f in l)){var C=l[s];i.push({key:_n(l,i.length),groupOption:w,data:l,label:l[c],value:C})}else{var L=l[g];L===void 0&&o&&(L=l.label),i.push({key:_n(l,i.length),group:!0,data:l,label:L}),S(l[f],!0)}})}return S(n,!1),i}function wn(n){var e=Z({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return mt(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}function zt(n,e){if(!e||!e.length)return null;var a=!1;function o(r,c){var s=Ct(c),f=s[0],g=s.slice(1);if(!f)return[r];var S=r.split(f);return a=a||S.length>1,S.reduce(function(d,w){return[].concat(Ee(d),Ee(o(w,g)))},[]).filter(function(d){return d})}var i=o(n,e);return a?i:null}function Ht(n,e,a,o,i){var r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,c=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,f=hn.useMemo(function(){if(sn(o)==="object")return o.clearIcon;if(i)return i},[o,i]),g=hn.useMemo(function(){return!!(!r&&o&&(a.length||c)&&!(s==="combobox"&&c===""))},[o,r,a.length,c,s]);return{allowClear:g,clearIcon:hn.createElement(dn,{className:"".concat(n,"-clear"),onMouseDown:e,customizeIcon:f},"×")}}var Ut=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],jt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Cn(n){return n==="tags"||n==="multiple"}var Gt=t.forwardRef(function(n,e){var a,o,i=n.id,r=n.prefixCls,c=n.className,s=n.showSearch,f=n.tagRender,g=n.direction,S=n.omitDomProps,d=n.displayValues,w=n.onDisplayValuesChange,l=n.emptyOptions,C=n.notFoundContent,L=C===void 0?"Not Found":C,z=n.onClear,M=n.mode,V=n.disabled,_=n.loading,ee=n.getInputElement,Y=n.getRawInputElement,H=n.open,ie=n.defaultOpen,G=n.onDropdownVisibleChange,U=n.activeValue,F=n.onActiveValueChange,$=n.activeDescendantId,oe=n.searchValue,J=n.autoClearSearchValue,N=n.onSearch,ae=n.onSearchSplit,T=n.tokenSeparators,y=n.allowClear,x=n.suffixIcon,P=n.clearIcon,De=n.OptionList,fe=n.animation,le=n.transitionName,Pe=n.dropdownStyle,k=n.dropdownClassName,ye=n.dropdownMatchSelectWidth,Ne=n.dropdownRender,I=n.dropdownAlign,m=n.placement,R=n.builtinPlacements,K=n.getPopupContainer,A=n.showAction,W=A===void 0?[]:A,O=n.onFocus,X=n.onBlur,re=n.onKeyUp,ce=n.onKeyDown,pe=n.onMouseDown,ve=Qe(n,Ut),se=Cn(M),me=(s!==void 0?s:se)||M==="combobox",Q=Z({},ve);jt.forEach(function(E){delete Q[E]}),S==null||S.forEach(function(E){delete Q[E]});var Ve=t.useState(!1),Ue=q(Ve,2),be=Ue[0],Se=Ue[1];t.useEffect(function(){Se(pt())},[]);var ze=t.useRef(null),ge=t.useRef(null),Te=t.useRef(null),Ie=t.useRef(null),we=t.useRef(null),Le=Rt(),qe=q(Le,3),je=qe[0],Ze=qe[1],Ge=qe[2];t.useImperativeHandle(e,function(){var E,b;return{focus:(E=Ie.current)===null||E===void 0?void 0:E.focus,blur:(b=Ie.current)===null||b===void 0?void 0:b.blur,scrollTo:function(he){var ne;return(ne=we.current)===null||ne===void 0?void 0:ne.scrollTo(he)}}});var Oe=t.useMemo(function(){var E;if(M!=="combobox")return oe;var b=(E=d[0])===null||E===void 0?void 0:E.value;return typeof b=="string"||typeof b=="number"?String(b):""},[oe,M,d]),en=M==="combobox"&&typeof ee=="function"&&ee()||null,Me=typeof Y=="function"&&Y(),fn=gt(ge,Me==null||(a=Me.props)===null||a===void 0?void 0:a.ref),an=t.useState(!1),nn=q(an,2),Xe=nn[0],rn=nn[1];Vn(function(){rn(!0)},[]);var vn=Sn(!1,{defaultValue:ie,value:H}),un=q(vn,2),ln=un[0],tn=un[1],u=Xe?ln:!1,h=!L&&l;(V||h&&u&&M==="combobox")&&(u=!1);var v=h?!1:u,p=t.useCallback(function(E){var b=E!==void 0?E:!u;V||(tn(b),u!==b&&(G==null||G(b)))},[V,u,tn,G]),B=t.useMemo(function(){return(T||[]).some(function(E){return[`
`,`\r
`].includes(E)})},[T]),j=function(b,de,he){var ne=!0,Ce=b;F==null||F(null);var Re=he?null:zt(b,T);return M!=="combobox"&&Re&&(Ce="",ae==null||ae(Re),p(!1),ne=!1),N&&Oe!==Ce&&N(Ce,{source:de?"typing":"effect"}),ne},_e=function(b){!b||!b.trim()||N(b,{source:"submit"})};t.useEffect(function(){!u&&!se&&M!=="combobox"&&j("",!1,!1)},[u]),t.useEffect(function(){ln&&V&&tn(!1),V&&Ze(!1)},[V]);var xe=$n(),ke=q(xe,2),ue=ke[0],Ke=ke[1],mn=function(b){var de=ue(),he=b.which;if(he===D.ENTER&&(M!=="combobox"&&b.preventDefault(),u||p(!0)),Ke(!!Oe),he===D.BACKSPACE&&!de&&se&&!Oe&&d.length){for(var ne=Ee(d),Ce=null,Re=ne.length-1;Re>=0;Re-=1){var on=ne[Re];if(!on.disabled){ne.splice(Re,1),Ce=on;break}}Ce&&w(ne,{type:"remove",values:[Ce]})}for(var $e=arguments.length,Je=new Array($e>1?$e-1:0),We=1;We<$e;We++)Je[We-1]=arguments[We];if(u&&we.current){var Nn;(Nn=we.current).onKeyDown.apply(Nn,[b].concat(Je))}ce==null||ce.apply(void 0,[b].concat(Je))},pn=function(b){for(var de=arguments.length,he=new Array(de>1?de-1:0),ne=1;ne<de;ne++)he[ne-1]=arguments[ne];if(u&&we.current){var Ce;(Ce=we.current).onKeyUp.apply(Ce,[b].concat(he))}re==null||re.apply(void 0,[b].concat(he))},In=function(b){var de=d.filter(function(he){return he!==b});w(de,{type:"remove",values:[b]})},He=t.useRef(!1),Ae=function(){Ze(!0),V||(O&&!He.current&&O.apply(void 0,arguments),W.includes("focus")&&p(!0)),He.current=!0},qn=function(){Ze(!1,function(){He.current=!1,p(!1)}),!V&&(Oe&&(M==="tags"?N(Oe,{source:"submit"}):M==="multiple"&&N("",{source:"blur"})),X&&X.apply(void 0,arguments))},Ye=[];t.useEffect(function(){return function(){Ye.forEach(function(E){return clearTimeout(E)}),Ye.splice(0,Ye.length)}},[]);var Zn=function(b){var de,he=b.target,ne=(de=Te.current)===null||de===void 0?void 0:de.getPopupElement();if(ne&&ne.contains(he)){var Ce=setTimeout(function(){var Je=Ye.indexOf(Ce);if(Je!==-1&&Ye.splice(Je,1),Ge(),!be&&!ne.contains(document.activeElement)){var We;(We=Ie.current)===null||We===void 0||We.focus()}});Ye.push(Ce)}for(var Re=arguments.length,on=new Array(Re>1?Re-1:0),$e=1;$e<Re;$e++)on[$e-1]=arguments[$e];pe==null||pe.apply(void 0,[b].concat(on))},et=t.useState(null),En=q(et,2),Dn=En[0],nt=En[1],tt=t.useState({}),ot=q(tt,2),at=ot[1];function rt(){at({})}Vn(function(){if(v){var E,b=Math.ceil((E=ze.current)===null||E===void 0?void 0:E.getBoundingClientRect().width);Dn!==b&&!Number.isNaN(b)&&nt(b)}},[v]);var Rn;Me&&(Rn=function(b){p(b)}),Ot(function(){var E;return[ze.current,(E=Te.current)===null||E===void 0?void 0:E.getPopupElement()]},v,p,!!Me);var it=t.useMemo(function(){return Z(Z({},n),{},{notFoundContent:L,open:u,triggerOpen:v,id:i,showSearch:me,multiple:se,toggleOpen:p})},[n,L,v,u,i,me,se,p]),On=!!x||_,Mn;On&&(Mn=t.createElement(dn,{className:Be("".concat(r,"-arrow"),te({},"".concat(r,"-arrow-loading"),_)),customizeIcon:x,customizeIconProps:{loading:_,searchValue:Oe,open:u,focused:je,showSearch:me}}));var ut=function(){var b;z==null||z(),(b=Ie.current)===null||b===void 0||b.focus(),w([],{type:"clear",values:d}),j("",!1,!1)},xn=Ht(r,ut,d,y,P,V,Oe,M),lt=xn.allowClear,ct=xn.clearIcon,st=t.createElement(De,{ref:we}),dt=Be(r,c,(o={},te(o,"".concat(r,"-focused"),je),te(o,"".concat(r,"-multiple"),se),te(o,"".concat(r,"-single"),!se),te(o,"".concat(r,"-allow-clear"),y),te(o,"".concat(r,"-show-arrow"),On),te(o,"".concat(r,"-disabled"),V),te(o,"".concat(r,"-loading"),_),te(o,"".concat(r,"-open"),u),te(o,"".concat(r,"-customize-input"),en),te(o,"".concat(r,"-show-search"),me),o)),Pn=t.createElement(Hn,{ref:Te,disabled:V,prefixCls:r,visible:v,popupElement:st,containerWidth:Dn,animation:fe,transitionName:le,dropdownStyle:Pe,dropdownClassName:k,direction:g,dropdownMatchSelectWidth:ye,dropdownRender:Ne,dropdownAlign:I,placement:m,builtinPlacements:R,getPopupContainer:K,empty:l,getTriggerDOMNode:function(){return ge.current},onPopupVisibleChange:Rn,onPopupMouseEnter:rt},Me?t.cloneElement(Me,{ref:fn}):t.createElement(zn,Fe({},n,{domRef:ge,prefixCls:r,inputElement:en,ref:Ie,id:i,showSearch:me,autoClearSearchValue:J,mode:M,activeDescendantId:$,tagRender:f,values:d,open:u,onToggleOpen:p,activeValue:U,searchValue:Oe,onSearch:j,onSearchSubmit:_e,onRemove:In,tokenWithEnter:B}))),gn;return Me?gn=Pn:gn=t.createElement("div",Fe({className:dt},Q,{ref:ze,onMouseDown:Zn,onKeyDown:mn,onKeyUp:pn,onFocus:Ae,onBlur:qn}),je&&!u&&t.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(d.map(function(E){var b=E.label,de=E.value;return["number","string"].includes(sn(b))?b:de}).join(", "))),Pn,Mn,lt&&ct),t.createElement(Kn.Provider,{value:it},gn)});const Xt=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var r=a.current,c=r.values,s=r.options,f=n.map(function(d){if(d.label===void 0){var w;return Z(Z({},d),{},{label:(w=c.get(d.value))===null||w===void 0?void 0:w.label})}return d}),g=new Map,S=new Map;return f.forEach(function(d){g.set(d.value,d),S.set(d.value,e.get(d.value)||s.get(d.value))}),a.current.values=g,a.current.options=S,f},[n,e]),i=t.useCallback(function(r){return e.get(r)||a.current.options.get(r)},[e]);return[o,i]};function bn(n,e){return Wn(n).join("").toUpperCase().includes(e)}const Yt=function(n,e,a,o,i){return t.useMemo(function(){if(!a||o===!1)return n;var r=e.options,c=e.label,s=e.value,f=[],g=typeof o=="function",S=a.toUpperCase(),d=g?o:function(l,C){return i?bn(C[i],S):C[r]?bn(C[c!=="children"?c:"label"],S):bn(C[s],S)},w=g?function(l){return wn(l)}:function(l){return l};return n.forEach(function(l){if(l[r]){var C=d(a,w(l));if(C)f.push(l);else{var L=l[r].filter(function(z){return d(a,w(z))});L.length&&f.push(Z(Z({},l),{},te({},r,L)))}return}d(a,w(l))&&f.push(l)}),f},[n,o,i,a,e])};var An=0,Jt=ht();function Qt(){var n;return Jt?(n=An,An+=1):n="TEST_OR_SSR",n}function qt(n){var e=t.useState(),a=q(e,2),o=a[0],i=a[1];return t.useEffect(function(){i("rc_select_".concat(Qt()))},[]),n||o}var Zt=["children","value"],eo=["children"];function no(n){var e=n,a=e.key,o=e.props,i=o.children,r=o.value,c=Qe(o,Zt);return Z({key:a,value:r!==void 0?r:a,children:i},c)}function jn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return bt(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var i=a,r=i.type.isSelectOptGroup,c=i.key,s=i.props,f=s.children,g=Qe(s,eo);return e||!r?no(a):Z(Z({key:"__RC_SELECT_GRP__".concat(c===null?o:c,"__"),label:c},g),{},{options:jn(f)})}).filter(function(a){return a})}function to(n,e,a,o,i){return t.useMemo(function(){var r=n,c=!n;c&&(r=jn(e));var s=new Map,f=new Map,g=function(w,l,C){C&&typeof C=="string"&&w.set(l[C],l)};function S(d){for(var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=0;l<d.length;l+=1){var C=d[l];!C[a.options]||w?(s.set(C[a.value],C),g(f,C,a.label),g(f,C,o),g(f,C,i)):S(C[a.options],!0)}}return S(r),{options:r,valueOptions:s,labelOptions:f}},[n,e,a,o,i])}function Fn(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var Gn=function(){return null};Gn.isSelectOptGroup=!0;var Xn=function(){return null};Xn.isSelectOption=!0;var Yn=t.createContext(null);function oo(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var ao=["disabled","title","children","style","className"];function kn(n){return typeof n=="string"||typeof n=="number"}var ro=function(e,a){var o=Dt(),i=o.prefixCls,r=o.id,c=o.open,s=o.multiple,f=o.mode,g=o.searchValue,S=o.toggleOpen,d=o.notFoundContent,w=o.onPopupScroll,l=t.useContext(Yn),C=l.flattenOptions,L=l.onActiveValue,z=l.defaultActiveFirstOption,M=l.onSelect,V=l.menuItemSelectedIcon,_=l.rawValues,ee=l.fieldNames,Y=l.virtual,H=l.direction,ie=l.listHeight,G=l.listItemHeight,U="".concat(i,"-item"),F=St(function(){return C},[c,C],function(I,m){return m[0]&&I[1]!==m[1]}),$=t.useRef(null),oe=function(m){m.preventDefault()},J=function(m){$.current&&$.current.scrollTo(typeof m=="number"?{index:m}:m)},N=function(m){for(var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,K=F.length,A=0;A<K;A+=1){var W=(m+A*R+K)%K,O=F[W],X=O.group,re=O.data;if(!X&&!re.disabled)return W}return-1},ae=t.useState(function(){return N(0)}),T=q(ae,2),y=T[0],x=T[1],P=function(m){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;x(m);var K={source:R?"keyboard":"mouse"},A=F[m];if(!A){L(null,-1,K);return}L(A.value,m,K)};t.useEffect(function(){P(z!==!1?N(0):-1)},[F.length,g]);var De=t.useCallback(function(I){return _.has(I)&&f!=="combobox"},[f,Ee(_).toString(),_.size]);t.useEffect(function(){var I=setTimeout(function(){if(!s&&c&&_.size===1){var R=Array.from(_)[0],K=F.findIndex(function(A){var W=A.data;return W.value===R});K!==-1&&(P(K),J(K))}});if(c){var m;(m=$.current)===null||m===void 0||m.scrollTo(void 0)}return function(){return clearTimeout(I)}},[c,g,C.length]);var fe=function(m){m!==void 0&&M(m,{selected:!_.has(m)}),s||S(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(m){var R=m.which,K=m.ctrlKey;switch(R){case D.N:case D.P:case D.UP:case D.DOWN:{var A=0;if(R===D.UP?A=-1:R===D.DOWN?A=1:oo()&&K&&(R===D.N?A=1:R===D.P&&(A=-1)),A!==0){var W=N(y+A,A);J(W),P(W,!0)}break}case D.ENTER:{var O=F[y];O&&!O.data.disabled?fe(O.value):fe(void 0),c&&m.preventDefault();break}case D.ESC:S(!1),c&&m.stopPropagation()}},onKeyUp:function(){},scrollTo:function(m){J(m)}}}),F.length===0)return t.createElement("div",{role:"listbox",id:"".concat(r,"_list"),className:"".concat(U,"-empty"),onMouseDown:oe},d);var le=Object.keys(ee).map(function(I){return ee[I]}),Pe=function(m){return m.label};function k(I,m){var R=I.group;return{role:R?"presentation":"option",id:"".concat(r,"_list_").concat(m)}}var ye=function(m){var R=F[m];if(!R)return null;var K=R.data||{},A=K.value,W=R.group,O=cn(K,!0),X=Pe(R);return R?t.createElement("div",Fe({"aria-label":typeof X=="string"&&!W?X:null},O,{key:m},k(R,m),{"aria-selected":De(A)}),A):null},Ne={role:"listbox",id:"".concat(r,"_list")};return t.createElement(t.Fragment,null,Y&&t.createElement("div",Fe({},Ne,{style:{height:0,width:0,overflow:"hidden"}}),ye(y-1),ye(y),ye(y+1)),t.createElement(Et,{itemKey:"key",ref:$,data:F,height:ie,itemHeight:G,fullHeight:!1,onMouseDown:oe,onScroll:w,virtual:Y,direction:H,innerProps:Y?null:Ne},function(I,m){var R,K=I.group,A=I.groupOption,W=I.data,O=I.label,X=I.value,re=W.key;if(K){var ce,pe=(ce=W.title)!==null&&ce!==void 0?ce:kn(O)?O.toString():void 0;return t.createElement("div",{className:Be(U,"".concat(U,"-group")),title:pe},O!==void 0?O:re)}var ve=W.disabled,se=W.title;W.children;var me=W.style,Q=W.className,Ve=Qe(W,ao),Ue=wt(Ve,le),be=De(X),Se="".concat(U,"-option"),ze=Be(U,Se,Q,(R={},te(R,"".concat(Se,"-grouped"),A),te(R,"".concat(Se,"-active"),y===m&&!ve),te(R,"".concat(Se,"-disabled"),ve),te(R,"".concat(Se,"-selected"),be),R)),ge=Pe(I),Te=!V||typeof V=="function"||be,Ie=typeof ge=="number"?ge:ge||X,we=kn(Ie)?Ie.toString():void 0;return se!==void 0&&(we=se),t.createElement("div",Fe({},cn(Ue),Y?{}:k(I,m),{"aria-selected":be,className:ze,title:we,onMouseMove:function(){y===m||ve||P(m)},onClick:function(){ve||fe(X)},style:me}),t.createElement("div",{className:"".concat(Se,"-content")},Ie),t.isValidElement(V)||be,Te&&t.createElement(dn,{className:"".concat(U,"-option-state"),customizeIcon:V,customizeIconProps:{isSelected:be}},be?"✓":null))}))},Jn=t.forwardRef(ro);Jn.displayName="OptionList";var io=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],uo=["inputValue"];function lo(n){return!n||sn(n)!=="object"}var co=t.forwardRef(function(n,e){var a=n.id,o=n.mode,i=n.prefixCls,r=i===void 0?"rc-select":i,c=n.backfill,s=n.fieldNames,f=n.inputValue,g=n.searchValue,S=n.onSearch,d=n.autoClearSearchValue,w=d===void 0?!0:d,l=n.onSelect,C=n.onDeselect,L=n.dropdownMatchSelectWidth,z=L===void 0?!0:L,M=n.filterOption,V=n.filterSort,_=n.optionFilterProp,ee=n.optionLabelProp,Y=n.options,H=n.children,ie=n.defaultActiveFirstOption,G=n.menuItemSelectedIcon,U=n.virtual,F=n.direction,$=n.listHeight,oe=$===void 0?200:$,J=n.listItemHeight,N=J===void 0?20:J,ae=n.value,T=n.defaultValue,y=n.labelInValue,x=n.onChange,P=Qe(n,io),De=qt(a),fe=Cn(o),le=!!(!Y&&H),Pe=t.useMemo(function(){return M===void 0&&o==="combobox"?!1:M},[M,o]),k=t.useMemo(function(){return Un(s,le)},[JSON.stringify(s),le]),ye=Sn("",{value:g!==void 0?g:f,postState:function(h){return h||""}}),Ne=q(ye,2),I=Ne[0],m=Ne[1],R=to(Y,H,k,_,ee),K=R.valueOptions,A=R.labelOptions,W=R.options,O=t.useCallback(function(u){var h=Wn(u);return h.map(function(v){var p,B,j,_e,xe;if(lo(v))p=v;else{var ke;j=v.key,B=v.label,p=(ke=v.value)!==null&&ke!==void 0?ke:j}var ue=K.get(p);if(ue){var Ke;B===void 0&&(B=ue==null?void 0:ue[ee||k.label]),j===void 0&&(j=(Ke=ue==null?void 0:ue.key)!==null&&Ke!==void 0?Ke:p),_e=ue==null?void 0:ue.disabled,xe=ue==null?void 0:ue.title}return{label:B,value:p,key:j,disabled:_e,title:xe}})},[k,ee,K]),X=Sn(T,{value:ae}),re=q(X,2),ce=re[0],pe=re[1],ve=t.useMemo(function(){var u,h=O(ce);return o==="combobox"&&Vt((u=h[0])===null||u===void 0?void 0:u.value)?[]:h},[ce,O,o]),se=Xt(ve,K),me=q(se,2),Q=me[0],Ve=me[1],Ue=t.useMemo(function(){if(!o&&Q.length===1){var u=Q[0];if(u.value===null&&(u.label===null||u.label===void 0))return[]}return Q.map(function(h){var v;return Z(Z({},h),{},{label:(v=h.label)!==null&&v!==void 0?v:h.value})})},[o,Q]),be=t.useMemo(function(){return new Set(Q.map(function(u){return u.value}))},[Q]);t.useEffect(function(){if(o==="combobox"){var u,h=(u=Q[0])===null||u===void 0?void 0:u.value;m(Nt(h)?String(h):"")}},[Q]);var Se=Fn(function(u,h){var v,p=h??u;return v={},te(v,k.value,u),te(v,k.label,p),v}),ze=t.useMemo(function(){if(o!=="tags")return W;var u=Ee(W),h=function(p){return K.has(p)};return Ee(Q).sort(function(v,p){return v.value<p.value?-1:1}).forEach(function(v){var p=v.value;h(p)||u.push(Se(p,v.label))}),u},[Se,W,K,Q,o]),ge=Yt(ze,k,I,Pe,_),Te=t.useMemo(function(){return o!=="tags"||!I||ge.some(function(u){return u[_||"value"]===I})||ge.some(function(u){return u[k.value]===I})?ge:[Se(I)].concat(Ee(ge))},[Se,_,o,ge,I,k]),Ie=t.useMemo(function(){return V?Ee(Te).sort(function(u,h){return V(u,h)}):Te},[Te,V]),we=t.useMemo(function(){return Bt(Ie,{fieldNames:k,childrenAsData:le})},[Ie,k,le]),Le=function(h){var v=O(h);if(pe(v),x&&(v.length!==Q.length||v.some(function(j,_e){var xe;return((xe=Q[_e])===null||xe===void 0?void 0:xe.value)!==(j==null?void 0:j.value)}))){var p=y?v:v.map(function(j){return j.value}),B=v.map(function(j){return wn(Ve(j.value))});x(fe?p:p[0],fe?B:B[0])}},qe=t.useState(null),je=q(qe,2),Ze=je[0],Ge=je[1],Oe=t.useState(0),en=q(Oe,2),Me=en[0],fn=en[1],an=ie!==void 0?ie:o!=="combobox",nn=t.useCallback(function(u,h){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},p=v.source,B=p===void 0?"keyboard":p;fn(h),c&&o==="combobox"&&u!==null&&B==="keyboard"&&Ge(String(u))},[c,o]),Xe=function(h,v,p){var B=function(){var He,Ae=Ve(h);return[y?{label:Ae==null?void 0:Ae[k.label],value:h,key:(He=Ae==null?void 0:Ae.key)!==null&&He!==void 0?He:h}:h,wn(Ae)]};if(v&&l){var j=B(),_e=q(j,2),xe=_e[0],ke=_e[1];l(xe,ke)}else if(!v&&C&&p!=="clear"){var ue=B(),Ke=q(ue,2),mn=Ke[0],pn=Ke[1];C(mn,pn)}},rn=Fn(function(u,h){var v,p=fe?h.selected:!0;p?v=fe?[].concat(Ee(Q),[u]):[u]:v=Q.filter(function(B){return B.value!==u}),Le(v),Xe(u,p),o==="combobox"?Ge(""):(!Cn||w)&&(m(""),Ge(""))}),vn=function(h,v){Le(h);var p=v.type,B=v.values;(p==="remove"||p==="clear")&&B.forEach(function(j){Xe(j.value,!1,p)})},un=function(h,v){if(m(h),Ge(null),v.source==="submit"){var p=(h||"").trim();if(p){var B=Array.from(new Set([].concat(Ee(be),[p])));Le(B),Xe(p,!0),m("")}return}v.source!=="blur"&&(o==="combobox"&&Le(h),S==null||S(h))},ln=function(h){var v=h;o!=="tags"&&(v=h.map(function(B){var j=A.get(B);return j==null?void 0:j.value}).filter(function(B){return B!==void 0}));var p=Array.from(new Set([].concat(Ee(be),Ee(v))));Le(p),p.forEach(function(B){Xe(B,!0)})},tn=t.useMemo(function(){var u=U!==!1&&z!==!1;return Z(Z({},R),{},{flattenOptions:we,onActiveValue:nn,defaultActiveFirstOption:an,onSelect:rn,menuItemSelectedIcon:G,rawValues:be,fieldNames:k,virtual:u,direction:F,listHeight:oe,listItemHeight:N,childrenAsData:le})},[R,we,nn,an,rn,G,be,k,U,z,oe,N,le]);return t.createElement(Yn.Provider,{value:tn},t.createElement(Gt,Fe({},P,{id:De,prefixCls:r,ref:e,omitDomProps:uo,mode:o,displayValues:Ue,onDisplayValuesChange:vn,direction:F,searchValue:I,onSearch:un,autoClearSearchValue:w,onSearchSplit:ln,dropdownMatchSelectWidth:z,OptionList:Jn,emptyOptions:!we.length,activeValue:Ze,activeDescendantId:"".concat(De,"_list_").concat(Me)})))}),Qn=co;Qn.Option=Xn;Qn.OptGroup=Gn;export{Xn as O,Qn as T,Gn as a};
