import{d as w,s as u,aw as x,r as k,o as C,g as S,v as o,x as e,e as t,h as c,V as r,z as a,aI as B,B as p,aJ as T,ar as m,C as f,aS as _,aL as L,as as R,at as d,aj as j,ah as N,ag as P,aH as E,aU as h}from"./main-8c6cae95.js";import{_ as F}from"./AppTextField.vue_vue_type_script_setup_true_lang-63897ad5.js";import{a as H,b as I}from"./auth-v1-top-shape-c5f58476.js";import{V as M}from"./VForm-ae6f6d49.js";import"./VInput-74f983d3.js";import"./VTextField-41755040.js";const U={class:"auth-wrapper d-flex align-center justify-center pa-4"},z={class:"position-relative my-sm-16"},A={class:"d-flex"},D=o("h5",{class:"text-h5 mb-1"},"Forgot Password? 🔒",-1),J=o("p",{class:"mb-0"},"Enter your email and we'll send you instructions to reset your password",-1),$=o("span",null,"Back to login",-1),q=w({__name:"forgot-password",setup(G){const n=u(""),V=x(),l=u("");function g(){V.forgotPassword(n.value).then(s=>{l.value=s.data.message}).catch(s=>{l.value=s.response.data.message})}return(s,i)=>{const v=F,y=k("RouterLink");return C(),S("div",U,[o("div",z,[e(t(r),{nodes:("h"in s?s.h:t(c))("div",{innerHTML:t(H)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(r),{nodes:("h"in s?s.h:t(c))("div",{innerHTML:t(I)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(E,{class:"auth-card pa-4","max-width":"448"},{default:a(()=>[e(B,{class:"justify-center"},{prepend:a(()=>[o("div",A,[e(t(r),{nodes:t(p).app.logo},null,8,["nodes"])])]),default:a(()=>[e(T,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:a(()=>[m(f(t(p).app.title),1)]),_:1})]),_:1}),e(_,{class:"pt-2"},{default:a(()=>[D,J]),_:1}),e(_,null,{default:a(()=>[e(M,{onSubmit:L(g,["prevent"])},{default:a(()=>[e(R,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(v,{modelValue:t(n),"onUpdate:modelValue":i[0]||(i[0]=b=>j(n)?n.value=b:null),autofocus:"",label:"Email",type:"email"},null,8,["modelValue"]),o("p",null,f(t(l)),1)]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(N,{block:"",type:"submit"},{default:a(()=>[m(" Send Reset Link ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(y,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:a(()=>[e(P,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),$]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});typeof h=="function"&&h(q);export{q as default};
