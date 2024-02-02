import{_ as ae}from"./AppTextField.vue_vue_type_script_setup_true_lang-5c78031b.js";import{_ as le}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-65a3d6cf.js";import{t as F,r as w,v,x as k,n as e,A as t,B as y,D as a,E as l,aa as _,C as O,H as s,L as I,F as B,c6 as z,z as R,bj as q,Q as J,k as oe,y as Q,a2 as K,ao as re,ap as ne,w as ie,aA as ue,bh as de,_ as ce}from"./plugins-900eb03f.js";import{V as S,a as me,b as pe,c as fe}from"./VCard-6d8b9f87.js";import{V as h}from"./VCardText-65c366cb.js";import{V as W}from"./VForm-4f08ce3e.js";import{V as j}from"./VDialog-bc9d1454.js";import{a as D,V as E}from"./VRow-bc79db32.js";import{V as A}from"./VTextField-e9152184.js";import{V as Z,a as L,b as Y}from"./VList-ff1b2c79.js";import{V as X}from"./VDivider-bf01317e.js";import{V as _e}from"./VTable-22264b0b.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{r as be}from"./validators-229769c7.js";import{_ as ve}from"./RolesSelectBox.vue_vue_type_script_setup_true_lang-5cc91791.js";import{V as H}from"./VAvatar-98f875d9.js";import{V as we,a as ge}from"./VAlert-f1d0655f.js";import{k as M,a as Ve}from"./formatters-386d1040.js";import{V as ye}from"./VSpacer-35711271.js";import{V as G}from"./VChip-b4e7b548.js";const he=a("span",{class:"text-5xl"},"!",-1),$e={class:"text-lg font-weight-medium"},xe={class:"text-3xl"},Ce={class:"text-h4 mb-4"},De=a("span",{class:"text-5xl font-weight-light"},"X",-1),ke={class:"text-h4 mb-4"},te=F({__name:"ConfirmDialog",props:{confirmationQuestion:{},isDialogVisible:{type:Boolean},confirmTitle:{},confirmMsg:{},cancelTitle:{},cancelMsg:{}},emits:["update:isDialogVisible","confirm"],setup($,{emit:p}){const d=$,c=p,o=w(!1),g=w(!1),b=x=>{c("update:isDialogVisible",x)},f=()=>{c("confirm",!0),b(!1),o.value=!0},U=()=>{c("confirm",!1),c("update:isDialogVisible",!1),g.value=!0};return(x,V)=>(v(),k(B,null,[e(j,{"max-width":"500","model-value":d.isDialogVisible,"onUpdate:modelValue":b},{default:t(()=>[e(S,{class:"text-center px-10 py-6"},{default:t(()=>[e(h,null,{default:t(()=>[e(y,{icon:"",variant:"outlined",color:"warning",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[he]),_:1}),a("h6",$e,l(d.confirmationQuestion),1)]),_:1}),e(h,{class:"d-flex align-center justify-center gap-2"},{default:t(()=>[e(y,{variant:"elevated",onClick:f},{default:t(()=>[_(" Confirm ")]),_:1}),e(y,{color:"secondary",variant:"tonal",onClick:U},{default:t(()=>[_(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]),e(j,{modelValue:s(o),"onUpdate:modelValue":V[1]||(V[1]=C=>I(o)?o.value=C:null),"max-width":"500"},{default:t(()=>[e(S,null,{default:t(()=>[e(h,{class:"text-center px-10 py-6"},{default:t(()=>[e(y,{icon:"",variant:"outlined",color:"success",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[a("span",xe,[e(O,{icon:"tabler-check"})])]),_:1}),a("h1",Ce,l(d.confirmTitle),1),a("p",null,l(d.confirmMsg),1),e(y,{color:"success",onClick:V[0]||(V[0]=C=>o.value=!1)},{default:t(()=>[_(" Ok ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(j,{modelValue:s(g),"onUpdate:modelValue":V[3]||(V[3]=C=>I(g)?g.value=C:null),"max-width":"500"},{default:t(()=>[e(S,null,{default:t(()=>[e(h,{class:"text-center px-10 py-6"},{default:t(()=>[e(y,{icon:"",variant:"outlined",color:"error",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[De]),_:1}),a("h1",ke,l(d.cancelTitle),1),a("p",null,l(d.cancelMsg),1),e(y,{color:"success",onClick:V[2]||(V[2]=C=>g.value=!1)},{default:t(()=>[_(" Ok ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),Se=a("span",{class:"text-base"}," Enter your mobile phone number with country code and we will send you a verification code. ",-1),Ue={class:"d-flex flex-wrap justify-end gap-4"},Pe=F({__name:"EnableOneTimePasswordDialog",props:{mobileNumber:{},isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup($,{emit:p}){const d=$,c=p,o=w(structuredClone(z(d.mobileNumber))),g=()=>{o.value&&(c("submit",o.value),c("update:isDialogVisible",!1))},b=()=>{o.value=structuredClone(z(d.mobileNumber)),c("update:isDialogVisible",!1)},f=U=>{c("update:isDialogVisible",U)};return(U,x)=>{const V=le,C=ae;return v(),R(j,{"max-width":"787","model-value":d.isDialogVisible,"onUpdate:modelValue":f},{default:t(()=>[e(V,{onClick:x[0]||(x[0]=P=>f(!1))}),e(S,{class:"pa-5 pa-sm-8"},{default:t(()=>[e(me,{class:"text-start"},{default:t(()=>[e(pe,{class:"text-h6 font-weight-medium mb-2"},{default:t(()=>[_(" Verify Your Mobile Number for SMS ")]),_:1}),e(fe,null,{default:t(()=>[Se]),_:1})]),_:1}),e(h,{class:"pt-6"},{default:t(()=>[e(W,{onSubmit:q(()=>{},["prevent"])},{default:t(()=>[e(C,{modelValue:s(o),"onUpdate:modelValue":x[1]||(x[1]=P=>I(o)?o.value=P:null),name:"mobile",label:"Phone Number",placeholder:"+1 123 456 7890",type:"number",class:"mb-5"},null,8,["modelValue"]),a("div",Ue,[e(y,{color:"secondary",variant:"tonal",onClick:b},{default:t(()=>[_(" Cancel ")]),_:1}),e(y,{type:"submit",onClick:g},{default:t(()=>[_(" continue "),e(O,{end:"",icon:"tabler-arrow-right",class:"flip-in-rtl"})]),_:1})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}});const Te={class:"text-base font-weight-medium mb-3"};const Ae={scope:"col"},Be={scope:"col"},Ie={scope:"col"},Ne={class:"d-flex align-center"},Re={class:"text-base font-weight-semibold"},Ee=F({__name:"AccountSettingsSecurity",props:{userData:{}},setup($){const p=$,d=J(),c=w(!1),o=w(!1),g=w(!1),b=w({current_password:"",password:"",password_confirmation:""}),f=w({current_password:void 0,password:void 0,password_confirmation:void 0});async function U(){try{await d.resetPassword(p.userData.id,b.value),f.value={}}catch(n){if(!n.response)throw n;if(n.response.status===422){const{errors:r}=n.response.data;f.value=r}}}const x=["passwordRequirements_1","passwordRequirements_2","passwordRequirements_3"],V=w(!1),C=w([]);function P(){d.otherBrowserSessions(p.userData.id).then(n=>C.value=n)}const T=w(!1),i=w({password:"",error:void 0});async function u(n){if(n)try{await d.logOutOtherBrowserSessions(p.userData.id,i.value.password),i.value={password:"",error:void 0},T.value=!1,P()}catch(r){if(!r.response)throw r;if(r.response.status===422){const{errors:N}=r.response.data;i.value.error=N.password}}}return oe(P),(n,r)=>{const N=Pe,se=te;return v(),k(B,null,[e(E,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[e(S,{title:n.$t("Change Password")},{default:t(()=>[e(W,{onSubmit:q(U,["prevent"])},{default:t(()=>[e(h,{class:"pt-0"},{default:t(()=>[e(E,{class:"mb-3"},{default:t(()=>[e(D,{cols:"12",md:"6"},{default:t(()=>[e(A,{modelValue:s(b).current_password,"onUpdate:modelValue":r[0]||(r[0]=m=>s(b).current_password=m),autocomplete:"current-password","error-messages":s(f).current_password,type:s(c)?"text":"password","append-inner-icon":s(c)?"tabler-eye-off":"tabler-eye",label:n.$t("Current Password"),"onClick:appendInner":r[1]||(r[1]=m=>c.value=!s(c))},null,8,["modelValue","error-messages","type","append-inner-icon","label"])]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(D,{cols:"12",md:"6"},{default:t(()=>[e(A,{modelValue:s(b).password,"onUpdate:modelValue":r[2]||(r[2]=m=>s(b).password=m),autocomplete:"new-password","error-messages":s(f).password,type:s(o)?"text":"password","append-inner-icon":s(o)?"tabler-eye-off":"tabler-eye",label:n.$t("New Password"),"onClick:appendInner":r[3]||(r[3]=m=>o.value=!s(o))},null,8,["modelValue","error-messages","type","append-inner-icon","label"])]),_:1}),e(D,{cols:"12",md:"6"},{default:t(()=>[e(A,{modelValue:s(b).password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=m=>s(b).password_confirmation=m),autocomplete:"new-password",type:s(g)?"text":"password","append-inner-icon":s(g)?"tabler-eye-off":"tabler-eye",label:n.$t("Confirm New Password"),"onClick:appendInner":r[5]||(r[5]=m=>g.value=!s(g))},null,8,["modelValue","type","append-inner-icon","label"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[a("h6",Te,l(n.$t("Password Requirements"))+": ",1),e(Z,{class:"card-list"},{default:t(()=>[(v(),k(B,null,Q(x,m=>e(L,{key:m,title:n.$t(m),class:"text-medium-emphasis"},{prepend:t(()=>[e(O,{size:"8",icon:"tabler-circle",class:"me-3"})]),_:2},1032,["title"])),64))]),_:1})]),_:1}),e(h,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(y,{type:"submit"},{default:t(()=>[_(l(n.$t("Save changes")),1)]),_:1}),e(y,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[_(l(n.$t("Reset")),1)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["title"])]),_:1}),K("",!0),e(D,{cols:"12"},{default:t(()=>[e(S,{title:"Recent Devices"},{append:t(()=>[e(y,{size:"small",color:"warning",onClick:r[7]||(r[7]=m=>T.value=!0)},{default:t(()=>[_(l(n.$t("Log Out Other Browsers")),1)]),_:1})]),default:t(()=>[e(X),e(_e,{class:"text-no-wrap"},{default:t(()=>[a("thead",null,[a("tr",null,[a("th",Ae,l(n.$t("BROWSER")),1),a("th",Be,l(n.$t("IP")),1),a("th",Ie,l(n.$t("RECENT ACTIVITIES")),1)])]),a("tbody",null,[(v(!0),k(B,null,Q(s(C),m=>(v(),k("tr",{key:m.last_active},[a("td",Ne,[e(O,{start:"",icon:`logos:${m.agent.browser.toLowerCase()}`},null,8,["icon"]),a("h6",Re,l(m.agent.browser)+" on "+l(m.agent.platform),1)]),a("td",null,l(m.ip_address),1),a("td",null,l(m.last_active),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{isDialogVisible:s(V),"onUpdate:isDialogVisible":r[8]||(r[8]=m=>I(V)?V.value=m:null)},null,8,["isDialogVisible"]),e(se,{isDialogVisible:s(T),"onUpdate:isDialogVisible":r[10]||(r[10]=m=>I(T)?T.value=m:null),"cancel-title":"Cancelled","confirm-title":"Unsubscribed!","confirm-msg":"Your subscription cancelled successfully.","confirmation-question":"Are you sure to cancel your subscription?","cancel-msg":"Unsubscription Cancelled!!",onConfirm:u},{default:t(()=>[e(A,{modelValue:s(i).password,"onUpdate:modelValue":r[9]||(r[9]=m=>s(i).password=m),label:n.$t("Confirm password"),autocomplete:"current-password",type:"password","error-messages":s(i).error},null,8,["modelValue","label","error-messages"])]),_:1},8,["isDialogVisible"])],64)}}});const Tt=ee(Ee,[["__scopeId","data-v-e1397e85"]]),Oe="/build/assets/avatar-14-f13f3dfe.png",Fe={ref:"refForm",class:"d-flex flex-column justify-center gap-4"},ze={class:"d-flex flex-wrap gap-2"},je={class:"d-none d-sm-block"},Le={key:0,class:"text-body-1 mb-0 text-error"},Me={key:1,class:"text-body-1 mb-0"},qe={class:"mb-0"},At=F({__name:"AccountSettingsAccount",props:{userData:{default:()=>({id:0,name:"",role:[],email:"",avatar:Oe})}},emits:["userUpdated","userDeleted"],setup($,{emit:p}){const d=$,c=p,o=w(structuredClone(z(d.userData)));ie(d,()=>{o.value=structuredClone(z(d.userData))});const g=()=>{o.value=structuredClone(z(d.userData))},b=w(""),f=w({email:void 0,name:void 0,avatar:void 0,password:void 0}),U=w(),x=w(!1),V=i=>{const u=new FileReader,{files:n}=i.target;n&&n.length&&(u.readAsDataURL(n[0]),u.onload=()=>{typeof u.result=="string"&&(o.value.avatar=u.result)})},C=J(),P=async()=>{if(o.value.id)try{await C.updateUser(o.value.id,o.value),f.value={},c("userUpdated",o.value)}catch(i){if(!i.response)throw i;if(i.response.status===422){const{errors:u}=i.response.data;f.value=u}}},T=async i=>{if(!(!i||!o.value.id)){try{await C.destroyAccount(o.value.id,b.value),f.value={},c("userDeleted"),x.value=!1}catch(u){if(!u.response)throw u;if(u.response.status===422){const{errors:n}=u.response.data;f.value=n}}b.value=""}};return(i,u)=>{const n=te;return v(),k(B,null,[e(E,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[e(S,{title:i.$t("Profile Details")},{default:t(()=>[e(h,{class:"d-flex"},{default:t(()=>[e(H,{rounded:"",size:"100",class:"me-6",image:s(o).avatar},null,8,["image"]),a("form",Fe,[a("div",ze,[e(y,{color:"primary",onClick:u[0]||(u[0]=r=>{var N;return(N=s(U))==null?void 0:N.click()})},{default:t(()=>[e(O,{icon:"tabler-cloud-upload",class:"d-sm-none"}),a("span",je,l(i.$t("Upload new photo")),1)]),_:1}),a("input",{ref_key:"refInputEl",ref:U,type:"file",name:"file",hidden:"",onInput:V},null,544)]),s(f).avatar?(v(),k("p",Le,l(s(f).avatar),1)):(v(),k("p",Me,l(i.$t("Allowed-ext")),1))],512)]),_:1}),e(X),e(h,{class:"pt-2"},{default:t(()=>[e(W,{class:"mt-6",onSubmit:q(P,["prevent"])},{default:t(()=>[e(E,null,{default:t(()=>[e(D,{md:"6",cols:"12"},{default:t(()=>[e(A,{modelValue:s(o).name,"onUpdate:modelValue":u[1]||(u[1]=r=>s(o).name=r),label:i.$t("First Name"),"error-messages":s(f).name},null,8,["modelValue","label","error-messages"])]),_:1}),e(D,{cols:"12",md:"6"},{default:t(()=>[e(A,{modelValue:s(o).email,"onUpdate:modelValue":u[2]||(u[2]=r=>s(o).email=r),label:i.$t("E-mail"),type:"email","error-messages":s(f).email},null,8,["modelValue","label","error-messages"])]),_:1}),e(D,{cols:"12",md:"6"},{default:t(()=>[e(ve,{modelValue:s(o).role,"onUpdate:modelValue":u[3]||(u[3]=r=>s(o).role=r),rules:[s(be)]},null,8,["modelValue","rules"])]),_:1}),e(D,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(y,{type:"submit"},{default:t(()=>[_(l(i.$t("Save changes")),1)]),_:1}),e(y,{color:"secondary",variant:"tonal",type:"reset",onClick:q(g,["prevent"])},{default:t(()=>[_(l(i.$t("Reset")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["title"])]),_:1}),e(D,{cols:"12"},{default:t(()=>[e(S,{title:i.$t("Delete Account")},{default:t(()=>[e(h,null,{default:t(()=>[e(we,{color:"warning",variant:"tonal",class:"mb-4"},{default:t(()=>[e(ge,{class:"mb-1"},{default:t(()=>[_(l(i.$t("confirmation-msg-1")),1)]),_:1}),a("p",qe,l(i.$t("confirmation-msg-2")),1)]),_:1}),e(y,{color:"error",class:"mt-3",onClick:u[4]||(u[4]=r=>x.value=!0)},{default:t(()=>[_(l(i.$t("Deactivate Account")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}),e(n,{isDialogVisible:s(x),"onUpdate:isDialogVisible":u[6]||(u[6]=r=>I(x)?x.value=r:null),"cancel-title":"Cancelled","confirm-title":"Unsubscribed!","confirm-msg":"Your subscription cancelled successfully.","confirmation-question":"Are you sure to cancel your subscription?","cancel-msg":"Unsubscription Cancelled!!",onConfirm:T},{default:t(()=>[a("form",null,[e(A,{modelValue:s(b),"onUpdate:modelValue":u[5]||(u[5]=r=>I(b)?b.value=r:null),label:i.$t("Confirm password"),autocomplete:"current-password",type:"password","error-messages":s(f).password},null,8,["modelValue","label","error-messages"])])]),_:1},8,["isDialogVisible"])],64)}}}),Qe={class:"my-6"},Ye={class:"d-flex mt-3 mb-2"},He={class:"text-base font-weight-medium"},We={class:"text-base font-weight-medium"},Xe={class:"mt-2"},Ge=F({__name:"FeatureProgress",props:{used:{},max:{},title:{},label:{}},setup($){const p=$,d=ue(()=>p.max<0?"∞":M(p.max-p.used));return(c,o)=>(v(),k("div",Qe,[a("div",Ye,[a("h6",He,l(c.title),1),e(ye),a("h6",We,l(s(M)(c.used))+" of "+l(c.max<0?"∞":s(M)(c.max))+" "+l(c.label),1)]),e(de,{rounded:"","rounded-bar":"","model-value":c.used,max:c.max,height:"10",color:"primary"},null,8,["model-value","max"]),a("p",Xe,l(s(d))+" "+l(c.label)+" remaining ",1)]))}}),Je=$=>(re("data-v-a7600c71"),$=$(),ne(),$),Ke={key:1,class:"text-5xl font-weight-medium"},Ze={class:"text-h4 mt-4"},et={class:"d-flex align-center me-4"},tt={class:"text-h6"},st=Je(()=>a("span",{class:"text-sm"},"Project Done",-1)),at={class:"text-sm text-uppercase text-disabled"},lt={class:"text-h6"},ot={class:"text-body-1"},rt={class:"text-h6"},nt={class:"text-body-1"},it={class:"text-h6 d-flex align-center"},ut={class:"d-flex gap-2 flex-wrap w-100 ml-2"},dt=F({__name:"UserBioPanel",props:{userData:{}},setup($){const p=$;return(d,c)=>(v(),R(E,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[p.userData?(v(),R(S,{key:0},{default:t(()=>[e(h,{class:"text-center pt-15"},{default:t(()=>[e(H,{rounded:"",size:100,color:p.userData.avatar?void 0:"primary",variant:p.userData.avatar?void 0:"tonal"},{default:t(()=>[p.userData.avatar?(v(),R(ce,{key:0,src:p.userData.avatar,cover:""},null,8,["src"])):(v(),k("span",Ke,l(s(Ve)(p.userData.name)),1))]),_:1},8,["color","variant"]),a("h6",Ze,l(p.userData.name),1)]),_:1}),e(h,{class:"d-flex justify-center flex-wrap mt-3"},{default:t(()=>[a("div",et,[e(H,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:t(()=>[e(O,{icon:"tabler-briefcase"})]),_:1}),a("div",null,[a("h6",tt,l(s(M)(9e4)),1),st])])]),_:1}),e(X),e(h,null,{default:t(()=>[a("p",at,l(d.$t("Details")),1),e(Z,{class:"card-list mt-2"},{default:t(()=>[e(L,null,{default:t(()=>[e(Y,null,{default:t(()=>[a("h6",lt,[_(l(d.$t("Username"))+": ",1),a("span",ot,l(p.userData.name),1)])]),_:1})]),_:1}),e(L,null,{default:t(()=>[e(Y,null,{default:t(()=>[a("h6",rt,[_(l(d.$t("Email"))+": ",1),a("span",nt,l(p.userData.email),1)])]),_:1})]),_:1}),e(L,null,{default:t(()=>[e(Y,null,{default:t(()=>[a("h6",it,[_(l(d.$t("Role"))+": ",1),a("div",ut,[(v(!0),k(B,null,Q(p.userData.role,(o,g)=>(v(),R(G,{key:g,label:"",color:"default",density:"comfortable"},{default:t(()=>[_(l(o),1)]),_:2},1024))),128))])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):K("",!0)]),_:1}),e(D,{cols:"12"},{default:t(()=>[e(S,null,{default:t(()=>[e(h,{class:"d-flex flex-wrap gap-1"},{default:t(()=>[(v(!0),k(B,null,Q(d.userData.role,o=>(v(),R(G,{key:o,label:"",color:"primary",size:"small",class:"font-weight-medium"},{default:t(()=>[_(l(o),1)]),_:2},1024))),128))]),_:1}),e(h,null,{default:t(()=>[e(Ge,{label:"projects",title:"Projects",max:20,used:5})]),_:1})]),_:1})]),_:1})]),_:1}))}});const Bt=ee(dt,[["__scopeId","data-v-a7600c71"]]);export{Tt as A,Bt as U,At as _};