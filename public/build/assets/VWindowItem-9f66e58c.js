import{a2 as _,aP as Q,ex as Z,ap as X,ar as p,a6 as m,a5 as w,r as E,aa as Y,aj as I,b as f,s as R,eu as ee,ev as te,bD as ne,aI as L,ay as oe,eh as ae,ax as se,$ as T,aQ as ie,a8 as H,ey as le,ez as z,a3 as G,aJ as ue,aK as ce,an as re,bg as de,c2 as ve,w as fe,N as he,J as A,at as me,bZ as ge,c3 as be,R as ye,b_ as xe,c4 as Ce,K as Se,bi as Te,b4 as Ve}from"./main-6e33e0f4.js";import{m as Be,V as M}from"./VSlideGroup-52bd9628.js";import{u as ke}from"./VList-1acb65c4.js";const j=Symbol.for("vuetify:v-tabs"),$e=_({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Q(Z({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Pe=X()({name:"VTab",props:$e(),setup(e,n){let{slots:t,attrs:o}=n;const{textColorClasses:s,textColorStyles:l}=p(e,"sliderColor"),a=m(()=>e.direction==="horizontal"),r=w(!1),d=E(),u=E();function V(S){var y,v;let{value:g}=S;if(r.value=g,g){const B=(v=(y=d.value)==null?void 0:y.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),k=u.value;if(!B||!k)return;const P=getComputedStyle(B).color,x=B.getBoundingClientRect(),C=k.getBoundingClientRect(),i=a.value?"x":"y",c=a.value?"X":"Y",h=a.value?"right":"bottom",b=a.value?"width":"height",J=x[i],K=C[i],$=J>K?x[h]-C[h]:x[i]-C[i],U=Math.sign($)>0?a.value?"right":"bottom":Math.sign($)<0?a.value?"left":"top":"center",q=(Math.abs($)+(Math.sign($)<0?x[b]:C[b]))/Math.max(x[b],C[b])||0,N=x[b]/C[b]||0,W=1.5;ee(k,{backgroundColor:[P,"currentcolor"],transform:[`translate${c}(${$}px) scale${c}(${N})`,`translate${c}(${$/W}px) scale${c}(${(q-1)/W+1})`,"none"],transformOrigin:Array(3).fill(U)},{duration:225,easing:te})}}return Y(()=>{const[S]=I.filterProps(e);return f(I,R({symbol:j,ref:d,class:["v-tab",e.class],style:e.style,tabindex:r.value?0:-1,role:"tab","aria-selected":String(r.value),active:!1},S,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":V}),{default:()=>{var g;return[((g=t.default)==null?void 0:g.call(t))??e.text,!e.hideSlider&&f("div",{ref:u,class:["v-tab__slider",s.value],style:l.value},null)]}})}),{}}});function we(e){return e?e.map(n=>le(n)?n:{text:n,value:n}):[]}const Ee=_({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Be({mandatory:"force"}),...ne(),...L()},"VTabs"),Oe=X()({name:"VTabs",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=oe(e,"modelValue"),s=m(()=>we(e.items)),{densityClasses:l}=ae(e),{backgroundColorClasses:a,backgroundColorStyles:r}=se(T(e,"bgColor"));return ie({VTab:{color:T(e,"color"),direction:T(e,"direction"),stacked:T(e,"stacked"),fixed:T(e,"fixedTabs"),sliderColor:T(e,"sliderColor"),hideSlider:T(e,"hideSlider")}}),Y(()=>{const[d]=M.filterProps(e);return f(M,R(d,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,a.value,e.class],style:[{"--v-tabs-height":H(e.height)},r.value,e.style],role:"tablist",symbol:j}),{default:()=>[t.default?t.default():s.value.map(u=>f(Pe,R(u,{key:u.text}),null))]})}),{}}});const Ie=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:s}=e,l=.5,a=16;e.offsetX=t-n,e.offsetY=s-o,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&t<n-a&&e.left(e),e.right&&t>n+a&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&s<o-a&&e.up(e),e.down&&s>o+a&&e.down(e))};function _e(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function Xe(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),Ie(n)}function Ye(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Re(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>_e(t,n),touchend:t=>Xe(t,n),touchmove:t=>Ye(t,n)}}function He(e,n){var r;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,s=(t==null?void 0:t.options)??{passive:!0},l=(r=n.instance)==null?void 0:r.$.uid;if(!o||!l)return;const a=Re(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[l]=a,z(a).forEach(d=>{o.addEventListener(d,a[d],s)})}function We(e,n){var l,a;const t=(l=n.value)!=null&&l.parent?e.parentElement:e,o=(a=n.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const s=t._touchHandlers[o];z(s).forEach(r=>{t.removeEventListener(r,s[r])}),delete t._touchHandlers[o]}const D={mounted:He,unmounted:We},Me=D,O=Symbol.for("vuetify:v-window"),F=Symbol.for("vuetify:v-window-group"),Le=_({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...G(),...L(),...ue()},"VWindow"),Fe=X()({name:"VWindow",directives:{Touch:D},props:Le(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=ce(e),{isRtl:s}=re(),{t:l}=de(),a=ve(e,F),r=E(),d=m(()=>s.value?!e.reverse:e.reverse),u=w(!1),V=m(()=>{const i=e.direction==="vertical"?"y":"x",h=(d.value?!u.value:u.value)?"-reverse":"";return`v-window-${i}${h}-transition`}),S=w(0),g=E(void 0),y=m(()=>a.items.value.findIndex(i=>a.selected.value.includes(i.id)));fe(y,(i,c)=>{const h=a.items.value.length,b=h-1;h<=2?u.value=i<c:i===b&&c===0?u.value=!0:i===0&&c===b?u.value=!1:u.value=i<c}),he(O,{transition:V,isReversed:u,transitionCount:S,transitionHeight:g,rootRef:r});const v=m(()=>e.continuous||y.value!==0),B=m(()=>e.continuous||y.value!==a.items.value.length-1);function k(){v.value&&a.prev()}function P(){B.value&&a.next()}const x=m(()=>{const i=[],c={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:a.prev,ariaLabel:l("$vuetify.carousel.prev")};i.push(v.value?t.prev?t.prev({props:c}):f(I,c,null):f("div",null,null));const h={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:a.next,ariaLabel:l("$vuetify.carousel.next")};return i.push(B.value?t.next?t.next({props:h}):f(I,h,null):f("div",null,null)),i}),C=m(()=>e.touch===!1?e.touch:{...{left:()=>{d.value?k():P()},right:()=>{d.value?P():k()},start:c=>{let{originalEvent:h}=c;h.stopPropagation()}},...e.touch===!0?{}:e.touch});return Y(()=>A(f(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var i,c;return[f("div",{class:"v-window__container",style:{height:g.value}},[(i=t.default)==null?void 0:i.call(t,{group:a}),e.showArrows!==!1&&f("div",{class:"v-window__controls"},[x.value])]),(c=t.additional)==null?void 0:c.call(t,{group:a})]}}),[[me("touch"),C.value]])),{group:a}}}),ze=_({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...G(),...ge(),...be()},"VWindowItem"),Je=X()({name:"VWindowItem",directives:{Touch:Me},props:ze(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=ye(O),s=xe(e,F),{isBooted:l}=ke();if(!o||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=w(!1),r=m(()=>l.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function d(){!a.value||!o||(a.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function u(){var v;a.value||!o||(a.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=H((v=o.rootRef.value)==null?void 0:v.clientHeight)),o.transitionCount.value+=1)}function V(){d()}function S(v){a.value&&Ve(()=>{!r.value||!a.value||!o||(o.transitionHeight.value=H(v.clientHeight))})}const g=m(()=>{const v=o.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof v!="string"?o.transition.value:v,onBeforeEnter:u,onAfterEnter:d,onEnterCancelled:V,onBeforeLeave:u,onAfterLeave:d,onLeaveCancelled:V,onEnter:S}:!1}),{hasContent:y}=Ce(e,s.isSelected);return Y(()=>f(Te,{transition:g.value,disabled:!l.value},{default:()=>{var v;return[A(f("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[y.value&&((v=t.default)==null?void 0:v.call(t))]),[[Se,s.isSelected.value]])]}})),{groupItem:s}}});export{Oe as V,Fe as a,Je as b,Pe as c};
