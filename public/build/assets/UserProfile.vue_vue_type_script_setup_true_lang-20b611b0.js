import{d,q as _,az as V,o as g,f as b,z as t,x as a,aY as l,e,aN as n,au as o,C as v,aj as u}from"./main-0fe8d6c4.js";import{V as x}from"./VMenu-04b4d8fd.js";import{V as I,a as r,c as L,b as i}from"./VList-df386f36.js";import{V as y}from"./VListItemAction-22e8cfb7.js";import{V as c}from"./VDivider-4843e98e.js";const m="/build/assets/avatar-1-129659bb.png",B=d({__name:"UserProfile",setup(h){const p=_(),s=V(),f=async()=>{await s.logout(),p.replace({name:"login"})};return(k,z)=>(g(),b(n,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>[a(l,{src:e(s).user.avatar||e(m)},null,8,["src"]),a(x,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[a(I,null,{default:t(()=>[a(r,null,{prepend:t(()=>[a(y,{start:""},{default:t(()=>[a(n,null,{default:t(()=>[a(l,{src:e(s).user.avatar||e(m)},null,8,["src"])]),_:1})]),_:1})]),default:t(()=>[a(L,null,{default:t(()=>[o(v(e(s).user.email),1)]),_:1})]),_:1}),a(c,{class:"my-2"}),a(r,{to:{name:"account-settings-tab",params:{tab:"account"}}},{prepend:t(()=>[a(u,{class:"me-2",icon:"tabler-settings",size:"22"})]),default:t(()=>[a(i,null,{default:t(()=>[o("Settings")]),_:1})]),_:1}),a(c,{class:"my-2"}),a(r,{link:"",onClick:f},{prepend:t(()=>[a(u,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[a(i,null,{default:t(()=>[o("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{B as _};