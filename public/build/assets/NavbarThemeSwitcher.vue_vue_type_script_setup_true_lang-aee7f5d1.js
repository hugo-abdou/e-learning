import{d as i,aR as d,bz as f,a as g,o as h,h as l,f as c,b as r,a0 as x,q as m,e as T,y as b}from"./main-dd42a7da.js";import{V as v}from"./VTooltip-6ed70ba3.js";const y={class:"text-capitalize"},C=i({__name:"ThemeSwitcher",props:{themes:{}},setup(o){const e=o,t=d(),{state:a,next:n,index:p}=f(e.themes.map(s=>s.name),{initialValue:t.theme}),_=()=>{t.theme=n()};return(s,N)=>{const u=g("IconBtn");return h(),l(u,{onClick:_},{default:c(()=>[r(x,{size:"26",color:"rgba(var(--v-theme-on-surface))",icon:e.themes[m(p)].icon},null,8,["icon"]),r(v,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:c(()=>[T("span",y,b(m(a)),1)]),_:1})]),_:1})}}}),B=i({__name:"NavbarThemeSwitcher",setup(o){const e=[{name:"system",icon:"tabler-device-laptop"},{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon"}];return(t,a)=>{const n=C;return h(),l(n,{themes:e})}}});export{B as _};
