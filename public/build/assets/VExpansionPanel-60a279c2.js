import{p as x,ax as m,cw as _,b1 as g,d as B,g as f,cx as R,h as D,aA as d,b4 as E,aw as y,l as P,n as l,aq as S,J as k,K as G,bv as b,aQ as L,aV as C,aT as $,C as j,aM as z,cz as q,b as F,cB as J,aS as K,j as M,am as N}from"./plugins-1ca62e54.js";import{a as O}from"./index-290985fb.js";import{b as I,u as Q}from"./VOverlay-ce640807.js";const r=Symbol.for("vuetify:v-expansion-panel"),H=["default","accordion","inset","popout"],U=x({color:String,variant:{type:String,default:"default",validator:e=>H.includes(e)},readonly:Boolean,...m(),..._(),...g(),...B()},"VExpansionPanels"),le=f()({name:"VExpansionPanels",props:U(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;R(e,r);const{themeClasses:a}=D(e),i=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return E({VExpansionPanel:{color:y(e,"color")},VExpansionPanelTitle:{readonly:y(e,"readonly")}}),P(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value,e.class],style:e.style},n)),{}}}),W=x({...m(),...I()},"VExpansionPanelText"),X=f()({name:"VExpansionPanelText",props:W(),setup(e,o){let{slots:n}=o;const a=S(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=Q(e,a.isSelected);return P(()=>l(O,{onAfterLeave:u},{default:()=>{var c;return[k(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(c=n.default)==null?void 0:c.call(n)])]),[[G,a.isSelected.value]])]}})),{}}}),h=x({color:String,expandIcon:{type:b,default:"$expand"},collapseIcon:{type:b,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...m()},"VExpansionPanelTitle"),Y=f()({name:"VExpansionPanelTitle",directives:{Ripple:L},props:h(),setup(e,o){let{slots:n}=o;const a=S(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=C(e,"color"),c=d(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return P(()=>{var v;return k(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value,e.class],style:[u.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,c.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(c.value):l(j,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[$("ripple"),e.ripple]])}),{}}}),Z=x({title:String,text:String,bgColor:String,...m(),...z(),...q(),...I(),...F(),...g(),...h()},"VExpansionPanel"),te=f()({name:"VExpansionPanel",props:Z(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=J(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=C(e,"bgColor"),{elevationClasses:c}=K(e),{roundedClasses:v}=M(e),T=d(()=>(a==null?void 0:a.disabled.value)||e.disabled),V=d(()=>a.group.items.value.reduce((s,t,p)=>(a.group.selected.value.includes(t.id)&&s.push(p),s),[])),w=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&V.value.some(t=>t-s===1)}),A=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&V.value.some(t=>t-s===-1)});return N(r,a),E({VExpansionPanelText:{eager:y(e,"eager")}}),P(()=>{const s=!!(n.text||e.text),t=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":w.value,"v-expansion-panel--after-active":A.value,"v-expansion-panel--disabled":T.value},v.value,i.value,e.class],style:[u.value,e.style]},{default:()=>{var p;return[l("div",{class:["v-expansion-panel__shadow",...c.value]},null),t&&l(Y,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),s&&l(X,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(p=n.default)==null?void 0:p.call(n)]}})}),{}}});export{le as V,te as a,Y as b,X as c};