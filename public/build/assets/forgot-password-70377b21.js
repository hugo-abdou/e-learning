import{d as w,t as u,E as x,r as k,o as C,i as S,w as o,y as e,e as t,h as c,V as r,B as a,ab as B,C as p,ac as T,K as m,D as f,ap as _,af as R,ai as L,aj as i,N,ah as j,G as E,aa as P,as as h}from"./main-834b9cca.js";import{_ as F}from"./AppTextField.vue_vue_type_script_setup_true_lang-5287073f.js";import{a as M,b as D}from"./auth-v1-top-shape-c5f58476.js";import{V as H}from"./VForm-c1dcf649.js";import"./VInput-586caf66.js";import"./VTextField-87129457.js";const I={class:"auth-wrapper d-flex align-center justify-center pa-4"},U={class:"position-relative my-sm-16"},z={class:"d-flex"},A=o("h5",{class:"text-h5 mb-1"},"Forgot Password? 🔒",-1),G=o("p",{class:"mb-0"},"Enter your email and we'll send you instructions to reset your password",-1),K=o("span",null,"Back to login",-1),$=w({__name:"forgot-password",setup(q){const n=u(""),V=x(),l=u("");function g(){V.forgotPassword(n.value).then(s=>{l.value=s.data.message}).catch(s=>{l.value=s.response.data.message})}return(s,d)=>{const v=F,y=k("RouterLink");return C(),S("div",I,[o("div",U,[e(t(r),{nodes:("h"in s?s.h:t(c))("div",{innerHTML:t(M)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(r),{nodes:("h"in s?s.h:t(c))("div",{innerHTML:t(D)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(P,{class:"auth-card pa-4","max-width":"448"},{default:a(()=>[e(B,{class:"justify-center"},{prepend:a(()=>[o("div",z,[e(t(r),{nodes:t(p).app.logo},null,8,["nodes"])])]),default:a(()=>[e(T,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:a(()=>[m(f(t(p).app.title),1)]),_:1})]),_:1}),e(_,{class:"pt-2"},{default:a(()=>[A,G]),_:1}),e(_,null,{default:a(()=>[e(H,{onSubmit:R(g,["prevent"])},{default:a(()=>[e(L,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(v,{modelValue:t(n),"onUpdate:modelValue":d[0]||(d[0]=b=>N(n)?n.value=b:null),autofocus:"",label:"Email",type:"email"},null,8,["modelValue"]),o("p",null,f(t(l)),1)]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(j,{block:"",type:"submit"},{default:a(()=>[m(" Send Reset Link ")]),_:1})]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(y,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:a(()=>[e(E,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),K]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});typeof h=="function"&&h($);export{$ as default};
