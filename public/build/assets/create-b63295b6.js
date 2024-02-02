import{_ as A}from"./DateTimePicker.vue_vue_type_style_index_0_lang-bd1c41b3.js";import{_ as L}from"./CustomRadiosWithIcon-e146887b.js";import{_ as j}from"./CourseChaptersForm.vue_vue_type_script_setup_true_lang-e900f918.js";import{_ as H}from"./CourseDetailsForm.vue_vue_type_script_setup_true_lang-f3ea679f.js";import{_ as J}from"./AppStepper.vue_vue_type_style_index_0_lang-d10ff415.js";import{t as M,r as d,bW as D,a4 as Z,v as g,z as S,A as t,n as e,H as i,L as V,aa as p,D as q,B as k,C as B,E as x}from"./plugins-20f6c63a.js";import{u as G}from"./useCourseStore-128d3b36.js";import{a as F,V as K}from"./VRow-9970c9d9.js";import{a as Q,b as P}from"./VWindowItem-e6809476.js";import{V as X,a as I,b as R,c as T}from"./VExpansionPanel-1a39f22b.js";import{c as N}from"./VCard-30e4f82a.js";import"./component-4b1ed0a8.js";import"./VField-78f5f7c6.js";import"./VInput-df115ab9.js";import"./index-755f2f9e.js";import"./forwardRefs-6ea3df5c.js";import"./VRadioGroup-8e0340eb.js";import"./VSelectionControl-32c86160.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FileUploaderDialog.vue_vue_type_script_setup_true_lang-cb04a084.js";import"./VCheckboxBtn-2871d378.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-5a82d17e.js";import"./VTextField-24d0bc09.js";import"./index-0a5c7226.js";import"./VSpacer-65846308.js";import"./createSimpleFunctional-991d7489.js";import"./VToolbar-c437b776.js";import"./_commonjsHelpers-de833af9.js";import"./VSkeletonLoader-eb9e7f48.js";import"./VChip-99c6b32d.js";import"./VAvatar-d93e5e0c.js";import"./VPagination-32d7de4c.js";import"./utils-75e2a70f.js";import"./lodash-f6b38868.js";import"./preact.module-7f17e2b0.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-58e41beb.js";import"./VCardText-d52ac2bc.js";import"./VCardActions-aebc9678.js";import"./VDialog-b5e757d9.js";import"./VOverlay-d4a32956.js";import"./scopeId-3cd861c8.js";import"./dialog-transition-beb6505c.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-9bd5cab5.js";import"./VSelect-9fed1c22.js";import"./VList-a614effd.js";import"./ssrBoot-2d263cb5.js";import"./VDivider-371081d3.js";import"./VMenu-baca4a70.js";import"./InfoTooltip.vue_vue_type_script_setup_true_lang-947f9f5f.js";import"./VTooltip-56957888.js";import"./ActionButton-24ffe583.js";import"./validators-6e538dce.js";import"./slugify-624934a4.js";import"./useQuizzesStore-3b136e41.js";import"./VForm-d5279851.js";import"./VSwitch-94970a91.js";import"./VTextarea-de0927b7.js";import"./VSlideGroup-ee562ac5.js";import"./VSlideGroupItem-e87cf79c.js";const Y={class:"d-flex justify-space-between mt-8"},rt=M({__name:"create",setup(ee){const l=d(0),m=d("publish"),f=d("Private"),U=[{title:"Private",desc:"Only you and people you choose can watch your video",value:D.Private,icon:{icon:"carbon:virtual-private-cloud",size:"28"}},{title:"Publish",desc:"Everyone can watch your video",value:D.Published,icon:{icon:"mdi-public",size:"28"}}],v=d(new Date().toISOString()),n=d([{id:1,icon:"tabler-clipboard",title:"course.steps.details.title",component:null},{id:2,icon:"grommet-icons:chapter-add",title:"course.steps.chapters.title",component:null},{id:3,icon:"mdi-publish",title:"course.steps.visibility.title",component:null}]),c=d(),E=Z(),_=G(),W=async()=>{var a,b,y,h;const r=n.value[l.value];try{if(r.id===1){const s=await((a=r.component)==null?void 0:a.validate());c.value=await _.createCourse(s)}if(r.id===2&&c.value){const C=(await((b=r.component)==null?void 0:b.validate())).map((w,O)=>{const $={};return w.attachments.forEach(u=>{$[u.id]={name:u.name,watermark:u.watermark,type:u.type,download:u.download,visibility:JSON.stringify(u.visibility),slug:u.slug}}),{...w,attachments:$,order:O}}),o=(y=c.value)==null?void 0:y.id;await Promise.all(C.map(w=>_.createChapter(o,w)))}n.value.length-1>l.value&&l.value++}catch(s){((h=s==null?void 0:s.response)==null?void 0:h.status)===500&&n.value.length-1>l.value&&E.push({name:"course"}),console.error(s)}},z=async()=>{try{if(!c.value)throw new Error("Course not Found");m.value==="schedule"&&await _.scheduleCourse(c.value.id,v.value),m.value==="publish"&&await _.publishCourse(c.value.id,f.value),E.push({name:"course"})}catch(r){throw r}};return(r,a)=>{const b=J,y=H,h=j,s=L,C=A;return g(),S(K,{align:"center"},{default:t(()=>[e(F,null,{default:t(()=>[e(b,{"current-step":i(l),items:i(n)},null,8,["current-step","items"])]),_:1}),e(F,{cols:"12"},{default:t(()=>[e(Q,{modelValue:i(l),"onUpdate:modelValue":a[3]||(a[3]=o=>V(l)?l.value=o:null),class:"disable-tab-transition stepper-content mt-5"},{default:t(()=>[e(P,null,{default:t(()=>[e(y,{ref:o=>i(n)[0].component=o},null,512)]),_:1}),e(P,null,{default:t(()=>[e(h,{ref:o=>i(n)[1].component=o},null,512)]),_:1}),e(P,null,{default:t(()=>[e(X,{modelValue:i(m),"onUpdate:modelValue":a[2]||(a[2]=o=>V(m)?m.value=o:null),mandatory:"force",style:{"max-width":"500px","margin-inline":"auto"},variant:"accordion"},{default:t(()=>[e(I,{value:"publish"},{default:t(()=>[e(R,null,{default:t(()=>[p(" Save or publish ")]),_:1}),e(N,{class:"mb-2"},{default:t(()=>[p(" Make your video public or private ")]),_:1}),e(T,null,{default:t(()=>[e(s,{"selected-radio":i(f),"onUpdate:selectedRadio":a[0]||(a[0]=o=>V(f)?f.value=o:null),"radio-content":U,"grid-column":{md:"6"}},null,8,["selected-radio"])]),_:1})]),_:1}),e(I,{value:"schedule"},{default:t(()=>[e(R,null,{default:t(()=>[p(" Schedule ")]),_:1}),e(N,{class:"mb-2"},{default:t(()=>[p(" Select a date to make your video public. ")]),_:1}),e(T,null,{default:t(()=>[e(C,{modelValue:i(v),"onUpdate:modelValue":a[1]||(a[1]=o=>V(v)?v.value=o:null),style:{width:"min-content"},config:{inline:!0,enableTime:!0,dateFormat:"Z"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),q("div",Y,[e(k,{variant:"plain",color:"secondary",disabled:i(l)===0,onClick:a[4]||(a[4]=o=>l.value--)},{default:t(()=>[e(B,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),p(" "+x(r.$t("previous")),1)]),_:1},8,["disabled"]),i(n).length-1===i(l)?(g(),S(k,{key:0,"append-icon":"tabler-check",color:"success",onClick:z},{default:t(()=>[p(x(r.$t(i(m))),1)]),_:1})):(g(),S(k,{key:1,variant:"plain",onClick:W},{default:t(()=>[p(x(r.$t("next"))+" ",1),e(B,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})}}});export{rt as default};
