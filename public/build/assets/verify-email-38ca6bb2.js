import{d as _,E as y,t as v,o as c,i as u,w as s,y as t,e,h as p,V as l,B as n,ab as b,C as h,ac as V,K as f,D as o,ap as C,ah as k,H as g,aa as x,as as m}from"./main-834b9cca.js";import{a as B,b as S}from"./auth-v1-top-shape-c5f58476.js";const T={class:"auth-wrapper d-flex align-center justify-center pa-4"},$={class:"position-relative my-sm-16"},w={class:"d-flex"},E={class:"text-h5 mb-1"},N={key:0,class:"d-flex align-center justify-center"},j={class:"me-1"},D=_({__name:"verify-email",setup(H){const d=y(),i=v(!1);function r(){d.verifyEmail().then(a=>{a.status===202&&(i.value=!0)})}return(a,L)=>(c(),u("div",T,[s("div",$,[t(e(l),{nodes:("h"in a?a.h:e(p))("div",{innerHTML:e(B)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),t(e(l),{nodes:("h"in a?a.h:e(p))("div",{innerHTML:e(S)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),t(x,{class:"auth-card pa-4","max-width":"448"},{default:n(()=>[t(b,{class:"justify-center"},{prepend:n(()=>[s("div",w,[t(e(l),{nodes:e(h).app.logo},null,8,["nodes"])])]),default:n(()=>[t(V,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:n(()=>[f(o(e(h).app.title),1)]),_:1})]),_:1}),t(C,{class:"pt-2"},{default:n(()=>[s("h5",E,o(a.$t("account_activation_title")),1),s("p",null,o(a.$t("account_activation_subtitle",{email:e(d).user.email})),1),t(k,{block:"",onClick:r,disabled:e(i),class:"mb-6"},{default:n(()=>[f(o(e(i)?a.$t("Check your inbox"):a.$t("Verify")),1)]),_:1},8,["disabled"]),e(i)?(c(),u("div",N,[s("span",j,o(a.$t("Didn't get the mail?")),1),s("a",{href:"#",onClick:r},o(a.$t("Resend")),1)])):g("",!0)]),_:1})]),_:1})])]))}});typeof m=="function"&&m(D);export{D as default};
