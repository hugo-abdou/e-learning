import{m as pe,V as ee}from"./VTextField-e9152184.js";import{p as H,ax as se,g as G,aD as re,w as Q,l as J,n as s,F as O,s as M,az as W,aA as I,r as E,bt as he,bu as ge,aP as ye,aB as le,b0 as Ve,cs as Se,b3 as we,aw as be,br as ke,k as xe,cj as Pe,aC as j,bv as Ce,o as Ie,bQ as Te,by as Re,u as te,c8 as De,C as ne,V as Be,aa as Ae,cE as _e,ct as ae}from"./plugins-900eb03f.js";import{f as Le}from"./VInput-d19eb2fc.js";import{f as Fe}from"./forwardRefs-6ea3df5c.js";import{m as Me,u as Ee,V as Oe,a as oe}from"./VList-ff1b2c79.js";import{V as He}from"./dialog-transition-eb9759aa.js";import{V as Ue}from"./VMenu-479530dd.js";import{g as ze}from"./VOverlay-d2f68a91.js";import{V as Ke}from"./VCheckboxBtn-e9892fb1.js";import{V as Ne}from"./VChip-b4e7b548.js";const $e=H({renderless:Boolean,...se()},"VVirtualScrollItem"),qe=G()({name:"VVirtualScrollItem",inheritAttrs:!1,props:$e(),emits:{"update:height":e=>!0},setup(e,f){let{attrs:l,emit:m,slots:r}=f;const{resizeRef:c,contentRect:h}=re(void 0,"border");Q(()=>{var a;return(a=h.value)==null?void 0:a.height},a=>{a!=null&&m("update:height",a)}),J(()=>{var a,o;return e.renderless?s(O,null,[(a=r.default)==null?void 0:a.call(r,{itemRef:c})]):s("div",M({ref:c,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(o=r.default)==null?void 0:o.call(r)])})}}),ue=-1,ie=1,je=H({itemHeight:{type:[Number,String],default:48}},"virtual");function We(e,f,l){const m=W(0),r=W(e.itemHeight),c=I({get:()=>parseInt(r.value??0,10),set(d){r.value=d}}),h=E(),{resizeRef:a,contentRect:o}=re();he(()=>{a.value=h.value});const y=ge(),k=new Map;let w=Array.from({length:f.value.length});const n=I(()=>{const d=(!o.value||h.value===document.documentElement?y.height.value:o.value.height)-((l==null?void 0:l.value)??0);return Math.ceil(d/c.value*1.7+1)});function p(d,v){c.value=Math.max(c.value,v),w[d]=v,k.set(f.value[d],v)}function T(d){return w.slice(0,d).reduce((v,V)=>v+(V||c.value),0)}function x(d){const v=f.value.length;let V=0,D=0;for(;D<d&&V<v;)D+=w[V++]||c.value;return V-1}let L=0;function F(){if(!h.value||!o.value)return;const d=o.value.height-56,v=h.value.scrollTop,V=v<L?ue:ie,D=x(v+d/2),_=Math.round(n.value/3),K=D-_,N=m.value+_*2-1;V===ue&&D<=N?m.value=le(K,0,f.value.length):V===ie&&D>=N&&(m.value=le(K,0,f.value.length-n.value)),L=v}function U(d){if(!h.value)return;const v=T(d);h.value.scrollTop=v}const B=I(()=>Math.min(f.value.length,m.value+n.value)),z=I(()=>f.value.slice(m.value,B.value).map((d,v)=>({raw:d,index:v+m.value}))),A=I(()=>T(m.value)),Y=I(()=>T(f.value.length)-T(B.value));return Q(()=>f.value.length,()=>{w=ye(f.value.length).map(()=>c.value),k.forEach((d,v)=>{const V=f.value.indexOf(v);V===-1?k.delete(v):w[V]=d})}),{containerRef:h,computedItems:z,itemHeight:c,paddingTop:A,paddingBottom:Y,scrollToIndex:U,handleScroll:F,handleItemResize:p}}const Qe=H({items:{type:Array,default:()=>[]},renderless:Boolean,...je(),...se(),...Ve()},"VVirtualScroll"),Ye=G()({name:"VVirtualScroll",props:Qe(),setup(e,f){let{slots:l}=f;const m=Se("VVirtualScroll"),{dimensionStyles:r}=we(e),{containerRef:c,handleScroll:h,handleItemResize:a,scrollToIndex:o,paddingTop:y,paddingBottom:k,computedItems:w}=We(e,be(e,"items"));return ke(()=>e.renderless,()=>{xe(()=>{var n;c.value=ze(m.vnode.el,!0),(n=c.value)==null||n.addEventListener("scroll",h)}),Pe(()=>{var n;(n=c.value)==null||n.removeEventListener("scroll",h)})}),J(()=>{const n=w.value.map(p=>s(qe,{key:p.index,renderless:e.renderless,"onUpdate:height":T=>a(p.index,T)},{default:T=>{var x;return(x=l.default)==null?void 0:x.call(l,{item:p.raw,index:p.index,...T})}}));return e.renderless?s(O,null,[s("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:j(y.value)}},null),n,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:j(k.value)}},null)]):s("div",{ref:c,class:["v-virtual-scroll",e.class],onScroll:h,style:[r.value,e.style]},[s("div",{class:"v-virtual-scroll__container",style:{paddingTop:j(y.value),paddingBottom:j(k.value)}},[n])])}),{scrollToIndex:o}}});function Ge(e,f){const l=W(!1);let m;function r(a){cancelAnimationFrame(m),l.value=!0,m=requestAnimationFrame(()=>{m=requestAnimationFrame(()=>{l.value=!1})})}async function c(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(l.value){const o=Q(l,()=>{o(),a()})}else a()})}async function h(a){var k,w;if(a.key==="Tab"&&((k=f.value)==null||k.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const o=(w=e.value)==null?void 0:w.$el;if(!o)return;(a.key==="Home"||a.key==="End")&&o.scrollTo({top:a.key==="Home"?0:o.scrollHeight,behavior:"smooth"}),await c();const y=o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const n=o.getBoundingClientRect().top;for(const p of y)if(p.getBoundingClientRect().top>=n){p.focus();break}}else{const n=o.getBoundingClientRect().bottom;for(const p of[...y].reverse())if(p.getBoundingClientRect().bottom<=n){p.focus();break}}}return{onListScroll:r,onListKeydown:h}}const Je=H({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Ce,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Me({itemChildren:!1})},"Select"),Xe=H({...Je(),...Ie(pe({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...Te({transition:{component:He}})},"VSelect"),rl=G()({name:"VSelect",props:Xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,f){let{slots:l}=f;const{t:m}=Re(),r=E(),c=E(),h=E(),a=te(e,"menu"),o=I({get:()=>a.value,set:t=>{var u;a.value&&!t&&((u=c.value)!=null&&u.ΨopenChildren)||(a.value=t)}}),{items:y,transformIn:k,transformOut:w}=Ee(e),n=te(e,"modelValue",[],t=>k(t===null?[null]:_e(t)),t=>{const u=w(t);return e.multiple?u:u[0]??null}),p=Le(),T=I(()=>n.value.map(t=>t.value)),x=W(!1),L=I(()=>o.value?e.closeText:e.openText);let F="",U;const B=I(()=>e.hideSelected?y.value.filter(t=>!n.value.some(u=>u===t)):y.value),z=I(()=>e.hideNoData&&!y.value.length||e.readonly||(p==null?void 0:p.isReadonly.value)),A=E(),{onListScroll:Y,onListKeydown:d}=Ge(A,r);function v(t){e.openOnClear&&(o.value=!0)}function V(){z.value||(o.value=!o.value)}function D(t){var i,b;if(!t.key||e.readonly||p!=null&&p.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(o.value=!0),["Escape","Tab"].includes(t.key)&&(o.value=!1),t.key==="Home"?(i=A.value)==null||i.focus("first"):t.key==="End"&&((b=A.value)==null||b.focus("last"));const u=1e3;function S(g){const R=g.key.length===1,P=!g.ctrlKey&&!g.metaKey&&!g.altKey;return R&&P}if(e.multiple||!S(t))return;const $=performance.now();$-U>u&&(F=""),F+=t.key.toLowerCase(),U=$;const q=y.value.find(g=>g.title.toLowerCase().startsWith(F));q!==void 0&&(n.value=[q])}function _(t){if(e.multiple){const u=n.value.findIndex(S=>e.valueComparator(S.value,t.value));if(u===-1)n.value=[...n.value,t];else{const S=[...n.value];S.splice(u,1),n.value=S}}else n.value=[t],o.value=!1}function K(t){var u;(u=A.value)!=null&&u.$el.contains(t.relatedTarget)||(o.value=!1)}function N(){var t;x.value&&((t=r.value)==null||t.focus())}function ce(t){x.value=!0}function de(t){if(t==null)n.value=[];else if(ae(r.value,":autofill")||ae(r.value,":-webkit-autofill")){const u=y.value.find(S=>S.title===t);u&&_(u)}else r.value&&(r.value.value="")}return Q(o,()=>{if(!e.hideSelected&&o.value&&n.value.length){const t=B.value.findIndex(u=>n.value.some(S=>e.valueComparator(S.value,u.value)));De&&window.requestAnimationFrame(()=>{var u;t>=0&&((u=h.value)==null||u.scrollToIndex(t))})}}),J(()=>{const t=!!(e.chips||l.chip),u=!!(!e.hideNoData||B.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),S=n.value.length>0,[$]=ee.filterProps(e),q=S||!x.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(ee,M({ref:r},$,{modelValue:n.value.map(i=>i.props.value).join(", "),"onUpdate:modelValue":de,focused:x.value,"onUpdate:focused":i=>x.value=i,validationValue:n.externalValue,counterValue:n.value.length,dirty:S,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":n.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:q,"onClick:clear":v,"onMousedown:control":V,onBlur:K,onKeydown:D,"aria-label":m(L.value),title:m(L.value)}),{...l,default:()=>s(O,null,[s(Ue,M({ref:c,modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,activator:"parent",contentClass:"v-select__content",disabled:z.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:N},e.menuProps),{default:()=>[u&&s(Oe,{ref:A,selected:T.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:d,onFocusin:ce,onScrollPassive:Y,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var i,b,g;return[(i=l["prepend-item"])==null?void 0:i.call(l),!B.value.length&&!e.hideNoData&&(((b=l["no-data"])==null?void 0:b.call(l))??s(oe,{title:m(e.noDataText)},null)),s(Ye,{ref:h,renderless:!0,items:B.value},{default:R=>{var Z;let{item:P,index:C,itemRef:ve}=R;const X=M(P.props,{ref:ve,key:C,onClick:()=>_(P)});return((Z=l.item)==null?void 0:Z.call(l,{item:P,index:C,props:X}))??s(oe,X,{prepend:fe=>{let{isSelected:me}=fe;return s(O,null,[e.multiple&&!e.hideSelected?s(Ke,{key:P.value,modelValue:me,ripple:!1,tabindex:"-1"},null):void 0,P.props.prependIcon&&s(ne,{icon:P.props.prependIcon},null)])}})}}),(g=l["append-item"])==null?void 0:g.call(l)]}})]}),n.value.map((i,b)=>{var P;function g(C){C.stopPropagation(),C.preventDefault(),_(i)}const R={"onClick:close":g,onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:i.value,class:"v-select__selection"},[t?l.chip?s(Be,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>{var C;return[(C=l.chip)==null?void 0:C.call(l,{item:i,index:b,props:R})]}}):s(Ne,M({key:"chip",closable:e.closableChips,size:"small",text:i.title,disabled:i.props.disabled},R),null):((P=l.selection)==null?void 0:P.call(l,{item:i,index:b}))??s("span",{class:"v-select__selection-text"},[i.title,e.multiple&&b<n.value.length-1&&s("span",{class:"v-select__selection-comma"},[Ae(",")])])])})]),"append-inner":function(){var R;for(var i=arguments.length,b=new Array(i),g=0;g<i;g++)b[g]=arguments[g];return s(O,null,[(R=l["append-inner"])==null?void 0:R.call(l,...b),e.menuIcon?s(ne,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Fe({isFocused:x,menu:o,select:_},r)}});export{rl as V};