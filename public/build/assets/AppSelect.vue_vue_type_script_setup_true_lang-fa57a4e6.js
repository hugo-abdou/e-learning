import{b1 as Z,ab as ee,ba as ae,L as te,aa as le,aE as ne,bP as oe,aF as se,s as I,a3 as R,E as V,a9 as ue,x as s,F as ie,m as g,bK as re,au as ce,aU as de,bb as fe,d as z,bQ as A,o as O,g as ve,e as S,f as me,D as pe,bR as he,i as ye,z as Ce,w as Ve,n as K,bS as M,y as ke}from"./main-0fe8d6c4.js";import{g as be,h as ge,b as U,a as _e}from"./VTextField-8e9e4f53.js";import{m as we,u as Pe,V as xe,a as N}from"./VList-df386f36.js";import{V as De}from"./VMenu-04b4d8fd.js";import{c as Ie}from"./VCheckboxBtn-105f566a.js";import{V as Se}from"./VChip-d4c2522a.js";const Be=Z({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:ee,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:ae},...we({itemChildren:!1})},"v-select"),Fe=te()({name:"VSelect",props:{...Be(),...le(be({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ne({transition:{component:oe}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,_){let{slots:t}=_;const{t:c}=se(),m=I(),B=I(),h=R(e,"menu"),o=V({get:()=>h.value,set:a=>{var n;h.value&&!a&&((n=B.value)!=null&&n.ΨopenChildren)||(h.value=a)}}),{items:k,transformIn:H,transformOut:j}=Pe(e),u=R(e,"modelValue",[],a=>H(fe(a)),a=>{const n=j(a);return e.multiple?n:n[0]??null}),y=ge(),w=V(()=>u.value.map(a=>k.value.find(n=>e.valueComparator(n.value,a.value))||a)),$=V(()=>w.value.map(a=>a.props.value)),b=I(!1);let F="",E;const T=V(()=>e.hideSelected?k.value.filter(a=>!w.value.some(n=>n===a)):k.value),C=I();function q(a){e.openOnClear&&(o.value=!0)}function Q(){e.hideNoData&&!k.value.length||e.readonly||y!=null&&y.isReadonly.value||(o.value=!o.value)}function W(a){var l,v,p,r;if(e.readonly||y!=null&&y.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(o.value=!0),["Escape","Tab"].includes(a.key)&&(o.value=!1),a.key==="ArrowDown"?(l=C.value)==null||l.focus("next"):a.key==="ArrowUp"?(v=C.value)==null||v.focus("prev"):a.key==="Home"?(p=C.value)==null||p.focus("first"):a.key==="End"&&((r=C.value)==null||r.focus("last"));const n=1e3;function f(i){const d=i.key.length===1,L=!i.ctrlKey&&!i.metaKey&&!i.altKey;return d&&L}if(e.multiple||!f(a))return;const x=performance.now();x-E>n&&(F=""),F+=a.key.toLowerCase(),E=x;const D=k.value.find(i=>i.title.toLowerCase().startsWith(F));D!==void 0&&(u.value=[D])}function P(a){if(e.multiple){const n=$.value.findIndex(f=>e.valueComparator(f,a.value));if(n===-1)u.value=[...u.value,a];else{const f=[...u.value];f.splice(n,1),u.value=f}}else u.value=[a],o.value=!1}function Y(a){var n;(n=C.value)!=null&&n.$el.contains(a.relatedTarget)||(o.value=!1)}function G(a){b.value=!0}function J(a){var n;a.relatedTarget==null&&((n=m.value)==null||n.focus())}return ue(()=>{const a=!!(e.chips||t.chip),n=!!(!e.hideNoData||T.value.length||t.prepend||t.append||t["no-data"]),f=u.value.length>0,[x]=U.filterProps(e),D=f||!b.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(U,g({ref:m},x,{modelValue:u.value.map(l=>l.props.value).join(", "),"onUpdate:modelValue":l=>{l==null&&(u.value=[])},focused:b.value,"onUpdate:focused":l=>b.value=l,validationValue:u.externalValue,dirty:f,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:D,"onClick:clear":q,"onMousedown:control":Q,onBlur:Y,onKeydown:W}),{...t,default:()=>s(ie,null,[s(De,g({ref:B,modelValue:o.value,"onUpdate:modelValue":l=>o.value=l,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[n&&s(xe,{ref:C,selected:$.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:l=>l.preventDefault(),onFocusin:G,onFocusout:J},{default:()=>{var l,v,p;return[!T.value.length&&!e.hideNoData&&(((l=t["no-data"])==null?void 0:l.call(t))??s(N,{title:c(e.noDataText)},null)),(v=t["prepend-item"])==null?void 0:v.call(t),T.value.map((r,i)=>{var d;return t.item?(d=t.item)==null?void 0:d.call(t,{item:r,index:i,props:g(r.props,{onClick:()=>P(r)})}):s(N,g({key:i},r.props,{onClick:()=>P(r)}),{prepend:L=>{let{isSelected:X}=L;return e.multiple&&!e.hideSelected?s(Ie,{modelValue:X,ripple:!1,tabindex:"-1"},null):void 0}})}),(p=t["append-item"])==null?void 0:p.call(t)]}})]}),w.value.map((l,v)=>{var i;function p(d){d.stopPropagation(),d.preventDefault(),P(l)}const r={"onClick:close":p,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:l.value,class:"v-select__selection"},[a?t.chip?s(re,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:l.title}}},{default:()=>{var d;return[(d=t.chip)==null?void 0:d.call(t,{item:l,index:v,props:r})]}}):s(Se,g({key:"chip",closable:e.closableChips,size:"small",text:l.title},r),null):((i=t.selection)==null?void 0:i.call(t,{item:l,index:v}))??s("span",{class:"v-select__selection-text"},[l.title,e.multiple&&v<w.value.length-1&&s("span",{class:"v-select__selection-comma"},[ce(",")])])])})])})}),de({isFocused:b,menu:o,select:P},m)}}),Te=z({name:"AppSelect",inheritAttrs:!1}),Ke=z({...Te,setup(e){const _=V(()=>{const c=A(),m=c.id||c.label;return m?`app-select-${m}-${Math.random().toString(36).slice(2,7)}`:void 0}),t=V(()=>A().label);return(c,m)=>(O(),ve("div",{class:ke(["app-select flex-grow-1",c.$attrs.class])},[S(t)?(O(),me(_e,{key:0,for:S(_),class:"mb-1 text-body-2 text-high-emphasis",text:S(t)},null,8,["for","text"])):pe("",!0),s(Fe,K(M({...c.$attrs,class:null,label:void 0,variant:"outlined",id:S(_),menuProps:{contentClass:["app-inner-list","app-select__content","v-select__content",c.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),he({_:2},[ye(c.$slots,(B,h)=>({name:h,fn:Ce(o=>[Ve(c.$slots,h,K(M(o||{})))])}))]),1040)],2))}});export{Fe as V,Ke as _};
