import{a8 as C,a9 as w,ab as Q,I as q,w as R,bo as Z,cb as ee,a5 as te,aH as ae,a6 as ne,ao as oe,bq as le,an as ue,aL as ie,aM as re,as as se,aq as ce,aN as ve,aO as de,aA as X,a3 as $,av as me,bv as fe,az as ge,cc as he,aB as we,cd as ye,r as be,ce as Se,br as Y,c4 as Te,bs as ke,aT as Me,ad as Ee,b as k,v as z,T as xe,F as pe,b8 as Be}from"./main-83f81ad7.js";import{u as Ce}from"./ssrBoot-7be77cee.js";function Ve(e){let{rootEl:r,isSticky:v,layoutItemStyles:i}=e;const a=C(!1),t=C(0),f=w(()=>{const g=typeof a.value=="boolean"?"top":a.value;return[v.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[g]:Q(t.value)}:{top:i.value.top}]});q(()=>{R(v,g=>{g?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),Z(()=>{window.removeEventListener("scroll",S)});let b=0;function S(){const g=b>window.scrollY?"up":"down",u=r.value.getBoundingClientRect(),s=parseFloat(i.value.top??0),c=window.scrollY-Math.max(0,t.value-s),d=u.height+Math.max(t.value,s)-window.scrollY-window.innerHeight,m=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-s?(a.value="top",t.value=s):g==="up"&&a.value==="bottom"||g==="down"&&a.value==="top"?(t.value=window.scrollY+u.top-m,a.value=!0):g==="down"&&d<=0?(t.value=0,a.value="bottom"):g==="up"&&c<=0&&(m?a.value!=="top"&&(t.value=-c+m+s,a.value="top"):(t.value=u.top+c,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:f}}const He=100,Pe=20;function A(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function F(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let v=e.length-1;v>0;v--){if(e[v].t===e[v-1].t)continue;const i=A(r),a=(e[v].d-e[v-1].d)/(e[v].t-e[v-1].t);r+=(a-i)*Math.abs(a),v===e.length-1&&(r*=.5)}return A(r)*1e3}function Re(){const e={};function r(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new ee(Pe))).push([a.timeStamp,t])})}function v(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function i(a){var g;const t=(g=e[a])==null?void 0:g.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const f=t[0],b=[],S=[];for(const u of t){if(f[0]-u[0]>He)break;b.push({t:u[0],d:u[1].clientX}),S.push({t:u[0],d:u[1].clientY})}return{x:F(b),y:F(S),get direction(){const{x:u,y:s}=this,[c,d]=[Math.abs(u),Math.abs(s)];return c>d&&u>=0?"right":c>d&&u<=0?"left":d>c&&s>=0?"down":d>c&&s<=0?"up":Ne()}}}return{addMovement:r,endTouch:v,getVelocity:i}}function Ne(){throw new Error}function Ye(e){let{isActive:r,isTemporary:v,width:i,touchless:a,position:t}=e;q(()=>{window.addEventListener("touchstart",P,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),Z(()=>{window.removeEventListener("touchstart",P),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",x)});const f=w(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:S,getVelocity:g}=Re();let u=!1;const s=C(!1),c=C(0),d=C(0);let m;function V(n,l){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="top"?n:t.value==="bottom"?document.documentElement.clientHeight-n:B())-(l?i.value:0)}function H(n){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const o=t.value==="left"?(n-d.value)/i.value:t.value==="right"?(document.documentElement.clientWidth-n-d.value)/i.value:t.value==="top"?(n-d.value)/i.value:t.value==="bottom"?(document.documentElement.clientHeight-n-d.value)/i.value:B();return l?Math.max(0,Math.min(1,o)):o}function P(n){if(a.value)return;const l=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY,h=25,T=t.value==="left"?l<h:t.value==="right"?l>document.documentElement.clientWidth-h:t.value==="top"?o<h:t.value==="bottom"?o>document.documentElement.clientHeight-h:B(),E=r.value&&(t.value==="left"?l<i.value:t.value==="right"?l>document.documentElement.clientWidth-i.value:t.value==="top"?o<i.value:t.value==="bottom"?o>document.documentElement.clientHeight-i.value:B());(T||E||r.value&&v.value)&&(u=!0,m=[l,o],d.value=V(f.value?l:o,r.value),c.value=H(f.value?l:o),S(n),b(n))}function M(n){const l=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY;if(u){if(!n.cancelable){u=!1;return}const T=Math.abs(l-m[0]),E=Math.abs(o-m[1]);(f.value?T>E&&T>3:E>T&&E>3)?(s.value=!0,u=!1):(f.value?E:T)>3&&(u=!1)}if(!s.value)return;n.preventDefault(),b(n);const h=H(f.value?l:o,!1);c.value=Math.max(0,Math.min(1,h)),h>1?d.value=V(f.value?l:o,!0):h<0&&(d.value=V(f.value?l:o,!1))}function x(n){if(u=!1,!s.value)return;b(n),s.value=!1;const l=g(n.changedTouches[0].identifier),o=Math.abs(l.x),h=Math.abs(l.y);(f.value?o>h&&o>400:h>o&&h>3)?r.value=l.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||B()):r.value=c.value>.5}const p=w(()=>s.value?{transform:t.value==="left"?`translateX(calc(-100% + ${c.value*i.value}px))`:t.value==="right"?`translateX(calc(100% - ${c.value*i.value}px))`:t.value==="top"?`translateY(calc(-100% + ${c.value*i.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${c.value*i.value}px))`:B(),transition:"none"}:void 0);return{isDragging:s,dragProgress:c,dragStyles:p}}function B(){throw new Error}const Ie=["start","end","left","right","top","bottom"],Le=te({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ie.includes(e)},sticky:Boolean,...ae(),...ne(),...oe(),...le(),...ue(),...ie({tag:"nav"}),...re()},"VNavigationDrawer"),Oe=se()({name:"VNavigationDrawer",props:Le(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:v,emit:i,slots:a}=r;const{isRtl:t}=ce(),{themeClasses:f}=ve(e),{borderClasses:b}=de(e),{backgroundColorClasses:S,backgroundColorStyles:g}=X($(e,"color")),{elevationClasses:u}=me(e),{mobile:s}=fe(),{roundedClasses:c}=ge(e),d=he(),m=we(e,"modelValue",null,y=>!!y),{ssrBootStyles:V}=Ce(),{scopeId:H}=ye(),P=be(),M=C(!1),x=w(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=w(()=>Se(e.location,t.value)),n=w(()=>!e.permanent&&(s.value||e.temporary)),l=w(()=>e.sticky&&!n.value&&p.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{R(M,y=>i("update:rail",!y))}),Y(()=>!e.disableResizeWatcher,()=>{R(n,y=>!e.permanent&&Be(()=>m.value=!y))}),Y(()=>!e.disableRouteWatcher&&!!d,()=>{R(d.currentRoute,()=>n.value&&(m.value=!1))}),R(()=>e.permanent,y=>{y&&(m.value=!0)}),Te(()=>{e.modelValue!=null||n.value||(m.value=e.permanent||!s.value)});const{isDragging:o,dragProgress:h,dragStyles:T}=Ye({isActive:m,isTemporary:n,width:x,touchless:$(e,"touchless"),position:p}),E=w(()=>{const y=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value;return o.value?y*h.value:y}),{layoutItemStyles:N,layoutItemScrimStyles:U}=ke({id:e.name,order:w(()=>parseInt(e.order,10)),position:p,layoutSize:E,elementSize:x,active:w(()=>m.value||o.value),disableTransitions:w(()=>o.value),absolute:w(()=>e.absolute||l.value&&typeof I.value!="string")}),{isStuck:I,stickyStyles:j}=Ve({rootEl:P,isSticky:l,layoutItemStyles:N}),L=X(w(()=>typeof e.scrim=="string"?e.scrim:null)),G=w(()=>({...o.value?{opacity:h.value*.2,transition:"none"}:void 0,...U.value}));Me({VList:{bgColor:"transparent"}});function J(){M.value=!0}function K(){M.value=!1}return Ee(()=>{const y=a.image||e.image;return k(pe,null,[k(e.tag,z({ref:P,onMouseenter:J,onMouseleave:K,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":m.value,"v-navigation-drawer--sticky":l.value},f.value,S.value,b.value,u.value,c.value,e.class],style:[g.value,N.value,T.value,V.value,j.value,e.style]},H,v),{default:()=>{var D,W,O,_;return[y&&k("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(D=a.image)==null?void 0:D.call(a,{image:e.image}):k("img",{src:e.image,alt:""},null)]),a.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(W=a.prepend)==null?void 0:W.call(a)]),k("div",{class:"v-navigation-drawer__content"},[(O=a.default)==null?void 0:O.call(a)]),a.append&&k("div",{class:"v-navigation-drawer__append"},[(_=a.append)==null?void 0:_.call(a)])]}}),k(xe,{name:"fade-transition"},{default:()=>[n.value&&(o.value||m.value)&&!!e.scrim&&k("div",z({class:["v-navigation-drawer__scrim",L.backgroundColorClasses.value],style:[G.value,L.backgroundColorStyles.value],onClick:()=>m.value=!1},H),null)]})])}),{isStuck:I}}});export{Oe as V};