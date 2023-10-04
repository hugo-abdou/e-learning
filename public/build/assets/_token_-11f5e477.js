import{d as P,bG as B,s as i,aw as R,q as T,r as I,o as L,g as F,v as n,x as s,e,h as V,V as m,z as o,aI as U,B as v,aJ as j,ar as _,C as y,aS as b,aL as q,as as H,at as u,ah as M,ag as $,aH as z,aU as g}from"./main-8c6cae95.js";import{_ as E}from"./AppTextField.vue_vue_type_script_setup_true_lang-63897ad5.js";import{a as A,b as D}from"./auth-v1-top-shape-c5f58476.js";import{r as k,c as G}from"./validators-f52bbb1d.js";import{V as J}from"./VForm-ae6f6d49.js";import"./VInput-74f983d3.js";import"./VTextField-41755040.js";const K={class:"auth-wrapper d-flex align-center justify-center pa-4"},O={class:"position-relative my-sm-16"},Q={class:"d-flex"},W=n("h5",{class:"text-h5 mb-1"},"Reset Password 🔒",-1),X={class:"mb-0"},Y={class:"font-weight-bold"},Z=n("span",null,"Back to login",-1),ee=P({__name:"[token]",setup(se){const w=B(),r=i({token:w.params.token,email:w.query.email,password:"",password_confirmation:""}),c=i({password_confirmation:void 0,password:void 0}),d=i(!1),p=i(!1),x=R(),f=i(),C=T();async function S(){if(f.value)try{const{valid:a}=await f.value.validate();a&&(await x.setNewPassword(r.value),C.push({name:"login"}))}catch(a){if(!a.response)throw a;const{errors:t}=a.response.data;c.value=t}}return(a,t)=>{const h=E,N=I("RouterLink");return L(),F("div",K,[n("div",O,[s(e(m),{nodes:("h"in a?a.h:e(V))("div",{innerHTML:e(A)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),s(e(m),{nodes:("h"in a?a.h:e(V))("div",{innerHTML:e(D)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),s(z,{class:"auth-card pa-4","max-width":"448"},{default:o(()=>[s(U,{class:"justify-center"},{prepend:o(()=>[n("div",Q,[s(e(m),{nodes:e(v).app.logo},null,8,["nodes"])])]),default:o(()=>[s(j,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:o(()=>[_(y(e(v).app.title),1)]),_:1})]),_:1}),s(b,{class:"pt-2"},{default:o(()=>[W,n("p",X,[_(" for "),n("span",Y,y(e(r).email),1)])]),_:1}),s(b,null,{default:o(()=>[s(e(J),{ref_key:"refVForm",ref:f,onSubmit:q(S,["prevent"])},{default:o(()=>[s(H,null,{default:o(()=>[s(u,{cols:"12"},{default:o(()=>[s(h,{modelValue:e(r).password,"onUpdate:modelValue":t[0]||(t[0]=l=>e(r).password=l),rules:[e(k)],"error-messages":e(c).password,autofocus:"",label:"New Password",type:e(d)?"text":"password","append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[1]||(t[1]=l=>d.value=!e(d))},null,8,["modelValue","rules","error-messages","type","append-inner-icon"])]),_:1}),s(u,{cols:"12"},{default:o(()=>[s(h,{modelValue:e(r).password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=l=>e(r).password_confirmation=l),label:"Confirm Password",rules:[e(k),e(G)(e(r).password_confirmation,e(r).password)],"error-messages":e(c).password_confirmation,type:e(p)?"text":"password","append-inner-icon":e(p)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[3]||(t[3]=l=>p.value=!e(p))},null,8,["modelValue","rules","error-messages","type","append-inner-icon"])]),_:1}),s(u,{cols:"12"},{default:o(()=>[s(M,{block:"",type:"submit"},{default:o(()=>[_(" Set New Password ")]),_:1})]),_:1}),s(u,{cols:"12"},{default:o(()=>[s(N,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:o(()=>[s($,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),Z]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});typeof g=="function"&&g(ee);export{ee as default};
