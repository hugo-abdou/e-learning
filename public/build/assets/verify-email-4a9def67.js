import{t as f,Q as _,r as v,v as c,x as m,D as s,n as a,H as e,ak as p,A as o,ai as u,aa as h,E as i,B as y,a2 as V}from"./plugins-c4f6eef2.js";import{a as b,b as k}from"./auth-v1-top-shape-c5f58476.js";import{V as r}from"./VNodeRenderer-b4a21260.js";import{a as C,b as g,V as x}from"./VCard-5958db4d.js";import{V as B}from"./VCardText-4cd1fd13.js";import"./VCardActions-02c72c88.js";import"./createSimpleFunctional-9b6c5de5.js";import"./VAvatar-0def7634.js";const S={class:"auth-wrapper d-flex align-center justify-center pa-4"},T={class:"position-relative my-sm-16"},$={class:"d-flex"},E={class:"text-h5 mb-1"},N={key:0,class:"d-flex align-center justify-center"},w={class:"me-1"},U=f({__name:"verify-email",setup(j){const l=_(),n=v(!1);function d(){l.verifyEmail().then(t=>{t.status===202&&(n.value=!0)})}return(t,D)=>(c(),m("div",S,[s("div",T,[a(e(r),{nodes:("h"in t?t.h:e(p))("div",{innerHTML:e(b)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),a(e(r),{nodes:("h"in t?t.h:e(p))("div",{innerHTML:e(k)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),a(x,{class:"auth-card pa-4","max-width":"448"},{default:o(()=>[a(C,{class:"justify-center"},{prepend:o(()=>[s("div",$,[a(e(r),{nodes:e(u).app.logo},null,8,["nodes"])])]),default:o(()=>[a(g,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:o(()=>[h(i(e(u).app.title),1)]),_:1})]),_:1}),a(B,{class:"pt-2"},{default:o(()=>[s("h5",E,i(t.$t("account_activation_title")),1),s("p",null,i(t.$t("account_activation_subtitle",{email:e(l).user.email})),1),a(y,{block:"",disabled:e(n),class:"mb-6",onClick:d},{default:o(()=>[h(i(e(n)?t.$t("Check your inbox"):t.$t("Verify")),1)]),_:1},8,["disabled"]),e(n)?(c(),m("div",N,[s("span",w,i(t.$t("Didn't get the mail?")),1),s("a",{href:"#",onClick:d},i(t.$t("Resend")),1)])):V("",!0)]),_:1})]),_:1})])]))}});export{U as default};