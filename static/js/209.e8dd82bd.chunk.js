"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[209],{148:function(n,t,e){e.d(t,{Hx:function(){return x},Y5:function(){return h},YK:function(){return s},bI:function(){return f},xc:function(){return v}});var r=e(861),c=e(757),u=e.n(c),a=e(44),i="954f1b86b9dc3130076fbe6df39c08ca",o="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(o,"/trending/all/day?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},209:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),c=e(791),u=e(148),a=e(731),i=e(184);function o(n){var t=n.movies;return(0,i.jsx)("ul",{children:t.map((function(n){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(n.id),children:n.original_title})},n.id)}))})}function s(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],a=t[1];return(0,c.useEffect)((function(){(0,u.YK)().then((function(n){a(n.data.results)}))}),[]),(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(o,{movies:e})})}}}]);
//# sourceMappingURL=209.e8dd82bd.chunk.js.map