import{V as m,a as f}from"./VRow-4a6d7b26.js";import{a as v,V as h}from"./VRadioGroup-26daf95b.js";import{b as C}from"./VInput-c65df7da.js";import{d as V,o as n,h as d,f as a,b as s,c as g,j as x,F as R,k as y,v as c,A as k,B as b,e as l,a4 as B,z as r,_ as I}from"./main-83f81ad7.js";const N={class:"d-flex flex-column align-center text-center gap-2"},S={class:"cr-title text-base"},W={class:"text-sm mb-0 clamp-text"},w=V({__name:"CustomRadiosWithIcon",props:{selectedRadio:{},radioContent:{},gridColumn:{}},emits:["update:selectedRadio"],setup(i,{emit:u}){const t=i,_=u,p=o=>{_("update:selectedRadio",o)};return(o,z)=>t.radioContent?(n(),d(v,{key:0,"model-value":t.selectedRadio,"onUpdate:modelValue":p},{default:a(()=>[s(m,null,{default:a(()=>[(n(!0),g(R,null,x(t.radioContent,e=>(n(),d(f,c({key:e.title},o.gridColumn),{default:a(()=>[s(C,{class:k(["custom-input custom-radio-icon rounded cursor-pointer",t.selectedRadio===e.value?"active":""])},{default:a(()=>[b(o.$slots,"default",{item:e},()=>[l("div",N,[s(B,c(e.icon,{class:"text-high-emphasis"}),null,16),l("h6",S,r(e.title),1),l("p",W,r(e.desc),1)])],!0),l("div",null,[s(h,{value:e.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):y("",!0)}});const D=I(w,[["__scopeId","data-v-0f137429"]]);export{D as _};