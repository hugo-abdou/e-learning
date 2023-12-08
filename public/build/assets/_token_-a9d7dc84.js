import{d as S,k as R,r as i,b5 as T,l as B,a as L,o as j,c as F,e as n,b as s,p as e,L as V,f as o,b9 as I,H as h,ba as H,v as c,x as v,be as y,bc as M,aj as U,a0 as $,b8 as q}from"./main-bf1e147a.js";import{_ as E}from"./AppTextField.vue_vue_type_script_setup_true_lang-9a376451.js";import{a as z,b as A}from"./auth-v1-top-shape-c5f58476.js";import{V as _}from"./VNodeRenderer-e740f559.js";import{r as k,c as D}from"./validators-753247d6.js";import{V as G,a as u}from"./VRow-237f35d1.js";import{V as J}from"./VForm-2d372ef7.js";import{b as g}from"./route-block-83d24a4e.js";import"./VInput-86d12209.js";import"./VTextField-7f141e42.js";import"./VField-7b33dc59.js";const K={class:"auth-wrapper d-flex align-center justify-center pa-4"},O={class:"position-relative my-sm-16"},Q={class:"d-flex"},W=n("h5",{class:"text-h5 mb-1"}," Reset Password 🔒 ",-1),X={class:"mb-0"},Y={class:"font-weight-bold"},Z=n("span",null,"Back to login",-1),ee=S({__name:"[token]",setup(se){const w=R(),r=i({token:w.params.token,email:w.query.email,password:"",password_confirmation:""}),m=i({password_confirmation:void 0,password:void 0}),d=i(!1),p=i(!1),x=T(),f=i(),C=B();async function N(){if(f.value)try{const{valid:a}=await f.value.validate();a&&(await x.setNewPassword(r.value),C.push({name:"login"}))}catch(a){if(!a.response)throw a;const{errors:t}=a.response.data;m.value=t}}return(a,t)=>{const b=E,P=L("RouterLink");return j(),F("div",K,[n("div",O,[s(e(_),{nodes:("h"in a?a.h:e(V))("div",{innerHTML:e(z)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),s(e(_),{nodes:("h"in a?a.h:e(V))("div",{innerHTML:e(A)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),s(q,{class:"auth-card pa-4","max-width":"448"},{default:o(()=>[s(I,{class:"justify-center"},{prepend:o(()=>[n("div",Q,[s(e(_),{nodes:e(h).app.logo},null,8,["nodes"])])]),default:o(()=>[s(H,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:o(()=>[c(v(e(h).app.title),1)]),_:1})]),_:1}),s(y,{class:"pt-2"},{default:o(()=>[W,n("p",X,[c(" for "),n("span",Y,v(e(r).email),1)])]),_:1}),s(y,null,{default:o(()=>[s(e(J),{ref_key:"refVForm",ref:f,onSubmit:M(N,["prevent"])},{default:o(()=>[s(G,null,{default:o(()=>[s(u,{cols:"12"},{default:o(()=>[s(b,{modelValue:e(r).password,"onUpdate:modelValue":t[0]||(t[0]=l=>e(r).password=l),rules:[e(k)],"error-messages":e(m).password,autofocus:"",label:"New Password",type:e(d)?"text":"password","append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[1]||(t[1]=l=>d.value=!e(d))},null,8,["modelValue","rules","error-messages","type","append-inner-icon"])]),_:1}),s(u,{cols:"12"},{default:o(()=>[s(b,{modelValue:e(r).password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=l=>e(r).password_confirmation=l),label:"Confirm Password",rules:[e(k),e(D)(e(r).password_confirmation,e(r).password)],"error-messages":e(m).password_confirmation,type:e(p)?"text":"password","append-inner-icon":e(p)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[3]||(t[3]=l=>p.value=!e(p))},null,8,["modelValue","rules","error-messages","type","append-inner-icon"])]),_:1}),s(u,{cols:"12"},{default:o(()=>[s(U,{block:"",type:"submit"},{default:o(()=>[c(" Set New Password ")]),_:1})]),_:1}),s(u,{cols:"12"},{default:o(()=>[s(P,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:o(()=>[s($,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),Z]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});typeof g=="function"&&g(ee);export{ee as default};