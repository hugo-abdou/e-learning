import{t as y,r as p,Q as w,S as x,v as k,x as C,D as s,n as e,H as o,ak as m,A as t,ai as u,aa as c,E as f,bj as S,L as B,B as T,C as L}from"./plugins-20f6c63a.js";import{_ as R}from"./AppTextField.vue_vue_type_script_setup_true_lang-5a82d17e.js";import{a as j,b as E}from"./auth-v1-top-shape-c5f58476.js";import{V as r}from"./VNodeRenderer-2e5d171a.js";import{a as N,b as P,V as F}from"./VCard-30e4f82a.js";import{V as _}from"./VCardText-d52ac2bc.js";import{V as H}from"./VForm-d5279851.js";import{V as M,a as i}from"./VRow-9970c9d9.js";import"./VInput-df115ab9.js";import"./index-755f2f9e.js";import"./VTextField-24d0bc09.js";import"./VField-78f5f7c6.js";import"./forwardRefs-6ea3df5c.js";import"./VCardActions-aebc9678.js";import"./createSimpleFunctional-991d7489.js";import"./VAvatar-d93e5e0c.js";const A={class:"auth-wrapper d-flex align-center justify-center pa-4"},D={class:"position-relative my-sm-16"},I={class:"d-flex"},U=s("h5",{class:"text-h5 mb-1"},"Forgot Password? 🔒",-1),z=s("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),Q=s("span",null,"Back to login",-1),re=y({__name:"forgot-password",setup($){const n=p(""),h=w(),l=p("");function V(){h.forgotPassword(n.value).then(a=>{l.value=a.data.message}).catch(a=>{l.value=a.response.data.message})}return(a,d)=>{const v=R,g=x("RouterLink");return k(),C("div",A,[s("div",D,[e(o(r),{nodes:("h"in a?a.h:o(m))("div",{innerHTML:o(j)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(o(r),{nodes:("h"in a?a.h:o(m))("div",{innerHTML:o(E)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(F,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(N,{class:"justify-center"},{prepend:t(()=>[s("div",I,[e(o(r),{nodes:o(u).app.logo},null,8,["nodes"])])]),default:t(()=>[e(P,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:t(()=>[c(f(o(u).app.title),1)]),_:1})]),_:1}),e(_,{class:"pt-2"},{default:t(()=>[U,z]),_:1}),e(_,null,{default:t(()=>[e(H,{onSubmit:S(V,["prevent"])},{default:t(()=>[e(M,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(v,{modelValue:o(n),"onUpdate:modelValue":d[0]||(d[0]=b=>B(n)?n.value=b:null),autofocus:"",label:"Email",type:"email"},null,8,["modelValue"]),s("p",null,f(o(l)),1)]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(T,{block:"",type:"submit"},{default:t(()=>[c(" Send Reset Link ")]),_:1})]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:t(()=>[e(L,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),Q]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});export{re as default};