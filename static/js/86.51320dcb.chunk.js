"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{4374:function(e,t,n){var i=n(7689),a=n(1087),r=n(9961),s=n(1272),c=n(3649),l=n(3148),o=n(184);t.Z=function(e){var t=e.trending,n=e.time,u=(0,i.TH)(),d="day"===n?r.f.TitleMovies:r.f.WeekMovies;return"inTheatres"===n&&(d=r.f.TitleTheatres),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"pageTitle",children:d}),(0,o.jsx)("ul",{className:"moviesList",children:t.map((function(e){var t=e.id,n=e.poster_path,i=e.title,r=e.vote_average;return(0,o.jsx)(a.rU,{to:"/movies/".concat(t),state:u,children:(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:n?"".concat(c.v).concat(n):s,alt:i}),(0,o.jsxs)("h4",{children:[" ",i]}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{children:(0,l.l)(r)})})]})},t)}))})]})}},3148:function(e,t,n){n.d(t,{l:function(){return i}});var i=function(e){return e>0?parseFloat(Math.round(100*e)/100).toFixed(1):0}},3983:function(e,t,n){n.r(t);var i=n(3433),a=n(9439),r=n(2791),s=n(1087),c=n(3511),l=n(4374),o=n(5628),u=n(332),d=n(9938),f=n(6083),h=n(184);t.default=function(){var e,t,n=(0,s.lr)(),v=(0,a.Z)(n,2),g=v[0],m=v[1],x=(0,r.useState)([]),j=(0,a.Z)(x,2),p=j[0],Z=j[1],k=(0,r.useState)(!1),T=(0,a.Z)(k,2),S=T[0],_=T[1],M=(0,r.useState)(null!==(e=g.get("time"))&&void 0!==e?e:"day"),w=(0,a.Z)(M,2),y=w[0],N=w[1],b=(0,r.useState)(Number(null!==(t=g.get("page"))&&void 0!==t?t:1)),C=(0,a.Z)(b,2),F=C[0],I=C[1];(0,r.useEffect)((function(){_(!0),f.Z.getMoviesTrending("movie",y,F).then((function(e){Z((function(t){return[].concat((0,i.Z)(t),(0,i.Z)(e))})),m({page:F,time:y})})).catch((function(e){return console.log(e),[]})).finally((function(){return _(!1)}))}),[y,F,m]);return(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(l.Z,{trending:p,time:y}),(0,h.jsx)(o.Z,{changeSelect:function(e){y!==e.target.dataset.value&&(N(e.target.dataset.value),I(1),Z([]))}}),p.length>0&&(0,h.jsx)(c.Z,{scrollStepInPx:"50",delayInMs:"16"}),p.length>0&&(0,h.jsx)(u.Z,{onClick:function(){I((function(e){return e+1}))}}),S&&(0,h.jsx)(d.Z,{isLoading:S})]})}}}]);
//# sourceMappingURL=86.51320dcb.chunk.js.map