import{t as S,r as p,a3 as T,a4 as R,Q as B,S as L,v as F,x as N,D as o,n as a,H as e,ak as h,A as s,ai as f,aa as i,E as b,bj as U,B as j,bL as P}from"./plugins-1ca62e54.js";import{_ as $}from"./AppTextField.vue_vue_type_script_setup_true_lang-9838b75e.js";import{r as v,e as A}from"./validators-3a378363.js";import{_ as D}from"./AuthProvider.vue_vue_type_script_setup_true_lang-e07c1af1.js";import{a as E,b as H}from"./auth-v1-top-shape-c5f58476.js";import{V as _}from"./VNodeRenderer-c5a0ffdc.js";import{a as M,b as z,V as I}from"./VCard-2a55749d.js";import{V as w}from"./VCardText-f87185bc.js";import{V as q}from"./VForm-11822a25.js";import{V as Q,a as m}from"./VRow-063e83bb.js";import{V as W}from"./VCheckbox-4f5a6ff8.js";import{V as x}from"./VDivider-e9bd568d.js";import"./VInput-0f0d564d.js";import"./index-290985fb.js";import"./VTextField-38237e59.js";import"./VField-5f020633.js";import"./forwardRefs-6ea3df5c.js";import"./VCardActions-114e80cb.js";import"./createSimpleFunctional-4f87dcb7.js";import"./VAvatar-15acdbba.js";import"./VCheckboxBtn-bf01db5f.js";import"./VSelectionControl-1b1614f2.js";const G={class:"auth-wrapper d-flex align-center justify-center pa-4"},J={class:"position-relative my-sm-16"},K={class:"d-flex"},O={class:"text-h5 mb-1"},X={class:"text-capitalize"},Y=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),Z={class:"d-flex align-center justify-space-between flex-wrap mt-2 mb-4"},ee=o("span",null,"New on our platform?",-1),ae=o("span",{class:"text-primary ms-2"}," Create an account ",-1),se=o("span",{class:"mx-4"},"or",-1),Se=S({__name:"login",setup(te){const r=p({email:"",password:"",remember:!1}),u=p({email:void 0,password:void 0}),d=p(!1);T();const y=R(),c=p(),g=B(),k=async()=>{if(c.value)try{const{valid:t}=await c.value.validate();t&&(await P.getAccessToken(r.value.email,r.value.password),await g.refreshUser(),y.push({name:"dashboard"}))}catch(t){if(!(t!=null&&t.status))throw t;u.value.email=t._data.message}};return(t,l)=>{const V=$,C=L("RouterLink");return F(),N("div",G,[o("div",J,[a(e(_),{nodes:("h"in t?t.h:e(h))("div",{innerHTML:e(E)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),a(e(_),{nodes:("h"in t?t.h:e(h))("div",{innerHTML:e(H)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),a(I,{class:"auth-card pa-4","max-width":"448"},{default:s(()=>[a(M,{class:"justify-center"},{prepend:s(()=>[o("div",K,[a(e(_),{nodes:e(f).app.logo},null,8,["nodes"])])]),default:s(()=>[a(z,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:s(()=>[i(b(e(f).app.title),1)]),_:1})]),_:1}),a(w,{class:"pt-1"},{default:s(()=>[o("h5",O,[i(" Welcome to "),o("span",X,b(e(f).app.title),1),i("! 👋🏻 ")]),Y]),_:1}),a(w,null,{default:s(()=>[a(e(q),{ref_key:"refVForm",ref:c,onSubmit:U(k,["prevent"])},{default:s(()=>[a(Q,null,{default:s(()=>[a(m,{cols:"12"},{default:s(()=>[a(V,{modelValue:e(r).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(r).email=n),autofocus:"",label:"Email",type:"email",rules:[e(v),e(A)],"error-messages":e(u).email,autocomplete:"username"},null,8,["modelValue","rules","error-messages"])]),_:1}),a(m,{cols:"12"},{default:s(()=>[a(V,{modelValue:e(r).password,"onUpdate:modelValue":l[1]||(l[1]=n=>e(r).password=n),label:"Password",type:e(d)?"text":"password","append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye",rules:[e(v)],"error-messages":e(u).password,autocomplete:"current-password","onClick:appendInner":l[2]||(l[2]=n=>d.value=!e(d))},null,8,["modelValue","type","append-inner-icon","rules","error-messages"]),o("div",Z,[a(W,{modelValue:e(r).remember,"onUpdate:modelValue":l[3]||(l[3]=n=>e(r).remember=n),label:"Remember me"},null,8,["modelValue"]),a(C,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:s(()=>[i(" Forgot Password? ")]),_:1})]),a(j,{block:"",type:"submit"},{default:s(()=>[i(" Login ")]),_:1})]),_:1}),a(m,{cols:"12",class:"text-center text-base"},{default:s(()=>[ee,ae]),_:1}),a(m,{cols:"12",class:"d-flex align-center"},{default:s(()=>[a(x),se,a(x)]),_:1}),a(m,{cols:"12",class:"text-center"},{default:s(()=>[a(D)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});export{Se as default};