import{U,_ as v,A as y}from"./UserBioPanel-ebc163d4.js";import{t as S,a3 as g,r as A,Q as k,aA as w,H as o,v as l,z as B,A as a,n as t,L as m,x as C,y as x,F as D,a2 as T,C as N,aa as R,E as h}from"./plugins-20f6c63a.js";import{a as u,V as z}from"./VRow-9970c9d9.js";import{V as E,a as F,b as p,c as I}from"./VWindowItem-e6809476.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-5a82d17e.js";import"./VInput-df115ab9.js";import"./index-755f2f9e.js";import"./VTextField-24d0bc09.js";import"./VField-78f5f7c6.js";import"./forwardRefs-6ea3df5c.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-58e41beb.js";import"./VCard-30e4f82a.js";import"./VCardActions-aebc9678.js";import"./createSimpleFunctional-991d7489.js";import"./VAvatar-d93e5e0c.js";import"./VCardText-d52ac2bc.js";import"./VForm-d5279851.js";import"./VDialog-b5e757d9.js";import"./VOverlay-d4a32956.js";import"./scopeId-3cd861c8.js";import"./dialog-transition-beb6505c.js";import"./VList-a614effd.js";import"./ssrBoot-2d263cb5.js";import"./VDivider-371081d3.js";import"./VTable-a0a3ceae.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./validators-6e538dce.js";import"./RolesSelectBox.vue_vue_type_script_setup_true_lang-7c6b8986.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-9bd5cab5.js";import"./VSelect-9fed1c22.js";import"./VMenu-baca4a70.js";import"./VCheckboxBtn-2871d378.js";import"./VSelectionControl-32c86160.js";import"./VChip-99c6b32d.js";import"./useRolesStore-f51b5ef4.js";import"./VAlert-860ddd86.js";import"./formatters-386d1040.js";import"./VSpacer-65846308.js";import"./VSlideGroup-ee562ac5.js";const kt=S({__name:"[tab]",setup(L){const c=g(),r=A(c.params.tab),d=[{title:"Account",icon:"tabler-users",tab:"account"},{title:"Security",icon:"tabler-lock",tab:"security"}],n=k(),s=w(()=>n.user);return(f,i)=>{const _=U,b=v,V=y;return o(s)?(l(),B(z,{key:0},{default:a(()=>[t(u,{cols:"12",md:"5",lg:"4"},{default:a(()=>[t(_,{"user-data":o(s)},null,8,["user-data"])]),_:1}),t(u,{cols:"12",md:"7",lg:"8"},{default:a(()=>[t(E,{modelValue:o(r),"onUpdate:modelValue":i[0]||(i[0]=e=>m(r)?r.value=e:null),"show-arrows":"",class:"v-tabs-pill"},{default:a(()=>[(l(),C(D,null,x(d,e=>t(I,{key:e.icon,value:e.tab,to:{name:"account-settings-tab",params:{tab:e.tab}}},{default:a(()=>[t(N,{size:"20",start:"",icon:e.icon},null,8,["icon"]),R(" "+h(f.$t(e.title)),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),t(F,{modelValue:o(r),"onUpdate:modelValue":i[1]||(i[1]=e=>m(r)?r.value=e:null),class:"mt-6 disable-tab-transition",touch:!1},{default:a(()=>[t(p,{value:"account"},{default:a(()=>[t(b,{"user-data":o(s),onUserUpdated:o(n).refreshUser,onUserDeleted:o(n).refreshUser},null,8,["user-data","onUserUpdated","onUserDeleted"])]),_:1}),t(p,{value:"security"},{default:a(()=>[t(V,{"user-data":o(s)},null,8,["user-data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):T("",!0)}}});export{kt as default};