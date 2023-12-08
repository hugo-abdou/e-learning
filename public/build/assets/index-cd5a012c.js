import{_ as R}from"./CourseScheduleDialog.vue_vue_type_script_setup_true_lang-8a40efdf.js";import{_ as F}from"./InfoTooltip.vue_vue_type_script_setup_true_lang-ecafc509.js";import{_ as O}from"./AppTextField.vue_vue_type_script_setup_true_lang-9a376451.js";import{_ as X}from"./AppSelect.vue_vue_type_script_setup_true_lang-a7a7495d.js";import{f as Y}from"./formatters-386d1040.js";import{u as q}from"./useCourseStore-0ce2d981.js";import{r as S,a as w,p as G}from"./utils-02cb9413.js";import{d as H,r as f,w as J,a as K,o as d,c as D,b as a,f as s,b8 as Q,be as W,p as t,e as n,aj as z,v as p,x as r,bX as Z,bY as c,h as g,a0 as u,z as k}from"./main-bf1e147a.js";import{l as ee}from"./lodash-9a6b90ef.js";import{a as x,V as B}from"./VRow-237f35d1.js";import{V as T}from"./VDivider-10750490.js";import{V as te}from"./VDataTableServer-9a927db9.js";import{V as L}from"./VChip-99d3a2f1.js";import{V as ae}from"./VMenu-b27c9714.js";import{V as se,a as h,b as v}from"./VList-46cfde8a.js";import{V as oe}from"./VPagination-7245e57a.js";import"./DateTimePicker.vue_vue_type_style_index_0_lang-e38cae72.js";import"./component-898c5da5.js";import"./VField-7b33dc59.js";import"./VInput-86d12209.js";import"./VSpacer-e581b474.js";import"./VTooltip-e00e27ba.js";import"./VTextField-7f141e42.js";import"./VSelect-6736634e.js";import"./VCheckboxBtn-1d890643.js";import"./VSelectionControl-95f455fb.js";import"./VTable-1c616dab.js";const le={class:"d-flex justify-end flex-wrap gap-4"},ie={class:"d-flex align-center gap-2 py-2 text-capitalize"},re={class:"d-flex flex-column"},ne={class:"text-base"},ue={class:"text-capitalize ml-1"},de={key:0,class:"text-capitalize ml-1"},pe={class:"text-capitalize"},ce={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},me={class:"text-sm text-disabled mb-0"},Fe=H({__name:"index",setup(fe){const V=f(null),m=f(0),y=f([]),b=f(!1),l=f({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),C=q(),U=o=>C.deleteCourse(o).then(_),j=o=>C.publishCourse(o).then(_),_=ee.debounce(()=>{y.value.length||(b.value=!0),C.getCourses(l.value).then(({data:o,meta:i})=>{y.value=o,m.value=i.total}).finally(()=>b.value=!1)},500),E=[{title:"Title",key:"title"},{title:"Status",key:"status",width:70},{title:"Difficulty",key:"difficulty",width:70},{title:"",key:"actions",sortable:!1,width:70}];return J(Object.keys(l.value).map(o=>()=>l.value[o]),([o,i,P])=>{_()}),(o,i)=>{const P=X,I=O,N=K("RouterLink"),M=F,A=R;return d(),D("section",null,[a(B,null,{default:s(()=>[a(x,{cols:"12"},{default:s(()=>[a(Q,{title:o.$t("Cours")},{default:s(()=>[a(W,null,{default:s(()=>[a(B,{align:"end"},{default:s(()=>[a(x,{cols:"12",sm:"2"},{default:s(()=>[a(P,{modelValue:t(l).itemsPerPage,"onUpdate:modelValue":i[0]||(i[0]=e=>t(l).itemsPerPage=e),label:o.$t("Items Per Page"),items:[10,20,50,100]},null,8,["modelValue","label"])]),_:1}),a(x,{class:"d-flex gap-5"},{default:s(()=>[a(I,{modelValue:t(l).search,"onUpdate:modelValue":i[1]||(i[1]=e=>t(l).search=e),placeholder:o.$t("Search"),density:"compact"},null,8,["modelValue","placeholder"]),n("div",le,[a(z,{"prepend-icon":"tabler-plus",to:{name:"course-create"}},{default:s(()=>[p(r(o.$t("Add New Cour")),1)]),_:1})])]),_:1})]),_:1})]),_:1}),a(T),a(t(te),{"items-per-page":t(l).itemsPerPage,"onUpdate:itemsPerPage":i[3]||(i[3]=e=>t(l).itemsPerPage=e),page:t(l).page,"onUpdate:page":i[4]||(i[4]=e=>t(l).page=e),items:t(y),"items-length":t(m),headers:E.map(e=>({...e,title:o.$t(e.title)})),class:"text-no-wrap",loading:t(b),"onUpdate:options":i[5]||(i[5]=e=>l.value=e)},{loading:s(()=>[a(t(Z),{class:"pt-2",type:["table-tbody"]})]),"item.title":s(({item:e})=>[n("div",ie,[n("div",re,[n("h6",ne,[a(N,{to:{name:"course-id",params:{id:e.id}},class:"font-weight-medium user-list-name"},{default:s(()=>[p(r(e.title),1)]),_:2},1032,["to"])])])])]),"item.status":s(({item:e})=>[a(L,{color:t(S)(e.status).color},{prepend:s(()=>[e.status===t(c).Scheduled?(d(),g(M,{key:0,icon:"mdi-clock-time-five-outline",text:t(Y)(e.schedule_at)},null,8,["text"])):(d(),g(u,{key:1,icon:t(S)(e.status).icon},null,8,["icon"]))]),default:s(()=>[n("span",ue,r(e.status),1),e.status===t(c).Error?(d(),D("span",de,r(`#${e.id}`),1)):k("",!0)]),_:2},1032,["color"])]),"item.difficulty":s(({item:e})=>[a(L,{color:t(w)(e.difficulty).color},{default:s(()=>[a(u,{icon:t(w)(e.difficulty).icon,class:"ma-1"},null,8,["icon"]),n("span",pe,r(e.difficulty),1)]),_:2},1032,["color"])]),"item.actions":s(({item:e})=>[a(z,{icon:"",variant:"text",size:"x-small",color:"medium-emphasis"},{default:s(()=>[a(u,{size:"24",icon:"tabler-dots-vertical"}),a(ae,{activator:"parent"},{default:s(()=>[a(se,null,{default:s(()=>[a(h,{to:{name:"course-id-edit",params:{id:e.id}}},{prepend:s(()=>[a(u,{icon:"tabler-edit"})]),default:s(()=>[a(v,null,{default:s(()=>[p(r(o.$t("Edit")),1)]),_:1})]),_:2},1032,["to"]),e.status===t(c).Draft||e.status===t(c).Error?(d(),g(h,{key:0,onClick:$=>j(e.id)},{prepend:s(()=>[a(u,{icon:"material-symbols:publish-rounded"})]),default:s(()=>[a(v,null,{default:s(()=>[p(r(o.$t("Publish")),1)]),_:1})]),_:2},1032,["onClick"])):k("",!0),e.status===t(c).Draft||e.status===t(c).Scheduled?(d(),g(h,{key:1,onClick:$=>V.value=e.id},{prepend:s(()=>[a(u,{icon:"solar:calendar-broken"})]),default:s(()=>[a(v,null,{default:s(()=>[p(r(o.$t("Schedule publish")),1)]),_:1})]),_:2},1032,["onClick"])):k("",!0),a(h,{onClick:$=>U(e.id)},{prepend:s(()=>[a(u,{icon:"tabler-trash"})]),default:s(()=>[a(v,null,{default:s(()=>[p(r(o.$t("Delete")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:s(()=>[a(T),n("div",ce,[n("p",me,r(t(G)(t(l),t(m))),1),a(oe,{"model-value":t(l).page,length:Math.ceil(t(m)/t(l).itemsPerPage),"total-visible":o.$vuetify.display.xs?1:Math.ceil(t(m)/t(l).itemsPerPage),"onUpdate:modelValue":i[2]||(i[2]=e=>l.value={...t(l),page:e})},null,8,["model-value","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length","headers","loading"])]),_:1},8,["title"]),a(A,{"course-id":t(V),onDone:i[6]||(i[6]=e=>(V.value=null,t(_)()))},null,8,["course-id"])]),_:1})]),_:1})])}}});export{Fe as default};