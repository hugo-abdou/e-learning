import{t as N,a3 as P,r as i,Q as B,a4 as R,S as T,v as j,x as F,D as n,n as o,H as e,ak as h,A as s,ai as v,aa as c,E as b,bj as I,B as L,C as E}from"./plugins-1ca62e54.js";import{_ as H}from"./AppTextField.vue_vue_type_script_setup_true_lang-9838b75e.js";import{a as M,b as U}from"./auth-v1-top-shape-c5f58476.js";import{V as _}from"./VNodeRenderer-c5a0ffdc.js";import{r as y,c as $}from"./validators-3a378363.js";import{a as q,b as A,V as D}from"./VCard-2a55749d.js";import{V as k}from"./VCardText-f87185bc.js";import{V as z,a as m}from"./VRow-063e83bb.js";import{V as Q}from"./VForm-11822a25.js";import"./VInput-0f0d564d.js";import"./index-290985fb.js";import"./VTextField-38237e59.js";import"./VField-5f020633.js";import"./forwardRefs-6ea3df5c.js";import"./VCardActions-114e80cb.js";import"./createSimpleFunctional-4f87dcb7.js";import"./VAvatar-15acdbba.js";const G={class:"auth-wrapper d-flex align-center justify-center pa-4"},J={class:"position-relative my-sm-16"},K={class:"d-flex"},O=n("h5",{class:"text-h5 mb-1"},"Reset Password 🔒",-1),W={class:"mb-0"},X={class:"font-weight-bold"},Y=n("span",null,"Back to login",-1),Ve=N({__name:"[token]",setup(Z){const w=P(),r=i({token:w.params.token,email:w.query.email,password:"",password_confirmation:""}),u=i({password_confirmation:void 0,password:void 0}),d=i(!1),p=i(!1),g=B(),f=i(),x=R();async function C(){if(f.value)try{const{valid:a}=await f.value.validate();a&&(await g.setNewPassword(r.value),x.push({name:"login"}))}catch(a){if(!a.response)throw a;const{errors:t}=a.response.data;u.value=t}}return(a,t)=>{const V=H,S=T("RouterLink");return j(),F("div",G,[n("div",J,[o(e(_),{nodes:("h"in a?a.h:e(h))("div",{innerHTML:e(M)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),o(e(_),{nodes:("h"in a?a.h:e(h))("div",{innerHTML:e(U)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),o(D,{class:"auth-card pa-4","max-width":"448"},{default:s(()=>[o(q,{class:"justify-center"},{prepend:s(()=>[n("div",K,[o(e(_),{nodes:e(v).app.logo},null,8,["nodes"])])]),default:s(()=>[o(A,{class:"font-weight-bold text-capitalize text-h5 py-1"},{default:s(()=>[c(b(e(v).app.title),1)]),_:1})]),_:1}),o(k,{class:"pt-2"},{default:s(()=>[O,n("p",W,[c(" for "),n("span",X,b(e(r).email),1)])]),_:1}),o(k,null,{default:s(()=>[o(e(Q),{ref_key:"refVForm",ref:f,onSubmit:I(C,["prevent"])},{default:s(()=>[o(z,null,{default:s(()=>[o(m,{cols:"12"},{default:s(()=>[o(V,{modelValue:e(r).password,"onUpdate:modelValue":t[0]||(t[0]=l=>e(r).password=l),rules:[e(y)],"error-messages":e(u).password,autofocus:"",label:"New Password",type:e(d)?"text":"password","append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[1]||(t[1]=l=>d.value=!e(d))},null,8,["modelValue","rules","error-messages","type","append-inner-icon"])]),_:1}),o(m,{cols:"12"},{default:s(()=>[o(V,{modelValue:e(r).password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=l=>e(r).password_confirmation=l),label:"Confirm Password",rules:[e(y),e($)(e(r).password_confirmation,e(r).password)],"error-messages":e(u).password_confirmation,type:e(p)?"text":"password","append-inner-icon":e(p)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[3]||(t[3]=l=>p.value=!e(p))},null,8,["modelValue","rules","error-messages","type","append-inner-icon"])]),_:1}),o(m,{cols:"12"},{default:s(()=>[o(L,{block:"",type:"submit"},{default:s(()=>[c(" Set New Password ")]),_:1})]),_:1}),o(m,{cols:"12"},{default:s(()=>[o(S,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:s(()=>[o(E,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),Y]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])}}});export{Ve as default};