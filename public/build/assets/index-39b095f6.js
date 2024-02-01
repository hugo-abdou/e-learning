import{f as F}from"./formatters-386d1040.js";import{_ as O}from"./DateTimePicker.vue_vue_type_style_index_0_lang-f35c6110.js";import{d as I,r as f,o as n,h as d,f as s,b as a,bg as R,V as G,am as w,y as k,q as t,b4 as N,cf as H,cg as J,w as K,bb as W,bh as X,e as h,z as u,b_ as Y,aU as Z,b$ as U,e_ as m,a4 as B,c as ee,k as y,c2 as te,bF as ae}from"./main-83f81ad7.js";import{_ as le}from"./InfoTooltip.vue_vue_type_script_setup_true_lang-7165c29f.js";import{_ as se}from"./AppTextField.vue_vue_type_script_setup_true_lang-7e68b421.js";import{_ as ie}from"./AppSelect.vue_vue_type_script_setup_true_lang-b3c9fd04.js";import{u as T}from"./useQuizzesStore-03bccf3d.js";import{l as oe}from"./lodash-c2667fb2.js";import{V as j,a as S}from"./VRow-4a6d7b26.js";import{V as q}from"./VDivider-1b4c54ac.js";import{V as ne}from"./VDataTableServer-27e4f63c.js";import{V as re}from"./VTooltip-29248371.js";import{V as ue}from"./VMenu-2063156d.js";import{V as de,a as _}from"./VList-26f98dda.js";import"./component-769f8347.js";import"./VField-d76a4324.js";import"./VInput-c65df7da.js";import"./VTextField-d890cb14.js";import"./VSelect-241a8653.js";import"./VCheckboxBtn-29b3e515.js";import"./VSelectionControl-a9b789af.js";import"./VTable-5fc5d78e.js";import"./ssrBoot-7be77cee.js";const pe=I({__name:"ScheduleDialog",props:{isDialogVisible:{type:Boolean}},emits:["select","update:isDialogVisible"],setup(x,{emit:g}){const p=x,v=g,r=f(new Date().toISOString()),i=()=>{v("select",r.value)},z=()=>v("update:isDialogVisible",!1);return(b,P)=>{const V=J,$=O;return n(),d(H,{"model-value":p.isDialogVisible,"onUpdate:modelValue":z,width:"266"},{default:s(()=>[a(V,{onClick:z}),a($,{modelValue:t(r),"onUpdate:modelValue":P[0]||(P[0]=c=>N(r)?r.value=c:null),class:"w-100",config:{inline:!0}},{default:s(()=>[a(R,{class:"d-flex justify-space-between pt-2 border-t"},{default:s(()=>[a(G),a(w,{size:"small",variant:"flat",onClick:i},{default:s(()=>[k(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model-value"])}}}),ce={class:"d-flex justify-end flex-wrap gap-4"},me={class:"truncate",style:{"max-width":"10vw"}},fe={class:"text-capitalize ml-1"},ge={key:0,class:"text-capitalize ml-1"},ve={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},_e={class:"text-sm text-disabled mb-0"},Ae=I({__name:"index",setup(x){const g=f(null),p=f(0),v=f([]),r=f(!1),i=f({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),z=T(),b=oe.debounce(()=>{v.value.length||(r.value=!0),z.getQuizzes({params:i.value}).then(({data:l,meta:o})=>{v.value=l,p.value=o.total}).finally(()=>r.value=!1)},500),P=[{title:"Title",key:"title"},{title:"Description",key:"description"},{title:"Status",key:"status"},{title:"Created at",key:"created_at"},{title:"",key:"actions",sortable:!1,width:70}];K(Object.keys(i.value).map(l=>()=>i.value[l]),([l,o,Q])=>{b()});const V=T(),$=l=>V.deleteQuiz(l).then(b),c=f(!1),E=l=>{g.value&&V.scheduleQuiz(g.value,l).finally(()=>{c.value=!1,g.value=null,b()})},D=(l,o="Published")=>V.publishQuiz(l,o).then(b);return(l,o)=>{const Q=ie,M=se,A=le,L=pe;return n(),d(j,null,{default:s(()=>[a(S,{cols:"12"},{default:s(()=>[a(W,{title:l.$t("Quizzes")},{default:s(()=>[a(X,null,{default:s(()=>[a(j,{align:"end"},{default:s(()=>[a(S,{cols:"12",sm:"2"},{default:s(()=>[a(Q,{modelValue:t(i).itemsPerPage,"onUpdate:modelValue":o[0]||(o[0]=e=>t(i).itemsPerPage=e),label:l.$t("Items Per Page"),items:[10,20,50,100]},null,8,["modelValue","label"])]),_:1}),a(S,{class:"d-flex gap-5"},{default:s(()=>[a(M,{modelValue:t(i).search,"onUpdate:modelValue":o[1]||(o[1]=e=>t(i).search=e),placeholder:l.$t("Search"),density:"compact"},null,8,["modelValue","placeholder"]),h("div",ce,[a(w,{"prepend-icon":"tabler-plus",to:{name:"quizzes-create"}},{default:s(()=>[k(u(l.$t("New Quiz")),1)]),_:1})])]),_:1})]),_:1})]),_:1}),a(q),a(t(ne),{"items-per-page":t(i).itemsPerPage,"onUpdate:itemsPerPage":o[3]||(o[3]=e=>t(i).itemsPerPage=e),page:t(i).page,"onUpdate:page":o[4]||(o[4]=e=>t(i).page=e),items:t(v),"items-length":t(p),headers:P.map(e=>({...e,title:l.$t(e.title)})),class:"text-no-wrap",loading:t(r),"onUpdate:options":o[5]||(o[5]=e=>i.value=e)},{loading:s(()=>[a(t(Y),{class:"pt-2",type:["table-tbody"]})]),"item.title":s(({item:e})=>[k(u(e.title)+" - ("+u(e.duration)+" min) ",1)]),"item.description":s(({item:e})=>[h("div",me,[a(re,{"max-width":"400",activator:"parent"},{default:s(()=>[k(u(e.description),1)]),_:2},1024),k(" "+u(e.description),1)])]),"item.status":s(({item:e})=>[a(Z,{color:t(U)(e.status).color},{prepend:s(()=>[e.status===t(m).Scheduled?(n(),d(A,{key:0,icon:"mdi-clock-time-five-outline",text:("formatDate"in l?l.formatDate:t(F))(e.schedule_at)},null,8,["text"])):(n(),d(B,{key:1,icon:t(U)(e.status).icon},null,8,["icon"]))]),default:s(()=>[h("span",fe,u(e.status),1),e.status===t(m).Error?(n(),ee("span",ge,u(`#${e.id}`),1)):y("",!0)]),_:2},1032,["color"])]),"item.actions":s(({item:e})=>[a(w,{icon:"",variant:"text",size:"x-small",color:"medium-emphasis"},{default:s(()=>[a(B,{size:"24",icon:"tabler-dots-vertical"}),a(ue,{activator:"parent"},{default:s(()=>[a(de,null,{default:s(()=>[a(_,{"prepend-icon":"tabler-edit",title:l.$t("Edit")},null,8,["title"]),e.status===t(m).Published?(n(),d(_,{key:0,onClick:C=>D(e.id,"Closed"),"prepend-icon":"material-symbols:close-rounded",title:l.$t("Close")},null,8,["onClick","title"])):y("",!0),e.status===t(m).Published?(n(),d(_,{key:1,onClick:C=>D(e.id,"Private"),"prepend-icon":"material-symbols:private-connectivity-outline",title:l.$t("Private")},null,8,["onClick","title"])):y("",!0),e.status!==t(m).Published?(n(),d(_,{key:2,onClick:C=>D(e.id),"prepend-icon":"material-symbols:publish-rounded",title:l.$t("Publish")},null,8,["onClick","title"])):y("",!0),e.status===t(m).Draft||e.status===t(m).Scheduled?(n(),d(_,{key:3,onClick:C=>(c.value=!0,g.value=e.id),"prepend-icon":"solar:calendar-broken",title:l.$t("Schedule publish")},null,8,["onClick","title"])):y("",!0),a(_,{"prepend-icon":"tabler-trash",title:l.$t("Delete"),onClick:C=>$(e.id)},null,8,["title","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:s(()=>[a(q),h("div",ve,[h("p",_e,u(t(te)(t(i),t(p))),1),a(ae,{"model-value":t(i).page,length:Math.ceil(t(p)/t(i).itemsPerPage),"total-visible":l.$vuetify.display.xs?1:Math.ceil(t(p)/t(i).itemsPerPage),"onUpdate:modelValue":o[2]||(o[2]=e=>i.value={...t(i),page:e})},null,8,["model-value","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length","headers","loading"])]),_:1},8,["title"]),a(L,{onSelect:E,"is-dialog-visible":t(c),"onUpdate:isDialogVisible":o[6]||(o[6]=e=>N(c)?c.value=e:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1})}}});export{Ae as default};