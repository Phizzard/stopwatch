(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,e,t){n.exports=t(25)},19:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=(t(19),t(3)),u=t(1),l=t(2),s=t(11);function f(){var n=Object(u.a)(["\n  padding: 0.25rem 1.25rem;\n  margin: 0.5rem;\n  background-color: transparent;\n  color: mediumturquoise;\n  border: 3px solid mediumturquoise;\n  border-radius: 0.25rem;\n  font-size: 16px;\n  font-weight: bold;\n"]);return f=function(){return n},n}var m=l.a.button(f()),d=function(n){var e=n.children,t=Object(s.a)(n,["children"]);return a.a.createElement(m,t,e)};function p(){var n=Object(u.a)([""]);return p=function(){return n},n}function v(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return v=function(){return n},n}var b=l.a.div(v()),w=l.a.h2(p()),h=function(n){var e=n.addToSplitTimes,t=n.clearSplitTimes,i=Object(r.useState)(0),o=Object(c.a)(i,2),u=o[0],l=o[1],s=Object(r.useState)(!1),f=Object(c.a)(s,2),m=f[0],p=f[1];Object(r.useEffect)(function(){if(m){var n=setInterval(function(){l(u+1)},10);return function(){clearInterval(n)}}});var v=function(){var n=new Date(null);return n.setMilliseconds(10*u),n.toISOString().substring(14,21)};return a.a.createElement("div",null,a.a.createElement(b,null,a.a.createElement(w,null,v())),a.a.createElement(d,{onClick:function(){return p(!m)}},m?"Stop":"Start"),a.a.createElement(d,{onClick:function(){m||(l(0),t())}},"Reset"),a.a.createElement(d,{onClick:function(){return m&&e(v())}},"Split"))};function E(){var n=Object(u.a)(["\n  font-size: 22px;\n  font-weight: bold;\n  padding: 0.1rem 0.25rem;\n"]);return E=function(){return n},n}function j(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  list-style: none;\n  max-height: 325px;\n  max-width: 100vw;\n  padding: 0;\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return O=function(){return n},n}var g=l.a.div(O()),S=l.a.ul(j()),x=l.a.li(E()),k=function(n){var e=n.items;return a.a.createElement(g,null,a.a.createElement(S,null,e&&e.map(function(n,e){return a.a.createElement(x,{key:"".concat(e,"-").concat(n)},n)})))},y=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],i=e[1];return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"It's a Stopwatch"),a.a.createElement(h,{addToSplitTimes:function(n){i([n].concat(t))},clearSplitTimes:function(){return i([])}}),a.a.createElement(k,{items:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.c8ca1464.chunk.js.map