import{_ as k}from"./AppTextField.vue_vue_type_script_setup_true_lang-5a82d17e.js";import{_ as L}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-58e41beb.js";import{a as M,b as j,c as q,V as E}from"./VCard-30e4f82a.js";import{V as S}from"./VCardText-d52ac2bc.js";import{V as z}from"./VForm-d5279851.js";import{V as H}from"./VAlert-860ddd86.js";import{t as T,r,w as $,v as b,z as x,A as a,n as s,aa as u,E as _,D as m,H as t,L as V,B as h,x as I,y as W,F as G,s as A}from"./plugins-20f6c63a.js";import{V as J}from"./VCheckbox-d809b236.js";import{V as K}from"./VDialog-b5e757d9.js";import{_ as O}from"./AppSelect.vue_vue_type_script_setup_true_lang-9bd5cab5.js";import{u as Q}from"./useRolesStore-f51b5ef4.js";import{p as X}from"./utils-75e2a70f.js";import{a as B,V as Y}from"./VRow-9970c9d9.js";import{V as U}from"./VDivider-371081d3.js";import{V as Z}from"./VDataTableServer-0ffc7464.js";import{V as ee}from"./VPagination-32d7de4c.js";import{V as se}from"./VChip-99c6b32d.js";import"./VInput-df115ab9.js";import"./index-755f2f9e.js";import"./VTextField-24d0bc09.js";import"./VField-78f5f7c6.js";import"./forwardRefs-6ea3df5c.js";import"./VCardActions-aebc9678.js";import"./createSimpleFunctional-991d7489.js";import"./VAvatar-d93e5e0c.js";import"./VCheckboxBtn-2871d378.js";import"./VSelectionControl-32c86160.js";import"./VOverlay-d4a32956.js";import"./scopeId-3cd861c8.js";import"./dialog-transition-beb6505c.js";import"./VSelect-9fed1c22.js";import"./VList-a614effd.js";import"./ssrBoot-2d263cb5.js";import"./VMenu-baca4a70.js";import"./VTable-a0a3ceae.js";const te={class:"d-flex align-end gap-3 mb-3"},ae=T({__name:"AddEditPermissionDialog",props:{isDialogVisible:{type:Boolean},permissionName:{default:""}},emits:["update:isDialogVisible","update:permissionName"],setup(D,{emit:P}){const n=D,p=P,l=r(""),o=()=>{p("update:isDialogVisible",!1),l.value=""},c=()=>{p("update:isDialogVisible",!1),p("update:permissionName",l.value)};return $(n,()=>{l.value=n.permissionName}),(g,f)=>{const v=L,y=k;return b(),x(K,{width:g.$vuetify.display.smAndDown?"auto":600,"model-value":n.isDialogVisible,"onUpdate:modelValue":o},{default:a(()=>[s(v,{onClick:o}),s(E,{class:"pa-sm-8 pa-5"},{default:a(()=>[s(M,{class:"text-center"},{default:a(()=>[s(j,{class:"text-h5"},{default:a(()=>[u(_(n.permissionName?"Edit":"Add")+" Permission ",1)]),_:1}),s(q,null,{default:a(()=>[u(_(n.permissionName?"Edit":"Add")+" permission as per your requirements. ",1)]),_:1})]),_:1}),s(S,{class:"mt-1"},{default:a(()=>[s(z,null,{default:a(()=>[s(H,{type:"warning",title:"Warning!",variant:"tonal",class:"mb-6"},{default:a(()=>[u(" By editing the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding. ")]),_:1}),m("div",te,[s(y,{modelValue:t(l),"onUpdate:modelValue":f[0]||(f[0]=w=>V(l)?l.value=w:null),density:"compact",label:"Permission Name",placeholder:"Enter Permission Name"},null,8,["modelValue"]),s(h,{onClick:c},{default:a(()=>[u(" Update ")]),_:1})]),s(J,{label:"Set as core permission"})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}});const ie=m("h5",{class:"text-h4 mb-6"},"Permissions List",-1),oe=m("p",{class:"mb-0"}," Each category (Basic, Professional, and Business) includes the four predefined roles shown below. ",-1),le={class:"d-flex align-center gap-4 flex-wrap"},re={class:"d-flex gap-2"},ne={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},me={class:"text-sm text-medium-emphasis mb-0"},We=T({__name:"index",setup(D){const P=[{title:"Name",key:"name"},{title:"Assigned To",key:"roles",sortable:!1},{title:"Created Date",key:"created_at",sortable:!1}],n=r(),p=r(""),l=r(0),o=r({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),c=r(!1),g=r(!1),f=r(""),v=r(1),y=Q();return $(()=>o.value.itemsPerPage,async()=>{var i;const d=await y.fetchPermissions(o.value);n.value=d.data,d.meta&&(v.value=d.meta.total/d.meta.per_page||0,l.value=((i=d.meta)==null?void 0:i.total)||0)},{immediate:!0}),(d,i)=>{const F=O,R=k,N=ae;return b(),x(Y,null,{default:a(()=>[s(B,{cols:"12"},{default:a(()=>[ie,oe]),_:1}),s(B,{cols:"12"},{default:a(()=>[s(E,null,{default:a(()=>[s(S,{class:"d-flex align-center justify-space-between flex-wrap gap-4"},{default:a(()=>[s(F,{modelValue:t(o).itemsPerPage,"onUpdate:modelValue":i[0]||(i[0]=e=>t(o).itemsPerPage=e),items:[10,20,50,100],style:{width:"5rem"}},null,8,["modelValue"]),m("div",le,[s(R,{modelValue:t(p),"onUpdate:modelValue":i[1]||(i[1]=e=>V(p)?p.value=e:null),placeholder:"Search",density:"compact",style:{width:"12.5rem"}},null,8,["modelValue"])])]),_:1}),s(U),s(t(Z),{"items-per-page":t(o).itemsPerPage,"onUpdate:itemsPerPage":i[3]||(i[3]=e=>t(o).itemsPerPage=e),page:t(o).page,"onUpdate:page":i[4]||(i[4]=e=>t(o).page=e),"items-length":t(l),headers:P,items:t(n),class:"text-medium-emphasis text-no-wrap","onUpdate:options":i[5]||(i[5]=e=>o.value=e)},{"item.roles":a(({item:e})=>[m("div",re,[(b(!0),I(G,null,W(e.roles,C=>(b(),x(se,{key:C,color:"primary",label:"",class:"font-weight-medium"},{default:a(()=>[u(_(C),1)]),_:2},1024))),128))])]),bottom:a(()=>[s(U),m("div",ne,[m("p",me,_(t(X)(t(o),t(l))),1),s(ee,{modelValue:t(o).page,"onUpdate:modelValue":i[2]||(i[2]=e=>t(o).page=e),length:Math.ceil(t(l)/t(o).itemsPerPage),"total-visible":d.$vuetify.display.xs?1:Math.ceil(t(l)/t(o).itemsPerPage)},{prev:a(e=>[s(h,A({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Previous ")]),_:2},1040)]),next:a(e=>[s(h,A({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),"item.created_at":a(({item:e})=>[m("span",null,_(e.created_at),1)]),_:1},8,["items-per-page","page","items-length","items"])]),_:1}),s(N,{isDialogVisible:t(c),"onUpdate:isDialogVisible":i[6]||(i[6]=e=>V(c)?c.value=e:null),"permission-name":t(f),"onUpdate:permissionName":i[7]||(i[7]=e=>V(f)?f.value=e:null)},null,8,["isDialogVisible","permission-name"]),s(N,{isDialogVisible:t(g),"onUpdate:isDialogVisible":i[8]||(i[8]=e=>V(g)?g.value=e:null)},null,8,["isDialogVisible"])]),_:1})]),_:1})}}});export{We as default};