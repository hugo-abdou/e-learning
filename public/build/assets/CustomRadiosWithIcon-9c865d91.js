import{V as m,a as f}from"./VRow-bc79db32.js";import{a as v,V as C}from"./VRadioGroup-6491375b.js";import{b as h}from"./VInput-d19eb2fc.js";import{t as x,v as n,z as d,A as a,n as s,x as V,y as g,F as R,a2 as y,s as c,ab as b,ac as k,D as l,C as I,E as r}from"./plugins-900eb03f.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const N={class:"d-flex flex-column align-center text-center gap-2"},S={class:"cr-title text-base"},W={class:"text-sm mb-0 clamp-text"},w=x({__name:"CustomRadiosWithIcon",props:{selectedRadio:{},radioContent:{},gridColumn:{}},emits:["update:selectedRadio"],setup(i,{emit:u}){const t=i,_=u,p=o=>{_("update:selectedRadio",o)};return(o,z)=>t.radioContent?(n(),d(v,{key:0,"model-value":t.selectedRadio,"onUpdate:modelValue":p},{default:a(()=>[s(m,null,{default:a(()=>[(n(!0),V(R,null,g(t.radioContent,e=>(n(),d(f,c({key:e.title},o.gridColumn),{default:a(()=>[s(h,{class:b(["custom-input custom-radio-icon rounded cursor-pointer",t.selectedRadio===e.value?"active":""])},{default:a(()=>[k(o.$slots,"default",{item:e},()=>[l("div",N,[s(I,c(e.icon,{class:"text-high-emphasis"}),null,16),l("h6",S,r(e.title),1),l("p",W,r(e.desc),1)])],!0),l("div",null,[s(C,{value:e.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):y("",!0)}});const G=B(w,[["__scopeId","data-v-0f137429"]]);export{G as _};
