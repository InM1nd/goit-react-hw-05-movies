"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[805],{148:function(t,n,e){e.d(n,{Hx:function(){return x},Y5:function(){return h},YK:function(){return s},bI:function(){return f},xc:function(){return v}});var r=e(861),c=e(757),u=e.n(c),a=e(44),i="954f1b86b9dc3130076fbe6df39c08ca",o="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(n,"&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)("".concat(o,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},805:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(885),c=e(791),u=e(731),a=e(148),i=e(739),o={},s=e(184);function p(t){var n=t.movieList,e=(0,i.TH)();return(0,s.jsx)("ul",{className:o.movie_list,children:n.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})}function f(){var t=(0,u.lr)(),n=(0,r.Z)(t,2),e=n[0],i=n[1],o=(0,c.useState)(""),f=(0,r.Z)(o,2),l=f[0],h=f[1],d=(0,c.useState)(null),v=(0,r.Z)(d,2),m=v[0],x=v[1],y=e.get("query");(0,c.useEffect)((function(){null!==y&&(h(y),(0,a.bI)(y).then((function(t){x(t.data.results)})))}),[y]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==l.trim()&&(i("query=".concat(l)),(0,a.bI)(l).then((function(t){x(t.data.results)})))},autoComplete:"off",children:[(0,s.jsx)("input",{type:"text",name:"searchQuery",onChange:function(t){h(t.currentTarget.value)},value:l}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("div",{children:m&&(0,s.jsx)(p,{movieList:m})})]})}}}]);
//# sourceMappingURL=805.de855ea8.chunk.js.map