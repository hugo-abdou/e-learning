import{d as U,b5 as B,r as u,l as D,a as L,o as P,h as j,f as s,b as a,e as n,bp as f,p as e,b8 as M,bm as V,H as F,bc as N,aj as T,v as _}from"./main-6e33e0f4.js";import{a as $,b as A}from"./misc-mask-light-1df3cfef.js";import{V as E,_ as q}from"./AuthProvider.vue_vue_type_script_setup_true_lang-9f07ebec.js";import{u as b}from"./useGenerateImageVariant-ee29dc10.js";import{V as G}from"./VNodeRenderer-e530b142.js";import{r as m,a as H,e as z,c as J}from"./validators-f52bbb1d.js";import{V as g,a as l}from"./VRow-26e77137.js";import{V as p}from"./VTextField-c1b9a4f9.js";import{b as K}from"./VInput-0a556944.js";import{V as h}from"./VDivider-83731cf9.js";import{V as O}from"./VForm-cfccf0e4.js";import{b as v}from"./route-block-83d24a4e.js";import"./VCheckboxBtn-c1d3e033.js";import"./VSelectionControl-eb8518f7.js";import"./VField-2725232d.js";const Q="/build/assets/auth-v2-register-illustration-bordered-dark-c9ca0f5b.png",W="/build/assets/auth-v2-register-illustration-bordered-light-bbf4b217.png",X="/build/assets/auth-v2-register-illustration-dark-2626622e.png",Y="/build/assets/auth-v2-register-illustration-light-cd143341.png",Z={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},ee={class:"d-flex align-center justify-center w-100 h-100"},ae=n("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here 🚀 ",-1),se=n("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),te={class:"d-flex align-center mt-2 mb-4"},oe=n("span",{class:"me-1"},"I agree to",-1),re=n("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),le=n("span",null,"Already have an account?",-1),ne=n("span",{class:"mx-4"},"or",-1),ie=U({__name:"register",setup(de){const y=B(),c=u(),o=u({name:"johnDoe",email:"moikinge3@gmail.com",password:"password",password_confirmation:"password",privacyPolicies:!1}),w=D(),x=u({name:void 0,email:void 0,password:void 0}),k=async()=>{try{await y.register(o.value),w.push("/")}catch(d){const{errors:t}=d.response.data;x.value=t,console.error(d.response.data)}},C=b(Y,X,W,Q,!0),I=b(A,$),i=u(!1),R=()=>{var d;(d=c.value)==null||d.validate().then(({valid:t})=>{t&&k()})};return(d,t)=>{const S=L("RouterLink");return P(),j(g,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[a(l,{lg:"8",class:"d-none d-lg-flex"},{default:s(()=>[n("div",Z,[n("div",ee,[a(f,{"max-width":"441",src:e(C),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),a(f,{class:"auth-footer-mask",src:e(I)},null,8,["src"])])]),_:1}),a(l,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:s(()=>[a(M,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[a(V,null,{default:s(()=>[a(e(G),{nodes:e(F).app.logo,class:"mb-6"},null,8,["nodes"]),ae,se]),_:1}),a(V,null,{default:s(()=>[a(e(O),{ref_key:"refVForm",ref:c,onSubmit:N(R,["prevent"])},{default:s(()=>[a(g,null,{default:s(()=>[a(l,{cols:"12"},{default:s(()=>[a(p,{modelValue:e(o).name,"onUpdate:modelValue":t[0]||(t[0]=r=>e(o).name=r),rules:[e(m),e(H)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(p,{modelValue:e(o).email,"onUpdate:modelValue":t[1]||(t[1]=r=>e(o).email=r),rules:[e(m),e(z)],label:"Email",type:"email"},null,8,["modelValue","rules"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(p,{modelValue:e(o).password,"onUpdate:modelValue":t[2]||(t[2]=r=>e(o).password=r),rules:[e(m)],label:"Password",type:e(i)?"text":"password","append-inner-icon":e(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[3]||(t[3]=r=>i.value=!e(i))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(p,{modelValue:e(o).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=r=>e(o).password_confirmation=r),rules:[e(m),e(J)(e(o).password_confirmation,e(o).password)],label:"Password Confirmation",type:e(i)?"text":"password","append-inner-icon":e(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[5]||(t[5]=r=>i.value=!e(i))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),a(l,{cols:"12"},{default:s(()=>[n("div",te,[a(E,{id:"privacy-policy",modelValue:e(o).privacyPolicies,"onUpdate:modelValue":t[6]||(t[6]=r=>e(o).privacyPolicies=r),inline:""},null,8,["modelValue"]),a(K,{for:"privacy-policy",class:"pb-1",style:{opacity:"1"}},{default:s(()=>[oe,re]),_:1})]),a(T,{block:"",type:"submit"},{default:s(()=>[_(" Sign up ")]),_:1})]),_:1}),a(l,{cols:"12",class:"text-center text-base"},{default:s(()=>[le,a(S,{class:"text-primary ms-2",to:{name:"login"}},{default:s(()=>[_(" Sign in instead ")]),_:1})]),_:1}),a(l,{cols:"12",class:"d-flex align-center"},{default:s(()=>[a(h),ne,a(h)]),_:1}),a(l,{cols:"12",class:"text-center"},{default:s(()=>[a(q)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof v=="function"&&v(ie);export{ie as default};