import{_ as A}from"./DateTimePicker.vue_vue_type_style_index_0_lang-1cbe68b0.js";import{_ as L}from"./CustomRadiosWithIcon-9c865d91.js";import{_ as j}from"./CourseChaptersForm.vue_vue_type_script_setup_true_lang-a1d2e702.js";import{_ as H}from"./CourseDetailsForm.vue_vue_type_script_setup_true_lang-be1303fe.js";import{_ as J}from"./AppStepper.vue_vue_type_style_index_0_lang-6393aac8.js";import{t as M,r as d,bW as D,a4 as Z,v as S,z as g,A as t,n as e,H as i,L as V,aa as u,D as q,B as k,C as B,E as x}from"./plugins-900eb03f.js";import{u as G}from"./useCourseStore-eea862c2.js";import{a as F,V as K}from"./VRow-bc79db32.js";import{a as Q,b as P}from"./VWindowItem-0098adf9.js";import{V as X,a as I,b as R,c as T}from"./VExpansionPanel-2b5697f4.js";import{c as N}from"./VCard-6d8b9f87.js";import"./component-f332d7c2.js";import"./VField-b7aa3867.js";import"./VInput-d19eb2fc.js";import"./index-e8fbdf01.js";import"./forwardRefs-6ea3df5c.js";import"./VRadioGroup-6491375b.js";import"./VSelectionControl-9eb14a8c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FileUploaderDialog.vue_vue_type_script_setup_true_lang-61f4e6ed.js";import"./VCheckboxBtn-e9892fb1.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-5c78031b.js";import"./VTextField-e9152184.js";import"./index-cecf332b.js";import"./VSpacer-35711271.js";import"./createSimpleFunctional-e9ee8020.js";import"./VToolbar-4167c2d0.js";import"./_commonjsHelpers-de833af9.js";import"./VSkeletonLoader-4cfb77ed.js";import"./VChip-b4e7b548.js";import"./VAvatar-98f875d9.js";import"./VPagination-771c87c9.js";import"./utils-01d7f181.js";import"./lodash-f6b38868.js";import"./preact.module-7f17e2b0.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-65a3d6cf.js";import"./VCardText-65c366cb.js";import"./VCardActions-6ec0444f.js";import"./VDialog-bc9d1454.js";import"./VOverlay-d2f68a91.js";import"./scopeId-b697eb6c.js";import"./dialog-transition-eb9759aa.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-a346bd8f.js";import"./VSelect-bce5aa79.js";import"./VList-ff1b2c79.js";import"./ssrBoot-8b4eb22d.js";import"./VDivider-bf01317e.js";import"./VMenu-479530dd.js";import"./InfoTooltip.vue_vue_type_script_setup_true_lang-0241b29a.js";import"./VTooltip-5075abc5.js";import"./ActionButton-88e06515.js";import"./validators-229769c7.js";import"./useQuizzesStore-90e757e2.js";import"./VForm-4f08ce3e.js";import"./VSwitch-3d7c56ad.js";import"./VTextarea-3a32ae7b.js";import"./VSlideGroup-b88ed46b.js";import"./VSlideGroupItem-ebae59c6.js";const Y={class:"d-flex justify-space-between mt-8"},lt=M({__name:"create",setup(ee){const l=d(0),p=d("publish"),f=d("Private"),U=[{title:"Private",desc:"Only you and people you choose can watch your video",value:D.Private,icon:{icon:"carbon:virtual-private-cloud",size:"28"}},{title:"Publish",desc:"Everyone can watch your video",value:D.Published,icon:{icon:"mdi-public",size:"28"}}],v=d(new Date().toISOString()),s=d([{id:1,icon:"tabler-clipboard",title:"course.steps.details.title",component:null},{id:2,icon:"grommet-icons:chapter-add",title:"course.steps.chapters.title",component:null},{id:3,icon:"mdi-publish",title:"course.steps.visibility.title",component:null}]),m=d(),E=Z(),_=G(),W=async()=>{var a,b,y,h;const r=s.value[l.value];try{if(r.id===1){const n=await((a=r.component)==null?void 0:a.validate());m.value=await _.createCourse(n)}if(r.id===2&&m.value){const C=(await((b=r.component)==null?void 0:b.validate())).map((w,O)=>{const $={};return w.attachments.forEach(c=>{$[c.id]={name:c.name,watermark:c.watermark,type:c.type,download:c.download,visibility:JSON.stringify(c.visibility)}}),{...w,attachments:$,order:O}}),o=(y=m.value)==null?void 0:y.id;await Promise.all(C.map(w=>_.createChapter(o,w)))}s.value.length-1>l.value&&l.value++}catch(n){((h=n==null?void 0:n.response)==null?void 0:h.status)===500&&s.value.length-1>l.value&&E.push({name:"course"}),console.error(n)}},z=async()=>{try{if(!m.value)throw new Error("Course not Found");p.value==="schedule"&&await _.scheduleCourse(m.value.id,v.value),p.value==="publish"&&await _.publishCourse(m.value.id,f.value),E.push({name:"course"})}catch(r){throw r}};return(r,a)=>{const b=J,y=H,h=j,n=L,C=A;return S(),g(K,{align:"center"},{default:t(()=>[e(F,null,{default:t(()=>[e(b,{"current-step":i(l),items:i(s)},null,8,["current-step","items"])]),_:1}),e(F,{cols:"12"},{default:t(()=>[e(Q,{modelValue:i(l),"onUpdate:modelValue":a[3]||(a[3]=o=>V(l)?l.value=o:null),class:"disable-tab-transition stepper-content mt-5"},{default:t(()=>[e(P,null,{default:t(()=>[e(y,{ref:o=>i(s)[0].component=o},null,512)]),_:1}),e(P,null,{default:t(()=>[e(h,{ref:o=>i(s)[1].component=o},null,512)]),_:1}),e(P,null,{default:t(()=>[e(X,{modelValue:i(p),"onUpdate:modelValue":a[2]||(a[2]=o=>V(p)?p.value=o:null),mandatory:"force",style:{"max-width":"500px","margin-inline":"auto"},variant:"accordion"},{default:t(()=>[e(I,{value:"publish"},{default:t(()=>[e(R,null,{default:t(()=>[u(" Save or publish ")]),_:1}),e(N,{class:"mb-2"},{default:t(()=>[u(" Make your video public or private ")]),_:1}),e(T,null,{default:t(()=>[e(n,{"selected-radio":i(f),"onUpdate:selectedRadio":a[0]||(a[0]=o=>V(f)?f.value=o:null),"radio-content":U,"grid-column":{md:"6"}},null,8,["selected-radio"])]),_:1})]),_:1}),e(I,{value:"schedule"},{default:t(()=>[e(R,null,{default:t(()=>[u(" Schedule ")]),_:1}),e(N,{class:"mb-2"},{default:t(()=>[u(" Select a date to make your video public. ")]),_:1}),e(T,null,{default:t(()=>[e(C,{modelValue:i(v),"onUpdate:modelValue":a[1]||(a[1]=o=>V(v)?v.value=o:null),style:{width:"min-content"},config:{inline:!0,enableTime:!0,dateFormat:"Z"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),q("div",Y,[e(k,{variant:"plain",color:"secondary",disabled:i(l)===0,onClick:a[4]||(a[4]=o=>l.value--)},{default:t(()=>[e(B,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),u(" "+x(r.$t("previous")),1)]),_:1},8,["disabled"]),i(s).length-1===i(l)?(S(),g(k,{key:0,"append-icon":"tabler-check",color:"success",onClick:z},{default:t(()=>[u(x(r.$t(i(p))),1)]),_:1})):(S(),g(k,{key:1,variant:"plain",onClick:W},{default:t(()=>[u(x(r.$t("next"))+" ",1),e(B,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})}}});export{lt as default};