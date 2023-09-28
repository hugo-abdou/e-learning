import{bU as Y,b1 as P,N as w,R as M,S as A,L as _,W as G,U as j,aF as F,bk as O,s as y,E as h,I as z,x as m,ak as S,a9 as k,aq as H,bm as D,b3 as U,bq as q,bn as J,b4 as K,br as N,bo as Q,ar as Z,aJ as p,G as X,a5 as ee}from"./main-0fe8d6c4.js";import{u as te}from"./ssrBoot-68b2305a.js";const ne=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function oe(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function se(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),ne(o)}function ie(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ae(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>oe(t,o),touchend:t=>se(t,o),touchmove:t=>ie(t,o)}}function ue(e,o){var v;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},u=(v=o.instance)==null?void 0:v.$.uid;if(!n||!u)return;const s=ae(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,Y(s).forEach(r=>{n.addEventListener(r,s[r],i)})}function ce(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];Y(i).forEach(v=>{t.removeEventListener(v,i[v])}),delete t._touchHandlers[n]}const L={mounted:ue,unmounted:ce},le=L,R=Symbol.for("vuetify:v-window"),$=Symbol.for("vuetify:v-window-group"),re=P({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...w(),...M(),...A()},"v-window"),fe=_()({name:"VWindow",directives:{Touch:L},props:re(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=G(e),{isRtl:i}=j(),{t:u}=F(),s=O(e,$),v=y(),r=h(()=>i.value?!e.reverse:e.reverse),d=y(!1),b=h(()=>{const a=e.direction==="vertical"?"y":"x",f=(r.value?!d.value:d.value)?"-reverse":"";return`v-window-${a}${f}-transition`}),x=y(0),T=y(void 0),g=h(()=>s.items.value.findIndex(a=>s.selected.value.includes(a.id)));z(g,(a,l)=>{const f=s.items.value.length,I=f-1;f<=2?d.value=a<l:a===I&&l===0?d.value=!0:a===0&&l===I?d.value=!1:d.value=a<l}),U(R,{transition:b,isReversed:d,transitionCount:x,transitionHeight:T,rootRef:v});const c=h(()=>e.continuous||g.value!==0),C=h(()=>e.continuous||g.value!==s.items.value.length-1);function E(){c.value&&s.prev()}function B(){C.value&&s.next()}const W=h(()=>{const a=[],l={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,ariaLabel:u("$vuetify.carousel.prev")};a.push(c.value?t.prev?t.prev({props:l}):m(S,l,null):m("div",null,null));const f={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,ariaLabel:u("$vuetify.carousel.next")};return a.push(C.value?t.next?t.next({props:f}):m(S,f,null):m("div",null,null)),a}),V=h(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?E():B()},right:()=>{r.value?B():E()},start:l=>{let{originalEvent:f}=l;f.stopPropagation()}},...e.touch===!0?{}:e.touch});return k(()=>H(m(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var a,l;return[m("div",{class:"v-window__container",style:{height:T.value}},[(a=t.default)==null?void 0:a.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[W.value])]),(l=t.additional)==null?void 0:l.call(t,{group:s})]}}),[[D("touch"),V.value]])),{group:s}}}),he=_()({name:"VWindowItem",directives:{Touch:le},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...w(),...q(),...J()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=K(R),i=N(e,$),{isBooted:u}=te();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=y(!1),v=h(()=>n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function d(){var c;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=X((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function b(){r()}function x(c){s.value&&ee(()=>{!v.value||!s.value||!n||(n.transitionHeight.value=X(c.clientHeight))})}const T=h(()=>{const c=n.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:d,onAfterEnter:r,onEnterCancelled:b,onBeforeLeave:d,onAfterLeave:r,onLeaveCancelled:b,onEnter:x}:!1}),{hasContent:g}=Q(e,i.isSelected);return k(()=>m(p,{transition:T.value,disabled:!u.value},{default:()=>{var c;return[H(m("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[g.value&&((c=t.default)==null?void 0:c.call(t))]),[[Z,i.isSelected.value]])]}})),{}}});export{fe as V,he as a};
