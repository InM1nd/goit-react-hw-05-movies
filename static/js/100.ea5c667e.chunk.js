"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[100],{148:function(n,t,e){e.d(t,{Hx:function(){return m},Y5:function(){return l},YK:function(){return o},bI:function(){return f},xc:function(){return v}});var r=e(861),c=e(757),a=e.n(c),u=e(44),i="954f1b86b9dc3130076fbe6df39c08ca",s="https://api.themoviedb.org/3";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(s,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},100:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(885),c=e(791),a=e(148),u=e(739),i={},s=e(184);function o(n){var t=n.reviews;return t.length>0?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:t.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:n.author}),(0,s.jsx)("p",{children:n.content})]},n.id)}))})}):(0,s.jsx)("span",{className:i.text,children:"We don't have any review for this movie"})}function p(){var n=(0,u.UO)().movieId,t=(0,c.useState)(null),e=(0,r.Z)(t,2),i=e[0],p=e[1];return(0,c.useEffect)((function(){(0,a.Hx)(n).then((function(n){p(n.data.results)}))}),[n]),(0,s.jsx)(s.Fragment,{children:i&&(0,s.jsx)(o,{reviews:i})})}}}]);
//# sourceMappingURL=100.ea5c667e.chunk.js.map