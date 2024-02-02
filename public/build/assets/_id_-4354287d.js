import{u as b}from"./useUserListStore-9152ac57.js";import{U,_ as g,A as k}from"./UserBioPanel-33b749c5.js";import{t as S,a3 as v,r as n,H as s,v as u,z as y,A as o,n as t,L as p,x as B,y as C,F as w,a2 as A,C as D,D as L,E as N}from"./plugins-900eb03f.js";import{a as d,V as x}from"./VRow-bc79db32.js";import{V as R,a as T,b as c,c as $}from"./VWindowItem-0098adf9.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-5c78031b.js";import"./VInput-d19eb2fc.js";import"./index-e8fbdf01.js";import"./VTextField-e9152184.js";import"./VField-b7aa3867.js";import"./forwardRefs-6ea3df5c.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-65a3d6cf.js";import"./VCard-6d8b9f87.js";import"./VCardActions-6ec0444f.js";import"./createSimpleFunctional-e9ee8020.js";import"./VAvatar-98f875d9.js";import"./VCardText-65c366cb.js";import"./VForm-4f08ce3e.js";import"./VDialog-bc9d1454.js";import"./VOverlay-d2f68a91.js";import"./scopeId-b697eb6c.js";import"./dialog-transition-eb9759aa.js";import"./VList-ff1b2c79.js";import"./ssrBoot-8b4eb22d.js";import"./VDivider-bf01317e.js";import"./VTable-22264b0b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./validators-229769c7.js";import"./RolesSelectBox.vue_vue_type_script_setup_true_lang-5cc91791.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-a346bd8f.js";import"./VSelect-bce5aa79.js";import"./VMenu-479530dd.js";import"./VCheckboxBtn-e9892fb1.js";import"./VSelectionControl-9eb14a8c.js";import"./VChip-b4e7b548.js";import"./useRolesStore-4adf16e1.js";import"./VAlert-f1d0655f.js";import"./formatters-386d1040.js";import"./VSpacer-35711271.js";import"./VSlideGroup-b88ed46b.js";const vt=S({__name:"[id]",setup(z){const f=b(),V=v(),i=n(),r=n(null),_=[{icon:"tabler-user-check",title:"Account Settings",condition:!0},{icon:"tabler-lock",title:"Security",condition:!0}];function m(){f.fetchUser(Number(V.params.id)).then(({data:l})=>i.value=l)}return m(),(l,a)=>s(i)?(u(),y(x,{key:0},{default:o(()=>[t(d,{cols:"12",md:"5",lg:"4"},{default:o(()=>[t(U,{"user-data":s(i)},null,8,["user-data"])]),_:1}),t(d,{cols:"12",md:"7",lg:"8"},{default:o(()=>[t(R,{modelValue:s(r),"onUpdate:modelValue":a[0]||(a[0]=e=>p(r)?r.value=e:null),class:"v-tabs-pill"},{default:o(()=>[(u(),B(w,null,C(_,e=>t($,{key:e.icon,disabled:!e.condition},{default:o(()=>[t(D,{size:18,icon:e.icon,class:"me-1"},null,8,["icon"]),L("span",null,N(e.title),1)]),_:2},1032,["disabled"])),64))]),_:1},8,["modelValue"]),t(T,{modelValue:s(r),"onUpdate:modelValue":a[2]||(a[2]=e=>p(r)?r.value=e:null),class:"mt-6 disable-tab-transition",touch:!1},{default:o(()=>[t(c,null,{default:o(()=>[t(g,{"user-data":s(i),onUserUpdated:m,onUserDeleted:a[1]||(a[1]=e=>l.$router.push({name:"users"}))},null,8,["user-data"])]),_:1}),t(c,null,{default:o(()=>[t(k,{"user-data":s(i)},null,8,["user-data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):A("",!0)}});export{vt as default};