import{d as m,a6 as l,bA as n,o as i,c as f,p as t,h as b,z as u,b as x,bR as h,j as _,bD as d,bE as p,y as A,f as $,A as k}from"./main-bf1e147a.js";import{b as v}from"./VInput-86d12209.js";import{V}from"./VTextField-7f141e42.js";const B=m({name:"AppTextField",inheritAttrs:!1,__name:"AppTextField",setup(g){const a=l(()=>{const e=n(),s=e.id||e.label;return s?`app-text-field-${s}-${Math.random().toString(36).slice(2,7)}`:void 0}),r=l(()=>n().label);return(e,s)=>(i(),f("div",{class:A(["app-text-field flex-grow-1",e.$attrs.class])},[t(r)?(i(),b(v,{key:0,for:t(a),class:"mb-1 text-body-2 text-high-emphasis",text:t(r)},null,8,["for","text"])):u("",!0),x(V,d(p({...e.$attrs,class:null,label:void 0,variant:"outlined",id:t(a)})),h({_:2},[_(e.$slots,(C,o)=>({name:o,fn:$(c=>[k(e.$slots,o,d(p(c||{})))])}))]),1040)],2))}});export{B as _};