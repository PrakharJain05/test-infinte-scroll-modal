(this.webpackJsonpeventgraphia=this.webpackJsonpeventgraphia||[]).push([[0],{22:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(8),o=(n(22),n(16)),i=n(3),u=n.n(i),s=n(9),l=n(4),j=function(e){var t=e.imageNumber;return Object(c.jsx)("img",{src:"https://via.placeholder.com/200x200?text=".concat(t),alt:t})},b=n(15),f=n(10),d=n.n(f);d.a.setAppElement("#root");var h=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)([]),f=Object(l.a)(i,2),h=f[0],p=f[1],O=Object(r.useState)(!1),x=Object(l.a)(O,2),m=x[0],v=x[1],g=Object(r.useState)(),w=Object(l.a)(g,2),y=w[0],k=w[1],A=function(e){k(e),v(!0)};Object(r.useEffect)((function(){A(y)}),[y]);var C=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://via.placeholder.com/3900x3900?text=".concat(t),{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}}).then(function(){var e=Object(s.a)(u.a.mark((function e(t){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.blob();case 2:return n=e.sent,c=URL.createObjectURL(n),(r=document.createElement("a")).href=c,r.download="image.png",document.body.appendChild(r),r.click(),r.remove(),e.abrupt("return",{success:!0});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){for(var e=[],t=1;t<=15;t++)e.push(n+t);a((function(e){return e+15})),p([].concat(Object(o.a)(h),e))};return Object(r.useEffect)((function(){E()}),[]),Object(c.jsx)(b.a,{dataLength:h.length,next:function(){return E()},hasMore:!0,loader:Object(c.jsx)("h4",{style:{textAlign:"center"},children:"Loading..."}),endMessage:Object(c.jsx)("p",{style:{textAlign:"center"},children:Object(c.jsx)("b",{children:"Yay! You have seen it all"})}),children:Object(c.jsx)("div",{className:"container",children:h.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[y&&Object(c.jsx)("div",{onKeyDown:function(t){return function(e,t){if(t.imageNumber,m){if("ArrowRight"===e.key)return k((function(e){return e+1}));if("ArrowLeft"===e.key)return k((function(e){return e-1}))}}(t,e)},children:Object(c.jsxs)(d.a,{isOpen:m,onRequestClose:function(){v(!1),k(null)},children:[Object(c.jsx)("button",{onClick:function(){return C(e)},children:"Download Image"}),Object(c.jsx)("button",{style:{color:"red"},onClick:function(){v(!1),k(null)},children:"Close"}),Object(c.jsx)("img",{src:"https://via.placeholder.com/2000x2000?text=".concat(y),alt:y})]})}),Object(c.jsx)("div",{onClick:function(){return A(e)},children:Object(c.jsx)(j,{imageNumber:e})})]})}))})})};Object(a.render)(Object(c.jsx)(r.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c1d8957c.chunk.js.map