import{_ as E}from"./AppTextField.vue_vue_type_script_setup_true_lang-63897ad5.js";import{_ as F}from"./AppSelect.vue_vue_type_script_setup_true_lang-e0cde11a.js";import{V as R,b as S,c as D,p as H,a as K}from"./VPagination-0f1eec06.js";import{d as O,s as g,I as q,o as u,g as C,x as e,z as a,at as w,aH as G,aS as J,as as B,e as s,v as d,ah as U,ar as c,C as i,ag as n,F as z,i as Q,f as b,aK as W,aR as X,D as k,aV as _,aU as I}from"./main-8c6cae95.js";import{u as Y}from"./useCourseStore-31bd629e.js";import{l as Z}from"./lodash-bc5bedbb.js";import{_ as ee}from"./ScheduleCourse.vue_vue_type_script_setup_true_lang-5f921b1c.js";import{V as M}from"./VDivider-4c3fc300.js";import{V as T}from"./VChip-bf88e46a.js";import{V as te}from"./VMenu-ca74f75b.js";import{V as ae,a as v,b as V}from"./VList-04d013c6.js";import"./VInput-74f983d3.js";import"./VTextField-41755040.js";import"./VCheckboxBtn-cc4c4e9f.js";import"./VTable-18f30e34.js";import"./_commonjsHelpers-042e6b4d.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-f18221d4.js";import"./VSpacer-51ef4cc1.js";const se={class:"d-flex justify-end flex-wrap gap-4"},le={class:"text-capitalize"},oe={class:"text-capitalize"},re={class:"v-avatar-group pa-2 staked-images"},ie={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},ne={class:"text-sm text-disabled mb-0"},ue=O({__name:"index",setup(de){const h=g(null),p=g(0),P=g([]),o=g({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),y=Y(),N=l=>y.deleteCourse(l).then(m),j=l=>y.publishCourse(l).then(m),m=Z.debounce(()=>{y.getCourses({...o.value,additional:{hasMedia:!0}}).then(({data:l,meta:r})=>{P.value=l,p.value=r.total})},500),A=[{title:"Title",key:"title"},{title:"Media",key:"media",width:"70",sortable:!1},{title:"Status",key:"status",width:"70"},{title:"Difficulty",key:"difficulty",width:"70"},{title:"",key:"actions",sortable:!1,width:"70"}];return q(Object.keys(o.value).map(l=>()=>o.value[l]),([l,r,$])=>{m()}),(l,r)=>{const $=F,L=E;return u(),C("section",null,[e(B,null,{default:a(()=>[e(w,{cols:"12"},{default:a(()=>[e(G,{title:l.$t("Cours")},{default:a(()=>[e(J,null,{default:a(()=>[e(B,{align:"end"},{default:a(()=>[e(w,{cols:"12",sm:"2"},{default:a(()=>[e($,{label:l.$t("Items Per Page"),items:[10,20,50,100],modelValue:s(o).itemsPerPage,"onUpdate:modelValue":r[0]||(r[0]=t=>s(o).itemsPerPage=t)},null,8,["label","modelValue"])]),_:1}),e(w,{class:"d-flex gap-5"},{default:a(()=>[e(L,{modelValue:s(o).search,"onUpdate:modelValue":r[1]||(r[1]=t=>s(o).search=t),placeholder:l.$t("Search"),density:"compact"},null,8,["modelValue","placeholder"]),d("div",se,[e(U,{"prepend-icon":"tabler-plus",to:{name:"course-create"}},{default:a(()=>[c(i(l.$t("Add New Cour")),1)]),_:1})])]),_:1})]),_:1})]),_:1}),e(M),e(s(R),{"items-per-page":s(o).itemsPerPage,"onUpdate:itemsPerPage":r[3]||(r[3]=t=>s(o).itemsPerPage=t),page:s(o).page,"onUpdate:page":r[4]||(r[4]=t=>s(o).page=t),items:s(P),"items-length":s(p),headers:A.map(t=>({...t,title:l.$t(t.title)})),class:"text-no-wrap","onUpdate:options":r[5]||(r[5]=t=>o.value=t)},{"item.status":a(({item:t})=>[e(T,{color:s(S)(t.raw.status).color},{default:a(()=>[e(n,{icon:s(S)(t.raw.status).icon,class:"ma-1"},null,8,["icon"]),d("span",le,i(t.raw.status),1)]),_:2},1032,["color"])]),"item.difficulty":a(({item:t})=>[e(T,{color:s(D)(t.raw.difficulty).color},{default:a(()=>[e(n,{icon:s(D)(t.raw.difficulty).icon,class:"ma-1"},null,8,["icon"]),d("span",oe,i(t.raw.difficulty),1)]),_:2},1032,["color"])]),"item.media":a(({item:t})=>[d("div",re,[(u(!0),C(z,null,Q(t.raw.media,(f,x)=>(u(),C(z,{key:x},[x<4?(u(),b(W,{key:0,variant:"text",rounded:"lg",style:{width:"70px"},size:"52"},{default:a(()=>[e(X,{cover:"",src:f},null,8,["src"])]),_:2},1024)):k("",!0)],64))),128))])]),"item.actions":a(({item:t})=>[e(U,{icon:"",variant:"text",size:"small",color:"medium-emphasis"},{default:a(()=>[e(n,{size:"24",icon:"tabler-dots-vertical"}),e(te,{activator:"parent"},{default:a(()=>[e(ae,null,{default:a(()=>[e(v,null,{prepend:a(()=>[e(n,{icon:"tabler-eye"})]),default:a(()=>[e(V,null,{default:a(()=>[c(i(l.$t("View")),1)]),_:1})]),_:1}),t.raw.status===s(_).Draft||t.raw.status===s(_).Error?(u(),b(v,{key:0,onClick:f=>j(t.raw.id)},{prepend:a(()=>[e(n,{icon:"material-symbols:publish-rounded"})]),default:a(()=>[e(V,null,{default:a(()=>[c(i(l.$t("Publish")),1)]),_:1})]),_:2},1032,["onClick"])):k("",!0),t.raw.status===s(_).Draft||t.raw.status===s(_).Scheduled?(u(),b(v,{key:1,onClick:f=>h.value=t.raw.id},{prepend:a(()=>[e(n,{icon:"solar:calendar-broken"})]),default:a(()=>[e(V,null,{default:a(()=>[c(i(l.$t("Schedule publish")),1)]),_:1})]),_:2},1032,["onClick"])):k("",!0),e(v,{onClick:f=>N(t.raw.id)},{prepend:a(()=>[e(n,{icon:"tabler-trash"})]),default:a(()=>[e(V,null,{default:a(()=>[c(i(l.$t("Delete")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[e(M),d("div",ie,[d("p",ne,i(s(H)(s(o),s(p))),1),e(K,{"model-value":s(o).page,"onUpdate:modelValue":r[2]||(r[2]=t=>o.value={...s(o),page:t}),length:Math.ceil(s(p)/s(o).itemsPerPage),"total-visible":l.$vuetify.display.xs?1:Math.ceil(s(p)/s(o).itemsPerPage)},null,8,["model-value","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length","headers"])]),_:1},8,["title"]),e(ee,{onDone:r[6]||(r[6]=t=>(h.value=null,s(m)())),"course-id":s(h)},null,8,["course-id"])]),_:1})]),_:1})])}}});typeof I=="function"&&I(ue);export{ue as default};
