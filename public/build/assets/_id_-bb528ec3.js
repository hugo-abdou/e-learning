import{u as U}from"./useUserListStore-d7e79ef5.js";import{U as k,V as g,a as y,_ as S,A as B}from"./UserBioPanel-93bb4aeb.js";import{d as v,da as w,t as u,e as r,o as d,f as N,B as a,y as e,aj as m,N as p,i as C,F as D,j as A,G as L,w as R,D as T,ai as $,H as j,as as c}from"./main-834b9cca.js";import{V as x,a as f}from"./VWindowItem-084b9a9a.js";import"./VSlideGroup-ad26eaaa.js";import"./validators-f52bbb1d.js";import"./RolesSelectBox.vue_vue_type_script_setup_true_lang-c74758d4.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-3c530a2c.js";import"./VInput-586caf66.js";import"./VTextField-87129457.js";import"./VList-483d2f15.js";import"./VDivider-b2b5b2f6.js";import"./VMenu-ec466a7c.js";import"./VCheckboxBtn-7bb82281.js";import"./VChip-7003a31a.js";import"./VForm-c1dcf649.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-5287073f.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-b4d7dd43.js";import"./VTable-00e944d3.js";import"./formatters-3b7fec12.js";import"./VSpacer-447b73cb.js";const F=v({__name:"[id]",setup(I){const V=U(),_=w(),l=u(),o=u(null),b=[{icon:"tabler-user-check",title:"Account Settings",condition:!0},{icon:"tabler-lock",title:"Security",condition:!0}];function n(){V.fetchUser(Number(_.params.id)).then(({data:i})=>l.value=i)}return n(),(i,s)=>r(l)?(d(),N($,{key:0},{default:a(()=>[e(m,{cols:"12",md:"5",lg:"4"},{default:a(()=>[e(k,{"user-data":r(l)},null,8,["user-data"])]),_:1}),e(m,{cols:"12",md:"7",lg:"8"},{default:a(()=>[e(g,{modelValue:r(o),"onUpdate:modelValue":s[0]||(s[0]=t=>p(o)?o.value=t:null),class:"v-tabs-pill"},{default:a(()=>[(d(),C(D,null,A(b,t=>e(y,{key:t.icon,disabled:!t.condition},{default:a(()=>[e(L,{size:18,icon:t.icon,class:"me-1"},null,8,["icon"]),R("span",null,T(t.title),1)]),_:2},1032,["disabled"])),64))]),_:1},8,["modelValue"]),e(x,{modelValue:r(o),"onUpdate:modelValue":s[2]||(s[2]=t=>p(o)?o.value=t:null),class:"mt-6 disable-tab-transition",touch:!1},{default:a(()=>[e(f,null,{default:a(()=>[e(S,{"user-data":r(l),onUserUpdated:n,onUserDeleted:s[1]||(s[1]=t=>i.$router.push({name:"users"}))},null,8,["user-data"])]),_:1}),e(f,null,{default:a(()=>[e(B,{"user-data":r(l)},null,8,["user-data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):j("",!0)}});typeof c=="function"&&c(F);export{F as default};
