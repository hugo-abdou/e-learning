import{d as S,az as U,s as u,q as D,r as L,o as P,f as M,z as s,x as a,aw as r,v as n,aY as f,e,aK as j,aZ as _,V as F,B as N,aO as T,av as V,ak as $,au as g,a$ as b}from"./main-0fe8d6c4.js";import{u as v,m as q,a as z}from"./useGenerateImageVariant-7850fb03.js";import{V as A,_ as E}from"./AuthProvider.vue_vue_type_script_setup_true_lang-b650b943.js";import{r as m,a as G,e as K,c as O}from"./validators-f52bbb1d.js";import{V as Y}from"./VForm-f9b24d4e.js";import{b as c,a as Z}from"./VTextField-8e9e4f53.js";import{V as h}from"./VDivider-4843e98e.js";import"./VCheckboxBtn-105f566a.js";const H="/build/assets/auth-v2-register-illustration-bordered-dark-c9ca0f5b.png",J="/build/assets/auth-v2-register-illustration-bordered-light-bbf4b217.png",Q="/build/assets/auth-v2-register-illustration-dark-2626622e.png",W="/build/assets/auth-v2-register-illustration-light-cd143341.png",X={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},ee={class:"d-flex align-center justify-center w-100 h-100"},ae=n("h5",{class:"text-h5 font-weight-semibold mb-1"},"Adventure starts here 🚀",-1),se=n("p",{class:"mb-0"},"Make your app management easy and fun!",-1),te={class:"d-flex align-center mt-2 mb-4"},oe=n("span",{class:"me-1"},"I agree to",-1),le=n("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),re=n("span",null,"Already have an account?",-1),ne=n("span",{class:"mx-4"},"or",-1),ie=S({__name:"register",setup(de){const y=U(),p=u(),o=u({name:"johnDoe",email:"moikinge3@gmail.com",password:"password",password_confirmation:"password",privacyPolicies:!1}),w=D(),x=u({name:void 0,email:void 0,password:void 0}),k=async()=>{try{await y.register(o.value),w.push("/")}catch(d){const{errors:t}=d.response.data;x.value=t,console.error(d.response.data)}},C=v(W,Q,J,H,!0),I=v(z,q),i=u(!1),R=()=>{var d;(d=p.value)==null||d.validate().then(({valid:t})=>{t&&k()})};return(d,t)=>{const B=L("RouterLink");return P(),M(V,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[a(r,{lg:"8",class:"d-none d-lg-flex"},{default:s(()=>[n("div",X,[n("div",ee,[a(f,{"max-width":"441",src:e(C),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),a(f,{class:"auth-footer-mask",src:e(I)},null,8,["src"])])]),_:1}),a(r,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:s(()=>[a(j,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[a(_,null,{default:s(()=>[a(e(F),{nodes:e(N).app.logo,class:"mb-6"},null,8,["nodes"]),ae,se]),_:1}),a(_,null,{default:s(()=>[a(e(Y),{ref_key:"refVForm",ref:p,onSubmit:T(R,["prevent"])},{default:s(()=>[a(V,null,{default:s(()=>[a(r,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(o).name,"onUpdate:modelValue":t[0]||(t[0]=l=>e(o).name=l),rules:[e(m),e(G)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(o).email,"onUpdate:modelValue":t[1]||(t[1]=l=>e(o).email=l),rules:[e(m),e(K)],label:"Email",type:"email"},null,8,["modelValue","rules"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(o).password,"onUpdate:modelValue":t[2]||(t[2]=l=>e(o).password=l),rules:[e(m)],label:"Password",type:e(i)?"text":"password","append-inner-icon":e(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[3]||(t[3]=l=>i.value=!e(i))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[a(c,{modelValue:e(o).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=l=>e(o).password_confirmation=l),rules:[e(m),e(O)(e(o).password_confirmation,e(o).password)],label:"Password Confirmation",type:e(i)?"text":"password","append-inner-icon":e(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[5]||(t[5]=l=>i.value=!e(i))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[n("div",te,[a(A,{id:"privacy-policy",modelValue:e(o).privacyPolicies,"onUpdate:modelValue":t[6]||(t[6]=l=>e(o).privacyPolicies=l),inline:""},null,8,["modelValue"]),a(Z,{for:"privacy-policy",class:"pb-1",style:{opacity:"1"}},{default:s(()=>[oe,le]),_:1})]),a($,{block:"",type:"submit"},{default:s(()=>[g(" Sign up ")]),_:1})]),_:1}),a(r,{cols:"12",class:"text-center text-base"},{default:s(()=>[re,a(B,{class:"text-primary ms-2",to:{name:"login"}},{default:s(()=>[g(" Sign in instead ")]),_:1})]),_:1}),a(r,{cols:"12",class:"d-flex align-center"},{default:s(()=>[a(h),ne,a(h)]),_:1}),a(r,{cols:"12",class:"text-center"},{default:s(()=>[a(E)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof b=="function"&&b(ie);export{ie as default};
