"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[336],{334:(e,t,a)=>{a.d(t,{A:()=>n});a(43);var r=a(579);const n=e=>{let{error:t}=e;return(0,r.jsx)("div",{children:"'Sorry, something went wrong :('"})}},336:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(43),n=a(216),s=a(562),i=a(455),c=a(334),o=a(579);const d="idle",l="loading",u="resolve",h="error",f=()=>{const[e,t]=(0,r.useState)(),[a,f]=(0,r.useState)(d),[p,v]=(0,r.useState)(null),{movieId:g}=(0,n.g)();return(0,r.useEffect)((()=>{f(l),(0,s.NA)(g).then((e=>{t(e.results),f(u)})).catch((e=>{t({}),v(e),f(h)}))}),[g]),(0,o.jsxs)("section",{children:[a===u&&e&&e.length>0?(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:e.map((e=>{let{id:t,author:a,content:r}=e;return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:a}),(0,o.jsx)("p",{children:r})]},t)}))})}):a!==l&&(0,o.jsx)("p",{children:"Sorry, there isn't any review for this movie :("}),a===l&&(0,o.jsx)(i.a,{}),a===h&&(0,o.jsx)(c.A,{children:p})]})}},562:(e,t,a)=>{a.d(t,{D9:()=>c,LF:()=>i,NA:()=>d,Nt:()=>s,dk:()=>o});var r=a(154);r.A.defaults.baseURL="https://api.themoviedb.org/3/";const n="a661ef86e324b3ea2edd4f22cf9fb615";async function s(){return(await r.A.get("trending/all/day",{params:{api_key:n}})).data.results}async function i(e){return(await r.A.get("movie/".concat(e),{params:{api_key:n}})).data}async function c(e){return(await r.A.get("search/movie",{params:{api_key:n,query:e}})).data.results}async function o(e){return(await r.A.get("movie/".concat(e,"/credits"),{params:{api_key:n,language:"en-US"}})).data}async function d(e){return(await r.A.get("movie/".concat(e,"/reviews"),{params:{api_key:n}})).data}}}]);
//# sourceMappingURL=336.390fd113.chunk.js.map