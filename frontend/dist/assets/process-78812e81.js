import{j as v}from"./@babel-6ae3dd9c.js";var m={exports:{}},t=m.exports={},n,o;function f(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?n=setTimeout:n=f}catch{n=f}try{typeof clearTimeout=="function"?o=clearTimeout:o=h}catch{o=h}})();function p(e){if(n===setTimeout)return setTimeout(e,0);if((n===f||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch{try{return n.call(null,e,0)}catch{return n.call(this,e,0)}}}function g(e){if(o===clearTimeout)return clearTimeout(e);if((o===h||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch{try{return o.call(null,e)}catch{return o.call(this,e)}}}var i=[],c=!1,s,l=-1;function w(){!c||!s||(c=!1,s.length?i=s.concat(i):l=-1,i.length&&T())}function T(){if(!c){var e=p(w);c=!0;for(var r=i.length;r;){for(s=i,i=[];++l<r;)s&&s[l].run();l=-1,r=i.length}s=null,c=!1,g(e)}}t.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)r[a-1]=arguments[a];i.push(new d(e,r)),i.length===1&&!c&&p(T)};function d(e,r){this.fun=e,this.array=r}d.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=!0;t.env={};t.argv=[];t.version="";t.versions={};function u(){}t.on=u;t.addListener=u;t.once=u;t.off=u;t.removeListener=u;t.removeAllListeners=u;t.emit=u;t.prependListener=u;t.prependOnceListener=u;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0};var y=m.exports;const b=v(y);export{b as p};
