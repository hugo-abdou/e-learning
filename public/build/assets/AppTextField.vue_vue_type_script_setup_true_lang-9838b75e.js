import{t as m,aA as l,bD as n,v as i,x as b,H as t,z as f,a2 as u,n as x,bV as _,y as h,bG as d,bH as c,ab as v,A,ac as V}from"./plugins-1ca62e54.js";import{b as $}from"./VInput-0f0d564d.js";import{V as k}from"./VTextField-38237e59.js";const B=m({name:"AppTextField",inheritAttrs:!1,__name:"AppTextField",setup(g){const s=l(()=>{const e=n(),a=e.id||e.label;return a?`app-text-field-${a}-${Math.random().toString(36).slice(2,7)}`:void 0}),r=l(()=>n().label);return(e,a)=>(i(),b("div",{class:v(["app-text-field flex-grow-1",e.$attrs.class])},[t(r)?(i(),f($,{key:0,for:t(s),class:"mb-1 text-body-2 text-high-emphasis",text:t(r)},null,8,["for","text"])):u("",!0),x(k,d(c({...e.$attrs,class:null,label:void 0,variant:"outlined",id:t(s)})),_({_:2},[h(e.$slots,(C,o)=>({name:o,fn:A(p=>[V(e.$slots,o,d(c(p||{})))])}))]),1040)],2))}});export{B as _};