import{P as V}from"./vue3-perfect-scrollbar.esm-f9c6da8b.js";import{t as d,a4 as x,S as b,v as s,z as n,A as e,n as t,C as r,aa as g,H as m,x as C,F as v,y,ab as S,D as p,E as _}from"./plugins-20f6c63a.js";import{V as k}from"./VMenu-baca4a70.js";import{V as B,a as I,b as w}from"./VCard-30e4f82a.js";import{V as z}from"./VDivider-371081d3.js";import{V as N,a as D}from"./VRow-9970c9d9.js";import{V as P}from"./VAvatar-d93e5e0c.js";import"./VOverlay-d4a32956.js";import"./forwardRefs-6ea3df5c.js";import"./scopeId-3cd861c8.js";import"./dialog-transition-beb6505c.js";import"./VCardActions-aebc9678.js";import"./createSimpleFunctional-991d7489.js";import"./VCardText-d52ac2bc.js";const $={class:"text-base font-weight-medium mt-2 mb-0"},A={class:"text-sm"},E=d({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:{}},setup(l){const a=l,c=x();return(f,i)=>{const u=b("IconBtn");return s(),n(u,null,{default:e(()=>[t(r,{size:"26",icon:a.togglerIcon},null,8,["icon"]),t(k,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(B,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(I,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(r,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(w,null,{default:e(()=>[g("Shortcuts")]),_:1})]),_:1}),t(z),t(m(V),{options:{wheelPropagation:!1}},{default:e(()=>[t(N,{class:"ma-0 mt-n1"},{default:e(()=>[(s(!0),C(v,null,y(a.shortcuts,(o,h)=>(s(),n(D,{key:o.title,cols:"6",class:S(["text-center border-t cursor-pointer pa-4 shortcut-icon",(h+1)%2?"border-e":""]),onClick:F=>m(c).push(o.to)},{default:e(()=>[t(P,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:o.icon},null,8,["icon"])]),_:2},1024),p("h6",$,_(o.title),1),p("span",A,_(o.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const X=d({__name:"NavbarShortcuts",setup(l){const a=[];return(c,f)=>{const i=E;return s(),n(i,{shortcuts:a})}}});export{X as default};