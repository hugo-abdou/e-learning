import{b as d}from"./VInput-0a556944.js";import{V as u}from"./VSelect-8dae4b5d.js";import{d as b,a6 as r,bz as n,o as c,c as f,p as t,h as _,z as h,b as v,bA as $,j as A,bB as i,bC as p,y as C,f as S,A as k}from"./main-6e33e0f4.js";const y=b({name:"AppSelect",inheritAttrs:!1,__name:"AppSelect",setup(V){const a=r(()=>{const e=n(),s=e.id||e.label;return s?`app-select-${s}-${Math.random().toString(36).slice(2,7)}`:void 0}),l=r(()=>n().label);return(e,s)=>(c(),f("div",{class:C(["app-select flex-grow-1",e.$attrs.class])},[t(l)?(c(),_(d,{key:0,for:t(a),class:"mb-1 text-body-2 text-high-emphasis",text:t(l)},null,8,["for","text"])):h("",!0),v(u,i(p({...e.$attrs,class:null,label:void 0,variant:"outlined",id:t(a),menuProps:{contentClass:["app-inner-list","app-select__content","v-select__content",e.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),$({_:2},[A(e.$slots,(g,o)=>({name:o,fn:S(m=>[k(e.$slots,o,i(p(m||{})))])}))]),1040)],2))}});export{y as _};