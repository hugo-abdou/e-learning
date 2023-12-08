import{_ as se}from"./DateTimePicker.vue_vue_type_style_index_0_lang-e38cae72.js";import{V as Q,a as A}from"./VRow-237f35d1.js";import{b as le}from"./VInput-86d12209.js";import{d as j,o as l,h as _,f as t,b as e,c as g,F as W,j as Y,s as O,y as F,A as ae,e as r,a0 as k,x as f,z as $,_ as ie,r as V,a6 as N,bo as ne,p as s,aj as C,I as re,b0 as x,bY as L,l as ue,c0 as ce,v as S,bz as q}from"./main-bf1e147a.js";import{V as pe,a as de}from"./VRadioGroup-b58c0c71.js";import me from"./CourseQuizzesForm-48af9084.js";import{_ as _e}from"./CourseChaptersForm.vue_vue_type_script_setup_true_lang-59307230.js";import{_ as ve}from"./CourseDetailsForm.vue_vue_type_script_setup_true_lang-80d8729a.js";import{V as fe}from"./VSlideGroupItem-bb8cf3c9.js";import{V as he}from"./VSlideGroup-efc9efa6.js";import{u as be}from"./useCourseStore-0ce2d981.js";import{a as ye,b as E}from"./VWindowItem-1602974f.js";import{V as ge,a as G,b as H,c as J}from"./VExpansionPanel-bec0d54a.js";import{V as Ve}from"./VContainer-3e981ce0.js";import{b as M}from"./route-block-83d24a4e.js";import"./component-898c5da5.js";import"./VField-7b33dc59.js";import"./VSelectionControl-95f455fb.js";import"./VTextField-7f141e42.js";import"./VTextarea-5cbfac47.js";import"./VDivider-10750490.js";import"./VForm-2d372ef7.js";import"./VCheckbox-cc2d59ca.js";import"./VCheckboxBtn-1d890643.js";import"./FileUploaderDialog.vue_vue_type_script_setup_true_lang-48eca8a9.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-9a376451.js";import"./index-5e43b138.js";import"./ActionButton-e3007819.js";import"./utils-02cb9413.js";import"./VSpacer-e581b474.js";import"./VChip-99d3a2f1.js";import"./VPagination-7245e57a.js";import"./VMenu-b27c9714.js";import"./VList-46cfde8a.js";import"./lodash-9a6b90ef.js";import"./preact.module-7f17e2b0.js";import"./InfoTooltip.vue_vue_type_script_setup_true_lang-ecafc509.js";import"./VTooltip-e00e27ba.js";import"./validators-753247d6.js";import"./VSelect-6736634e.js";import"./VSwitch-ad669df5.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-a7a7495d.js";const Se={class:"d-flex flex-column align-center text-center gap-2"},Ce={class:"cr-title text-base"},ke={class:"text-sm mb-0 clamp-text"},ze=j({__name:"CustomRadiosWithIcon",props:{selectedRadio:{},radioContent:{},gridColumn:{}},emits:["update:selectedRadio"],setup(R,{emit:c}){const o=R,y=c,u=v=>{y("update:selectedRadio",v)};return(v,h)=>o.radioContent?(l(),_(de,{key:0,"model-value":o.selectedRadio,"onUpdate:modelValue":u},{default:t(()=>[e(Q,null,{default:t(()=>[(l(!0),g(W,null,Y(o.radioContent,a=>(l(),_(A,O({key:a.title},v.gridColumn),{default:t(()=>[e(le,{class:F(["custom-input custom-radio-icon rounded cursor-pointer",o.selectedRadio===a.value?"active":""])},{default:t(()=>[ae(v.$slots,"default",{item:a},()=>[r("div",Se,[e(k,O(a.icon,{class:"text-high-emphasis"}),null,16),r("h6",Ce,f(a.title),1),r("p",ke,f(a.desc),1)])],!0),r("div",null,[e(pe,{value:a.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):$("",!0)}});const we=ie(ze,[["__scopeId","data-v-0f137429"]]),xe=["onClick"],$e={key:0,class:"stepper-icon-step text-high-emphasis d-flex align-center gap-2"},Re={class:"stepper-icon"},Ie={class:"stepper-title font-weight-medium mb-0"},Pe={key:0,class:"stepper-subtitle"},Ee={class:"text-sm"},Ae={key:1,class:"d-flex align-center gap-x-4"},Fe={class:"d-flex align-center gap-2"},Be={class:"d-flex align-center justify-center"},Te={class:"text-h5",style:{color:"rgb(var(--v-theme-primary))"}},Ue={class:"d-flex flex-column justify-center"},Ne={class:"step-title font-weight-medium"},We={key:0,class:"step-subtitle text-sm text-disabled"},je={key:0,class:"stepper-step-line"},De=j({__name:"AppStepper",props:{items:{},currentStep:{default:0},direction:{default:"horizontal"},iconSize:{default:52},isActiveStepValid:{type:Boolean,default:void 0},align:{default:"center"}},emits:["update:currentStep"],setup(R,{emit:c}){const o=R,y=c,u=V(o.currentStep||0),v=N(()=>m=>m<u.value?"stepper-steps-completed":m===u.value?"stepper-steps-active":""),h=N(()=>m=>o.direction==="horizontal"&&o.items.length-1!==m),a=N(()=>o.isActiveStepValid!==void 0);return ne(()=>{o.currentStep!==void 0&&o.currentStep<o.items.length&&o.currentStep>=0&&(u.value=o.currentStep),y("update:currentStep",u.value)}),(m,I)=>(l(),_(he,{modelValue:s(u),"onUpdate:modelValue":I[0]||(I[0]=i=>x(u)?u.value=i:null),class:F(["app-stepper",`app-stepper-${o.align}`]),"show-arrows":"",direction:o.direction},{default:t(()=>[(l(!0),g(W,null,Y(o.items,(i,d)=>(l(),_(fe,{key:i.title,value:d},{default:t(()=>[r("div",{class:F(["cursor-pointer mx-1",[!o.isActiveStepValid&&s(a)&&"stepper-steps-invalid",s(v)(d)]]),onClick:D=>!s(a)&&y("update:currentStep",d)},[i.icon?(l(),g("div",$e,[r("div",{class:F(["d-flex align-center gap-4 step-wrapper",[o.direction==="horizontal"&&"flex-column"]])},[r("div",Re,[e(k,{icon:i.icon,size:i.size||o.iconSize},null,8,["icon","size"])]),r("div",null,[r("p",Ie,f(m.$t(i.title)),1),i.subtitle?(l(),g("span",Pe,[r("span",Ee,f(m.$t(i.subtitle)),1)])):$("",!0)])],2),s(h)(d)?(l(),_(k,{key:0,class:"flip-in-rtl stepper-chevron-indicator mx-6",size:"24",icon:"tabler-chevron-right"})):$("",!0)])):(l(),g("div",Ae,[r("div",Fe,[r("div",Be,[d>=s(u)?(l(),g(W,{key:0},[!s(a)||o.isActiveStepValid||d!==s(u)?(l(),_(C,{key:0,size:"40",variant:d===s(u)?"elevated":"tonal",color:d===s(u)?"primary":"default"},{default:t(()=>[r("h5",{class:"text-h5",style:re(d===s(u)?{color:"#fff"}:"")},f(d+1),5)]),_:2},1032,["variant","color"])):(l(),_(k,{key:1,icon:"tabler-alert-circle",size:"24",color:"error"}))],64)):(l(),_(C,{key:1,class:"stepper-icon",variant:"tonal",color:"primary",size:"40"},{default:t(()=>[r("h5",Te,f(d+1),1)]),_:2},1024))])]),r("div",Ue,[r("div",Ne,f(m.$t(i.title)),1),i.subtitle?(l(),g("div",We,f(m.$t(i.subtitle)),1)):$("",!0)]),s(h)(d)?(l(),g("div",je,[e(k,{icon:"tabler-chevron-right",size:"24"})])):$("",!0)]))],10,xe)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","direction","class"]))}});const Oe={class:"d-flex justify-space-between mt-8"},Le=j({__name:"create",setup(R){const c=V(0),o=V("publish"),y=V("private"),u=[{title:"Private",desc:"Only you and people you choose can watch your video",value:L.Private,icon:{icon:"carbon:virtual-private-cloud",size:"28"}},{title:"Publish",desc:"Everyone can watch your video",value:L.Published,icon:{icon:"mdi-public",size:"28"}}],v=V(new Date().toISOString()),h=V([{id:1,icon:"tabler-clipboard",title:"course.steps.details.title",subtitle:"course.steps.details.subtitle",component:null},{id:2,icon:"grommet-icons:chapter-add",title:"course.steps.chapters.title",subtitle:"course.steps.chapters.subtitle",component:null},{id:3,icon:"fluent:quiz-new-20-regular",title:"course.steps.quizzes.title",subtitle:"course.steps.quizzes.subtitle",component:null},{id:4,icon:"mdi-publish",title:"course.steps.visibility.title",subtitle:"course.steps.visibility.subtitle",component:null}]),a=V(),m=V("list"),I=ue(),i=be(),d=async()=>{var p,P;const b=h.value[c.value];try{if(b.id===1){const z=await((p=b.component)==null?void 0:p.validate());a.value=await i.createCourse(z)}if(b.id===2&&a.value){const B=(await((P=b.component)==null?void 0:P.validate())).map((w,U)=>{const n={};return w.attachments.forEach(({name:Z,id:K,type:X,download:ee,visibility:te,watermark:oe})=>{n[K]={name:Z,type:X,download:ee,visibility:JSON.stringify(te),watermark:oe}}),{...w,attachments:n,order:U}}),T=a.value.id;await Promise.all(B.map(w=>i.createChapter(T,w)))}h.value.length-1>c.value&&c.value++}catch(z){console.error(z)}},D=async()=>{try{if(!a.value)throw new Error("Course not Found");o.value==="schedule"&&await i.scheduleCourse(a.value.id,v.value),o.value==="publish"&&await i.publishCourse(a.value.id,y.value),I.push({name:"course"})}catch(b){throw b}};return(b,p)=>{const P=De,z=ve,B=_e,T=me,w=we,U=se;return l(),_(Ve,null,{default:t(()=>[e(Q,{align:"center"},{default:t(()=>[e(A,null,{default:t(()=>[e(P,{"current-step":s(c),direction:"horizontal",items:s(h),"icon-size":"22",class:"stepper-icon-step-bg"},null,8,["current-step","items"])]),_:1}),s(c)===1?(l(),_(A,{key:0},{default:t(()=>[e(ce,{modelValue:s(m),"onUpdate:modelValue":p[0]||(p[0]=n=>x(m)?m.value=n:null),divided:"",color:"primary",variant:"outlined",class:"mx-auto"},{default:t(()=>[e(C,{value:"list",icon:"mdi-list-box-outline"}),e(C,{value:"grid",icon:"mdi-grid-large"})]),_:1},8,["modelValue"])]),_:1})):$("",!0),e(A,{cols:"12"},{default:t(()=>[e(ye,{modelValue:s(c),"onUpdate:modelValue":p[4]||(p[4]=n=>x(c)?c.value=n:null),class:"disable-tab-transition stepper-content mt-5"},{default:t(()=>[e(E,null,{default:t(()=>[e(z,{ref:n=>s(h)[0].component=n},null,512)]),_:1}),e(E,null,{default:t(()=>[e(B,{ref:n=>s(h)[1].component=n},null,512)]),_:1}),e(E,null,{default:t(()=>[e(T)]),_:1}),e(E,null,{default:t(()=>[e(ge,{modelValue:s(o),"onUpdate:modelValue":p[3]||(p[3]=n=>x(o)?o.value=n:null),mandatory:"force",style:{"max-width":"500px","margin-inline":"auto"},variant:"accordion"},{default:t(()=>[e(G,{value:"publish"},{default:t(()=>[e(H,null,{default:t(()=>[S(" Save or publish ")]),_:1}),e(q,{class:"mb-2"},{default:t(()=>[S(" Make your video public or private ")]),_:1}),e(J,null,{default:t(()=>[e(w,{"selected-radio":s(y),"onUpdate:selectedRadio":p[1]||(p[1]=n=>x(y)?y.value=n:null),"radio-content":u,"grid-column":{md:"6"}},null,8,["selected-radio"])]),_:1})]),_:1}),e(G,{value:"schedule"},{default:t(()=>[e(H,null,{default:t(()=>[S(" Schedule ")]),_:1}),e(q,{class:"mb-2"},{default:t(()=>[S(" Select a date to make your video public. ")]),_:1}),e(J,null,{default:t(()=>[e(U,{modelValue:s(v),"onUpdate:modelValue":p[2]||(p[2]=n=>x(v)?v.value=n:null),style:{width:"min-content"},config:{inline:!0,enableTime:!0,dateFormat:"Z"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),r("div",Oe,[e(C,{variant:"plain",color:"secondary",disabled:s(c)===0,onClick:p[5]||(p[5]=n=>c.value--)},{default:t(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),S(" "+f(b.$t("previous")),1)]),_:1},8,["disabled"]),s(h).length-1===s(c)?(l(),_(C,{key:0,"append-icon":"tabler-check",color:"success",onClick:D},{default:t(()=>[S(f(b.$t(s(o))),1)]),_:1})):(l(),_(C,{key:1,variant:"plain",onClick:d},{default:t(()=>[S(f(b.$t("next"))+" ",1),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})}}});typeof M=="function"&&M(Le);export{Le as default};