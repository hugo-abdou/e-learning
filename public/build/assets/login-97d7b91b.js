import{d as T,s as p,bG as B,q as L,aw as F,r as N,o as U,g as q,v as l,x as a,e,h as v,V as f,z as s,aI as P,B as _,aJ as j,ar as i,C as x,aS as y,aL as z,as as E,at as d,ah as H,aH as I,aU as w}from"./main-8c6cae95.js";import{_ as M}from"./AppTextField.vue_vue_type_script_setup_true_lang-63897ad5.js";import{r as g,e as $}from"./validators-f52bbb1d.js";import{_ as D}from"./AuthProvider.vue_vue_type_script_setup_true_lang-cc27ef51.js";import{a as A,b as G}from"./auth-v1-top-shape-c5f58476.js";import{V as J}from"./VCheckbox-05f6b523.js";import{V as C}from"./VDivider-4c3fc300.js";import{V as W}from"./VForm-ae6f6d49.js";import"./VInput-74f983d3.js";import"./VTextField-41755040.js";import"./VCheckboxBtn-cc4c4e9f.js";const K={class:"auth-wrapper d-flex align-center justify-center pa-4"},O={class:"position-relative my-sm-16"},Q={class:"d-flex"},X={class:"text-h5 mb-1"},Y={class:"text-capitalize"},Z=l("p",{class:"mb-0"},"Please sign-in to your account and start the adventure",-1),ee={class:"d-flex align-center justify-space-between flex-wrap mt-2 mb-4"},ae=l("span",null,"New on our platform?",-1),se=l("span",{class:"mx-4"},"or",-1),te=T({__name:"login",setup(oe){const r=p({email:"",password:"",remember:!1}),u=p({email:void 0,password:void 0}),m=p(!1),V=B(),k=L(),c=p(),S=F(),R=async()=>{if(c.value)try{const{valid:t}=await c.value.validate();t&&await S.login(r.value.email,r.value.password),k.replace(V.query.to?String(V.query.to):"/")}catch(t){if(!t.response)throw t;const{errors:o}=t.response.data;u.value=o,console.error(t.response.data)}};return(t,o)=>{const h=M,b=N("RouterLink");return U(),q("div",K,[l("div",O,[a(e(f),{nodes:("h"in t?t.h:e(v))("div",{innerHTML:e(A)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),a(e(f),{nodes:("h"in t?t.h:e(v))("div",{innerHTML:e(G)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),a(I,{class:"auth-card pa-4","max-width":"448"},{default:s(()=>[a(P,{class:"justify-center"},{prepend:s(()=>[l("div",Q,[a(e(f),{nodes:e(_).app.logo},null,8,["nodes"])])]),default:s(()=>[a(j,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:s(()=>[i(x(e(_).app.title),1)]),_:1})]),_:1}),a(y,{class:"pt-1"},{default:s(()=>[l("h5",X,[i(" Welcome to "),l("span",Y,x(e(_).app.title),1),i("! 👋🏻 ")]),Z]),_:1}),a(y,null,{default:s(()=>[a(e(W),{ref_key:"refVForm",ref:c,onSubmit:z(R,["prevent"])},{default:s(()=>[a(E,null,{default:s(()=>[a(d,{cols:"12"},{default:s(()=>[a(h,{modelValue:e(r).email,"onUpdate:modelValue":o[0]||(o[0]=n=>e(r).email=n),autofocus:"",label:"Email",type:"email",rules:[e(g),e($)],"error-messages":e(u).email},null,8,["modelValue","rules","error-messages"])]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(h,{modelValue:e(r).password,"onUpdate:modelValue":o[1]||(o[1]=n=>e(r).password=n),label:"Password",type:e(m)?"text":"password","append-inner-icon":e(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=n=>m.value=!e(m)),rules:[e(g)],"error-messages":e(u).password},null,8,["modelValue","type","append-inner-icon","rules","error-messages"]),l("div",ee,[a(J,{modelValue:e(r).remember,"onUpdate:modelValue":o[3]||(o[3]=n=>e(r).remember=n),label:"Remember me"},null,8,["modelValue"]),a(b,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:s(()=>[i(" Forgot Password? ")]),_:1})]),a(H,{block:"",type:"submit"},{default:s(()=>[i(" Login ")]),_:1})]),_:1}),a(d,{cols:"12",class:"text-center text-base"},{default:s(()=>[ae,a(b,{class:"text-primary ms-2",to:{name:"index"}},{default:s(()=>[i(" Create an account ")]),_:1})]),_:1}),a(d,{cols:"12",class:"d-flex align-center"},{default:s(()=>[a(C),se,a(C)]),_:1}),a(d,{cols:"12",class:"text-center"},{default:s(()=>[a(D)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});typeof w=="function"&&w(te);export{te as default};
