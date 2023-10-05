import{d as Z,b as ee}from"./VInput-586caf66.js";import{m as te,V as A}from"./VTextField-87129457.js";import{co as ae,P as le,cy as ne,O as oe,d0 as se,X as ue,dp as ie,a0 as re,t as B,cq as R,a9 as C,cz as ce,a4 as de,y as s,F as fe,m as b,dj as me,K as ve,cX as pe,d as z,bU as E,o as K,i as he,e as I,f as ye,H as Ve,aQ as Ce,j as ke,B as ge,x as be,n as M,b2 as U,z as _e}from"./main-834b9cca.js";import{m as we,u as Pe,V as xe,a as N}from"./VList-483d2f15.js";import{V as De}from"./VMenu-ec466a7c.js";import{V as Be}from"./VCheckboxBtn-7bb82281.js";import{V as Ie}from"./VChip-7003a31a.js";const Se=ae({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:le,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:ne},...we({itemChildren:!1})},"v-select"),Te=oe()({name:"VSelect",props:{...Se(),...se(te({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ue({transition:{component:ie}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,_){let{slots:a}=_;const{t:c}=re(),v=B(),S=B(),h=R(e,"menu"),o=C({get:()=>h.value,set:t=>{var n;h.value&&!t&&((n=S.value)!=null&&n.ΨopenChildren)||(h.value=t)}}),{items:k,transformIn:H,transformOut:j}=Pe(e),u=R(e,"modelValue",[],t=>H(ce(t)),t=>{const n=j(t);return e.multiple?n:n[0]??null}),y=Z(),w=C(()=>u.value.map(t=>k.value.find(n=>e.valueComparator(n.value,t.value))||t)),$=C(()=>w.value.map(t=>t.props.value)),g=B(!1);let T="",O;const F=C(()=>e.hideSelected?k.value.filter(t=>!w.value.some(n=>n===t)):k.value),V=B();function q(t){e.openOnClear&&(o.value=!0)}function X(){e.hideNoData&&!k.value.length||e.readonly||y!=null&&y.isReadonly.value||(o.value=!o.value)}function Q(t){var l,m,p,r;if(e.readonly||y!=null&&y.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(o.value=!0),["Escape","Tab"].includes(t.key)&&(o.value=!1),t.key==="ArrowDown"?(l=V.value)==null||l.focus("next"):t.key==="ArrowUp"?(m=V.value)==null||m.focus("prev"):t.key==="Home"?(p=V.value)==null||p.focus("first"):t.key==="End"&&((r=V.value)==null||r.focus("last"));const n=1e3;function f(i){const d=i.key.length===1,L=!i.ctrlKey&&!i.metaKey&&!i.altKey;return d&&L}if(e.multiple||!f(t))return;const x=performance.now();x-O>n&&(T=""),T+=t.key.toLowerCase(),O=x;const D=k.value.find(i=>i.title.toLowerCase().startsWith(T));D!==void 0&&(u.value=[D])}function P(t){if(e.multiple){const n=$.value.findIndex(f=>e.valueComparator(f,t.value));if(n===-1)u.value=[...u.value,t];else{const f=[...u.value];f.splice(n,1),u.value=f}}else u.value=[t],o.value=!1}function W(t){var n;(n=V.value)!=null&&n.$el.contains(t.relatedTarget)||(o.value=!1)}function Y(t){g.value=!0}function G(t){var n;t.relatedTarget==null&&((n=v.value)==null||n.focus())}return de(()=>{const t=!!(e.chips||a.chip),n=!!(!e.hideNoData||F.value.length||a.prepend||a.append||a["no-data"]),f=u.value.length>0,[x]=A.filterProps(e),D=f||!g.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(A,b({ref:v},x,{modelValue:u.value.map(l=>l.props.value).join(", "),"onUpdate:modelValue":l=>{l==null&&(u.value=[])},focused:g.value,"onUpdate:focused":l=>g.value=l,validationValue:u.externalValue,dirty:f,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:D,"onClick:clear":q,"onMousedown:control":X,onBlur:W,onKeydown:Q}),{...a,default:()=>s(fe,null,[s(De,b({ref:S,modelValue:o.value,"onUpdate:modelValue":l=>o.value=l,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[n&&s(xe,{ref:V,selected:$.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:l=>l.preventDefault(),onFocusin:Y,onFocusout:G},{default:()=>{var l,m,p;return[!F.value.length&&!e.hideNoData&&(((l=a["no-data"])==null?void 0:l.call(a))??s(N,{title:c(e.noDataText)},null)),(m=a["prepend-item"])==null?void 0:m.call(a),F.value.map((r,i)=>{var d;return a.item?(d=a.item)==null?void 0:d.call(a,{item:r,index:i,props:b(r.props,{onClick:()=>P(r)})}):s(N,b({key:i},r.props,{onClick:()=>P(r)}),{prepend:L=>{let{isSelected:J}=L;return e.multiple&&!e.hideSelected?s(Be,{modelValue:J,ripple:!1,tabindex:"-1"},null):void 0}})}),(p=a["append-item"])==null?void 0:p.call(a)]}})]}),w.value.map((l,m)=>{var i;function p(d){d.stopPropagation(),d.preventDefault(),P(l)}const r={"onClick:close":p,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:l.value,class:"v-select__selection"},[t?a.chip?s(me,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:l.title}}},{default:()=>{var d;return[(d=a.chip)==null?void 0:d.call(a,{item:l,index:m,props:r})]}}):s(Ie,b({key:"chip",closable:e.closableChips,size:"small",text:l.title},r),null):((i=a.selection)==null?void 0:i.call(a,{item:l,index:m}))??s("span",{class:"v-select__selection-text"},[l.title,e.multiple&&m<w.value.length-1&&s("span",{class:"v-select__selection-comma"},[ve(",")])])])})])})}),pe({isFocused:g,menu:o,select:P},v)}}),Fe=z({name:"AppSelect",inheritAttrs:!1}),Me=z({...Fe,setup(e){const _=C(()=>{const c=E(),v=c.id||c.label;return v?`app-select-${v}-${Math.random().toString(36).slice(2,7)}`:void 0}),a=C(()=>E().label);return(c,v)=>(K(),he("div",{class:_e(["app-select flex-grow-1",c.$attrs.class])},[I(a)?(K(),ye(ee,{key:0,for:I(_),class:"mb-1 text-body-2 text-high-emphasis",text:I(a)},null,8,["for","text"])):Ve("",!0),s(Te,M(U({...c.$attrs,class:null,label:void 0,variant:"outlined",id:I(_),menuProps:{contentClass:["app-inner-list","app-select__content","v-select__content",c.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),Ce({_:2},[ke(c.$slots,(S,h)=>({name:h,fn:ge(o=>[be(c.$slots,h,M(U(o||{})))])}))]),1040)],2))}});export{Te as V,Me as _};
