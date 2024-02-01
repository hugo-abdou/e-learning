import{p as T,ax as H,bQ as L,g as w,aA as v,l as A,n,J as N,K as W,bS as Z,cO as p,u as ee,r as y,bE as te,s as g,aT as ne,F as C,cP as le,X as _,cQ as ae}from"./plugins-900eb03f.js";import{c as ue}from"./index-e8fbdf01.js";import{m as ie,f as oe,V as re}from"./VField-b7aa3867.js";import{a as se,u as ce,V as I}from"./VInput-d19eb2fc.js";import{f as de}from"./forwardRefs-6ea3df5c.js";const fe=T({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...H(),...L({transition:{component:ue}})},"VCounter"),ve=w()({name:"VCounter",functional:!0,props:fe(),setup(e,V){let{slots:r}=V;const s=v(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return A(()=>n(Z,{transition:e.transition},{default:()=>[N(n("div",{class:["v-counter",e.class],style:e.style},[r.default?r.default({counter:s.value,max:e.max,value:e.value}):s.value]),[[W,e.active]])]})),{}}}),me=["color","file","time","date","datetime-local","week","month"],xe=T({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...se(),...ie()},"VTextField"),Fe=w()({name:"VTextField",directives:{Intersect:p},inheritAttrs:!1,props:xe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{attrs:r,emit:s,slots:l}=V;const i=ee(e,"modelValue"),{isFocused:c,focus:B,blur:D}=ce(e),M=v(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:(i.value??"").toString().length),R=v(()=>{if(r.maxlength)return r.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),E=v(()=>["plain","underlined"].includes(e.variant));function $(t,a){var u,o;!e.autofocus||!t||(o=(u=a[0].target)==null?void 0:u.focus)==null||o.call(u)}const P=y(),k=y(),d=y(),O=v(()=>me.includes(e.type)||e.persistentPlaceholder||c.value||e.active);function m(){var t;d.value!==document.activeElement&&((t=d.value)==null||t.focus()),c.value||B()}function Q(t){s("mousedown:control",t),t.target!==d.value&&(m(),t.preventDefault())}function U(t){m(),s("click:control",t)}function j(t){t.stopPropagation(),m(),_(()=>{i.value=null,ae(e["onClick:clear"],t)})}function z(t){var u;const a=t.target;if(i.value=a.value,(u=e.modelModifiers)!=null&&u.trim&&["text","search","password","tel","url"].includes(e.type)){const o=[a.selectionStart,a.selectionEnd];_(()=>{a.selectionStart=o[0],a.selectionEnd=o[1]})}}return A(()=>{const t=!!(l.counter||e.counter!==!1&&e.counter!=null),a=!!(t||l.details),[u,o]=te(r),[{modelValue:Ve,...J}]=I.filterProps(e),[K]=oe(e);return n(I,g({ref:P,modelValue:i.value,"onUpdate:modelValue":f=>i.value=f,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},u,J,{centerAffix:!E.value,focused:c.value}),{...l,default:f=>{let{id:x,isDisabled:F,isDirty:h,isReadonly:X,isValid:Y}=f;return n(re,g({ref:k,onMousedown:Q,onClick:U,"onClick:clear":j,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},K,{id:x.value,active:O.value||h.value,dirty:h.value||e.dirty,disabled:F.value,focused:c.value,error:Y.value===!1}),{...l,default:q=>{let{props:{class:b,...G}}=q;const S=N(n("input",g({ref:d,value:i.value,onInput:z,autofocus:e.autofocus,readonly:X.value,disabled:F.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:m,onBlur:D},G,o),null),[[ne("intersect"),{handler:$},null,{once:!0}]]);return n(C,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?n("div",{class:b,"data-no-activator":""},[l.default(),S]):le(S,{class:b}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:a?f=>{var x;return n(C,null,[(x=l.details)==null?void 0:x.call(l,f),t&&n(C,null,[n("span",null,null),n(ve,{active:e.persistentCounter||c.value,value:M.value,max:R.value},l.counter)])])}:void 0})}),de({},P,k,d)}});export{Fe as V,ve as a,xe as m};
