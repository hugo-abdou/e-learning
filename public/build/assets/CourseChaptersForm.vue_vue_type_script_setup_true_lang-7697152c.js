import{_ as K,a as Q}from"./FileUploaderDialog.vue_vue_type_script_setup_true_lang-7b25c490.js";import{_ as W}from"./InfoTooltip.vue_vue_type_script_setup_true_lang-2bad32a0.js";import{_ as X}from"./ActionButton-c35f54ff.js";import{d as Y,r as V,c8 as Z,a6 as ee,G as ae,o as v,c as F,b as a,f as l,q as r,b0 as le,z as te,F as x,j as oe,e as h,x as U,y as _,aj as P,h as g,bS as se,ba as re,t as E,bc as y,be as ne,bE as B,bF as D,b_ as ie,k as de,a0 as ue,c9 as pe}from"./main-dd42a7da.js";import{r as w}from"./validators-753247d6.js";import{M as me}from"./index-1f6eb7b0.js";import{u as ce}from"./useCourseStore-a9c88890.js";import{U as fe,s as ve}from"./utils-d59cd350.js";import{V as be,a as Ve,b as he,c as _e}from"./VExpansionPanel-edb6cb6a.js";import{V as ge}from"./VForm-a596e7af.js";import{V as ye}from"./VSpacer-837f6556.js";import{V as we}from"./VMenu-02af41c3.js";import{V as ke}from"./VList-dcf79c63.js";import{V as k,a as m}from"./VRow-fd71155e.js";import{V as C}from"./VTextField-5a655f9e.js";import{V as Ce}from"./VSelect-609e0bfd.js";import{V as $e}from"./VSwitch-f89b61fa.js";import{b as Te}from"./VInput-842a483e.js";const Fe={class:"text-truncate"},xe={class:"d-flex flex-column align-center"},Ue={class:"text-center"},Qe=Y({__name:"CourseChaptersForm",props:{chapters:{default:()=>[]},gridType:{default:"grid"}},setup(M,{expose:N}){const S=M,z=ce(),c=V(0),t=V(S.chapters),b=V({}),u=Z({open:!1,type:""}),$=ee(()=>{var e;return((e=t.value[c.value])==null?void 0:e.attachments.length)===0?{allowedFileTypes:["video/*"],maxNumberOfFiles:1}:u.type==="upload-chapter-attachment"?{allowedFileTypes:["image/*","application/pdf","video/*"],maxNumberOfFiles:3}:{allowedFileTypes:["*"],maxNumberOfFiles:1}});ae(()=>{t.value.length===0&&t.value.push({title:"",attachments:[],order:0,id:0})});const O=()=>{u.open=!1,u.type=null},A=e=>{u.open=!0,u.type=e},R=e=>{console.log(e),u.type==="upload-chapter-attachment"&&t.value[c.value].attachments.push(...e.map(o=>({...o,visibility:[],download:!1,watermark:""}))),O()},L=async e=>{const o=t.value[e];o.id&&await z.deleteChapter(o.id),t.value=t.value.filter((i,p)=>p!==e)},T=()=>new Promise(async(e,o)=>{for(let i=0;i<t.value.length;i++){c.value=i,await pe(100);const{valid:p}=await b.value.validate();if(!p)return ve(),o(new Error("validation faild"))}e("Ok")}),j=async()=>{try{await T(),t.value.push({title:"",attachments:[],order:t.value.length,id:0}),c.value++}catch{}},q=e=>{const o=[...t.value];o[e]=t.value[e-1],o[e-1]=t.value[e],t.value=o},I=e=>{const o=[...t.value];o[e]=t.value[e+1],o[e+1]=t.value[e],t.value=o};return N({formEl:b,validate:async()=>{try{return await T(),Promise.resolve(t.value)}catch(e){throw e}}}),(e,o)=>{const i=X,p=W,G=Q,H=K;return v(),F(x,null,[a(r(ge),{ref_key:"formEl",ref:b},{default:l(()=>[a(be,{modelValue:r(c),"onUpdate:modelValue":o[1]||(o[1]=n=>le(c)?c.value=n:null),class:te(r(t).length>1&&"no-icon-rotate"),variant:"default"},{default:l(()=>[(v(!0),F(x,null,oe(r(t),(n,f)=>(v(),g(Ve,{key:f},{default:l(()=>[a(he,null,se({default:l(()=>[a(re,{style:{"inline-size":"90%"},class:"text-capitalize d-flex pr-0"},{default:l(()=>[h("span",Fe,_(n.title||`Chapter ${f+1}`),1),a(ye)]),_:2},1024)]),_:2},[r(t).length>1?{name:"actions",fn:l(()=>[a(we,{transition:"speed-dial-left",location:"left center"},{activator:l(({props:s})=>[a(i,E({variant:"plain",color:"default"},s,{icon:"mdi-dots-vertical"}),null,16)]),default:l(()=>[a(ke,{class:"mr-1 px-2 d-flex gap-1 bg-background"},{default:l(()=>[a(i,{variant:"text",disabled:f===0,icon:"mdi-arrow-up",onClick:y(s=>q(f),["stop"])},null,8,["disabled","onClick"]),a(i,{variant:"text",disabled:f+1>=e.chapters.length,icon:"mdi-arrow-down",onClick:y(s=>I(f),["stop"])},null,8,["disabled","onClick"]),a(i,{variant:"text",icon:"tabler-trash",color:"error",onClick:y(s=>L(f),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),key:"0"}:void 0]),1024),a(_e,{class:"border-t"},{default:l(()=>[a(ne,{class:"mb-5"},{default:l(()=>[a(k,null,{default:l(()=>[a(m,{cols:"12",class:"mb-3"},{default:l(()=>[a(C,{modelValue:n.title,"onUpdate:modelValue":s=>n.title=s,rules:[r(w)],label:e.$t("chapter.fields.title.label")},null,8,["modelValue","onUpdate:modelValue","rules","label"])]),_:2},1024),a(G,{class:"w-100",items:n.attachments,grid:e.gridType==="grid"?{cols:"12",sm:"6"}:{cols:"12"}},{default:l(({item:s})=>[(v(),g(k,{key:e.gridType,class:"rounded-lg bg-background border w-100 ma-0"},{default:l(()=>[a(m,B(D(e.gridType==="list"?{cols:"12",md:"4"}:{cols:"12"})),{default:l(()=>[a(me,{media:s,deletable:"","is-preview":"","aspect-ratio":"2",onOnDelete:d=>n.attachments=n.attachments.filter(({id:J})=>J!==s.id)},null,8,["media","onOnDelete"])]),_:2},1040),a(m,B(D(e.gridType==="list"?{cols:"12",md:"8"}:{cols:"12"})),{default:l(()=>[a(k,null,{default:l(()=>[a(m,{cols:"12"},{default:l(()=>[a(C,{modelValue:s.name,"onUpdate:modelValue":d=>s.name=d,rules:[r(w)],label:e.$t("chapter.fields.title.label")},null,8,["modelValue","onUpdate:modelValue","rules","label"])]),_:2},1024),a(m,{cols:"12",md:"6"},{default:l(()=>[a(Ce,{modelValue:s.visibility,"onUpdate:modelValue":d=>s.visibility=d,items:["Public","Plan A","Plan B"],label:e.$t("chapter.fields.visibility.label"),rules:[r(w)],chips:"",multiple:""},{"append-inner":l(()=>[a(p,{text:e.$t("chapter.fields.visibility.description")},null,8,["text"])]),_:2},1032,["modelValue","onUpdate:modelValue","label","rules"])]),_:2},1024),a(m,{cols:"12",md:"6",class:"d-flex align-center gap-2"},{default:l(()=>[a($e,{modelValue:s.download,"onUpdate:modelValue":d=>s.download=d,label:e.$t("chapter.fields.download.label")},null,8,["modelValue","onUpdate:modelValue","label"]),a(p,{text:e.$t("chapter.fields.download.description")},null,8,["text"])]),_:2},1024),s.type===r(ie).pdf?(v(),g(m,{key:0,cols:"12"},{default:l(()=>[a(C,{modelValue:s.watermark,"onUpdate:modelValue":d=>s.watermark=d,label:e.$t("chapter.fields.watermark.label")},{"append-inner":l(()=>[a(p,{text:e.$t("chapter.fields.watermark.description")},null,8,["text"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):de("",!0)]),_:2},1024)]),_:2},1040)]),_:2},1024))]),_:2},1032,["items","grid"]),a(m,{cols:"12"},{default:l(()=>[a(p,{text:e.$t("media.upload.description")},{default:l(({props:s})=>[a(P,E({...s,...r(fe)},{style:{"block-size":"100%"},onClick:o[0]||(o[0]=d=>A("upload-chapter-attachment"))}),{default:l(()=>[h("div",xe,[a(ue,{icon:"fluent:document-add-16-regular",size:"32"}),a(Te,{class:"mt-2"},{default:l(()=>[U(_(e.$t("media.upload.label")),1)]),_:1})])]),_:2},1040)]),_:1},8,["text"])]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue","class"])]),_:1},512),h("div",Ue,[a(P,{class:"mt-5",variant:"tonal","append-icon":"tabler-plus",rounded:"pill",onClick:j},{default:l(()=>[U(_(e.$t("Add Chapter")),1)]),_:1})]),a(H,{"is-dialog-visible":r(u).open,"onUpdate:isDialogVisible":o[2]||(o[2]=n=>r(u).open=n),"allowed-file-types":r($).allowedFileTypes,"max-number-of-files":r($).maxNumberOfFiles,onDone:R},null,8,["is-dialog-visible","allowed-file-types","max-number-of-files"])],64)}}});export{Qe as _};
