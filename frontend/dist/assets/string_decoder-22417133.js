import{s as y}from"./safe-buffer-6c0cbd26.js";var h={},c;function m(){if(c)return h;c=1;var n=y.Buffer,o=n.isEncoding||function(t){switch(t=""+t,t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function d(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}function u(t){var e=d(t);if(typeof e!="string"&&(n.isEncoding===o||!o(t)))throw new Error("Unknown encoding: "+t);return e||t}h.StringDecoder=a;function a(t){this.encoding=u(t);var e;switch(this.encoding){case"utf16le":this.text=p,this.end=v,e=4;break;case"utf8":this.fillLast=N,e=4;break;case"base64":this.text=w,this.end=S,e=3;break;default:this.write=E,this.end=T;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}a.prototype.write=function(t){if(t.length===0)return"";var e,r;if(this.lastNeed){if(e=this.fillLast(t),e===void 0)return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},a.prototype.end=C,a.prototype.text=x,a.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length};function l(t){return t<=127?0:t>>5===6?2:t>>4===14?3:t>>3===30?4:t>>6===2?-1:-2}function f(t,e,r){var i=e.length-1;if(i<r)return 0;var s=l(e[i]);return s>=0?(s>0&&(t.lastNeed=s-1),s):--i<r||s===-2?0:(s=l(e[i]),s>=0?(s>0&&(t.lastNeed=s-2),s):--i<r||s===-2?0:(s=l(e[i]),s>=0?(s>0&&(s===2?s=0:t.lastNeed=s-3),s):0))}function g(t,e,r){if((e[0]&192)!==128)return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if((e[1]&192)!==128)return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&(e[2]&192)!==128)return t.lastNeed=2,"�"}}function N(t){var e=this.lastTotal-this.lastNeed,r=g(this,t);if(r!==void 0)return r;if(this.lastNeed<=t.length)return t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,e,0,t.length),this.lastNeed-=t.length}function x(t,e){var r=f(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var i=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,i),t.toString("utf8",e,i)}function C(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e}function p(t,e){if((t.length-e)%2===0){var r=t.toString("utf16le",e);if(r){var i=r.charCodeAt(r.length-1);if(i>=55296&&i<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function v(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function w(t,e){var r=(t.length-e)%3;return r===0?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,r===1?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function S(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function E(t){return t.toString(this.encoding)}function T(t){return t&&t.length?this.write(t):""}return h}export{m as r};
