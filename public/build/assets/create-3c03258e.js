import{_ as se}from"./DateTimePicker.vue_vue_type_style_index_0_lang-2874e1b0.js";import{V as M,a as E}from"./VRow-fd71155e.js";import{b as le}from"./VInput-842a483e.js";import{d as j,o as l,h as _,f as t,b as e,c as g,F as W,j as Q,t as O,z as F,A as ae,e as r,a0 as k,y as v,k as $,_ as ie,r as V,a6 as N,bo as ne,q as s,aj as C,I as re,b0 as x,bZ as q,m as ue,c1 as ce,x as S,bA as L}from"./main-dd42a7da.js";import{V as pe,a as de}from"./VRadioGroup-0ed4f06b.js";import me from"./CourseQuizzesForm-057c1735.js";import{_ as _e}from"./CourseChaptersForm.vue_vue_type_script_setup_true_lang-7697152c.js";import{_ as fe}from"./CourseDetailsForm.vue_vue_type_script_setup_true_lang-b7ee984b.js";import{V as ve}from"./VSlideGroupItem-62ef076d.js";import{V as he}from"./VSlideGroup-caee42ec.js";import{u as be}from"./useCourseStore-a9c88890.js";import{a as ye,b as A}from"./VWindowItem-23eb561f.js";import{V as ge,a as G,b as Z,c as H}from"./VExpansionPanel-edb6cb6a.js";import{V as Ve}from"./VContainer-9a44fe4c.js";import{b as J}from"./route-block-83d24a4e.js";import"./component-93fae533.js";import"./VField-82170d56.js";import"./VSelectionControl-819e6b68.js";import"./VTextField-5a655f9e.js";import"./VTextarea-e8970edd.js";import"./VDivider-730dc40b.js";import"./VForm-a596e7af.js";import"./VCheckbox-ae444308.js";import"./VCheckboxBtn-3cb8d0e7.js";import"./FileUploaderDialog.vue_vue_type_script_setup_true_lang-7b25c490.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-6a6ad41d.js";import"./index-1f6eb7b0.js";import"./ActionButton-c35f54ff.js";import"./utils-d59cd350.js";import"./VSpacer-837f6556.js";import"./VChip-36ee8e62.js";import"./VPagination-8f778ca8.js";import"./VMenu-02af41c3.js";import"./VList-dcf79c63.js";import"./lodash-b16277ae.js";import"./preact.module-7f17e2b0.js";import"./InfoTooltip.vue_vue_type_script_setup_true_lang-2bad32a0.js";import"./VTooltip-6ed70ba3.js";import"./validators-753247d6.js";import"./VSelect-609e0bfd.js";import"./VSwitch-f89b61fa.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-4b71649a.js";const Se={class:"d-flex flex-column align-center text-center gap-2"},Ce={class:"cr-title text-base"},ke={class:"text-sm mb-0 clamp-text"},we=j({__name:"CustomRadiosWithIcon",props:{selectedRadio:{},radioContent:{},gridColumn:{}},emits:["update:selectedRadio"],setup(R,{emit:c}){const o=R,y=c,u=f=>{y("update:selectedRadio",f)};return(f,h)=>o.radioContent?(l(),_(de,{key:0,"model-value":o.selectedRadio,"onUpdate:modelValue":u},{default:t(()=>[e(M,null,{default:t(()=>[(l(!0),g(W,null,Q(o.radioContent,a=>(l(),_(E,O({key:a.title},f.gridColumn),{default:t(()=>[e(le,{class:F(["custom-input custom-radio-icon rounded cursor-pointer",o.selectedRadio===a.value?"active":""])},{default:t(()=>[ae(f.$slots,"default",{item:a},()=>[r("div",Se,[e(k,O(a.icon,{class:"text-high-emphasis"}),null,16),r("h6",Ce,v(a.title),1),r("p",ke,v(a.desc),1)])],!0),r("div",null,[e(pe,{value:a.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):$("",!0)}});const ze=ie(we,[["__scopeId","data-v-0f137429"]]),xe=["onClick"],$e={key:0,class:"stepper-icon-step text-high-emphasis d-flex align-center gap-2"},Re={class:"stepper-icon"},Ie={class:"stepper-title font-weight-medium mb-0"},Pe={key:0,class:"stepper-subtitle"},Ae={class:"text-sm"},Ee={key:1,class:"d-flex align-center gap-x-4"},Fe={class:"d-flex align-center gap-2"},Be={class:"d-flex align-center justify-center"},Te={class:"text-h5",style:{color:"rgb(var(--v-theme-primary))"}},Ue={class:"d-flex flex-column justify-center"},Ne={class:"step-title font-weight-medium"},We={key:0,class:"step-subtitle text-sm text-disabled"},je={key:0,class:"stepper-step-line"},De=j({__name:"AppStepper",props:{items:{},currentStep:{default:0},direction:{default:"horizontal"},iconSize:{default:52},isActiveStepValid:{type:Boolean,default:void 0},align:{default:"center"}},emits:["update:currentStep"],setup(R,{emit:c}){const o=R,y=c,u=V(o.currentStep||0),f=N(()=>m=>m<u.value?"stepper-steps-completed":m===u.value?"stepper-steps-active":""),h=N(()=>m=>o.direction==="horizontal"&&o.items.length-1!==m),a=N(()=>o.isActiveStepValid!==void 0);return ne(()=>{o.currentStep!==void 0&&o.currentStep<o.items.length&&o.currentStep>=0&&(u.value=o.currentStep),y("update:currentStep",u.value)}),(m,I)=>(l(),_(he,{modelValue:s(u),"onUpdate:modelValue":I[0]||(I[0]=i=>x(u)?u.value=i:null),class:F(["app-stepper",`app-stepper-${o.align}`]),"show-arrows":"",direction:o.direction},{default:t(()=>[(l(!0),g(W,null,Q(o.items,(i,d)=>(l(),_(ve,{key:i.title,value:d},{default:t(()=>[r("div",{class:F(["cursor-pointer mx-1",[!o.isActiveStepValid&&s(a)&&"stepper-steps-invalid",s(f)(d)]]),onClick:D=>!s(a)&&y("update:currentStep",d)},[i.icon?(l(),g("div",$e,[r("div",{class:F(["d-flex align-center gap-4 step-wrapper",[o.direction==="horizontal"&&"flex-column"]])},[r("div",Re,[e(k,{icon:i.icon,size:i.size||o.iconSize},null,8,["icon","size"])]),r("div",null,[r("p",Ie,v(m.$t(i.title)),1),i.subtitle?(l(),g("span",Pe,[r("span",Ae,v(m.$t(i.subtitle)),1)])):$("",!0)])],2),s(h)(d)?(l(),_(k,{key:0,class:"flip-in-rtl stepper-chevron-indicator mx-6",size:"24",icon:"tabler-chevron-right"})):$("",!0)])):(l(),g("div",Ee,[r("div",Fe,[r("div",Be,[d>=s(u)?(l(),g(W,{key:0},[!s(a)||o.isActiveStepValid||d!==s(u)?(l(),_(C,{key:0,size:"40",variant:d===s(u)?"elevated":"tonal",color:d===s(u)?"primary":"default"},{default:t(()=>[r("h5",{class:"text-h5",style:re(d===s(u)?{color:"#fff"}:"")},v(d+1),5)]),_:2},1032,["variant","color"])):(l(),_(k,{key:1,icon:"tabler-alert-circle",size:"24",color:"error"}))],64)):(l(),_(C,{key:1,class:"stepper-icon",variant:"tonal",color:"primary",size:"40"},{default:t(()=>[r("h5",Te,v(d+1),1)]),_:2},1024))])]),r("div",Ue,[r("div",Ne,v(m.$t(i.title)),1),i.subtitle?(l(),g("div",We,v(m.$t(i.subtitle)),1)):$("",!0)]),s(h)(d)?(l(),g("div",je,[e(k,{icon:"tabler-chevron-right",size:"24"})])):$("",!0)]))],10,xe)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","direction","class"]))}});const Oe={class:"d-flex justify-space-between mt-8"},qe=j({__name:"create",setup(R){const c=V(0),o=V("publish"),y=V("private"),u=[{title:"Private",desc:"Only you and people you choose can watch your video",value:q.Private,icon:{icon:"carbon:virtual-private-cloud",size:"28"}},{title:"Publish",desc:"Everyone can watch your video",value:q.Published,icon:{icon:"mdi-public",size:"28"}}],f=V(new Date().toISOString()),h=V([{id:1,icon:"tabler-clipboard",title:"course.steps.details.title",subtitle:"course.steps.details.subtitle",component:null},{id:2,icon:"grommet-icons:chapter-add",title:"course.steps.chapters.title",subtitle:"course.steps.chapters.subtitle",component:null},{id:3,icon:"fluent:quiz-new-20-regular",title:"course.steps.quizzes.title",subtitle:"course.steps.quizzes.subtitle",component:null},{id:4,icon:"mdi-publish",title:"course.steps.visibility.title",subtitle:"course.steps.visibility.subtitle",component:null}]),a=V(),m=V("list"),I=ue(),i=be(),d=async()=>{var p,P;const b=h.value[c.value];try{if(b.id===1){const w=await((p=b.component)==null?void 0:p.validate());a.value=await i.createCourse(w)}if(b.id===2&&a.value){const B=(await((P=b.component)==null?void 0:P.validate())).map((z,U)=>{const n={};return z.attachments.forEach(({name:K,id:X,type:Y,download:ee,visibility:te,watermark:oe})=>{n[X]={name:K,type:Y,download:ee,visibility:JSON.stringify(te),watermark:oe}}),{...z,attachments:n,order:U}}),T=a.value.id;await Promise.all(B.map(z=>i.createChapter(T,z)))}h.value.length-1>c.value&&c.value++}catch(w){console.error(w)}},D=async()=>{try{if(!a.value)throw new Error("Course not Found");o.value==="schedule"&&await i.scheduleCourse(a.value.id,f.value),o.value==="publish"&&await i.publishCourse(a.value.id,y.value),I.push({name:"course"})}catch(b){throw b}};return(b,p)=>{const P=De,w=fe,B=_e,T=me,z=ze,U=se;return l(),_(Ve,null,{default:t(()=>[e(M,{align:"center"},{default:t(()=>[e(E,null,{default:t(()=>[e(P,{"current-step":s(c),direction:"horizontal",items:s(h),"icon-size":"22",class:"stepper-icon-step-bg"},null,8,["current-step","items"])]),_:1}),s(c)===1?(l(),_(E,{key:0},{default:t(()=>[e(ce,{modelValue:s(m),"onUpdate:modelValue":p[0]||(p[0]=n=>x(m)?m.value=n:null),divided:"",color:"primary",variant:"outlined",class:"mx-auto"},{default:t(()=>[e(C,{value:"list",icon:"mdi-list-box-outline"}),e(C,{value:"grid",icon:"mdi-grid-large"})]),_:1},8,["modelValue"])]),_:1})):$("",!0),e(E,{cols:"12"},{default:t(()=>[e(ye,{modelValue:s(c),"onUpdate:modelValue":p[4]||(p[4]=n=>x(c)?c.value=n:null),class:"disable-tab-transition stepper-content mt-5"},{default:t(()=>[e(A,null,{default:t(()=>[e(w,{ref:n=>s(h)[0].component=n},null,512)]),_:1}),e(A,null,{default:t(()=>[e(B,{ref:n=>s(h)[1].component=n},null,512)]),_:1}),e(A,null,{default:t(()=>[e(T)]),_:1}),e(A,null,{default:t(()=>[e(ge,{modelValue:s(o),"onUpdate:modelValue":p[3]||(p[3]=n=>x(o)?o.value=n:null),mandatory:"force",style:{"max-width":"500px","margin-inline":"auto"},variant:"accordion"},{default:t(()=>[e(G,{value:"publish"},{default:t(()=>[e(Z,null,{default:t(()=>[S(" Save or publish ")]),_:1}),e(L,{class:"mb-2"},{default:t(()=>[S(" Make your video public or private ")]),_:1}),e(H,null,{default:t(()=>[e(z,{"selected-radio":s(y),"onUpdate:selectedRadio":p[1]||(p[1]=n=>x(y)?y.value=n:null),"radio-content":u,"grid-column":{md:"6"}},null,8,["selected-radio"])]),_:1})]),_:1}),e(G,{value:"schedule"},{default:t(()=>[e(Z,null,{default:t(()=>[S(" Schedule ")]),_:1}),e(L,{class:"mb-2"},{default:t(()=>[S(" Select a date to make your video public. ")]),_:1}),e(H,null,{default:t(()=>[e(U,{modelValue:s(f),"onUpdate:modelValue":p[2]||(p[2]=n=>x(f)?f.value=n:null),style:{width:"min-content"},config:{inline:!0,enableTime:!0,dateFormat:"Z"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),r("div",Oe,[e(C,{variant:"plain",color:"secondary",disabled:s(c)===0,onClick:p[5]||(p[5]=n=>c.value--)},{default:t(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),S(" "+v(b.$t("previous")),1)]),_:1},8,["disabled"]),s(h).length-1===s(c)?(l(),_(C,{key:0,"append-icon":"tabler-check",color:"success",onClick:D},{default:t(()=>[S(v(b.$t(s(o))),1)]),_:1})):(l(),_(C,{key:1,variant:"plain",onClick:d},{default:t(()=>[S(v(b.$t("next"))+" ",1),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})}}});typeof J=="function"&&J(qe);export{qe as default};
