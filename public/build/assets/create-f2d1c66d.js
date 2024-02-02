import{r as S}from"./validators-229769c7.js";import{_ as be}from"./FileUploaderDialog.vue_vue_type_script_setup_true_lang-61f4e6ed.js";import{_ as he}from"./DateTimePicker.vue_vue_type_style_index_0_lang-1cbe68b0.js";import{_ as ye}from"./CustomRadiosWithIcon-9c865d91.js";import{_ as we}from"./CollapsedContent.vue_vue_type_script_setup_true_lang-d0b1db89.js";import{_ as ke}from"./EditorJs.vue_vue_type_style_index_0_lang-baeaeb8a.js";import{_ as qe}from"./InfoTooltip.vue_vue_type_script_setup_true_lang-0241b29a.js";import{_ as Ce}from"./AppStepper.vue_vue_type_style_index_0_lang-6393aac8.js";import{u as h,U as ge}from"./utils-01d7f181.js";import{t as Se,r as _,a4 as Ue,S as Y,v as d,x as U,D as z,n as e,H as i,A as t,L as $,F as P,y as J,a2 as L,B as y,s as A,C as q,aa as n,E as M,z as C}from"./plugins-900eb03f.js";import{u as ze}from"./useQuizzesStore-90e757e2.js";import{a as $e,b as O}from"./VWindowItem-0098adf9.js";import{V as ee,c as te,a as Pe}from"./VCard-6d8b9f87.js";import{V as le}from"./VCardText-65c366cb.js";import{V as E,a as c}from"./VRow-bc79db32.js";import{V as N}from"./VTextField-e9152184.js";import{V as De}from"./VTextarea-3a32ae7b.js";import{b as Qe}from"./VInput-d19eb2fc.js";import{V as W}from"./VTooltip-5075abc5.js";import{V as Te,a as oe,b as ae,c as se}from"./VExpansionPanel-2b5697f4.js";import{V as Ae}from"./VSpacer-35711271.js";import{V as Oe}from"./VForm-4f08ce3e.js";import{V as Ee}from"./VCheckbox-07863e5f.js";import{V as Ne}from"./VSwitch-3d7c56ad.js";import{V as Be}from"./VCardActions-6ec0444f.js";import"./VCheckboxBtn-e9892fb1.js";import"./VSelectionControl-9eb14a8c.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-5c78031b.js";import"./index-cecf332b.js";import"./VToolbar-4167c2d0.js";import"./index-e8fbdf01.js";import"./_commonjsHelpers-de833af9.js";import"./VSkeletonLoader-4cfb77ed.js";import"./VChip-b4e7b548.js";import"./VAvatar-98f875d9.js";import"./VPagination-771c87c9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-f6b38868.js";import"./preact.module-7f17e2b0.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-65a3d6cf.js";import"./VDialog-bc9d1454.js";import"./VOverlay-d2f68a91.js";import"./forwardRefs-6ea3df5c.js";import"./scopeId-b697eb6c.js";import"./dialog-transition-eb9759aa.js";import"./component-f332d7c2.js";import"./VField-b7aa3867.js";import"./VRadioGroup-6491375b.js";import"./VSlideGroup-b88ed46b.js";import"./VSlideGroupItem-ebae59c6.js";import"./ssrBoot-8b4eb22d.js";import"./createSimpleFunctional-e9ee8020.js";const Fe={class:"mb-6"},Ie={class:"d-flex flex-column align-center"},Re={class:"d-flex align-start gap-2"},je={class:"ml-4",style:{width:"40px"}},xe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},xt=Se({__name:"create",setup(Je){const H=[{title:"Details",icon:"tabler-list-details"},{title:"Attachments",icon:"tabler-paperclip"},{title:"Questions",icon:"tabler-device-ipad-question"},{title:"Visibility",icon:"tabler-eye"}],m=_(0),B=_({}),Z=async()=>{const{valid:l,errors:a}=await B.value.validate();return l?Promise.resolve():Promise.reject(a)},ie=()=>{Z().then(()=>m.value++)},G={title:"",description:"",duration:5,status:"Draft",attachments:[],questions:[{id:h(),allow_custom_answer:!1,question:{},options:[{id:h(),option:"",points:0,is_correct:!1}]}]},s=_({...G}),g=_(!1),re=l=>{s.value.attachments.splice(l,1)},ne=l=>{s.value.questions.push({...s.value.questions[l],id:h(),options:s.value.questions[l].options.map(a=>({...a,id:h()}))})},ue=l=>{s.value.questions.splice(l,1)},K=()=>{s.value.questions.push({id:h(),allow_custom_answer:!1,question:{},options:[{id:h(),option:"",points:0,is_correct:!1}]})},de=(l,a)=>{s.value.questions[l].options.splice(a,1)},ce=l=>{s.value.questions[l].options.push({id:h(),option:"",points:0,is_correct:!1})},v=_("publish"),D=_("Private"),me=[{title:"Private",desc:"Only you see can this quiz",value:"Private",icon:{icon:"carbon:virtual-private-cloud",size:"28"}},{title:"Publish",desc:"All your users can see this quiz",value:"Published",icon:{icon:"mdi-public",size:"28"}}],Q=_(new Date().toISOString()),pe=l=>{s.value.attachments.push(...l),g.value=!1},F=_([]),fe=Ue(),I=ze(),X=()=>new Promise(async(l,a)=>{try{await Z();for(let f=0;f<F.value.length;f++){const{editor:p,id:V}=F.value[f],R=await p.save(),j=s.value.questions.findIndex(x=>x.id===V);s.value.questions[j].question=R}const w={};s.value.attachments.forEach(({type:f,id:p,name:V})=>w[p]={type:f,name:V});const T=await I.createQuiz({...s.value,questions:s.value.questions.map(({id:f,question:p,...V})=>({...V,question:JSON.stringify(p)})),attachments:w});v.value==="schedule"&&await I.scheduleQuiz(Number(T.data.id),Q.value),v.value==="publish"&&await I.publishQuiz(Number(T.data.id),D.value),l("ok")}catch(w){a(w)}}),_e=()=>{X().then(()=>{s.value={...G},s.value.attachments=[],s.value.questions=[],B.value.reset(),m.value=0,K()})},ve=()=>{X().then(()=>{fe.push({name:"quizzes"})})};return(l,a)=>{const w=Ce,T=Y("Media"),f=qe,p=Y("IconBtn"),V=ke,R=we,j=ye,x=he,Ve=be;return d(),U(P,null,[z("div",Fe,[e(w,{"current-step":i(m),items:H},null,8,["current-step"])]),e(Oe,{ref_key:"formEl",ref:B,class:"mt-5"},{default:t(()=>[e($e,{modelValue:i(m),"onUpdate:modelValue":a[7]||(a[7]=o=>$(m)?m.value=o:null),class:"disable-tab-transition"},{default:t(()=>[e(O,null,{default:t(()=>[e(ee,null,{default:t(()=>[e(le,null,{default:t(()=>[e(E,{class:"pt-2"},{default:t(()=>[e(c,{cols:"12",sm:"8"},{default:t(()=>[e(N,{modelValue:i(s).title,"onUpdate:modelValue":a[0]||(a[0]=o=>i(s).title=o),rules:["requiredValidator"in l?l.requiredValidator:i(S)],label:"Title"},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12",sm:"4"},{default:t(()=>[e(N,{modelValue:i(s).duration,"onUpdate:modelValue":a[1]||(a[1]=o=>i(s).duration=o),type:"number",rules:["requiredValidator"in l?l.requiredValidator:i(S)],label:"Duration (minutes)","prepend-inner-icon":"tabler-clock"},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(De,{rows:"2","auto-grow":"",modelValue:i(s).description,"onUpdate:modelValue":a[2]||(a[2]=o=>i(s).description=o),rules:["requiredValidator"in l?l.requiredValidator:i(S)],label:"Description"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(ee,null,{default:t(()=>[e(le,null,{default:t(()=>[e(E,null,{default:t(()=>[i(s).attachments.length?(d(!0),U(P,{key:0},J(i(s).attachments,(o,u)=>(d(),C(c,{cols:"12",sm:"6",md:"4",class:"h-100",key:o.id},{default:t(()=>[e(T,{media:o,deletable:"","aspect-ratio":"2/1","is-preview":"",onOnDelete:r=>re(u)},null,8,["media","onOnDelete"])]),_:2},1024))),128)):L("",!0),e(c,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(f,{text:l.$t("media.upload.description")},{default:t(({props:o})=>[e(y,A({...o,...i(ge),style:"min-height: 150px;aspect-ratio:2/1"},{onClick:a[3]||(a[3]=u=>g.value=!0)}),{default:t(()=>[z("div",Ie,[e(q,{icon:"flat-color-icons:add-image",size:"28"}),e(Qe,{class:"mt-2"},{default:t(()=>[n(M(l.$t("media.attachment")),1)]),_:1})])]),_:2},1040)]),_:1},8,["text"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(E,null,{default:t(()=>[(d(!0),U(P,null,J(i(s).questions,(o,u)=>(d(),C(c,{cols:"12",key:u},{default:t(()=>[e(R,{"prepend-icon":"tabler-device-ipad-question",title:`${"Question "+(u+1)} - (${o.options.reduce((r,b)=>r+Number(b.points),0)} Points)`},{append:t(()=>[e(p,A({onClick:r=>ne(u)},{variant:"text",density:"compact",color:"default"},{icon:"tabler-copy"}),null,16,["onClick"]),e(p,A({onClick:r=>ue(u)},{variant:"text",density:"compact",color:"error"},{icon:"tabler-trash"}),null,16,["onClick"])]),default:t(()=>[e(Pe,null,{default:t(()=>[e(E,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(V,{class:"border rounded pa-4",placeholder:"Type here your question "+(u+1),ref_for:!0,ref_key:"editorJs",ref:F,holder:o.id},null,8,["placeholder","holder"])]),_:2},1024),(d(!0),U(P,null,J(o.options,(r,b)=>(d(),C(c,{key:b,cols:"12"},{default:t(()=>[z("div",Re,[e(N,{id:"option-"+(u+1)+"-"+(b+1),modelValue:r.option,"onUpdate:modelValue":k=>r.option=k,label:"Option "+(b+1),rules:["requiredValidator"in l?l.requiredValidator:i(S)],"base-color":r.is_correct?"success":"default",class:"w-100"},null,8,["id","modelValue","onUpdate:modelValue","label","rules","base-color"]),r.is_correct?(d(),C(N,{key:0,id:"option-points-"+(u+1)+"-"+(b+1),type:"number",modelValue:r.points,"onUpdate:modelValue":k=>r.points=k,label:"Points",rules:["requiredValidator"in l?l.requiredValidator:i(S)],"base-color":r.is_correct?"success":"default"},null,8,["id","modelValue","onUpdate:modelValue","rules","base-color"])):L("",!0),z("div",je,[e(Ee,{color:"success",modelValue:r.is_correct,"onUpdate:modelValue":k=>r.is_correct=k},{default:t(()=>[e(W,{activator:"parent",location:"top"},{default:t(()=>[n(" Correct Answer ")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),o.options.length>1?(d(),C(y,{key:1,onClick:k=>de(u,b),icon:"",density:"compact",color:"error",variant:"text"},{default:t(()=>[e(q,{icon:"tabler-trash"}),e(W,{activator:"parent",location:"top"},{default:t(()=>[n(" Delete Option ")]),_:1})]),_:2},1032,["onClick"])):L("",!0)])]),_:2},1024))),128)),e(c,{cols:"12"},{default:t(()=>[e(Ne,{"model-value":o.allow_custom_answer,"onUpdate:modelValue":r=>o.allow_custom_answer=r,label:"Accept custom answers"},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(Be,{class:"ma-3"},{default:t(()=>[e(y,{onClick:r=>ce(u),variant:"tonal"},{default:t(()=>[n(" Add Option ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128)),e(c,{cols:"12",class:"d-flex justify-center"},{default:t(()=>[e(W,{location:"top"},{activator:t(({props:o})=>[e(p,A(o,{icon:"tabler-plus",variant:"tonal",onClick:K}),null,16)]),default:t(()=>[n(" Add Question ")]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(Te,{modelValue:i(v),"onUpdate:modelValue":a[6]||(a[6]=o=>$(v)?v.value=o:null),mandatory:"force",variant:"accordion"},{default:t(()=>[e(oe,{value:"publish"},{default:t(()=>[e(ae,null,{default:t(()=>[e(q,{icon:"tabler:send",class:"mr-3"}),n(" Publish Quiz ")]),_:1}),e(te,{class:"mb-2"},{default:t(()=>[n(" Make your Quiz public or private ")]),_:1}),e(se,{class:"mt-5"},{default:t(()=>[e(j,{"selected-radio":i(D),"onUpdate:selectedRadio":a[4]||(a[4]=o=>$(D)?D.value=o:null),"radio-content":me,"grid-column":{md:"6"}},null,8,["selected-radio"])]),_:1})]),_:1}),e(oe,{value:"schedule"},{default:t(()=>[e(ae,null,{default:t(()=>[e(q,{icon:"tabler:calendar",class:"mr-3"}),n(" Schedule Quiz ")]),_:1}),e(te,{class:"mb-2"},{default:t(()=>[n(" Select a date to make your Quiz public. ")]),_:1}),e(se,null,{default:t(()=>[e(x,{modelValue:i(Q),"onUpdate:modelValue":a[5]||(a[5]=o=>$(Q)?Q.value=o:null),style:{width:"min-content"},config:{inline:!0,enableTime:!0,dateFormat:"Z"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),z("div",xe,[e(y,{color:"secondary",variant:"tonal",disabled:i(m)===0,onClick:a[8]||(a[8]=o=>m.value--)},{default:t(()=>[e(q,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),n(" Previous ")]),_:1},8,["disabled"]),H.length-1===i(m)?(d(),U(P,{key:0},[e(Ae),e(y,{onClick:_e,variant:"outlined",color:"success"},{default:t(()=>[n(M(l.$t(i(v)))+" & Start New Quiz ",1)]),_:1}),e(y,{onClick:ve,color:"success"},{default:t(()=>[n(M(l.$t(i(v))),1)]),_:1})],64)):(d(),C(y,{key:1,onClick:ie},{default:t(()=>[n(" Next "),e(q,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1},512),e(Ve,{"is-dialog-visible":i(g),"onUpdate:isDialogVisible":a[9]||(a[9]=o=>$(g)?g.value=o:null),"allowed-file-types":["image/*",".pdf","video/*"],onDone:pe},null,8,["is-dialog-visible","allowed-file-types"])],64)}}});export{xt as default};