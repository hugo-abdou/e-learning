import{a as l}from"./avatar-1-8ec11374.js";import{d,l as _,b5 as V,o as b,h as g,f as a,b as t,bp as n,p as e,bb as c,v as o,x as v,a0 as i}from"./main-6e33e0f4.js";import{V as x}from"./VMenu-02d70115.js";import{V as I,a as r,c as L,b as u}from"./VList-1acb65c4.js";import{V as h}from"./VListItemAction-e11953ca.js";import{V as m}from"./VDivider-83731cf9.js";const N=d({__name:"UserProfile",setup(y){const p=_(),s=V(),f=async()=>{await s.logout(),p.replace({name:"login"})};return(k,S)=>(b(),g(c,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:a(()=>[t(n,{src:e(s).user.avatar||e(l),cover:""},null,8,["src"]),t(x,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:a(()=>[t(I,null,{default:a(()=>[t(r,null,{prepend:a(()=>[t(h,{start:""},{default:a(()=>[t(c,null,{default:a(()=>[t(n,{src:e(s).user.avatar||e(l),cover:""},null,8,["src"])]),_:1})]),_:1})]),default:a(()=>[t(L,null,{default:a(()=>[o(v(e(s).user.email),1)]),_:1})]),_:1}),t(m,{class:"my-2"}),t(r,{to:{name:"account-settings-tab",params:{tab:"account"}}},{prepend:a(()=>[t(i,{class:"me-2",icon:"tabler-settings",size:"22"})]),default:a(()=>[t(u,null,{default:a(()=>[o("Settings")]),_:1})]),_:1}),t(m,{class:"my-2"}),t(r,{link:"",onClick:f},{prepend:a(()=>[t(i,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:a(()=>[t(u,null,{default:a(()=>[o("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{N as _};