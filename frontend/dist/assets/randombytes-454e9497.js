import"./node-stdlib-browser-ff393b4c.js";import{i as f}from"./@babel-6ae3dd9c.js";import{s as p}from"./safe-buffer-6c0cbd26.js";import{p as m}from"./process-78812e81.js";var n={exports:{}},s=65536,u=4294967295;function i(){throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)}var l=p.Buffer,t=f.crypto||f.msCrypto;t&&t.getRandomValues?n.exports=c:n.exports=i;function c(r,a){if(r>u)throw new RangeError("requested too many random bytes");var o=l.allocUnsafe(r);if(r>0)if(r>s)for(var e=0;e<r;e+=s)t.getRandomValues(o.slice(e,e+s));else t.getRandomValues(o);return typeof a=="function"?m.nextTick(function(){a(null,o)}):o}var w=n.exports;export{w as b};
