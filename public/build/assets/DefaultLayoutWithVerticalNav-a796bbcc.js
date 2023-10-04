import{_ as Ie}from"./AppSelect.vue_vue_type_script_setup_true_lang-e0cde11a.js";import{V as we}from"./VDivider-4c3fc300.js";import{d as ee,o as C,g as P,f as U,D as J,v as p,C as _e,w as Ne,F as $,s as L,E as S,G as F,H as Ve,I as G,J as ke,K as $e,L as te,M as Pe,N as Oe,O as Ue,P as Le,Q as He,R as De,S as We,U as Ye,W as je,X as Ae,Y as ce,Z as de,$ as Xe,a0 as Fe,a1 as Ge,a2 as Ze,a3 as Ce,a4 as qe,a5 as Je,a6 as Ke,a7 as Qe,a8 as et,a9 as ae,x as l,m as K,T as Te,aa as tt,ab as ve,ac as at,ad as lt,b as Se,ae as nt,u as xe,A,af as me,r as Q,e as s,z as v,ag as q,ah as ot,ai as st,aj as R,i as H,ak as it,al as ut,y as fe,am as rt,an as ct,ao as dt,ap as vt,aq as mt,ar as X,as as ft,at as he,au as ht,B as ge,av as gt,aw as pt,j as yt,ax as bt}from"./main-8c6cae95.js";import{m as wt,V as pe,a as j}from"./VInput-74f983d3.js";import{m as _t,V as ze,a as Vt,b as kt}from"./VCheckboxBtn-cc4c4e9f.js";import{V as Z}from"./VSwitch-0b6666fc.js";import{u as Ct}from"./VList-04d013c6.js";import Tt from"./Footer-46ab1604.js";import{_ as St}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-f5e86f02.js";import{_ as xt}from"./UserProfile.vue_vue_type_script_setup_true_lang-5b478bcb.js";import{_ as zt}from"./NavBarI18n.vue_vue_type_script_setup_true_lang-fb642acb.js";import{V as Bt}from"./VSpacer-51ef4cc1.js";import"./VTextField-41755040.js";import"./VMenu-ca74f75b.js";import"./VChip-bf88e46a.js";import"./VTooltip-53bc1b24.js";import"./VListItemAction-e77da98f.js";const Mt={class:"customizer-section"},Et={class:"text-caption"},Rt=ee({__name:"CustomizerSection",props:{title:null,divider:{type:Boolean,default:!0}},setup(e){const c=e;return(d,r)=>(C(),P($,null,[c.divider?(C(),U(we,{key:0})):J("",!0),p("div",Mt,[p("p",Et,_e(c.title),1),Ne(d.$slots,"default")])],64))}});function It(e){let{rootEl:c,isSticky:d,layoutItemStyles:r}=e;const o=L(!1),n=L(0),f=S(()=>{const y=typeof o.value=="boolean"?"top":o.value;return[d.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[y]:F(n.value)}:{top:r.value.top}]});Ve(()=>{G(d,y=>{y?window.addEventListener("scroll",T,{passive:!0}):window.removeEventListener("scroll",T)},{immediate:!0})}),ke(()=>{document.removeEventListener("scroll",T)});let V=0;function T(){const y=V>window.scrollY?"up":"down",u=c.value.getBoundingClientRect(),h=parseFloat(r.value.top??0),b=window.scrollY-Math.max(0,n.value-h),w=u.height+Math.max(n.value,h)-window.scrollY-window.innerHeight;u.height<window.innerHeight-h?(o.value="top",n.value=h):y==="up"&&o.value==="bottom"||y==="down"&&o.value==="top"?(n.value=window.scrollY+u.top,o.value=!0):y==="down"&&w<=0?(n.value=0,o.value="bottom"):y==="up"&&b<=0&&(n.value=u.top+b,o.value="top"),V=window.scrollY}return{isStuck:o,stickyStyles:f}}const Nt=100,$t=20;function ye(e){const c=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*c}function be(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let c=0;for(let d=e.length-1;d>0;d--){if(e[d].t===e[d-1].t)continue;const r=ye(c),o=(e[d].d-e[d-1].d)/(e[d].t-e[d-1].t);c+=(o-r)*Math.abs(o),d===e.length-1&&(c*=.5)}return ye(c)*1e3}function Pt(){const e={};function c(o){Array.from(o.changedTouches).forEach(n=>{(e[n.identifier]??(e[n.identifier]=new $e($t))).push([o.timeStamp,n])})}function d(o){Array.from(o.changedTouches).forEach(n=>{delete e[n.identifier]})}function r(o){var y;const n=(y=e[o])==null?void 0:y.values().reverse();if(!n)throw new Error(`No samples for touch id ${o}`);const f=n[0],V=[],T=[];for(const u of n){if(f[0]-u[0]>Nt)break;V.push({t:u[0],d:u[1].clientX}),T.push({t:u[0],d:u[1].clientY})}return{x:be(V),y:be(T),get direction(){const{x:u,y:h}=this,[b,w]=[Math.abs(u),Math.abs(h)];return b>w&&u>=0?"right":b>w&&u<=0?"left":w>b&&h>=0?"down":w>b&&h<=0?"up":Ot()}}}return{addMovement:c,endTouch:d,getVelocity:r}}function Ot(){throw new Error}function Ut(e){let{isActive:c,isTemporary:d,width:r,touchless:o,position:n}=e;Ve(()=>{window.addEventListener("touchstart",B,{passive:!0}),window.addEventListener("touchmove",z,{passive:!1}),window.addEventListener("touchend",I,{passive:!0})}),ke(()=>{window.removeEventListener("touchstart",B),window.removeEventListener("touchmove",z),window.removeEventListener("touchend",I)});const f=S(()=>["left","right"].includes(n.value)),{addMovement:V,endTouch:T,getVelocity:y}=Pt();let u=!1;const h=L(!1),b=L(0),w=L(0);let g;function x(i,a){return(n.value==="left"?i:n.value==="right"?document.documentElement.clientWidth-i:n.value==="top"?i:n.value==="bottom"?document.documentElement.clientHeight-i:D())-(a?r.value:0)}function O(i){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const m=n.value==="left"?(i-w.value)/r.value:n.value==="right"?(document.documentElement.clientWidth-i-w.value)/r.value:n.value==="top"?(i-w.value)/r.value:n.value==="bottom"?(document.documentElement.clientHeight-i-w.value)/r.value:D();return a?Math.max(0,Math.min(1,m)):m}function B(i){if(o.value)return;const a=i.changedTouches[0].clientX,m=i.changedTouches[0].clientY,k=25,N=n.value==="left"?a<k:n.value==="right"?a>document.documentElement.clientWidth-k:n.value==="top"?m<k:n.value==="bottom"?m>document.documentElement.clientHeight-k:D(),t=c.value&&(n.value==="left"?a<r.value:n.value==="right"?a>document.documentElement.clientWidth-r.value:n.value==="top"?m<r.value:n.value==="bottom"?m>document.documentElement.clientHeight-r.value:D());(N||t||c.value&&d.value)&&(u=!0,g=[a,m],w.value=x(f.value?a:m,c.value),b.value=O(f.value?a:m),T(i),V(i))}function z(i){const a=i.changedTouches[0].clientX,m=i.changedTouches[0].clientY;if(u){if(!i.cancelable){u=!1;return}const N=Math.abs(a-g[0]),t=Math.abs(m-g[1]);(f.value?N>t&&N>3:t>N&&t>3)?(h.value=!0,u=!1):(f.value?t:N)>3&&(u=!1)}if(!h.value)return;i.preventDefault(),V(i);const k=O(f.value?a:m,!1);b.value=Math.max(0,Math.min(1,k)),k>1?w.value=x(f.value?a:m,!0):k<0&&(w.value=x(f.value?a:m,!1))}function I(i){if(u=!1,!h.value)return;V(i),h.value=!1;const a=y(i.changedTouches[0].identifier),m=Math.abs(a.x),k=Math.abs(a.y);(f.value?m>k&&m>400:k>m&&k>3)?c.value=a.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||D()):c.value=b.value>.5}const M=S(()=>h.value?{transform:n.value==="left"?`translateX(calc(-100% + ${b.value*r.value}px))`:n.value==="right"?`translateX(calc(100% - ${b.value*r.value}px))`:n.value==="top"?`translateY(calc(-100% + ${b.value*r.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${b.value*r.value}px))`:D(),transition:"none"}:void 0);return{isDragging:h,dragProgress:b,dragStyles:M}}function D(){throw new Error}const Lt=["start","end","left","right","top","bottom"],Ht=te()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Lt.includes(e)},sticky:Boolean,...Pe(),...Oe(),...Ue(),...Le(),...He(),...De({tag:"nav"}),...We()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,c){let{attrs:d,emit:r,slots:o}=c;const{isRtl:n}=Ye(),{themeClasses:f}=je(e),{borderClasses:V}=Ae(e),{backgroundColorClasses:T,backgroundColorStyles:y}=ce(de(e,"color")),{elevationClasses:u}=Xe(e),{mobile:h}=Fe(),{roundedClasses:b}=Ge(e),w=Ze(),g=Ce(e,"modelValue",null,E=>!!E),{ssrBootStyles:x}=Ct(),O=L(),B=L(!1),z=S(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),I=S(()=>qe(e.location,n.value)),M=S(()=>!e.permanent&&(h.value||e.temporary)),i=S(()=>e.sticky&&!M.value&&I.value!=="bottom");e.expandOnHover&&e.rail!=null&&G(B,E=>r("update:rail",!E)),e.disableResizeWatcher||G(M,E=>!e.permanent&&Je(()=>g.value=!E)),!e.disableRouteWatcher&&w&&G(w.currentRoute,()=>M.value&&(g.value=!1)),G(()=>e.permanent,E=>{E&&(g.value=!0)}),Ke(()=>{e.modelValue!=null||M.value||(g.value=e.permanent||!h.value)});const{isDragging:a,dragProgress:m,dragStyles:k}=Ut({isActive:g,isTemporary:M,width:z,touchless:de(e,"touchless"),position:I}),N=S(()=>{const E=M.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):z.value;return a.value?E*m.value:E}),{layoutItemStyles:t,layoutRect:_,layoutItemScrimStyles:le}=Qe({id:e.name,order:S(()=>parseInt(e.order,10)),position:I,layoutSize:N,elementSize:z,active:S(()=>g.value||a.value),disableTransitions:S(()=>a.value),absolute:S(()=>e.absolute||i.value&&typeof ne.value!="string")}),{isStuck:ne,stickyStyles:Be}=It({rootEl:O,isSticky:i,layoutItemStyles:t}),oe=ce(S(()=>typeof e.scrim=="string"?e.scrim:null)),Me=S(()=>({...a.value?{opacity:m.value*.2,transition:"none"}:void 0,..._.value?{left:F(_.value.left),right:F(_.value.right),top:F(_.value.top),bottom:F(_.value.bottom)}:void 0,...le.value}));et({VList:{bgColor:"transparent"}});function Ee(){B.value=!0}function Re(){B.value=!1}return ae(()=>{const E=o.image||e.image;return l($,null,[l(e.tag,K({ref:O,onMouseenter:Ee,onMouseleave:Re,class:["v-navigation-drawer",`v-navigation-drawer--${I.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":M.value,"v-navigation-drawer--active":g.value,"v-navigation-drawer--sticky":i.value},f.value,T.value,V.value,u.value,b.value,e.class],style:[y.value,t.value,k.value,x.value,Be.value,e.style]},d),{default:()=>{var se,ie,ue,re;return[E&&l("div",{key:"image",class:"v-navigation-drawer__img"},[o.image?(se=o.image)==null?void 0:se.call(o,{image:e.image}):l("img",{src:e.image,alt:""},null)]),o.prepend&&l("div",{class:"v-navigation-drawer__prepend"},[(ie=o.prepend)==null?void 0:ie.call(o)]),l("div",{class:"v-navigation-drawer__content"},[(ue=o.default)==null?void 0:ue.call(o)]),o.append&&l("div",{class:"v-navigation-drawer__append"},[(re=o.append)==null?void 0:re.call(o)])]}}),l(Te,{name:"fade-transition"},{default:()=>[M.value&&(a.value||g.value)&&!!e.scrim&&l("div",{class:["v-navigation-drawer__scrim",oe.backgroundColorClasses.value],style:[Me.value,oe.backgroundColorStyles.value],onClick:()=>g.value=!1},null)]})])}),{isStuck:ne}}}),W=te()({name:"VRadio",props:{..._t({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,c){let{slots:d}=c;return ae(()=>l(ze,K(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),d)),{}}});const Y=te()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...wt(),...tt(Vt(),["multiple"]),trueIcon:{type:ve,default:"$radioOn"},falseIcon:{type:ve,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:d,slots:r}=c;const o=at(),n=S(()=>e.id||`radio-group-${o}`),f=Ce(e,"modelValue");return ae(()=>{const[V,T]=lt(d),[y,u]=pe.filterProps(e),[h,b]=ze.filterProps(e),w=r.label?r.label({label:e.label,props:{for:n.value}}):e.label;return l(pe,K({class:["v-radio-group",e.class],style:e.style},V,y,{modelValue:f.value,"onUpdate:modelValue":g=>f.value=g,id:n.value}),{...r,default:g=>{let{id:x,messagesId:O,isDisabled:B,isReadonly:z}=g;return l($,null,[w&&l(j,{id:x.value},{default:()=>[w]}),l(kt,K(h,{id:x.value,"aria-describedby":O.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:B.value,readonly:z.value,"aria-labelledby":w?x.value:void 0,multiple:!1},T,{modelValue:f.value,"onUpdate:modelValue":I=>f.value=I}),r)])}})}),{}}}),Dt={class:"customizer-heading d-flex align-center justify-space-between"},Wt=p("div",null,[p("h6",{class:"text-h6"}," THEME CUSTOMIZER "),p("span",{class:"text-body-1"},"Customize & Preview in Real Time")],-1),Yt=p("h6",{class:"text-base font-weight-regular"}," Skins ",-1),jt=p("h6",{class:"mt-3 text-base font-weight-regular"}," Theme ",-1),At=p("h6",{class:"mt-3 text-base font-weight-regular"}," Primary Color ",-1),Xt={class:"d-flex gap-x-4 mt-2"},Ft=["onClick"],Gt=p("h6",{class:"text-base font-weight-regular"}," Content width ",-1),Zt={class:"mt-3 text-base font-weight-regular"},qt=p("h6",{class:"mt-3 text-base font-weight-regular"}," Footer Type ",-1),Jt={class:"mt-4 d-flex align-center justify-space-between"},Kt=p("h6",{class:"text-base font-weight-regular"}," Menu Type ",-1),Qt={key:0,class:"mt-4 d-flex align-center justify-space-between"},ea={class:"d-flex align-center justify-space-between"},ta={class:"mt-6"},aa=ee({__name:"TheCustomizer",setup(e){const c=L(!1),{theme:d,skin:r,appRouteTransition:o,navbarType:n,footerType:f,isVerticalNavCollapsed:V,isVerticalNavSemiDark:T,appContentWidth:y,appContentLayoutNav:u,isAppRtl:h,isNavbarBlurEnabled:b,isLessThanOverlayNavBreakpoint:w}=Se(),g=nt(),x=JSON.parse(JSON.stringify(g.current.value.colors)),O=["primary","secondary","success","info","warning","error"],B=i=>{const a=g.name.value;g.themes.value[a].colors.primary=i,localStorage.setItem(`${ge.app.title}-${a}ThemePrimaryColor`,i),localStorage.setItem(`${ge.app.title}-initial-loader-color`,i)},z=(i,a)=>a?i:gt,{width:I}=xe(),M=S(()=>{const i=Object.entries(me);return u.value===A.Horizontal?i.filter(([a,m])=>m!==me.Hidden):i});return(i,a)=>{const m=Q("IconBtn"),k=Rt,N=Ie;return s(w)(s(I))?J("",!0):(C(),P($,{key:0},[l(ot,{icon:"",size:"small",class:"app-customizer-toggler rounded-s-lg rounded-0",style:{"z-index":"1001"},onClick:a[0]||(a[0]=t=>c.value=!0)},{default:v(()=>[l(q,{size:"22",icon:"tabler-settings"})]),_:1}),l(Ht,{modelValue:s(c),"onUpdate:modelValue":a[13]||(a[13]=t=>R(c)?c.value=t:null),temporary:"",border:"0",location:"end",width:"400",scrim:!1,class:"app-customizer"},{default:v(()=>[p("div",Dt,[Wt,l(m,{onClick:a[1]||(a[1]=t=>c.value=!1)},{default:v(()=>[l(q,{icon:"tabler-x",size:"20"})]),_:1})]),l(we),l(s(st),{tag:"ul",options:{wheelPropagation:!1}},{default:v(()=>[l(k,{title:"THEMING",divider:!1},{default:v(()=>[Yt,l(Y,{modelValue:s(r),"onUpdate:modelValue":a[2]||(a[2]=t=>R(r)?r.value=t:null),inline:""},{default:v(()=>[(C(!0),P($,null,H(Object.entries(s(it)),([t,_])=>(C(),U(W,{key:t,label:t,value:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),jt,l(Y,{modelValue:s(d),"onUpdate:modelValue":a[3]||(a[3]=t=>R(d)?d.value=t:null),inline:""},{default:v(()=>[(C(),P($,null,H(["system","light","dark"],t=>l(W,{key:t,label:t,value:t,class:"text-capitalize"},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),At,p("div",Xt,[(C(),P($,null,H(O,(t,_)=>p("div",{key:t,style:ut([{"border-radius":"0.5rem","block-size":"2.5rem","inline-size":"2.5rem",transition:"all 0.25s ease"},{backgroundColor:z(s(x)[t],_)}]),class:fe(["cursor-pointer d-flex align-center justify-center",{"elevation-4":s(g).current.value.colors.primary===z(s(x)[t],_)}]),onClick:le=>B(z(s(x)[t],_))},[l(rt,null,{default:v(()=>[ct(l(q,{icon:"tabler-check",color:"white"},null,512),[[dt,s(g).current.value.colors.primary===z(s(x)[t],_)]])]),_:2},1024)],14,Ft)),64))])]),_:1}),l(k,{title:"LAYOUT"},{default:v(()=>[Gt,l(Y,{modelValue:s(y),"onUpdate:modelValue":a[4]||(a[4]=t=>R(y)?y.value=t:null),inline:""},{default:v(()=>[(C(!0),P($,null,H(Object.entries(s(vt)),([t,_])=>(C(),U(W,{key:t,label:t,value:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),p("h6",Zt,_e(s(u)===s(A).Vertical?"Navbar":"Header")+" Type ",1),l(Y,{modelValue:s(n),"onUpdate:modelValue":a[5]||(a[5]=t=>R(n)?n.value=t:null),inline:""},{default:v(()=>[(C(!0),P($,null,H(s(M),([t,_])=>(C(),U(W,{key:t,label:t,value:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),qt,l(Y,{modelValue:s(f),"onUpdate:modelValue":a[6]||(a[6]=t=>R(f)?f.value=t:null),inline:""},{default:v(()=>[(C(!0),P($,null,H(Object.entries(s(mt)),([t,_])=>(C(),U(W,{key:t,label:t,value:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),p("div",Jt,[l(j,{for:"customizer-navbar-blur",class:"text-high-emphasis"},{default:v(()=>[X(" Navbar Blur ")]),_:1}),p("div",null,[l(Z,{id:"customizer-navbar-blur",modelValue:s(b),"onUpdate:modelValue":a[7]||(a[7]=t=>R(b)?b.value=t:null),class:"ms-2"},null,8,["modelValue"])])])]),_:1}),l(k,{title:"MENU"},{default:v(()=>[Kt,l(Y,{modelValue:s(u),"onUpdate:modelValue":a[8]||(a[8]=t=>R(u)?u.value=t:null),inline:""},{default:v(()=>[(C(!0),P($,null,H(Object.entries(s(A)),([t,_])=>(C(),U(W,{key:t,label:t,value:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),s(u)===s(A).Vertical?(C(),P("div",Qt,[l(j,{for:"customizer-menu-collapsed",class:"text-high-emphasis"},{default:v(()=>[X(" Collapsed Menu ")]),_:1}),p("div",null,[l(Z,{id:"customizer-menu-collapsed",modelValue:s(V),"onUpdate:modelValue":a[9]||(a[9]=t=>R(V)?V.value=t:null),class:"ms-2"},null,8,["modelValue"])])])):J("",!0),p("div",{class:fe(["mt-4 align-center justify-space-between",s(g).global.name.value==="light"&&s(u)===s(A).Vertical?"d-flex":"d-none"])},[l(j,{for:"customizer-menu-semi-dark",class:"text-high-emphasis"},{default:v(()=>[X(" Semi Dark Menu ")]),_:1}),p("div",null,[l(Z,{id:"customizer-menu-semi-dark",modelValue:s(T),"onUpdate:modelValue":a[10]||(a[10]=t=>R(T)?T.value=t:null),class:"ms-2"},null,8,["modelValue"])])],2)]),_:1}),l(k,{title:"MISC"},{default:v(()=>[p("div",ea,[l(j,{for:"customizer-rtl",class:"text-high-emphasis"},{default:v(()=>[X(" RTL ")]),_:1}),p("div",null,[l(Z,{id:"customizer-rtl",modelValue:s(h),"onUpdate:modelValue":a[11]||(a[11]=t=>R(h)?h.value=t:null),class:"ms-2"},null,8,["modelValue"])])]),p("div",ta,[l(ft,null,{default:v(()=>[l(he,{cols:"5",class:"d-flex align-center"},{default:v(()=>[l(j,{for:"route-transition",class:"text-high-emphasis"},{default:v(()=>[X(" Router Transition ")]),_:1})]),_:1}),l(he,{cols:"7"},{default:v(()=>[l(N,{id:"route-transition",modelValue:s(o),"onUpdate:modelValue":a[12]||(a[12]=t=>R(o)?o.value=t:null),items:Object.entries(s(ht)).map(([t,_])=>({key:t,value:_})),"item-title":"key","item-value":"value","single-line":""},null,8,["modelValue","items"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}});const la=[{title:"Dashboard",to:{name:"index"},icon:{icon:"tabler-layout-dashboard"}},{title:"Users",to:{name:"users"},icon:{icon:"tabler-users"}},{title:"Courses",icon:{icon:"fluent:flash-play-20-regular"},to:{name:"course"}},{title:"Browse",to:{name:"browse"},icon:{icon:"fluent:flash-play-20-regular"}}];function na(){return pt(),la}const oa={class:"d-flex h-100 align-center"},ka=ee({__name:"DefaultLayoutWithVerticalNav",setup(e){const{appRouteTransition:c,isLessThanOverlayNavBreakpoint:d}=Se(),{width:r}=xe(),o=na();return(n,f)=>{const V=Q("IconBtn"),T=Q("RouterView"),y=aa;return C(),U(s(bt),{"nav-items":s(o)},{navbar:v(({toggleVerticalOverlayNavActive:u})=>[p("div",oa,[s(d)(s(r))?(C(),U(V,{key:0,id:"vertical-nav-toggle-btn",class:"ms-n3",onClick:h=>u(!0)},{default:v(()=>[l(q,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"])):J("",!0),l(St),l(Bt),l(zt,{class:"me-1"}),l(xt)])]),footer:v(()=>[l(Tt)]),default:v(()=>[l(T,null,{default:v(({Component:u})=>[l(Te,{name:s(c),mode:"out-in"},{default:v(()=>[(C(),U(yt(u)))]),_:2},1032,["name"])]),_:1}),l(y)]),_:1},8,["nav-items"])}}});export{ka as default};
