import{d as v,o as s,i as _,F as g,j as $,f,k as w,l as k,p as C,q as z,u as N,s as V,t as L,v as R,w as e,x as u,y as t,e as a,z as h,b as S,r as y,B as r,V as B,C as b,D as I,T as x}from"./main-834b9cca.js";import D from"./Footer-8ca4ee6c.js";import{_ as E}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-f1ec6138.js";import{_ as T}from"./UserProfile.vue_vue_type_script_setup_true_lang-a82aaf6f.js";import{V as W}from"./VSpacer-447b73cb.js";import"./VTooltip-f6096d96.js";import"./VMenu-ec466a7c.js";import"./VList-483d2f15.js";import"./VDivider-b2b5b2f6.js";import"./VListItemAction-64718449.js";const F={class:"nav-items"},H=v({__name:"HorizontalNav",props:{navItems:null},setup(m){const l=i=>"children"in i?k:C;return(i,d)=>(s(),_("ul",F,[(s(!0),_(g,null,$(m.navItems,(o,c)=>(s(),f(w(l(o)),{key:c,item:o},null,8,["item"]))),128))]))}}),j={class:"layout-navbar"},q={class:"navbar-content-container"},P={class:"layout-horizontal-nav"},U={class:"horizontal-nav-content-container"},Y={class:"layout-page-content"},A={class:"layout-footer"},G={class:"footer-content-container"},J=v({__name:"HorizontalNavLayout",props:{navItems:null},setup(m){const{y:l}=z(),{width:i}=N(),d=V(),o=L(!1);d.beforeEach(()=>{o.value=!0}),d.afterEach(()=>{o.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:p}=R();return(n,O)=>(s(),_("div",{class:h(["layout-wrapper",a(c)(a(i),a(l))])},[e("div",{class:h(["layout-navbar-and-nav-container",a(p)&&"header-blur"])},[e("div",j,[e("div",q,[u(n.$slots,"navbar")])]),e("div",P,[e("div",U,[t(a(H),{"nav-items":m.navItems},null,8,["nav-items"])])])],2),e("main",Y,[n.$slots["content-loading"]?(s(),_(g,{key:0},[a(o)?u(n.$slots,"content-loading",{key:0}):u(n.$slots,"default",{key:1})],64)):u(n.$slots,"default",{key:1})]),e("footer",A,[e("div",G,[u(n.$slots,"footer")])])],2))}}),K=[{title:"Dahsboard",to:{name:"admin-dashboard"},icon:{icon:"tabler-layout-dashboard"}},{title:"Users",to:{name:"admin-users"},icon:{icon:"tabler-users"}}],M={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},la=v({__name:"DefaultLayoutWithHorizontalNav",setup(m){const{appRouteTransition:l}=S();return(i,d)=>{const o=y("RouterLink"),c=y("RouterView");return s(),f(a(J),{"nav-items":a(K)},{navbar:r(()=>[t(o,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[t(a(B),{nodes:a(b).app.logo},null,8,["nodes"]),e("h1",M,I(a(b).app.title),1)]),_:1}),t(W),t(E,{class:"me-2"}),t(T)]),footer:r(()=>[t(D)]),default:r(()=>[t(c,null,{default:r(({Component:p})=>[t(x,{name:a(l),mode:"out-in"},{default:r(()=>[(s(),f(w(p)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}});export{la as default};
