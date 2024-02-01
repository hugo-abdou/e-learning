import{t as D,Q as V,r as u,a4 as L,S,v as P,z as j,A as s,n as a,D as i,_ as g,H as e,ai as M,bj as T,B as A,aa as _,bL as b}from"./plugins-900eb03f.js";import{a as F,b as N}from"./misc-mask-light-1df3cfef.js";import{_ as $}from"./AuthProvider.vue_vue_type_script_setup_true_lang-c36b7a7c.js";import{u as h}from"./useGenerateImageVariant-cd67c5e3.js";import{V as E}from"./VNodeRenderer-c91e6d80.js";import{r as p,a as q,e as z,c as G}from"./validators-229769c7.js";import{a as l,V as v}from"./VRow-bc79db32.js";import{V as H}from"./VCard-6d8b9f87.js";import{V as y}from"./VCardText-65c366cb.js";import{V as c}from"./VTextField-e9152184.js";import{V as Q}from"./VCheckbox-07863e5f.js";import{b as J}from"./VInput-d19eb2fc.js";import{V as w}from"./VDivider-bf01317e.js";import{V as K}from"./VForm-4f08ce3e.js";import"./VCardActions-6ec0444f.js";import"./createSimpleFunctional-e9ee8020.js";import"./VAvatar-98f875d9.js";import"./index-e8fbdf01.js";import"./VField-b7aa3867.js";import"./forwardRefs-6ea3df5c.js";import"./VCheckboxBtn-e9892fb1.js";import"./VSelectionControl-9eb14a8c.js";const O="/build/assets/auth-v2-register-illustration-bordered-dark-c9ca0f5b.png",W="/build/assets/auth-v2-register-illustration-bordered-light-bbf4b217.png",X="/build/assets/auth-v2-register-illustration-dark-2626622e.png",Y="/build/assets/auth-v2-register-illustration-light-cd143341.png",Z={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},ee={class:"d-flex align-center justify-center w-100 h-100"},ae=i("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here 🚀 ",-1),se=i("p",{class:"mb-0"},"Make your app management easy and fun!",-1),te={class:"d-flex align-center mt-2 mb-4"},re=i("span",{class:"me-1"},"I agree to",-1),oe=i("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),le=i("span",null,"Already have an account?",-1),ie=i("span",{class:"mx-4"},"or",-1),Le=D({__name:"register",setup(ne){V();const f=u(),r=u({name:"johnDoe",email:"moikinge3@gmail.com",password:"password",password_confirmation:"password",privacyPolicies:!1}),x=L(),m=u({name:void 0,email:void 0,password:void 0}),k=V(),C=async()=>{try{await b.post("/oauth/register",r.value),await b.getAccessToken(r.value.email,r.value.password),await k.refreshUser(),x.push({name:"dashboard"})}catch(d){const{errors:t}=d._data;m.value=t}},I=h(Y,X,W,O,!0),R=h(N,F),n=u(!1),U=()=>{var d;(d=f.value)==null||d.validate().then(({valid:t})=>{t&&C()})};return(d,t)=>{const B=S("RouterLink");return P(),j(v,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[a(l,{lg:"8",class:"d-none d-lg-flex"},{default:s(()=>[i("div",Z,[i("div",ee,[a(g,{"max-width":"441",src:e(I),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),a(g,{class:"auth-footer-mask",src:e(R)},null,8,["src"])])]),_:1}),a(l,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:s(()=>[a(H,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[a(y,null,{default:s(()=>[a(e(E),{nodes:e(M).app.logo,class:"mb-6"},null,8,["nodes"]),ae,se]),_:1}),a(y,null,{default:s(()=>[a(e(K),{ref_key:"refVForm",ref:f,onSubmit:T(U,["prevent"])},{default:s(()=>[a(v,null,{default:s(()=>[a(l,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(r).name,"onUpdate:modelValue":t[0]||(t[0]=o=>e(r).name=o),rules:[e(p),e(q)],label:"Username","error-messages":e(m).name},null,8,["modelValue","rules","error-messages"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(r).email,"onUpdate:modelValue":t[1]||(t[1]=o=>e(r).email=o),rules:[e(p),e(z)],label:"Email",type:"email","error-messages":e(m).email},null,8,["modelValue","rules","error-messages"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(r).password,"onUpdate:modelValue":t[2]||(t[2]=o=>e(r).password=o),rules:[e(p)],label:"Password",type:e(n)?"text":"password","append-inner-icon":e(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[3]||(t[3]=o=>n.value=!e(n)),"error-messages":e(m).password},null,8,["modelValue","rules","type","append-inner-icon","error-messages"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(r).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=o=>e(r).password_confirmation=o),rules:[e(p),e(G)(e(r).password_confirmation,e(r).password)],label:"Password Confirmation",type:e(n)?"text":"password","append-inner-icon":e(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[5]||(t[5]=o=>n.value=!e(n))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[i("div",te,[a(Q,{id:"privacy-policy",modelValue:e(r).privacyPolicies,"onUpdate:modelValue":t[6]||(t[6]=o=>e(r).privacyPolicies=o),inline:""},null,8,["modelValue"]),a(J,{for:"privacy-policy",class:"pb-1",style:{opacity:"1"}},{default:s(()=>[re,oe]),_:1})]),a(A,{block:"",type:"submit"},{default:s(()=>[_(" Sign up ")]),_:1})]),_:1}),a(l,{cols:"12",class:"text-center text-base"},{default:s(()=>[le,a(B,{class:"text-primary ms-2",to:{name:"login"}},{default:s(()=>[_(" Sign in instead ")]),_:1})]),_:1}),a(l,{cols:"12",class:"d-flex align-center"},{default:s(()=>[a(w),ie,a(w)]),_:1}),a(l,{cols:"12",class:"text-center"},{default:s(()=>[a($)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Le as default};
