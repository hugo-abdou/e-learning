import{U as y,_ as S,A as g}from"./UserBioPanel-4abe15f3.js";import{d as k,l as v,r as w,b5 as A,a6 as B,q as a,o as u,h as x,f as o,b as t,b0 as i,c as C,j as D,F as T,k as h,a0 as N,x as R,y as F}from"./main-dd42a7da.js";import{a as c,V as I}from"./VRow-fd71155e.js";import{V as P,a as W,b as m,c as $}from"./VWindowItem-23eb561f.js";import{b as p}from"./route-block-83d24a4e.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-6a6ad41d.js";import"./VInput-842a483e.js";import"./VTextField-5a655f9e.js";import"./VField-82170d56.js";import"./VForm-a596e7af.js";import"./VList-dcf79c63.js";import"./VDivider-730dc40b.js";import"./VTable-82ff6af5.js";import"./validators-753247d6.js";import"./RolesSelectBox.vue_vue_type_script_setup_true_lang-063fb638.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-4b71649a.js";import"./VSelect-609e0bfd.js";import"./VMenu-02af41c3.js";import"./VCheckboxBtn-3cb8d0e7.js";import"./VSelectionControl-819e6b68.js";import"./VChip-36ee8e62.js";import"./useRolesStore-aa747f23.js";import"./VAlert-609a2c03.js";import"./formatters-386d1040.js";import"./VSpacer-837f6556.js";import"./VSlideGroup-caee42ec.js";const j=k({__name:"[tab]",setup(q){const d=v(),s=w(d.params.tab),f=[{title:"Account",icon:"tabler-users",tab:"account"},{title:"Security",icon:"tabler-lock",tab:"security"}],l=A(),r=B(()=>l.user);return(b,n)=>{const _=y,V=S,U=g;return a(r)?(u(),x(I,{key:0},{default:o(()=>[t(c,{cols:"12",md:"5",lg:"4"},{default:o(()=>[t(_,{"user-data":a(r)},null,8,["user-data"])]),_:1}),t(c,{cols:"12",md:"7",lg:"8"},{default:o(()=>[t(P,{modelValue:a(s),"onUpdate:modelValue":n[0]||(n[0]=e=>i(s)?s.value=e:null),"show-arrows":"",class:"v-tabs-pill"},{default:o(()=>[(u(),C(T,null,D(f,e=>t($,{key:e.icon,value:e.tab,to:{name:"account-settings-tab",params:{tab:e.tab}}},{default:o(()=>[t(N,{size:"20",start:"",icon:e.icon},null,8,["icon"]),R(" "+F(b.$t(e.title)),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),t(W,{modelValue:a(s),"onUpdate:modelValue":n[1]||(n[1]=e=>i(s)?s.value=e:null),class:"mt-6 disable-tab-transition",touch:!1},{default:o(()=>[t(m,{value:"account"},{default:o(()=>[t(V,{"user-data":a(r),onUserUpdated:a(l).refreshUser,onUserDeleted:a(l).refreshUser},null,8,["user-data","onUserUpdated","onUserDeleted"])]),_:1}),t(m,{value:"security"},{default:o(()=>[t(U,{"user-data":a(r)},null,8,["user-data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):h("",!0)}}});typeof p=="function"&&p(j);export{j as default};
