import{m as C,u as y,V as n}from"./VTextField-220d3e9c.js";import{d as B,c as i}from"./VCheckboxBtn-a8e0600f.js";import{L as I,aa as A,ac as F,E as w,a9 as z,ad as j,x as s,m as l,d as D,ah as E,o as u,g as d,F as L,i as R,z as $,aj as N,e as T,ak as U}from"./main-da363878.js";const O=I()({name:"VCheckbox",inheritAttrs:!1,props:{...C(),...A(B(),["inline"])},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:t,slots:c}=a;const{isFocused:r,focus:o,blur:f}=y(e),m=F(),p=w(()=>e.id||`checkbox-${m}`);return z(()=>{const[b,h]=j(t),[k,G]=n.filterProps(e),[x,H]=i.filterProps(e);return s(n,l({class:["v-checkbox",e.class]},b,k,{id:p.value,focused:r.value,style:e.style}),{...c,default:_=>{let{id:v,messagesId:V,isDisabled:g,isReadonly:P}=_;return s(i,l(x,{id:v.value,"aria-describedby":V.value,disabled:g.value,readonly:P.value},h,{onFocus:o,onBlur:f}),c)}})}),{}}}),q={class:"d-flex justify-center flex-wrap gap-3"},Q=D({__name:"AuthProvider",setup(e){const{global:a}=E(),t=[{icon:"fa-facebook",color:"#4267b2"},{icon:"fa-google",color:"#dd4b39"},{icon:"fa-twitter",color:"#1da1f2"}];return(c,r)=>(u(),d("div",q,[(u(),d(L,null,R(t,o=>s(U,{key:o.icon,icon:"",variant:"tonal",size:"38",color:T(a).name.value==="dark"?o.colorInDark:o.color,class:"rounded"},{default:$(()=>[s(N,{size:"18",icon:o.icon},null,8,["icon"])]),_:2},1032,["color"])),64))]))}});export{O as V,Q as _};
