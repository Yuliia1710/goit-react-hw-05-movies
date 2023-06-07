"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{1454:function(A,n,t){t.d(n,{Z:function(){return u}});var i,e,r=t(8966),I=t(168),C=t(5706),o=C.Z.div(i||(i=(0,I.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n"]))),Q=C.Z.div(e||(e=(0,I.Z)(["\n  transform: translate(-50%, -50%);\n"]))),c=t(4164),h=t(184),E=document.querySelector("#loader-root"),u=function(){return(0,c.createPortal)((0,h.jsx)(o,{children:(0,h.jsx)(Q,{children:(0,h.jsx)(r.Z1,{height:"200",width:"200",color:"red",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}),E)}},4925:function(A,n,t){t.d(n,{Z:function(){return d}});var i,e,r,I,C,o,Q=t(7689),c=t(1087),h=t(168),E=t(5706),u=E.Z.ul(i||(i=(0,h.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),a=E.Z.li(e||(e=(0,h.Z)(["\n  width: 225px;\n"]))),s=E.Z.div(r||(r=(0,h.Z)(["\n  width: 100%px;\n  height: 339px;\n"]))),l=E.Z.img(I||(I=(0,h.Z)(["\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),g=(0,E.Z)(c.OL)(C||(C=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: calc(16 / 14);\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n\n  color: #212121;\n\n  :hover {\n    color: brown;\n  }\n"]))),f=E.Z.div(o||(o=(0,h.Z)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),B=t(3317),p=t(184),d=function(A){var n=A.arrayOfMovies,t=(0,Q.TH)();return(0,p.jsx)(u,{children:n.map((function(A){var n=null;n=A.title?A.title:A.name;var i=B;return A.poster_path&&(i="https://image.tmdb.org/t/p/w500".concat(A.poster_path)),(0,p.jsxs)(a,{children:[(0,p.jsx)(c.rU,{to:"/movies/".concat(A.id),state:{from:t},children:(0,p.jsx)(s,{children:(0,p.jsx)(l,{srcSet:i,alt:""})})}),(0,p.jsx)(f,{children:(0,p.jsx)(g,{to:"/movies/".concat(A.id),state:{from:t},children:n})})]},A.id)}))})}},1192:function(A,n,t){t.d(n,{Z:function(){return C}});var i,e=t(168),r=t(5706).Z.h1(i||(i=(0,e.Z)(["\n  color: brown;\n"]))),I=t(184),C=function(A){var n=A.text;return(0,I.jsx)(r,{children:n})}},5415:function(A,n,t){t.r(n);var i=t(9439),e=t(9545),r=t(2791),I=t(4925),C=t(1192),o=t(1454),Q=t(184);n.default=function(){var A=(0,r.useState)(null),n=(0,i.Z)(A,2),t=n[0],c=n[1],h=(0,r.useState)(!1),E=(0,i.Z)(h,2),u=E[0],a=E[1];return(0,r.useEffect)((function(){a(!0),(0,e.sz)().then((function(A){c(A.results)})).finally((function(){a(!1)}))}),[]),(0,Q.jsxs)(Q.Fragment,{children:[u&&(0,Q.jsx)(o.Z,{}),!t&&(0,Q.jsx)("p",{children:"There is no results"}),t&&(0,Q.jsx)(C.Z,{text:"Trending today"}),t&&(0,Q.jsx)(I.Z,{arrayOfMovies:t})]})}},9545:function(A,n,t){t.d(n,{HV:function(){return C},Mg:function(){return Q},Tt:function(){return I},qX:function(){return o},sz:function(){return r}});var i="https://api.themoviedb.org/3/",e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjQ4Y2ZiNzMzZTA2ZWI2N2Y0MWUxMWVmOGI0YTM0OSIsInN1YiI6IjY0N2JhZTcyY2Y0YjhiMDEwMzFlNjVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8JLVvBGFANshw9twf7FdsxjXcyLe5sPG_024DWVO5o"}};function r(){var A="".concat(i,"movie/popular");return fetch(A,e).then((function(A){return A.json()}))}function I(A){var n="".concat(i,"movie/").concat(A);return fetch(n,e).then((function(A){return A.json()}))}function C(A){var n="".concat(i,"search/movie?query=").concat(A,"&include_adult=false&language=en-US&page=1");return fetch(n,e).then((function(A){return A.json()}))}function o(A){var n="".concat(i,"movie/").concat(A,"/credits");return fetch(n,e).then((function(A){return A.json()}))}function Q(A){var n="".concat(i,"movie/").concat(A,"/reviews");return fetch(n,e).then((function(A){return A.json()}))}},3317:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=415.ebe0b001.chunk.js.map