import{m as k,V as p,a as A,b as C}from"./VSelectionControl-9eb14a8c.js";import{p as V,g as f,l as b,n as a,s as n,o as O,bv as c,bz as h,aA as F,u as U,bE as x,F as N}from"./plugins-900eb03f.js";import{a as _,V as m,b as z}from"./VInput-d19eb2fc.js";const D=V({...k({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),w=f()({name:"VRadio",props:D(),setup(e,l){let{slots:s}=l;return b(()=>a(p,n(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const E=V({height:{type:[Number,String],default:"auto"},..._(),...O(A(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),B=f()({name:"VRadioGroup",inheritAttrs:!1,props:E(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:o}=l;const y=h(),i=F(()=>e.id||`radio-group-${y}`),t=U(e,"modelValue");return b(()=>{const[v,I]=x(s),[g,L]=m.filterProps(e),[R,M]=p.filterProps(e),r=o.label?o.label({label:e.label,props:{for:i.value}}):e.label;return a(m,n({class:["v-radio-group",e.class],style:e.style},v,g,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,id:i.value}),{...o,default:u=>{let{id:d,messagesId:P,isDisabled:G,isReadonly:S}=u;return a(N,null,[r&&a(z,{id:d.value},{default:()=>[r]}),a(C,n(R,{id:d.value,"aria-describedby":P.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:S.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:t.value,"onUpdate:modelValue":$=>t.value=$}),o)])}})}),{}}});export{w as V,B as a};
