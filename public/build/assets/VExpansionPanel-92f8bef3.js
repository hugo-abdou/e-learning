import{a2 as x,a3 as P,c1 as A,aI as E,aJ as B,ap as f,c2 as R,aK as $,a6 as d,aQ as g,$ as y,aa as m,b as l,c3 as S,R as k,c4 as D,J as I,K as G,c5 as L,be as b,aq as j,ax as C,at as z,a0 as J,al as K,bZ as N,ak as q,b_ as F,as as O,aw as Q,N as Z}from"./main-6e33e0f4.js";const r=Symbol.for("vuetify:v-expansion-panel"),H=["default","accordion","inset","popout"],M=x({color:String,variant:{type:String,default:"default",validator:e=>H.includes(e)},readonly:Boolean,...P(),...A(),...E(),...B()},"VExpansionPanels"),ae=f()({name:"VExpansionPanels",props:M(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;R(e,r);const{themeClasses:a}=$(e),i=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return g({VExpansionPanel:{color:y(e,"color")},VExpansionPanelTitle:{readonly:y(e,"readonly")}}),m(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value,e.class],style:e.style},n)),{}}}),U=x({...P(),...S()},"VExpansionPanelText"),W=f()({name:"VExpansionPanelText",props:U(),setup(e,o){let{slots:n}=o;const a=k(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=D(e,a.isSelected);return m(()=>l(L,{onAfterLeave:u},{default:()=>{var c;return[I(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(c=n.default)==null?void 0:c.call(n)])]),[[G,a.isSelected.value]])]}})),{}}}),h=x({color:String,expandIcon:{type:b,default:"$expand"},collapseIcon:{type:b,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...P()},"VExpansionPanelTitle"),X=f()({name:"VExpansionPanelTitle",directives:{Ripple:j},props:h(),setup(e,o){let{slots:n}=o;const a=k(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=C(e,"color"),c=d(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return m(()=>{var v;return I(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value,e.class],style:[u.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,c.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(c.value):l(J,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[z("ripple"),e.ripple]])}),{}}}),Y=x({title:String,text:String,bgColor:String,...P(),...K(),...N(),...S(),...q(),...E(),...h()},"VExpansionPanel"),ne=f()({name:"VExpansionPanel",props:Y(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=F(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=C(e,"bgColor"),{elevationClasses:c}=O(e),{roundedClasses:v}=Q(e),T=d(()=>(a==null?void 0:a.disabled.value)||e.disabled),V=d(()=>a.group.items.value.reduce((t,s,p)=>(a.group.selected.value.includes(s.id)&&t.push(p),t),[])),w=d(()=>{const t=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&V.value.some(s=>s-t===1)}),_=d(()=>{const t=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&V.value.some(s=>s-t===-1)});return Z(r,a),g({VExpansionPanelText:{eager:y(e,"eager")}}),m(()=>{const t=!!(n.text||e.text),s=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":w.value,"v-expansion-panel--after-active":_.value,"v-expansion-panel--disabled":T.value},v.value,i.value,e.class],style:[u.value,e.style]},{default:()=>{var p;return[l("div",{class:["v-expansion-panel__shadow",...c.value]},null),s&&l(X,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&l(W,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(p=n.default)==null?void 0:p.call(n)]}})}),{}}});export{ae as V,ne as a,X as b,W as c};