"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[41],{86:(e,n,a)=>{a.r(n),a.d(n,{default:()=>j});var t=a(43),r=a(216),i=a(562),o=a(455),s=a(334);const c=a.p+"static/media/default-actor-image.e1ce751ef1b590f719f9.jpg";var d,l,p,u,g=a(528),h=a(197);const m=h.Ay.ul(d||(d=(0,g.A)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 12px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=h.Ay.li(l||(l=(0,g.A)(["\n  border-radius: 6px;\n  outline: 2px solid rgb(255, 49, 49, 0.5);\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    outline: 2px solid white;\n    box-shadow: 2px 2px 6px 2px rgb(255, 49, 49, 0.7);\n    transform: scale(1.03);\n  }\n"]))),x=h.Ay.div(p||(p=(0,g.A)(["\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  height: 260px;\n  > img {\n    object-fit: cover;\n  }\n"]))),v=h.Ay.div(u||(u=(0,g.A)(["\n  margin-top: 10px;\n  font-size: 18px;\n  padding: 10px;\n  overflow: hidden;\n"])));var w=a(579);const y="idle",_="loading",b="resolve",A="error",j=()=>{const[e,n]=(0,t.useState)(),[a,d]=(0,t.useState)(y),[l,p]=(0,t.useState)(null),{movieId:u}=(0,r.g)();return(0,t.useEffect)((()=>{d(_),(0,i.dk)(u).then((e=>{n(e.cast),d(b)})).catch((e=>{n({}),p(e),d(A)}))}),[u]),(0,w.jsxs)("section",{children:[a===b&&e&&e.length>0?(0,w.jsx)("div",{children:(0,w.jsx)(m,{children:e.map((e=>{let{credit_id:n,profile_path:a,original_name:t,character:r}=e;return(0,w.jsxs)(f,{children:[(0,w.jsx)(x,{children:(0,w.jsx)("img",{src:a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):c,alt:t})}),(0,w.jsxs)(v,{children:[(0,w.jsx)("h4",{children:t}),(0,w.jsxs)("p",{children:["Character: ",r]})]})]},n)}))})}):a!==_&&(0,w.jsx)("p",{children:"Sorry, there isn't any actors' info"}),a===_&&(0,w.jsx)(o.a,{}),a===A&&(0,w.jsx)(s.A,{children:l})]})}},334:(e,n,a)=>{a.d(n,{A:()=>r});a(43);var t=a(579);const r=e=>{let{error:n}=e;return(0,t.jsx)("div",{children:"'Sorry, something went wrong :('"})}},562:(e,n,a)=>{a.d(n,{D9:()=>s,LF:()=>o,NA:()=>d,Nt:()=>i,dk:()=>c});var t=a(154);t.A.defaults.baseURL="https://api.themoviedb.org/3/";const r="a661ef86e324b3ea2edd4f22cf9fb615";async function i(){return(await t.A.get("trending/all/day",{params:{api_key:r}})).data.results}async function o(e){return(await t.A.get("movie/".concat(e),{params:{api_key:r}})).data}async function s(e){return(await t.A.get("search/movie",{params:{api_key:r,query:e}})).data.results}async function c(e){return(await t.A.get("movie/".concat(e,"/credits"),{params:{api_key:r,language:"en-US"}})).data}async function d(e){return(await t.A.get("movie/".concat(e,"/reviews"),{params:{api_key:r}})).data}}}]);
//# sourceMappingURL=41.b1156379.chunk.js.map